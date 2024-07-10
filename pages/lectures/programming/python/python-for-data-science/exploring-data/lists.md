---
title: Lists | Lectures | Cogxen
description: Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.
head:
  - - meta
    - name: description
    - content: Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.
  - - meta
    - name: keywords
      content: data data science machine learning AI data analysis data-driven data enthusiasts data practitioners
lastUpdated: false
editLink: false
footer: false
prev: false
next: false
status: wip
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# Lists

When diving into data science, you'll often find yourself handling various types of data storage. Two essential Python variable types you’ll use are lists and dictionaries. Understanding these will be your foundation as you progress in data analytics. Let's focus on lists first.

## Defining Lists

A list in Python is a versatile data structure that can store multiple items. You define a list using square brackets. For example:

```python
numbers = [4, 4, 5]
```

Here, `numbers` is a list containing three integer elements. Lists are always enclosed in square brackets `[ ]`, with each element separated by a comma `,`.

Interestingly, lists in Python are not restricted to a single data type. You can mix different types within the same list:

```python
numbers_and_strings = [4, "four", 5.0]
```

In this example, the list `numbers_and_strings` contains an integer, a string, and a float.

## Accessing List Elements

To make lists useful, you need to know how to access their elements. Let’s say you have a list of product categories:

```python
product_categories = ['laptops', 'desktop computers', 'tablets']
```

This list contains three string elements. In everyday language, you might say that "laptops" is the first element. However, in Python, indexing starts at 0. So, "laptops" is at index 0, "desktop computers" is at index 1, and "tablets" is at index 2.

To access an element, you use the list name followed by the index in square brackets:

```python
product_categories[1]
```

This code will output `'desktop computers'`.

## Modifying List Elements

Lists are mutable, meaning you can change their elements. Suppose you want to change "desktop computers" to "desktops":

```python
product_categories[1] = 'desktops'
```

This reassigns the value at index 1.

## Adding Entries to a List

You might want to expand your list by adding new elements. There are two primary ways to do this.

1. **Manual Assignment**: Directly assign a new value at the next index.

```python
product_categories[3] = 'mobile phones'
```

However, this method can be error-prone and is not commonly used.

2. **Using `.append()`**: A more straightforward and preferred method is to use the `append` method.

```python
product_categories.append('mobile phones')
```

This method adds the new element to the end of the list, regardless of its current length. Here's the updated list:

```python
['laptops', 'desktops', 'tablets', 'mobile phones']
```

## Finding the Length of a List

Knowing the number of elements in a list is often crucial. Python provides a built-in function `len()` for this purpose:

```python
len(product_categories)
```

After adding "mobile phones," this code will return `4`.

## Conclusion

Understanding lists in Python is essential for data manipulation and storage. Lists allow you to store sequences of elements, access and modify them, and even expand the list dynamically. By mastering these basic operations, you set a strong foundation for more complex data handling tasks in your data science journey.

Remember, a list in Python is like a flexible container that can grow and adapt as your needs change. Keep practicing these concepts, and you'll find working with lists to be an intuitive and powerful part of your programming toolkit.
