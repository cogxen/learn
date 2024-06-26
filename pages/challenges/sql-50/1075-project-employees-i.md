---
title: 1075. Project Employees I | Challenges | Cogxen
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
  - number: 1075
  - problemName: Project Employees I
  - link: https://leetcode.com/problems/project-employees-i/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 1075. Project Employees I

## Problem Statement

Table: `Project`

<ScrollableTableContainer>

| Column Name | Type |
| ----------- | ---- |
| project_id  | int  |
| employee_id | int  |

</ScrollableTableContainer>

> (`project_id`, `employee_id`) is the primary key of this table.
>
> `employee_id` is a foreign key to `Employee` table.
>
> Each row of this table indicates that the employee with `employee_id` is working on the project with `project_id`.

Table: `Employee`

<ScrollableTableContainer>

| Column Name      | Type    |
| ---------------- | ------- |
| employee_id      | int     |
| name             | varchar |
| experience_years | int     |

</ScrollableTableContainer>

> `employee_id` is the primary key of this table.
>
> It's guaranteed that `experience_years` is not `NULL`.
>
> Each row of this table contains information about one employee.

## Instructions

- Write an SQL query that reports the **average** experience years of all the employees for each project, **rounded to 2 digits**.
- Return the result table in **any order**.
- The query result format is in the following example.

## Example

**Input:**

`Project` table

<ScrollableTableContainer>

| project_id | employee_id |
| ---------- | ----------- |
| 1          | 1           |
| 1          | 2           |
| 1          | 3           |
| 2          | 1           |
| 2          | 4           |

</ScrollableTableContainer>

`Employee` table

<ScrollableTableContainer>

| employee_id | name   | experience_years |
| ----------- | ------ | ---------------- |
| 1           | Khaled | 3                |
| 2           | Ali    | 2                |
| 3           | John   | 1                |
| 4           | Doe    | 2                |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| project_id | average_years |
| ---------- | ------------- |
| 1          | 2.00          |
| 2          | 2.50          |

</ScrollableTableContainer>

**Explanation:**

> The average experience years for the first project is $\frac{(3 + 2 + 1)}{3} = 2.00$ and for the second project is $\frac{(3 + 2)}{2} = 2.50$

# Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT
    p.project_id,
    ROUND(AVG(e.experience_years), 2) AS average_years
FROM
    Project p
JOIN
    Employee e ON p.employee_id = e.employee_id
GROUP BY
    p.project_id;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT p.project_id`: Select the `project_id` from the `Project` table.
  - `ROUND(AVG(e.experience_years), 2) AS average_years`: Calculate the average experience years of all employees for each project and round it to 2 digits.
- `FROM Project p`: Select the `Project` table and alias it as `p`.
- `JOIN Employee e ON p.employee_id = e.employee_id`: Join the `Employee` table with the `Project` table on the `employee_id`.
- `GROUP BY p.project_id`: Group the result by `project_id`.

</CustomAccordion>
