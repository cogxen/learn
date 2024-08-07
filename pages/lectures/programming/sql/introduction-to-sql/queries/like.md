---
title: "LIKE"
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

# `LIKE`

Imagine you have a table of movies, and you notice two films with titles that are strikingly similar: "Se7en" and "Seven". How would you go about selecting all movies that start with 'Se', end with 'en', and have exactly one character in the middle? This is where the LIKE operator shines!

```sql :line-numbers
SELECT *
FROM movies
WHERE name LIKE 'Se_en';
```

In this query:

- `LIKE` is a special operator used with the WHERE clause to search for a specific pattern in a column.
- `name LIKE 'Se_en';` evaluates the name column for a specific pattern.
- `Se_en` represents a pattern with a wildcard character.

Here, the underscore (`_`) is a wildcard character that allows for any single character in that position. So, both "Seven" and "Se7en" match this pattern.

## Activity

Let's put your newfound knowledge to the test with a hands-on activity!

### Testing LIKE with a Wildcard

Suppose you have a table of movies and you want to find all the movies that have a title starting with 'Se', followed by any single character, and ending with 'en'. Use the `LIKE` operator to search for this pattern.

```sql :line-numbers
SELECT *
FROM movies
WHERE name LIKE 'Se_en';
```

<!--@include: ../_includes/tables/query-results-from-like.md-->

The percentage sign (`%`) is another wildcard character used with `LIKE`. It matches zero or more characters in the pattern, making it a powerful tool for broader searches.

```sql :line-numbers
SELECT *
FROM movies
WHERE name LIKE 'A%';
```

In this example:

- The query filters the result set to only include movies with names that begin with the letter 'A'.

Let's break down what `%` can do:

- `A%` matches all movies with names that begin with the letter 'A'.
- `%a` matches all movies that end with 'a'.
- `%man%` matches any movie that contains the word 'man' in its name.

```sql :line-numbers
SELECT *
FROM movies
WHERE name LIKE '%man%';
```

This query returns movies like "Batman" and "Man of Steel". It's important to note that `LIKE` is not case-sensitive, so 'Batman' and 'Man of Steel' will both appear in the result.

### Finding Movies with 'man'

Suppose you want to find all movies that contain the word 'man'. Use the `LIKE` operator to search for this pattern.

```sql :line-numbers
SELECT *
FROM movies
WHERE name LIKE '%man%';
```

<!--@include: ../_includes/tables/query-results-from-like-2.md-->

### Selecting Titles Beginning with 'The'

Let's take it a step further. Modify your query to select all the information about movies that begin with the word 'The'. Remember, you might need to include a space!

```sql :line-numbers
SELECT *
FROM movies
WHERE name LIKE 'The %';
```

<!--@include: ../_includes/tables/query-results-from-like-3.md-->
