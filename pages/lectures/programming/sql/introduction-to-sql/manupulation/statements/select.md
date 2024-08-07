---
title: "SELECT"
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

# `SELECT`

Imagine you have a magical book that can show you any information you need from a vast library of data. The `SELECT` statement is your magical spell that allows you to fetch this information from your database. It’s like having a key to unlock specific parts of a massive vault of data. Let’s see how it works!

In SQL, the SELECT statement is used to fetch data from a database. Let’s break down a simple example:

```sql :line-numbers
SELECT name FROM celebs;
```

In this statement:

- `SELECT`: This is the clause that signals you're making a query. Every time you want to retrieve data from a database, you start with SELECT.
- `name`: This specifies the column from which you want to retrieve data. In this case, we're interested in the `name` column.
- `FROM celebs`: This specifies the table you're querying. Here, it's the celebs table.

So, this statement asks the database: _"Hey, show me all the data in the name column from the celebs table."_

## Fetching Data from All Columns

But what if you want to see all the information in a table, not just one column? That's where the wildcard character `*` comes in handy. It tells the database, _"Give me everything!"_

```sql :line-numbers
SELECT * FROM celebs;
```

In this case:

- `*` is a special wildcard character that selects every column in the table.
- The result set will include all the columns from the celebs table.

Whenever you run a `SELECT` statement, it returns a new table called the result set. This result set contains the data you've asked for based on your query.

## Activity

Let's put our knowledge into practice with a couple of activities!

### Retrieving Specific Data

Imagine you want to know the names of all the celebrities in your `celebs` table. Here's the SQL command to retrieve this information:

```sql :line-numbers
SELECT name FROM celebs;
```

This will fetch all the names from the `celebs` table. Simple, right? Let’s see what names are in our celebrity database!

<!--@include: ../../_includes/tables/query-results-from-select.md-->

### Retrieving All Data

Now, let’s try something different. First, delete the previous `SELECT` statement from your code editor. We’re going to use the wildcard character `*` to select all the data from the celebs table.

```sql :line-numbers
SELECT * FROM celebs;
```

This command will fetch all the columns and rows in the `celebs` table. Think of it as looking at the entire library rather than just a single book.

<!--@include: ../../_includes/tables/query-results-from-rdb.md-->
