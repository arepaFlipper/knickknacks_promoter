import requests

# API base URL (change this if your server runs on a different host/port)
BASE_URL = "http://localhost:3000"

# The ID of the picture to update
PICTURE_ID = 1

product_id = 1
vendor_id = 1

# Define the payload with the changes you want to make
update_data = {
    "imagePath": "uploads/updated_image.jpg",
    "coordinates": {"x1": 10, "y1": 20, "x2": 30, "y2": 40},
    "productId": product_id,
    "vendorId": vendor_id,
    "userId": 1  # Replace with actual user ID if needed
}

# Send the PATCH request to update the picture
response = requests.patch(f"{BASE_URL}/picture/{PICTURE_ID}", json=update_data)

# Check if the request was successful
if response.status_code == 200:
    print("Picture updated successfully!")
    print("Updated Picture Data:", response.json())
else:
    print(f"Failed to update picture. Status code: {response.status_code}")
    print("Response:", response.json())

