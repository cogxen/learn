---
title: "Relational Databases | Lectures | Cogxen"
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
---

# Relational Databases

At its core, a relational database is a system that organizes information into one or more tables. Think of it as a meticulously arranged library where every piece of information has its designated spot. Each table in a relational database is akin to a bookshelf, and the data within are the books neatly aligned on those shelves.

To make this more concrete, let’s consider the `celebs` table. This table is a collection of data organized into rows and columns, much like a spreadsheet.

```sql
SELECT * FROM celebs;
```

This simple line of code retrieves all the information from the `celebs` table. But what does this table look like, and how is it structured?

For reference, here’s a snapshot of the `celebs` table:

<ImageCard
img_url="https://i.imgur.com/d2rovgy.png"
caption="Query Results"
copyright_owner="codecademy.com"
:bordered="true"
/>

## Understanding Tables

A **table** is a fundamental component of a relational database, composed of rows and columns. Each row represents a unique record, while each column contains a specific piece of information about that record.

### Columns

Columns in a table represent a specific type of data. In our `celebs` table, the columns are:

- **id**: A unique identifier for each record.
- **name**: The name of the celebrity.
- **age**: The age of the celebrity.

Columns are like categories in our bookshelf analogy, where each category (column) holds a specific type of book (data).

### Rows

Rows are individual records within a table. Each row is a single entry that contains data for each column. For instance, the first row in the celebs table might look like this:

- **id**: 1
- **name**: Justin Bieber
- **age**: 22

Each row is like a book on our shelf, with its own unique story (data).
