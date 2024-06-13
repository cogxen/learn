---
title: Linear Transformations and Matrices | Lectures | Cogxen
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

# Linear Transformations and Matrices

Imagine you're playing with a magic toy that can stretch, shrink, or rotate shapes. This magic toy is like a matrix, and the changes it makes to the shapes are called linear transformations. Let's dive in and see how you can use matrices to make these cool transformations in vector spaces!

## How Matrices Represent Linear Transformations?

Think of a matrix as a special box that holds numbers. These numbers help us change the shape, size, or position of objects in a space. When you multiply a matrix by a vector (a fancy word for a point or a direction), you can stretch it, shrink it, or move it around.

## Transposing a Matrix and Its Properties

Transposing a matrix is like flipping a magic card. If you have a matrix, you can flip it over its diagonal (from the top left to the bottom right). This means the rows become columns and the columns become rows.

### Why is this cool?

- It helps in solving certain math problems.
- It makes understanding the structure of the matrix easier.

## Determinants and Their Properties

Imagine you have a treasure map, and you need to know if the area where the treasure is buried is accessible. The determinant of a matrix helps you figure out if you can "invert" the map to find the treasure. If the determinant is zero, you can't invert it, and you might be stuck!

## Why are Determinants Important?

### Invertibility

Example:

A matrix $A$ of dimension $n \times n$ is called invertible if and only if there exists another matrix $B$ of the same dimension, such that $AB = BA = I$, where I is the identity matrix of the same order. Matrix $B$ is known as the inverse of matrix $A$. Inverse of matrix $A$ is symbolically represented by $A-1$. Invertible matrix is also known as a non-singular matrix or nondegenerate matrix.

<MathExampleCard copyright_owner="byjus.com">

Matrices $A$ and $B$ are given below:

$\begin{array}{l}A = \begin{bmatrix}1 & 2 \\2 & 5\\\end{bmatrix}\end{array}$ and
$\begin{array}{l}B = \begin{bmatrix}5 & -2 \\-2 & 1\\\end{bmatrix}\end{array}$

Now we multiply $A$ with $B$ and obtain an identity matrix:

$\begin{array}{l}AB = \begin{bmatrix}1 & 2 \\2 & 5\\\end{bmatrix}\begin{bmatrix}5 & -2 \\-2 & 1\\\end{bmatrix} = \begin{bmatrix}1 & 0 \\0 & 1\\\end{bmatrix}\end{array}$

Similarly, on multiplying $B$ with $A$, we obtain the same identity matrix:

$\begin{array}{l}BA = \begin{bmatrix}5 & -2 \\-2 & 1\\\end{bmatrix}\begin{bmatrix}1 & 2 \\2 & 5\\\end{bmatrix} = \begin{bmatrix}1 & 0 \\0 & 1\\\end{bmatrix}\end{array}$

It can be concluded here that $AB = BA = I$. Hence $A-1 = B$, and $B$ is known as the inverse of $A$. Similarly, $A$ can also be called an inverse of $B$, or $B-1 = A$.
</MathExampleCard>

- **Calculating Areas/Volumes**: Determinants help in calculating areas in 2D and volumes in 3D.

## Mastering Transpose and Inverses of Matrices (2x2) and (3x3)

### Transpose

Remember the flip trick? Practice flipping (transposing) 2x2 and 3x3 matrices. It's a handy skill!

### Inverses

Finding the inverse of a matrix is like finding a magic spell that undoes the transformation. For 2x2 and 3x3 matrices, you have specific steps to find their inverses. Knowing this is super useful for solving puzzles (linear systems) and understanding how transformations work.

## Exploring Vector Spaces and Projections

### Vector Spaces

Think of a vector space as a playground where you can play with vectors. This playground has rules, like how you can add vectors together or multiply them by numbers.

<ImageCard 
  img_url="https://i.imgur.com/QjByUxD.png" 
  caption="Vector Spaces" 
  copyright_owner="en.wikipedia.org" 
  bordered=true
/>

### Projections

Imagine you have a flashlight and you're casting shadows of objects onto the ground. Projections are like those shadows. Orthogonal projections are special because the shadow forms a right angle with the surface.

<ImageCard 
  img_url="https://i.imgur.com/TwXbZVo.png" 
  caption="Projections" 
  copyright_owner="en.wikipedia.org" 
  bordered=true
/>

### Applications in Data Science

- **Subspaces**: Smaller playgrounds within the big vector space.
- **Orthogonal Projections**: Useful for finding the best fit line in data (like drawing a trend line in a scatter plot).

## Practicing the Gram-Schmidt Process

The Gram-Schmidt process is like organizing your crayons so that they don't mix up. It's a way to make a set of vectors nice and neat (orthogonal).

<ImageCard 
  img_url="https://i.imgur.com/BcO8yFm.png" 
  caption="Gram-Schmidt Process" 
  copyright_owner="en.wikipedia.org" 
  bordered=true
/>

### Why Practice This?

- **QR Decomposition**: A popular method in matrix factorization.

<ImageCard 
  img_url="https://i.imgur.com/fgs0WCq.png" 
  caption="QR Decomposition" 
  copyright_owner="en.wikipedia.org" 
  bordered=true
/>

- **Applications**: Used in many data science techniques to make computations easier and more efficient.

<br />

::: info CONCLUSION
Linear transformations and matrices might sound tricky, but with some practice, you can master them. You can think of matrices as magic tools that help you change and understand shapes and spaces in cool ways.
:::
