---
title: "BETWEEN"
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

# `BETWEEN`

The `BETWEEN` operator is an incredibly handy tool in SQL, used within a WHERE clause to filter the result set within a specific range. This range can be numerical, textual, or date-based, making `BETWEEN` a versatile and powerful operator for database queries.

## Numerical Range

Let’s break it down with an example. Suppose we have a database of movies, and we want to find movies released between the years 1990 and 1999. Here’s how we would write that query:

```sql :line-numbers
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999;
```

In this case, `BETWEEN` filters the results to include only those movies released from 1990 up to, and including, 1999. It’s as simple as that!

## Textual Range

**BETWEEN** isn’t just for numbers. It can also filter data within an alphabetical range. Imagine we want to list movies whose names start with the letter ‘A’ and go up to, but not including, those that start with ‘J’. Here’s our query:

```sql :line-numbers
SELECT *
FROM movies
WHERE name BETWEEN 'A' AND 'J';
```

This will include movie names starting with ‘A’, ‘B’, ‘C’, etc., up to ‘I’. However, here’s an interesting twist: if there’s a movie named just ‘J’, it will be included because `BETWEEN` goes up to and includes the second value. So ‘J’ will be part of the result set, but not ‘Jaws’.

## Date Range

The versatility of `BETWEEN` shines when working with dates. Let’s say we want to find movies released in the 1970s. The query would look like this:

```sql :line-numbers
SELECT *
FROM movies
WHERE year BETWEEN 1970 AND 1979;
```

This filters our movie database to show only those films released between January 1, 1970, and December 31, 1979.

## Activity

Now, let’s put this knowledge to the test with some practical exercises.

### Filtering Movie Names

Write a query using the `BETWEEN` operator to select all information about movies whose names begin with the letters ‘D’, ‘E’, and ‘F’.

```sql :line-numbers
SELECT *
FROM movies
WHERE name BETWEEN 'D' AND 'G';
```

<!--@include: ../_includes/tables/query-results-from-between.md-->

Here, we start at ‘D’ and go up to, but not including, ‘G’. This ensures we get all movies starting with ‘D’, ‘E’, and ‘F’.

### Filtering by Decade

Using the `BETWEEN` operator, write a query to select all information about movies released in the 1970s.

```sql :line-numbers
SELECT *
FROM movies
WHERE year BETWEEN 1970 AND 1979;
```

<!--@include: ../_includes/tables/query-results-from-between-2.md-->

This query effectively filters our movie database to include only those released during the vibrant decade of the 1970s.
