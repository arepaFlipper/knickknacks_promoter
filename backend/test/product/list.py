import requests


# Set up the URL and the product data
url = "http://localhost:3000/product"

# Make the POST request to create the product
response = requests.get(url)

# Print the response
if response.status_code == 200:
    print("List of products:\n", response.json())
else:
    print("Failed to create product:", response.status_code, response.text)
