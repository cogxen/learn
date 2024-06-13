---
title: "Statements | Lectures | Cogxen"
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

# Statements

At the heart of SQL is the statement. Think of a statement as a sentence that the database understands and executes. It’s text that conveys a valid command to the database, and it always concludes with a semicolon (`;`). This tiny punctuation mark signifies the end of your command, ensuring the database knows when to process your instructions.

Here's an example of an SQL statement:

```sql
CREATE TABLE table_name (
   column_1 data_type,
   column_2 data_type,
   column_3 data_type
);
```

## Breaking Down the Statement

Now, let’s dissect this statement and uncover its components:

### Clause

First up is the **clause**. In our example, `CREATE TABLE` is the clause. Clauses are the backbone of SQL commands, performing specific tasks. By convention, they are written in capital letters to stand out and signify their importance. You can think of clauses as the verbs of SQL – they instruct the database on what action to take.

### Table Name

Next, we have `table_name`. This refers to the name of the table we’re creating. It’s a placeholder where you’ll specify the actual name of your table. The table name is crucial because it uniquely identifies the table within your database, allowing you to reference it in future commands.

### Parameters

The heart of our statement lies within the parentheses: `(column_1 data_type, column_2 data_type, column_3 data_type)`. This is known as a parameter. Parameters are lists of columns, data types, or values that we pass to clauses as arguments. Here, we’re defining the structure of our table by listing column names along with their associated data types. Each column represents a different attribute of the data we’re storing, and the data type specifies what kind of data can be stored in that column.

## Flexibility in SQL Statements

One of the beauties of SQL is its flexibility. The structure of your statements can vary. You can write a statement all on one line or split it across multiple lines for better readability. The number of lines you use doesn’t matter – what’s important is clarity and correctness.

Let's see how this flexibility plays out in practice. Here’s our earlier example written on a single line:

```sql
CREATE TABLE table_name (column_1 data_type, column_2 data_type, column_3 data_type);
```

And here’s the same statement split across multiple lines:

```sql
CREATE TABLE table_name (
   column_1 data_type,
   column_2 data_type,
   column_3 data_type
);
```

Both are equally valid! As you continue this course, you’ll become more familiar with various SQL statements and their structures, gaining the confidence to craft commands that are both functional and readable.

## Practice

Now, let's get our hands dirty with a practical example.

```sql
SELECT * FROM celebs;
```

This command is asking the database to select all columns from the table named "celebs".

- Which part of the statement is the clause?

  > The clause here is `SELECT * FROM`.

- What table are we applying the command to?

  > We're applying the command to the `celebs` table.
