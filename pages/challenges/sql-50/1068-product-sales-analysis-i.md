---
title: 1068. Product Sales Analysis I | Challenges | Cogxen
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
  - name: Top SQL 50
  - link: https://leetcode.com/studyplan/top-sql-50/
  - planImg: https://i.imgur.com/cxH56Lt.png
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 1068. Product Sales Analysis I

## Problem Statement

Table: `Sales`

| Column Name | Type |
| ----------- | ---- |
| sale_id     | int  |
| product_id  | int  |
| year        | int  |
| quantity    | int  |
| price       | int  |

> (`sale_id`, `year`) is the primary key (combination of columns with unique values) of this table.
>
> `product_id` is a foreign key (reference column) to `Product` table.
>
> Note that the price is per unit.

Table: `Product`

| Column Name  | Type    |
| ------------ | ------- |
| product_id   | int     |
| product_name | varchar |

> `product_id` is the primary key of this table.
>
> Each row of this table indicates the product name of each product.

## Instructions

- Write a solution to report the `product_name`, `year`, and `price` for each `sale_id` in the Sales table.
- Return the resulting table in **any order**.
- The result format is in the following example.

## Example

**Input:**

`Sales` table

| sale_id | product_id | year | quantity | price |
| ------- | ---------- | ---- | -------- | ----- |
| 1       | 100        | 2008 | 10       | 5000  |
| 2       | 100        | 2009 | 12       | 5000  |
| 7       | 200        | 2011 | 15       | 9000  |

`Product` table

| product_id | product_name |
| ---------- | ------------ |
| 100        | Nokia        |
| 200        | Apple        |
| 300        | Samsung      |

**Output:**

| product_name | year | price |
| ------------ | ---- | ----- |
| Nokia        | 2008 | 5000  |
| Nokia        | 2009 | 5000  |
| Apple        | 2011 | 9000  |

**Explanation:**

> From `sale_id = 1`, we can conclude that Nokia was sold for `5000` in the year 2008.
>
> From `sale_id = 2`, we can conclude that Nokia was sold for `5000` in the year 2009.
>
> From `sale_id = 7`, we can conclude that Apple was sold for `9000` in the year 2011.

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT p.product_name, s.year, s.price
FROM Sales s
JOIN Product p ON s.product_id = p.product_id
```

```sql [MySQL] :line-numbers
SELECT p.product_name, s.year, s.price
FROM Sales s
JOIN Product p ON s.product_id = p.product_id
```

```sql [MS SQL Server] :line-numbers
SELECT p.product_name, s.year, s.price
FROM Sales s
JOIN Product p ON s.product_id = p.product_id
```

```python [Pandas] :line-numbers
import pandas as pd

def sales_analysis(sales: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:
    merged_df = pd.merge(sales, product, on='product_id')
    result_df = merged_df[['product_name', 'year', 'price']]

    return result_df
```

:::

## Explanations

<CustomAccordion title="PostgreSQL, MySQL, & MS SQL Server" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT p.product_name, s.year, s.price`: This query selects the `product_name`, `year`, and `price` columns from the `Product` and `Sales` tables.
- `FROM Sales s`: This part of the statement specifies the table from which you want to retrieve the data. Here, `Sales` is the table, and it's aliased as `s`.
- `JOIN Product p ON s.product_id = p.product_id`: This clause joins the `Sales` and `Product` tables on the `product_id` column, linking the two tables based on this common column.

</CustomAccordion>

<CustomAccordion title="Pandas" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning">

- `import pandas as pd`: This line imports the pandas library, which provides data structures and data analysis tools for Python. It's commonly imported under the alias `pd`.
- `def sales_analysis(sales: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame`: This function takes two pandas DataFrames (`sales` and `product`) as input and returns a pandas DataFrame as output.
- `merged_df = pd.merge(sales, product, on='product_id')`: This line merges the `sales` and `product` DataFrames on the `product_id` column, combining the data from both DataFrames based on this common column.
- `result_df = merged_df[['product_name', 'year', 'price']]`: This line selects the `product_name`, `year`, and `price` columns from the merged DataFrame to create the final result DataFrame.
- `return result_df`: This line returns the final result DataFrame containing the `product_name`, `year`, and `price` columns.

</CustomAccordion>
