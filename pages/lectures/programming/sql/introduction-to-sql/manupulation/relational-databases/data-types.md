---
title: "Data Types"
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
    - website_url: https://github.com/noeyislearning
---

# Data Types

All data in a relational database is of a certain data type. This ensures that the data is stored and processed efficiently. Some common data types include:

- `INTEGER`: Represents positive or negative whole numbers.
- `TEXT`: Represents text strings.
- `DATE`: Represents dates formatted as `YYYY-MM-DD`.
- `REAL`: Represents decimal values.
- `BLOB`: Represents binary large objects like images or audio files.

## Example

For reference, here’s a snapshot of the `celebs` table:

<!--@include: ../../_includes/tables/query-results-from-rdb.md-->

In our celebs table:

- **id**: `INTEGER`
- **name**: `TEXT`
- **age**: `INTEGER`

These data types help the database understand how to handle and store the information effectively.

## Other Databases

### PostgreSQL

**General Purpose Types**

- **Boolean**: Represents true or false values.
- **Character Types**:
  - `CHAR(n)`: Fixed-length character string (pads with spaces if shorter than n).
  - `VARCHAR(n)`: Variable-length character string (maximum length n).
  - `TEXT`: Stores text content (essentially unlimited length).
- **Numeric Types**:
  - **Integer Types** (`SMALLINT`, `INTEGER`, `BIGINT`): Store whole numbers of different ranges (short, medium, long).
  - **Decimal/Numeric**: Stores fixed-precision decimal numbers.
  - **Floating-Point Types** (`REAL`, `DOUBLE PRECISION`): Stores approximate real numbers.
- **Temporal Types**:
  - `DATE`: Stores date (year, month, day).
  - `TIME`: Stores time (hours, minutes, seconds, optionally with time zone).
  - `TIMESTAMP`: Stores date and time together (with or without time zone).
  - `INTERVAL`: Stores a time difference between two timestamps.
- **Special Purpose Types**:
  - `UUID`: Stores Universally Unique Identifiers.
  - **Arrays**: Stores an ordered collection of elements of the same data type.
  - `JSON`: Stores JSON-formatted data.
  - `HSTORE`: Stores key-value pairs (similar to a dictionary).
  - **Network Address Types**: Stores IPv4, IPv6, and MAC addresses.
  - **Geometric Types**: Represent points, lines, boxes, and other geometric objects on a plane.
  - **Text Search Types**: Used for full-text search operations on text data.
  - **User-Defined Types**: You can create custom types to encapsulate complex data structures.

For more information, refer to the [PostgreSQL documentation](https://www.postgresql.org/docs/current/datatype.html).
