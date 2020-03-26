import sys
import pymongo
import requests
import json

print('Author List Name:', str(sys.argv[1]))
fileName = sys.argv[1]


with open(fileName, "r") as a_file:
    for line in a_file:
        authorName=line.rstrip("\n")
        #authorName='inauthor:'+authorName

        # url= 'https://www.googleapis.com/books/v1/volumes?'
        # resultsSection='maxResults=10&'
        # authorSection='q=inauthor:'+ authorName
        # fieldsSection= '&fields=totalItems,items(volumeInfo(title,authors,publisher,publishedDate,description,industryIdentifiers,'
        # fieldsSection2= 'pageCount,categories,averageRating,imageLinks),saleInfo(listPrice(amount)))'
        # languageRestriction='&langRestrict=en'

        url= 'https://www.googleapis.com/books/v1/volumes'

        params = dict(
            maxResults = '1',
            langRestrict = 'en',
            q= 'inauthor:'+authorName,
            fields= 'totalItems,items(volumeInfo(title,authors,publisher,publishedDate,description,industryIdentifiers,pageCount,categories,averageRating,imageLinks),saleInfo(listPrice(amount)))'
        )

        x = (requests.get(url=url, params=params))
        jsonData=json.loads(x.text)
        json_formatted_str = json.dumps(jsonData, indent=2)
        print(json_formatted_str)
        break
