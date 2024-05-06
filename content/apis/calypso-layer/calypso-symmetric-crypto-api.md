---
title: Calypso Symmetric Crypto API (internal)
linktitle: 🔶 Symmetric Crypto
summary: Internal API which defines the elements shared between the Calypso Card and the Calypso Symmetric Crypto libraries.
type: book
weight: 3
toc: true
---

{{% callout note %}}
{{< icon name="project-diagram" pack="fas" >}} [UML class diagram](https://calypsonet.github.io/calypsonet-terminal-calypso-crypto-symmetric-uml-api/)
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [Design guide](https://terminal-api.calypsonet.org/specifications/calypso-layer/calypso-symmetric-crypto-api/)</span>
<span class="component-metadata">{{< icon name="exchange-alt" pack="fas" >}} [Changelog](https://github.com/eclipse-keypop/keypop-calypso-crypto-symmetric-java-api/blob/main/CHANGELOG.md)</span>
{{% /callout %}}

The **Calypso Crypto Symmetric API** is the communication interface between the **Calypso Card** and the
**Calypso Symmetric Crypto** libraries.

<br>

## Java implementation
{{% callout note %}}
Latest version **`{{% keypop-calypso-crypto-symmetric-java-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-calypso-crypto-symmetric-java-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-crypto-symmetric-java-api/)</span>
{{% /callout %}}

All deliverables are available directly from the [Maven Central Repository](https://central.sonatype.com/search?q=keypop-calypso-crypto-symmetric-java-api) or by using one of the project resource managers below:

{{< tabpane >}}
{{< tab header="Gradle Kotlin" >}}
{{< code lang="kotlin" copy="true">}}
implementation("org.eclipse.keypop:keypop-calypso-crypto-symmetric-java-api:{{% keypop-calypso-crypto-symmetric-java-api-version %}}")
{{< /code>}}
{{< /tab >}}
{{< tab header="Gradle Groovy" >}}
{{< code lang="gradle" copy="true">}}
implementation 'org.eclipse.keypop:keypop-calypso-crypto-symmetric-java-api:{{% keypop-calypso-crypto-symmetric-java-api-version %}}'
{{< /code>}}
{{< /tab >}}
{{< tab header="Maven" >}}
{{< code lang="xml" copy="true">}}
<dependency>
    <groupId>org.eclipse.keypop</groupId>
    <artifactId>keypop-calypso-crypto-symmetric-java-api</artifactId>
    <version>{{% keypop-calypso-crypto-symmetric-java-api-version %}}</version>
</dependency>
{{< /code>}}
{{< /tab >}}
{{< /tabpane >}}

<br>

## C++ implementation
{{% callout note %}}
Latest version **`{{% keypop-calypso-crypto-symmetric-cpp-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-calypso-crypto-symmetric-cpp-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-crypto-symmetric-cpp-api/)</span>
{{% /callout %}}