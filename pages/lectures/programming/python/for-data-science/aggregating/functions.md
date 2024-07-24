---
title: Functions
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

# Functions

Understanding how to summarize data is crucial in making sense of large datasets. One of the key techniques for summarizing data is through aggregation. Aggregation allows you to use a single value to represent multiple data points, providing a concise summary of a dataset's characteristics.

## What is Aggregation?

Aggregation involves condensing a collection of data points into a single representative value. A classic example is calculating the average (mean) of a dataset. This single value provides insight into the "center" or typical value of the data. Aggregations are often referred to as summary statistics because they summarize a group of data points with a statistic.

## Aggregating an Entire Column

One common task is to aggregate, or summarize, an entire column of data. Using pandas, a powerful data manipulation library in Python, you can easily calculate various aggregation functions. For instance, the `.describe()` method provides a quick summary of the most common aggregation functions, such as mean, minimum, and maximum, all at once.

Consider this example using a dataset of soccer match results, where the total_goals column contains the number of goals scored in each game:

```python
results['total_goals'].describe()
```

The output might look like this:

```plaintext
count    17095.000000
mean         2.642820
std          1.845359
min          0.000000
25%          1.000000
50%          2.000000
75%          4.000000
max         31.000000
Name: total_goals, dtype: float64
```

This output tells you that across 17,095 games, there was an average of 2.64 goals per game, with a maximum of 31 goals in a single game.

## Individual Aggregation Functions

If you want to compute aggregations individually, you can apply specific pandas methods to one or more columns. Here are some useful built-in summary methods:

- `.mean()`: Returns the mean (average) value.
- `.median()`: Returns the median (middle) value.
- `.std()`: Returns the standard deviation, a measure of data spread.
- `.max()`: Returns the maximum value.
- `.min()`: Returns the minimum value.
- `.nunique()`: Returns the count of unique values.
- `.count()`: Returns the count of non-null values.
- `.sum()`: Returns the sum of all values.

For example, to find the total number of goals scored, you can use the `.sum()` method:

```python
total_goals = results['total_goals'].sum()
print(total_goals)
```

This code will output:

```plaintext
45179
```

This tells you that the total number of goals scored in all the games in your dataset is 45,179.

One interesting question you might have is whether teams perform better at their home stadiums. To explore this, you can compare the total number of goals scored at home versus away using the `.sum()` method:

```python
home_away_goals = results[['home_score', 'away_score']].sum()
print(home_away_goals)
```

The output might look like this:

```plaintext
home_score    27293
away_score    17886
dtype: int64
```

This indicates that significantly more goals were scored at home (27,293) compared to away (17,886). However, this might be misleading because some games might have taken place at neutral venues where neither team had a home advantage.

## Conclusion

Aggregation functions are powerful tools for summarizing large datasets and extracting meaningful insights. By using methods like `.describe()`, `.mean()`, and `.sum()`, you can quickly grasp the key characteristics of your data. However, always be mindful of the context and potential nuances, such as neutral venues affecting home and away scores. Aggregation provides a foundation for deeper data analysis and helps you make informed decisions based on concise summaries of your data.
