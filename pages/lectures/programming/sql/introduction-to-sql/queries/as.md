---
title: "AS"
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

# `AS`

Imagine you have a list of movies and you want to rename the column headings to make them more readable or relevant for your query results. This is where the `AS` keyword shines. Here's a simple example to illustrate:

```sql :line-numbers
SELECT name AS 'Titles'
FROM movies;
```

Can you guess what `AS` does in this context?

## The Power of AS

`AS` is a keyword in SQL that allows you to rename a column or a table using an alias. Think of it as a temporary name tag you give to your columns or tables to make your data easier to understand. The new name can be anything you want, as long as you enclose it in single quotes. In our example above, we renamed the `name` column to `Titles`.

## Key Points to Remember

- **Use Single Quotes**: Although it's not always necessary, it's best practice to surround your aliases with single quotes. This ensures clarity and prevents errors, especially in SQLite.

- **Database Specifics**: This practice of using single quotes is specific to SQLite, the relational database management system (RDBMS) we're using in this exercise. Other RDBMSs like PostgreSQL might not require quotes or might use double quotes instead.

- **Temporary Rename**: It's important to note that using AS doesn't rename the column in the table itself. The alias only appears in the result of your query. So, don't worry about making permanent changes to your database structure.

## Activity

Let's put this knowledge into practice with a couple of fun activities.

### Rename a Column

First, let's showcase what the AS keyword does. Select the `name` column from the `movies` table and rename it with an alias of your choosing. Here's the template to get you started:

```sql :line-numbers
SELECT name AS 'YourAlias'
FROM movies;
```

NOTE: Replace `'YourAlias'` with any name you prefer. Once you run the query, observe how the column name in the result set changes to your chosen alias.

<!--@include: ../_includes/tables/query-results-from-as.md-->

### Rename Another Column

Now, let's take it a step further. Instead of selecting and renaming the `name` column, let's select the `imdb_rating` column and rename it as `IMDb`. Here's how you can do it:

```sql :line-numbers
SELECT imdb_rating AS 'IMDb'
FROM movies;
```

After running this query, you'll see the `imdb_rating` column is now displayed as `IMDb` in your results.

<!--@include: ../_includes/tables/query-results-from-as-2.md-->
