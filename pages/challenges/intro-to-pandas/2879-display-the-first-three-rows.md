---
title: 2879. Display the First Three Rows | Challenges | Cogxen
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
  - number: 2879
  - problemName: Display the First Three Rows
  - link: https://leetcode.com/problems/display-the-first-three-rows/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 2879. Display the First Three Rows

DataFrame `employees`

<ScrollableTableContainer>

| Column Name | Type   |
| ----------- | ------ |
| employee_id | int    |
| name        | object |
| department  | object |
| salary      | int    |

</ScrollableTableContainer>

## Instructions

- Write a solution to **display the first three rows** of `employees`.

## Example

**Input:**

DataFrame `employees`

<ScrollableTableContainer>

| employee_id | name      | department            | salary |
| ----------- | --------- | --------------------- | ------ |
| 3           | Bob       | Operations            | 48675  |
| 90          | Alice     | Sales                 | 11096  |
| 9           | Tatiana   | Engineering           | 33805  |
| 60          | Annabelle | InformationTechnology | 37678  |
| 49          | Jonathan  | HumanResources        | 23793  |
| 43          | Khaled    | Administration        | 40454  |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| employee_id | name    | department  | salary |
| ----------- | ------- | ----------- | ------ |
| 3           | Bob     | Operations  | 48675  |
| 90          | Alice   | Sales       | 11096  |
| 9           | Tatiana | Engineering | 33805  |

</ScrollableTableContainer>

**Explanation:**

> Only the first 3 rows are displayed.

## Submissions

```python :line-numbers
import pandas as pd

def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    return employees.head(3)
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:`: Define a function called `selectFirstRows` that takes a DataFrame `employees` as input and returns a DataFrame.
- `return employees.head(3)`: Return the first 3 rows of the DataFrame `employees`.

</CustomAccordion>
