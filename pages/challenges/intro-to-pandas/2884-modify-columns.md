---
title: 2884. Modify Columns | Challenges | Cogxen
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
  - name: Intro To Pandas
  - link: https://leetcode.com/studyplan/introduction-to-pandas/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 2884. Modify Columns

DataFrame `employees`

| Column Name | Type   |
| ----------- | ------ |
| name        | object |
| salary      | int    |

## Instructions

- A company intends to give its employees a pay rise.
- Write a solution to modify the `salary` column by multiplying each salary by 2.
- The result format is in the following example.

## Example

**Input:**

DataFrame `employees`

| name    | salary |
| ------- | ------ |
| Jack    | 19666  |
| Piper   | 74754  |
| Mia     | 62509  |
| Ulysses | 54866  |

**Output:**

| name    | salary |
| ------- | ------ |
| Jack    | 39332  |
| Piper   | 149508 |
| Mia     | 125018 |
| Ulysses | 109732 |

**Explanation:**

> Every salary has been doubled.

## Solution

```python :line-numbers
import pandas as pd

def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees['salary'] = employees['salary'] * 2
    return employees
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:`: Define a function called `modifySalaryColumn` that takes a DataFrame `employees` as input and returns a DataFrame.
- `employees['salary'] = employees['salary'] * 2`: Modify the `salary` column by multiplying each salary by 2.
- `return employees`: Return the modified DataFrame `employees`.

</CustomAccordion>
