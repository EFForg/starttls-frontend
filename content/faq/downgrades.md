---
linktitle: downgrades
title: How can I protect my secure mailserver against downgrade attacks?
date: 2018-05-22T15:37:08-07:00
weight: 7
level: secure
---

Since STARTTLS negotiation is done in the open, the process of upgrading an email connection to TLS is susceptible to tampering. There are a couple of proposed solutions for this, each with varying degrees of effectiveness and ecosystem support.

#### DANE

DANE, or [DNS-based Authentication of Named Entities](https://tools.ietf.org/html/rfc7672), is an Internet standard designed for mailservers to publish and validate TLS information over DNS. Its security relies on DNSSEC, a protocol for publishing and authenticating signed DNS entries. The [What about DANE?](/faq#dane) FAQ entry has more details.

#### MTA-STS + Preloading

[MTA-STS](/faq#mtasts) is a protocol for advertising your mailserver's TLS information and security policy over HTTPS. The [MTA-STS](/faq#mtasts) FAQ entry has more details.

The [STARTTLS Policy List's](/policy-list) aim is to decouple secure email from DNSSEC adoption with a stop-gap, intermediate solution to secure email delivery *today* rather than later. The list will preload TLS policies for domains that support MTA-STS.
