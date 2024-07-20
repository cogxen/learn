---
title: Sorting Rows
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

# Sorting Rows

When you're diving into a dataset, things can get a bit chaotic if the rows aren't in a predictable order. Imagine looking at a vehicles dataset where car models are listed randomly—it would be so much more manageable if they were arranged chronologically. This is where sorting comes into play. By sorting the rows in a DataFrame, you can make the data much easier to analyze and understand.

## Sorting Rows by Column Values

To sort rows in a DataFrame using pandas, you use the .sort_values() method. This method helps you arrange your data by the values in a specific column. Here's the basic syntax:

```python
df = df.sort_values(by='Column')
```

- `.sort_values()` is a method that belongs to a DataFrame. It's like a function that works specifically with DataFrames.
- The `by` parameter is where you specify the column you want to sort by. For instance, if you have a column named "Year," you would use `by='Year'`.

By default, `.sort_values()` will sort your data from the lowest value to the highest. For text, it sorts alphabetically from A to Z. But what if you want the opposite? What if you need the highest values first or Z to A? You can achieve this by setting the `ascending` parameter to `False`:

```python
df = df.sort_values(by='Column', ascending=False)
```

Let's put this into context with a small DataFrame of vehicle models and their years:

**Original DataFrame:**

| Make   | Year |
| ------ | ---- |
| Ford   | 2022 |
| Toyota | 2019 |
| Ford   | 2017 |
| Toyota | 2020 |

If you sort this DataFrame by the "Year" column in descending order, you would write:

```python
df = df.sort_values(by='Year', ascending=False)
```

**Sorted DataFrame:**

| Make   | Year |
| ------ | ---- |
| Ford   | 2022 |
| Toyota | 2020 |
| Toyota | 2019 |
| Ford   | 2017 |

Notice how the rows are now ordered with the most recent model at the top and the oldest at the bottom. This sorted structure can make it much easier to see trends and compare data.

## Sorting Rows by Index

Sometimes, you might want to sort the rows based on the index rather than a specific column. For this, you use the `.sort_index()` method. Unlike `.sort_values()`, you don't need to specify a column to sort by because it automatically sorts by the index.

Here's the syntax:

```python
df = df.sort_index()
```

Just like with `.sort_values()`, you can control the order with the `ascending` parameter:

```python
df = df.sort_index(ascending=False)
```

## Why Sort by Index?

Sorting by index can be particularly useful if your index has a meaningful order. For instance, if your index is a series of dates, sorting by index can quickly arrange your data chronologically.

## Conclusion

Sorting your DataFrame, whether by column values or index, is a powerful way to make your data more organized and easier to analyze. With the .sort_values() method, you can quickly arrange rows based on the values in any column, while .sort_index() lets you sort rows based on the index. These tools can help you transform a chaotic dataset into a clear and structured one, making your data exploration much smoother and more insightful.
