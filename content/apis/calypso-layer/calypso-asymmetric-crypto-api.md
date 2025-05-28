---
title: Calypso Asymmetric Crypto API (internal)
linktitle: 🔶 Asymmetric Crypto
summary: Internal API which defines the elements shared between the Calypso Card and the Calypso Asymmetric Crypto libraries.
type: book
weight: 4
toc: true
---

{{% callout note %}}
{{< icon name="project-diagram" pack="fas" >}} [UML class diagram](https://docs.terminal-api.calypsonet.org/calypsonet-terminal-calypso-crypto-asymmetric-uml-api/)
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [Design guide](https://terminal-api.calypsonet.org/specifications/calypso-layer/calypso-asymmetric-crypto-api/)</span>
<span class="component-metadata">{{< icon name="exchange-alt" pack="fas" >}} [Changelog](https://github.com/eclipse-keypop/keypop-calypso-crypto-asymmetric-java-api/blob/main/CHANGELOG.md)</span>
{{% /callout %}}

The **Calypso Crypto Asymmetric API** is the communication interface between the **Calypso Card** and the
**Calypso Asymmetric Crypto** libraries.

<br>

## Java implementation
{{% callout note %}}
Latest version **`{{% keypop-calypso-crypto-asymmetric-java-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://docs.keypop.org/keypop-calypso-crypto-asymmetric-java-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-crypto-asymmetric-java-api/)</span>
{{% /callout %}}

All deliverables are available directly from the [Maven Central Repository](https://central.sonatype.com/search?q=keypop-calypso-crypto-asymmetric-java-api) or by using one of the project resource managers below:

{{< tabpane >}}
{{< tab header="Gradle Kotlin" >}}
{{< code lang="kotlin" copy="true">}}
implementation("org.eclipse.keypop:keypop-calypso-crypto-asymmetric-java-api:{{% keypop-calypso-crypto-asymmetric-java-api-version %}}")
{{< /code>}}
{{< /tab >}}
{{< tab header="Gradle Groovy" >}}
{{< code lang="gradle" copy="true">}}
implementation 'org.eclipse.keypop:keypop-calypso-crypto-asymmetric-java-api:{{% keypop-calypso-crypto-asymmetric-java-api-version %}}'
{{< /code>}}
{{< /tab >}}
{{< tab header="Maven" >}}
{{< code lang="xml" copy="true">}}
<dependency>
    <groupId>org.eclipse.keypop</groupId>
    <artifactId>keypop-calypso-crypto-asymmetric-java-api</artifactId>
    <version>{{% keypop-calypso-crypto-asymmetric-java-api-version %}}</version>
</dependency>
{{< /code>}}
{{< /tab >}}
{{< /tabpane >}}

<br>

## C++ implementation
{{% callout note %}}
Latest version **`{{% keypop-calypso-crypto-asymmetric-cpp-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-calypso-crypto-asymmetric-cpp-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-crypto-asymmetric-cpp-api/)</span>
{{% /callout %}}