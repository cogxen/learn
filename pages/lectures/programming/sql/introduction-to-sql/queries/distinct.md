---
title: "DISTINCT"
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

# `DISTINCT`

When working with databases, especially large ones, it's often necessary to filter out duplicate entries to get a clear picture of the unique data points. This is where `DISTINCT` comes into play. It helps us identify and work with unique values in a dataset, making our analysis cleaner and more precise.

In SQL, the `DISTINCT` keyword is used to return only unique values from a specified column, filtering out all duplicate entries. This can be incredibly useful when you want to understand the variety or range of data within a particular column.

Imagine you have an inventory database that tracks the tools available in a workshop. The table might look something like this:

```sql :line-numbers
SELECT tools
FROM inventory;
```

This query could produce a result like:

<!--@include: ../_includes/tables/query-results-from-distinct.md-->

As you can see, "Nails" appears multiple times. If we want to know just the unique tools available, we can use `DISTINCT`:

```sql :line-numbers
SELECT DISTINCT tools
FROM inventory;
```

Now, the result would be:

<!--@include: ../_includes/tables/query-results-from-distinct-2.md-->

By using `DISTINCT`, we quickly filter out the duplicates and see that the unique tools in our inventory are "Hammer" and "Nails".

Filtering the results of a query is an essential skill in SQL. It allows you to get a clearer view of your data without having to scan through every single row, which can be especially cumbersome in large datasets.

## Activity

Let's put this into practice with a hands-on activity!

### Identify Unique Genres

Open your SQL editor and type the following query:

```sql :line-numbers
SELECT DISTINCT genre
FROM movies;
```

This query will return a list of unique genres from the `movies` table. Analyzing these unique genres can help you understand the variety of movies available.

<!--@include: ../_includes/tables/query-results-from-distinct-3.md-->

### Identify Unique Years

Now, let's modify the query to find unique years instead of genres. Change your code to:

```sql :line-numbers
SELECT DISTINCT year
FROM movies;
```

This query will give you a list of unique years in which movies were released, providing a historical perspective on your movie database.

<!--@include: ../_includes/tables/query-results-from-distinct-4.md-->
