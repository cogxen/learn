---
title: 2885. Rename Columns | Challenges | Cogxen
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

# 2885. Rename Columns

DataFrame `students`

| Column Name | Type   |
| ----------- | ------ |
| id          | int    |
| first       | object |
| last        | object |
| age         | int    |

## Instructions

- Write a solution to rename the columns as follows:

  - `id` to `student_id`
  - `first` to `first_name`
  - `last` to `last_name`
  - `age` to `age_in_years`

- The result format is in the following example.

## Example

**Input:**

| id  | first   | last     | age |
| --- | ------- | -------- | --- |
| 1   | Mason   | King     | 6   |
| 2   | Ava     | Wright   | 7   |
| 3   | Taylor  | Hall     | 16  |
| 4   | Georgia | Thompson | 18  |
| 5   | Thomas  | Moore    | 10  |

**Output:**

| student_id | first_name | last_name | age_in_years |
| ---------- | ---------- | --------- | ------------ |
| 1          | Mason      | King      | 6            |
| 2          | Ava        | Wright    | 7            |
| 3          | Taylor     | Hall      | 16           |
| 4          | Georgia    | Thompson  | 18           |
| 5          | Thomas     | Moore     | 10           |

**Explanation:**

> The column names are changed accordingly.

## Solution

```python :line-numbers
import pandas as pd

def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
    return students.rename(columns={
        'id': 'student_id',
        'first': 'first_name',
        'last': 'last_name',
        'age': 'age_in_years'
    })
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def renameColumns(students: pd.DataFrame) -> pd.DataFrame:`: Define a function called `renameColumns` that takes a DataFrame `students` as input and returns a DataFrame.
- `return students.rename(columns={...})`: Rename the columns of the DataFrame using a dictionary where the keys are the original column names and the values are the new column names.

</CustomAccordion>
