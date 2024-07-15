---
title: 1174. Immediate Food Delivery II
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
  - number: 1174
  - problemName: Immediate Food Delivery II
  - link: https://leetcode.com/problems/immediate-food-delivery-ii/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# 1174. Immediate Food Delivery II

## Problem Statement

Table: `Delivery`

<ScrollableTableContainer>

| Column Name                 | Type |
| --------------------------- | ---- |
| delivery_id                 | int  |
| customer_id                 | int  |
| order_date                  | date |
| customer_pref_delivery_date | date |

</ScrollableTableContainer>

> `delivery_id` is the column of unique values of this table.  
> The table holds information about food delivery to customers that make orders at some date and specify a preferred delivery date (on the same order date or after it).

## Instructions

NOTES:

1. If the customer's preferred delivery date is the same as the order date, then the order is called **immediate**; otherwise, it is called scheduled.
2. The **first order** of a customer is the order with the earliest order date that the customer made. It is guaranteed that a customer has precisely one first order.

- Write a solution to find the percentage of immediate orders in the first orders of all customers, rounded to **two (2) decimal places**.
- The result format is in the following example.

## Example

**Input:** `Delivery` table

<ScrollableTableContainer>

| delivery_id | customer_id | order_date | customer_pref_delivery_date |
| ----------- | ----------- | ---------- | --------------------------- |
| 1           | 1           | 2019-08-01 | 2019-08-02                  |
| 2           | 2           | 2019-08-02 | 2019-08-02                  |
| 3           | 1           | 2019-08-11 | 2019-08-12                  |
| 4           | 3           | 2019-08-24 | 2019-08-24                  |
| 5           | 3           | 2019-08-21 | 2019-08-22                  |
| 6           | 2           | 2019-08-11 | 2019-08-13                  |
| 7           | 4           | 2019-08-09 | 2019-08-09                  |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| immediate_percentage |
| -------------------- |
| 50.00                |

</ScrollableTableContainer>

**Explanation:**

> The customer id 1 has a first order with delivery id 1 and it is scheduled.  
> The customer id 2 has a first order with delivery id 2 and it is immediate.  
> The customer id 3 has a first order with delivery id 5 and it is scheduled.  
> The customer id 4 has a first order with delivery id 7 and it is immediate.
> Hence, half the customers have immediate first orders.

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
WITH FirstOrders AS (
    SELECT
        customer_id,
        MIN(order_date) AS first_order_date,
        MIN(customer_pref_delivery_date) AS first_pref_delivery_date
    FROM
        Delivery
    GROUP BY
        customer_id
),
ImmediateFirstOrders AS (
    SELECT
        COUNT(*) AS immediate_count
    FROM
        FirstOrders
    WHERE
        first_order_date = first_pref_delivery_date
),
TotalFirstOrders AS (
    SELECT
        COUNT(*) AS total_count
    FROM
        FirstOrders
)

SELECT
    ROUND((immediate_count::DECIMAL / total_count) * 100, 2) AS immediate_percentage
FROM
    ImmediateFirstOrders,
    TotalFirstOrders;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning" :collapsed=false>

- `WITH FirstOrders AS (...)`: Create a Common Table Expression (CTE) named `FirstOrders` that contains the `customer_id`, the earliest `order_date` as `first_order_date`, and the earliest `customer_pref_delivery_date` as `first_pref_delivery_date` for each customer.
  - `SELECT customer_id, MIN(order_date) AS first_order_date, MIN(customer_pref_delivery_date) AS first_pref_delivery_date`: Select the `customer_id`, the earliest `order_date` as `first_order_date`, and the earliest `customer_pref_delivery_date` as `first_pref_delivery_date` from the `Delivery` table.
  - `FROM Delivery`: Select the `Delivery` table.
  - `GROUP BY customer_id`: Group the result by `customer_id`.
- `ImmediateFirstOrders AS (...)`: Create a CTE named `ImmediateFirstOrders` that contains the count of immediate first orders.
  - `SELECT COUNT(*) AS immediate_count`: Select the count of rows as `immediate_count` from the `FirstOrders` CTE.
  - `FROM FirstOrders`: Select the `FirstOrders` CTE.
  - `WHERE first_order_date = first_pref_delivery_date`: Filter the rows where the `first_order_date` is equal to the `first_pref_delivery_date`.
- `TotalFirstOrders AS (...)`: Create a CTE named `TotalFirstOrders` that contains the count of total first orders.
  - `SELECT COUNT(*) AS total_count`: Select the count of rows as `total_count` from the `FirstOrders` CTE.
  - `FROM FirstOrders`: Select the `FirstOrders` CTE.
- `SELECT ROUND((immediate_count::DECIMAL / total_count) * 100, 2) AS immediate_percentage`: Select the percentage of immediate first orders rounded to two decimal places.
  - `immediate_count::DECIMAL / total_count`: Calculate the percentage of immediate first orders.
  - `* 100`: Multiply the result by 100 to get the percentage.
  - `ROUND(..., 2) AS immediate_percentage`: Round the result to two decimal places and alias it as `immediate_percentage`.
- `FROM ImmediateFirstOrders, TotalFirstOrders`: Select the `ImmediateFirstOrders` and `TotalFirstOrders` CTEs.

</CustomAccordion>
