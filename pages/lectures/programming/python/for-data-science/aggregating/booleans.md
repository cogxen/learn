---
title: Booleans
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
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# Booleans

When dealing with Boolean columns in your dataset, understanding how they behave during aggregation is crucial. Booleans have a unique property: in numerical operations, `True` is treated as `1` and `False` as `0`. This allows for some straightforward yet powerful ways to summarize and analyze your data.

## Counting True Values

Let's start by looking at how you can count the number of `True` values in a Boolean column. Consider the following Boolean column and its numeric representation:

<ScrollableTableContainer>

| Boolean | Numeric |
| ------- | ------- |
| True    | 1       |
| False   | 0       |
| True    | 1       |
| True    | 1       |

</ScrollableTableContainer>

When you apply the `.sum()` function to this Boolean column, it essentially adds up all the 1s and 0s. In this case:

<MathExampleCard>

$$ 1 + 0 + 1 + 1 = 3 $$

</MathExampleCard>

The sum is `3`, which corresponds to the number of `True` entries in the column. This method always works because the `False` entries, represented as `0`, don't affect the sum. This approach provides a quick and efficient way to count `True` values in your dataset.

## Calculating the Percent of True Values

Now, let's explore how you can calculate the percentage of `True` values in the same column. Here’s the same Boolean column for reference:

<ScrollableTableContainer>

| Boolean | Numeric |
| ------- | ------- |
| True    | 1       |
| False   | 0       |
| True    | 1       |
| True    | 1       |

</ScrollableTableContainer>

To find the percentage of `True` values, you can use the `.mean()` function. The mean is calculated by summing all the values and dividing by the total number of entries:

<MathExampleCard>

$$ \text{Mean} = \frac{1 + 0 + 1 + 1}{4} = \frac{3}{4} = 0.75 $$

</MathExampleCard>

The mean of this Boolean column is `0.75`, or $75\%$. This result makes sense because $3$ out of $4$ entries are `True`. The `.mean()` function works perfectly here because the numerator (sum of Booleans) represents the number of `True` values, and dividing by the total number of entries gives you the desired percentage.

## Why This Works?

These methods are reliable because of the inherent numerical representation of Booleans in Python and many other programming languages. When you sum a Boolean column, you're effectively counting the `True` values. When you calculate the mean, you're determining the proportion of `True` values relative to the total number of entries.

## Conclusion

Understanding how to aggregate Boolean columns can simplify many data analysis tasks. Whether you need to count the number of `True` values or determine their percentage, these straightforward methods harness the power of Booleans’ numerical representation. By applying `.sum()` and `.mean()` functions to your Boolean columns, you can gain valuable insights with minimal effort, ensuring your data analysis is both efficient and effective.
