---
title: Selecting Rows
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
    - website_url: https://github.com/noeyislearning
---

# Selecting Rows

In your data analysis journey, there will be times when you need to zero in on specific rows and columns within a DataFrame. This is where the methods `.loc[]` and `.iloc[]` come into play. Let's explore how these tools work, using a simple example to illustrate their differences and practical applications.

Imagine you have a mini-DataFrame `df` that looks like this:

|     | Make   | Year |
| --- | ------ | ---- |
| 0   | Ford   | 2017 |
| 1   | Ford   | 2022 |
| 2   | Toyota | 2019 |
| 3   | Toyota | 2020 |

Before diving into `.loc[]` and `.iloc[]`, let's sort this DataFrame by the `Year` column for clarity. After sorting, the DataFrame appears as follows:

|     | Make   | Year |
| --- | ------ | ---- |
| 1   | Ford   | 2022 |
| 3   | Toyota | 2020 |
| 2   | Toyota | 2019 |
| 0   | Ford   | 2017 |

Notice that the index is now out of order. This detail will become important as we proceed.

## Selecting Rows with `.loc[]`

The `.loc[]` method selects data based on the index labels. The syntax for `.loc[]` is straightforward:

```python
df.loc[list_of_row_labels, list_of_column_labels]
```

Let's say you want to select rows with index labels 0 and 3 and only the Make column. You'd write:

```python
df.loc[[0, 3], 'Make']
```

The selection looks like this:

|     | Make   |
| --- | ------ |
| 0   | Ford   |
| 3   | Toyota |

Here's how it works:

- `[0, 3]` tells `.loc[]` to select the rows with labels 0 and 3.
- `['Make']` tells `.loc[]` to select only the Make column.

## Selecting Rows with `.iloc[]`

The `.iloc[]` method, on the other hand, selects data based on the integer position of rows and columns. Its syntax is similar to `.loc[]`, but it uses positions instead of labels:

```python
df.iloc[list_of_row_positions, list_of_column_positions]
```

Suppose you want to select the first and fourth rows (by position) and only the first column. Your code would be:

```python
df.iloc[[0, 3], [0]]
```

This gives you:

|     | Make |
| --- | ---- |
| 1   | Ford |
| 0   | Ford |

Here's the breakdown:

- `[0, 3]` tells `.iloc[]` to select the first and fourth (position 3) rows.
- `[0]` tells `.iloc[]` to select the first column.

## A Common Pitfall: Off-by-One Errors

When using `.iloc[]`, it's easy to fall into the trap of off-by-one errors. This happens when you mistakenly start counting positions at 1 instead of 0. For example, you might write `[1, 4]` to select the first and fourth rows, but this would actually select the second and fifth rows. Always double-check your positions to avoid this common mistake.

## Conclusion

`.loc[]` and `.iloc[]` are powerful tools for selecting rows and columns in a DataFrame. By understanding the differences between these methods, you can confidently extract the data you need for your analysis. Remember to pay close attention to the index labels and positions to avoid errors and ensure accurate results.
