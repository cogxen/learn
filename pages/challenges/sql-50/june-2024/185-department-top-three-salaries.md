---
title: 185. Department Top Three Salaries | Challenges | Cogxen
description: Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.
head:
  - - meta
    - name: description
    - content: Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.
  - - meta
    - name: keywords
      content: data data science machine learning AI data analysis data-driven data enthusiasts data practitioners
lastUpdated: true
editLink: false
footer: false
---

# 185. Department Top Three Salaries

## Problem Statement

Table: `Employee`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |
| salary      | int     |
| department  | varchar |

> `id` is the `primary key` for this table.
> `departmentId` is a foreign key of the ID from the `Deparment` table.
> Each row of this table indicates the `id`, `name`, `salary`, and `department` of an employee.

Table: `Department`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |

> `id` is the `primary key` for this table.
> Each row of this table indicates the `id` and `name` of a department.

## Instructions

- A company's executives are interested in seeing who earns the most money in each of the company's departments. A **high earner** in a department is an employee who has a salary in the **top three unique salaries** for that department.
- Write a solution to find the employees who are **high earners** in each of the departments.
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:** `Employee` table

| id  | name  | salary | department |
| --- | ----- | ------ | ---------- |
| 1   | Joe   | 85000  | 1          |
| 2   | Henry | 80000  | 2          |
| 3   | Sam   | 60000  | 2          |
| 4   | Max   | 90000  | 1          |
| 5   | Janet | 69000  | 1          |
| 6   | Randy | 85000  | 1          |
| 7   | Will  | 70000  | 1          |

**Input:** `Department` table

| id  | name  |
| --- | ----- |
| 1   | IT    |
| 2   | Sales |

**Output:**

| Deparment | Employee | Salary |
| --------- | -------- | ------ |
| IT        | Max      | 90000  |
| IT        | Joe      | 85000  |
| IT        | Randy    | 85000  |
| IT        | Will     | 70000  |
| Sales     | Henry    | 80000  |
| Sales     | Sam      | 60000  |

**Explanation:**

In the `IT` department:

- Max earns the highest unique salary.
- Joe and Randy earn the second and third highest unique salary.
- Will earns the fourth highest salary.

In the `Sales` department:

- Henry earns the highest unique salary.
- Sam earns the second highest unique salary.
- There is no third highest salary as there are only two employees in the department.

## Solutions

::: code-group

```sql [PostgreSQL] :line-numbers
WITH RankedSalaries AS (
    SELECT
        e.id,
        e.name AS Employee,
        e.salary,
        e.departmentId,
        d.name AS Department,
        DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS salary_rank
    FROM
        Employee e
    JOIN
        Department d ON e.departmentId = d.id
)
SELECT
    Department,
    Employee,
    salary
FROM
    RankedSalaries
WHERE
    salary_rank <= 3
ORDER BY
    Department,
    salary DESC,
    Employee;
```

```python [Pandas] :line-numbers
import pandas as pd

def top_three_salaries(employee: pd.DataFrame, department: pd.DataFrame) -> pd.DataFrame:
    merged = pd.merge(employee, department, left_on='departmentId', right_on='id', suffixes=('_employee', '_department'))
    merged['salary_rank'] = merged.groupby('departmentId')['salary'].rank(method='dense', ascending=False)
    top_earners = merged[merged['salary_rank'] <= 3]
    result = top_earners[['name_department', 'name_employee', 'salary']].rename(columns={'name_department': 'Department', 'name_employee': 'Employee'})

    return result
```

:::

## Breaking Down the Solutions

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_github_url="https://github.com/noeyislearning" :collapsed=false>

This SQL code snippet is designed to retrieve the top three highest salaries in each department from a database that contains `Employee` and `Department` tables. Here's a step-by-step explanation of how it works:

1. **Common Table Expression (CTE)**: The code starts with a CTE named `RankedSalaries`. A **CTE** is a temporary result set that you can reference within a `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement.
2. **SELECT Statement Inside CTE**: Inside the **CTE**, there's a `SELECT` statement that performs several operations:
   - It joins the `Employee` table (`e`) with the `Department` table (`d`) on their common field, `departmentId`, to combine related records.
   - It selects the employee's ID, name (renamed as `Employee`), salary, department ID, and the department's name (renamed as `Department`).
   - It uses the `DENSE_RANK()` window function to assign a rank to each employee within their respective department based on their salary in descending order. This means the highest salary in each department gets a rank of 1, the next highest salary (even if it's the same amount) gets a rank of 2, and so on, without any gaps in the ranking sequence.
3. **Main `SELECT` Statement**: After the CTE is defined, the main SELECT statement fetches the `Department`, `Employee`, and `salary` from the `RankedSalaries` CTE.
4. `WHERE`: This clause filters the results to only include employees whose `salary_rank` is 3 or less, effectively limiting the results to the top three earners in each department.
5. `ORDER BY`: Finally, the results are ordered first by `Department` (alphabetically), then by `salary` in descending order (so higher salaries appear first), and then by `Employee` name (alphabetically). This ordering ensures that the output is neatly organized by department and within each department, employees are listed from highest to lowest salary, with ties broken by employee name.

Overall, this SQL query efficiently identifies and lists the top three earners in each department, showcasing the use of **_window functions_**, **_CTEs_**, and `JOIN` operations to manipulate and present data from relational databases.

</CustomAccordion>

<CustomAccordion title="Pandas" submitted_by="@noeyislearning" submit_github_url="https://github.com/noeyislearning">

- `import pandas as pd`: This line imports the pandas library, which provides data structures and data analysis tools for Python. It's commonly imported under the alias `pd`.
- `def top_three_salaries(employee: pd.DataFrame, department: pd.DataFrame) -> pd.DataFrame:`: This function takes two pandas DataFrames, `employee` and `department`, as input and returns a DataFrame.
- `merged = pd.merge(employee, department, left_on='departmentId', right_on='id', suffixes=('_employee', '_department'))`: This merges the `employee` and `department` DataFrames on the `departmentId` and `id` columns, respectively. The `suffixes` parameter is used to differentiate columns with the same name in the two DataFrames.
- `merged['salary_rank'] = merged.groupby('departmentId')['salary'].rank(method='dense', ascending=False)`: This calculates the rank of each employee's salary within their department using the `rank` method with the `dense` method. The `ascending=False` parameter ensures that higher salaries receive lower ranks.
- `top_earners = merged[merged['salary_rank'] <= 3]`: This filters the merged DataFrame to include only the top three earners in each department based on their salary rank.
- `result = top_earners[['name_department', 'name_employee', 'salary']].rename(columns={'name_department': 'Department', 'name_employee': 'Employee'})`: This selects the relevant columns (`name_department`, `name_employee`, `salary`) and renames them to match the expected output format.
- `return result`: This returns a DataFrame containing the top three earners in each department with the specified column names.

</CustomAccordion>
