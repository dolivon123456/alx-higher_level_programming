#!/usr/bin/python3

"""Module contains function that list all available attributes and methods of an object"""

def lookup(obj):
    """function that returns the list of available attributes and methods of an object"
    return dir(obj)
