---
title: Booleans with Not
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

# Booleans with Not

In the world of data analysis, Boolean logic is a powerful tool, and learning to use it effectively can simplify complex tasks. One such task is filtering data based on specific criteria. Let's dive into how you can use the "Not" operator to create more efficient filters.

## Recap

Previously, you learned how to create Boolean filters to identify rows in a DataFrame that involve electric fuel types. Here’s a quick refresher:

```python
is_electric = df['fuel'] == 'electric'
is_hybrid = df['fuel'] == 'hybrid electric'
is_plugin = df['fuel'] == 'plug-in hybrid electric'
electric = is_electric | is_hybrid | is_plugin
```

This filter, `electric`, captures all rows where the fuel type is either electric, hybrid electric, or plug-in hybrid electric.

## Boolean Operator `not`

But what if you want to focus on non-electric vehicles? Sure, you could write a new filter using multiple OR (`|`) conditions, but there’s a more elegant solution: using the "Not" operator.

In Python, particularly with the Pandas library, the tilde symbol (`~`) represents "Not". This operator inverts a Boolean filter, turning `True` to `False` and vice versa.

## Creating a Non-Electric Filter

Let's take the `electric` filter you already have and create a new filter for non-electric vehicles:

```python
non_electric = ~electric
```

Here’s what happens with the `not_electric` filter:

- `True` values in `electric` become False in `not_electric`.
- `False` values in electric become `True` in `not_electric`.

This means `not_electric` will include all rows that are neither electric, hybrid electric, nor plug-in hybrid electric.

Imagine your DataFrame looks like this:

| fuel                    | electric | ~electric |
| ----------------------- | -------- | --------- |
| electric                | True     | False     |
| hybrid electric         | True     | False     |
| plug-in hybrid electric | True     | False     |
| propane                 | False    | True      |

- For the row where `fuel` is `electric`, `electric` is `True` and `~electric` is `False`.
- For `hybrid electric` and `plug-in hybrid electric`, the pattern is the same.
- For a non-electric fuel type like `propane`, `electric` is `False`, thus `~electric` is `True`.

This simple inversion allows you to efficiently target all rows that do not match your original filter.

## Why Use "Not"?

Using `~` (Not) has several advantages:

- **Simplicity**: It reduces the complexity of your code, making it more readable and easier to maintain.
- **Efficiency**: You leverage existing filters, which can be especially useful in larger, more complex datasets.
- **Clarity**: It makes your intentions clear—you're explicitly stating that you want the opposite of the original filter.

## Conclusion

Mastering Boolean logic and understanding how to effectively use the "Not" operator can significantly enhance your data manipulation skills. By inverting existing filters, you can quickly and cleanly target the data subsets you need, saving time and reducing potential errors. Next time you're working with filters, remember the power of `~` and let it simplify your data analysis tasks.
