---
title: Splitting and Combining Columns
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

# Splitting and Combining Columns

Working with text data in pandas often requires splitting and combining columns to suit our analytical needs. Understanding how to effectively manage these operations can greatly enhance your data analysis capabilities.

## Splitting Columns

Imagine you have a dataset containing information about National Parks. One of the columns, "Location," includes both the city and the state, separated by a comma. If you want to count how many parks are in each state, you'll need to split this column into two separate columns.

### How to Split a Column?

To split a column in pandas, you use the str.split() method. This method divides a string based on a specified delimiter and can expand the split strings into separate columns.

Here’s a step-by-step guide:

1. **Identify the Delimiter**: In our example, the delimiter is a comma `,`, which separates the city from the state.

2. **Apply the str.split() Method**: Use the str.split() method to split the column into two separate columns. You can specify the delimiter within the method.

```python
loc_split = parks['Location'].str.split(pat=',', expand=True)
```

- `.str` tells pandas to treat the entries in "Location" as strings.
- `.split()` is the method that splits the strings based on the specified delimiter.
- `pat=','` specifies that the comma is the delimiter.
- `expand=True` ensures that the split parts are expanded into separate columns.

Here's how the "Location" column looks before splitting:

```plaintext
Location
Gatlinburg, TN
Springdale, UT
Jackson, WY
```

After splitting, `loc_split` will look like this:

```plaintext
        0        1
0   Gatlinburg   TN
1  Springdale    UT
2     Jackson    WY
```

Column 0 contains the city names, and column 1 contains the state abbreviations.

3. **Assign the Split Columns to the DataFrame**: To add these new columns to the original DataFrame, you can use the following code:

```python
parks['City'] = loc_split[0]
parks['State'] = loc_split[1]
```

This will add two new columns, "City" and "State," to your original DataFrame.

## Combining Columns

There are times when you need to combine two or more columns into one. For example, if you have separate "City" and "State" columns and want to create a combined "Location" column, you use the `str.cat()` method.

### How to Combine Columns?

To combine columns in pandas, you use the `str.cat()` method. This method concatenates strings from multiple columns along a specified axis.

1. Concatenate the Columns: Use the `str.cat()` method to combine the "City" and "State" columns into a new "Location" column.

```python
parks['Location'] = parks['City'].str.cat(parks['State'], sep=',')
```

- `.str.cat()` concatenates the text from two columns.
- `sep=','` specifies the separator to be placed between the concatenated strings.

Here's the combined result:

```plaintext
    City        State    Location
0   Gatlinburg  TN       Gatlinburg,TN
1  Springdale   UT       Springdale,UT
2     Jackson   WY       Jackson,WY
```

## Examples

### Splitting Columns

Imagine the "Location" column as follows:

```plaintext
Location
Gatlinburg, TN
Springdale, UT
Jackson, WY
```

Using the steps outlined above, you can split this column into two separate columns, "City" and "State."

```python
loc_split = parks['Location'].str.split(pat=',', expand=True)
parks['City'] = loc_split[0]
parks['State'] = loc_split[1]
```

Now, your DataFrame has two new columns:

```plaintext
    City        State
0   Gatlinburg  TN
1  Springdale   UT
2     Jackson   WY
```

### Combining Columns

If you want to combine the "City" and "State" columns back into a single "Location" column, you can use the following code:

```plaintext
    City        State
0   Gatlinburg  TN
1  Springdale   UT
2     Jackson   WY
```

Combine them back into a single "Location" column:

```python
parks['Location'] = parks['City'].str.cat(parks['State'], sep=',')
```

The resulting DataFrame will look like this:

```plaintext
    City        State    Location
0   Gatlinburg  TN       Gatlinburg,TN
1  Springdale   UT       Springdale,UT
2     Jackson   WY       Jackson,WY
```

## Conclusion

Mastering the techniques of splitting and combining columns in pandas allows you to manipulate your text data efficiently, making it easier to analyze and draw meaningful insights. Whether you need to break down complex data into manageable parts or combine pieces to form a coherent whole, these methods provide powerful tools to enhance your data handling capabilities. By keeping these techniques in your toolkit, you ensure your datasets are always in the most useful format for your analysis.
