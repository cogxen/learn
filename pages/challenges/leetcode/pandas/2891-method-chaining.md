---
title: "2891. Method Chaining"
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
  - number: 2891
  - problemName: Method Chaining
  - link: https://leetcode.com/problems/method-chaining/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 2891. Method Chaining

DataFrame `animals`

<ScrollableTableContainer>

| Column Name | Type   |
| ----------- | ------ |
| name        | object |
| species     | object |
| age         | int    |
| weight      | int    |

</ScrollableTableContainer>

## Instructions

- Write a solution to list the names of animals that weigh strictly more than `100` kilograms.
- Return the animals sorted by weight in **descending order**.
- The result format is in the following example.

## Example

**Input:**

<ScrollableTableContainer>

| name     | species | age | weight |
| -------- | ------- | --- | ------ |
| Tatiana  | Snake   | 98  | 464    |
| Khaled   | Giraffe | 50  | 41     |
| Alex     | Leopard | 6   | 328    |
| Jonathan | Monkey  | 45  | 463    |
| Stefan   | Bear    | 100 | 50     |
| Tommy    | Panda   | 26  | 349    |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| name     |
| -------- |
| Tatiana  |
| Jonathan |
| Tommy    |
| Alex     |

</ScrollableTableContainer>

**Explanation:**

> All animals weighing more than $100$ should be included in the results table.
>
> Tatiana's weight is $464$, Jonathan's weight is $463$, Tommy's weight is $349$, and Alex's weight is $328$.
>
> The results should be sorted in **descending order** of `weight`.

## Submissions

```python :line-numbers
import pandas as pd

def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:
    heavy_animals = animals[animals['weight'] > 100]
    sorted_animals = heavy_animals.sort_values(by='weight', ascending=False)
    return sorted_animals[['name']]
```

## Explanation

<CustomAccordion title="Python (Pandas)" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `import pandas as pd`: This line imports the pandas library, which is a powerful tool for data manipulation and analysis in Python, and aliases it as pd.
- `def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:`: The function `findHeavyAnimals` takes one parameter, `animals`, which is expected to be a pandas DataFrame. The type hint `pd.DataFrame` is used for both the parameter and the return type, indicating that the function accepts a DataFrame as input and returns a DataFrame.
- `heavy_animals = animals[animals['weight'] > 100]`: This line filters the input DataFrame `animals` to include only the rows where the value in the 'weight' column is greater than 100. The result is stored in the `heavy_animals` DataFrame.
- `sorted_animals = heavy_animals.sort_values(by='weight', ascending=False)`: The `sort_values` method is used to sort the `heavy_animals` DataFrame by the 'weight' column in descending order. The `ascending=False` argument specifies that the sorting should be done in descending order.
- `return sorted_animals[['name']]`: The function returns a DataFrame containing only the 'name' column of the `sorted_animals` DataFrame. This DataFrame contains the names of animals that weigh more than 100 kilograms, sorted by weight in descending order.

</CustomAccordion>
