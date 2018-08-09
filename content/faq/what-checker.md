---
linktitle: what-checker
title: What does the STARTTLS Checker do?
date: 2018-05-23T12:29:26-07:00
weight: 6
level: secure
---

#### [This tool](/) checks whether your email domain…

#### Supports STARTTLS?

-   “STARTTLS” is the command an email server sends if it wants to encrypt communications (using Transport Layer Security or “TLS”) with another email server. If your server supports STARTTLS, that means any other server that supports STARTTLS can communicate securely with it.
-   Does your email server send the STARTTLS command correctly, and does it accept the STARTTLS command from other servers?

#### Uses a secure version of TLS?

-   TLS has changed many times over the years. Researchers have discovered security flaws in some older versions, named “SSLv2” and “SSLv3”, so technologists across the Internet are [working to deprecate](http://disablessl3.com/) SSLv2/3.
-   Does your email server disallow establishing a valid TLS connection over SSLv2/3?

#### Presents a valid certificate?

-   Even if you *think* you’re talking to a service named “eff.org”, it could be an impersonator pretending to be “eff.org”. Checking a mail server’s certificate helps ensure that you really are talking to the actual service.
-   In order for your certificate to be valid for your email domain, it should be unexpired, chain to a valid root from [Mozilla’s CA certificates list](https://wiki.mozilla.org/CA/Included_Certificates), and one of the names on the certificate should either match the domain (the part of an email address after the @) or the server’s hostname (the name of the server, as indicated by an MX record).

#### Preloaded on our STARTTLS policy list?

-   Even if you pass the above checks, someone sitting between your server and other mailservers can choose to drop “STARTTLS” messages and fool servers into thinking that you do not support TLS.
-   To prevent this from happening, if you pass all the previous checks, you can add your domain to our index of high-security email domains so servers have another point of reference to discover that you support STARTTLS encryption.

