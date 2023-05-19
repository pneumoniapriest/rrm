import requests
from bs4 import BeautifulSoup
import codecs
import sys
import json

#Setting the console encoding to UTF-8 
sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())

# URL of the website to crawl
base_url = 'https://shots.filmschoolrejects.com/'
shots_url = base_url + 'page/{}/'

# Number of pages to crawl
num_pages = 230
data = []

# Crawl the website
for page in range(2,num_pages+1):
    url = shots_url.format(page)
    
    # Send a GET request to the webpage
    response = requests.get(url)
    
    # if page%10==0:
    #     time.sleep(5)
    
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find all the tiles
    tiles = soup.find_all('div', class_='col-md-4 post-card')
    
    # Extract image links and titles from each tile
    i=1
    fail_count=0
    while len(tiles)==0 and fail_count<10:
        fail_count+=1
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        tiles = soup.find_all('div', class_='col-md-4 post-card')

    for tile in tiles:
        image_tag = tile.find('img')
        image_link = image_tag['src']
        
        # Extract the title (alt text)
        title = image_tag['alt']
        
        # Add the image link and title to the list
        data.append({
            'image_link': image_link,
            'title': codecs.decode(title, 'unicode_escape')
        })

# Save the data to a text file

2