---
linktitle: downgrades
title: How can I protect my secure mailserver against downgrade attacks?
date: 2018-05-22T15:37:08-07:00
weight: 7
level: secure
---

Since STARTTLS negotiation is done in the open, the process of upgrading an email connection to TLS is susceptible to tampering. There are a couple of proposed solutions for this, each with varying degrees of effectiveness.

#### DANE

DANE, or [DNS-based Authentication of Named Entities](https://tools.ietf.org/html/rfc7672) relies on DNSSEC, a protocol for publishing and authenticating signed DNS entries. Mailserver operators would sign their MX records with DNSSEC and publish a record alongside them containing the public key that the mailserver is expected to use in TLS. So long as senders trust the DNSSEC signature chain, senders can discover both 1) whether to expect a STARTTLS connection, and 2) how to validate the recipient's certificate. Full DANE deployment presents a scalable solution for mailservers to clarify certificate validation rules and prevent downgrade attacks. However, DANE is dependent on deployment and validation of DNSSEC, which has unfortunately [remained stagnant](https://www.internetsociety.org/deploy360/dnssec/statistics/) (validation is at around 10-15% worldwide) for the past five years.

The Internet Society has a [good explanation and list of related resources](https://www.internetsociety.org/resources/deploy360/dane/) if you're interested in deploying both DNSSEC and DANE.

#### MTA-STS

[MTA-STS](https://datatracker.ietf.org/doc/draft-ietf-uta-mta-sts/) is an upcoming protocol for advertising your mailserver's security policy. Mailserver operators are expected to 1) publish a DNS record indicating MTA-STS support, and 2) serve a JSON file describing their security policy over HTTPS at a `.well-known` address. Without DNSSEC to authenticate the related DNS record, MTA-STS is still a trust-on-first-use protocol, similar to [HSTS](https://tools.ietf.org/html/rfc6797) for the web. It's in last call at the IETF, so few MTAs have implemented it so far.

#### STARTTLS Policy List

The [STARTTLS Policy List's](/policy-list) aim is to decouple secure email from DNSSEC adoption with a stop-gap, intermediate solution to secure email delivery *today* rather than later. Once a protocol like MTA-STS starts to gain adoption, the list may optionally indicate whether a domain supports MTA-STS, rather than the full policy of a domain.
