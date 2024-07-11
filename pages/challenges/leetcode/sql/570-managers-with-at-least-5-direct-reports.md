---
title: 570. Managers with at Least 5 Direct Reports
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
  - number: 570
  - problemName: Managers with at Least 5 Direct Reports
  - link: https://leetcode.com/problems/managers-with-at-least-5-direct-reports/
  - difficulty: Medium
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 570. Managers with at Least 5 Direct Reports

## Problem Statement

Table: `Employee`

<ScrollableTableContainer>

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |
| department  | varchar |
| managerId   | int     |

</ScrollableTableContainer>

> `id` is the `primary key` (column with unique values) for this table.
>
> Each row of this table indicates the `name` of an employee, their `department`, and the `id` of their manager.
>
> If `managerId` is `NULL`, then the employee does not have a manager.
>
> NOTE: No employee will be the manager of themself.

## Instructions

- Write a solution to find managers with at least **five direct reports**.
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:** `Employee` table

<ScrollableTableContainer>

| id  | name  | department | managerId |
| --- | ----- | ---------- | --------- |
| 101 | John  | A          | NULL      |
| 102 | Dan   | A          | 101       |
| 103 | James | A          | 101       |
| 104 | Amy   | A          | 101       |
| 105 | Anne  | A          | 101       |
| 106 | Ron   | B          | 101       |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| name |
| ---- |
| John |

</ScrollableTableContainer>

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT t1.name
FROM Employee t1
JOIN Employee t2 ON t1.id = t2.managerId
GROUP BY t1.name
HAVING COUNT(t2.id) >= 5;
```

```python [Pandas] :line-numbers
import pandas as pd

def find_managers(employee: pd.DataFrame) -> pd.DataFrame:
    managers = employee.groupby('managerId').filter(lambda x: len(x) >= 5)
    return employee[employee['id'].isin(managers['managerId'])][['name']]
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT t1.name`: This part of the statement specifies the column that you want to retrieve from the database. In this case, you're retrieving the `name` column from the alias `t1` which represents the `Employee` table.
- `FROM Employee t1`: This part of the statement specifies the table from which you want to retrieve the data. Here, `Employee` is the table and `t1` is an alias used to refer to this table in the rest of the query.
- `JOIN Employee t2 ON t1.id = t2.managerId`: This is a `JOIN` operation that combines rows from two tables based on a related column. Here, it's joining the `Employee` table to itself based on the condition that the `id` of an employee in `t1` matches the `managerId` in `t2`. This effectively pairs each manager with their direct reports.
- `GROUP BY t1.name`: This part groups the result set by the `name` column of `t1`. This means that the output will have a single row for each unique manager name.
- `HAVING COUNT(t2.id) >= 5`: This is a filter applied after the `GROUP BY` operation. It only includes groups (in this case, managers) that have at least 5 direct reports. The `COUNT(t2.id)` function counts the number of direct reports for each manager.

In the SQL query, `t1` and `t2` are aliases for the `Employee` table. When you join a table to itself, you need to use aliases to differentiate between the two instances of the table.

</CustomAccordion>

<CustomAccordion title="Pandas" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning">

- `import pandas as pd`: This line imports the pandas library, which provides data structures and data analysis tools for Python. It's commonly imported under the alias `pd`.
- `def find_managers(employee: pd.DataFrame) -> pd.DataFrame:`: This line defines a function named `find_managers` that takes a pandas DataFrame `employee` as input and returns a DataFrame.
- `managers = employee.groupby('managerId').filter(lambda x: len(x) >= 5)`:
  - `employee.groupby('managerId')`: This groups the `employee` DataFrame by the `managerId` column. This creates a group for each unique `managerId`.
  - `.filter(lambda x: len(x) >= 5)`: This filters the groups to include only those where the size of the group (i.e., the number of direct reports) is greater than or equal to 5. The result is a DataFrame that includes only the rows from these groups.
  - `managers`: This DataFrame contains the managers with at least 5 direct reports.
- `return employee[employee['id'].isin(managers['managerId'])][['name']]`:
  - `employee['id'].isin(managers['managerId'])`: This creates a boolean Series that is `True` for rows in `employee` where the `id` is in the `managerId` column of managers.
  - `employee[...]`: This selects the rows from `employee` where the boolean Series is `True`. This effectively selects the managers with at least 5 direct reports.
  - `[['name']]`: This selects the `name` column from these rows to return as the result.
  - `return ...`: This returns a DataFrame containing the names of the managers with at least 5 direct reports.

</CustomAccordion>
