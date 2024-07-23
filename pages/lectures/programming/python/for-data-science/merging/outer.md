---
title: Outer
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

# Outer

When working with data from multiple sources, merging datasets is a common task. One powerful technique for this is the outer merge. An outer merge, also known as a full outer merge, keeps all the rows from both datasets, joining those that match while preserving unmatched rows from both sides.

## Example

Let's consider two DataFrames, X and Y, to illustrate how an outer merge works:

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

When we perform an outer merge on the 'Category' column, we aim to combine these DataFrames while retaining all categories from both, even if they don't match perfectly.

## How Outer Merges Work?

Outer merges work by matching columns from both DataFrames. The resulting DataFrame will contain all rows from both DataFrames, with NaN values for any missing data.

### Process of Outer Merge

1. **Identify Shared Values**

   - The first step is to identify any shared values in the 'Category' columns. In this case, the shared category is 'B'.

   | Category |
   | -------- |
   | A        |
   | B        |
   | C        |

2. **Create a Merged Table Skeleton**

   - The merged table will contain all unique categories from both DataFrames.

   | Category | Value_x | Value_y |
   | -------- | ------- | ------- |
   | A        |         |         |
   | B        |         |         |
   | C        |         |         |

3. **Populate the Merged Table**

   - Next, we populate the merged table with the values from the original DataFrames.

   | Category | Value_x | Value_y |
   | -------- | ------- | ------- |
   | A        | 1       | NaN     |
   | B        | 2       | 3       |
   | C        | NaN     | 4       |

   Here, `NaN` indicates that there is no matching value in that DataFrame for the specific category.

## Handling Multiple Matches

When categories have multiple entries in one or both DataFrames, the merged table expands to include all possible combinations.

DataFrame X:

| Category | Value |
| -------- | ----- |
| A        | 0     |
| A        | 1     |
| B        | 2     |

DataFrame Y:

| Category | Value |
| -------- | ----- |
| B        | 3     |
| C        | 4     |

In this case, the merged table will look like this:

| Category | Value_x | Value_y |
| -------- | ------- | ------- |
| A        | 0       | NaN     |
| A        | 1       | NaN     |
| B        | 2       | 3       |
| C        | NaN     | 4       |

In this case, each entry from the left DataFrame is matched with all corresponding entries from the right DataFrame.

### Example

Let's use Python to perform an outer merge on the DataFrames X and Y:

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
| B        | 6     |
| C        | 4     |

The merge table will look like this:

| Category | Value_x | Value_y |
| -------- | ------- | ------- |
| A        | 1       | NaN     |
| B        | 2       | 3       |
| B        | 2       | 6       |
| B        | 5       | 3       |
| B        | 5       | 6       |
| C        | NaN     | 4       |

Here, every combination of matching 'B' entries is included, leading to an expanded result.

## Performing Outer Merges

Using the Python library pandas, you can perform an outer merge with a simple function call. Here’s the syntax:

```python
pd.merge(left=X,
         right=Y,
         left_on='Category',
         right_on='Category',
         how='outer')
```

Here's what each parameter means:

- `left=X`: The name of the left DataFrame.
- `right=Y`: The name of the right DataFrame.
- `left_on='Category'`: The column in the left DataFrame to merge on.
- `right_on='Category'`: The column in the right DataFrame to merge on.
- `how='outer'`: Specifies the type of merge to perform. In this case, it's an outer merge.

This function merges DataFrame X and DataFrame Y on the 'Category' column, ensuring all rows from both DataFrames are included.

## Conclusion

Outer merges are invaluable when you need to ensure that no data is left behind, even if there are mismatches between your datasets. This method allows you to retain a comprehensive view of your data, making it easier to identify gaps and understand the full scope of your dataset. By mastering outer merges, you enhance your ability to integrate diverse data sources effectively, paving the way for more robust and insightful analyses.
