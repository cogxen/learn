---
title: "GroupBy: One Column"
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

# GroupBy: One Column

When analyzing data, you often need a more nuanced approach than simply aggregating entire columns. For instance, using `.sum()` will give you the total number of goals scored in a dataset, but what if you want to find out which team scored the most goals? To answer this, you need to group the data by team and then perform the aggregation within these groups.

Pandas simplifies this task with its `.groupby()` method. This method allows you to group rows of your DataFrame based on a specific column and then perform various aggregations on these groups. Let’s dive into an example to see how it works.

Imagine you have a DataFrame `df` that contains information about teams and the goals they scored in several games:

<ScrollableTableContainer>

| home_team   | home_score |
| ----------- | ---------- |
| Brazil      | 3          |
| England     | 2          |
| England     | 3          |
| Brazil      | 3          |
| South Korea | 2          |
| England     | 2          |
| South Korea | 3          |
| Brazil      | 2          |
| South Korea | 1          |

</ScrollableTableContainer>

## Using GroupBy

The first step is to apply the `.groupby()` method to split the DataFrame into groups based on the `home_team` column:

```python
df.groupby('home_team')
```

This call creates groups and stores them in a dictionary-like structure:

```python
{
 'Brazil': [0, 3, 7],
 'England': [1, 2, 5],
 'South Korea': [4, 6, 8]
}
```

If you look at the original DataFrame, you’ll see that rows 0, 3, and 7 correspond to Brazil as the `home_team`. The other groups follow the same pattern.

## Aggregation with GroupBy

Now that you have your groups, you can compute various statistics, such as averages or sums, for each group. One of the most flexible ways to do this is using the `.agg()` method, which allows you to specify multiple aggregation functions for different columns:

```python
df.groupby('home_team').agg({'home_score': 'mean'})
```

The `.agg()` method takes a dictionary where the keys are the column names and the values are the aggregation functions you want to apply. In this example, it calculates the mean score for each team.

Here are some common aggregation functions you can use with `.agg()`:

- `'mean'`: Returns the mean (average) value.
- `'median'`: Returns the median (middle) value.
- `'std'`: Returns the standard deviation, a measure of data spread.
- `'max'`: Returns the maximum value.
- `'min'`: Returns the minimum value.
- `'nunique'`: Returns the count of unique values.
- `'count'`: Returns the count of non-null values.
- `'sum'`: Returns the sum of all values.

Notice that these functions are passed as strings within the `.agg()` method, such as 'mean' instead of `.mean()`.

## Alternative Method

When dealing with a single aggregation function, you can also select the column after grouping and call the aggregation function directly:

```python
df.groupby('home_team')['home_score'].mean()
```

While this approach works, it’s more limited compared to `.agg()`, which becomes particularly useful when you need to apply different aggregation functions to multiple columns.

## Chaining Methods

In pandas, it’s common to chain method calls together. For example:

```python
df.groupby('home_team').agg({'home_score': 'mean'}).sort_values('home_score', ascending=False)
```

## Conclusion

Understanding how to use `.groupby()` and `.agg()` is crucial for performing advanced data analysis in pandas. By grouping data based on specific columns and applying various aggregations, you can extract meaningful insights that are not immediately apparent from raw data. This approach allows you to answer more complex questions and make better-informed decisions based on your data. Keep practicing with different datasets and aggregation functions to master these powerful tools.
