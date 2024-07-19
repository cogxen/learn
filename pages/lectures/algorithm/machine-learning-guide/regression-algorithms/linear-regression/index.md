---
title: Linear Regression | Overview
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

# What is Linear Regression?

Linear Regression is one of the fundamental algorithms in machine learning, offering a robust method to understand and predict relationships between variables. It's crucial for anyone diving into data science to grasp this concept thoroughly. This guide will walk you through the essentials, breaking down the complexities into manageable, engaging pieces.

It is a statistical method used to model the relationship between a dependent variable and one or more independent variables. The simplest form, [Simple Linear Regression](#simple-linear-regression), involves two variables. When multiple variables are involved, it's called [Multiple Linear Regression](#multiple-linear-regression). The goal is to find the best-fit line that accurately describes the relationship between the variables, allowing you to predict the dependent variable based on new independent variable inputs.

## Key Concepts

### Dependent and Independent Variables

- **Dependent Variable (Y)**: The outcome you're trying to predict or explain.
- **Independent Variable (X)**: The predictors or factors you believe have an impact on the dependent variable.

### Equation of a Line

The basis of linear regression is the equation of a line:

<MathExampleCard>

$$Y = mX + b$$

</MathExampleCard>

- $Y$: Dependent variable
- $X$: Independent variable
- $m$: Slope of the line
- $b$: Y-intercept

## Simple Linear Regression

Simple Linear Regression analyzes the relationship between two variables by fitting a linear equation to observed data. Here's how you can understand it:

1. **Scatter Plot**: Visualize the data points to see if there's a relationship between the variables.
2. **Best-Fit Line**: Find the line that minimizes the sum of the squared differences between the observed values and the predicted values.

### Example

Imagine you're studying the relationship between hours studied and test scores. Your scatter plot shows that more hours of study generally lead to higher scores. The line of best fit represents this trend. By using this line, you can predict a student's test score based on the number of hours they studied.

## Multiple Linear Regression

Multiple Linear Regression extends the concept by incorporating multiple independent variables. The equation becomes:

<MathExampleCard>

$$Y = b_0 + b_1X_1 + b_2X_2 + ... + b_nX_n$$

</MathExampleCard>

- $Y$: Dependent variable
- $X_1, X_2, ..., X_n$: Independent variables
- $b_1, b_2, ..., b_n$: Coefficients for each independent variable
- $b_0$: Intercept

### Example

If you're predicting house prices, you might consider variables like square footage, number of bedrooms, and location. Each of these factors contributes to the final prediction. The coefficients indicate how much each variable affects the dependent variable.

## Assumptions in Linear Regression

For Linear Regression to be effective, certain assumptions need to be met:

1. **Linear Relationship**: The relationship between the dependent and independent variables is linear.
2. **Independence**: Observations should be independent of each other. No correlation between residuals.
3. **Homoscedasticity**: Residuals (errors) have constant variance.
4. **Normality**: Residuals are approximately normally distributed.

### Testing Assumptions

1. **Linearity**: Use scatter plots and correlation coefficients to check for linearity.
2. **Independence**: Ensure your data collection method supports independence.
3. **Homoscedasticity**: Plot residuals against predicted values to check for constant variance.
4. **Normality**: Use histograms or Q-Q plots to examine the distribution of residuals.

## Evaluating Linear Regression Models

Once your model is built, it's crucial to evaluate its performance. Here are some key metrics:

1. **R-Squared ($R^2$)**: Indicates the proportion of variance in the dependent variable explained by the independent variables. Values range from 0 to 1, with higher values indicating better fit.
2. **Adjusted R-Squared**: Adjusts $R^2$'s value for the number of predictors in the model. Useful when comparing models with different numbers of predictors.
3. **Mean Squared Error (MSE)**: Measures the average squared difference between the observed and predicted values. Lower values indicate better fit.
4. **Root Mean Squared Error (RMSE)**: The square root of MSE, bringing the error metric back to the original scale of the dependent variable.
