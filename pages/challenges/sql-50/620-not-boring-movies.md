---
title: 620. Not Boring Movies | Challenges | Cogxen
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
leetcodeStudyPlan:
  - name: Top SQL 50
  - link: https://leetcode.com/studyplan/top-sql-50/
  - planImg: https://i.imgur.com/cxH56Lt.png
leetcodeInformation:
  - number: 620
  - problemName: Not Boring Movies
  - link: https://leetcode.com/problems/not-boring-movies/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 620. Not Boring Movies

## Problem Statement

<ScrollableTableContainer>

Table: `Cinema`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| movie       | varchar |
| description | varchar |
| rating      | float   |

</ScrollableTableContainer>

> `id` is the primary key (column with unique values) for this table.
>
> Each row contains information about the name of a `movie`, its genre, and its `rating`.
>
> `rating` is a 2 decimal places float in the range [0, 10]

## Instructions

- Write a solution to report the movies with an odd-numbered ID and a description that is not `"boring"`.
- Return the result table ordered by `rating` in **descending order**.
- The result format is in the following example.

## Example

**Input:** `Cinema` table

<ScrollableTableContainer>

| id  | movie      | description | rating |
| --- | ---------- | ----------- | ------ |
| 1   | War        | great 3D    | 8.9    |
| 2   | Science    | fiction     | 8.5    |
| 3   | irish      | boring      | 6.2    |
| 4   | Ice song   | Fantacy     | 8.6    |
| 5   | House card | Interesting | 9.1    |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| id  | movie      | description | rating |
| --- | ---------- | ----------- | ------ |
| 5   | House card | Interesting | 9.1    |
| 1   | War        | great 3D    | 8.9    |

</ScrollableTableContainer>

**Explanation:**

> We have three movies with odd-numbered IDs: 1, 3, and 5. The movie with ID = 3 is boring so we do not include it in the answer.

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT id, movie, description, rating
FROM Cinema
WHERE id % 2 = 1 AND description <> 'boring'
ORDER BY rating DESC;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT id, movie, description, rating`: selects the columns `id`, `movie`, `description`, and `rating`.
- `FROM Cinema`: selects the `Cinema` table.
- `WHERE id % 2 = 1 AND description <> 'boring'`: filters the rows where the `id` is odd and the `description` is not equal to `'boring'`.
- `ORDER BY rating DESC`: orders the result by `rating` in descending order.

</CustomAccordion>
