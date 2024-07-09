---
title: "SELECT | Lectures | Cogxen"
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

# `SELECT`

Previously, we touched upon the importance of the `SELECT` statement. Every time you want to retrieve data from a database, `SELECT` is your go-to command. It's the gateway to accessing and manipulating the data stored in your tables.

When you use `SELECT` in its most basic form, with an asterisk (`*`), you're asking the database to return all the columns from a table. It's like saying, _"Give me everything you've got!"_ For example:

```sql :line-numbers
SELECT *
FROM table_name;
```

This is incredibly useful when you need a broad overview of the data. However, what if you're only interested in specific pieces of information? That's where specifying individual columns comes in handy.

## Selecting Specific Columns

Suppose we're only interested in two columns from our table. We can specify these columns by their names, separated by a comma. This makes our query more efficient and our results more readable.

```sql :line-numbers
SELECT column1, column2
FROM table_name;
```

Notice how we moved `FROM` to a new line. This is purely for readability. In SQL, line breaks don't affect the functionality of your query. You could write the entire query in one line if you prefer, and it would still run perfectly.

## Activity

Now it's time to put theory into practice! Let's dive into a hands-on activity to reinforce our understanding.

### Selecting Specific Columns

Select the `name` and `genre` columns from the movies table.

```sql :line-numbers
SELECT name, genre
FROM movies;
```

This will retrieve only the `name` and `genre` of each movie, making our results more focused and easier to analyze.

<!--@include: ../_includes/tables/query-results-from-select-2.md-->

### Adding More Columns

Now, let's expand our query to include a third column.

Edit your query so that it returns the `name`, `genre`, and `year` columns from the movies table. Update your code to:

```sql :line-numbers
SELECT name, genre, year
FROM movies;
```

This modification allows us to see not only the `name` and `genre` of each movie but also the `year` it was released, giving us a richer dataset to work with.

<!--@include: ../_includes/tables/query-results-from-select-3.md-->
