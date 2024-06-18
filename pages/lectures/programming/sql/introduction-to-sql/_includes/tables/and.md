---
title: "AND | Lectures | Cogxen"
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

# `AND`

When working with SQL, we often need to refine our queries to extract more specific and useful results. One powerful way to do this is by using the `AND` operator. This operator allows us to combine multiple conditions, ensuring that each row in our result set meets all specified criteria.

## Filtering 90's Romance Movies

Let's consider an example where we want to retrieve all romance movies released in the 1990s. Here's how we can do it:

```sql :line-numbers
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999
  AND genre = 'romance';
```

In this query:

- `year BETWEEN 1990 AND 1999` is the first condition, specifying the timeframe.
- `genre = 'romance'` is the second condition, specifying the genre.
- The `AND` operator combines these two conditions.

## Venn Diagram Representation

Imagine a Venn diagram where one circle represents movies from the 1990s and the other represents romance movies. The intersection of these two circles represents movies that meet both criteria. With the `AND` operator, only the rows that satisfy both conditions are included in the result set.

<ImageCard
img_url="https://i.imgur.com/a3p5JIh.png"
caption="Venn Diagram Representation"
copyright_owner="codecademy.com"
:bordered="true"
/>

## Activity

Now, let's put this into practice with some activities. These exercises will help solidify your understanding and give you hands-on experience with the `AND` operator.

### Retrieving Well-Received Movies from the 1970s

In our previous exercise, we retrieved all movies released in the 1970s. Let's take it a step further and filter for movies that are also well-received, with an IMDb rating greater than 8. Here's the query:

```sql :line-numbers
SELECT *
FROM movies
WHERE year BETWEEN 1970 AND 1979
  AND imdb_rating > 8;
```

<!--@include: ../_includes/tables/query-results-from-and.md-->

In this query:

- `year BETWEEN 1970 AND 1979` specifies the decade.
- `imdb_rating > 8` specifies that only highly-rated movies are selected.
- The `AND` operator ensures both conditions are met.

### Filtering Old Horror Films

For the next exercise, let's imagine we have a picky friend who only wants to watch old horror films. We need to write a query that selects all movies made prior to 1985 that are also in the horror genre. Here’s how we can do it:

```sql :line-numbers
SELECT *
FROM movies
WHERE year < 1985
  AND genre = 'horror';
```

<ImageCard
img_url="https://i.imgur.com/EelW9FE.png"
caption="Query Results"
copyright_owner="codecademy.com"
:bordered="true"
/>

In this query:

- `year < 1985` specifies that the movies should be made before 1985.
- `genre = 'horror'` specifies the horror genre.
- The `AND` operator combines these two conditions to give us the desired result.
