---
title: Left
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

# Left

When you're merging datasets, inner merges are often the go-to method. They ensure that only rows with matching values in the merge columns are retained. However, this approach can lead to problems when there are missing or mismatched data entries. This is where left merges come into play, offering a more comprehensive approach to data merging.

## The Inner Merge Limitation

Imagine you're working with a football dataset. In this dataset, the highest-scoring home game was between Australia and American Samoa. The game data might look like this:

| date       | home_team | away_team      | location_id | scores_id |
| ---------- | --------- | -------------- | ----------- | --------- |
| 2001-04-11 | Australia | American Samoa | 1261        | 128       |

The `scores_id` value of 128 corresponds to the following row in the scores DataFrame:

| scores_id | home_score | away_score |
| --------- | ---------- | ---------- |
| 128       | 31         | 0          |

In an inner merge, the `scores_id` of 128 would correctly match the game data to this scores row, associating the game between Australia and American Samoa with its accurate scoreline.

But what if the corresponding scores row was accidentally deleted or missing? An inner merge would find no match and remove all data about this game, leading to incomplete and inaccurate analysis, especially for a significant event like the highest-scoring home game.

## The Power of Left Merges

To avoid such issues, you can use a left merge. A left merge retains all rows from the left DataFrame and adds matching rows from the right DataFrame where available. This approach helps you identify and handle missing data more effectively.

### Example

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

In a left merge, you start with the left DataFrame and "add on" information from the right DataFrame, based on the matching column (`Category` in this case). Here’s the step-by-step process:

1. **Initialize the Merge**: Begin with the left DataFrame X.
2. **Match and Add**: For each row in the left DataFrame, find matching values in the right DataFrame.
3. **Handle Missing Values**: If no match is found, fill in `NaN` to indicate a missing value.

After performing a left merge on the above data, the result would be:

| Category | Value_x | Value_y |
| -------- | ------- | ------- |
| A        | 1       | NaN     |
| B        | 2       | 3       |

Here, `Value_x` refers to the values from the left DataFrame and `Value_y` from the right DataFrame. Notice that the missing match for Category A results in a `NaN` in the `Value_y` column.

## Handling Multiple Matches

What if the right DataFrame has multiple matches for a single row in the left DataFrame? For instance:

DataFrame X:

| Category | Value |
| -------- | ----- |
| A        | 1     |
| B        | 2     |

DataFrame Y:

| Category | Value |
| -------- | ----- |
| B        | 3     |
| B        | 5     |
| C        | 4     |

When merging on Category B, you encounter multiple possible matches (3 and 5). The left merge will create a new row for each match:

| Category | Value_x | Value_y |
| -------- | ------- | ------- |
| A        | 1       | NaN     |
| B        | 2       | 3       |
| B        | 2       | 5       |

This ensures that all potential matches are included in your dataset, giving you a more complete view of the data.

## Performing a Left Merges

Executing a left merge in pandas is straightforward and similar to performing an inner merge. The key difference is specifying the how parameter as left:

```python
pd.merge(left=X,
         right=Y,
         left_on='Category',
         right_on='Category',
         how='left')
```

Here's what each parameter means:

- `left=X`: The left DataFrame to merge.
- `right=Y`: The right DataFrame to merge.
- `left_on='Category'`: The column in the left DataFrame to match.
- `right_on='Category'`: The column in the right DataFrame to match.
- `how='left'`: Specifies a left merge, retaining all rows from the left DataFrame.

## Conclusion

Left merges offer a robust solution to maintaining comprehensive datasets, especially when dealing with potential missing data. By retaining all rows from the left DataFrame and filling in where possible from the right, you ensure your analysis remains as complete and accurate as possible. This approach helps in identifying gaps, ensuring data integrity, and ultimately leading to more reliable insights. Keep this technique in your data toolkit to enhance the quality and validity of your analyses.
