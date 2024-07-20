---
title: Column Information
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

# Column Information

When working with DataFrames, it's crucial to understand the structure and contents of your data. Before making any alterations to a DataFrame’s columns, you should familiarize yourself with the existing columns and the types of data they contain. This can be easily achieved using the .info() method.

## Using `.info()` to Get Column Information

The .info() method provides a summary of your DataFrame's structure, including the number of entries, column names, data types, and non-null counts. Let's walk through an example using a DataFrame containing information about National Parks.

## Example

Imagine you have a DataFrame called `parks` that contains data about various national parks. To get an overview of this DataFrame, you would use the following command:

```python:
park.info()
```

The output from `.info()` starts with some general information about the DataFrame:

```plaintext
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 72 entries, 0 to 71
```

The first line tells you that `parks` is a DataFrame (note that `.info()` can also be called on a Series). The second line indicates that the index of `parks` is a range with 72 entries, spanning from 0 to 71.

Next, `.info()` displays a table with detailed information for each column. For the parks DataFrame, this might look like:

```plaintext
#    Column            Non-Null Count  Dtype
0    index             72 non-null     int64
1    Park              72 non-null     object
2    Location          72 non-null     object
3    AnnualPassPrice   72 non-null     int64
```

Here's what each column represents:

- **#**: The column index number.
- **Column**: The name of the column.
- **Non-Null Count**: The number of non-missing (non-null) values in the column.
- **Dtype**: The data type of the column.

It's important to note that the `index` in the table is a column named `index` within the DataFrame, and not the DataFrame's RangeIndex, which was described above the table.

## Interpreting the Information

From the output, you can deduce that:

- Each column has the expected data type.
- There are no missing values, as indicated by the non-null counts matching the number of entries (72).

After the table of column information, `.info()` provides a summary of the number of columns by data type:

```plaintext
dtypes: float64(1), int64(4), object(4)
```

This summary tells you how many columns of each data type exist in the DataFrame. In this case, there is one `float64` column, four `int64` columns, and four `object` columns.

Finally, `.info()` prints the amount of memory being used by the DataFrame:

```plaintext
memory usage: 5.2+ KB
```

## Conclusion

Using the `.info()` method is a simple yet powerful way to get a quick overview of your DataFrame's structure and contents. By understanding the column information, you can ensure that your data is in the expected format and identify any potential issues before performing further analysis or modifications. This foundational step is essential for maintaining the integrity and quality of your data work.
