#!/usr/bin/python
import sys
print('File Name:', str(sys.argv[1]))
originalStringName = sys.argv[1]
newStringName = 'pruned'
newStringName = newStringName + originalStringName
print('New File Name:' , newStringName)

file = open(newStringName,'w')

with open(originalStringName, "r") as a_file:
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
