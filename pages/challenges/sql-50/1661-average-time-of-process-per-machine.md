---
title: 1661. Average Time of Process per Machin | Challenges | Cogxen
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
  - number: 1661
  - problemName: Average Time of Process per Machine
  - link: https://leetcode.com/problems/average-time-of-process-per-machine/
contributors:
  - - detail
    - name: Noey Ignacio
    - website_url: https://github.com/noeyislearning
---

# 1661. Average Time of Process per Machine

## Problem Statement

Table: `Activity`

| Column Name   | Type  |
| ------------- | ----- |
| machine_id    | int   |
| process_id    | int   |
| activity_type | enum  |
| timestamp     | float |

> The table shows the user activities for a factory website.
>
> (`machine_id`, `process_id`, `activity_type`) is the primary key (combination of columns with unique values) of this table.
>
> `machine_id` is the ID of a machine.
>
> `process_id` is the ID of a process running on the machine with ID `machine_id`.
>
> `activity_type` is an ENUM (category) of type ('start', 'end').
>
> `timestamp` is a float representing the current time in seconds.
>
> 'start' means the machine starts the process at the given `timestamp` and 'end' means the machine ends the process at the given `timestamp`.
>
> The 'start' `timestamp` will always be before the 'end' `timestamp` for every (`machine_id`, `process_id`) pair.

## Instructions

- There is a factory website that has several machines each running the **same number of processes**. Write a solution to find the **average time** each machine takes to complete a process.
- The time to complete a process is the `'end' timestamp` minus the `'start' timestamp`. The average time is calculated by the total time to complete every process on the machine divided by the number of processes that were run.
- The resulting table should have the `machine_id` along with the average time as `processing_time`, which should be rounded to 3 decimal places.
- Return the result table in **any order**.
- The result format is in the following example.

## Example

**Input:** `Activity` table

| machine_id | process_id | activity_type | timestamp |
| ---------- | ---------- | ------------- | --------- |
| 0          | 0          | start         | 0.712     |
| 0          | 0          | end           | 1.520     |
| 0          | 1          | start         | 3.140     |
| 0          | 1          | end           | 4.120     |
| 1          | 0          | start         | 0.550     |
| 1          | 0          | end           | 1.550     |
| 1          | 1          | start         | 0.430     |
| 1          | 1          | end           | 1.420     |
| 2          | 0          | start         | 4.100     |
| 2          | 0          | end           | 4.512     |
| 2          | 1          | start         | 2.500     |
| 2          | 1          | end           | 5.000     |

**Output:**

| machine_id | processing_time |
| 0 | 0.894 |
| 1 | 0.995 |
| 2 | 1.456 |

**Explanation:**

> There are 3 machines running 2 processes each.
>
> Machine 0's average time is
> $\frac{(1.520 - 0.712) + (4.120 - 3.140)}{2}$ = $0.894$
>
> Machine 1's average time is $\frac{((1.550 - 0.550) + (1.420 - 0.430))}{2}$ = $0.995$
>
> Machine 2's average time is $\frac{((4.512 - 4.100) + (5.000 - 2.500))}{2}$ = $1.456$

## Submissions

::: code-group

```sql [PostgreSQL] :line-numbers
SELECT
    machine_id,
    ROUND(AVG(end_time - start_time)::numeric, 3) AS processing_time
FROM (
    SELECT
        machine_id,
        process_id,
        MAX(CASE WHEN activity_type = 'end' THEN timestamp END) AS end_time,
        MIN(CASE WHEN activity_type = 'start' THEN timestamp END) AS start_time
    FROM Activity
    GROUP BY machine_id, process_id
) AS process_times
GROUP BY machine_id;
```

:::

## Explanations

<CustomAccordion title="PostgreSQL" submitted_by="@noeyislearning" submit_website_url="https://github.com/noeyislearning" :collapsed=false>

- `SELECT machine_id`: Select the `machine_id` from the `Activity` table.
- `ROUND(AVG(end_time - start_time)::numeric, 3) AS processing_time`: Calculate the average time it takes to complete a process by subtracting the `'start' timestamp` from the `'end' timestamp` and rounding it to 3 decimal places.
- `FROM (SELECT machine_id, process_id, MAX(CASE WHEN activity_type = 'end' THEN timestamp END) AS end_time, MIN(CASE WHEN activity_type = 'start' THEN timestamp END) AS start_time FROM Activity GROUP BY machine_id, process_id) AS process_times`: Select the `machine_id`, `process_id`, `'end' timestamp`, and `'start' timestamp` from the `Activity` table and group them by `machine_id` and `process_id`.
- `GROUP BY machine_id`: Group the results by `machine_id`.

</CustomAccordion>
