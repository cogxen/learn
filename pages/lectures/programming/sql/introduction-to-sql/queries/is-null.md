---
title: "IS NULL"
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

# `IS NULL`

In any data journey, you will encounter missing values. These missing values are represented as `NULL` in SQL. But what exactly is `NULL`? `NULL` is used to signify that a value is unknown, absent, or not applicable. It's like a placeholder indicating the absence of data.

- `NULL` is not zero.
- `NULL` is not an empty string.
- `NULL` is simply... NULL!

Let's think of `NULL` as a mystery box in our data table—it's there, but we don't know what's inside.

## Why `NULL` Matters

Handling `NULL` values is vital because:

1. **Data Accuracy**: Ignoring `NULL`s can lead to incorrect data analysis.
2. **Query Precision**: Knowing how to handle `NULL`s ensures your queries return accurate results.
3. **Database Integrity**: Properly managing `NULL` values maintains the integrity of your database.

So, whether you're filtering data or performing calculations, understanding `NULL`s will make your SQL journey smoother and more precise.

## Working with `NULL` Values

In SQL, we can't use standard comparison operators like `=` or `!=` to test for `NULL` values. Instead, we use the following operators:

1. `IS NULL`
2. `IS NOT NULL`

These operators are designed specifically for working with `NULL` values.

## Activity

Let's dive into an example to see how `IS NOT NULL` and `IS NULL` works in practice.

### Filtering Non-`NULL` Values

Imagine you have a table named `movies` with various columns, including `imdb_rating`. To filter out movies that do have an IMDb rating, you would use:

```sql :line-numbers
SELECT name
FROM movies
WHERE imdb_rating IS NOT NULL;
```

<!--@include: ../_includes/tables/query-results-from-is-null.md-->

This query retrieves the names of all movies with a known IMDb rating.

### Filtering `NULL` Values

Now, let's do the opposite. Let's find all the movies that do not have an IMDb rating. This is where we use the `IS NULL` operator. Ready? Here we go!

```sql :line-numbers
SELECT name
FROM movies
WHERE imdb_rating IS NULL;
```

This query will return the names of all movies with missing IMDb ratings. It's like shining a spotlight on the data we don't have!

<!--@include: ../_includes/tables/query-results-from-is-null-2.md-->
