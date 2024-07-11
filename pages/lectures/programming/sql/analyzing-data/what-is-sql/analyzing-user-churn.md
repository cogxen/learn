---
title: "Analyzing User Churn"
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
status: wip
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# Analyzing User Churn

## What is Churn Rate?

The churn rate is a key metric that measures the percentage of subscribers who cancel their subscription within a given time period. It's crucial for any subscription-based service because it directly impacts revenue and growth. Imagine you're running a monthly subscription service—knowing your churn rate can tell you a lot about your user retention and overall business health.

## Example Scenario

Let’s break down a simple example to illustrate this. Suppose in January, a company has 1,000 subscribers. In February, 200 new subscribers join, but unfortunately, 250 subscribers decide to cancel their subscriptions.

<MathExampleCard>

The formula for calculating the churn rate is:

$Churn\space Rate = \frac{Cancellations}{Total Subscribers}$

Applying this to our example:

$Total\space Subscribers = 1,000 + 200 = 1,200$

$Cancelled\space Subscribers = 250$

$Churn Rate = \frac{250}{1,200} = 0.2083$ or $20.83\%$

</MathExampleCard>

So, the churn rate for February would be approximately $20.8\%$.

## Analysis

Now, let’s join George on his exciting journey to analyze the company churn rates over the past few months. He is keen on understanding trends and patterns to offer insightful recommendations. To achieve this, he writes a detailed SQL query to fetch the necessary data from the pro_users table, which holds a massive 118,135 rows of data!

## SQL in Action

- This SQL query calculates the number of enrollments, the number of cancellations in March, and the churn rate for a hypothetical company. The data is retrieved from a table named `pro_users`.

```sql
SELECT COUNT(DISTINCT user_id) AS enrollments,
	COUNT(CASE
       	WHEN strftime("%m", cancel_date) = '03'
        THEN user_id
  END) AS march_cancellations,
 	ROUND(100.0 * COUNT(CASE
       	WHEN strftime("%m", cancel_date) = '03'
        THEN user_id
  END) / COUNT(DISTINCT user_id)) AS churn_rate
FROM pro_users
WHERE signup_date < '2017-04-01'
	AND (
    (cancel_date IS NULL) OR
    (cancel_date > '2017-03-01')
  );
```

### SQL Query Explanation

Here's a breakdown of the query:

- `COUNT(DISTINCT user_id) AS enrollments`: This counts the number of unique user IDs, which represents the total number of enrollments.
- `COUNT(CASE WHEN strftime("%m", cancel_date) = '03' THEN user_id END) AS march_cancellations`: This counts the number of users who cancelled their subscriptions in March. The `strftime` function is used to format the `cancel_date` as a month.
- `ROUND(100.0 * COUNT(CASE WHEN strftime("%m", cancel_date) = '03' THEN user_id END) / COUNT(DISTINCT user_id)) AS churn_rate`: This calculates the churn rate, which is the percentage of users who cancelled their subscriptions in March out of the total number of users.
- `FROM pro_users WHERE signup_date < '2017-04-01' AND ((cancel_date IS NULL) OR (cancel_date > '2017-03-01'))`: This filters the data to include only users who signed up before April 2017 and either have not cancelled their subscriptions or cancelled them after March 2017.

<ImageCard
img_url="https://i.imgur.com/M2xdFh3.png"
caption="Query Results"
copyright_owner="codecademy.com"
:bordered="true"
/>
