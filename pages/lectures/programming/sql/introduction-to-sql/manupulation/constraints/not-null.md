---
title: "NOT NULL"
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
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# `NOT NULL`

The `NOT NULL` constraint ensures that a column cannot have a `NULL` value. This means that every row in the table must have a value for that column. For example, consider a table `employees` with a column `employee_id` that should not be `NULL`. The `NOT NULL` constraint can be applied as follows:

```sql :line-numbers
CREATE TABLE employees (
    employee_id INT NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);
```

In this case, the `employee_id` column must have a value for every row in the `employees` table.

<!--@include: ../../_includes/tables/query-results-from-not-null.md-->

In the table above, each row has a value for the `employee_id` column, as required by the `NOT NULL` constraint.
