---
title: Numeric Variables
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

# Numeric Variables

Now that you've delved into categorical variables in your musician dataset, it's time to turn your attention to numeric variables — those with quantitative data. Numeric variables are crucial because they provide a wealth of information about your dataset through various statistical measures and visualizations.

## What Is a Distribution?

A distribution is a function that displays all possible values of a variable and how frequently each value occurs. While this might sound a bit technical, visualizing the distribution can make it much easier to grasp.

Imagine you have a plot of the ages of musicians in your dataset, with age on the x-axis and frequency on the y-axis. From this plot, you can observe several key points:

- Ages range from about 15 to 70.
- Few musicians are under 30 or over 50 years old.
- Many musicians are between the ages of 30 and 50.

This distribution is bell-shaped or hill-shaped and symmetrical. Such a pattern is quite common and is known as a normal distribution.

## The Normal Distribution

A normal distribution is a specific, common type of distribution where the values form a symmetrical, bell-shaped curve. Most of the data points cluster around the mean (or center), and the frequencies taper off equally on both sides as you move away from the center. This pattern is vital because it often appears in natural phenomena and many datasets, making it a useful assumption in statistical analysis.

<ImageCard 
  img_url="https://i.imgur.com/WRRBL7l.png"
  caption="Normal Distribution"
  copyright_owner="en.wikipedia.org"
  :bordered=true
/>

## Describing a Distribution with Statistics

While visualizing a distribution provides a general sense of the data, exact measurements are needed to describe it precisely. There are several key statistics to consider:

1. Measures of Central Tendency:

   - Mean: The average of all data points.
   - Median: The middle value when data points are ordered.
   - Mode: The most frequently occurring value.

2. Measures of Spread:

   - Range: The difference between the maximum and minimum values.
   - Variance: The average of the squared differences from the mean.
   - Standard Deviation: The square root of the variance, showing how spread out the values are around the mean.

## Application

Suppose you want to describe the central tendency and spread of musicians' ages in your dataset. You would calculate the mean age, identify the median age, and possibly note the mode if there is one. Additionally, you'd compute the range, variance, and standard deviation to understand how widely ages vary from the mean.

## Conclusion

Understanding and analyzing numeric variables is essential for uncovering patterns and insights in your data. By visualizing distributions and applying statistical measures, you can gain a clearer, more detailed picture of your dataset. Remember, while the visual representation gives you a broad view, exact statistics provide the precision needed for rigorous analysis.
