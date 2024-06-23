---
title: 584. Find Customer Referee | Challenges | Cogxen
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

# 584. Find Customer Referee

## Problem Statement

Table: `Customers`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |
| referee_id  | int     |

> In SQL, `id` is the `primary key` column for this table.
>
> Each row of this table indicates the `id` of a customer, their name, and the id (`referee_id`) of the customer who referred them.

## Instructions

- Find the names of customer that are **not referred by** any customer with `id = 2`.
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:** `Customers` table

| id  | name | referee_id |
| --- | ---- | ---------- |
| 1   | Will | null       |
| 2   | Jane | null       |
| 3   | Alex | 2          |
| 4   | Bill | null       |
| 5   | Zack | 1          |
| 6   | Mark | 2          |

**Output:**

| name |
| ---- |
| Will |
| Jane |
| Bill |
| Zack |

## Solutions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT name
FROM Customer
WHERE referee_id != 2 OR referee_id IS NULL;
```

```python [Pandas] :line-numbers
import pandas as pd

def find_customer_referee(customer: pd.DataFrame) -pd.DataFrame:
    return customer[(customer['referee_id'] != 2) | (customer['referee_id'].isnull())][['name']]
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_github_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT name`: This is the `SELECT` statement, which specifies the data you want to retrieve from the database. In this case, you're selecting the `name` column, so the query will return the names of customers.
- `FROM Customer`: This is the `FROM` clause, which specifies the table you want to retrieve data from. In this case, you're retrieving data from the `Customer` table.
- `WHERE referee_id != 2 OR referee_id IS NULL`: This is the `WHERE` clause, which specifies the conditions that the rows must meet to be included in the result set. In this case, the conditions are that `referee_id` must not be equal to 2 (`referee_id != 2`) or `referee_id` must be null (`referee_id IS NULL`).
  - `referee_id != 2`: This condition is true for rows where `referee_id` is not equal to 2.
  - `referee_id IS NULL`: This condition is true for rows where `referee_id` is null. In SQL, null is a special marker used to indicate that a data value does not exist in the database.
  - `OR`: This is a logical operator that combines the two conditions. A row will be included in the result set if either condition is true.

</CustomAccordion>

<CustomAccordion title="Pandas" submitted_by="@noeyislearning" submit_github_url="https://github.com/noeyislearning">

- `import pandas as pd`: This line imports the pandas library and gives it the alias pd. Pandas is a powerful data manipulation library in Python that provides data structures and functions needed for manipulating structured data.
- `def find_customer_referee(customer: pd.DataFrame) -pd.DataFrame:`: This line defines a function called `find_customer_referee` that takes a pandas DataFrame `customer` as input and returns a pandas DataFrame. A DataFrame is a two-dimensional labeled data structure with columns of potentially different types. It's similar to a spreadsheet or SQL table, or a dictionary of Series objects.
- `return customer[(customer['referee_id'] != 2) | (customer['referee_id'].isnull())][['name']]`:

  This line does several things:

  1. `customer['referee_id'] != 2`: This creates a Boolean Series where each element is `True` if the corresponding value in the `referee_id` column of the customer DataFrame is not equal to 2, and `False` otherwise.
  2. `customer['referee_id'].isnull()`: This creates another Boolean Series where each element is `True` if the corresponding value in the `referee_id` column of the `customer` DataFrame is `NaN` (which stands for 'Not a Number' and is used to represent missing or null values), and False otherwise.
  3. `(customer['referee_id'] != 2) | (customer['referee_id'].isnull())`: This combines the two Boolean Series using the bitwise OR operator `|`. The result is a new Boolean Series where each element is `True` if the corresponding element in either of the original Series is `True`, and `False` otherwise. In other words, it's `True` for rows where `referee_id` is not 2 or is `NaN`.
  4. `customer[...]`: This uses the Boolean Series to index the `customer` DataFrame. This operation is called Boolean indexing and it returns a new DataFrame that includes only the rows where the Boolean Series has `True`.
  5. `[['name']]`: This selects only the `name` column from the DataFrame. The result is a DataFrame that includes the names of customers who were not referred by the customer with id 2 or who were not referred by anyone.

</CustomAccordion>
