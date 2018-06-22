---
linktitle: how-can
title: How can I make my mailserver more secure?
date: 2018-05-23T12:29:52-07:00
weight: 7
level: secure
---

<h4>Do you have STARTTLS enabled?</h4>
First thing's first: consult your mailserver's documentation or contact your hosting provider about how to enable STARTTLS for your mail delivery?

<h4>Are your TLS parameters secure?</h4>
There's a tradeoff in the mailserver world you'll need to make between backwards-compatibility (so you can encrypt with as many mailservers as possible) and requiring strong security. Here are some various things we recommend you do to make your mailserver robust, while still allowing it to encrypt with modern mailservers.

   - [Disable SSLv2/SSLv3](https://disablessl3.com)
   - [Deploy perfect forward secrecy correctly](https://weakdh.org/sysadmin.html).

<h4>Is your certificate valid?</h4>
Standard practice is to obtain a certificate matching the hostname of the mailserver. However, you can also obtain a certificate matching your email domain (the part of the email address after the @) for a stronger security guarantee.

You can obtain a valid certificate automatically and for free from [Let's Encrypt](https://letsencrypt.org) using [Certbot](https://certbot.eff.org)! Consult your mailserver documentation or contact your hosting provider for how to install these certificates.

<h4>Do you have some sort of downgrade prevention?</h4>
If you already meet all the above requirements, you can add your domain to the [STARTTLS Policy List](/policy-list) to [protect against downgrade attacks](/faq#downgrades).
