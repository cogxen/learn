---
title: Variables | Lectures | Cogxen
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
status: wip
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# Variables

So far, you’ve been using Python and pandas commands without diving too deeply into how they work. To advance further in your analytics journey, it's crucial to grasp some foundational Python concepts behind these commands. Let's start by dissecting a common piece of code you've been using to import datasets:

```python
dataset_name = pd.read_csv('filename.csv')
```

There are three key components to this code:

1. Right of the `=` sign: This is the pandas command that imports the dataset: `pd.read_csv('filename.csv')`.
2. Left of the `=` sign: This is the name you've assigned to the dataset: `dataset_name`.
3. The `=` sign: This connects the name `dataset_name` to the imported dataset.

This demonstrates a broader concept in Python known as variable assignment.

## Variables in Python

In Python, a variable is essentially a name that refers to an object. For instance, `dataset_name` refers to the imported dataset. The object referred to by a variable is known as the value of the variable.

To assign a value to a variable, you use the `=` sign like this:

```python
variable = value
```

Here:

- `variable` is the name you're assigning to an object, always placed on the left.
- `value` is the object being named, always placed on the right.

For example, the following code assigns the imported repair dataset to the variable `repair`:

```python
repair = pd.read_csv('repair.csv')
```

The term "variables" is used because the value of a variable can change. Consider this example:

```python
repair = pd.read_csv('repair.csv')
repair = pd.read_csv('laptops.csv')
```

In the first line, the **repair** dataset is imported and assigned to the variable `repair`. In the second line, the laptop dataset is imported and assigned to the same variable `repair`.

Python executes code from top to bottom. After both lines are executed, the variable `repair` now refers to the laptop dataset, not the repair dataset.

## Naming Variables

When naming variables in Python, keep the following rules in mind:

- They must start with a letter or underscore.
- They cannot contain spaces or special characters.
- They are case-sensitive (e.g., `Repair` and `repair` are different variables).

## Variable Types

Just like data, variables in Python can have different types:

- `int`: Numbers without decimals.
- `float`: Numbers with decimals (both `4.0` and `4.1` are floats).
- `str`: Text, which must always be enclosed in quotes.
- `bool`: Boolean values, either `True` or `False` (first letter capitalized, no quotes).

For example:

```python
three = 3
pi = 3.14
text = "Hello!"
python_is_cool = True
```

Notice that `"Hello!"` has quotes around it, while `True` does not. Strings require quotes, but Booleans do not.

## Working with DataFrames

Your datasets typically aren't just numbers or text; they are tables containing both. These tables have a special variable type provided by pandas: `pandas.core.frame.DataFrame` or simply `DataFrame`. From now on, we'll refer to datasets in pandas as DataFrames.

## Checking Variable Types

Sometimes, you may want to verify what type Python thinks a variable is. You can do this with the `type()` function:

```python
type(variable_name)
```

For instance, to check the type of the variable three, you'd write:

```python
type(three)
```

which would output `int`.

In various checkpoints, you might be asked to assign all your code to a variable for automatic verification. For example, you might need to assign `type(three)` to a specific variable `datatype`:

```python
datatype = type(three)
```

To display the output, you can include a line like this in the code cell:

```python
# show output
datatype
```

In this line:

- The `# show output` is a comment explaining the following code, indicated by the `#`.
- The variable name `datatype` at the end of the cell tells Jupyter to display its value. Sometimes, you may also see the variable name inside a `print` statement like `print(datatype)`, which is necessary for displaying multiple outputs at once.

## Conclusion

Understanding variables in Python is fundamental to mastering the language and advancing in data analytics. Variables allow you to store and manipulate data efficiently. By adhering to proper naming conventions and understanding variable types, you can write more readable and error-free code. Keep these concepts in mind as you continue exploring more complex topics in Python and data analysis.
