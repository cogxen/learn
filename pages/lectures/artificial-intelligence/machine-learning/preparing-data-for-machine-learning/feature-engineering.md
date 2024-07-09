---
title: Feature Engineering | Lectures | Cogxen
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

# Feature Engineering

Feature engineering is a crucial process in data manipulation that can significantly improve your model's prediction capabilities. It's a blend of art and science, requiring a deep understanding of your data and the relationships between different features. Let's dive into the essentials of feature engineering and how you can apply it effectively.

## What is Feature Engineering?

Feature engineering involves creating new features, removing redundant ones, and combining existing features to enhance your model's performance. The ultimate goal is to present your model with the most relevant data, ensuring it learns effectively and makes accurate predictions.

## Handling Missing Data

When dealing with datasets, you often encounter missing values. For instance, in our example, we have 207 rows where the total bedrooms are missing, you will see it below. Since every home should have at least one bedroom, these missing values indicate an error that can skew the model's results.

Let's verify which features have missing values in our dataset.

```python
# Verify which features have missing values
housing_df.isnull().sum()
```

<ScrollableTableContainer>

|                    | total |
| ------------------ | ----- |
| longitude          | 0     |
| latitude           | 0     |
| housing_median_age | 0     |
| total_rooms        | 0     |
| total_bedrooms     | 207   |
| population         | 0     |
| households         | 0     |
| median_income      | 0     |
| median_house_value | 0     |
| ocean_proximity    | 0     |

</ScrollableTableContainer>

Now, calculate the percentage of missing values in the `total_bedrooms` feature.

```python
# Calculate the percentage of missing values
housing_df['total_bedrooms'].isnull().sum() / len(housing_df) * 100
```

```plaintext
1.002906976744186
```

There are several strategies to handle missing data:

- **Delete Rows**: Remove rows with missing values.
- **Predict Missing Values**: Use machine learning to estimate and fill in the missing values.
- **Impute with Mean/Median**: Replace missing values with the average or median of that feature.
- **Use Robust Algorithms**: Some algorithms can handle missing data without needing imputation.

## Identifying and Handling Correlated Features

Highly correlated features can be redundant, teaching the model similar things and potentially leading to overfitting. We need to identify these correlations and decide which features to keep, remove, or combine.

In our dataset, we noticed strong correlations between:

- `total_rooms` and `total_bedrooms`
- `population` and `households`
- `households` and `total_room`

To handle these correlations, we can create new combined features and drop the redundant ones. Here’s how:

```python
# total_rooms to household ratio
housing_df['rooms_per_household'] = housing_df['total_rooms']/housing_df['households']

# total_bedrooms to total_rooms ratio
housing_df['bedrooms_per_rooom'] = housing_df['total_bedrooms']/housing_df['total_rooms']

# population to households ratio
housing_df['population_per_household'] = housing_df['population']/housing_df['households']

# Display the dataset information
housing_df.info()
```

```plaintext
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 20640 entries, 0 to 20639
Data columns (total 13 columns):
 #   Column                    Non-Null Count  Dtype
---  ------                    --------------  -----
 0   longitude                 20640 non-null  float64
 1   latitude                  20640 non-null  float64
 2   housing_median_age        20640 non-null  float64
 3   total_rooms               20640 non-null  float64
 4   total_bedrooms            20433 non-null  float64
 5   population                20640 non-null  float64
 6   households                20640 non-null  float64
 7   median_income             20640 non-null  float64
 8   median_house_value        20640 non-null  float64
 9   ocean_proximity           20640 non-null  object
 10  rooms_per_household       20640 non-null  float64
 11  bedrooms_per_rooom        20433 non-null  float64
 12  population_per_household  20640 non-null  float64
dtypes: float64(12), object(1)
memory usage: 2.0+ MB
```

Now let's also combine by creating a ratio of latitude and longitude features to create a new feature that represents the location of each house and display the new dataset information.

```python
# Combine the latitude and longitude
housing_df['coordinates'] = housing_df['latitude']/housing_df['longitude']

# Display the new dataset information
housing_df.info()
```

```plaintext
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 20640 entries, 0 to 20639
Data columns (total 14 columns):
 #   Column                    Non-Null Count  Dtype
---  ------                    --------------  -----
 0   longitude                 20640 non-null  float64
 1   latitude                  20640 non-null  float64
 2   housing_median_age        20640 non-null  float64
 3   total_rooms               20640 non-null  float64
 4   total_bedrooms            20433 non-null  float64
 5   population                20640 non-null  float64
 6   households                20640 non-null  float64
 7   median_income             20640 non-null  float64
 8   median_house_value        20640 non-null  float64
 9   ocean_proximity           20640 non-null  object
 10  rooms_per_household       20640 non-null  float64
 11  bedrooms_per_rooom        20433 non-null  float64
 12  population_per_household  20640 non-null  float64
 13  coordinates               20640 non-null  float64
dtypes: float64(13), object(1)
memory usage: 2.2+ MB
```

## Creating New Features

1. **Rooms per Household**: The ratio of total rooms to households.
2. **Bedrooms per Room**: The ratio of total bedrooms to total rooms.
3. **Population per Household**: The ratio of population to households.
4. **Coordinates**: A combination of latitude and longitude, which accounts for geographical location.

After creating these new features, we remove the original correlated features (total rooms, households, total bedrooms, population, longitude, and latitude).

Remove the correlated features:

```python
# Drop the correlated features
housing_df.drop(['total_rooms', 'total_bedrooms', 'population', 'households', 'longitude', 'latitude'], axis=1, inplace=True)

# Display the new dataset information
housing_df.info()
```

