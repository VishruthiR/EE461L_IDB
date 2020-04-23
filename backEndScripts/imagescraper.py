import sys
import pymongo
import ssl
import requests
import json
from pymongo import MongoClient
from bs4 import BeautifulSoup

import shutil


url= 'https://openlibrary.org/api/books'

client = MongoClient("mongodb+srv://dbUser:jaino@cluster0-y12qq.gcp.mongodb.net/test?retryWrites=true&w=majority",ssl=True, ssl_cert_reqs=ssl.CERT_NONE)
db=client['bookAppData']
isbnNumber = 9780756404741
books=db.books

authorImages = db.authorImages
authorsImageFound=[]

currentBookNumber=24000
cursor = books.find(no_cursor_timeout=True).skip(currentBookNumber)
for book in cursor:
    print(currentBookNumber)
    currentBookNumber=currentBookNumber+1
    currentAuthorName= ((book['volumeInfo'])['authors'])
    if(currentAuthorName in authorsImageFound):
        continue


    isbnValue=(((book['volumeInfo'])['industryIdentifiers'])['identifier'])
    isbnParameter="ISBN:"+isbnValue
    #print(isbnParameter)
    params = dict(
        bibkeys = isbnParameter,
        jscmd = 'data',
        format = 'json'
    )

    request =(requests.get(url=url, params=params))
    jsonData=json.loads(request.text)
    if jsonData:
        try:
            urlAuthorPageValue = ((((jsonData[isbnParameter])['authors'])[0])['url'])
            responseForImage=requests.get(urlAuthorPageValue)
            #urlAuthorPageValue=""
            soup = BeautifulSoup(responseForImage.text, "html.parser")
            aas = soup.find_all("meta", {"property" : "og:image"})
            img_url = aas[0].get('content')
            print(currentAuthorName)
            print(img_url)
            authorImage = {"author" : currentAuthorName,
                        "imageLink" : img_url
                        }
            authorImages.insert_one(authorImage)

            print('\n')
        except KeyError:
            continue


        authorsImageFound.append(currentAuthorName)



    else:

        continue
    #json_formatted_str = json.dumps(jsonData, indent=2)

    #print(json_formatted_str)
cursor.close()