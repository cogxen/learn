---
title: "OR | Lectures | Cogxen"
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

# `OR`

Just like the `AND` operator, the `OR` operator is essential for combining multiple conditions in a WHERE clause. However, there’s a crucial difference between them that you need to understand to use them effectively.

- **`AND` Operator**: This displays a row if all the conditions are true.
- **`OR` Operator**: This displays a row if any condition is true.

Simple, right? But let’s see it in action to truly grasp its power!

Imagine you’re browsing a movie database, and you’re open to watching either a new movie or something action-packed. Here’s how you can use the OR operator to get a list of movies that meet either of these criteria:

```sql
SELECT *
FROM movies
WHERE year > 2014
   OR genre = 'action';
```

- **Condition 1**: `year > 2014` (We're looking for movies released after 2014.)
- **Condition 2**: `genre = 'action'` (We're interested in action movies.)

The `OR` operator combines these conditions, and if either condition is true, the movie will appear in the results.

## Visualizing OR with a Venn Diagram

Think of a Venn diagram. With the `OR` operator, we’re interested in any part of the circles. If any condition falls within the circles, it’s included in our results. This is different from AND, where only the intersection of circles (where all conditions overlap) would be included.

<ImageCard
img_url="https://i.imgur.com/KpK28gI.png"
caption="Query Results"
copyright_owner="codecademy.com"
:bordered="true"
/>

## Activity

Now that you understand the `OR` operator, let’s put it to the test with a hands-on activity!

### Filtering New or Action-Packed Movies

```sql
SELECT *
FROM movies
WHERE year > 2014
   OR genre = 'action';
```

Run this query, and you’ll see a list of movies that are either new (post-2014) or action-packed. Exciting, isn’t it? You now have a powerful tool to broaden your search results with just a simple `OR`.

<ImageCard
img_url="https://i.imgur.com/gOFk1Lf.png"
caption="Query Results"
copyright_owner="codecademy.com"
:bordered="true"
/>

### Filtering Romantic or Comedy Movies

Imagine you’re in the mood for a good laugh or a good cry. You want to find movies that are either a romance or a comedy. Here’s how you can do it:

```sql
SELECT *
FROM movies
WHERE genre = 'romance'
   OR genre = 'comedy';
```

Run this query, and voilà! You’ll get a list of movies that will either tickle your funny bone or tug at your heartstrings.

<ImageCard
img_url="https://i.imgur.com/jFr3qrJ.png"
caption="Query Results"
copyright_owner="codecademy.com"
:bordered="true"
/>
