---
title: "FOREIGN KEY | Lectures | Cogxen"
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
prev: false
next: false
---

# `FOREIGN KEY`

The `FOREIGN KEY` constraint establishes a relationship between two tables. It ensures that the values in a column (or a group of columns) in one table match the values in a column (or a group of columns) in another table. This constraint is used to enforce referential integrity between tables. For example, consider two tables `orders` and `customers`, where the `orders` table has a column `customer_id` that references the `customer_id` column in the `customers` table. The `FOREIGN KEY` constraint can be applied as follows:

```sql :line-numbers
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

In this case, the `customer_id` column in the `orders` table must match a `customer_id` value in the `customers` table, ensuring that orders are associated with valid customers.

<div class="flex flex-col items-center gap-4">

<!--@include: ../../_includes/tables/query-results-from-foreign-key-1.md-->

<!--@include: ../../_includes/tables/query-results-from-foreign-key-2.md-->

</div>

In the table above, the `customer_id` column in the `orders` table references the `customer_id` column in the `customers` table, as required by the `FOREIGN KEY` constraint.
