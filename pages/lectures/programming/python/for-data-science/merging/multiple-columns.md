---
title: Multiple Columns
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

# Multiple Columns

In your data analysis journey, you've likely encountered tables designed with specific columns meant for merging. For instance, consider a games table that uses a column like scores_id to link games to their scores. This setup makes merging straightforward. However, real-world datasets aren't always this accommodating. Sometimes, you need to merge tables without a single, clear linking column. This is where merging on multiple columns becomes crucial.

## Example

Imagine you're working with a football dataset that includes details about penalty shootouts. Here's a snippet of the `shootouts` table:

| shootout_date | home_team   | away_team        | winner      |
| ------------- | ----------- | ---------------- | ----------- |
| 1967-08-22    | India       | Taiwan           | Taiwan      |
| 1971-11-14    | South Korea | Vietnam Republic | South Korea |
| 1972-05-07    | South Korea | Iraq             | Iraq        |
| 1972-05-17    | Thailand    | South Korea      | South Korea |

This table records the winner of each penalty shootout, but it lacks a single column that you can use to merge directly with the `games` table. Although both tables share columns like `home_team` and `away_team`, merging on just one column can lead to incorrect matches.

## The Problem with Single-Column Merges

Let's say you try merging on the home_team column. If the games table has multiple entries where South Korea is the home team, a single-column merge would erroneously merge all those games with multiple rows from the shootouts table. For example, merging on home_team alone would merge every South Korea home game with both the 1971 and 1972 shootouts. Clearly, this isn't accurate.

## Merging on Multiple Columns

To accurately merge these tables, you need to match on multiple columns. Specifically, you can match:

- `date` with `shootout_date`
- `home_team` with `home_team`
- `away_team` with `away_team`

This approach ensures you're identifying a specific game. It’s highly improbable that the same teams played two games on the same day, making this a robust method for merging.

## Performing Multi-Column Merges

In pandas, you can achieve this multi-column merge by passing lists to the left_on and right_on parameters in the merge function:

```python
pd.merge(left=games,
         right=shootouts,
         left_on=['date', 'home_team', 'away_team'],
         right_on=['shootout_date', 'home_team', 'away_team'],
         how='left')
```

Here's a Here's a breakdown of this code:

- `left=games`: The left DataFrame you want to merge.
- `right=shootouts`: The right DataFrame you want to merge.
- `left_on=['date', 'home_team', 'away_team']`: The columns from the left DataFrame to match.
- `right_on=['shootout_date', 'home_team', 'away_team']`: The columns from the right DataFrame to match.
- `how='left'`: The type of merge you want to perform. In this case, it's a left merge.

The order of the columns in the lists is significant. pandas first matches rows where `date` equals `shootout_date`, then checks that `home_team` and `away_team` match accordingly. This method ensures precise merging, reflecting the true relationships within your data.

## Conclusion

Merging datasets accurately is vital for meaningful analysis. While single-column merges can be straightforward, they often fall short in real-world scenarios. Understanding how to merge on multiple columns allows you to harness the full potential of your data, ensuring that your analyses are based on correctly matched and relevant records. By mastering these techniques, you enhance your data's integrity and the reliability of your insights.
