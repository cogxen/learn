---
title: "ORDER BY | Lectures | Cogxen"
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
---

# `ORDER BY`

Sorting data is a fundamental aspect of data management. It helps us make sense of large datasets by organizing information in a more readable and analyzable format. Whether you're sorting alphabetically or numerically, the `ORDER BY` clause in SQL is your go-to tool.

The `ORDER BY` clause allows us to sort the results of our queries. It's incredibly versatile, enabling sorting based on any column, regardless of whether it's included in the `SELECT` statement.

Let's consider a simple example where we sort movie titles alphabetically:

```sql
SELECT *
FROM movies
ORDER BY name;
```

In this query:

- `ORDER BY`: This clause sorts the result set by the specified column.
- `name`: This is the column we're sorting by, in alphabetical order by default.

## Sorting in Descending Order

Sometimes, we need to sort data in descending order. For instance, if we want to list all well-received movies by their release year, from the latest to the oldest, we use the `DESC` keyword:

```sql
SELECT *
FROM movies
WHERE imdb_rating > 8
ORDER BY year DESC;
```

In this query:

- `WHERE imdb_rating > 8`: This condition filters movies with an IMDb rating above 8.
- `ORDER BY year DESC`: This clause sorts the results by the year in descending order.

## Ascending vs. Descending Order

By default, `ORDER BY` sorts in ascending order (low to high or A-Z). To explicitly state ascending order, use the `ASC` keyword:

```sql
ORDER BY name ASC;
```

Interestingly, the column used in `ORDER BY` does not need to be in the `SELECT` statement. This flexibility allows us to sort data based on any column, providing powerful data manipulation capabilities.

Remember, the `ORDER BY` clause always comes after the `WHERE` clause, if one is present in your query. This order is crucial for the correct execution of the query.

## Activity

Let's put this into practice with a couple of activities!

### Sorting by Name

Suppose we want to retrieve the name and year columns of all movies, ordered by their name alphabetically. Here's the query:

```sql
SELECT name, year
FROM movies
ORDER BY name;
```

<ImageCard
img_url="https://i.imgur.com/Ntc1ULZ.png"
caption="Query Results"
copyright_owner="codecademy.com"
:bordered="true"
/>

### Sorting by IMDb Rating

Remove the previous query and write a new one that retrieves the name, year, and imdb_rating columns of all movies, ordered from highest to lowest by their IMDb ratings:

```sql
SELECT name, year, imdb_rating
FROM movies
ORDER BY imdb_rating DESC;
```

<ImageCard
img_url="https://i.imgur.com/CQS5KH5.png"
caption="Query Results"
copyright_owner="codecademy.com"
:bordered="true"
/>
