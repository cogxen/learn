---
title: "2889. Reshape Data: Pivot"
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
  - number: 2889
  - problemName: "Reshape Data: Pivot"
  - link: https://leetcode.com/problems/reshape-data-pivot/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# 2889. Reshape Data: Pivot

DataFrame `weather`

<ScrollableTableContainer>

| Column Name | Type   |
| ----------- | ------ |
| city        | object |
| month       | object |
| temperature | int    |

</ScrollableTableContainer>

## Instructions

- Write a solution to **pivot** the data so that each row represents temperatures for a specific month, and each city is a separate column.
- The result format is in the following example.

## Example

**Input:**

<ScrollableTableContainer>

| city         | month    | temperature |
| ------------ | -------- | ----------- |
| Jacksonville | January  | 13          |
| Jacksonville | February | 23          |
| Jacksonville | March    | 38          |
| Jacksonville | April    | 5           |
| Jacksonville | May      | 34          |
| ElPaso       | January  | 20          |
| ElPaso       | February | 6           |
| ElPaso       | March    | 26          |
| ElPaso       | April    | 2           |
| ElPaso       | May      | 43          |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| month    | ElPaso | Jacksonville |
| -------- | ------ | ------------ |
| April    | 2      | 5            |
| February | 6      | 23           |
| January  | 20     | 13           |
| March    | 26     | 38           |
| May      | 43     | 34           |

</ScrollableTableContainer>

**Explanation:**

> The table is pivoted, each column represents a `city`, and each row represents a specific month.

## Submissions

```python :line-numbers
import pandas as pd

def pivotTable(weather: pd.DataFrame) -> pd.DataFrame:
    return weather.pivot(index='month', columns='city', values='temperature')
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning" :collapsed=false>

- `import pandas as pd`: This line imports the pandas library and aliases it as pd. Pandas is a popular Python library for data manipulation and analysis.
- `def pivotTable(weather: pd.DataFrame) -> pd.DataFrame`:
  - `pivotTable` is the name of the function.
  - It takes one parameter, `weather`, which is expected to be a pandas DataFrame (`pd.DataFrame`). The type hint `pd.DataFrame` helps developers understand that the function expects a DataFrame object as input.
  - The function is also annotated to return a DataFrame (`-> pd.DataFrame`).
- `return weather.pivot(index='month', columns='city', values='temperature')`:
  - This line uses the `pivot` method of the DataFrame to transform the `weather` DataFrame.
  - `index='month'`: This sets the `month` column of the original DataFrame as the new index (rows) of the resulting pivoted table.
  - `columns='city'`: This argument specifies that the unique values in the city column will become the columns of the resulting DataFrame.
  - `values='temperature'`: This indicates that the values in the `temperature` column of the original DataFrame will fill the cells of the pivoted table.
  - The result of this operation is a pivoted table where each row represents a month, each column represents a city, and the cell values are the temperatures.

</CustomAccordion>
