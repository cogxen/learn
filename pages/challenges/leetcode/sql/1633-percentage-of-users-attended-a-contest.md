---
title: 1633. Percentage of Users Attended a Contest
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
  - number: 1633
  - problemName: Percentage of Users Attended a Contest
  - link: https://leetcode.com/problems/percentage-of-users-attended-a-contest/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# 1633. Percentage of Users Attended a Contest

## Problem Statement

Table: `Users`

<ScrollableTableContainer>

| Column Name | Type    |
| ----------- | ------- |
| user_id     | int     |
| user_name   | varchar |

</ScrollableTableContainer>

> `user_id` is the primary key (column with unique values) for this table.
>
> Each row of this table contains the name and the id of a user.

Table: `Register`

<ScrollableTableContainer>

| Column Name | Type |
| ----------- | ---- |
| contest_id  | int  |
| user_id     | int  |

</ScrollableTableContainer>

> (`contest_id`, `user_id`) is the primary key (combination of columns with unique values) for this table.
>
> Each row of this table contains the id of a user and the contest they registered into.

## Instructions

- Write a solution to find the percentage of the users registered in each contest rounded to **two (2) decimals**.
- Return the result table ordered by percentage in **descending order**. In case of a tie, order it by `contest_id` in **ascending order**.
- The result format is in the following example.

## Example

**Input:**

`Users` table:

<ScrollableTableContainer>

| user_id | user_name |
| ------- | --------- |
| 6       | Alice     |
| 2       | Bob       |
| 7       | Alex      |

</ScrollableTableContainer>

`Register` table:

<ScrollableTableContainer>

| contest_id | user_id |
| ---------- | ------- |
| 215        | 6       |
| 209        | 2       |
| 208        | 2       |
| 210        | 6       |
| 208        | 6       |
| 209        | 7       |
| 209        | 6       |
| 215        | 7       |
| 208        | 7       |
| 210        | 2       |
| 207        | 2       |
| 210        | 7       |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| contest_id | percentage |
| ---------- | ---------- |
| 208        | 100.0      |
| 209        | 100.0      |
| 210        | 100.0      |
| 215        | 66.67      |
| 207        | 33.33      |

</ScrollableTableContainer>

**Explanation:**

> All the users registered in contests 208, 209, and 210. The percentage is 100% and we sort them in the answer table by `contest_id` in **ascending order**.
>
> Alice and Alex registered in contest 215 and the percentage is $((\frac{2}{3}) \times 100) = 66.67$%.
> Bob registered in contest 207 and the percentage is $((\frac{1}{3}) \times 100) = 33.33%$.

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
WITH ContestRegistrations AS (
    SELECT
        contest_id,
        COUNT(DISTINCT user_id) AS registered_users
    FROM
        Register
    GROUP BY
        contest_id
),
TotalUsers AS (
    SELECT
        COUNT(DISTINCT user_id) AS total_users
    FROM
        Users
)
SELECT
    cr.contest_id,
    ROUND((cr.registered_users / CAST(tu.total_users AS DECIMAL)) * 100, 2) AS percentage
FROM
    ContestRegistrations cr, TotalUsers tu
ORDER BY
    percentage DESC,
    contest_id ASC;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning" :collapsed=false>

- `WITH ContestRegistrations AS (...)`: Create a Common Table Expression (CTE) named `ContestRegistrations` to get the count of registered users for each contest.
  - `SELECT contest_id, COUNT(DISTINCT user_id) AS registered_users`: Select the `contest_id` and the count of distinct `user_id` from the `Register` table.
  - `FROM Register`: Select the `Register` table.
  - `GROUP BY contest_id`: Group the result by `contest_id`.
- `TotalUsers AS (...)`: Create a CTE named `TotalUsers` to get the total count of users.
  - `SELECT COUNT(DISTINCT user_id) AS total_users`: Select the count of distinct `user_id` from the `Users` table.
  - `FROM Users`: Select the `Users` table.
- `SELECT cr.contest_id, ROUND(...) AS percentage`: Select the `contest_id` and the percentage of registered users for each contest.
  - `ROUND((cr.registered_users / CAST(tu.total_users AS DECIMAL)) * 100, 2) AS percentage`: Calculate the percentage of registered users for each contest.
- `FROM ContestRegistrations cr, TotalUsers tu`: Select the `ContestRegistrations` and `TotalUsers` CTEs.
- `ORDER BY percentage DESC, contest_id ASC`: Order the result by `percentage` in descending order and `contest_id` in ascending order.

</CustomAccordion>
