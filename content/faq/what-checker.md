---
linktitle: what-checker
title: What does the STARTTLS Checker do?
date: 2018-05-23T12:29:26-07:00
weight: 6
level: secure
---

<h4><a href="/">This tool</a> checks whether your email domain…</h4>

<!--- TODO: use data/checks.yml to populate the below. -->

<h4>Supports STARTTLS?</h4>
<ul>
<li>
“STARTTLS” is the command an email server sends if it wants to encrypt communications (using Transport Layer Security or “TLS”) with another email server. If your server supports STARTTLS, that means any other server that supports STARTTLS can communicate securely with it.
</li>
<li>
Does your email server send the STARTTLS command correctly, and does it accept the STARTTLS command from other servers?
</li>
</ul>

<h4>Uses a secure version of TLS?
</h4>
<ul>
<li>
TLS has changed many times over the years. Researchers have discovered security flaws in some older versions, named “SSLv2” and “SSLv3”, so technologists across the Internet are <a href="http://disablessl3.com/" target="_blank">working to deprecate</a> SSLv2/3.
</li>
<li>
Does your email server disallow establishing a valid TLS connection over SSLv2/3?
</li>
</ul>

<h4>Presents a valid certificate?
</h4>
<ul>
<li>
Even if you *think* you’re talking to a service named “eff.org”, it could be an impersonator pretending to be “eff.org”. Checking a mail server’s certificate helps ensure that you really are talking to the actual service.
</li>
<li>
In order for your certificate to be valid for your email domain, it should be unexpired, chain to a valid root from <a href="https://wiki.mozilla.org/CA/Included_Certificates" target="_blank">Mozilla’s CA certificates list</a>, and one of the names on the certificate should either match the domain (the part of an email address after the @) or the server’s hostname (the name of the server, as indicated by an MX record).
</li>
</ul>

<h4>
Preloaded on our STARTTLS policy list?
</h4>
<ul>
<li>
Even if you pass the above checks, someone sitting between your server and other mailservers can choose to drop “STARTTLS” messages and fool servers into thinking that you do not support TLS.
</li>
<li>
To prevent this from happening, if you pass all the previous checks, you can add your domain to our index of high-security email domains so servers have another point of reference to discover that you support STARTTLS encryption.
</li>
</ul>
