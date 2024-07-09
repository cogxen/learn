---
title: Uncovering Hidden Truths | Lectures | Cogxen
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

# Uncovering Hidden Truths

Imagine diving into a sea of data, armed with nothing but your curiosity and a determination to uncover the hidden truths. Data analysis can often feel like detective work, where you’re not just following a set recipe but solving mysteries and piecing together clues. Let’s explore how a simple, seemingly odd observation can lead to significant discoveries.

## The Mystery of Excessive Bank Balance Checks

Years ago, while working on a project for a large national bank, an unusual pattern emerged: a small number of customers were checking their bank balance over a thousand times a month. This odd behavior sparked curiosity. Why would anyone need to check their balance so frequently? Was there an underlying reason, perhaps related to an app or another external factor?

When this observation was brought up to a data expert on the client’s team, the reaction was dismissive. The suggestion was to simply delete those client IDs from the analysis. But this approach felt arbitrary and unsatisfactory. Why delete at 1,000 checks and not at 998? The arbitrary cutoff made no sense. It was essential to understand the underlying cause of this behavior.

Without direct access to the data, creativity was necessary. This meant considering possibilities like apps that aggregate financial information (e.g., Mint.com or Credit Karma) that might lead to frequent balance checks. Despite skepticism from the client’s data expert, it was crucial to continue the investigation.

## The Cell Phone Company

A similar situation arose during a visit to a cell phone company overseas. The question was straightforward: what variables were considered important by their model? The answer was surprising: age was identified as the top variable influencing customer behavior. This seemed unlikely.

Believing that age alone couldn't be the main driver, further probing was necessary. The team was asked if age was treated as a scale or categorical variable. It was a scale variable, meaning either the youngest or oldest customers were deemed the highest risk. This seemed implausible.

When asked how often age data was missing, it turned out that age was missing 60% of the time. This was a significant clue. The missing data correlated with the type of customers: prepaid versus postpaid. In overseas markets, prepaid customers often don’t provide detailed personal information, unlike postpaid customers who fill out extensive forms.

This revelation explained the illusion that age was a critical variable. It wasn't age per se; it was the distinction between prepaid and postpaid customers driving the model’s results. This was a more logical and believable explanation.

## Lessons in Curiosity and Persistence

The key takeaway from these experiences is the importance of curiosity and persistence in data analysis. Don’t settle for the first explanation. Dig deeper. Ask more questions. Think about human behavior and the context of the data. The goal is to understand why the data looks the way it does and what underlying factors might be at play.

## Developing Good Habits

- **Question Everything**: Don’t take data at face value. Ask why it behaves a certain way.
- **Think Like a Detective**: Approach data analysis with a mindset of solving a mystery.
- **Leave No Stone Unturned**: Explore all possibilities and ensure no aspect of the data is ignored.

<br />
Data analysis is more than just crunching numbers; it’s about uncovering stories and making sense of complex behaviors. By fostering a habit of curiosity and persistence, you can unlock deeper insights and reveal the true nature of the data. Whether dealing with banking behaviors or mobile phone usage, always be ready to ask the next question and follow the trail to the real answer. Your curiosity is your greatest tool in the quest for understanding.
