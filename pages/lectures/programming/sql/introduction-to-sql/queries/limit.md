---
title: "LIMIT"
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

# `LIMIT`

`LIMIT` is a magical clause that allows you to specify the maximum number of rows your result set will have. This is incredibly useful because it saves space on your screen, reduces the load on your database, and makes your queries run much faster. Efficiency at its best!

Picture this: You've been working with a small table, maybe fewer than 250 rows. It’s manageable, right? But what happens when you’re dealing with massive SQL tables containing hundreds of thousands, or even millions, of records? It can get overwhelming quickly! In these situations, it's crucial to have a way to cap the number of rows in your results. This is where the `LIMIT` clause becomes our best friend.

Imagine you just want to see a few examples of records from your movies table. Here’s how you can do it:

```sql :line-numbers
SELECT *
FROM movies
LIMIT 10;
```

In this query, we’re specifying that our result set can’t have more than 10 rows. Simple, right? Yet, incredibly powerful.

## Placement of `LIMIT`

Remember, the `LIMIT` clause always goes at the very end of your query. This is crucial for it to work correctly. However, a word of caution: not all SQL databases support the `LIMIT` clause. So, always check the compatibility of your SQL database.

## Combining `LIMIT` with `ORDER BY`

Now, let’s kick it up a notch! Imagine you want to combine the power of `LIMIT` with the `ORDER BY` clause. This combination allows you to not only limit your result set but also control the order in which your data is displayed.

For example, let’s say you want to see the top 5 highest-grossing movies from your table. Here’s how you can do it:

```sql :line-numbers
SELECT *
FROM movies
ORDER BY revenue DESC
LIMIT 5;
```

## Activity

Now it’s your turn to practice! Let’s dive into a hands-on activity to reinforce our understanding.

### Limiting Results

Here's a fun activity for you. Let’s say you want to return the top 3 highest-rated movies from your database. You’d want to see all the columns of these top movies. How would you do it? Here’s a query that accomplishes this:

```sql :line-numbers
SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;
```

<!--@include: ../_includes/tables/query-results-from-limit.md-->

In this query:

- `SELECT *`: This part of the query tells the database to select all columns from the movies table.
- `FROM movies`: This specifies the table from which to retrieve the data.
- `ORDER BY imdb_rating DESC`: Here, we’re ordering the results by the rating column in descending order, so the highest ratings come first.
- `LIMIT 3`: Finally, we cap the result set to the top 3 rows. These will be the three highest-rated movies in your table.
