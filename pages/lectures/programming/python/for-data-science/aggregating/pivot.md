---
title: Pivot
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

# Pivot

When working with datasets, especially large ones, it's crucial to understand how to structure your data for both analysis and readability. One key concept in data manipulation is converting between long and wide data formats. Let's dive into this by looking at an example involving football tournament data and the `pivot_table` function in pandas.

## Understanding Long Format Data

Long format data is a common structure in data science, particularly useful for computational tasks. When you group your data, such as summarizing total goals scored by year and tournament, you typically end up with long format data.

Here's an example using a dataset of football tournaments:

```python
results.groupby(
    ['year', 'tournament']
)['total_goals'].sum()
```

The output might look like this:

<ScrollableTableContainer>

| year | tournament                   | total_goals |
| ---- | ---------------------------- | ----------- |
| 2000 | AFC Asian Cup qualification  | 260.0       |
| 2000 | African Cup of Nations       | 73.0        |
| 2000 | FIFA World Cup qualification | 802.0       |

</ScrollableTableContainer>

In this format, the `year` category repeats for each tournament held that year. This repetition is characteristic of long format data.

## Advantages and Challenges of Long Format

Long format data is often easier for computers to process and is required by many data science packages in Python. However, it can be challenging to read and interpret, especially when you need to compare data across different categories or time periods. For instance, comparing goals scored in different years or across tournaments can become cumbersome with long format data.

## Transitioning to Wide Format

To enhance human readability, you can convert your data into wide format. In wide format, each category (such as a tournament) becomes a column, making comparisons across categories and time periods more straightforward.

Here's how our previous example looks in wide format:

<ScrollableTableContainer>

| year | AFC Asian Cup qualification | African Cup of Nations | FIFA World Cup qualification |
| ---- | --------------------------- | ---------------------- | ---------------------------- |
| 2000 | 260.0                       | 73.0                   | 802.0                        |
| 2001 | NaN                         | NaN                    | NaN                          |

</ScrollableTableContainer>

## Creating Wide Format Data with pivot_table

The pandas method `pd.pivot_table()` is a powerful tool for creating wide-format data. It not only converts the data but can also handle initial grouping and aggregation.

To produce the wide format table from our example, you can use the following code:

```python
pd.pivot_table(results,
    index='year',
    columns='tournament',
    values='total_goals',
    aggfunc='sum'
)
```

Here’s a breakdown of the parameters:

- `index`: The column to use as the index (rows) in the wide format table.
- `columns`: The column to use as the columns in the wide format table.
- `values`: The column to aggregate in the wide format table.
- `aggfunc`: The aggregation function to apply to the values.

### Example

```python
pivoted_results = pd.pivot_table(results,
    index='year',
    columns='tournament',
    values='total_goals',
    aggfunc='sum'
).reset_index()
```

Chaining `.reset_index()` after pivoting can be helpful. This step converts the index column back into a standard column, making it easier to work with and interpret.

## Conclusion

Understanding and manipulating data formats is vital for effective data analysis. While long format data is advantageous for computational purposes, wide format data enhances readability and interpretability. Using tools like `pd.pivot_table()` allows you to switch between these formats seamlessly, ensuring you have the right structure for both analysis and presentation. By mastering these techniques, you can significantly improve the clarity and impact of your data insights.
