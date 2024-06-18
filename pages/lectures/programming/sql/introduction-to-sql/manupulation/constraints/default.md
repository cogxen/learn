---
title: "DEFAULT | Lectures | Cogxen"
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

# `DEFAULT`

The `DEFAULT` constraint allows you to specify a default value for a column. If a value is not provided for the column during an `INSERT` operation, the default value is used. For example, consider a table `employees` with a column `status` that defaults to `'active'`. The `DEFAULT` constraint can be applied as as follows:

```sql :line-numbers
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    status VARCHAR(50) DEFAULT 'active'
);
```

In this case, if a value for the `status` column is not provided during an `INSERT` operation, the default value `'active'` will be used.

<!--@include: ../../_includes/tables/query-results-from-default.md-->

In the table above, the `status` column in the `employees` table defaults to `'active'` if no value is provided during an `INSERT` operation.
