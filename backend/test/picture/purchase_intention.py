import requests

# Assuming the product ID and vendor ID are known, replace with actual IDs
# Set up the URL and the picture data
url = "http://localhost:3000/picture/intention"
idx = 7
picture_data = {
  "userId": idx,
  "pictureId": idx,
}

# Make the POST request to create the picture
response = requests.post(url, json=picture_data)

# Print the response
if response.status_code == 201:
    print("Picture created successfully:", response.json())
else:
    print("Failed to create picture:", response.status_code, response.text)

