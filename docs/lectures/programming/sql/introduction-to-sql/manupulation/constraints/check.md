---
title: "CHECK | Lectures | Cogxen"
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

# `CHECK`

The `CHECK` constraint allows you to specify a condition that must be satisfied for the data in a column. This constraint is used to enforce domain integrity by limiting the values that can be inserted into a column. For example, consider a table `employees` with a column `salary` that should be greater than or equal to 0. The `CHECK` constraint can be applied as follows:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    salary DECIMAL(10, 2) CHECK (salary >= 0)
);
```

In this case, the `CHECK` constraint ensures that the `salary` column in the `employees` table contains only values greater than or equal to 0.

<ImageCard
img_url="https://i.imgur.com/Uczg0Ya.png"
caption="CHECK"
:bordered="true"
/>

In the table above, the `salary` column in the `employees` table is constrained by the `CHECK` constraint to have values greater than or equal to 0.
