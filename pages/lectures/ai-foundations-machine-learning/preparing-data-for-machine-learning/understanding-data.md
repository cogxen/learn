---
title: Understanding Data | Lectures | Cogxen
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

# Understanding Data

Data is the lifeblood of any machine learning project. Without data, there's nothing to analyze, learn from, or make predictions about. Whether you're working on a personal project, helping a client, or collaborating on an open-source initiative, understanding where and how to obtain data is crucial. This guide will walk you through the different sources of data, explain the types of data you'll encounter, and introduce a practical example using housing data in California to predict home prices.

There are several avenues you can explore to gather the data you need:

- **Internal Datastores**
  - These are databases that your organization or project might already have. They can be a treasure trove of relevant data that’s readily accessible.
- **Client-Provided Data**
  - Sometimes, the client you’re working for will supply the data. This can be particularly useful as it’s often specific to the problem you’re trying to solve.
- **Open-Source or Public Datastores**
  - There are many publicly available datasets online. Websites like Kaggle, UCI Machine Learning Repository, and government data portals offer free datasets for a wide range of applications.
- **Third-Party Vendors**
  - If the data you need is not available for free, you might consider purchasing it from data vendors. This can be an investment but might be necessary for certain types of specialized data

## Dreaming of a Coastal Home?

Imagine you’re interested in buying a home in California near the ocean. To make an informed decision, you’d want to study cost predictions based on various factors. This brings us to our example: predicting home prices using a dataset that includes information about demographics, housing features, and location.

To predict the cost of a home, we’ll use a variety of features:

- **Demographic Information**
  - Income, population, and house occupancy in different districts.
- **Geographic Information**
  - Latitude and longitude of the districts.
- **Housing Characteristics**
  - Number of bedrooms, total rooms, age of the house, etc.

**Supervised learning** is a type of machine learning where the model is trained on labeled data. Labeled data means that each data point already includes the target value the model needs to predict. In our case, the target value is the median house value. The model will learn from this data to predict the house prices based on other features.

**Linear regression** is a supervised learning algorithm used to predict a numeric value (the target) based on the relationships between different features (independent variables). It’s widely used for forecasting and understanding the relationships between variables.

## Exploring the Housing Dataset

Let’s take a closer look at the features in our housing dataset:

<ScrollableTableContainer>

| longitude | latitude | housing_median_age | total_rooms | total_bedrooms | population | households | median_income | median_house_value | ocean_proximity |
| --------- | -------- | ------------------ | ----------- | -------------- | ---------- | ---------- | ------------- | ------------------ | --------------- |
| -122.23   | 37.88    | 41                 | 880         | 129            | 322        | 126        | 8.3252        | 452600             | NEAR BAY        |
| -122.22   | 37.86    | 21                 | 7099        | 1106           | 2401       | 1138       | 8.3014        | 358500             | NEAR BAY        |
| -122.24   | 37.85    | 52                 | 1467        | 190            | 496        | 177        | 7.2574        | 352100             | NEAR BAY        |
| -122.25   | 37.85    | 52                 | 1274        | 235            | 558        | 219        | 5.6431        | 341300             | NEAR BAY        |
| -122.25   | 37.85    | 52                 | 1627        | 280            | 565        | 259        | 3.8462        | 342200             | NEAR BAY        |
| ...       | ...      | ...                | ...         | ...            | ...        | ...        | ...           | ...                | ...             |

</ScrollableTableContainer>

- **Longitude** (`longitude`)
  - How far west a house is located. A higher value means it's further west.
- **Latitude** (`latitude`)
  - How far north a house is located. A higher value means it's further north.
- **Housing Median Age** (`housing_median_age`)
  - The median age of houses in the area. Lower numbers indicate newer buildings.
- **Total Rooms** (`total_rooms`)
  - The total number of rooms within a block.
- **Total Bedrooms** (`total_bedrooms`)
  - The total number of bedrooms within a block.
- **Population** (`population`)
  - The total number of people residing within a block.
- **Households** (`households`)
  - The total number of households within a block.
- **Median Income** (`median_income`)
  - The median income for households within a block, measured in tens of thousands of US dollars.
- **Median House Value** (`median_house_value`)
  - The median value of houses in the area. This is our target variable.
- **Ocean Proximity** (`ocean_proximity`)
  - How close the house is to the ocean.

## Loading the Data with Python

Now, let’s see how we can load and explore this data using Python. We'll use libraries like Pandas, Matplotlib, and Seaborn for this task.

1. Loading the Data

```python
import pandas as pd

# Read the data
housing_df = pd.read_csv('housing.csv')
```

This code reads the CSV file and loads it into a Pandas DataFrame called `housing_df`.

2. Show the features of the dataset

```python
# Display the features of the dataset
housing_df.info()
```

This code displays the features of the dataset, including the data types and the number of non-null values.

```plaintext
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 20640 entries, 0 to 20639
Data columns (total 10 columns):
 #   Column              Non-Null Count  Dtype
---  ------              --------------  -----
 0   longitude           20640 non-null  float64
 1   latitude            20640 non-null  float64
 2   housing_median_age  20640 non-null  float64
 3   total_rooms         20640 non-null  float64
 4   total_bedrooms      20433 non-null  float64
 5   population          20640 non-null  float64
 6   households          20640 non-null  float64
 7   median_income       20640 non-null  float64
 8   median_house_value  20640 non-null  float64
 9   ocean_proximity     20640 non-null  object
dtypes: float64(9), object(1)
memory usage: 1.6+ MB
```
