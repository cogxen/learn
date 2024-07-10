---
title: Data Visualization
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
status: wip
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# Data Visualization

Data visualization is your first step towards making sense of a dataset. By plotting charts and graphs, you transform raw numbers into visual stories that reveal patterns, trends, and insights. Two powerful tools in your visualization toolkit are **Matplotlib** and **Seaborn**, both of which are Python-based libraries that make it easy to create high-quality 2D plots with minimal code.

## Histograms

<ImageCard 
  img_url="https://i.imgur.com/7AdDw32.png" 
  caption="Example of Histograms" 
  copyright_owner="atlassian.com"
  :bordered="true"
/>

Let's dive into histograms, which are similar to bar charts but specifically show the distribution of numerical data. Imagine you have a dataset with various features, and you're interested in understanding the distribution of a specific variable, say the median house value. A histogram will plot this variable on the x-axis, with the count of occurrences on the y-axis.

Consider the median house value. By plotting this on a histogram, you get a visual representation of how house values are distributed across different price ranges. For example, you might see most homes priced between $100,000 and $200,000, with a few outliers skewing higher.

Here's a breakdown of what the histogram reveals:

- X-axis: Represents the cost of homes.
- **Y-axis**: Represents the count of homes within each price range.
- **Distribution**: Shows a normal distribution with most homes clustered in the middle price range and a few outliers on the higher end.

Here's the code snippet to create a histogram using Matplotlib:

```python
# Plot the distribution of median house values
plt.hist(data['median_house_value'], bins=80)
plt.xlabel('Median House Value')
plt.show()
```

<ImageCard 
  img_url="https://i.imgur.com/KWuHmKs.png" 
  caption="House Values" 
  copyright_owner="cogxen.quest" 
  bordered=true
/>

## Exploring Other Features

Beyond the median house value, you can plot histograms for other numerical features like:

- Longitude
- Latitude
- Housing median age
- Total rooms
- Total bedrooms
- Population
- Households
- Median income

Each histogram provides unique insights into the data distribution for these features. For instance, the median income might be pre-processed and scaled, showing a cap at certain values to handle extremes.

So let's plot histograms for these features to understand their distribution and identify any patterns or outliers. Here's a code snippet to plot histograms for the latitude and longitude features:

```python
# Plot the distribution of all features
housing_df.hist(bins=50, figsize=(20,15))
plt.show()
```

<ImageCard 
  img_url="https://i.imgur.com/56K2y1Y.png" 
  caption="Distribution of All Features"
  copyright_owner="cogxen.quest"
  bordered=true
/>

## Heatmaps

Heat maps are another powerful visualization tool that show correlations between features. Understanding these correlations is essential for building efficient and accurate models.

When you look at a heat map, you see a grid of cells where each cell represents the correlation between two features. The values range from 0 to 1:

- **Values close to 0**: Low correlation
- **Values close to 1**: High correlation

A symmetrical heat map (top left to bottom right) indicates that each feature is positively correlated with itself and potentially other features.

In the dataset, a heat map might reveal that features like total rooms, total bedrooms, population, and households are highly correlated. This redundancy can slow down your model and add unnecessary complexity. Removing these duplicate features—a process known as dimensionality reduction—can improve model performance and efficiency.

First off, we select only numberic columns for correlation analysis:

```python
# Select only numeric columns
numeric_cols = housing_df.select_dtypes(include=['float64', 'int64']).columns
corr = housing_df[numeric_cols].corr()
print(corr)
```

```text
                    longitude  latitude  ...  median_income  median_house_value
longitude            1.000000 -0.924664  ...      -0.015176           -0.045967
latitude            -0.924664  1.000000  ...      -0.079809           -0.144160
housing_median_age  -0.108197  0.011173  ...      -0.119034            0.105623
total_rooms          0.044568 -0.036100  ...       0.198050            0.134153
total_bedrooms       0.069608 -0.066983  ...      -0.007723            0.049686
population           0.099773 -0.108785  ...       0.004834           -0.024650
households           0.055310 -0.071035  ...       0.013033            0.065843
median_income       -0.015176 -0.079809  ...       1.000000            0.688075
median_house_value  -0.045967 -0.144160  ...       0.688075            1.000000

[9 rows x 9 columns]
```

Next, we plot the heatmap to visualize the correlation matrix:

```python
# Plot a graphical correlation matrix
plt.figure(figsize=(8,8))

sns.heatmap(corr, annot=True)
plt.show()
```

<ImageCard 
  img_url="https://i.imgur.com/06x3Xy4.png" 
  caption="Correlation Heatmap"
  copyright_owner="cogxen.quest"
  bordered=true
/>

As you can see, the heatmap provides a visual representation of the correlation matrix. The darker the color, the higher the correlation between two features. This visualization helps you identify redundant features and focus on those that contribute the most to your model.

## Conclusion

There are plenty of other visualization techniques to explore, such as **scatter plots**, **line graphs**, **box plots** and etc. Each visualization tool offers unique insights into your data, helping you uncover patterns, trends, and outliers that might otherwise go unnoticed.

So now you know that data visualization is not just about creating pretty charts—it's about understanding your data better and making informed decisions that drive your analysis forward. Together, these tools help you understand your data better, paving the way for effective feature engineering and, ultimately, more accurate models.
