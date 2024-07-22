---
title: Renaming and Removing Columns
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

# Renaming and Removing Columns

When you're working with data, ensuring that your column names are short, meaningful, and consistent is crucial. It not only makes your code easier to write and read but also helps avoid confusion when you or someone else revisits the data later. Let's explore how to rename and remove columns effectively, using a dataset about National Parks as an example.

## Renaming Columns

Imagine you have a column named Year2019 in your National Parks dataset. At first glance, it’s unclear what this column represents. Does it contain the number of visitors, trees, or something else entirely? Renaming columns can add the necessary context, correct any misspellings, and shorten long names to save you time.

By renaming columns, you can:

- Add context for the values in the column
- Correct misspellings
- Shorten long names to save time typing

Renaming columns in a DataFrame is straightforward with the `.rename()` method in pandas. Here’s how you can do it:

```python
df = df.rename(
  mapper=column_mapper,
  axis=1
)
```

- `column_mapper` is a dictionary that maps old column names (keys) to new column names (values):

  ```python
  column_mapper = {
      'old_column_1': 'new_column_1',
      'old_column_2': 'new_column_2',
      ...
  }
  ```

- `axis=1` specifies that you're renaming columns (use axis=0 to rename rows).

### Example

Suppose you want to rename `Year2019` to `Visitors2019` to make it clear that this column contains the number of visitors:

```python
column_mapper = {'Year2019': 'Visitors2019'}
parks = parks.rename(
  mapper=column_mapper,
  axis=1
)
```

After renaming, your DataFrame will look like this:

**Old DataFrame:**

| Park                  | Year2019 |
| --------------------- | -------- |
| Great Smoky Mountains | 12547743 |
| Zion                  | 4488268  |
| Yellowstone           | 4020288  |

**New DataFrame:**

| Park                  | Visitors2019 |
| --------------------- | ------------ |
| Great Smoky Mountains | 12547743     |
| Zion                  | 4488268      |
| Yellowstone           | 4020288      |

## Removing Columns

In some cases, your dataset might include columns that are irrelevant to your analysis. For instance, if your National Parks dataset contains a column called `ParkType`, and you’re not interested in distinguishing between different types of parks, you might decide to remove this column.

Removing unnecessary columns can:

- Improve the speed and efficiency of your code
- Make the dataset easier to visually explore

You can drop columns using the .drop() method in pandas:

```python
drop_columns = ['column_1', 'column_2']
df = df.drop(
  labels=drop_columns,
  axis=1
)
```

- `drop_columns` is a list of column names you want to drop.
- `axis=1` specifies that you’re dropping columns (use axis=0 to drop rows).

### Example

If you decide to drop the `ParkType` column from your dataset, you can do it like this:

```python
drop_columns = ['ParkType']
parks = parks.drop(
  labels=drop_columns,
  axis=1
)
```

If you’re only dropping one column, you can also provide the column name as a string:

```python
parks = parks.drop(
  labels='ParkType',
  axis=1
)
```

## Conclusion

Renaming and removing columns are essential steps in preparing your data for analysis. By ensuring that your column names are clear and removing unnecessary data, you streamline your workflow and make your dataset easier to understand and use. Always aim for clarity and relevance in your data, and your future self (or anyone else who works with your data) will thank you.
