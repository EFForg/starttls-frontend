---
linktitle: what-list
title: What is the STARTTLS Policy List?
date: 2018-05-23T12:30:15-07:00
weight: 8
level: secure
---

The [STARTTLS Policy List](/policy-list) is a list of email domains who meet a minimum set of security requirements.

By providing a list of email domains that support TLS encryption and present valid certificates, the STARTTLS Policy List gives mailservers another point of reference to discover whether other mailservers support STARTTLS. Then, if a [man-in-the-middle](#downgrade) prevents a sender from receiving a recipient’s “STARTTLS” message, if the recipient domain is on the STARTTLS Policy List, the sender will know that an attack is occuring.

You can request your own email domain to be added to the list [here](/add-domain), but make sure to read the details outlined [here](/policy-list#add)
