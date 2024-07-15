---
title: Methods
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
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# Methods

In Python, each type of variable has its own set of built-in tools called methods. These methods allow you to perform specific actions on the data, making your coding more efficient and readable. Think of methods as special powers your variables have—each one designed to help you manipulate and interact with your data in unique ways.

## What are Methods?

Methods are functions that are associated with an object. You can think of them as commands you give to your variables. For example, if you have a list and you want to add an item to it, you use the .append() method. Or, if you're working with a DataFrame (a table of data) in pandas, and you want to see the first few rows, you use the .head() method.

Here's a quick recap of those two methods:

- `.head()`: Displays the first five rows of a DataFrame.
- `.append()`: Adds a new element to a list.

Using a method is often referred to as "calling the method" or "applying the method." This simply means you're executing the method on a particular object.

## Customizing Methods with Keyword Parameters

Many methods come with keyword parameters that you can adjust to change how the method behaves. For example, the `.head()` method displays 5 rows of a DataFrame by default, but you can tell it to display a different number of rows by using the `n` parameter.

```python
DataFrame.head(n=10)
```

However, including the parameter name is often a good habit. It makes your code clearer, which is helpful for others reading your code or for yourself when you revisit it later.

## Understanding Attributes

In addition to methods, Python variables have attributes. Attributes are like built-in properties that store information about the object. They don't perform actions like methods do, but they hold important data.

For instance, in a DataFrame, the attribute `.dtypes` contains the data types of each column. Unlike methods, attributes don't have parentheses because they don't take parameters—they're just data holders.

Here's a quick comparison:

- **Methods**: Perform tasks and usually return an output. They require parentheses.
- **Attributes**: Store information about an object. They do not require parentheses.

## Putting It All Together

Let's say you're working with a DataFrame and you want to get a quick look at the first few rows and understand the types of data each column holds. You'd use a combination of a method and an attribute:

```python
print(DataFrame.head(10))  # Method: shows the first 10 rows
print(DataFrame.dtypes)    # Attribute: shows the data types of the columns
```

In this example, the `.head()` method is used to display the first 10 rows of the DataFrame, and the `.dtypes` attribute is used to display the data types of each column.

## Conclusion

Understanding and utilizing methods and attributes effectively can greatly enhance your Python programming. Methods help you perform actions on your data, while attributes provide useful information about your data. By learning how to use both, you can write clearer, more efficient, and more readable code.
