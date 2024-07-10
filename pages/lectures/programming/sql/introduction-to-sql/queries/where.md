---
title: "WHERE"
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

# `WHERE`

In SQL, the `WHERE` clause is your best friend when you want to restrict your query results to only include the specific information you're interested in. Think of it as a filter that helps you zoom in on the data that matters most.

Let's start with a simple example. Suppose we want to filter our movie database to show only the top-rated films. We can do this with the following SQL statement:

```sql :line-numbers
SELECT *
FROM movies
WHERE imdb_rating > 8;
```

The `WHERE` clause works by filtering the result set to include only the rows where the specified condition is true. In our example, the condition is `imdb_rating > 8`. This means that only rows with an IMDb rating greater than 8 will be returned.

## Understanding Operators

- `=` : equal to
- `!=` : not equal to
- `>` : greater than
- `<` : less than
- `>=` : greater than or equal to
- `<=` : less than or equal to

These operators help you specify the exact criteria your data must meet to be included in your query results.

## Special Operators

Beyond the basic comparison operators, SQL offers special operators that provide even more flexibility in your queries. We'll explore these in greater detail in upcoming exercises, but for now, let's focus on mastering the basics.

## Activity

Now, let's apply what we've learned with a couple of hands-on activities. Roll up your sleeves and get ready to write some SQL!

### Finding Low-Rated Movies

Suppose we want to identify all the not-so-well-received movies in our database. Here's how you can do it:

```sql :line-numbers
SELECT *
FROM movies
WHERE imdb_rating < 5;
```

This query filters the movies to show only those with an IMDb rating less than 5. Ouch, these are the ones that didn't quite hit the mark!

<!--@include: ../_includes/tables/query-results-from-where.md-->

### Retrieving Recent Movies

Next, let's retrieve all the movies released after 2014. This will help us see the more recent additions to our collection. Use the following query:

```sql :line-numbers
SELECT *
FROM movies
WHERE year > 2014;
```

By specifying `year > 2014`, we're filtering our dataset to include only movies released after the year 2014. This is a great way to focus on the latest content.

<!--@include: ../_includes/tables/query-results-from-where-2.md-->
