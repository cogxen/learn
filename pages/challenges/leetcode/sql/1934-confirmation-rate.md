---
title: 1934. Confirmation Rate
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
  - number: 1934
  - problemName: Confirmation Rate
  - link: https://leetcode.com/problems/confirmation-rate/
  - difficulty: Medium
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# 1934. Confirmation Rate

## Problem Statement

Table: `Signups`

<ScrollableTableContainer>

| Column Name | Type     |
| ----------- | -------- |
| user_id     | int      |
| time_stamp  | datetime |

</ScrollableTableContainer>

> `user_id` is the primary key for this table.
>
> Each row contains information about the signup time for the user with ID `user_id`.

Table: `Confirmations`

<ScrollableTableContainer>

| Column Name | Type     |
| ----------- | -------- |
| user_id     | int      |
| time_stamp  | datetime |
| action      | ENUM     |

</ScrollableTableContainer>

> (`user_id`, `time_stamp`) is the primary key (combination of columns with unique values) for this table.
>
> `user_id` is a foreign key (reference column) to the `Signups` table.
>
> `action` is an ENUM (category) of the type ('confirmed', 'timeout')
>
> Each row of this table indicates that the user with ID `user_id` requested a confirmation message at `time_stamp` and that confirmation message was either confirmed ('confirmed') or expired without confirming ('timeout').

## Instructions

NOTE: The **confirmation rate** of a user is the number of `'confirmed'` messages divided by the total number of requested confirmation messages. The confirmation rate of a user that did not request any confirmation messages is $0$. Round the confirmation rate to **two decimal** places.

- Write a solution to find the **confirmation rate** of each user.
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:**

`Signups` table

<ScrollableTableContainer>

| user_id | time_stamp          |
| ------- | ------------------- |
| 3       | 2020-03-21 10:16:13 |
| 7       | 2020-01-04 13:57:59 |
| 2       | 2020-07-29 23:09:44 |
| 6       | 2020-12-09 10:39:37 |

</ScrollableTableContainer>

`Confirmations` table

<ScrollableTableContainer>

| user_id | time_stamp          | action    |
| ------- | ------------------- | --------- |
| 3       | 2021-01-06 03:30:46 | timeout   |
| 3       | 2021-07-14 14:00:00 | timeout   |
| 7       | 2021-06-12 11:57:29 | confirmed |
| 7       | 2021-06-13 12:58:28 | confirmed |
| 7       | 2021-06-14 13:59:27 | confirmed |
| 2       | 2021-01-22 00:00:00 | confirmed |
| 2       | 2021-02-28 23:59:59 | timeout   |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| user_id | confirmation_rate |
| ------- | ----------------- |
| 6       | 0.00              |
| 3       | 0.00              |
| 7       | 1.00              |
| 2       | 0.50              |

</ScrollableTableContainer>

**Explanation:**

> User 6 did not request any confirmation messages. The confirmation rate is $0$.
>
> User 3 made 2 requests and both timed out. The confirmation rate is $0$.
>
> User 7 made 3 requests and all were confirmed. The confirmation rate is $1$.
>
> User 2 made 2 requests where one was confirmed and the other timed out. The confirmation rate is $1 / 2 = 0.5$.

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT
    s.user_id,
    COALESCE(ROUND(SUM(CASE WHEN c.action = 'confirmed' THEN 1 ELSE 0 END)::numeric / NULLIF(COUNT(c.user_id), 0), 2), 0) AS confirmation_rate
FROM
    Signups s
LEFT JOIN
    Confirmations c ON s.user_id = c.user_id
GROUP BY
    s.user_id;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning" :collapsed=false>

- `SELECT s.user_id`: Select the `user_id` from the `Signups` table.
  - `COALESCE(ROUND(SUM(CASE WHEN c.action = 'confirmed' THEN 1 ELSE 0 END)::numeric / NULLIF(COUNT(c.user_id), 0), 2), 0) AS confirmation_rate`: Calculate the confirmation rate for each user.
- `FROM Signups s`: Select the `Signups` table and alias it as `s`.
- `LEFT JOIN Confirmations c ON s.user_id = c.user_id`: Join the `Signups` table with the `Confirmations` table on the `user_id`.
- `GROUP BY s.user_id`: Group the result by `user_id`.

</CustomAccordion>
