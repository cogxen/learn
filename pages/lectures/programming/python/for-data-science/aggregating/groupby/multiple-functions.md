---
title: "GroupBy: Multiple Functions"
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

# GroupBy: Multiple Functions

When working with data, you often need to apply multiple aggregation functions to your grouped data. This allows you to gain deeper insights and answer more complex questions about your dataset. In this guide, we'll explore how to use multiple functions with the `.agg()` method in pandas.

## Understanding the `.agg()` Method

Let's imagine you want to calculate both the mean and median number of total goals scored per match in different tournaments. Consider the following dataset `df`, which includes matches from two tournaments: Friendly and the FIFA World Cup.

<ScrollableTableContainer>

| date       | total_goals | tournament     |
| ---------- | ----------- | -------------- |
| 2022-11-17 | 3           | Friendly       |
| 2022-11-20 | 2           | Friendly       |
| 2022-11-19 | 1           | Friendly       |
| 2022-12-02 | 3           | FIFA World Cup |
| 2022-12-10 | 3           | FIFA World Cup |
| 2022-12-14 | 1           | Friendly       |
| 2022-12-17 | 3           | FIFA World Cup |
| 2022-12-18 | 6           | FIFA World Cup |

</ScrollableTableContainer>

To calculate both the mean and median number of total goals scored per match in each tournament, you can use the following syntax:

```python
goals = df.groupby('tournament').agg(
    {'total_goals': ['mean', 'median']})
```

In this example:

- `.groupby('tournament')` splits df into groups based on the tournament: Friendly and FIFA World Cup.
- `.agg({'total_goals': ['mean', 'median']})` calculates both the mean and median for the total_goals column within each group.

## Interpreting the Results

The output for this small dataset is:

<ScrollableTableContainer>

| tournament     | mean | median |
| -------------- | ---- | ------ |
| Friendly       | 3.75 | 3.0    |
| FIFA World Cup | 1.75 | 1.5    |

</ScrollableTableContainer>

From this, you can observe that both tournaments had a higher mean than median total goals. This might suggest that there are a few games with unusually high numbers of goals, skewing the mean upwards.

## Aggregating Multiple Columns

The `.agg()` function also allows you to compute aggregations for multiple columns. For example, suppose you want to add the count of matches played in each tournament. You can achieve this by adding a new key-value pair `'date': 'count'`. Although you are counting the dates, this effectively gives you the total number of rows (or matches) in each group.

Here's how you do it:

```python
goals = df.groupby('tournament').agg(
    {'date': 'count',
     'total_goals': ['mean', 'median']})
```

The result looks like this:

<ScrollableTableContainer>

| tournament     | count | mean | median |
| -------------- | ----- | ---- | ------ |
| FIFA World Cup | 4     | 3.75 | 3.0    |
| Friendly       | 3     | 1.75 | 1.5    |

</ScrollableTableContainer>

To make the columns more user-friendly, you can rename them:

```python
goals.columns = ['num_games', 'mean_goals', 'median_goals']
```

Now, the DataFrame `goals` has more descriptive column names:

<ScrollableTableContainer>

| tournament     | num_games | mean_goals | median_goals |
| -------------- | --------- | ---------- | ------------ |
| FIFA World Cup | 4         | 3.75       | 3.0          |
| Friendly       | 3         | 1.75       | 1.5          |

</ScrollableTableContainer>

## Conclusion

By using `.agg()`, you can efficiently perform multiple aggregations on your data, providing a comprehensive view of your dataset. Whether you're calculating means, medians, counts, or other statistical measures, `.agg()` helps you streamline the process, making your analysis both robust and concise.
