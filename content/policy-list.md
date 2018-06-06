---
title: "Policy List"
date: 2018-05-07T10:23:54-07:00
draft: false
title: STARTTLS Policy List
layout: single
---

The is a list of email domains who meet a minimum set of security requirements. By providing a list of email domains that support TLS encryption and present valid certificates, the STARTTLS Policy List gives mailservers another point of reference to discover whether other mailservers support STARTTLS.


The list is hosted [here](https://dl.eff.org/starttls-everywhere/policy.json), and the corresponding signature is [here](https://dl.eff.org/starttls-everywhere/policy.jsona.asac).

```
https://dl.eff.org/starttls-everywhere.policy.json
```
```
https://dl.eff.org/starttls-everywhere.policy.json.asc
```

[Here](https://github.com/EFForg/starttls-everywhere/blob/master/RULES.md) is a detailed specification of the list's format.

## <a name="use"></a>Using the list

You can and should verify the policy file with:

```
gpg2 --recv-key A2CFB51FA275A7286234E7B24D17C995CD9775F2
```
```
gpg2 --trusted-key 4D17C995CD9775F2 --verify policy.json.asc policy.json

```

If you are using the list, **you must fetch updates at least once every 48 hours**. We provide [sample cronjobs](https://github.com/EFForg/starttls-everywhere).

Every policy JSON has an expiry date in the top-level configuration, after which we cannot guarantee deliverability if you are using the list.

#### Tooling

Our [starttls-policy](https://github.com/EFForg/starttls-everywhere/tree/master/starttls-policy) Python package can fetch updates to and iterate over the existing list. If you use Postfix, we provide utilities to transform the policy list into configuration parameters that Postfix understands.

We welcome [contributions](https://github.com/EFForg/starttls-everywhere) for different MTAs!

## <a name="add"></a>Submitting your domain to the list

When submitting your domain to the list through [this form](/add-domain), you must provide and verify:

 * A contact e-mail used to notify the mailserver administrator of any deliverablity concerns.
 * A list of expected hostnames for your server. At least one of the names on each mailserver's certificate should match one of these patterns.
    * These can be a suffix, like `.eff.org`, or a fully-qualified domain name, like `mx.eff.org`. Suffixes will only match one subdomain label, so `.eff.org` would match names `*.eff.org` and `mx.eff.org`, but not `good.mx.eff.org` or `*.mx.eff.org`. These rules match the ones laid out in the [MTA-STS](https://datatracker.ietf.org/doc/draft-ietf-uta-mta-sts/) IETF draft.

#### Validation

You can use our [email security checker](/) to evaluate your email domain's eligibility for addition to the STARTTLS policy list.
The strong requirements are that your domain:

 * Advertises STARTTLS.
 * Does not support SSLv2/v3.
 * Provides a valid certificate. Validity means:
    * By default, the certificate's Common Name or a subjectAltName matches either the e-mail domain, or the server hostname.
         * If this check is being performed against a policy entry, we validate the certificate's name against the set of hostname patterns entered for the policy.
    * The certificate is unexpired.
    * There is a valid chain from the certificate to a root included in [Mozilla's trust store](https://wiki.mozilla.org/CA/Included_Certificates) (available as Debian package [ca-certificates](https://packages.debian.org/sid/ca-certificates)).

Before adding a domain to the list, we continue to perform validation against the mailserver for at least one week. If it fails at any point, **it must be resubmitted.**

With that in mind, you can queue your mail domain for the STARTTLS policy list using the [form here](/add-domain)! Alternatively, you can send an e-mail to [starttls-policy@eff.org](mailto:starttls-policy@eff.org) or [submit a pull request](https://github.com/EFForg/starttls-everywhere) to add your domain.

#### Continued requirements

Failure to continue meeting these requirements could result in deliverability issues to your mailserver.

We continue to validate all the domains on the list daily. If we notice any oddities, we will notify the contact e-mail associated with the policy submission.

## <a name="update"></a> Updating or removing your policy entry on the list

If you're migrating e-mail hosting, you'll need to update the MX hostnames associated with your domain's policy.

If you'd like to request removal from the list, or an update to your policy entry (or associated contact e-mail), contact us at [starttls-policy@eff.org](mailto:starttls-policy@eff.org)

## <a name="pin"></a>Adding pins to the list

We also accept requests to pin keys, and these requests will be judged on a case-by-case basis.
The site operator understands:

   * How to generate and use a leaf key backup pin.
   * Changing to a certificate chain outside the pinset will break deliverability to your mailserver.
   * Removing a preloaded pin may take as long as a week.

We will require a form of DNS validation in order to validate that the pinning request comes from the site operator.
To pin your mailserver, contact us with more information about your request at [starttls-policy@eff.org](mailto:starttls-policy@eff.org).
