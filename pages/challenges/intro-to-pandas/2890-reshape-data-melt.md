---
title: "2890. Reshape Data: Melt | Challenges | Cogxen"
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
  - number: 2890
  - problemName: "Reshape Data: Melt"
  - link: https://leetcode.com/problems/reshape-data-melt/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 2890. Reshape Data: Melt

DataFrame `report`

| Column Name | Type   |
| ----------- | ------ |
| product     | object |
| quarter_1   | int    |
| quarter_2   | int    |
| quarter_3   | int    |
| quarter_4   | int    |

## Instructions

- Write a solution to **reshape** the data so that each row represents sales data for a product in a specific quarter.
- The result format is in the following example.

## Example

**Input:**

| product     | quarter_1 | quarter_2 | quarter_3 | quarter_4 |
| ----------- | --------- | --------- | --------- | --------- |
| Umbrella    | 417       | 224       | 379       | 611       |
| SleepingBag | 800       | 936       | 93        | 875       |

**Output:**

| product     | quarter   | sales |
| ----------- | --------- | ----- |
| Umbrella    | quarter_1 | 417   |
| SleepingBag | quarter_1 | 800   |
| Umbrella    | quarter_2 | 224   |
| SleepingBag | quarter_2 | 936   |
| Umbrella    | quarter_3 | 379   |
| SleepingBag | quarter_3 | 93    |
| Umbrella    | quarter_4 | 611   |
| SleepingBag | quarter_4 | 875   |

**Explanation:**

> The DataFrame is reshaped from wide to long format. Each row represents the `sales` of a `product` in a `quarter`.

## Submissions

```python :line-numbers
import pandas as pd

def meltTable(report: pd.DataFrame) -> pd.DataFrame:
    return report.melt(id_vars='product', var_name='quarter', value_name='sales')
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: This line imports the pandas library, which is a powerful tool for data manipulation and analysis in Python, and aliases it as pd.
- `def meltTable(report: pd.DataFrame) -> pd.DataFrame`:
  - `meltTable` is the name of the function.
  - It accepts one parameter, `report`, which is expected to be a pandas DataFrame. The type hint `pd.DataFrame` indicates the expected type of the parameter and the return type of the function.
  - The function is annotated to return a DataFrame.
- `return report.melt(id_vars='product', var_name='quarter', value_name='sales')`:
  - The `melt` method is called on the `report` DataFrame.
  - `id_vars='product'`: This specifies the column(s) to use as identifier variables. In this case, the `product` column will remain as is, and the other columns will be "melted".
  - `var_name='quarter'`: This sets the name of the new column that will contain the column headers from the original DataFrame, which are not specified in `id_vars`. Essentially, it's the name for the "variable" column in the melted DataFrame.
  - `value_name='sales'`: This sets the name of the new column that will contain the values from the original DataFrame's columns that were melted. It's the name for the "value" column in the melted DataFrame.

</CustomAccordion>
