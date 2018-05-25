---
title: what-checker
date: 2018-05-23T12:29:26-07:00
weight: 6
---

## What does the [STARTTLS Checker](/) do?

<h3>This tool checks whether your email domain…</h3>

<h4><span class="left">Supports <a href="https://en.wikipedia.org/wiki/Opportunistic_TLS">STARTTLS?</a></span>
<span class="right">If this check fails, they’ll all fail.</span></h4>

<ul>
<li>
“STARTTLS” is the command an email server sends if it wants to encrypt communications (using Transport Layer Security or “TLS”) with another email server. If your server supports STARTTLS, that means any other server that supports STARTTLS can communicate securely with it.
</li>
<li>
This checks that your email server sends the STARTTLS command correctly, as well as accepting the STARTTLS command from other servers.
</li>

<h4><span class="left">Uses a secure version of TLS?</span>
<span class="right">If this check fails, red X</span>
</h4>
<ul>
<li>
TLS has changed many times over the years. Researchers have discovered security flaws in some older versions, named “SSLv2” and “SSLv3”, so technologists across the internet are working to deprecate SSLv2/3.</li>
<li>
This checks that your email server does not allow establishing a valid TLS connection over SSLv2/3.
</li>
</ul>

<h4><span class="left">Presents a valid certificate?</span>     
<span class="right">If this check fails, red X</span>
</h4>
<ul>
<li>
On the internet, even if you think you’re talking to a service like “eff.org”, it could be an impersonator pretending to be “eff.org”. Checking a mail server’s certificate ensures that you really are talking to the actual service.</li>
<li>
In order for your certificate to be valid for your email domain, it should be unexpired, chain to a valid root from Mozilla’s CA certificates list, and one of the names on the certificate should either match the domain (so the part of an email address after the @) or the server’s hostname.
</li>
</ul>

<h4><span class="left">
Preloaded on our STARTTLS policy list?</span>
<span class="right">If this check fails, yellow flag</span>
</h4>
<ul>
<li>
Even if you pass the above checks, someone sitting between your server and other mailservers can choose to drop “STARTTLS” messages and fool servers into thinking that the other side does not support TLS.
</li>
<li>
To prevent this from happening, if you pass all the previous checks, you can add your domain to our index of high-security email domains so servers have another point of reference to discover that you support STARTTLS encryption.
</li>
</ul>
