import requests


# Set up the URL and the vendor data
url = "http://localhost:3000/vendor"

# Make the POST request to create the vendor
response = requests.get(url)

# Print the response
if response.status_code == 200:
    print("List of vendors:\n", response.json())
else:
    print("Failed to create vendor:", response.status_code, response.text)
