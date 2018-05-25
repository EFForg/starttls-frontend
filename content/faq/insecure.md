---
title: insecure
date: 2018-05-22T15:36:31-07:00
weight: 2
---
## How can my email be insecure?

As mentioned in the [previous section](#how), your email goes through multiple hops! Each of these hops have to be secure and authenticated for your email to reliably delivered securely.

<img src="/images/how-email-insecure.png" alt="how is email insecure diagram">

<h3>Passive monitoring</h3>

Typically, internet traffic between two computers is secured using Transport Layer Security (link to SSD). Since your email goes through multiple hops (link to how does email work question), if any of the hops it goes through are insecure, then your email is visible to anyone on the same network. This is referred to as “passive monitoring.” For example, if hop (1) is unencrypted, anyone on your WiFi network can read the email your sending!

For hops (1) and (3), you’ll want to make sure the connection between your email client and the mailserver is secure. If you use a web email client through your browser, make sure the site has “HTTPS” at the beginning of the URL-- this means it’s using TLS for the connection. If you use a desktop client, you can check your security settings here (link).

For hop (2), you’ll want to make sure both your mailserver and the destination mailserver support “STARTTLS,” or TLS for email -- you can use <a href="">our tool</a> <-LINKS WHERE? to do this!

<h3>Active monitoring</h3>
<img src="/images/active-monitoring.png" alt="active monitoring diagram">

Although we depicted each individual connection as a single “hop,” beneath the surface, there are many computers along the path of each “hop” that help you get to your final destination. One of these computers on the path between you and <em>gmail.com</em> could lie to you and impersonate gmail.com. This is referred to as “active monitoring”-- where an attacker on the path can impersonate your destination, and then monitor the email you’re sending.

In order to verify that you really are talking to gmail.com, the computer that you’re connected to typically presents a <em>certificate</em>-- that is, signatures from various authorities on the internet that confirm that this computer is gmail.com.

For hops (1) and (3), if you’re using a webmail client through your browser, you’ll want to check for a “green lock” next to the URL bar, in addition to HTTPS, to make sure you really are talking to the correct computer! If you use a desktop client, you can check your security settings here (link).

For hop (2), you’ll want to make sure both your mailserver and the destination mailserver both support “STARTTLS” <strong>and</strong> presents a <em>valid certificate</em>. You can use <a href="/">our tool</a> to do this!

<h3>Downgrade attacks</h3>

<img src="/images/downgrade-attacks.png" alt="downgrade attacks diagram">

This section only applies to hop (2). Suppose Gmail and EFF’s mailservers want to deliver mail to each other. As we mentioned previously, TLS is supported over email! Unfortunately, not all mailservers support TLS, so before sending each other mail, they ask each other:
    <blockquote>
    EFF: Hey, let’s START a TLS connection?
    Gmail: Yeah, ok!
    </blockquote>
After which they would proceed by encrypting any further communication. Unfortunately, this first "negotiation" phase is sent in-the-clear, so any computer on the network between Gmail and EFF-- for instance, an ISP-- can alter this traffic. So a machine in the middle can simply drop EFF’s request, or alter Gmail’s response to indicate that they don’t support TLS. This is typically referred to as a “downgrade attack”.

In 2014, researchers discovered that governments <a href="https://zakird.com/papers/mail.pdf">were actually doing this</a>. For instance, in Tunisia, 94% of email being sent to Gmail was sent in-the-clear.

This happens because email servers can't tell if someone they're talking to (1) legitimately does not support TLS, or (2) there's an active attacker on the network trying to read the email traffic. The goal of the STARTTLS Policy List is to provide a list of mailservers that support TLS, so you can distinguish between these two worlds, and decide to behave accordingly.

Use <a href="/">our tool</a> to check if your email server is on the STARTTLS Policy List, our index of high-security email domains, so people can email you securely.
