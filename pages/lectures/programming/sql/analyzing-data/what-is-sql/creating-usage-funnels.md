---
title: "Creating Usage Funnels"
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
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# Creating Usage Funnels

Imagine you're visiting a website. Your journey might look something like this:

1. **Browsing Items**: You start by exploring various courses and resources available for sale.
2. **Initiating Checkout**: You find a course that interests you and click on an icon to begin the checkout process.
3. **Completing Purchase**: You enter your payment information and complete your purchase.

Sounds simple, right? However, not everyone who browses will proceed to checkout, and not everyone who starts the checkout process will complete their purchase. This multi-step process, where users drop off at different stages, is known as a funnel.

## The Importance of Funnels

Funnels are crucial for businesses to understand where they are losing potential customers. By analyzing these drop-offs, companies can make data-driven decisions to enhance their websites and improve conversion rates.

## What Is the Challenge?

Let’s bring in George, a dedicated analyst at a FAANG company. Her goal is to determine what percentage of users make it through each step of the funnel. This insight will help her recommend improvements to the website. Here's the data George will work with:

- **Browse Table**: Contains timestamps of users who visited item description pages.
- **Checkout Table**: Contains timestamps of users who visited the checkout page.
- **Purchase Table**: Contains timestamps of users who completed their purchase.

So George's task is to combines data from these three tables using SQL. His analysis reveals the following:

- $24\%$ of users who browse move on to checkout.
- $89\%$ of users who reach checkout complete their purchase.

These percentages are significant! They show the critical points where they're losing potential customers.

## Analysis

Let's take a moment to visualize this:

- Out of $100$ users who browse, $24$ move to checkout.
- Out of those $24$, approximately $21$ complete their purchase.

These numbers give us a clear picture of the funnel. Now, let’s think about improvements. What can be done to encourage more users to proceed through each step?

## Improving the Funnel

Here are some strategies that George might recommend:

- **Enhance Browsing Experience**: Make it easier for users to find what they’re looking for. Improve search functionality and provide personalized recommendations.
- **Simplify Checkout Process**: Reduce the number of steps required to checkout. Ensure the process is smooth and user-friendly.
- **Build Trust**: Provide clear information about the courses and a robust refund policy to instill confidence in potential buyers.

## SQL in Action

- Using SQL, George finds that $24\%$ of all users who browse move on to checkout. $89\%$ of those who reach checkout purchase.

```sql
 SELECT ROUND(
   100.0 * COUNT(DISTINCT c.user_id) /
   COUNT(DISTINCT b.user_id)
 ) AS browse_to_checkout_percent,
 ROUND(
   100.0 * COUNT(DISTINCT p.user_id) /
   COUNT(DISTINCT c.user_id)
 ) AS checkout_to_purchase_percent
 FROM browse b
 LEFT JOIN checkout c
 	ON b.user_id = c.user_id
 LEFT JOIN purchase p
 	ON c.user_id = p.user_id;
```

### SQL Query Explanation

Here's a breakdown of the query:

- `COUNT(DISTINCT c.user_id) / COUNT(DISTINCT b.user_id)`: This calculates the ratio of unique users who have checked out to the unique users who have browsed. Multiplying by $100.0$ converts the ratio to a percentage.
- `COUNT(DISTINCT p.user_id) / COUNT(DISTINCT c.user_id)`: This calculates the ratio of unique users who have made a purchase to the unique users who have checked out. Again, multiplying by $100.0$ converts the ratio to a percentage.
- `LEFT JOIN checkout c ON b.user_id = c.user_id`: This joins the `browse` and `checkout` tables on the `user_id` field. The `LEFT JOIN` ensures that all records from the browse table and any matching records from the `checkout` table are included.
- `LEFT JOIN purchase p ON c.user_id = p.user_id`: This joins the `checkout` and `purchase` tables on the user_id field. The `LEFT JOIN` ensures that all records from the `checkout` table and any matching records from the `purchase` table are included.

NOTE:
The `ROUND` function is used to round the resulting percentages to the nearest whole number.

<ScrollableTableContainer>

| browse_to_checkout_percent | checkout_to_purchase_percent |
| -------------------------- | ---------------------------- |
| 24                         | 89                           |

</ScrollableTableContainer>
