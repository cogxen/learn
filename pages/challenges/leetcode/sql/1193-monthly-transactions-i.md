---
title: 1193. Monthly Transactions I
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
  - number: 1193
  - problemName: Monthly Transactions I
  - link: https://leetcode.com/problems/monthly-transactions-i/
  - difficulty: Medium
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# 1193. Monthly Transactions I

## Problem Statement

Table: `Transactions`

<ScrollableTableContainer>

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| country     | varchar |
| state       | enum    |
| amount      | int     |
| trans_date  | date    |

</ScrollableTableContainer>

> The `id` column is the primary key column for this table.
>
> The table has information about incoming transactions.
>
> The `state` column is an enum of type ["approved", "declined"].

## Instructions

- Write an SQL query to find for each month and country, the number of transactions and their total amount, the number of approved transactions and their total amount.
- Return the result table in **any order**.
- The query result format is in the following example.

## Example

**Input:** `Transactions` table

<ScrollableTableContainer>

| id  | country | state    | amount | trans_date |
| --- | ------- | -------- | ------ | ---------- |
| 121 | US      | approved | 1000   | 2018-12-18 |
| 122 | US      | declined | 2000   | 2018-12-19 |
| 123 | US      | approved | 2000   | 2019-01-01 |
| 124 | DE      | approved | 2000   | 2019-01-07 |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| month   | country | trans_count | approved_count | trans_total_amount | approved_total_amount |
| ------- | ------- | ----------- | -------------- | ------------------ | --------------------- |
| 2018-12 | US      | 2           | 1              | 3000               | 1000                  |
| 2019-01 | US      | 1           | 1              | 2000               | 2000                  |
| 2019-01 | DE      | 1           | 1              | 2000               | 2000                  |

</ScrollableTableContainer>

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
WITH MonthlyTransactions AS (
    SELECT
        TO_CHAR(trans_date, 'YYYY-MM') AS month,
        country,
        state,
        amount
    FROM
        Transactions
)
SELECT
    month,
    country,
    COUNT(*) AS trans_count,
    SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count,
    SUM(amount) AS trans_total_amount,
    SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount
FROM
    MonthlyTransactions
GROUP BY
    month, country;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning" :collapsed=false>

- `WITH MonthlyTransactions AS (...)`: Create a Common Table Expression (CTE) named `MonthlyTransactions` that selects the `month`, `country`, `state`, and `amount` columns from the `Transactions` table.
  - `SELECT TO_CHAR(trans_data, 'YYYY-MM') AS month`: Extract the year and month from the `trans_date` column and format it as `YYYY-MM`.
    - `country`: Select the `country` column.
    - `state`: Select the `state` column.
    - `amount`: Select the `amount` column.
  - `FROM Transactions`: Select the `Transactions` table.
- `SELECT ...`: Select the following columns:
  - `month`: Select the `month` column.
  - `country`: Select the `country` column.
  - `COUNT(*) AS trans_count`: Count the number of transactions and alias it as `trans_count`.
  - `SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count`: Sum the number of approved transactions and alias it as `approved_count`.
  - `SUM(amount) AS trans_total_amount`: Sum the total amount of transactions and alias it as `trans_total_amount`.
  - `SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount`: Sum the total amount of approved transactions and alias it as `approved_total_amount`.
- `FROM MonthlyTransactions`: Select the `MonthlyTransactions` CTE.
- `GROUP BY month, country`: Group the result by `month` and `country`.

</CustomAccordion>
