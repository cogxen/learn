---
title: 1280. Students and Examinations | Challenges | Cogxen
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
leetcodeStudyPlan:
  - name: Top SQL 50
  - link: https://leetcode.com/studyplan/top-sql-50/
  - planImg: https://i.imgur.com/cxH56Lt.png
leetcodeInformation:
  - number: 1280
  - problemName: Students and Examinations
  - link: https://leetcode.com/problems/students-and-examinations/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 1280. Students and Examinations

## Problem Statement

Table: `Students`

<ScrollableTableContainer>

| Column Name  | Type    |
| ------------ | ------- |
| student_id   | int     |
| student_name | varchar |

</ScrollableTableContainer>

> `student_id` is the primary key (column with unique values) for this table.
>
> Each row of this table contains the ID and the name of one student in the school.

Table: `Subjects`

<ScrollableTableContainer>

| Column Name  | Type    |
| ------------ | ------- |
| subject_name | varchar |

</ScrollableTableContainer>

> `subject_name` is the primary key (column with unique values) for this table.
>
> Each row of this table contains the name of one subject in the school.

Table: `Examinations`

<ScrollableTableContainer>

| Column Name  | Type    |
| ------------ | ------- |
| student_id   | int     |
| subject_name | varchar |

</ScrollableTableContainer>

> There is no primary key for this table. It may contain duplicates.
>
> Each student from the `Students` table takes every course from the `Subjects` table.
>
> Each row of this table indicates that a student with ID `student_id` has taken the exam of `subject_name`.

## Instructions

- Write a solution to find the number of times each student attended each exam.
- Return the result table ordered by `student_id` and `subject_name`.
- The result format is in the following example.

## Example

**Input:** `Students` table

<ScrollableTableContainer>

| student_id | student_name |
| ---------- | ------------ |
| 1          | Alice        |
| 2          | Bob          |
| 13         | John         |
| 6          | Alex         |

</ScrollableTableContainer>

**Input:** `Subjects` table

<ScrollableTableContainer>

| subject_name |
| ------------ |
| Math         |
| Physics      |
| Programming  |

</ScrollableTableContainer>

**Input:** `Examinations` table

<ScrollableTableContainer>

| student_id | subject_name |
| ---------- | ------------ |
| 1          | Math         |
| 1          | Physics      |
| 1          | Programming  |
| 2          | Programming  |
| 1          | Physics      |
| 1          | Math         |
| 13         | Math         |
| 13         | Programming  |
| 13         | Physics      |
| 2          | Math         |
| 1          | Math         |

</ScrollableTableContainer>

**Output:**

<ScrollableTableContainer>

| student_id | student_name | subject_name | attended_exams |
| ---------- | ------------ | ------------ | -------------- |
| 1          | Alice        | Math         | 3              |
| 1          | Alice        | Physics      | 2              |
| 1          | Alice        | Programming  | 1              |
| 2          | Bob          | Math         | 1              |
| 2          | Bob          | Physics      | 0              |
| 2          | Bob          | Programming  | 1              |
| 6          | Alex         | Math         | 0              |
| 6          | Alex         | Physics      | 0              |
| 6          | Alex         | Programming  | 0              |
| 13         | John         | Math         | 1              |
| 13         | John         | Physics      | 1              |
| 13         | John         | Programming  | 1              |

</ScrollableTableContainer>

**Explanation:**

> The result table should contain all students and all subjects.
>
> Alice attended the Math exam 3 times, the Physics exam 2 times, and the Programming exam 1 time.
>
> Bob attended the Math exam 1 time, the Programming exam 1 time, and did not attend the Physics exam.
>
> Alex did not attend any exams.
>
> John attended the Math exam 1 time, the Physics exam 1 time, and the Programming exam 1 time.

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
WITH AllCombinations AS (
    SELECT
        s.student_id,
        s.student_name,
        sub.subject_name
    FROM
        Students s
    CROSS JOIN
        Subjects sub
)
SELECT
    ac.student_id,
    ac.student_name,
    ac.subject_name,
    COALESCE(COUNT(e.subject_name), 0) AS attended_exams
FROM
    AllCombinations ac
LEFT JOIN
    Examinations e
ON
    ac.student_id = e.student_id
    AND ac.subject_name = e.subject_name
GROUP BY
    ac.student_id,
    ac.student_name,
    ac.subject_name
ORDER BY
    ac.student_id,
    ac.subject_name;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `WITH AllCombinations AS (...)`: Create a Common Table Expression (CTE) named `AllCombinations` that contains all possible combinations of students and subjects.
  - `SELECT s.student_id, s.student_name, sub.subject_name`: Select the `student_id` and `student_name` from the `Students` table and the `subject_name` from the `Subjects` table.
  - `FROM Students s CROSS JOIN Subjects sub`: Perform a cross join between the `Students` and `Subjects` tables to get all possible combinations of students and subjects.
- `SELECT ac.student_id, ac.student_name, ac.subject_name, COALESCE(COUNT(e.subject_name), 0) AS attended_exams`: Select the `student_id`, `student_name`, and `subject_name` from the `AllCombinations` CTE and count the number of times a student attended a particular exam. Use `COALESCE` to handle cases where a student did not attend any exam.
  - `COALESCE(COUNT(e.subject_name), 0)`: Count the number of times a student attended a particular exam. If the count is `NULL`, replace it with `0`.
- `FROM AllCombinations ac` : Select from the `AllCombinations` CTE.
- `LEFT JOIN Examinations e`: Perform a left join with the `Examinations` table on the `student_id` and `subject_name` columns to get the attended exams.
- `ON ac.student_id = e.student_id AND ac.subject_name = e.subject_name`: Join the `AllCombinations` CTE with the `Examinations` table based on the `student_id` and `subject_name`.
- `GROUP BY ac.student_id, ac.student_name, ac.subject_name`: Group the results by `student_id`, `student_name`, and `subject_name`.
- `ORDER BY ac.student_id, ac.subject_name`: Order the results by `student_id` and `subject_name`.

</CustomAccordion>
