---
linktitle: downgrade
title: How does the STARTTLS Policy List prevent downgrade attacks?
date: 2018-05-23T12:30:15-07:00
weight: 8
---

By providing a list of high-security email domains that all support TLS encryption and present valid certificates, the STARTTLS Policy List gives mailservers another point of reference to discover whether other mailservers support STARTTLS. Then, if a [man-in-the-middle prevents](#insecure) a sender from receiving a recipient’s “STARTTLS” message, if the recipient domain is on the STARTTLS Policy List, the sender will know that an attack is occuring.
