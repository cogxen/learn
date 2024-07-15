---
title: Data Types and Quality
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

# Data Types and Quality

When Larry Page, the co-founder of Google, mentioned that they chose the name "Google" because they deal with an enormous amount of data, he wasn't exaggerating. The term "googol" itself refers to a 1 followed by 100 zeros, symbolizing the vast quantities of data that Google handles. But what does it actually mean to work with such massive datasets? What do these datasets look like, and how do you effectively manage them?

In data science, "data" refers to a collection of organized observations. These observations can be organized in different ways, primarily through their methodology and shape.

## How Data is Collected?

The methodology of data collection refers to the various techniques used to gather information. This can range from surveys and experiments to automated data collection methods like web scraping or sensor data logging. Understanding the methodology is crucial because it affects the data's reliability and validity.

## How Data is Structured?

The shape of data typically refers to how it is organized within a dataset. The most common shape is a **spreadsheet** or **table**. Here, the **variables** (the characteristics we measure) are arranged in columns, while the **observations** (individual instances of those measurements) are arranged in rows. This tabular format allows you to read down each column to see all the observations for a particular variable or across each row to see all the variables for a particular observation.

This tabular format is not the only way to organize data, but it is the most prevalent due to its simplicity and effectiveness in representing structured data.

## Working with Data

When you work with data, you're dealing with various types and qualities of data. Understanding these aspects is essential for effective data analysis.

## Data Types

Data can be classified into different types based on their nature:

1. **Quantitative Data**: This type involves numerical values that can be measured and quantified. Examples include height, weight, and temperature. Quantitative data can further be divided into:

   - **Discrete Data**: Countable values like the number of students in a class.
   - **Continuous Data**: Measurable values that can take any value within a range, like height or weight.

2. **Qualitative Data**: This type involves non-numerical values that describe qualities or characteristics. Examples include names, labels, and categories. Qualitative data can be further classified into:

   - **Nominal Data**: Categories without a specific order, like colors or types of fruit.
   - **Ordinal Data**: Categories with a specific order, like rankings or grades.

## Data Quality

The quality of your data is just as important as the data itself. High-quality data is accurate, complete, reliable, and relevant. Here are some key aspects to consider:

1. **Accuracy**: Ensure that the data correctly represents the real-world values or events it is intended to model.
2. **Completeness**: Check that all necessary data is present and accounted for, with no missing values.
3. **Reliability**: Verify that the data is consistent over time and across different sources.
4. **Relevance**: Make sure that the data is pertinent to the analysis or decision-making process at hand.

## A Tree Census

Let's illustrate these concepts with an example: conducting a tree census in a city park. Suppose you want to collect data on all the trees in the park. Your dataset might include variables such as:

- Tree ID (a unique identifier for each tree)
- Height (measured in meters)
- Species (the type of tree)
- Location Type (e.g., park entrance, playground, walking path)
- Single (whether the tree is a single tree or part of a group)
- Prettiness (a subjective measure of the tree's aesthetic appeal)

| ID    | Height | Species      | Location Type    | Single | Prettiness |
| ----- | ------ | ------------ | ---------------- | ------ | ---------- |
| 12139 | 10.40  | Pin Oak      | Undeveloped Area | 0      | 2          |
| 19433 | 15.00  | London Plane | City             | 1      | 4          |
| 17461 | 19.10  | Pin Oak      | Highway          | 1      | 3          |
| 15108 | 5.90   | London Plane | City             | 1      | 1          |
| 11246 | 5.90   | Tulip        | City             | 0      | 2          |
| 12034 | 26.30  | Silver Maple | Undeveloped Area | 1      | 5          |
| 13281 | 11.60  | Honeylocust  | City             | 1      | 5          |
| 12438 | 5.40   | Green Ash    | Undeveloped Area | 0      | 5          |

Each row in your dataset would represent a single tree, and each column would represent one of these variables.

## Conclusion

Understanding data types and quality is fundamental to working effectively with data. By grasping how data is collected, organized, and categorized, you can better analyze and interpret the information at your disposal. Always strive to ensure your data is accurate, complete, reliable, and relevant, as high-quality data forms the backbone of sound analysis and decision-making. Whether you're dealing with a tree census or vast datasets like those managed by Google, these principles remain the same.
