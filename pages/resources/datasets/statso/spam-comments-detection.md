---
title: Spam Comments Detection
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

# Spam Comments Detection

<DownloadBadge githubURL=""></DownloadBadge>

## Overview

Detecting spam comments is the task of text classification in Machine Learning. Spam comments on social media platforms are the type of comments posted to redirect the user to another social media account, website or any piece of content.

To detect spam comments with Machine Learning, we need labelled data of spam comments. Luckily, I found a dataset on Kaggle about YouTube spam comments which will be helpful for the task of spam comments detection.

The dataset contains the following columns:

- `comment_id`: Unique identifier for each comment.
- `author`: Name of the author who posted the comment.
- `date`: Date when the comment was posted.
- `content`: The text content of the comment.
- `tag`: Label indicating whether the comment is spam or not.

## Objectives

The primary objective of this study is to build a Machine Learning model that can accurately classify comments as spam or not spam. The key goals include:
