---
title: 1211. Queries Quality and Percentage | Challenges | Cogxen
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
leetcodeStudyPlan:
  - name: Top SQL 50
  - link: https://leetcode.com/studyplan/top-sql-50/
  - planImg: https://i.imgur.com/cxH56Lt.png
leetcodeInformation:
  - number: 1211
  - problemName: Queries Quality and Percentage
  - link: https://leetcode.com/problems/queries-quality-and-percentage/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 1211. Queries Quality and Percentage

Table: `Queries`

<ScrollableTableContainer>

| Column Name | Type    |
| ----------- | ------- |
| query_name  | varchar |
| result      | varchar |
| position    | int     |
| rating      | int     |

</ScrollableTableContainer>

> This table may have duplicate rows.
>
> This table contains information collected from some queries on a database.
>
> The position column has a value from **1** to **500**.
>
> The rating column has a value from **1** to **5**. Query with rating less than 3 is a poor query.

## Instructions

NOTES:

1. We define query `quality` as the average of the ratio between query rating and its position.
2. We also define `poor query percentage` as the percentage of all queries with rating less than 3.

- Write a solution to find each `query_name`, the `quality` and `poor_query_percentage`.
- Both `quality` and `poor_query_percentage` should be rounded to **two (2) decimal places**.
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:** `Queries` table

<ScrollableTableContainer>

| query_name | result           | position | rating |
| ---------- | ---------------- | -------- | ------ |
| Dog        | Golden Retriever | 1        | 5      |
| Dog        | German Shepherd  | 2        | 5      |
| Dog        | Mule             | 200      | 1      |
| Cat        | Shirazi          | 5        | 2      |
| Cat        | Siamese          | 3        | 3      |
| Cat        | Sphynx           | 7        | 4      |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| query_name | quality | poor_query_percentage |
| ---------- | ------- | --------------------- |
| Dog        | 2.50    | 33.33                 |
| Cat        | 0.66    | 33.33                 |

</ScrollableTableContainer>

**Explanation:**

> Dog queries `quality` is $\frac{((5 / 1) + (5 / 2) + (1 / 200))}{3} = 2.50$.
>
> Dog queries `poor_query_percentage` is $(1 / 3) \times 100 = 33.33$.
>
> Cat queries `quality` equals $\frac{((2 / 5) + (3 / 3) + (4 / 7))}{3} = 0.66$.
>
> Cat queries `poor_query_percentage` is $(1 / 3) \times 100 = 33.33$.

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT
    query_name,
    ROUND(AVG(rating * 1.0 / position), 2) AS quality,
    ROUND(SUM(CASE WHEN rating < 3 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS poor_query_percentage
FROM
    Queries
WHERE
    query_name IS NOT NULL
GROUP BY
    query_name;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT query_name`: Select the `query_name` from the `Queries` table.
  - `ROUND(AVG(rating * 1.0 / position), 2) AS quality`: Calculate the `quality` by getting the average of the ratio between `rating` and `position` and round it to two decimal places.
  - `ROUND(SUM(CASE WHEN rating < 3 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS poor_query_percentage`: Calculate the `poor_query_percentage` by getting the sum of queries with a rating less than 3, multiplying it by 100.0, dividing it by the total count of queries, and round it to two decimal places.
- `FROM Queries`: Select the `Queries` table.
- `WHERE query_name IS NOT NULL`: Filter out the rows where `query_name` is not null.
- `GROUP BY query_name`: Group the result by `query_name`.

</CustomAccordion>
