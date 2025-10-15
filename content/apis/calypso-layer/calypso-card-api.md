---
title: Calypso Card API (external)
linktitle: 🟢 Calypso Card
summary: Public high-level API which standardizes the way to interact with a Calypso® product (card, NFC smartphone applet/application, SAM, etc.).
type: book
weight: 1
toc: true
---

{{% callout note %}}
{{< icon name="project-diagram" pack="fas" >}} [UML class diagram](https://docs.terminal-api.calypsonet.org/calypsonet-terminal-calypso-card-uml-api/)
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [Design guide](https://terminal-api.calypsonet.org/specifications/calypso-layer/calypso-card-api/)</span>
<span class="component-metadata">{{< icon name="exchange-alt" pack="fas" >}} [Changelog](https://github.com/eclipse-keypop/keypop-calypso-card-java-api/blob/main/CHANGELOG.md)</span>
{{% /callout %}}

As part of the **Card Layer**, the **Calypso Card API** provides high-level functionality for selecting and performing
transactions with Calypso cards.

<br>

## Java implementation
{{% callout note %}}
Latest version **`{{% keypop-calypso-card-java-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://docs.keypop.org/keypop-calypso-card-java-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-card-java-api/)</span>
{{% /callout %}}

All deliverables are available directly from the [Maven Central Repository](https://central.sonatype.com/search?q=keypop-calypso-card-java-api) or by using one of the project resource managers below:

{{< tabpane >}}
{{< tab header="Gradle Kotlin" >}}
{{< code lang="kotlin" copy="true">}}
implementation("org.eclipse.keypop:keypop-calypso-card-java-api:{{% keypop-calypso-card-java-api-version %}}")
{{< /code>}}
{{< /tab >}}
{{< tab header="Gradle Groovy" >}}
{{< code lang="gradle" copy="true">}}
implementation 'org.eclipse.keypop:keypop-calypso-card-java-api:{{% keypop-calypso-card-java-api-version %}}'
{{< /code>}}
{{< /tab >}}
{{< tab header="Maven" >}}
{{< code lang="xml" copy="true">}}
<dependency>
    <groupId>org.eclipse.keypop</groupId>
    <artifactId>keypop-calypso-card-java-api</artifactId>
    <version>{{% keypop-calypso-card-java-api-version %}}</version>
</dependency>
{{< /code>}}
{{< /tab >}}
{{< /tabpane >}}

<br>

## C++ implementation
{{% callout note %}}
Latest version **`{{% keypop-calypso-card-cpp-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://docs.keypop.org/keypop-calypso-card-cpp-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-card-cpp-api/)</span>
{{% /callout %}}