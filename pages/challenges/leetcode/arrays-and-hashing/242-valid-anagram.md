---
title: 242. Valid Anagram
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
leetcodeInformation:
  - number: 242
  - problemName: Valid Anagram
  - link: https://leetcode.com/problems/valid-anagram/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 242. Valid Anagram

## Problem Statement

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` _otherwise_.

NOTE: An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Examples

**Example 1:**

Input: `s = "anagram"`, `t = "nagaram"`  
Output: `true`

**Example 2:**

Input: `s = "rat"`, `t = "car"`  
Output: `false`

## Constraints

- $1 <=$ `s.length`, `t.length` $<= 5 * 10^4$
- `s` and `t` consist of lowercase English letters.

## Submissions

::: code-group

```python [Python] :line-numbers
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        return sorted(s) == sorted(t)
```

```python [Python] :line-numbers
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        countS, countT = {}, {}
        for char in s:
            countS[char] = 1 + countS.get(char, 0)
        for char in t:
            countT[char] = 1 + countT.get(char, 0)

        return countS == countT
```

:::

## Explanations

<CustomAccordion title="Python" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `class Solution:`: This is the class that contains the function `containsDuplicate`.
- `def isAnagram(self, s: str, t: str) -> bool:`: This function takes two strings `s` and `t` as input and returns a boolean value.
- `if len(s) != len(t): return False`: If the lengths of the two strings are not equal, return `False`.
- `return sorted(s) == sorted(t)`: Sort the characters in both strings and compare them. If the sorted strings are equal, return `True`; otherwise, return `False`.

</CustomAccordion>

<CustomAccordion title="Python" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=true>

- `class Solution:`: This is the class that contains the function `containsDuplicate`.
- `def isAnagram(self, s: str, t: str) -> bool:`: This function takes two strings `s` and `t` as input and returns a boolean value.
- `if len(s) != len(t): return False`: If the lengths of the two strings are not equal, return `False`.
- `countS, countT = {}, {}`: Initialize two dictionaries to store the count of characters in each string.
- `for char in s: countS[char] = 1 + countS.get(char, 0)`: Count the occurrences of each character in string `s` and store them in the `countS` dictionary.
- `for char in t: countT[char] = 1 + countT.get(char, 0)`: Count the occurrences of each character in string `t` and store them in the `countT` dictionary.
- `return countS == countT`: Compare the two dictionaries. If they are equal, return `True`; otherwise, return `False`.

</CustomAccordion>
