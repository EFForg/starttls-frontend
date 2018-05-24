---
title: "What is the STARTTLS Policy List?"
date: 2018-05-23T12:30:15-07:00
weight: 8
---

The STARTTLS Policy List is a list of email domains who meet a minimum set of security requirements.

By providing a list of email domains that support TLS encryption and present valid certificates, the STARTTLS Policy List gives mailservers another point of reference to discover whether other mailservers support STARTTLS. Then, if a man-in-the-middle prevents a sender from receiving a recipient’s “STARTTLS” message (link to “Downgrade attack” description above), if the recipient domain is on the STARTTLS Policy List, the sender will know that an attack is occuring.

Here are some guidelines for using the list to prevent downgrade attacks. Here are more details about the list format.

You can request your own email domain to be added to the list via our tool.

<h3>How does the STARTTLS Policy List prevent downgrade attacks?</h3>
By providing a list of high-security email domains that all support TLS encryption and present valid certificates, the STARTTLS Policy List gives mailservers another point of reference to discover whether other mailservers support STARTTLS. Then, if a man-in-the-middle prevents a sender from receiving a recipient’s “STARTTLS” message (link to “Downgrade attack” description above), if the recipient domain is on the STARTTLS Policy List, the sender will know that an attack is occuring.

<h3>How do I use the STARTTLS Policy List?</h3>
If you use Postfix, check out our Certbot plugin. The “starttls-policy” enhancement will download the list, and run a cronjob to regularly update and transform the list into rules that Postfix can understand and use.

If you use some other MTA, you can use our cronjob hosted here to fetch and regularly update the list. In the near future, we’ll write up guidelines and scripts for transforming the list into configuration options that mailserver software other than Postfix can understand. For now, check out our description of the list’s format, and what each field means.

<h3>How do I submit my domain to the STARTTLS Policy List?</h3>
In order to submit your domain to our index of high-security email domains, you have to meet a certain threshold of security requirements-- all these checks are listed here. Once you meet these requirements, you’ll get the option to submit your domain to the list by providing a contact email.

This contact email is for us to (1) notify you of the status of your domain on the list, and (2) notify you in case we detect any regressions in security on your domain, which could impact deliverability.

<h3>How do I remove my domain from the STARTTLS Policy List?</h3>
You can contact us at starttls-policy@eff.org if you’re migrating your domain to a new hosting provider, or need to disable TLS for some other reason. You can also directly submit a pull request to the Github repository where the STARTTLS Policy List is hosted.
