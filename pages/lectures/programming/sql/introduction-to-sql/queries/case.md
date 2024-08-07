---
title: "CASE"
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

# `CASE`

The `CASE` statement in SQL is akin to having a magical wand that lets you create different outputs based on specified conditions. It’s SQL’s elegant way of handling if-then logic, which can simplify and enhance your data queries. Imagine it as a way to categorize, condense, and make sense of your data more efficiently.

## Why Use CASE Statements?

Let’s say you have a column in your table that contains the age of each person. You want to categorize these ages into different groups, such as "Child," "Teen," "Adult," and "Senior." This is where the `CASE` statement comes in handy. It allows you to create a new column that assigns each person to the appropriate age group based on their age.

- `Condense Data`: Turn complex data into simplified categories.
- `Enhance Readability`: Make your data outputs more understandable.
- `Increase Flexibility`: Handle multiple conditions in a single query.

## Condensing Movie Ratings

Let’s explore an example where we want to condense movie ratings into three distinct levels: Fantastic, Poorly Received, and Avoid at All Costs. Here’s how we can achieve that:

```sql :line-numbers
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END
FROM movies;
```

<!--@include: ../_includes/tables/query-results-from-case.md-->

In this query:

- `WHEN`: Tests a condition.
- `THEN`: Specifies the output if the condition is true.
- `ELSE`: Provides the output if none of the conditions are met.
- `END`: Closes the CASE statement.

This structure allows us to categorize movie ratings efficiently, providing a clear and concise output.

## Renaming Columns for Clarity

Sometimes, the results can have long or unwieldy column names. SQL lets us rename these columns using the `AS` keyword to make them more readable:

```sql :line-numbers
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END AS 'Review'
FROM movies;
```

<!--@include: ../_includes/tables/query-results-from-case-2.md-->

Now, instead of scrolling to find the end of a long column name, we have a neat and tidy 'Review' column. This small tweak enhances the readability of your results, making your data presentation much more professional.

## Activity

Now it's time to put theory into practice! Let's dive into a hands-on activity to reinforce our understanding.

### Categorizing Movie Genres

Select the name column and use a CASE statement to create a second column based on the movie genre:

- Output 'Chill' if the genre is 'romance' or 'comedy'.
- Output 'Intense' for all other genres.
- Optionally, rename this CASE statement output to ‘Mood’ using `AS`.

```sql :line-numbers
SELECT name,
 CASE
  WHEN genre = 'romance' THEN 'Chill'
  WHEN genre = 'comedy' THEN 'Chill'
  ELSE 'Intense'
 END AS 'Mood'
FROM movies;
```

<!--@include: ../_includes/tables/query-results-from-case-3.md-->
