import requests
from bs4 import BeautifulSoup
import json

def fetch_data(url):
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        table = soup.find('table')

        if table:
            data = []
            headers = [header.text.strip() for header in table.find_all('th')]

            for row in table.find_all('tr')[1:]:
                row_data = [cell.text.strip() for cell in row.find_all('td')]
                entry = dict(zip(headers, row_data))
                data.append(entry)

            return data
        else:
            print("No table found on the website.")
            return None
    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")
        return None

def save_to_json(data, filename):
    with open(filename, 'w') as file:
        json.dump(data, file, indent=2)

if __name__ == "__main__":
    website_url = 'https://calendarmalaysia.com/public-holidays-2024/'
    output_filename = 'output.json'

    fetched_data = fetch_data(website_url)

    if fetched_data:
        save_to_json(fetched_data, output_filename)
        print(f"Data successfully fetched and saved to {output_filename}")
