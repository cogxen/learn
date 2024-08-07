---
title: "ALTER"
description: Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.
head:
  - - meta
    - name: description
    - content: Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.
  - - meta - name: keywords
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

# `ALTER`

The `ALTER` statement in SQL is a powerful tool that allows you to modify existing tables. It’s like having a magic wand that can transform your table structure with ease. Let’s dive into the world of `ALTER` and explore its capabilities.

## Example

The `ALTER TABLE` statement is your key to modifying existing tables in your database. Imagine you've built a table, but now you need to add more columns to store additional information. This is where `ALTER TABLE` comes into play. Let's break it down step by step.

### Adding a Column

When you want to add a new column to a table, you use the `ALTER TABLE` statement. Here's a practical example: suppose you have a table named celebs, and you want to add a new column for storing Twitter handles. The SQL command looks like this:

```sql :line-numbers
ALTER TABLE celebs
ADD COLUMN twitter_handle TEXT;
```

Let's dissect this command to understand it better.

1. `ALTER TABLE`: This clause indicates that you're about to make changes to the structure of a specified table.
2. `celebs`: This is the name of the table you're modifying. In our example, it's the `celebs` table.
3. `ADD COLUMN`: This clause specifies that you want to add a new column to the table.

Now, let's explore the components of the new column:

- `twitter_handle`: This is the name of the new column you're adding. In this case, it will store Twitter handles.
- `TEXT`: This defines the data type for the new column. Here, we're using TEXT to store string data.

## Understanding NULL Values

When you add a new column to an existing table, the existing rows won't have values for this new column right away. Instead, they will have `NULL` values. In SQL, `NULL` represents missing or unknown data. So, for our `celebs` table, any rows that existed before we added the `twitter_handle` column will now have NULL values in this column.

## Activity

To solidify your understanding, let's get hands-on with an activity. Type the following commands:

```sql :line-numbers
ALTER TABLE celebs
ADD COLUMN twitter_handle TEXT;

SELECT * FROM celebs;
```

These commands will add the `twitter_handle` column to your `celebs` table and then display the entire table, allowing you to see the changes.

Here's the expected output after running these commands:

<!--@include: ../../_includes/tables/query-results-from-alter.md-->
