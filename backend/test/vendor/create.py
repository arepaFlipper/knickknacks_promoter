import requests

# Assuming the vendor ID is known, replace with actual vendor ID
vendor_id = 1

# Set up the URL and the vendor data
url = "http://localhost:3000/vendor"
vendor_data = {
    "name": "Sample vendor",
    "description": "This is a sample vendor.",
    "price": 19.99,
    "vendorId": vendor_id,
    "userId": 1  # Replace with actual user ID if needed
}

# Make the POST request to create the vendor
response = requests.post(url, json=vendor_data)

# Print the response
if response.status_code == 201:
    print("vendor created successfully:", response.json())
else:
    print("Failed to create vendor:", response.status_code, response.text)
