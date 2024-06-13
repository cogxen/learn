---
title: Linear Systems and Matrices | Lectures | Cogxen
description: Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.
head:
  - - meta
    - name: description
    - content: Empowers data enthusiasts and practitioners with the tools and knowledge to unlock the potential of data.
  - - meta
    - name: keywords
      content: data data science machine learning AI data analysis data-driven data enthusiasts data practitioners
lastUpdated: true
editLink: false
footer: false
prev: false
next: false
---

# Linear Systems and Matrices

Imagine you have a bunch of puzzles and each piece is a little math problem. Linear systems and matrices are like the tools you use to solve these puzzles. By learning about matrices and how to solve linear systems, you'll get better at understanding bigger puzzles in machine learning (ML) and artificial intelligence (AI).

## Representing Systems of Equations in Matrix Form

Think of a matrix as a big grid of numbers, like a chessboard but with numbers instead of squares. When you have a system of equations (a bunch of math problems), you can use a matrix to organize and solve them.

### Core Matrix Operations

Here are some basic things you can do with matrices:

- **Addition**: Adding two matrices is like adding the numbers in each matching spot.
- **Subtraction**: Subtracting one matrix from another is just like subtracting the numbers in each spot.
- **Scalar Multiplication**: This is like multiplying every number in the matrix by the same number.
- **Matrix Multiplication**: This is a bit trickier but think of it like combining two grids to make a new one.
- **Transposition**: This means flipping a matrix over its diagonal, swapping rows with columns.

## Gaussian Reduction

When you have a system of equations, you can use something called Gaussian elimination to solve it. It's like a step-by-step method to simplify the puzzle.

<ImageCard 
  img_url="https://i.imgur.com/5a3jPvW.gif" 
  caption="Gaussian Reduction" 
  copyright_owner="en.wikipedia.org" 
  bordered=true
/>

### Row Echelon Form (REF)

This is when you've simplified the puzzle enough to see patterns and relationships between the numbers. It's like organizing the pieces of the puzzle to make it easier to solve.

::: info NOTE
A matrix is in REF if it has the following properties:

- All rows having zeros are at the bottom.
- The leading entry (the left-most nonzero entry) of each row is to the right of the leading entry of the row above it.

:::

The following is an example of a ${\displaystyle 4\times 5}$ matrix in row echelon form, but not in reduced row echelon form (see below):

<div align="center">

${\displaystyle \left[{\begin{array}{ccccc}1&a_{0}&a_{1}&a_{2}&a_{3}\\0&0&2&a_{4}&a_{5}\\0&0&0&1&a_{6}\\0&0&0&0&0\end{array}}\right]}$

</div>

### Reduced Row Echelon Form (RREF)

This is the final form of the puzzle, where you've simplified it as much as possible. It's like putting the pieces together to see the whole picture.

::: info NOTE
A matrix is in RREF if it has the following properties:

- It is in row echelon form.
- The leading entry in each nonzero row is $1$.
- Each column containing a leading $1$ has zeros everywhere else.

Then the first two conditions imply that the leading $1$ in any row is to the right of the leading $1$ in the row above it.

:::

Given a matrix in reduced row echelon form, if one permutes the columns in order to have the leading $1$ of the $ith$ row in the $ith$ column, one gets a matrix of the form.

<div align="center">

${\displaystyle {\begin{pmatrix}I&X\\0&0\end{pmatrix}},}$

</div>

## Null Space, Column Space, Basis, and Rank

Understanding these concepts will help you see the bigger picture of your matrix puzzles.

- **Null Space**: This is like finding the pieces of the puzzle that don't change the outcome.

<ImageCard 
  img_url="https://i.imgur.com/nRtiglu.png" 
  caption="Null Space" 
  copyright_owner="en.wikipedia.org" 
  bordered=true
/>

- **Column Space**: Think of this as the possible results you can get from your matrix puzzle.

<ImageCard 
  img_url="https://i.imgur.com/exGWOQo.png" 
  caption="Column Space" 
  copyright_owner="en.wikipedia.org" 
  bordered=true
/>

- **Basis**: These are the essential pieces you need to solve the puzzle.

<ImageCard 
  img_url="https://i.imgur.com/MPRMNWH.png" 
  caption="Basis" 
  copyright_owner="en.wikipedia.org" 
  bordered=true
/>

- **Rank** and **Full Rank**: The rank tells you how many essential pieces you have. If you have all the pieces you need, it's called full rank.

## Algebraic Laws for Matrices with Proofs

To really master matrices, you need to understand the rules they follow, just like learning the rules of a game. Knowing the proofs of these rules helps you see why the rules work the way they do.

<br />

::: info CONCLUSION
By learning about matrices and how to solve linear systems, you're getting the tools you need to solve bigger and more interesting puzzles in machine learning and artificial intelligence.
:::
