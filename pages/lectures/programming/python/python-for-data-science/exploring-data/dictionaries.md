---
title: Dictionaries
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

# Dictionaries

Imagine you have a dataset of repair records for various tech products: 4139 laptops, 2265 mobiles (cell phones), and 704 desktop computers. You want to record this information efficiently. One way to do this is using a list:

```python
tech = [4139, 2265, 704]
```

However, this approach requires you to remember the order of the numbers. To avoid this hassle, you can use a more organized structure: a Python dictionary.

## What is a Dictionary?

A dictionary in Python is like a real-life dictionary, but instead of words and their definitions, you have keys and values. Each entry in a dictionary is a key-value pair. For example, in our dataset, 'laptops' is a key, and 4139 is the value associated with it. Here’s how you can visualize it:

```python
'laptops': 4139
```

In this case, the key is a string ('laptops'), and the value is a number (4139). But dictionaries are versatile; both keys and values can be of any data type.

## Creating a Dictionary

To create a complete dictionary, you use curly braces `{}` to enclose your key-value pairs, separated by commas. Here’s what our tech repair dataset looks like as a dictionary:

```python
tech = {
  'laptops': 4139,
  'mobiles': 2265,
  'desktop computers': 704
}
```

While you could write this all on one line, breaking it into multiple lines makes it easier to read and manage.

## Accessing Values in a Dictionary

Accessing the value associated with a key is straightforward. You use the key inside square brackets. For instance, to get the number of mobiles repaired, you would do:

```python
tech['mobiles']
```

This code will output `2265`.

## Modifying a Dictionary

Dictionaries are not just for storing data; they’re also flexible enough to be updated easily. Suppose another laptop is repaired. You can update the count for laptops like this:

```python
tech['laptops'] = 4140
```

If you need to add a new category, such as video game consoles, you can do so simply by assigning a value to a new key:

```python
tech['game consoles'] = 191
```

## Conclusion

Dictionaries in Python are a powerful tool for organizing and managing data efficiently. They store data in key-value pairs, making it easy to access, update, and expand your dataset without worrying about the order of elements. Whether you’re keeping track of tech repairs or any other data, dictionaries provide a clear and flexible way to handle information.

By understanding and using dictionaries, you gain the ability to store and manipulate data more intuitively and effectively.
