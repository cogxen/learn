---
title: Booleans with And
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

# Booleans with And

Imagine you want to filter a list of electric vehicles, specifically those introduced after 2010. How would you do that? Python makes this task straightforward by using Boolean operators. Let’s explore how to combine comparisons using the `and` operator and apply this to filter data in pandas.

## Boolean Operator `and`

In English, when you say, "This vehicle is electric and it was introduced after 2010," the statement is true only if both conditions are true. This concept translates directly into Python using Boolean operators.

For instance:

- `vehicles['Year'] > 2010` checks if the vehicle was introduced after 2010.
- `vehicles['fuel'] == 'electric'` checks if the vehicle is electric.

The `and` operator allows you to combine these conditions:

- `(2011 > 2010) and ('electric' == 'electric')` evaluates to `True` because both conditions are true.
- `(2011 > 2010) and ('biodiesel' == 'electric')` evaluates to `False` because the second condition is false.

## Applying Boolean Operator `and` in Pandas

Pandas, a powerful data manipulation library in Python, uses `&` for the `and` operator. Let’s apply this to a DataFrame example:

```python
import pandas as pd

# Creating a mini DataFrame
data = {
    'year': [2009, 2010, 2011, 2012],
    'fuel': ['electric', 'hybrid electric', 'electric', 'propane']
}
df = pd.DataFrame(data)
```

Here’s the DataFrame:

| year | fuel            |
| ---- | --------------- |
| 2009 | electric        |
| 2010 | hybrid electric |
| 2011 | electric        |
| 2012 | propane         |

## Filtering

Instead of combining comparisons in a single line, breaking it down piece-by-piece improves readability:

1. Check if the vehicle is electruc:

```python
is_electric = df['fuel'] == 'electric'
```

2. Check if the vehicle was introduced after 2010:

```python
is_after_2010 = df['year'] > 2010
```

3. Combine the two conditions:

```python
combined = is_electric & is_after_2010
```

Here’s the combined output next to the original DataFrame:

| year | fuel            | combined |
| ---- | --------------- | -------- |
| 2009 | electric        | False    |
| 2010 | hybrid electric | False    |
| 2011 | electric        | True     |
| 2012 | propane         | False    |

4. Filter the DataFrame using the combined condition:

```python
df_filtered = df[combined]
```

The resulting DataFrame contains only the rows where the vehicle is electric and was introduced after 2010:

| year | fuel     |
| ---- | -------- |
| 2011 | electric |

Alternatively, you can combine the conditions directly when filtering:

```python
df_filtered = df[(df['fuel'] == 'electric') & (df['year'] > 2010)]
```

This method, while efficient, can become hard to read. Breaking it down into steps using intermediate variables helps maintain clarity and ease of debugging.

## Handling No Matches

Sometimes, no rows will match your filter criteria. In such cases, the DataFrame will display column labels but no rows. This doesn’t indicate an error; it simply means no data met your conditions.

## Conclusion

Using Boolean operators effectively allows you to filter data based on multiple conditions. By understanding how to combine conditions with and (or & in pandas), you can efficiently extract relevant information from your datasets. Breaking down complex conditions into simpler, intermediate steps enhances readability and simplifies debugging. So next time you need to filter data, remember to use these techniques for a clear and concise approach.
