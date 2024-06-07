---
title: Vectors | Lectures | Cogxen
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

# Vectors

## Vectors and Operations

Imagine a vector as an arrow. It has a direction and a length (also called magnitude). You can use vectors to describe movement, like telling someone to go 3 steps north or 5 steps east.

### Vector Addition

When you add vectors, it's like taking two trips and combining them into one. If you go 3 steps north and then 4 steps east, where do you end up? That's vector addition!

<ImageCard 
  img_url="https://i.imgur.com/6rKNZpD.png" 
  alt="Vector Addition" 
  caption="Vector Addition" 
/>

- If **Vector A** is $3$ steps north and **Vector B** is $4$ steps east, adding them gives you a new vector that shows your overall movement.

### Vector Subtraction

Subtracting vectors is like finding the difference between two trips. If you know where you ended up and where you started, you can figure out the steps you took.

<ImageCard
  img_url="https://i.imgur.com/1tNSYsq.png" 
  alt="Vector Subtraction" 
  caption="Vector Subtraction" 
/>

- If you end up $3$ steps **north** and $4$ steps **east** from where you started, subtracting these vectors helps you find out the steps you retraced.

### Scalar Multiplication

This means making a vector longer or shorter without changing its direction, like stretching or shrinking the arrow.

- If you multiply a vector by $2$, you double its length. If you multiply it by $0.5$, you cut its length in half.

## Special Vectors and Operations

### Unit Vectors

A unit vector is a special vector with a length of 1. It shows direction without changing size, like a tiny arrow pointing north, east, or any other direction.

### Zero Vectors

A zero vector is a special vector with no length and no direction. It's like a dot that stays in place, representing no movement.

### Linear Combinations

This is like mixing different vectors to get a new one, similar to mixing colors to get a new shade.

- If you mix 2 steps north and 3 steps east, you get a vector showing the overall direction and distance.

## Advanced Vector Concepts

### Linear Independence

Think of this as unique paths. If two vectors are linearly independent, one path can't be made by just stretching or shrinking the other. They lead to different places.

<ImageCard 
  img_url="https://i.imgur.com/vh1vaWo.png" 
  alt="Linear Independence" 
  caption="Linear Independence" 
  copyright_owner="en.wikipedia.org" 
/>

### Span

The span of vectors is like the area they cover when you combine them in all possible ways. Imagine all the places you can reach by combining different trips.

### Basis and Dimension

A basis is a set of vectors that can be combined to reach any point in space. Dimension is the number of vectors in the basis. It's like having a complete set of building blocks.

<div class="flex flex-col items-center gap-4">
  <ImageCard 
    img_url="https://i.imgur.com/rgp2vlE.png" 
    alt="Basis" 
    caption="The same vector can be represented in two different bases" 
    copyright_owner="en.wikipedia.org" 
  />
  <ImageCard 
    img_url="https://i.imgur.com/LIKv13s.png" 
    alt="Dimension" 
    caption="A diagram of dimensions 1, 2, 3, and 4" 
    copyright_owner="en.wikipedia.org" 
  />
</div>

- In a 2D space, you need two vectors (like north and east) to describe any movement.

## Dot Product and Its Applications

The dot product is a way to multiply two vectors to get a number. It helps you find out how much two vectors point in the same direction.

<ImageCard img_url="https://i.imgur.com/6ltnfui.png" alt="Dot Product" caption="Dot Product" />

- If two vectors point exactly in the same direction, the dot product is large. If they point in opposite directions, the dot product is small or negative.

### Applications of Dot Product

- **Calculating Angles**: You can use the dot product to find the angle between two vectors.
- **Projections**: It helps you find how much one vector goes in the direction of another.
- **Vector Similarity**: It tells you how similar two vectors are, like finding out if two trips are almost the same.

## Understand the Cauchy-Schwarz Inequality

### Cauchy-Schwarz Inequality

This inequality is a fancy way of saying that the dot product of two vectors is always less than or equal to the product of their lengths. It helps set limits on what the dot product can be.

### Applications of the Cauchy-Schwarz Inequality

- **Trigonometric Concepts**: It helps in understanding angles and distances.
- **Various Fields**: It’s used in physics, computer science, and other areas to ensure calculations stay within bounds.

<br />

::: info CONCLUSION
Understanding vectors and their operations can feel like learning a new language, but with each step, you'll see how they help describe and solve real-world problems. Keep exploring, adding, subtracting, and multiplying vectors, and soon you'll master these foundational concepts!
:::
