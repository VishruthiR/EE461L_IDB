#!/usr/bin/python
import sys
import os

directory = "/Users/jainovennatt/Documents/UT/EE461L/EE461L_IDB/backEndScripts/newAuthorLists/"
pruneDirectory = "/Users/jainovennatt/Documents/UT/EE461L/EE461L_IDB/backEndScripts/newAuthorListsPruned/"
for filename in os.listdir(directory):
    print (filename)
    print(os.path.join(directory, filename))

    file = open(pruneDirectory+filename, 'w')

    with open(directory+filename, "r") as a_file:
        for line in a_file:
            newString= ""
            for character in line:
                if(character != ',' and character != '('):
                    newString = newString + character
                else:
                    break
            file.write(newString)
            file.write('\n')
            print(newString)


# file = open(newStringName,'w')
