---
title: 2882. Drop Duplicate Rows
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
leetcodeInformation:
  - number: 2882
  - problemName: Drop Duplicate Rows
  - link: https://leetcode.com/problems/drop-duplicate-rows/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# 2882. Drop Duplicate Rows

DataFrame `customers`

<ScrollableTableContainer>

| Column Name | Type   |
| ----------- | ------ |
| customer_id | int    |
| name        | object |
| email       | object |

</ScrollableTableContainer>

## Instructions

- There are some duplicate rows in the DataFrame based on the `email` column.
- Write a solution to remove these duplicate rows and keep only the **first** occurrence.
- The result format is in the following example.

## Example

**Input:**

<ScrollableTableContainer>

| customer_id | name    | email               |
| ----------- | ------- | ------------------- |
| 1           | Ella    | emily@example.com   |
| 2           | David   | michael@example.com |
| 3           | Zachary | sarah@example.com   |
| 4           | Alice   | john@example.com    |
| 5           | Finn    | john@example.com    |
| 6           | Violet  | alice@example.com   |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| customer_id | name    | email               |
| ----------- | ------- | ------------------- |
| 1           | Ella    | emily@example.com   |
| 2           | David   | michael@example.com |
| 3           | Zachary | sarah@example.com   |
| 4           | Alice   | john@example.com    |
| 6           | Violet  | alice@example.com   |

</ScrollableTableContainer>

**Explanation:**

> Alic (`customer_id = 4`) and Finn (`customer_id = 5`) both use **john@example.com**, so only the first occurrence of this email is retained.

## Submissions

```python :line-numbers
import pandas as pd

def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    return customers.drop_duplicates(subset='email', keep='first')
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:`: Define a function called `dropDuplicateEmails` that takes a DataFrame `customers` as input and returns a DataFrame.
- `return customers.drop_duplicates(subset='email', keep='first')`: Remove duplicate rows based on the `email` column and keep only the first occurrence.

</CustomAccordion>
