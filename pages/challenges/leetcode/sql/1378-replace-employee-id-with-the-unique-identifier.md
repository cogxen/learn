---
title: 1378. Replace Employee ID With The Unique Identifier
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
  - number: 1378
  - problemName: Replace Employee ID With The Unique Identifier
  - link: https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# 1378. Replace Employee ID With The Unique Identifier

## Problem Statement

Table: `Employee`

<ScrollableTableContainer>

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |

</ScrollableTableContainer>

> `id` is the `primary key` (column with unique values) for this table.
>
> Each row of this table indicates the `name` of an employee and their `id`.

Table: `EmployeeUNI`

<ScrollableTableContainer>

| Column Name | Type |
| ----------- | ---- |
| id          | int  |
| unique_id   | int  |

</ScrollableTableContainer>

> (`id`, `unique_id`) is the primary key (combination of columns with unique values) for this table.
>
> Each row of this table contains the id and the corresponding unique id of an employee in the company.

## Instructions

- Write a solution to show the **unique ID** of each user, If a user does not have a unique ID replace just show `null`.
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:**

`Employee` table

<ScrollableTableContainer>

| id  | name     |
| --- | -------- |
| 1   | Alice    |
| 7   | Bob      |
| 11  | Meir     |
| 90  | Winston  |
| 3   | Jonathan |

</ScrollableTableContainer>

`EmployeeUNI` table

<ScrollableTableContainer>

| id  | unique_id |
| --- | --------- |
| 3   | 1         |
| 11  | 2         |
| 90  | 3         |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| unique_id | name     |
| --------- | -------- |
| null      | Alice    |
| null      | Bob      |
| 2         | Meir     |
| 3         | Winston  |
| 1         | Jonathan |

</ScrollableTableContainer>

**Explanation:**

> Alice and Bob do not have a unique ID, We will show null instead.
>
> The unique ID of Meir is 2.
>
> The unique ID of Winston is 3.
>
> The unique ID of Jonathan is 1.

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT emuni.unique_id, em.name
FROM Employees em
LEFT JOIN EmployeeUNI emuni ON em.id = emuni.id
```

```python [Pandas] :line-numbers
import pandas as pd

def replace_employee_id(employees: pd.DataFrame, employee_uni: pd.DataFrame) -> pd.DataFrame:
    merged_df = pd.merge(employees, employee_uni, on='id', how='left')
    result_df = merged_df[['unique_id', 'name']]
    return result_df
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning" :collapsed=false>

- `SELECT emuni.unique_id, em.name`: Select the `unique_id` and `name` columns from the `Employee` with and alias `em` and `EmployeeUNI` with an alias `emuni`.
- `FROM Employees em`: Select the `Employees` table and alias it as `em`.
- `LEFT JOIN EmployeeUNI emuni ON em.id = emuni.id`: This instruction performs a left outer join between the `Employees` table and the `EmployeeUNI` table. The join condition is that the `id` column in `Employees` matches the `id` column in `EmployeeUNI`. A left join ensures that all records from the left table (`Employees`) are included in the result set, even if there is no matching record in the right table (`EmployeeUNI`). For employees without a corresponding unique_id, the `unique_id` field in the result set will be `NULL`.

In summary, this query is designed to list all employees by name along with their unique identifiers if they have one. Employees without a unique identifier in the `EmployeeUNI` table will still be listed, but their `unique_id` will be shown as `NULL`.

</CustomAccordion>

<CustomAccordion title="Pandas" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning">

- `import pandas as pd`: This line imports the pandas library, which provides data structures and data analysis tools for Python. It's commonly imported under the alias `pd`.
- `def replace_employee_id(employees: pd.DataFrame, employee_uni: pd.DataFrame) -> pd.DataFrame`: This function takes two pandas DataFrames as input: `employees` and `employee_uni`. It returns a DataFrame with the `unique_id` and `name` columns.
- `merged_df = pd.merge(employees, employee_uni, on='id', how='left')`: This line merges the `employees` and `employee_uni` DataFrames on the `id` column using a left join. The `how='left'` parameter specifies that all records from the `employees` DataFrame should be included in the result, even if there is no matching record in the `employee_uni` DataFrame.
- `result_df = merged_df[['unique_id', 'name']]`: This line selects the `unique_id` and `name` columns from the merged DataFrame to create the final result DataFrame.
- The function returns the `result_df`, which contains the `unique_id` and `name` columns for each employee.

</CustomAccordion>
