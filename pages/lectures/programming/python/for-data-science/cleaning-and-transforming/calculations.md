---
title: Calculations
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

# Calculations

When working with data, you will often need to perform calculations on your data. Now let's explore how you can use Python to analyze visitor counts at national parks. We'll start with a simple question: did visitor counts increase or decrease from one year to the next for a specific park? Once we have that answer, we'll expand our analysis to all parks in the dataset.

## Basic Arithmetic Operations in Python

Python has built-in arithmetic operators to work with numeric variables:

- Addition (+)
- Subtraction (-)
- Multiplication (\*)
- Division (/)

### Example

Consider the following dataset, which includes visitor counts for several national parks over three years:

| Park                  | Visitors2021 | Visitors2020 | Visitors2019 |
| --------------------- | ------------ | ------------ | ------------ |
| Great Smoky Mountains | 14,161,548   | 12,095,720   | 12,547,743   |
| Zion                  | 5,039,835    | 3,591,254    | 488,268      |
| Yellowstone           | 4,860,242    | 3,806,306    | 4,020,288    |
| Grand Canyon          | 4,532,677    | 2,897,098    | 5,974,411    |

For Zion National Park, the visitor counts are as follows:

- 2021: 5,039,835 visitors
- 2020: 3,591,254 visitors
- 2019: 488,268 visitors

To calculate the difference in visitor counts from 2020 to 2021, you can use the subtraction operator:

```python
difference = 5039835 - 3591254
difference
```

This calculation yields:

```plaintext
1448581
```

So, Zion National Park had an increase of 1,448,581 visitors from 2020 to 2021.

## Combining Operators for More Complex Calculations

You can also combine operators to perform multiple calculations at once. For example, calculating the percent change in visitor counts can provide more insight. The formula to calculate percentage change is:

<MathExampleCard>

$$ percent change=(\frac{new\space value − old\space value​}{old\space value}) \times 100 $$

</MathExampleCard>

In our case, the new value is 5,039,835 (2021 visitors) and the old value is 3,591,254 (2020 visitors). Implementing this in Python:

```python
percentchange_2021 = (5039835 - 3591254) / 3591254 * 100
percentchange_2021
```

This calculation gives:

```plaintext
40.33635604721916
```

Thus, Zion National Park saw a 40.34% increase in visitors from 2020 to 2021.

## Rounding Numbers

Python offers a convenient function, round(), to round numbers to a specified number of decimal places:

```python
round(numeric_variable, number_of_decimals)
```

To round the percentage change to two decimal places:

```python
percentchange_2021 = round(percentchange_2021, 2)
percentchange_2021
```

This will output:

```plaintext
40.34
```

## Conclusion

By using simple arithmetic operations in Python, you can uncover meaningful insights from your data. Whether you're looking at differences in visitor counts or calculating percentage changes, these techniques are foundational tools for data analysis. Always remember to check your results for accuracy and use rounding when appropriate to present your findings clearly.
