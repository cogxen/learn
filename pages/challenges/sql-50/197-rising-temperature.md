---
title: 197. Rising Temperature | Challenges | Cogxen
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
  - number: 197
  - problemName: Rising Temperature
  - link: https://leetcode.com/problems/rising-temperature/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 197. Rising Temperature

## Problem Statement

Table: `Weather`

<ScrollableTableContainer>

| Column Name | Type |
| ----------- | ---- |
| id          | int  |
| recordDate  | date |
| temperature | int  |

</ScrollableTableContainer>

> `id` is the column with unique values for this table.
>
> There are no different rows with the same `recordDate`.
>
> This table contains information about the `temperature` on a certain day.

## Instructions

- Write a solution to find all dates' `Id` with higher temperatures compared to its previous dates (yesterday).
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:** `Weather` table

<ScrollableTableContainer>

| id  | recordDate | temperature |
| --- | ---------- | ----------- |
| 1   | 2015-01-01 | 10          |
| 2   | 2015-01-02 | 25          |
| 3   | 2015-01-03 | 20          |
| 4   | 2015-01-04 | 30          |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| id  |
| --- |
| 2   |
| 4   |

</ScrollableTableContainer>

**Explanation:**

> In 2015-01-02, the `temperature` was higher than the previous day (10 -> 25).
>
> In 2015-01-04, the `temperature` was higher than the previous day (20 -> 30).

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT w1.id
FROM Weather w1
JOIN Weather w2 ON w1.recordDate = w2.recordDate + INTERVAL '1 day'
WHERE w1.temperature > w2.temperature;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT w1.id`: Select the `id` from the `Weather` table.
- `FROM Weather w1`: Select the `Weather` table and alias it as `w1`.
- `JOIN Weather w2 ON w1.recordDate = w2.recordDate + INTERVAL '1 day'`: Join the `Weather` table with itself on the condition that the `recordDate` of `w1` is equal to the `recordDate` of `w2` plus one day.
- `WHERE w1.temperature > w2.temperature`: Filter the rows where the `temperature` of `w1` is greater than the `temperature` of `w2`.

</CustomAccordion>
