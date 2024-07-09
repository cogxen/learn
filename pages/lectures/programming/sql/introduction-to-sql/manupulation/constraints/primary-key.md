---
title: "PRIMARY KEY | Lectures | Cogxen"
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
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# `PRIMARY KEY`

The `PRIMARY KEY` constraint is a combination of the `NOT NULL` and `UNIQUE` constraints. It ensures that a column cannot have a `NULL` value and that all values in the column are unique. The `PRIMARY KEY` constraint is often used to uniquely identify each row in a table. For example, consider a table `products` with a column `product_id` that should be unique and not `NULL`. The `PRIMARY KEY` constraint can be applied as follows:

```sql :line-numbers
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10, 2)
);
```

In this case, the `product_id` column must have a unique value for every row in the `products` table, and it cannot be `NULL`.

<!--@include: ../../_includes/tables/query-results-from-primary-key.md-->

In the table above, each row has a unique value for the `product_id` column, as required by the `PRIMARY KEY` constraint.
