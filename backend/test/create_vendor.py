import requests

# Set up the URL and the vendor data
url = "http://localhost:3000/vendor"
vendor_data = {
    "name": "Sample Vendor",
    "description": "This is a sample vendor.",
    "contactEmail": "vendor@example.com"
}

# Make the POST request to create the vendor
response = requests.post(url, json=vendor_data)

# Print the response
if response.status_code == 201:
    print("Vendor created successfully:", response.json())
else:
    print("Failed to create vendor:", response.status_code, response.text)

