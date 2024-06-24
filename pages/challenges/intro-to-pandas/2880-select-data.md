---
title: 2880. Select Data | Challenges | Cogxen
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

# 2880. Select Data

DataFrame `students`

| Column Name | Type   |
| ----------- | ------ |
| student_id  | int    |
| name        | object |
| age         | int    |

## Instructions

- Write a solution to select the name and age of the student with `student_id = 101`.
- The result format is in the following example.

## Example

**Input:**

| student_id | name    | age |
| ---------- | ------- | --- |
| 101        | Ulysses | 13  |
| 53         | William | 10  |
| 128        | Henry   | 6   |
| 3          | Henry   | 11  |

**Output:**

| name    | age |
| ------- | --- |
| Ulysses | 13  |

**Explanation:**

> Student Ulysses has `student_id = 101`, we select the `name` and `age`.

## Solution

```python :line-numbers
import pandas as pd

def selectData(students: pd.DataFrame) -> pd.DataFrame:
    return students.loc[students['student_id'] == 101, ['name', 'age']]
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the `pandas` library.
- `def selectData(students: pd.DataFrame) -> pd.DataFrame:`: Define a function that takes a DataFrame `students` and returns a DataFrame.
- `return students.loc[students['student_id'] == 101, ['name', 'age']]`: Select the rows where `student_id` is equal to 101 and columns `name` and `age`.

</CustomAccordion>
