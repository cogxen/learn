---
title: 1581. Customer Who Visited but Did Not Make Any Transactions | Challenges | Cogxen
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
leetcodeInformation:
  - number: 1581
  - problemName: Customer Who Visited but Did Not Make Any Transactions
  - link: https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 1581. Customer Who Visited but Did Not Make Any Transactions

## Problem Statement

Table: `Visits`

| Column Name | Type |
| ----------- | ---- |
| visit_id    | int  |
| customer_id | int  |

> `visit_id` is the column with unique values for this table.
>
> This table contains information about the customers who visited the mall.

Table: `Transactions`

| Column Name    | Type |
| -------------- | ---- |
| transaction_id | int  |
| visit_id       | int  |
| amount         | int  |

> `transaction_id` is the column with unique values for this table.
>
> This table contains information about the transactions made by the customers.

## Instructions

- Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.
- Return the result table sorted in **any order**.
- The result format is in the following example.

## Example

**Input:**

`Visits` table

| visit_id | customer_id |
| -------- | ----------- |
| 1        | 23          |
| 2        | 9           |
| 4        | 30          |
| 5        | 54          |
| 6        | 96          |
| 7        | 54          |
| 8        | 54          |

`Transactions` table

| transaction_id | visit_id | amount |
| -------------- | -------- | ------ |
| 2              | 5        | 310    |
| 3              | 5        | 300    |
| 9              | 5        | 200    |
| 12             | 1        | 910    |
| 13             | 2        | 970    |

**Output:**

| customer_id | count_no_trans |
| ----------- | -------------- |
| 54          | 2              |
| 30          | 1              |
| 96          | 1              |

**Explanation:**

> Customer with `id = 23` visited the mall once and made one transaction during the visit with id = 12.
>
> Customer with `id = 9` visited the mall once and made one transaction during the visit with id = 13.
>
> Customer with `id = 30` visited the mall once and did not make any transactions.
>
> Customer with `id = 54` visited the mall three times. During 2 visits they did not make any transactions, and during one visit they made 3 transactions.
>
> Customer with `id = 96` visited the mall once and did not make any transactions.
>
> As we can see, users with IDs `30` and `96` visited the mall one time without making any transactions. Also, user `54` visited the mall twice and did not make any transactions.

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans
FROM Visits v
LEFT JOIN Transactions t ON v.visit_id = t.visit_id
WHERE t.transaction_id IS NULL
GROUP BY v.customer_id
ORDER BY v.customer_id;
```

```python [Pandas] :line-numbers
import pandas as pd

def find_customers(visits: pd.DataFrame, transactions: pd.DataFrame) -> pd.DataFrame:
  merged_df = visits.merge(transactions, how='left', on='visit_id')
  no_transaction_visits = merged_df[merged_df['transaction_id'].isnull()]
  result = no_transaction_visits.groupby('customer_id')['visit_id'].count()
  result = result.rename('count_no_trans').reset_index()
  return result
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans`: It selects the `customer_id` and the count of `visit_id` from the `Visits` table.
- `FROM Visits v`: It selects the `customer_id` from the `Visits` table and assigns it an alias `v`.
- `LEFT JOIN Transactions t ON v.visit_id = t.visit_id`: It performs a `LEFT JOIN` operation between the `Visits` and `Transactions` tables on the `visit_id` column.
- `WHERE t.transaction_id IS NULL`: It filters the rows where the `transaction_id` is `NULL`.
- `GROUP BY v.customer_id`: It groups the result set by the `customer_id`.
- `ORDER BY v.customer_id`: It orders the result set by the `customer_id`.

In the query, `v` and `t` are aliases for the `Visits` and `Transactions` tables, respectively. When you perform a `LEFT JOIN` between the two tables, you get all the rows from the `Visits` table and the matching rows from the `Transactions` table.

</CustomAccordion>

<CustomAccordion title="Pandas" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning">

- `import pandas as pd`: This imports the `pandas` library, which is used for data manipulation and analysis.
- `def find_customers(visits: pd.DataFrame, transactions: pd.DataFrame) -> pd.DataFrame:`: This function takes two pandas DataFrames as input and returns a DataFrame.
- `merged_df = visits.merge(transactions, how='left', on='visit_id')`: This merges the `visits` and `transactions` DataFrames on the `visit_id` column using a `LEFT JOIN`.
- `no_transaction_visits = merged_df[merged_df['transaction_id'].isnull()]`: This filters the merged DataFrame to include only rows where the `transaction_id` is `NULL`, indicating no transaction was made.
- `result = no_transaction_visits.groupby('customer_id')['visit_id'].count()`: This groups the filtered DataFrame by `customer_id` and counts the number of visits for each customer.
- `result = result.rename('count_no_trans').reset_index()`: This renames the count column to `count_no_trans` and resets the index of the DataFrame.
- The function returns the `result` DataFrame, which contains the `customer_id` and the count of visits without transactions for each customer.

</CustomAccordion>
