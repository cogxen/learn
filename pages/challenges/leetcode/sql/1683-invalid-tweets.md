---
title: 1683. Invalid Tweets
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
  - number: 1683
  - problemName: Invalid Tweets
  - link: https://leetcode.com/problems/invalid-tweets/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# 1683. Invalid Tweets

## Problem Statement

Table: `Tweets`

<ScrollableTableContainer>

| Column Name | Type    |
| ----------- | ------- |
| tweet_id    | int     |
| content     | varchar |

</ScrollableTableContainer>

> `tweet_id` is the `primary key` for this table.
> This table contains the all the tweets in a social media app.

## Instructions

- Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is **strictly greater than** $15$.
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:** `Tweets` table

<ScrollableTableContainer>

| tweet_id | content         |
| -------- | --------------- |
| 1        | "Sunny day"     |
| 2        | "I love coding" |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| tweet_id |
| -------- |
| 2        |

</ScrollableTableContainer>

**Explanation:**

> The content of the tweet with `tweet_id` 1 is "Sunny day" and the number of characters used is $9$ which is **not** strictly greater than $15$.
>
> The content of the tweet with `tweet_id` 2 is "I love coding" and the number of characters used is $12$ which is **not** strictly greater than $15$.

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT tweet_id
FROM Tweets
WHERE CHAR_LENGTH(content) > 15;
```

```python [Pandas] :line-numbers
import pandas as pd

def invalid_tweets(tweets: pd.DataFrame) -> pd.DataFrame:
    return tweets[tweets['content'].str.len() > 15][['tweet_id']]
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning" :collapsed=false>

- `SELECT tweet_id`: This part of the statement specifies the column that you want to retrieve from the database. In this case, you're retrieving the `tweet_id` column.
- `FROM Tweets`: This part of the statement specifies the table from which you want to retrieve the data. Here, `Tweets` is the table.
- `WHERE CHAR_LENGTH(content) > 15`: This is a condition that filters the rows to include in the result set. It only includes rows where the character length of the `content` column is greater than 15. The `CHAR_LENGTH` function returns the number of characters in a string.

</CustomAccordion>

<CustomAccordion title="Pandas" submitted_by="@noeyislearning" submit_website_url="https://www.linkedin.com/in/noeyislearning">

- `import pandas as pd`: This line imports the pandas library, which provides data structures and data analysis tools for Python. It's commonly imported under the alias `pd`.
- `def invalid_tweets(tweets: pd.DataFrame) -> pd.DataFrame:`: This line defines a function named invalid_tweets that takes a pandas DataFrame `tweets` as input and returns a DataFrame.
- `return tweets[tweets['content'].str.len() > 15][['tweet_id']]`:
  - `tweets['content'].str.len() > 15`: This creates a boolean Series that is `True` for rows in `tweets` where the length of the `content` string is greater than $15$. This effectively selects the tweets where the content is more than 15 characters long.
  - `tweets[...]`: This selects the rows from `tweets` where the boolean Series is True.
  - `[['tweet_id']]`: This selects the `tweet_id` column from these rows to return as the result.
  - `return ...`: This returns a DataFrame containing the IDs of the invalid tweets.

</CustomAccordion>
