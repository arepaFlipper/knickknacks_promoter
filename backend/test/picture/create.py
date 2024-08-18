import requests

# Assuming the product ID and vendor ID are known, replace with actual IDs
product_id = 1
vendor_id = 1

# Set up the URL and the picture data
url = "http://localhost:3000/picture"
picture_data = {
    "imagePath": "uploads/sample_image.jpg",
    "coordinates": {"x1": 10, "y1": 20, "x2": 30, "y2": 40},
}

# Make the POST request to create the picture
response = requests.post(url, json=picture_data)

# Print the response
if response.status_code == 201:
    print("Picture created successfully:", response.json())
else:
    print("Failed to create picture:", response.status_code, response.text)

