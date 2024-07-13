---
title: Booleans with Or
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

# Booleans with Or

When dealing with datasets, especially those involving vehicles, you often need to filter and analyze specific categories. Let's say you're working with a dataset that includes different types of electric vehicles: electric, hybrid electric, and plug-in hybrid electric. To focus on all electric vehicles, you need a method to select rows that match any of these types.

## Boolean Operator `or`

Imagine you want to check if a vehicle is either electric or hybrid electric. In everyday language, you might say, "This vehicle is electric or hybrid electric." This statement holds true if:

- The vehicle is electric.
- The vehicle is hybrid electric.
- The vehicle is both electric and hybrid electric.

In Python, the `or` operator functions similarly. It returns `True` if at least one of the conditions it combines is `True`. Here are a couple of examples:

1. Combining 'electric' == 'electric' with 'biodiesel' == 'hybrid electric':

```python
('electric' == 'electric') or ('biodiesel' == 'hybrid electric')
# Output: True, since the first comparison is True
```

2. Combining 'propane' == 'electric' with 'biodiesel' == 'hybrid electric':

```python
('propane' == 'electric') or ('biodiesel' == 'hybrid electric')
# Output: False, since neither comparison is True
```

## Applying Boolean Operator `or` in Pandas

In Pandas, you use the `|` symbol to perform the `or` operation. Let's say you have a mini DataFrame `df` with a `fuel` column that includes different fuel types:

```python
import pandas as pd

df = pd.DataFrame({
    'fuel': ['electric', 'hybrid electric', 'plug-in hybrid electric', 'propane']
})
```

To create a Boolean mask that identifies rows where the fuel is either electric or hybrid electric, follow these steps:

1. Create individual masks for each condition:

```python
is_electric = df['fuel'] == 'electric'
is_hybrid = df['fuel'] == 'hybrid electric'
```

2. Combine the masks using the `|` operator:

```python
combined = is_electric | is_hybrid
```

Your resulting mask will look like this:

| fuel                    | combined |
| ----------------------- | -------- |
| electric                | True     |
| hybrid electric         | True     |
| plug-in hybrid electric | False    |
| propane                 | False    |

## Extending the Logic

You can combine more than two conditions. For instance, if you also want to include plug-in hybrid electric vehicles, add another condition:

```python
is_plugin = df['fuel'] == 'plug-in hybrid electric'
combined = is_electric | is_hybrid | is_plugin
```

This expanded mask will include all three types of electric vehicles:

| fuel                    | combined |
| ----------------------- | -------- |
| electric                | True     |
| hybrid electric         | True     |
| plug-in hybrid electric | True     |
| propane                 | False    |

## Filtering the DataFrame

To filter your DataFrame to only include rows where the `combined` mask is `True`, you can pass the mask to the DataFrame:

```python
filtered_df = df[combined]
```

Alternatively, you can construct the combined condition directly within the brackets:

```python
filtered_df = df[is_electric | is_hybrid | is_plugin]
```

In either approach, you get a filtered DataFrame that looks like this:

| fuel                    |
| ----------------------- |
| electric                |
| hybrid electric         |
| plug-in hybrid electric |

## Conclusion

Boolean logic with `or` is a powerful tool in data analysis, allowing you to combine multiple conditions and filter datasets effectively. Whether you're dealing with electric vehicles or any other categories, understanding how to construct and use Boolean masks in Pandas will enable you to manipulate and analyze your data with precision. This process not only simplifies your data analysis tasks but also enhances the accuracy and relevance of your results.
