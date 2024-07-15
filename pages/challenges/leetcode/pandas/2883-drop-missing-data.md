---
title: 2883. Drop Missing Data
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
  - number: 2883
  - problemName: Drop Missing Data
  - link: https://leetcode.com/problems/drop-missing-data/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# 2883. Drop Missing Data

DataFrame `students`

<ScrollableTableContainer>

| Column Name | Type   |
| ----------- | ------ |
| student_id  | int    |
| name        | object |
| age         | int    |

</ScrollableTableContainer>

## Instructions

- There are some rows having missing values in the `name` column.
- Write a solution to remove the rows with missing values.
- The result format is in the following example.

## Example

**Input:**

<ScrollableTableContainer>

| student_id | name    | age |
| ---------- | ------- | --- |
| 32         | Piper   | 5   |
| 217        | None    | 19  |
| 779        | Georgia | 20  |
| 849        | Willow  | 14  |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| student_id | name    | age |
| ---------- | ------- | --- |
| 32         | Piper   | 5   |
| 779        | Georgia | 20  |
| 849        | Willow  | 14  |

</ScrollableTableContainer>

**Explanation:**

> Student with `id` 217 havs empty value in the name column, so it will be removed.

## Submissions

```python :line-numbers
import pandas as pd

def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
    return students.dropna(subset=['name'])
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:`: Define a function called `dropMissingData` that takes a DataFrame `students` as input and returns a DataFrame.
- `return students.dropna(subset=['name'])`: Remove the rows with missing values in the `name` column.

</CustomAccordion>
