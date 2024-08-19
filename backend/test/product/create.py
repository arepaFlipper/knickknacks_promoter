import requests

# Assuming the vendor ID is known, replace with actual vendor ID
vendor_id = 5

# Set up the URL and the product data
url = "http://localhost:3000/product"
product_data = {
    "name": "Sample Product",
    "description": "This is a sample product.",
    "price": 19.99,
    "vendorId": vendor_id,
    "userId": 1  # Replace with actual user ID if needed
}

# Make the POST request to create the product
response = requests.post(url, json=product_data)

# Print the response
if response.status_code == 201:
    print("Product created successfully:", response.json())
else:
    print("Failed to create product:", response.status_code, response.text)
