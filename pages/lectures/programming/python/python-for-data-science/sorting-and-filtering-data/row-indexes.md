---
title: Row Indexes
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

# Row Indexes

In a DataFrame, both rows and columns have labels called indexes. Think of indexes as unique identifiers for each row and column. Rows in a DataFrame are usually labeled with numbers (like 0, 1, 2, etc.), while columns are labeled with descriptive text (such as "id," "model," "year," etc.). Whenever we refer to "the index" of a DataFrame, we're specifically talking about the row index.

## Default Row Indexes

By default, DataFrames use a RangeIndex. This means the first row is labeled 0, the second row is labeled 1, and so on. You can confirm this by calling the `.index` attribute on a DataFrame, like this:

```python
df.index
```

If your DataFrame has the default index, you'll see something like:

```python
RangeIndex(start=0, stop=number of rows, step=1)
```

This output tells you a few things:

- The row labels start at 0.
- They increase by 1 for each row.
- They stop before reaching the total number of rows (since we start counting at 0).

For instance, a DataFrame with 3 rows might have the index `RangeIndex(start=0, stop=3, step=1)`. This means:

- The first row has the label 0.
- The second row has the label 1.
- The third row has the label 2.

## Other Types of Indexes

DataFrames and individual columns (known as Series) can also have different kinds of indexes. For example, let's look at how the `vehicle_type` column in our `vehicles` DataFrame might appear when we use the `.value_counts()` method:

```python
vehicle_counts = vehicles['vehicle_type'].value_counts()
vehicle_counts
```

The output might look something like this:

```plaintext
sedan/wagon                  1205
suv                           742
pickup                        373
van                           189
passenger van/shuttle bus       7
vocational/cab chassis          4
```

Here, each row is labeled with the vehicle type as text. If you check the index with:

```python
vehicle_counts.index
```

You'll get:

```python
Index(['sedan/wagon', 'suv', 'pickup', 'van', 'passenger van/shuttle bus', 'vocational/cab chassis'],
      dtype='object')
```

Unlike a RangeIndex, this is an Index consisting of distinct objects or strings.

## Resetting the Index

Sometimes, you might want to reset your DataFrame to use the default RangeIndex. You can do this with the `.reset_index()` method. For example:

```python
vehicle_counts.reset_index()
```

The output will be:

```plaintext
index	vehicle_type
0	sedan/wagon	1205
1	suv	742
2	pickup	373
3	van	189
4	passenger van/shuttle bus	7
5	vocational/cab chassis	4
```

Notice that the old index values are now in a column called `index`, and the DataFrame has a new RangeIndex starting from 0 to 5.

## Conclusion

Understanding row indexes in DataFrames is crucial for effectively managing and analyzing your data. The default RangeIndex is simple and intuitive, but knowing how to work with and reset other types of indexes gives you greater flexibility. Whether your indexes are numeric or text-based, being able to control them allows you to keep your data well-organized and easy to manipulate.
