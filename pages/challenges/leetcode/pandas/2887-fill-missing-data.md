---
title: 2887. Fill Missing Data
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
  - number: 2887
  - problemName: Fill Missing Data
  - link: https://leetcode.com/problems/fill-missing-data/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 2887. Fill Missing Data

DataFrame `products`

<ScrollableTableContainer>

| Column Name | Type   |
| ----------- | ------ |
| name        | object |
| quantity    | int    |
| price       | int    |

</ScrollableTableContainer>

## Instructions

- Write a solution to fill in the missing value as $0$ in the `quantity` column.
- The result format is in the following example.

## Example

**Input:**

<ScrollableTableContainer>

| name            | quantity | price |
| --------------- | -------- | ----- |
| Wristwatch      | None     | 135   |
| WirelessEarbuds | None     | 821   |
| GolfClubs       | 779      | 9319  |
| Printer         | 849      | 3051  |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| name            | quantity | price |
| --------------- | -------- | ----- |
| Wristwatch      | 0        | 135   |
| WirelessEarbuds | 0        | 821   |
| GolfClubs       | 779      | 9319  |
| Printer         | 849      | 3051  |

</ScrollableTableContainer>

**Explanation:**

> The quantity for Wristwatch and WirelessEarbuds are filled by $0$.

## Submissions

```python :line-numbers
import pandas as pd

def fillMissingValues(products: pd.DataFrame) -> pd.DataFrame:
    products['quantity'] = products['quantity'].fillna(0)
    return products
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: Import the pandas library to work with DataFrames.
- `def fillMissingValues(products: pd.DataFrame) -> pd.DataFrame`: Define a function that takes a DataFrame as input and returns a DataFrame.
- `products['quantity'] = products['quantity'].fillna(0)`: Fill the missing values in the `quantity` column with $0$.
- `return products`: Return the updated DataFrame.

</CustomAccordion>
