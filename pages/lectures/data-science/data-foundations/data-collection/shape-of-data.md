---
title: Shape of Data
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

# Shape of Data

Imagine you've taken on the role of a tree census taker. Your primary focus is on two main aspects: the height and species of each tree. These two aspects are known as variables because they can vary from one tree to another. This variability is the core of what makes them so important in data analysis.

Each tree you observe is referred to as an entity, an observation, or an instance. These terms are often used interchangeably in the world of data science, but for simplicity, we’ll stick with calling them observations.

In a well-organized dataset, each variable should describe only one characteristic of your observations. A good variable should not be a characteristic itself but rather a measure of a characteristic. This distinction might seem subtle, but it’s crucial for clarity and effective data analysis.

Let’s dive into an example to make this clearer. Suppose you want to collect additional information about the environment in which each tree is located. You might be interested in whether a tree is along a city street, a highway, or in an undeveloped area. Additionally, you want to know if each tree stands alone or is part of a group.

## Organizing Your Data

There are multiple ways to organize this data, but some methods are more efficient than others. Let’s consider two possible approaches:

1. Three Separate Variables:
   - You could create three new variables: ‘City’, ‘Highway’, and ‘Undeveloped’, and then input ‘alone’ or ‘group’ as their values.
2. Two Consolidated Variables:
   - Alternatively, you could create two new variables: ‘Location Type’ and ‘Single’. In the ‘Location Type’ variable, you would input the type of environment (City, Highway, Undeveloped, etc.). In the ‘Single’ variable, you would input 0 or 1, indicating whether the tree is alone (1) or part of a group (0).

At first glance, option one might seem straightforward during the data collection phase. However, it poses significant challenges when it comes to analyzing the data. For example, finding all the trees in a city and then segmenting them by whether they are alone or in a group would be cumbersome.

You may have noticed that ‘City’, ‘Highway’, and ‘Undeveloped’ are categories that can be grouped under a broader characteristic, such as ‘Location Type’. By naming your variable ‘Location Type’ and listing all possible values, you make the dataset more flexible and easier to analyze. This approach also allows you to add new categories in the future, such as ‘Park’ or ‘Yard’, without restructuring the entire dataset.

## Choosing the Right Organization Method

Given these considerations, option two is the more effective way to organize your data. It consolidates related information and simplifies the analysis process.

But what about the variable for whether a tree is alone or in a group? For now, you can name this variable ‘Single’. You’ll use 1 to indicate True/Yes (the tree is alone) and 0 for False/No (the tree is in a group).

## Comparing the Two Approaches

Compare the organization of the datasets. Notice that with the tidy dataset, every variable has a value for every observation. This isn’t always possible, but it is ideal.

**Not Tidy Data**

<ScrollableTableContainer>

| Height | Species | City | Highway | Undeveloped |
| ------ | ------- | ---- | ------- | ----------- |
| x      | x       |      |         | x           |
| x      | x       | x    |         |             |
| x      | x       |      |         | x           |

</ScrollableTableContainer>

**Tidy Data**

<ScrollableTableContainer>

| Height | Species | Location Type | Alone (Single) |
| ------ | ------- | ------------- | -------------- |
| x      | x       | x             | x              |
| x      | x       | x             | x              |
| x      | x       | x             | x              |
| x      | x       | x             | x              |

</ScrollableTableContainer>

## Conclusion

By carefully choosing and defining your variables, you set a solid foundation for effective data analysis. In our tree census example, consolidating the location information into a single variable, ‘Location Type’, and using a binary variable, ‘Single’, to indicate whether a tree stands alone, streamlines the dataset and makes future analysis much more manageable.

Good data organization is about more than just collecting information; it’s about making sure that information is easy to understand and analyze. This thoughtful approach to structuring your data will pay off when you start exploring and extracting insights from your dataset. By focusing on clear and well-defined variables, you make the data more useful and the analysis more powerful.
