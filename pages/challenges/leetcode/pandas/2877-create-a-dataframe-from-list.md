---
title: 2877. Create a DataFrame from List
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
  - number: 2877
  - problemName: Create a DataFrame from List
  - link: https://leetcode.com/problems/create-a-dataframe-from-list/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 2877. Create a DataFrame from List

## Instructions

- Write a solution to **create** a DataFrame from a 2D list called `student_data`. This 2D list contains the IDs and ages of some students.
- The DataFrame should have two columns, `student_id` and `age`, and be in the same order as the original 2D list.
- The result format is in the following example.

## Example

**Input:**

`student_data`:

```plaintext :line-numbers
[
  [1, 15],
  [2, 11],
  [3, 11],
  [4, 20]
]
```

**Output:**

<ScrollableTableContainer>

| student_id | age |
| ---------- | --- |
| 1          | 15  |
| 2          | 11  |
| 3          | 11  |
| 4          | 20  |

</ScrollableTableContainer>

**Explanation:**

> A DataFrame was created on top of `student_data`, with two columns named `student_id` and `age`.

## Submissions

```python :line-numbers
import pandas as pd

def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:
    df = pd.DataFrame(student_data, columns=['student_id', 'age'])
    return df
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:`: Define a function called `createDataframe` that takes a 2D list `student_data` as input and returns a DataFrame.
- `df = pd.DataFrame(student_data, columns=['student_id', 'age'])`: Create a DataFrame `df` from the 2D list `student_data` with columns named `student_id` and `age`.
- `return df`: Return the DataFrame `df`.

</CustomAccordion>
