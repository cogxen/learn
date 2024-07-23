---
title: Right
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

# Right

When working with data in Pandas, merging DataFrames is a fundamental task. One of the common types of merges you might need is the right merge. Understanding how to effectively use a right merge can streamline your data analysis, ensuring you keep all necessary information from your right-hand DataFrame while seamlessly integrating data from the left-hand DataFrame.

## What is a Right Merge?

A right merge is essentially the inverse of a left merge. While a left merge keeps all the rows in the left-hand DataFrame and looks for matches in the right-hand DataFrame, a right merge does the opposite. It retains all the rows in the right-hand DataFrame, seeking out matching rows in the left-hand DataFrame.

## Example

To illustrate, let's consider two sample DataFrames:

DataFrame X:

| Category | Value |
| -------- | ----- |
| A        | 1     |
| B        | 2     |

DataFrame Y:

| Category | Value |
| -------- | ----- |
| B        | 3     |
| C        | 4     |

## How Right Merges Work?

Right merges operate by matching columns from the right DataFrame (Y) to columns from the left DataFrame (X). In our example, we will match the Category column in both DataFrames.

### Process of Right Merge

1. **Starting with the Right-Hand DataFrame**

   - The right-hand DataFrame (Y) is the starting point for a right merge. We will look for matching values in the Category column from DataFrame Y in DataFrame X.

   | Category | Value_y |
   | -------- | ------- |
   | B        | 3       |
   | C        | 4       |

2. **Adding Extra Columns from the Left-Hand DataFrame**

   - Next, we add the remaining columns from the left-hand DataFrame (X) to the right-hand DataFrame (Y). The Value column from X is 2.

   | Category | Value_x | Value_y |
   | -------- | ------- | ------- |
   | B        |         | 3       |
   | C        |         | 4       |

3. **Filling in Matching Values**

   - Finally, we populate the Value columns with the values from the original tables. The right merge table will look like this:

   | Category | Value_x | Value_y |
   | -------- | ------- | ------- |
   | B        | 2       | 3       |
   | C        |         | 4       |

For Category C, there is no match in X, so we fill in with NaN:

| Category | Value_x | Value_y |
| -------- | ------- | ------- |
| B        | 2       | 3       |
| C        | NaN     | 4       |

## Handling Multiple Matches

What if there are multiple matches for a category? Let's expand our example with an additional B row in the left-hand DataFrame:

DataFrame X:

| Category | Value |
| -------- | ----- |
| A        | 1     |
| B        | 2     |
| B        | 0     |

DataFrame Y:

| Category | Value |
| -------- | ----- |
| B        | 3     |
| C        | 4     |

In a right merge, both rows in Y corresponding to the category B will be matched with the corresponding value from X:

| Category | Value_x | Value_y |
| -------- | ------- | ------- |
| B        | 2       | 3       |
| B        | 0       | 3       |
| C        | NaN     | 4       |

## Performing a Right Merges

The syntax in pandas for performing an right merge is straightforward:

```python
pd.merge(left = X,
         right = Y,
         left_on = 'Category',
         right_on = 'Category',
         how = 'right')
```

Here's what each parameter means:

- `left = X`: The name of the left DataFrame.
- `right = Y`: The name of the right DataFrame.
- `left_on = 'Category'`: The column in the left DataFrame to merge on.
- `right_on = 'Category'`: The column in the right DataFrame to merge on.
- `how = 'right'`: Specifies the type of merge to perform. In this case, it's a right merge.

## Conclusion

A right merge is a powerful tool for combining DataFrames, ensuring that all entries from your right-hand DataFrame are retained while integrating relevant data from your left-hand DataFrame. By understanding the mechanics of right merges, you can better manage your data, avoid errors, and ensure the accuracy of your analysis. Whether you're dealing with simple matches or multiple entries, mastering right merges will enhance your data manipulation skills in Pandas.
