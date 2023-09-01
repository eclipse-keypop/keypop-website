---
title: Keypop Calypso Crypto Legacy SAM API
linktitle: Calypso Legacy SAM API
summary: Public high-level API which standardizes the way to interact with a Calypso® legacy SAM product (SAM-C1, HSM-C1, etc...).
type: book
weight: 5
toc: true
---

---
## Overview

As part of the **Card Layer**, the **Calypso Crypto Legacy SAM API** provides high-level functionality for selecting 
and performing transactions with Calypso Legacy SAMs and can also be coupled with the Calypso API to handle the 
cryptographic calculations required for Calypso card transactions secured by symmetric keys.

The documentation for the specification produced by the **Calypso Networks Association**, on which this API is based,
is available [here](https://terminal-api.calypsonet.org/apis/calypsonet-terminal-calypso-crypto-legacysam-api/).

--- 

## Java implementation
{{% callout note %}}
**`{{% keypop-calypso-crypto-legacysam-java-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-calypso-crypto-legacysam-java-api/)</span>
<span class="component-metadata">{{< icon name="project-diagram" pack="fas" >}} [UML](https://calypsonet.github.io/calypsonet-terminal-calypso-crypto-legacysam-uml-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-crypto-legacysam-java-api/)</span>
<span class="component-metadata">{{< icon name="exchange-alt" pack="fas" >}} [Changelog](https://github.com/eclipse-keypop/keypop-calypso-crypto-legacysam-java-api/blob/main/CHANGELOG.md)</span>
{{% /callout %}}

All deliverables are available directly from the [Maven Central Repository](https://central.sonatype.com/search?q=keypop-calypso-crypto-legacysam-java-api) or by using one of the project resource managers below:

{{< tabpane >}}
{{< tab header="Gradle Groovy" lang="gradle" >}}
implementation 'org.eclipse.keypop:keypop-calypso-crypto-legacysam-java-api:{{% keypop-calypso-crypto-legacysam-java-api-version %}}'
{{< /tab >}}
{{< tab header="Gradle Kotlin" lang="kotlin" >}}
implementation("org.eclipse.keypop:keypop-calypso-crypto-legacysam-java-api:{{% keypop-calypso-crypto-legacysam-java-api-version %}}")
{{< /tab >}}
{{< tab header="Maven" lang="xml" >}}
<dependency>
<groupId>org.eclipse.keypop</groupId>
<artifactId>keypop-calypso-crypto-legacysam-java-api</artifactId>
<version>{{% keypop-calypso-crypto-legacysam-java-api-version %}}</version>
</dependency>
{{< /tab >}}
{{< /tabpane >}}

<br>

## C++ implementation
{{% callout note %}}
work in progress...
{{% /callout %}}

<br>

{{% callout note %}}
The third version number (x.y.**z**) only concerns updates of the javadoc because this component does not contain any
implementation, but only an API.
{{% /callout %}}