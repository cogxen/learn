---
title: Categorical Data
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

# Categorical Data

You've been doing a fantastic job diving into Python programming. With that solid foundation, it's time to get back into our product repair dataset and start answering some intriguing questions. This dataset is rich with information, and now we're going to uncover insights about the types of products brought to community-run repair events, the frequency of successful repairs, and trends over time.

## Accessing Columns in a DataFrame

When working with data, you often need to focus on specific columns. In our dataset, to address the questions we're interested in, we'll look at columns like `product_category`. Accessing these columns is straightforward using square bracket notation, similar to how you would access values in a dictionary.

To get the `product_category` column, you can write:

```python
repair['product_category']
```

Alternatively, you might see the period notation:

```python
repair.product_category
```

However, we'll stick with the square bracket notation as it's more versatile. It can handle column names with spaces and other special characters that the period notation cannot.

Individual columns extracted this way are known as pandas Series. Sometimes, you'll need to work with a DataFrame rather than a Series, especially if you're handling multiple columns. You can do this by wrapping the column names in another set of square brackets:

```python
repair[['product_category']]
```

For multiple columns, you can pass a list of column names:

```python
repair[['country', 'product_category']]
```

## Counting Values in a Column

To understand what kinds of products are brought to repair events, we can count the unique values in the `product_category` column. Pandas provides a handy method called `value_counts()`, which not only lists the unique values but also counts their occurrences.

Here's how you can use it:

```python
repair['product_category'].value_counts()
```

This will give you an output like this:

```plaintext
lamp        4250
laptop      4139
vacuum      4034
```

By default, `value_counts()` sorts the counts from largest to smallest, showing that lamps are the most common items brought to repair events, with 4250 entries.

## Customizing `value_counts()`

The `value_counts()` method has several parameters that allow you to customize its output:

- `normalize=True`: This returns the counts as percentages instead of raw numbers.
- `ascending=True`: This sorts the counts from smallest to largest.

For example, to see the percentages:

```python
repair['product_category'].value_counts(normalize=True)
```

This would output something like:

```plaintext
lamp        0.068445
laptop      0.066657
vacuum      0.064966
```

This indicates that lamps, while the most common category, only make up about 6.8% of the total dataset.

## Conclusion

You've now seen how to extract specific columns from a DataFrame and count the unique values within those columns. These techniques are powerful tools in your data analysis toolkit, allowing you to gain insights into your data with ease. Whether you're looking to understand the most common items at repair events or track trends over time, these methods will serve you well.

Remember, data analysis is all about asking questions and using the right tools to find the answers. Keep exploring and experimenting, and you'll uncover fascinating stories hidden within your data.
