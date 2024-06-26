---
title: "2888. Reshape Data: Concatenate | Challenges | Cogxen"
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
  - number: 2888
  - problemName: "Reshape Data: Concatenate"
  - link: https://leetcode.com/problems/reshape-data-concatenate/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 2888. Reshape Data: Concatenate

DataFrame `df1`

<ScrollableTableContainer>

| Column Name | Type   |
| ----------- | ------ |
| student_id  | int    |
| name        | object |
| age         | int    |

</ScrollableTableContainer>

DataFrame `df2`

<ScrollableTableContainer>

| Column Name | Type   |
| ----------- | ------ |
| student_id  | int    |
| name        | object |
| age         | int    |

</ScrollableTableContainer>

## Instructions

- Write a solution to concatenate these two DataFrames **vertically** into one DataFrame.
- The result format is in the following example.

## Example

**Input:**

DataFrame `df1`

<ScrollableTableContainer>

| student_id | name    | age |
| ---------- | ------- | --- |
| 1          | Mason   | 8   |
| 2          | Ava     | 6   |
| 3          | Taylor  | 15  |
| 4          | Georgia | 17  |

</ScrollableTableContainer>

DataFrame `df2`

<ScrollableTableContainer>

| student_id | name | age |
| ---------- | ---- | --- |
| 5          | Leo  | 7   |
| 6          | Alex | 7   |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| student_id | name    | age |
| ---------- | ------- | --- |
| 1          | Mason   | 8   |
| 2          | Ava     | 6   |
| 3          | Taylor  | 15  |
| 4          | Georgia | 17  |
| 5          | Leo     | 7   |
| 6          | Alex    | 7   |

</ScrollableTableContainer>

**Explanation:**

> The two DataFramess are stacked vertically, and their rows are combined.

## Submissions

```python :line-numbers
import pandas as pd

def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame:
    return pd.concat([df1, df2], axis=0)
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame`: Define a function that takes two DataFrames as input and returns a concatenated DataFrame.
- `return pd.concat([df1, df2], axis=0)`: Concatenate the two DataFrames `df1` and `df2` vertically using the `pd.concat` function with `axis=0`.

</CustomAccordion>
