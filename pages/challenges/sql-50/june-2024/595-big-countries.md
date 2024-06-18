---
title: 595. Big Countries | Challenges | Cogxen
description: Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.
head:
  - - meta
    - name: description
    - content: Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.
  - - meta
    - name: keywords
      content: data data science machine learning AI data analysis data-driven data enthusiasts data practitioners
lastUpdated: true
editLink: false
footer: false
---

# 595. Big Countries

## Problem Statement

Table: `World`

| Column Name | Type    |
| ----------- | ------- |
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | big int |

> `name` is the primary key (column with unique values) for this table.
>
> Each row of this table gives information about the `name` of a country, the `continent` to which it belongs, its `area`, the `population`, and its `GDP` value.
>
> A country is big if it has an `area` of bigger than $3,000,000\space km^2$ or a `population` of more than $25,000,000$.

## Instructions

- Write a solution to find the name, population, and area of the **big countries**.
- Return the result table in **any order**.
- The result form is the following example.

## Example

**Input:** `World` table

| name        | continent | area    | population | gdp          |
| ----------- | --------- | ------- | ---------- | ------------ |
| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
| Andorra     | Europe    | 468     | 78115      | 3712000000   |
| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |

**Output:**

| name        | population | area    |
| ----------- | ---------- | ------- |
| Afghanistan | 25500100   | 652230  |
| Algeria     | 37100000   | 2381741 |

## Solutions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000
```

```python [Pandas] :line-numbers
import pandas as pd

def big_countries(world: pd.DataFrame) -> pd.DataFrame:
    return world.loc[(world['area'] >= 3000000) | (world['population'] >= 25000000), ['name', 'population', 'area']]
```

:::

## Breaking Down the Solutions

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_github_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT name, population, area`: This part of the statement specifies the columns that you want to retrieve from the database. In this case, you're retrieving the `name`, `population`, and `area` columns.
- `FROM World`: This part of the statement specifies the table from which you want to retrieve the data. In this case, you're retrieving data from the `World` table.
- `WHERE area >= 3000000 OR population >= 25000000`: This is the condition for selecting the rows. Only rows that satisfy this condition will be included in the result. The condition here is that either the area should be greater than or equal to 3,000,000 or the population should be greater than or equal to 25,000,000. The OR operator ensures that if either of these conditions is met, the row will be included in the result.

</CustomAccordion>

<CustomAccordion title="Pandas" submitted_by="@noeyislearning" submit_github_url="https://github.com/noeyislearning">

- `import pandas as pd`: This line imports the pandas library, which provides data structures and data analysis tools for Python. It's commonly imported under the alias `pd`.
- `def big_countries(world: pd.DataFrame) -> pd.DataFrame:`: This line defines a function named `big_countries` that takes a pandas DataFrame `world` as input and returns a DataFrame.
- `world.loc[(world['area'] >= 3000000) | (world['population'] >= 25000000), ['name', 'population', 'area']]`:

  This line is where the function does its work.

  - `world['area'] >= 3000000 and world['population'] >= 25000000`: These are boolean Series that are `True` for rows where the `area` is at least 3,000,000 or the `population` is at least 25,000,000, respectively.
  - The `|` operator is the logical OR operator for pandas Series. It returns a new boolean Series that is `True` where either of the input Series is `True`. So, `(world['area'] >= 3000000) | (world['population'] >= 25000000)` is a boolean Series that is `True` for rows where either the `area` is at least 3,000,000 or the `population` is at least 25,000,000.
  - `world.loc[...]` selects rows from `world` where the boolean Series is `True`.
  - `['name', 'population', 'area']` after the comma specifies the columns to include in the output DataFrame.

</CustomAccordion>
