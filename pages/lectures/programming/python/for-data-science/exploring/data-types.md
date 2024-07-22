---
title: Data Types
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

# Data Types

When you dive into analyzing a dataset, one of the first things you'll notice is that different columns can contain various kinds of data. Imagine you're working with a dataset of product repairs. You might have a column like product_age that holds numbers and another like product_category that contains text. These different kinds of data are known as data types, and understanding them is crucial because the type of each column determines what kind of analyses you can perform. For example, you can't calculate an average on text data!

## Viewing Data Types

When you import a dataset using pandas, it automatically assigns a data type to each column. These assignments aren’t always correct, so it’s essential to check and, if necessary, correct them. You can see what data types pandas has assigned to your dataset by using the following syntax:

```python
dataset_name.dtypes
```

For example, if you’ve imported your repair dataset with the name `repair`, you can display the data types like this:

```python
repair.dtypes
```

Let's break down some common data types you might encounter.

### Numeric Data

In our repair dataset, you might find columns like `year_of_manufacture`, `product_age`, and `year_repaired`. The data types for these could be listed as `float64`, `float64`, and `int64`:

- `float64` refers to numbers that can have decimals, like `3.0` or `3.14159`.
- `int64` refers to integers, which are numbers that cannot have decimals, like `3` or `4`.

### Text Data

Text data in your dataset might appear in columns such as `country`, `product_category`, `brand`, and `repair_status`. Pandas typically lists these as having the `object` data type. This is a general name pandas uses for text-based data or columns where it’s unsure of the exact data type.

### Categorical Data

Categorical data refers to columns where each record can only have a few predefined values. For example, `repair_status` might be a categorical column because each row should only contain one of a few specific values like `fixed`, `repairable`, `end of life`, or `unknown`.

While we often think of categorical data as text, numeric columns can also be categorical. For instance, in our repair dataset, year_repaired might have only a few predefined possible values. In some analyses, it might make sense to treat this column as categorical.

Pandas has a special data type for categorical data called `category`. However, this type must be applied manually to a column, which you’ll learn to do later.

## Conclusion

Understanding data types in your dataset is a fundamental step in data analysis. Numeric data, whether integers or floats, text data, and categorical data each have their own unique properties and uses. By knowing how to view and correctly assign these types in pandas, you set the foundation for accurate and insightful analysis. Keep exploring, and you'll soon master how to handle different data types to extract meaningful insights from your datasets.
