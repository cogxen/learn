---
title: Linear Regression | Disadvantages
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

# Disadvantages

Like any tool, it comes with its own set of limitations. Understanding these disadvantages is crucial for choosing the right model for your data. Let's dive into the intricacies of linear regression and explore its weaknesses.

## Assumptions of Linear Regression

Linear regression relies on several key assumptions that, if violated, can lead to inaccurate results. These assumptions include:

### Linearity

Linear regression assumes that the relationship between the independent variables (predictors) and the dependent variable (outcome) is linear. This means that changes in the predictors result in proportional changes in the outcome. If the actual relationship is non-linear, linear regression can provide misleading results.

::: details Example

If you were predicting the growth of a plant based on sunlight exposure, and the growth rate accelerates at higher sunlight levels, a linear model would struggle to capture this non-linear relationship accurately.

:::

### Independence

The observations should be independent of each other. This means that the value of one observation should not influence the value of another.

::: details Example

In time series data, such as stock prices, today's price is often dependent on yesterday's price. Using linear regression on such data without adjusting for this dependence can lead to incorrect conclusions.

:::

### Homoscedasticity

The variance of the residuals (errors) should be constant across all levels of the independent variables. When this assumption is violated (heteroscedasticity), the model’s predictions can be inefficient and biased.

::: details Example

If you’re predicting house prices, the variance in prices might be higher in more expensive neighborhoods. Linear regression assumes that this variance is the same regardless of the price range, which is often not the case.

:::

### No Multicollinearity

The independent variables should not be highly correlated with each other. Multicollinearity can inflate the variance of coefficient estimates and make the model unstable.

::: details Example

If you include both the height and weight of a person as predictors in a model to predict their shoe size, these predictors are likely to be correlated. High multicollinearity can lead to unreliable coefficient estimates.

:::

### Normality of Errors

The independent variables should not be highly correlated with each other. Multicollinearity can inflate the variance of coefficient estimates and make the model unstable.

## Limitations in Handling Complex Relationships

Linear regression is inherently simple, which is both a strength and a weakness. It struggles with capturing complex relationships between variables.

### Non-linearity

Linear regression cannot effectively model non-linear relationships without transforming the data or adding polynomial terms. Even then, it may not be as effective as non-linear models specifically designed for such tasks.

### Interaction Effects

Linear regression does not naturally account for interaction effects between variables unless explicitly included. Interaction effects occur when the effect of one predictor on the outcome depends on the level of another predictor.

## Sensitivity to Outliers

Linear regression is highly sensitive to outliers, which can disproportionately influence the model’s coefficients and predictions.

::: details Example

If you’re predicting salaries based on years of experience, an extremely high salary due to an exceptional case (e.g., a celebrity endorsement deal) can skew the model, making it less accurate for the majority of the data points.

:::

## Overfitting and Underfitting

Linear regression can suffer from both overfitting and underfitting, depending on the complexity of the model and the nature of the data.

### Overfitting

Overfitting occurs when the model captures noise in the training data as if it were a true pattern. This leads to poor generalization to new data.

::: details Example

Including too many predictors or polynomial terms in a model for predicting housing prices might fit the training data very well but fail to predict prices accurately on new data.

:::

### Underfitting

Underfitting happens when the model is too simple to capture the underlying structure of the data. This leads to poor performance on both the training and test data.

::: details Example

Using a simple linear regression model to predict a complex phenomenon like weather patterns will likely result in poor predictions because the model cannot capture the intricacies of the data.

:::
