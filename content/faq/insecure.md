---
linktitle: insecure
title: What is STARTTLS? How can my email be insecure?
date: 2018-05-22T15:36:31-07:00
weight: 2
level: learn
---

As mentioned in the <a href="#how" class="how">previous section</a>, your email goes through multiple hops! Each of these hops have to be secure and authenticated for your email to reliably be delivered securely.

![how is email insecure diagram](/images/how-email-insecure.png)

### Passive monitoring

Typically, Internet traffic between two computers is secured using [Transport Layer Security](https://ssd.eff.org/pt-br/taxonomy/term/361). Since your email goes through multiple hops, if any of the hops it goes through are insecure, then your email is visible to anyone on the same network. This is referred to as “passive monitoring.” For example, if hop (1) is unencrypted, [anyone on your WiFi network](https://www.eff.org/deeplinks/2010/10/message-firesheep-baaaad-websites-implement) can read the email your sending!

For hops (1) and (3), you’ll want to make sure the connection between your email client and the mailserver is secure. If you use a web email client through your browser, make sure the site has “HTTPS” at the beginning of the URL— this means it’s using TLS for the connection.

For hop (2), you’ll want to make sure both your mailserver and the destination mailserver support “STARTTLS,” or TLS for email — you can use [our STARTTLS checker](/) to do this!

### Active monitoring

![active monitoring diagram](/images/active-monitoring.png)

Although we depicted each individual connection as a single “hop,” beneath the surface, there are many computers along the path of each “hop” that help you get to your final destination. One of these computers on the path between you and *gmail.com* could lie to you and impersonate gmail.com. This is referred to as “active monitoring” — where an attacker on the path can impersonate your destination, and then monitor the email you’re sending.

In order to verify that you really are talking to gmail.com, the computer that you’re connected to typically presents a *certificate* — that is, signatures from various authorities on the Internet that confirm that this computer is gmail.com.

For hops (1) and (3), if you’re using a webmail client through your browser, you’ll want to check for a “green lock” next to the URL bar, in addition to HTTPS, to make sure you really are talking to the correct computer!

For hop (2), you’ll want to make sure both your mailserver and the destination mailserver support “STARTTLS” **and** present a *valid certificate*. Again, you can use [our STARTTLS checker](/) to do this!

### Downgrade attacks

![downgrade attacks diagram](/images/downgrade-attacks.png)

This section only applies to hop (2). Suppose Gmail and EFF’s mailservers want to deliver mail to each other. As we mentioned previously, TLS is supported over email! Unfortunately, not all mailservers support TLS, so before sending each other mail, they ask each other:

**EFF**: Hey, let’s START a TLS connection?

**Gmail**: Yeah, ok!

After which they would proceed by encrypting any further communication. Unfortunately, this first "negotiation" phase is sent in-the-clear, so any computer on the network between Gmail and EFF— for instance, an ISP— can alter this traffic. As a result, a machine in the middle can simply drop EFF’s request, or alter Gmail’s response to indicate that they don’t support TLS. This is typically referred to as a “downgrade attack”.

In 2014, researchers discovered that governments were [actually doing this](https://zakird.com/papers/mail.pdf). For instance, in Tunisia, 94% of email being sent to Gmail was sent in-the-clear.

This happens because email servers can't tell if someone they're talking to (1) legitimately does not support TLS, or (2) there's an active attacker on the network trying to read the email traffic. The goal of the STARTTLS Policy List is to provide a list of mailservers that support TLS, so you can distinguish between these two worlds, and decide to behave accordingly.

[Check](/) if your email server is on the [STARTTLS Policy List](/policy-list), our index of high-security email domains, so people can email you securely.
