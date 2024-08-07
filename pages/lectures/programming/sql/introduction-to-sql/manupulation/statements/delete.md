---
title: "DELETE"
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

# `DELETE`

First, let's understand what the `DELETE FROM` statement is and why it's so important. The `DELETE FROM` statement is used in SQL to delete one or more rows from a table. Imagine you’re managing a guest list for a big event, and you need to remove the names of people who RSVP’d but later cancelled. That’s precisely what `DELETE FROM` does in a database—it helps you clean up and maintain the accuracy of your data.

Let’s look at a practical example to illustrate this:

```sql :line-numbers
DELETE FROM celebs
WHERE twitter_handle IS NULL;
```

In this example, we’re dealing with a table called `celebs`. The goal is to delete any rows where the `twitter_handle` column has no data or `NULL`. Here’s how it works:

- `DELETE FROM`: This clause initiates the action to delete rows from the specified table.
- `celebs`: This is the name of the table from which we want to delete rows.
- `WHERE`: This clause allows us to specify the condition for deletion. We’re telling SQL to look for rows where the `twitter_handle` column is `NULL`.
- `IS NULL`: This condition checks whether a value is `NULL` (i.e., missing or undefined).

Think of the `DELETE FROM` statement as a meticulous cleaner, removing unwanted or irrelevant data based on the conditions you set.

## Activity

Now, let’s put theory into practice with a hands-on activity. Roll up your sleeves and get ready to write some SQL code!

### Deleting Rows

Delete all rows in the `celebs` table where the `twitter_handle` column is `NULL`.

First, we need to identify the rows that meet this condition. Run the following query to see the rows that will be deleted:

```sql :line-numbers
DELETE FROM celebs
WHERE twitter_handle IS NULL;

SELECT * FROM celebs;
```

After executing the `DELETE FROM` statement, the `SELECT * FROM celebs;` command will display the remaining rows in the table. This will help you verify that the rows with `NULL` `twitter_handle` have been successfully deleted.

Here's what you can expect after running these commands:

<!--@include: ../../_includes/tables/query-results-from-delete.md-->
