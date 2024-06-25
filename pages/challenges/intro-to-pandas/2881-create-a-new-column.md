---
title: 2881. Create a New Column | Challenges | Cogxen
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
  - name: Intro to Pandas
  - link: https://leetcode.com/studyplan/introduction-to-pandas/
  - planImg: https://i.imgur.com/WzBPfZB.png
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 2881. Create a New Column

DataFrame `employees`

| Column Name | Type   |
| ----------- | ------ |
| name        | object |
| salary      | int.   |

## Instructions

- A company plans to provide its employees with a bonus.
- Write a solution to create a new column name `bonus` that contains the **doubled values** of the `salary` column.
- The result format is in the following example.

## Example

**Input:**

DataFrame `employees`

| name    | salary |
| ------- | ------ |
| Piper   | 4548   |
| Grace   | 28150  |
| Georgia | 1103   |
| Willow  | 6593   |
| Finn    | 74576  |
| Thomas  | 24433  |

**Output:**

| name    | salary | bonus  |
| ------- | ------ | ------ |
| Piper   | 4548   | 9096   |
| Grace   | 28150  | 56300  |
| Georgia | 1103   | 2206   |
| Willow  | 6593   | 13186  |
| Finn    | 74576  | 149152 |
| Thomas  | 24433  | 48866  |

**Explanation:**

> A new column bonus is created by doubling the value in the column salary.

## Solution

```python :line-numbers
import pandas as pd

def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees['bonus'] = employees['salary'] * 2
    return employees
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:`: Define a function called `createBonusColumn` that takes a DataFrame `employees` as input and returns a DataFrame.
- `employees['bonus'] = employees['salary'] * 2`: Create a new column `bonus` in the DataFrame `employees` by doubling the values in the column `salary`.
- `return employees`: Return the updated DataFrame `employees`.

</CustomAccordion>
