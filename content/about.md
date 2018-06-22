---
title: "About"
date: 2018-05-22T11:45:16-07:00
draft: false
layout: single
---
STARTTLS Everywhere is a project to make email delivery more secure. It is created and maintained by the [Electronic Frontier Foundation (EFF)](https://www.eff.org), a 501\(c\)3 nonprofit.

We want *safer hops for email*.  Email goes through multiple computers (or multiple "hops") to get to its destination, and each hop should be as secure as possible. More specific goals of the project include:

 * Improve STARTTLS adoption.
 * Maintain a [STARTTLS Policy List](/policy-list) to help prevent [downgrade attacks](/faq#downgrades) on email services.
 * Lower the barriers to entry for running a secure mailserver.

If you have questions about STARTTLS Everywhere, check out [the FAQ](/faq). If you are an email service provider and are looking to be added to the STARTTLS Everywhere policy list, [learn more here](/policy-list).

If you like the project, consider [donating!](https://supporters.eff.org/donate/)

<h5>Statistics</h5>

In 2015, researchers discovered that ~20% of the Alexa top million domains which have mailservers don’t use STARTTLS, and ~40% present invalid certificates <sup>[1]</sup>. In addition, STARTTLS commands from several countries were being regularly downgraded, as high as 96% of the time.

<img src="/images/about-stats.png">

These results are the motivation for this project.

<small><sup>[1]</sup> Neither Snow Nor Rain Nor MITM . . . An Empirical Analysis of Email Delivery Security https://zakird.com/papers/mail.pdf</small>
