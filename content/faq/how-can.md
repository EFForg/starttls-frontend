---
linktitle: how-can
title: How can I secure my mailserver?
date: 2018-05-23T12:29:52-07:00
weight: 7
---

<h3>Do you have STARTTLS enabled?</h3>
If you’re using Postfix, you can use [our Certbot plugin](https://certbot.eff.org) to enable TLS and set up all the relevant configuration parameters for you, which follows Postfix’s guidelines.

Otherwise, consult your mailserver’s documentation on how to enable STARTTLS for your email delivery!

<h3>Are your TLS parameters secure?</h3>
If you’re using Postfix, you can use [our Certbot plugin](https://certbot.eff.org) to set up all the relevant configuration parameters for you, which follows [Postfix’s guidelines](postfix.org/TLS_README.html).

Otherwise, consult your mailserver’s documentation on how to enable STARTTLS for your email delivery!

In particular, here are some things you should watch out for:
 - [Disable SSLv2/SSLv3](disablessl3.com)
 - [Deploy perfect forward secrecy correctly](https://weakdh.org/sysadmin.html).

<h3>Is your certificate invalid?</h3>
You can obtain a valid certificate for free from [LetsEncrypt](https://letsencrypt.org) using [Certbot](https://certbot.eff.org)! Consult your mailserver's documentation on how to install these certificates once you obtain them.

<h3>Are you safe against downgrade attacks?</h3>
If you already meet all the above requirements, make sure to add your domain to the [STARTTLS Policy List](/policy-list).
