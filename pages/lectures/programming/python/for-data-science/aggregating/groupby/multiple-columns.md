---
title: "GroupBy: Multiple Columns"
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

# GroupBy: Multiple Columns

When working with datasets, there are times when you need to group data based on more than one column. This is particularly useful when you want to investigate interactions between multiple categories. Let's explore this concept using a dataset of football matches.

## Example

Consider a dataset `df` where each row represents a football match. The relevant columns are `date`, `home_team`, `away_team`, and `win_margin`. Here’s a sample of the data:

<ScrollableTableContainer>

| date       | home_team     | away_team | win_margin |
| ---------- | ------------- | --------- | ---------- |
| 2019-09-06 | United States | Mexico    | -3         |
| 2021-09-24 | El Salvador   | Guatemala | -2         |
| 2019-07-07 | United States | Mexico    | -1         |
| 2021-06-27 | El Salvador   | Guatemala | 0          |
| 2016-03-25 | El Salvador   | Honduras  | 0          |
| 2017-05-28 | El Salvador   | Honduras  | 0          |
| 2021-09-05 | El Salvador   | Honduras  | 0          |
| 2021-08-01 | United States | Mexico    | 1          |
| 2021-07-11 | El Salvador   | Guatemala | 2          |

</ScrollableTableContainer>

In football, certain matchups are known for their intense rivalries. For instance, matches between the United States and Mexico are highly competitive. To analyze these rivalries, we need to group our data by both the `home_team` and `away_team` columns.

## Grouping by Multiple Columns

To group the data by both `home_team` and `away_team`, you can use the `.groupby()` method and pass a list of the columns you want to group by:

```python
grouped_df = df.groupby(['home_team', 'away_team'])
```

Once the data is grouped, you can perform various aggregations. For example, let’s calculate the maximum win margin for each matchup:

```python
max_wins = grouped_df.agg({'win_margin': 'max'})
```

The resulting grouped data looks like this:

<ScrollableTableContainer>

| home_team     | away_team | win_margin |
| ------------- | --------- | ---------- |
| El Salvador   | Guatemala | 2          |
| United States | Mexico    | 1          |
| El Salvador   | Honduras  | 0          |

</ScrollableTableContainer>

## Verifying the Calculation

To ensure the correctness of our calculation, let’s check one of the matchups manually. For example, the dataset contains three matches between El Salvador (home) and Guatemala (away), with win margins of -2, 0, and 2. The maximum win margin among these matches is 2, which matches our groupby calculation.

## Conclusion

Grouping by multiple columns allows you to analyze complex interactions within your data. By correctly grouping and aggregating your data, you can uncover insightful trends and patterns. In this example, grouping football matches by both home and away teams enabled us to investigate rivalries and calculate meaningful statistics like the maximum win margin for each matchup. Always ensure to clean and verify your data to maintain the accuracy and validity of your analysis.
