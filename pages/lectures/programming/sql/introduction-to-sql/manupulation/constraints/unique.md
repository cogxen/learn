---
title: "UNIQUE"
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

# `UNIQUE`

The `UNIQUE` constraint ensures that all values in a column are unique. This means that no two rows in the table can have the same value for that column. For example, consider a table `students` with a column `student_id` that should be unique. The `UNIQUE` constraint can be applied as follows:

```sql :line-numbers
CREATE TABLE students (
    student_id INT UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);
```

In this case, the `student_id` column must have a unique value for every row in the `students` table.

<!--@include: ../../_includes/tables/query-results-from-unique.md-->

In the table above, each row has a unique value for the `student_id` column, as required by the `UNIQUE` constraint.
