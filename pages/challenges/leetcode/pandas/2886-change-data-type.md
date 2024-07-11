---
title: 2886. Change Data Type
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
  - number: 2886
  - problemName: Change Data Type
  - link: https://leetcode.com/problems/change-data-type/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 2886. Change Data Type

DataFrame `students`

<ScrollableTableContainer>

| Column Name | Type   |
| ----------- | ------ |
| student_id  | int    |
| name        | object |
| age         | int    |
| grade       | float  |

</ScrollableTableContainer>

## Instructions

- Write a solution to correct the errors.
- The `grade` column is stored as floats, convert it to integers.
- The result format is in the following example.

## Example

**Input:**

DataFrame `students`

<ScrollableTableContainer>

| student_id | name | age | grade |
| ---------- | ---- | --- | ----- |
| 1          | Ava  | 6   | 73.0  |
| 2          | Kate | 15  | 87.0  |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| student_id | name | age | grade |
| ---------- | ---- | --- | ----- |
| 1          | Ava  | 6   | 73    |
| 2          | Kate | 15  | 87    |

</ScrollableTableContainer>

**Explanation:**

> The data types of the column grade is converted to int.

## Submissions

```python :line-numbers
import pandas as pd

def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
    students['grade'] = students['grade'].astype(int)
    return students
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def changeDatatype(students: pd.DataFrame) -> pd.DataFrame`: Define a function that takes a DataFrame as input and returns a DataFrame.
- `students['grade'] = students['grade'].astype(int)`: Convert the `grade` column to integers using the `astype` method.
- `return students`: Return the updated DataFrame.

</CustomAccordion>
