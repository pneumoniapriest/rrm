import requests
from bs4 import BeautifulSoup
import codecs
import sys
import time

#Setting the console encoding to UTF-8 
sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())

# URL of the website to crawl
base_url = 'https://shots.filmschoolrejects.com/'
shots_url = base_url + 'page/{}/'

# Number of pages to crawl
pages = [22, 24, 25, 27, 28, 29, 31, 32, 34, 35, 38, 40, 43, 44, 46, 47, 49, 63, 65, 66, 67, 69, 70, 71, 73, 74, 75, 77, 78, 80, 81, 83, 84, 85, 88, 90, 91, 92, 95, 96, 98, 99, 101, 102, 104, 105, 107, 108, 110, 111, 112, 113, 114, 115, 116, 119, 120, 121, 122, 123, 124, 125, 126, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 199, 201, 203, 205, 206, 207, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 221, 222, 223, 224, 225, 226, 227, 228, 229]

# List to store the extracted data (image links and titles)
data = []

# Crawl the website
for page in pages:
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
    if fail_count==10:
        # print(str(page)+":"+str(fail_count))
        data.append(page)

print(len(data)==len(pages))