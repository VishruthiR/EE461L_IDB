#!/usr/bin/env python3

g = input("Enter file name : ") 

f=open(g, "r")
contents=f.readlines()
for x in contents:
    print (x)