---
title: "How can I secure my mailserver?"
date: 2018-05-23T12:29:52-07:00
weight: 7
---

<h3>Do you have STARTTLS enabled?</h3>
If you’re using Postfix, you can use our Certbot plugin to enable TLS and set up all the relevant configuration parameters for you, which follows Postfix’s guidelines.

Otherwise, consult your mailserver’s documentation on how to enable STARTTLS for your email delivery!

<h3>Are your TLS parameters secure?</h3>
If you’re using Postfix, you can use our Certbot plugin to set up all the relevant configuration parameters for you, which follows Postfix’s guidelines.

Otherwise, here are the things you should watch out for:
Disable SSLv2/SSLv3
Deploy perfect forward secrecy correctly for TLS (while preventing exploits like Logjam!)

<h3>Is your certificate invalid?</h3>
You can obtain a valid certificate for free from LetsEncrypt using Certbot!

<h3>Are you safe against downgrade attacks?</h3>
If you already meet all the above requirements, make sure to add your domain to the STARTTLS Policy List.
