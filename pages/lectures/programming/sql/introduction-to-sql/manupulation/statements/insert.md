---
title: "INSERT"
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

# `INSERT`

The `INSERT` statement is your go-to command when you want to add new records to a table in your database. It's like adding a new page to a book, where each page represents a new record full of valuable information.

Let's break down the syntax step-by-step with an example to make it crystal clear. Suppose we want to add a new celebrity, Justin Bieber, to our `celebs` table. Here’s how we do it:

```sql :line-numbers
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 29);
```

Let’s dissect this statement:

- `INSERT INTO`: This clause specifies the action of adding a new row.
- `celebs`: This is the table where the new row will be inserted.
- `(id, name, age)`: These are the columns in the table where the data will be placed.
- `VALUES`: This clause indicates the actual data to be inserted into the specified columns.
- `(1, 'Justin Bieber', 29)`: These are the values to be inserted into the columns.

Let’s break this down even further:

- **1**: This integer will be added to the id column.
- **'Justin Bieber'**: This text will be added to the name column.
- **29**: This integer will be added to the age column.

## Activity

Now, let's put theory into practice with a hands-on activity.

### Adding a Single Record

First, let’s add **Justin Bieber** to our `celebs` table. Here’s the SQL command to insert this record:

```sql :line-numbers
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 29);
```

After running this command, check the Database Schema to see the new row added to the celebs table. How many rows are there now? There should be one row in total. Because we only added one record.

<!--@include: ../../_includes/tables/query-results-from-create.md-->

### Adding Multiple Records

Next, we will add three more celebrities to the table. Beneath your previous INSERT statement, type the following commands:

```sql :line-numbers
INSERT INTO celebs (id, name, age)
VALUES (2, 'Beyonce Knowles', 42);
```

```sql :line-numbers
INSERT INTO celebs (id, name, age)
VALUES (3, 'Jeremy Lin', 35);
```

```sql :line-numbers
INSERT INTO celebs (id, name, age)
VALUES (4, 'Taylor Swift', 33);
```

Run these commands and check the Database Schema again. How many rows do you see in the celebs table now? You should see four rows in total. Because we added four records.

<!--@include: ../../_includes/tables/query-results-from-create.md-->
