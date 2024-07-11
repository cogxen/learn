---
title: "UPDATE"
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

# `UPDATE`

The `UPDATE` statement in SQL is like a magic wand for your database. It allows you to modify existing records with ease, ensuring your data stays current and accurate. Think of it as editing a digital document—quick, efficient, and precise!

Let’s break down the components of the `UPDATE` statement using a practical example. Imagine we want to update the Twitter handle of a celebrity in our database. Here’s the SQL code that accomplishes this:

```sql :line-numbers
UPDATE celebs
SET twitter_handle = '@taylorswift13'
WHERE id = 4;
```

Let’s dissect this command to understand it better:

- `UPDATE`: This is where the magic begins. The `UPDATE` clause tells the database which table to modify. In our example, we're updating the `celebs` table.

- `celebs`: This specifies the table that contains the data you want to update. Our table is named `celebs`, and it houses various celebrity information.

- `SET`: Here, we specify the column we want to update and the new value for that column. In our case, we're updating the `twitter_handle` column to `@taylorswift13`.

- `twitter_handle`: This is the specific column we’re changing. We’re updating Taylor Swift’s Twitter handle in this scenario.

- `@taylorswift13`: This is the new data we’re inserting into the `twitter_handle` column. It’s the updated Twitter handle for Taylor Swift.

- `WHERE`: This crucial clause ensures we only update the intended row(s). Here, we specify that only the row with `id = 4` should be updated. Without this clause, all rows in the table would be updated—a common mistake that can lead to data mishaps!

## Example

To make this more concrete, let's walk through an example. We have a table named `celebs` with various celebrity records. Our task is to update Taylor Swift's Twitter handle. The `id` of her record is `4`. So, our SQL statement looks like this:

```sql :line-numbers
UPDATE celebs
SET twitter_handle = '@taylorswift13'
WHERE id = 4;
```

By running this statement, we efficiently update Taylor Swift’s Twitter handle without altering any other records in the `celebs` table.

Here's the expected output after running these commands:

From this:

<!--@include: ../../_includes/tables/query-results-from-alter.md-->

To this:

<!--@include: ../../_includes/tables/query-results-from-update.md-->
