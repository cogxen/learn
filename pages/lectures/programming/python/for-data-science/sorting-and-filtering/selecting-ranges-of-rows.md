---
title: Selecting Ranges of Rows
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

# Selecting Ranges of Rows

When working with data, there’s a good chance you’ll need to select specific rows and columns. Pandas, a powerful data manipulation library in Python, offers you elegant ways to do this with its `.loc` and `.iloc` methods. This guide will walk you through the process of selecting ranges of rows and columns, making your data handling more efficient and intuitive.

## Using `.iloc` for Integer-Position Based Selection

Let’s start with `.iloc`, which allows you to select rows and columns based on their integer positions. Imagine you have a DataFrame and you want to select the first five rows. You could list each row index individually:

```python
df.iloc[[0, 1, 2, 3, 4], :]
```

However, there's a simpler and more efficient way to do this using slices. Slicing is like telling Pandas, “Give me everything from this starting point up to (but not including) this ending point.” The syntax looks like this:

```python
start_position:stop_position
```

Here’s what each part means:

- `start_position`: The index where you start your selection.
- `stop_position`: The index where you stop, which is not included in the selection.

For instance, if you want the first five rows, you use the slice `0:5`:

```python
df.iloc[0:5, :]
```

This slice includes rows at positions 0, 1, 2, 3, and 4.

Consider this DataFrame `vehicles`:

| id   | model                         | year | transmission |
| ---- | ----------------------------- | ---- | ------------ |
| 1940 | amg e53 4matic+ (convertible) | 2022 | auto         |
| 718  | avalanche ffv                 | 2007 | auto         |
| 1663 | impala                        | 2010 | auto         |
| 1581 | yukon xl ffv                  | 2004 | auto         |

You want to select the first three rows and the columns `model`, `year`, and `transmission`. Here’s how you do it:

1. Rows: Start at the first row (`0`) and stop before the fourth row (`3`):

```python
rows = 0:3
```

This includes rows 0, 1, and 2.

2. Columns: Start at the second column (`1`) and stop before the fifth column (`4`):

```python
columns = 1:4
```

This includes columns 1, 2, and 3.

Combining these slices, you get:

```python
df.iloc[0:3, 1:4]
```

## Using `.loc` for Label-Based Selection

Unlike `.iloc`, `.loc` uses labels to select rows and columns. The slicing syntax here is:

```python
start_label:stop_label
```

In this case, both the `start_label` and `stop_label` are included in the selection.

Using the same `vehicles` DataFrame, suppose you want to select the first three rows and the columns from `model` to `transmission`:

1. Rows: The first three rows are labeled `1940`, `718`, and `1663`. The slice is:

```python
rows = 1940:1663
```

This includes rows 1940, 718, and 1663.

2. Columns: Start at `model` and end at `transmission`:

```python
columns = 'model':'transmission'
```

This includes columns `model`, `year`, and `transmission`.

Combining these slices, you get:

```python
df.loc[1940:1663, 'model':'transmission']
```

## Open-Ended Slices

Sometimes, you might not want to specify a start or end point. Open-ended slices make this easy:

- **Start at the beginning**: Omitting the start value makes the slice start from the first position or label:

  ```python
  df.iloc[:3, :]
  ```

  This selects rows 0, 1, and 2 and all columns.

- **End at the last position**: Omitting the end value makes the slice go to the last position or label:

  ```python
  df.iloc[3:, :]
  ```

  This selects the year column and all columns to the right of it.

- **Select everything**: Omitting both start and end values includes all rows and columns:

  ```python
  df.iloc[:, :]
  ```

  This selects all rows and columns.

## Conclusion

Understanding how to select specific ranges of rows and columns using Pandas' `.iloc` and `.loc` methods can significantly enhance your data manipulation skills.

- **With `.iloc`**, you use integer positions to define your slices. It's precise and straightforward when working with numeric indices.
- **With `.loc`**, you use labels, making it intuitive and clear, especially when dealing with DataFrames with meaningful row and column names.
- **Open-ended slices** provide flexibility, allowing you to include all elements from a certain point onward or everything within the DataFrame.

Mastering these techniques will make your data handling more efficient and your code cleaner. Keep practicing, and you’ll find these slicing methods becoming second nature.
