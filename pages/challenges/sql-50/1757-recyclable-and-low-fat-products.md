---
title: 1757. Recyclable and Low Fat Products | Challenges | Cogxen
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
---

# 1757. Recyclable and Low Fat Products

## Problem Statement

Table: `Products`

| Column Name | Type |
| ----------- | ---- |
| product_id  | int  |
| low_fats    | enum |
| recyclable  | enum |

> `product_id` is the `primary key` (column with unique values) for this table.
>
> `low_fats` is an `ENUM` (category) of type ('Y', 'N') where 'Y' means this product is low fat and 'N' means it is not.
>
> `recyclable` is an `ENUM` (category) of types ('Y', 'N') where 'Y' means this product is recyclable and 'N' means it is not.

## Instructions

- Write a solution to find the ids of the products that are both `low fat` and `recyclable`.
- Return the result in `any order`.
- The query result format is in the following example:

## Example

**Input:** `Products` table

| product_id | low_fats | recyclable |
| ---------- | -------- | ---------- |
| 0          | Y        | N          |
| 1          | Y        | Y          |
| 2          | N        | Y          |
| 3          | Y        | Y          |
| 4          | N        | N          |

**Output:**

| product_id |
| ---------- |
| 1          |
| 3          |

**Explanation:**

> The products with `id` 1 and 3 are both `low fat` and `recyclable`.

## Solutions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y';
```

```python [Pandas] :line-numbers
import pandas as pd

def find_products(products: pd.DataFrame) -pd.DataFrame:
    return products.query("low_fats == 'Y' and recyclable == 'Y'")[['product_id']]
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_github_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT product_id`: This is the `SELECT` statement, which specifies the data you want to retrieve from the database. In this case, you're selecting the `product_id` column, so the query will return the product IDs.
- `FROM Products`: This is the `FROM` clause, which specifies the table you want to retrieve data from. In this case, you're retrieving data from the `Products` table.
- `WHERE low_fats = 'Y' AND recyclable = 'Y'`: This is the WHERE clause, which specifies the conditions that the rows must meet to be included in the result set. In this case, the conditions are that `low_fats` must be equal to 'Y' (`low_fats = 'Y'`) and `recyclable` must be equal to 'Y' (`recyclable = 'Y'`).
  - `low_fats = 'Y'`: This condition is true for rows where `low_fats` is equal to 'Y'.
  - `recyclable = 'Y'`: This condition is true for rows where `recyclable` is equal to 'Y'.
  - `AND`: This is a logical operator that combines the two conditions. A row will be included in the result set only if both conditions are true.

</CustomAccordion>

<CustomAccordion title="Pandas" submitted_by="@noeyislearning" submit_github_url="https://github.com/noeyislearning">

- `import pandas as pd`: This line imports the pandas library and gives it the alias `pd`. Pandas is a powerful data manipulation library in Python that provides data structures and functions needed for manipulating structured data.
- `def find_products(products: pd.DataFrame) -pd.DataFrame:`: This line defines a function called `find_products` that takes a pandas DataFrame `products` as input and returns a pandas DataFrame. A DataFrame is a two-dimensional labeled data structure with columns of potentially different types. It's similar to a spreadsheet or SQL table, or a dictionary of Series objects.
- `return products.query("low_fats == 'Y' and recyclable == 'Y'")[['product_id']]`:
  This line does several things:
  - `products.query("low_fats == 'Y' and recyclable == 'Y'")`: This uses the `query` method of the DataFrame to filter rows. The argument to `query` is a string that defines the filtering condition. In this case, the condition is that the `low_fats` column should be 'Y' and the `recyclable` column should also be 'Y'. This will return a new DataFrame that only includes rows where both conditions are true.
  - `[['product_id']]`: This is indexing the DataFrame returned by the `query` method. It selects only the `product_id` column from the filtered DataFrame. The double brackets (`[[ ]]`) mean that the result will be a DataFrame. If you used single brackets (`[ ]`), the result would be a Series.

</CustomAccordion>
