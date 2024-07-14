---
title: Median and IQR
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
    - website_url: https://github.com/noeyislearning
---

# Median and IQR

When you're dealing with skewed data, the mean might not be the best representation of a typical value. This is particularly true in cases like musician incomes, where a few high earners can distort the average. To get a clearer picture, you can use the median and interquartile range (IQR).

## Understanding the Median

The median is a great alternative to the mean when you want to find a central value that isn't influenced by extreme outliers. To find the median, you simply arrange all your data points from smallest to largest and pick the middle value. This middle value is the median, also known as the 50th percentile or the second quartile (Q2).

Imagine you have a dataset where the median is 13. This means half of your data points are less than 13, and the other half are greater than 13.

## Addressing the Range Issue

Let's say your data values range from 6 to 28. If you only consider the range (28-6 = 22), it gives you a sense of the spread. However, if the highest value jumps to 280, the range becomes 274 (280-6), which doesn't help you understand the majority of your data anymore because it's skewed by that one outlier.

## Interquartile Range (IQR)

To better understand the spread of your data without being misled by outliers, use the interquartile range (IQR). The IQR focuses on the middle 50% of your data, providing a clearer picture of where most values lie. Quartiles divide your data into four equal parts:

- **First Quartile (Q1)**: The value below which 25% of the data fall.
- **Second Quartile (Q2)**: The median, where 50% of the data fall below this value.
- **Third Quartile (Q3)**: The value below which 75% of the data fall.

The IQR is the difference between Q3 and Q1. For example, if Q1 is 10 and Q3 is 22, the IQR is 12 (22-10), representing the range within which the central 50% of your data lies.

## Applying Median and IQR to Income Data

Consider musician income data. Suppose the median income is $\textdollar32,978$, and the IQR is $\textdollar17,150$. This tells you that the middle 50% of incomes range from $\textdollar32,978 - \textdollar8,575$ to $\textdollar32,978 + \textdollar8,575$, giving you a more accurate picture of typical incomes compared to the mean, which might be skewed higher by top earners.

## Conclusion

By using the median and IQR, you gain a more robust understanding of your data, especially when it's skewed. The median provides a central value that isn't influenced by outliers, while the IQR gives you a sense of the spread of the central half of your data. Together, they help you see the typical values more clearly and make better-informed decisions based on your data analysis.
