---
title: 577. Employee Bonus
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
  - number: 577
  - problemName: Employee Bonus
  - link: https://leetcode.com/problems/employee-bonus/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 577. Employee Bonus

## Problem Statement

Table: `Employee`

<ScrollableTableContainer>

| Column Name | Type    |
| ----------- | ------- |
| empId       | int     |
| name        | varchar |
| supervisor  | int     |
| salary      | int     |

</ScrollableTableContainer>

> `empId` is the primary key column for this table.
>
> Each row of this table indicates the name and the ID of an employee in addition to their `salary` and the id of their manager.

Table: `Bonus`

<ScrollableTableContainer>

| Column Name | Type |
| ----------- | ---- |
| empId       | int  |
| bonus       | int  |

</ScrollableTableContainer>

> `empId` is the primary key column for this table.
>
> `empId` has a foreign key reference to the `empId` column of the `Employee` table.
>
> Each row of this table contains the id of an employee and their respective bonus.

## Instructions

- Write a solution to report the name and bonus amount of each employee with a bonus **less than** $1000$.
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:** `Employee` table

<ScrollableTableContainer>

| empId | name   | supervisor | salary |
| ----- | ------ | ---------- | ------ |
| 3     | Brad   | null       | 4000   |
| 1     | John   | 3          | 1000   |
| 2     | Dan    | 3          | 2000   |
| 4     | Thomas | 3          | 4000   |

</ScrollableTableContainer>

**Input:** `Bonus` table

<ScrollableTableContainer>

| empId | bonus |
| ----- | ----- |
| 2     | 500   |
| 4     | 2000  |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| name | bonus |
| ---- | ----- |
| Brad | null  |
| John | null  |
| Dan  | 500   |

</ScrollableTableContainer>

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT
    e.name,
    b.bonus
FROM
    Employee e
LEFT JOIN
    Bonus b ON e.empId = b.empId
WHERE
    b.bonus < 1000 OR b.bonus IS NULL;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT e.name, b.bonus`: Select the `name` and `bonus` from the `Employee` and `Bonus` tables.
- `FROM Employee e`: Select the `Employee` table and alias it as `e`.
- `LEFT JOIN Bonus b ON e.empId = b.empId`: Join the `Bonus` table with the `Employee` table on the `empId` column.
- `WHERE b.bonus < 1000 OR b.bonus IS NULL`: Filter the rows where the `bonus` is less than $1000$ or `NULL`.

</CustomAccordion>
