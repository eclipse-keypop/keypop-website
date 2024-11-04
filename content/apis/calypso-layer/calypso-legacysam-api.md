---
title: Calypso Legacy SAM API (external)
linktitle: 🟢 Legacy SAM
summary: Public high-level API which standardizes the way to interact with a Calypso® legacy SAM product (SAM-C1, HSM-C1, etc...).
type: book
weight: 2
toc: true
---

{{% callout note %}}
{{< icon name="project-diagram" pack="fas" >}} [UML class diagram](https://calypsonet.github.io/calypsonet-terminal-calypso-crypto-legacysam-uml-api/)
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [Design guide](https://terminal-api.calypsonet.org/specifications/calypso-layer/calypso-legacysam-api/)</span>
<span class="component-metadata">{{< icon name="exchange-alt" pack="fas" >}} [Changelog](https://github.com/eclipse-keypop/keypop-calypso-crypto-legacysam-java-api/blob/main/CHANGELOG.md)</span>
{{% /callout %}}

As part of the **Card Layer**, the **Calypso Crypto Legacy SAM API** provides high-level functionality for selecting
and performing transactions with Calypso Legacy SAMs and can also be coupled with the **Calypso Card API** to handle the
cryptographic calculations required for Calypso card transactions secured by symmetric keys.

<br>

## Java implementation
{{% callout note %}}
Latest version **`{{% keypop-calypso-crypto-legacysam-java-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://calypso-crypto-legacysam-java.keypop.org/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-crypto-legacysam-java-api/)</span>
{{% /callout %}}

All deliverables are available directly from the [Maven Central Repository](https://central.sonatype.com/search?q=keypop-calypso-crypto-legacysam-java-api) or by using one of the project resource managers below:

{{< tabpane >}}
{{< tab header="Gradle Kotlin" >}}
{{< code lang="kotlin" copy="true">}}
implementation("org.eclipse.keypop:keypop-calypso-crypto-legacysam-java-api:{{% keypop-calypso-crypto-legacysam-java-api-version %}}")
{{< /code>}}
{{< /tab >}}
{{< tab header="Gradle Groovy" >}}
{{< code lang="gradle" copy="true">}}
implementation 'org.eclipse.keypop:keypop-calypso-crypto-legacysam-java-api:{{% keypop-calypso-crypto-legacysam-java-api-version %}}'
{{< /code>}}
{{< /tab >}}
{{< tab header="Maven" >}}
{{< code lang="xml" copy="true">}}
<dependency>
    <groupId>org.eclipse.keypop</groupId>
    <artifactId>keypop-calypso-crypto-legacysam-java-api</artifactId>
    <version>{{% keypop-calypso-crypto-legacysam-java-api-version %}}</version>
</dependency>
{{< /code>}}
{{< /tab >}}
{{< /tabpane >}}

<br>

## C++ implementation
{{% callout note %}}
Latest version **`{{% keypop-calypso-crypto-legacysam-cpp-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-calypso-crypto-legacysam-cpp-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-crypto-legacysam-cpp-api/)</span>
{{% /callout %}}