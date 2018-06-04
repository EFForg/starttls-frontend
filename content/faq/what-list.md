---
linktitle: what-list
title: What is the STARTTLS Policy List?
date: 2018-05-23T12:30:15-07:00
weight: 8
---

The [STARTTLS Policy List](/policy-list) is a list of email domains who meet a minimum set of security requirements.

By providing a list of email domains that support TLS encryption and present valid certificates, the STARTTLS Policy List gives mailservers another point of reference to discover whether other mailservers support STARTTLS. Then, if a man-in-the-middle prevents a sender from receiving a recipient’s “STARTTLS” message (link to “Downgrade attack” description above), if the recipient domain is on the STARTTLS Policy List, the sender will know that an attack is occuring.

Here are some guidelines for using the list to prevent downgrade attacks. Here are more details about the list format.

You can request your own email domain to be added to the list via our tool.

[**More details about the STARTTLS Policy List**](/policy-list)
