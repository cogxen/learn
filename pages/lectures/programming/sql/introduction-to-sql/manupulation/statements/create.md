---
title: "CREATE"
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

# `CREATE`

Creating tables is a fundamental part of working with databases. Imagine the `CREATE` statement as your magic wand, allowing you to set up the perfect structure for storing your data. Let’s break down this concept with excitement and precision.

The basic syntax for creating a table in SQL is:

```sql :line-numbers
CREATE TABLE table_name (
   column1 datatype,
   column2 datatype,
   column3 datatype,
   ...
);
```

This statement tells SQL that we want to create a new table with a specified name and defined columns. Let's illustrate this with a practical example by creating a table named `celebs`.

## Example

Creating the `celebs` table, here’s the SQL command to create our `celebs` table:

```sql :line-numbers
CREATE TABLE celebs (
   id INTEGER,
   name TEXT,
   age INTEGER
);
```

Let’s break down this statement step-by-step:

1. `CREATE TABLE`: This clause indicates that we are creating a new table.
2. `celebs`: This is the name of our table. It’s where all the celebrity data will be stored.
3. `(id INTEGER, name TEXT, age INTEGER)`: This list specifies the columns in our table and their data types:

   - **id**: The first column, storing INTEGER values, unique identifiers for each celebrity.
   - **name**: The second column, storing TEXT values, representing the names of the celebrities.
   - **age**: The third column, also storing INTEGER values, representing the ages of the celebrities.

## Activity

Now, let's apply what we’ve learned with a hands-on activity. This will help solidify your understanding and get you comfortable with creating tables.

### Let's Confirm the Database is Empty

Before we create our table, we need to ensure the database is empty. Execute the following SQL query:

```sql :line-numbers
SELECT * FROM celebs;
```

This query attempts to select all data from the `celebs` table. Since we haven’t created it yet, the result should indicate that no such table exists. This confirms our database is indeed empty and ready for a new table.

### Create the `celebs` Table

With the confirmation that our database is empty, it’s time to create our new `celebs` table. Type the following command:

```sql :line-numbers
CREATE TABLE celebs (
   id INTEGER,
   name TEXT,
   age INTEGER
);
```

Once you’ve entered this command, hit [[Enter]] to execute it. You’ve just created your first table in SQL! Congratulations!

Here's a visual representation of the query results:

<!--@include: ../../_includes/tables/query-results-from-create.md-->
