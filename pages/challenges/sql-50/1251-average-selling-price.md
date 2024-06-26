---
title: 1251. Average Selling Price | Challenges | Cogxen
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
  - number: 1251
  - problemName: Average Selling Price
  - link: https://leetcode.com/problems/average-selling-price/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 1251. Average Selling Price

## Problem Statement

Table: `Prices`

<ScrollableTableContainer>

| Column Name | Type |
| ----------- | ---- |
| product_id  | int  |
| start_date  | date |
| end_date    | date |
| price       | int  |

</ScrollableTableContainer>

> (`product_id`, `start_date`, `end_date`) is the primary key (combination of columns with unique values) for this table.
>
> Each row of this table indicates the price of the `product_id` in the period from `start_date` to `end_date`.
>
> For each `product_id` there will be no two overlapping periods. That means there will be no two intersecting periods for the same `product_id`.

Table: `UnitsSold`

<ScrollableTableContainer>

| Column Name   | Type |
| ------------- | ---- |
| product_id    | int  |
| purchase_date | date |
| units         | int  |

</ScrollableTableContainer>

> This table may contain duplicate rows.
>
> Each row of this table indicates the date (`purchase_date`), `units`, and `product_id` of each product sold.

## Instructions

- Write a solution to find the average selling price for each product. `average_price` should be **rounded to two (2) decimal places**.
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:**

`Prices` table

<ScrollableTableContainer>

| product_id | start_date | end_date   | price |
| ---------- | ---------- | ---------- | ----- |
| 1          | 2019-02-17 | 2019-02-28 | 5     |
| 1          | 2019-03-01 | 2019-03-22 | 20    |
| 2          | 2019-02-01 | 2019-02-20 | 15    |
| 2          | 2019-02-21 | 2019-03-31 | 30    |

</ScrollableTableContainer>

`UnitsSold` table

<ScrollableTableContainer>

| product_id | purchase_date | units |
| ---------- | ------------- | ----- |
| 1          | 2019-02-25    | 100   |
| 1          | 2019-03-01    | 15    |
| 2          | 2019-02-10    | 200   |
| 2          | 2019-03-22    | 30    |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| product_id | average_price |
| ---------- | ------------- |
| 1          | 6.96          |
| 2          | 16.96         |

</ScrollableTableContainer>

**Explanation:**

> Average selling price = $\frac{Total\space Price\space of\space Product}{Number\space of\space products\space sold}$.
>
> Average selling price for **product 1** is $\frac{((100 _ 5) + (15 _ 20))}{115} = 6.96$.
>
> Average selling price for **product 2** is $\frac{((200 _ 15) + (30 _ 30))}{230} = 16.96$

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT
    p.product_id,
    COALESCE(ROUND(SUM(u.units * p.price) / NULLIF(SUM(u.units), 0)::decimal, 2), 0) AS average_price
FROM
    Prices p
LEFT JOIN
    UnitsSold u ON u.product_id = p.product_id
                AND u.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY
    p.product_id;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT p.product_id`: Select the `product_id` from the `Prices` table.
  - `COALESCE(ROUND(SUM(u.units * p.price) / NULLIF(SUM(u.units), 0)::decimal, 2), 0) AS average_price`: Calculate the `average_price` for each `product_id`.
- `FROM Prices p`: Select the `Prices` table and alias it as `p`.
- `LEFT JOIN UnitsSold u ON u.product_id = p.product_id AND u.purchase_date BETWEEN p.start_date AND p.end_date`: Join the `UnitsSold` table with the `Prices` table on `product_id` and `purchase_date` between `start_date` and `end_date`.
- `GROUP BY p.product_id`: Group the result by `product_id`.

</CustomAccordion>
