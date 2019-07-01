---
linktitle: dane
title: What about DANE?
date: 2019-05-22T15:37:08-07:00
weight: 7
level: secure
---

DANE, or [DNS-based Authentication of Named Entities](https://tools.ietf.org/html/rfc7672) is an Internet standard which could singularly do what MTA-STS + the preload list would cover combined. It's a downgrade-resistant way for mailservers to discover and publish each other's TLS information using another technology called DNSSEC. DNSSEC is a protocol for signing and verifying statements by owners of domain names.

DANE has been around for a while-- so why doesn't everyone use it already, and why do we need MTA-STS in the first place? DNSSEC presents some challenges. 
 * If your domain's TLD doesn't support DNSSEC, then your mailserver cannot utilize DANE. A [large majority](http://stats.research.icann.org/dns/tld_report/) of TLDs are DNSSEC-signed, but many country-code TLDs remain unsigned.
 * DNSSEC can be difficult to deploy correctly, for both signing and validation. For instance, to do validation properly, the mailserver needs a local, trusted DNSSEC-validating resolver; otherwise, your server relies on upstream DNS resolvers for validation.
DNSSEC adoption has unfortunately [remained stagnant](https://www.internetsociety.org/deploy360/dnssec/statistics/) (validation is at around 10-15% worldwide) for the past five years.

We still recommend deploying DANE for email security if you have the resources to maintain DNSSEC signing and validation properly. The Internet Society has a [good explanation and list of related resources](https://www.internetsociety.org/resources/deploy360/dane/) and Viktor Dukhovni's [slides from ICANN](https://imrryr.org/~viktor/ICANN61-viktor.pdf) contain lots of DANE deployment best practices.

MTA-STS was designed in the absence of a technology like DNSSEC. It bootstraps trust off the WebPKI Certificate Authority ecosystem (that secures HTTPS), but is not [a perfect solution](/faq#mtasts) either.

