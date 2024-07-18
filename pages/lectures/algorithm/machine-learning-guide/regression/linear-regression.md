---
title: Linear Regression
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
github:
  - link: https://github.com/cogxen/machine-learning-algorithms/blob/main/linear-regression/notebook.ipynb
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://www.linkedin.com/in/noeyislearning
---

# Linear Regression

Linear regression is one of the foundational algorithms in machine learning and statistics. It is a method for modeling the relationship between a dependent variable and one or more independent variables by fitting a linear equation to observed data. The goal is to find the best-fit line that accurately describes the relationship between the variables, allowing you to predict the dependent variable based on new independent variable inputs.

## Example

Imagine you own a bakery and want to predict your daily revenue based on the number of cupcakes you sell. By gathering data on the number of cupcakes sold and the corresponding revenue over several days, you can apply linear regression to uncover the relationship between these two variables. This relationship can then be used to predict future revenue based on the number of cupcakes sold.

### Data Collection

First, you'll collect data:

- **Independent Variable (X)**: Number of cupcakes sold.
- **Dependent Variable (Y)**: Revenue earned.

Here's the sample dataset that we've created:

- **Number of cupcakes sold**: $10$, $20$, $30$, $40$ and $50$ cupcakes.
- **Revenue earned**: $\textdollar{25}$, $\textdollar{70}$, $\textdollar{38}$, $\textdollar{110}$, and $\textdollar{65}$

#### Sample data created

```python
# Number of cupcakes sold
num_cupcakes = [10, 20, 30, 40, 50]
# Revenue earned
money_made = [25, 70, 38, 110, 65]
```

### Data Visualization

To understand the relationship, you can plot this data on a graph with the number of cupcakes on the x-axis and the revenue on the y-axis. Each point on the graph represents a day’s sales and corresponding revenue.

#### 1. Import Libraries

```python
import matplotlib.pyplot as plt
import seaborn as sns
```

#### 2. Create a Scatter Plot

```python
plt.figure(figsize=(10, 6))
sns.scatterplot(x=num_cupcakes, y=money_made)
plt.title('Number of Cupcakes Sold vs Money Made')
plt.xlabel('Number of Cupcakes Sold')
plt.ylabel('Money Made')
plt.show()
```

### Data Analysis

By visualizing the data, you can see a pattern forming between the number of cupcakes sold and the revenue earned. The scatter plot shows a positive linear relationship between the two variables, indicating that as the number of cupcakes sold increases, the revenue earned also increases.

<ImageCard 
  img_url="https://i.imgur.com/rW8UtLh.png" 
  caption="Scatter plot showing the relationship between the number of cupcakes sold and the revenue earned."
  bordered
/>

### Linear Regression

Linear regression aims to fit a straight line (best-fit line) through the data points that best describes the relationship between the independent variable (number of cupcakes, `num_cupcakes`) and the dependent variable (revenue, `money_made`). The equation of the line is typically written as:

$$ Y = b_1X + b_0 $$

Where:

- $Y$ is the dependent variable (revenue).
- $X$ is the independent variable (number of cupcakes that has been sold).
- $b_0$ is the y-intercept of the line.
- $b_1$ is the slope of the line.

The slope ($b_1$) indicates how much the dependent variable is expected to change with a one-unit change in the independent variable.

#### Finding the Best-Fit Line

To find the best-fit line, you minimize the sum of the squared differences between the observed values and the values predicted by the line. This method is known as "least squares."

So now, let's calculate the slope ($b_1$) and y-intercept ($b_0$) of the best-fit line using the least squares method.

Python’s scikit-learn library provides a simple and efficient way to implement linear regression. Here's how you can do it:

#### 1. Import Libraries

```python
from sklearn.linear_model import LinearRegression
import numpy as np
```

#### 2. Reshape the Data

```python
x = np.array(num_cupcakes).reshape(-1, 1)
y = np.array(money_made)
```

#### 3. Fit the Model

```python
model = LinearRegression().fit(x, y)
```

#### 4. Predict using new values

```python
new_num_cupcakes = [[60]]
predicted_money_made = model.predict(new_num_cupcakes)
print(f'Predicted Money Made: {predicted_money_made[0]}')
```

### Results

After fitting the model, you can now predict the revenue earned from selling $60$ cupcakes. The predicted revenue is $\textdollar{97.6}$.

By using linear regression, you can make informed decisions based on historical data and predict future outcomes. This algorithm is widely used in various fields, such as finance, marketing, and healthcare, to forecast trends, identify patterns, and make data-driven decisions.

## Advantages and Disadvantages of Linear Regression

### Advantages

- **Simplicity**: Easy to understand and implement.
- **Interpretability**: Provides clear insights into the relationship between variables.
- **Efficiency**: Computationally efficient and works well with small to medium-sized datasets.

### Disadvantages

- **Linearity Assumption**: Assumes a linear relationship between variables, which may not always be true.
- **Sensitivity to Outliers**: Outliers can significantly affect the model.
- **Multicollinearity**: Performance can degrade with highly correlated independent variables.

Despite its limitations, linear regression remains a powerful tool for predictive modeling and is often used as a baseline model for more complex algorithms.

## Conclusion

Linear regression is a powerful yet simple technique for predicting outcomes based on linear relationships between variables. By understanding how it works and how to implement it in Python, you can leverage this algorithm to solve real-world problems, such as predicting sales or revenue based on historical data. Remember, while linear regression is a valuable tool, always consider the nature of your data and the assumptions underlying the model to ensure its applicability and accuracy.
