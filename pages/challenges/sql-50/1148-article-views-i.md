---
title: 1148. Article Views I | Challenges | Cogxen
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
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 1148. Article Views I

## Problem Statement

Table: `Views`

| Column Name | Type |
| ----------- | ---- |
| article_id  | int  |
| author_id   | int  |
| viewer_id   | int  |
| view_date   | date |

> There is no `primary key` (column with unique values) for this table, the table may have duplicate rows.
>
> Each row of this table indicates that some viewer viewed an article (written by some author) on some date.
>
> Note that equal `author_id` and `viewer_id` indicate the same person.

## Instructions

- Write a solution to find all the authors that viewed at least one of their own articles.
- Return the result table sorted by `id` in **ascending order**.
- The result format is in the following example.

## Example

**Input:** `Views` table

| article_id | author_id | viewer_id | view_date  |
| ---------- | --------- | --------- | ---------- |
| 1          | 3         | 5         | 2019-08-01 |
| 1          | 3         | 6         | 2019-08-02 |
| 2          | 7         | 7         | 2019-08-01 |
| 2          | 7         | 6         | 2019-08-02 |
| 4          | 7         | 1         | 2019-07-22 |
| 3          | 4         | 4         | 2019-07-21 |
| 3          | 4         | 4         | 2019-07-21 |

**Output:**

| id  |
| --- |
| 4   |
| 7   |

## Solutions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY id ASC;
```

```python [Pandas] :line-numbers
import pandas as pd

def article_views(views: pd.DataFrame) -> pd.DataFrame:
    unique_authors = views[views['author_id'] == views['viewer_id']]['author_id'].unique()
    sorted_authors = sorted(unique_authors)
    return pd.DataFrame({'id': sorted_authors})
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT DISTINCT author_id AS id`: This part of the statement specifies the column that you want to retrieve from the database. In this case, you're retrieving the `author_id` column and renaming it to `id` using the `AS` keyword. The `DISTINCT` keyword ensures that each `id` in the result set is unique.
- `FROM Views`: This part of the statement specifies the table from which you want to retrieve the data. Here, `Views` is the table.
- `WHERE author_id = viewer_id`: This is a condition that filters the rows to include in the result set. It only includes rows where the `author_id` is the same as the `viewer_id`. This effectively selects the views where the author viewed their own article.
- `ORDER BY id ASC`: This part sorts the result set by the id column in ascending order (`ASC`).

</CustomAccordion>

<CustomAccordion title="Pandas" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning">

- `import pandas as pd`: This line imports the pandas library, which provides data structures and data analysis tools for Python. It's commonly imported under the alias `pd`.
- `def article_views(views: pd.DataFrame) -> pd.DataFrame:`: This line defines a function named `article_views` that takes a pandas DataFrame `views` as input and returns a DataFrame.
- `unique_authors = views[views['author_id'] == views['viewer_id']]['author_id'].unique()`:
  - `views['author_id'] == views['viewer_id']`: This creates a boolean Series that is `True` for rows in `views` where the `author_id` is the same as the `viewer_id`. This effectively selects the views where the author viewed their own article.
  - `views[...]['author_id']`: This selects the `author_id` column from these rows.
  - `.unique()`: This gets the unique values in this column. The result is an array of unique author IDs.
  - `unique_authors`: This variable stores the unique author IDs who viewed their own articles.
- `sorted_authors = sorted(unique_authors)`: This line sorts the array of unique author IDs in **ascending** order.
- `return pd.DataFrame({'id': sorted_authors})`: This line creates a new DataFrame with a single column named `id` that contains the sorted unique author IDs, and returns this DataFrame.

</CustomAccordion>
