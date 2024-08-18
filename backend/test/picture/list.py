import requests


# Set up the URL and the picture data
url = "http://localhost:3000/picture"

# Make the POST request to create the picture
response = requests.get(url)

# Print the response
if response.status_code == 200:
    print("List of pictures:\n", response.json())
else:
    print("Failed to create picture:", response.status_code, response.text)
