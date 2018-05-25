---
linktitle: e2e
title: Does STARTTLS encrypt email so only I and the recipient can read it (i.e. end-to-end-encryption)?
date: 2018-05-22T15:37:08-07:00
weight: 3
---

No, STARTTLS only secures communication between mailservers (hop 2 in this figure). Even if each of your hops are secured and encrypted, your email provider, like Gmail and Yahoo, can still read your email. If you’ve heard of PGP, PGP encryption can provide end-to-end encryption for you, although it can be difficult to use. If you want to take advantage of all the benefits of end-to-end encrypted messaging, check out our series on <a href="https://www.eff.org/deeplinks/2018/03/secure-messaging-more-secure-mess" target="_blank">Secure Messaging</a>.
