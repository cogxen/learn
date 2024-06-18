---
title: "Contraints | Lectures | Cogxen"
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

# Constraints

Constraints are rules applied to database columns to control the type of data that can be inserted into them. They are specified after defining the data type for a column and are essential for maintaining the accuracy and reliability of the data in your database. Let’s explore the various types of constraints with an example.

Here’s a SQL statement that creates a table named celebs with several constraints:

```sql :line-numbers
CREATE TABLE celebs (
   id INTEGER PRIMARY KEY,
   name TEXT UNIQUE,
   date_of_birth TEXT NOT NULL,
   date_of_death TEXT DEFAULT 'Not Applicable'
);
```

## Types of Constraints

1. [NOT NULL](/lectures/programming/sql/introduction-to-sql/manupulation/constraints/not-null)
2. [UNIQUE](/lectures/programming/sql/introduction-to-sql/manupulation/constraints/unique)
3. [PRIMARY KEY](/lectures/programming/sql/introduction-to-sql/manupulation/constraints/primary-key)
4. [FOREIGN KEY](/lectures/programming/sql/introduction-to-sql/manupulation/constraints/foreign-key)
5. [CHECK](/lectures/programming/sql/introduction-to-sql/manupulation/constraints/check)
6. [DEFAULT](/lectures/programming/sql/introduction-to-sql/manupulation/constraints/default)

## Activity

Now, let’s apply what we’ve learned. We’re going to create a new table called awards with specific constraints:

```sql :line-numbers
CREATE TABLE awards (
   id INTEGER PRIMARY KEY,
   recipient TEXT NOT NULL,
   award_name TEXT DEFAULT 'Grammy'
);
```

In this table, the recipient column cannot be `NULL`, and the `award_name` column defaults to 'Grammy' if no value is provided during an `INSERT` operation.

<!--@include: ../_includes/tables/query-results-from-constraints.md-->

## Why Are Constraints Important?

- **Data Integrity**: Constraints ensure that the data entered into the database is accurate and reliable.
- **Avoiding Errors**: They prevent common data entry errors by enforcing rules at the database level.
- **Consistency**: Helps maintain consistent data across different parts of the application.
