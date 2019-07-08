---
linktitle: mtasts
title: What is MTA-STS?
date: 2019-05-23T12:30:15-07:00
weight: 8
level: secure
---

MTA-STS is an [Internet standard](https://tools.ietf.org/html/rfc8461) for mailservers to learn and save each other's TLS information in order to prevent [downgrade attacks](/faq#downgrades) from succeeding.

There's two sides for MTA-STS to work. When an email is sent:
 * the receiving server must have its MTA-STS policy up, advertising correct TLS information
 * the sending server must be able to look up and remember the other server's MTA-STS policy
Our [checker](/) confirms whether a server has MTA-STS receiving support and offers suggestions if it detects misconfigurations. It's difficult to check for sending support in an automated way. Of the larger mail providers, [Gmail](https://support.google.com/a/answer/9261504?hl=en) has sending support by default, and domains using Gmail can turn it on.

MTA-STS is not perfect; before server A has discovered server B's TLS information and vice versa, connections between the two can be downgraded in [/faq#insecure](various ways). That's where the [STARTTLS policy list](/policy-list) comes in, to pre-load the TLS information for various heavy-use mailservers as well as individual opted-in mail providers and servers.

MTA-STS support is [on the rise](/about).
