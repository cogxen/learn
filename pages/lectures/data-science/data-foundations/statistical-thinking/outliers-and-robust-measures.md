---
title: Outliers and Robust Measures
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

# Outliers and Robust Measures

When analyzing data, it's essential to understand how outliers—those extreme values that deviate significantly from the rest of your dataset—can impact your statistical measures. Let's dive into this concept using an example with income data.

## The Impact of Outliers on Mean and Median

Imagine you have collected income data for a group of musicians in a city, with the mean income being $\textdollar34,795$ and the median income being $\textdollar32,978$. These numbers are relatively close, suggesting a fairly balanced distribution. But what happens when outliers enter the picture?

- $\textdollar48 \space million$: Paul McCartney, British musician of the Beatles
- $\textdollar57 \space million$: BTS, South Korean K-pop band
- $\textdollar81 \space million$: Beyoncé, American singer-songwriter

Adding these incomes to your dataset creates a significant impact. The median income, a measure of the middle value, changes only slightly from $\textdollar32,978$ to $\textdollar33,011$. In contrast, the mean income, an average of all values, skyrockets from $\textdollar34,795$ to $\textdollar228,235$. This dramatic shift highlights how the mean is heavily influenced by these extreme values, making it an unreliable measure of central tendency in this context. An average income of $\textdollar228,235$ no longer represents the typical musician's earnings in your dataset.

## Understanding Outliers

Outliers are data points that stand out due to their extreme values. They can occur naturally, through data entry errors, or by including atypical subjects (like celebrity incomes in a dataset of typical musicians). Outliers heavily influence the mean, making it a poor representation of the central tendency in skewed distributions.

## Median and IQR

In the presence of outliers or skewed data, robust measures like the median and the interquartile range (IQR) become invaluable. The median, as we saw, is relatively unaffected by the extreme incomes of the celebrities. It provides a better sense of the "middle" value in your dataset.

Similarly, the IQR, which measures the spread of the middle 50% of your data, is not swayed by outliers. In contrast, the standard deviation, another measure of spread, can be significantly inflated by extreme values, leading to a misleading representation of variability in your data.

## Why Robust Measures Matter

Robust measures are crucial when dealing with real-world data, which often contains outliers or is skewed. They provide a more accurate picture of your data's central tendency and variability, ensuring your analysis reflects the typical values more closely.

## Conclusion

Understanding the impact of outliers and choosing robust measures like the median and IQR can significantly enhance the reliability of your data analysis. These measures help you maintain a clear and accurate picture of your data, avoiding the distortions caused by extreme values. By focusing on robust statistics, you ensure your conclusions are based on a true representation of your dataset, leading to more meaningful and trustworthy insights.
