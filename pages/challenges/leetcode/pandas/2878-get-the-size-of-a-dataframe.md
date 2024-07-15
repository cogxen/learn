---
title: 2878. Get the Size of a DataFrame
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
  - number: 2878
  - problemName: Get the Size of a DataFrame
  - link: https://leetcode.com/problems/get-the-size-of-a-dataframe/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# 2877. Create a DataFrame from List

DataFrame `players`

<ScrollableTableContainer>

| Column Name | Type   |
| ----------- | ------ |
| player_id   | int    |
| name        | object |
| age         | int    |
| position    | object |
| ...         | ...    |

</ScrollableTableContainer>

## Instructions

- Write a solution to calculate and display the **number of rows and columns** of `players`.
- Return the result as an array: `[number of rows, number of columns]`
- The result format is in the following example.

## Example

**Input:**

<ScrollableTableContainer>

| player_id | name     | age | position    | team               |
| --------- | -------- | --- | ----------- | ------------------ |
| 846       | Mason    | 21  | Forward     | RealMadrid         |
| 749       | Riley    | 30  | Winger      | Barcelona          |
| 155       | Bob      | 28  | Striker     | ManchesterUnited   |
| 583       | Isabella | 32  | Goalkeeper  | Liverpool          |
| 388       | Zachary  | 24  | Midfielder  | BayernMunich       |
| 883       | Ava      | 23  | Defender    | Chelsea            |
| 355       | Violet   | 18  | Striker     | Juventus           |
| 247       | Thomas   | 27  | Striker     | ParisSaint-Germain |
| 761       | Jack     | 33  | Midfielder  | ManchesterCity     |
| 642       | Charlie  | 36  | Center-back | Arsenal            |

</ScrollableTableContainer>

**Output:**

```plaintext
[10, 5]
```

**Explanation:**

> This DataFrame contains 10 rows and 5 columns.

## Submissions

```python :line-numbers
import pandas as pd

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    return list(players.shape)
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def getDataframeSize(players: pd.DataFrame) -> List[int]:`: Define a function called `getDataframeSize` that takes a DataFrame `players` as input and returns a list of integers.
- `return list(players.shape)`: Return the shape of the DataFrame `players` as a list.

</CustomAccordion>
