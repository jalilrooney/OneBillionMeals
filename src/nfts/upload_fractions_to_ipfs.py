import requests
from pprint import pprint
import json

url = "https://api.nftport.xyz/v0/files"
headers = {
    'Authorization': "77f1fb22-ecb9-4b6a-9346-7dc1acf8af6f",
    }

responses = []
urls = []
for i in range(26, 503):
    with open(f"./oneBillionMeals/oneBillionMeals-{i}.png", "rb") as f:
        while True:
            print(i)
            try:
                file = f.read()
                response = requests.request("POST", url, files={"file": file}, headers=headers, timeout=10)
                if response.json()["response"] == "NOK":
                    print(response.json())
                    raise Exception()
                responses.append(response.json())
                if response.json()['ipfs_url'] in urls:
                    print("kkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
                    raise Exception
                urls.append(response.json()['ipfs_url'])
                print(response.json()['ipfs_url'])
                break
            except Exception as e:
                pass

print(responses)
print()
print(urls)
with open("fracts_upload.json", "w") as fu:
    json.dump(responses, fu, indent=2)
