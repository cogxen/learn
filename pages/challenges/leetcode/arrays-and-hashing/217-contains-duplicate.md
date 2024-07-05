---
title: 217. Contains Duplicate | Challenges | Cogxen
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
  - number: 217
  - problemName: Contains Duplicate
  - link: https://leetcode.com/problems/contains-duplicate/
  - difficulty: Easy
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 217. Contains Duplicate

## Problem Statement

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

## Examples

**Example 1:**

Input: `nums = [1,2,3,1]`  
Output: `true`

**Example 2:**

Input: `nums = [1,2,3,4]`  
Output: `false`

**Example 3:**

Input: `nums = [1,1,1,3,3,4,3,2,4,2]`  
Output: `true`

## Constraints

- $1 <=$ `nums.length` $<= 10^5$
- $-10^9 <=$ `nums[i]` $<= 10^9$

## Submissions

::: code-group

```python [Python] :line-numbers
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))
```

```python [Python] :line-numbers
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False
```

:::

## Explanations

<CustomAccordion title="Python" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `class Solution:`: This is the class that contains the function `containsDuplicate`.
- `def containsDuplicate(self, nums: List[int]) -> bool:`: This function takes in a list of integers `nums` and returns a boolean value.
- `return len(nums) != len(set(nums))`: This line of code checks if the length of the list `nums` is not equal to the length of the set of `nums`. If the lengths are not equal, it means that there are duplicates in the list, so the function returns `True`. Otherwise, it returns `False`.
  - `len(nums)`: This returns the length of the list `nums`.
  - `set(nums)`: This converts the list `nums` into a set, which removes duplicates. The length of the set will be less than the length of the list if there are duplicates.

</CustomAccordion>

<CustomAccordion title="Python" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=true>

- `class Solution:`: This is the class that contains the function `containsDuplicate`.
- `def containsDuplicate(self, nums: List[int]) -> bool:`: This function takes in a list of integers `nums` and returns a boolean value.
- `seen = set()`: This creates an empty set called `seen` to store the numbers that have been seen.
- `for num in nums:`: This loop iterates through each number in the list `nums`.
  - `if num in seen:`: This checks if the number `num` is already in the set `seen`. If it is, it means that the number has been seen before, so the function returns `True`.
  - `seen.add(num)`: This adds the number `num` to the set `seen` to keep track of the numbers that have been seen.
- `return False`: If the loop completes without finding any duplicates, the function returns `False`.

</CustomAccordion>
