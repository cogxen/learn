---
title: Numeric Data
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

# Numeric Data

When working with numeric data, your questions will often be more statistical in nature. For instance, you might want to know the highest and lowest values in a numeric column. One powerful tool you have at your disposal is the .describe() method, which provides a comprehensive statistical summary of the data in a numeric column.

## Exploring Numeric Data with `.describe()`

Let’s say you have a column called `product_age` in your dataset. By using the command:

```python
repair['product_age'].describe()
```

you'll get a detailed summary that looks something like this:

```plaintext
count    21823.000000
mean        12.202012
std         14.612353
min          0.000000
25%          4.000000
50%          7.000000
75%         15.000000
max        122.000000
Name: product_age, dtype: float64
```

Here's what this tells you:

- `count`: The number of entries in the column (21823).
- `mean`: The average age of the products (12.20 years).
- `std`: The standard deviation, showing how spread out the ages are (14.61 years).
- `min`: The youngest product age (0 years).
- `25%`, `50%`, `75%`: These percentiles give you a sense of the distribution. For example, 25% of products are 4 years old or younger.
- `max`: The oldest product age (122 years).

This information is incredibly valuable. It helps you understand not just the average age of the products but also the distribution and variability within your dataset. It's important to note that these statistics are calculated based on the available data, excluding any missing entries.

## Delving into Text Data

The `.describe()` method can also be applied to text (or object) columns, but the output is slightly different. Consider a column `repair_status` in your dataset. Using:

```python
repair['repair_status'].describe()
```

you'll see something like this:

```plaintext
count     62094
unique        4
top       fixed
freq      32601
Name: repair_status, dtype: object
```

Here's the breakdown:

- `count`: The number of entries in the column (62094).
- `unique`: The number of unique values in the column (4).
- `top`: The most frequent value in the column (fixed).
- `freq`: The frequency of the most common value (32601).

From this, you learn that there are four unique statuses for repairs, and the most common status is 'fixed'. However, it's also important to recognize that a large number of entries might be marked as 'unknown', which could affect your analysis.

## Conclusion

Understanding both numeric and text data is crucial in data analysis. The `.describe()` method is a versatile tool that gives you a quick overview of your data’s statistical properties, helping you to grasp the big picture and identify potential areas for further investigation.

Always remember to consider the context of missing data and how it might influence your results. While you can determine the maximum age of products with recorded ages, you can't infer the age of the oldest product ever without complete data.

By mastering these basics, you’re well on your way to making informed, data-driven decisions. Keep exploring, and you’ll continue to uncover valuable insights hidden within your data.