```plaintext
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 20640 entries, 0 to 20639
Data columns (total 8 columns):
 #   Column                    Non-Null Count  Dtype
---  ------                    --------------  -----
 0   housing_median_age        20640 non-null  float64
 1   median_income             20640 non-null  float64
 2   median_house_value        20640 non-null  float64
 3   ocean_proximity           20640 non-null  object
 4   rooms_per_household       20640 non-null  float64
 5   bedrooms_per_rooom        20433 non-null  float64
 6   population_per_household  20640 non-null  float64
 7   coordinates               20640 non-null  float64
dtypes: float64(7), object(1)
memory usage: 1.3+ MB
```

## Visualizing Data Relationships

We can use a heat map to visualize the correlation between features. After creating new features and removing correlated ones, the heat map should show no high correlations, indicating a more refined dataset.

Let's display the new correlation matrix:

```python
# Display the new heatmap after removing correlation features
# Select only numeric columns for correlation calculation
numeric_cols = housing_df.select_dtypes(include=[np.number])

corr = numeric_cols.corr()

# Plot the new correlation matrix
plt.figure(figsize=(7,7))
sns.heatmap(corr, annot=True)
plt.show()
```

<ImageCard 
  img_url="https://i.imgur.com/PvRsX7L.png" 
  caption="Correlation Heatmap"
  copyright_owner="cogxen.quest"
  bordered=true
/>

## Encoding Categorical Data

Most machine learning algorithms require numeric data. Therefore, categorical data (data in string format) must be converted to numerical form. In our dataset, the categorical feature is ocean proximity.

### One-Hot Encoding

One-hot encoding transforms categorical values into binary columns. For example, the ocean proximity feature has five possible values:

- Less than one hour away from the ocean
- Inland
- Island
- Near the bay
- Near the ocean

One-hot encoding will create a new binary column for each possible value, where a value of 1 indicates the presence of that category and 0 indicates its absence.

Here's how to apply one-hot encoding to the ocean proximity feature:

First we display all the unique categories for ocean proximity:

```python
# Display all the unique categories for ocean_proximity
housing_df.ocean_proximity.unique()
```

```plaintext
array(['NEAR BAY', '<1H OCEAN', 'INLAND', 'NEAR OCEAN', 'ISLAND'],
      dtype=object)
```

Then, count the number of ocean proximity categories:

```python
# Count the number of ocean proximity categories
housing_df.ocean_proximity.value_counts()
```

<ScrollableTableContainer>

| ocean_proximity | count |
| --------------- | ----- |
| 1H OCEAN        | 9136  |
| INLAND          | 6551  |
| NEAR OCEAN      | 2658  |
| NEAR BAY        | 2290  |
| ISLAND          | 5     |

</ScrollableTableContainer>

Now, apply one-hot encoding to the ocean proximity feature:

```python
# Apply one-hot encoding to the ocean_proximity feature
print(pd.get_dummies(housing_df['ocean_proximity']))
```

```plaintext
       <1H OCEAN  INLAND  ISLAND  NEAR BAY  NEAR OCEAN
0          False   False   False      True       False
1          False   False   False      True       False
2          False   False   False      True       False
3          False   False   False      True       False
4          False   False   False      True       False
...          ...     ...     ...       ...         ...
20635      False    True   False     False       False
20636      False    True   False     False       False
20637      False    True   False     False       False
20638      False    True   False     False       False
20639      False    True   False     False       False

[20640 rows x 5 columns]
```

Let's replace the `ocean_proximity` feature with the one-hot encoded columns:

```python
# Replace the ocean_proximity feature with the one-hot encoded columns
housing_df_encoded = pd.get_dummies(housing_df, columns=['ocean_proximity'])

# Display the first few rows of the new dataset
housing_df_encoded.head()
```

<ScrollableTableContainer>

| housing_median_age | median_income | median_house_value | rooms_per_household | bedrooms_per_rooom | population_per_household | coordinates | ocean*proximity*<1H OCEAN | ocean_proximity_INLAND | ocean_proximity_ISLAND | ocean_proximity_NEAR BAY | ocean_proximity_NEAR OCEAN |
| ------------------ | ------------- | ------------------ | ------------------- | ------------------ | ------------------------ | ----------- | ------------------------- | ---------------------- | ---------------------- | ------------------------ | -------------------------- |
| 41.0               | 8.3252        | 452600.0           | 6.984127            | 0.146591           | 2.555556                 | 0.000000    | 0                         | 0                      | 0                      | 1                        | 0                          |
| 21.0               | 8.3014        | 358500.0           | 6.238137            | 0.155797           | 2.109842                 | 0.000000    | 0                         | 0                      | 0                      | 1                        | 0                          |
| 52.0               | 7.2574        | 352100.0           | 8.288136            | 0.129516           | 2.802260                 | 0.000000    | 0                         | 0                      | 0                      | 1                        | 0                          |
| 52.0               | 5.6431        | 341300.0           | 5.817352            | 0.184458           | 2.547945                 | 0.000000    | 0                         | 0                      | 0                      | 1                        | 0                          |
| 52.0               | 3.8462        | 342200.0           | 6.281853            | 0.172096           | 2.181467                 | 0.000000    | 0                         | 0                      | 0                      | 1                        | 0                          |

</ScrollableTableContainer>

### Consideration

While one-hot encoding is effective, it can lead to high cardinality. This means as the number of features increases, the model may struggle with the "curse of dimensionality," making it harder to learn and generalize.

## Conclusion

Feature engineering is a powerful technique that enhances your model's predictive power by refining your dataset. By handling missing data, identifying and combining correlated features, and encoding categorical data, you can create a robust dataset that maximizes your model’s performance.
