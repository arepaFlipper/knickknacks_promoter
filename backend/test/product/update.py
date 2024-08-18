import requests

# API base URL (change this if your server runs on a different host/port)
BASE_URL = "http://localhost:3000"

# The ID of the product to update
PRODUCT_ID = 1

# Define the payload with the changes you want to make
update_data = {
    "name": "Updated Product Name",
    "description": "This is the updated description for the product.",
    "price": 149.99,
    "vendorId": 1  
}

# Send the PATCH request to update the product
response = requests.patch(f"{BASE_URL}/product/{PRODUCT_ID}", json=update_data)

# Check if the request was successful
if response.status_code == 200:
    print("Product updated successfully!")
    print("Updated Product Data:", response.json())
else:
    print(f"Failed to update product. Status code: {response.status_code}")
    print("Response:", response.json())

