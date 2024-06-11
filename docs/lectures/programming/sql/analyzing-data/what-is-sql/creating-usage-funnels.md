---
title: "Creating Usage Funnels | Lectures | Cogxen"
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
