---
title: Filtering Rows
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

# Filtering Rows

Filtering rows in a DataFrame can feel like finding a needle in a haystack. But with Boolean masks, you have a powerful tool at your disposal to help you pinpoint exactly what you're looking for.

Imagine you have a DataFrame, `df`, with information about car manufacturers and the years they were produced. Here's how you can use Boolean masks to filter this data.

## Creating a Boolean Mask

A Boolean mask is essentially a column of True/False values that tell you which rows meet a certain condition. For example, to find out which cars were manufactured in 2023, you can create a Boolean mask like this:

```python
is_2023 = (df['year'] == 2023)
```

This line of code compares each value in the 'year' column with 2023, returning `True` if the year is 2023 and `False` if otherwise. The resulting Boolean mask will look something like this:

```plaintext
year
2023    True
2020    False
2023    True
2022    False
```

## Applying the Boolean Mask

Now that you have your Boolean mask, you can use it to filter the DataFrame, keeping only the rows where the mask is `True`. This is done by passing the mask to the DataFrame:

```python
df_filtered = df[is_2023]
```

The result is a new DataFrame, `df_filtered`, containing only the rows where the year is 2023:

```plaintext
year  manufacturer
2023  Chevrolet
2023  Honda
```

## Direct Filtering

If you prefer a more concise approach, you can skip the step of creating a separate Boolean mask variable and directly filter the DataFrame in one line:

```python
df_filtered = df[df['year'] == 2023]
```

While this method is more efficient, it can sometimes be harder to read, especially as your conditions become more complex. Keeping your code readable is important, so using intermediary variables can help clarify your logic as you build more intricate filters.

## Conclusion

Boolean masks are a handy tool for filtering DataFrames based on specific conditions. They allow you to isolate the data you need with precision and efficiency. By understanding how to create and apply these masks, you can quickly and easily extract the information you need from even the largest datasets.

Remember, as you become more comfortable with these techniques, you can streamline your code by removing intermediary steps. But when you're starting out or dealing with complex conditions, don't hesitate to use variables to keep your code clear and understandable.
