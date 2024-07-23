---
title: Inner
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

# Inner

When working with data in Pandas, merging DataFrames is a fundamental operation. The default merge method is called an inner merge. Let’s dive into how it works with a clear and detailed example.

## Example

Imagine you have two DataFrames named X and Y. We'll call X the left DataFrame and Y the right DataFrame.

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

## How Inner Merges Work?

Inner merges work by matching columns from the left DataFrame (X) to columns from the right DataFrame (Y). For simplicity, we will match the Category column in both DataFrames.

### Process of Inner Merge

1. **Identify Shared Values**
   - The first step is to identify any shared values in the Category columns. Here, both X and Y have the Category B. The categories A and C are not shared.
2. **Create the Inner Merge Table**:
   - The inner merge table will only contain the shared category values. In this case, the shared category is B.
3. **Add Remaining Columns**:
   - Next, we add the remaining columns from both tables to the inner merge table. The Value column from X is 2, and the Value column from Y is 3.
4. **Populate the Value Columns**:

   - Finally, we populate the Value columns with the values from the original tables. The inner merge table will look like this:

   | Category | Value_x | Value_y |
   | -------- | ------- | ------- |
   | B        | 2       | 3       |

## Handling Multiple Matches

Sometimes, you might have multiple rows with the same category. Let’s modify our tables to illustrate this:

DataFrame X:

| Category | Value |
| -------- | ----- |
| A        | 1     |
| B        | 2     |
| B        | 5     |

DataFrame Y:

| Category | Value |
| -------- | ----- |
| B        | 3     |
| C        | 4     |

In an inner merge, both rows in X corresponding to the category B will be matched with the corresponding value from Y:

| Category | Value_x | Value_y |
| -------- | ------- | ------- |
| B        | 2       | 3       |
| B        | 5       | 3       |

## Performing a Inner Merges

The syntax in pandas for performing an inner merge is straightforward:

```python
pd.merge(left=X,
         right=Y,
         left_on='Category',
         right_on='Category',
         how='inner')
```

Here's what each parameter means:

- `left=X`: The name of the left DataFrame.
- `right=Y`: The name of the right DataFrame.
- `left_on='Category'`: The column in the left DataFrame to merge on.
- `right_on='Category'`: The column in the right DataFrame to merge on.
- `how='inner'`: Specifies the type of merge to perform. In this case, it's an inner merge.

## Conclusion

Inner merges in pandas are a powerful tool for combining datasets based on shared values in specific columns. By understanding the step-by-step process, you can ensure that your merged DataFrames maintain the integrity and relevance of your data. Always remember to specify the type of merge explicitly to avoid unexpected results, especially when working with more complex datasets.
