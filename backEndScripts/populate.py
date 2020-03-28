import sys
import pymongo
import requests
import json

url= 'https://www.googleapis.com/books/v1/volumes'
print('Author List Name:', str(sys.argv[1]))
fileName = sys.argv[1]
genre = sys.argv[2]

with open(fileName, "r") as a_file:
    numberOfBooksAdded=0

    for line in a_file:                         #checking list of Authors

        authorName=line.rstrip("\n")
        params = dict(
            maxResults = '1',
            langRestrict = 'en',
            q= 'inauthor:'+ authorName,
            fields= 'totalItems,items(volumeInfo(title,authors,publisher,publishedDate,description,industryIdentifiers,pageCount,categories,averageRating,imageLinks),saleInfo(listPrice(amount)))'
        )
        request = (requests.get(url=url, params=params))
        jsonData=json.loads(request.text)
        totalNumberOfBooks = jsonData['totalItems']
        #print(totalNumberOfBooks)
        print('Author Name:' ,authorName)

        bookIndex =0
        while(bookIndex < totalNumberOfBooks):
            if bookIndex==10:
                break
            params = dict(
                    startIndex = bookIndex,
                    maxResults = '10',
                    langRestrict = 'en',
                    inauthor = authorName,
                    subject = 'Fiction',
                    q= authorName,
                    fields= 'totalItems,items(volumeInfo(title,authors,publisher,publishedDate,description,industryIdentifiers,pageCount,categories,averageRating,imageLinks),saleInfo(listPrice(amount)))'
            )
            request =(requests.get(url=url, params=params))
            jsonData=json.loads(request.text)
            totalNumberOfBooks = jsonData['totalItems']
            currentBooks= jsonData['items']

            for y in range(bookIndex, bookIndex+10,1):
                if(bookIndex == totalNumberOfBooks):
                    break
                elif(bookIndex == 10):
                    break
                indexOfCurrentBookInLoop=y-bookIndex
                book=currentBooks[indexOfCurrentBookInLoop]
                innerbook= book['volumeInfo']
                if('industryIdentifiers' in innerbook and 'imageLinks' in innerbook) :
                    if('authors'not in innerbook):
                        continue
                    authors=innerbook['authors']
                    if(authorName not in authors):
                        continue
                    innerbook['authors']=authorName

                    alreadyHadRating = 1
                    if('averageRating' not in innerbook):
                       (book['volumeInfo'])['averageRating'] = 0.0
                       alreadyHadRating= 0

                    if(alreadyHadRating==1):
                        (book['volumeInfo'])['numberOfRatings'] = 10.0
                    elif(alreadyHadRating==0):
                        (book['volumeInfo'])['numberOfRatings'] = 0.0

                    print(innerbook['averageRating'], 'and quantity:', innerbook['numberOfRatings'])
                    val=(innerbook['industryIdentifiers'])[0]
                    secondvalue =val['type']

                    if(secondvalue == 'ISBN_10' or secondvalue == 'ISBN_13'):

                        if(secondvalue=='ISBN_10'):
                            innerbook['industryIdentifiers']=(innerbook['industryIdentifiers'])[1]

                        elif(secondvalue=='ISBN_13'):
                            innerbook['industryIdentifiers']=(innerbook['industryIdentifiers'])[0]

                        (book['volumeInfo'])['genre'] = genre

                        json_formatted_str = json.dumps(book, indent=2)
                        numberOfBooksAdded=numberOfBooksAdded+1
                        print('Current number of Books: ', numberOfBooksAdded)
                        print(json_formatted_str)
                        #print('\n\n')
            #print('\n')


            bookIndex=bookIndex+10
