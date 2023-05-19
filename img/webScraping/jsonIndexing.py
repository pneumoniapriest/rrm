import json

# Read the JSON file
with open('image_data.json', 'r') as file:
    shotsData = json.load(file)

# Create an index dictionary
index = {}

# Build the index
for i, set in enumerate(shotsData, 1):
    index[i] = set  # Assuming 1-based index

# Save the index as a separate JSON file
with open('shots_index.json', 'w') as file:
    json.dump(index, file)
