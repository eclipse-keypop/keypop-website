---
title: Card API (internal)
linktitle: 🔶 Card
summary: Internal API which defines the elements shared between the reader layer and the card layer.
type: book
weight: 2
toc: true
---

{{% callout note %}}
{{< icon name="project-diagram" pack="fas" >}} [UML class diagram](https://docs.terminal-api.calypsonet.org/calypsonet-terminal-card-uml-api/)
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [Design guide](https://terminal-api.calypsonet.org/specifications/reader-layer/card-api/)</span>
<span class="component-metadata">{{< icon name="exchange-alt" pack="fas" >}} [Changelog](https://github.com/eclipse-keypop/keypop-card-java-api/blob/main/CHANGELOG.md)</span>
{{% /callout %}}

As part of the **Reader Layer**, the **Card API** defines the internal elements shared by the
reader layer to implement specific card layers (like the Calypso Card Layer).

<br>

## Java implementation
{{% callout note %}}
Latest version **`{{% keypop-card-java-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://docs.keypop.org/keypop-card-java-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-card-java-api/)</span>
{{% /callout %}}

All deliverables are available directly from the [Maven Central Repository](https://central.sonatype.com/search?q=keypop-card-java-api) or by using one of the project resource managers below:

{{< tabpane >}}
{{< tab header="Gradle Kotlin" >}}
{{< code lang="kotlin" copy="true">}}
implementation("org.eclipse.keypop:keypop-card-java-api:{{% keypop-card-java-api-version %}}")
{{< /code>}}
{{< /tab >}}
{{< tab header="Gradle Groovy" >}}
{{< code lang="gradle" copy="true">}}
implementation 'org.eclipse.keypop:keypop-card-java-api:{{% keypop-card-java-api-version %}}'
{{< /code>}}
{{< /tab >}}
{{< tab header="Maven" >}}
{{< code lang="xml" copy="true">}}
<dependency>
    <groupId>org.eclipse.keypop</groupId>
    <artifactId>keypop-card-java-api</artifactId>
    <version>{{% keypop-card-java-api-version %}}</version>
</dependency>
{{< /code>}}
{{< /tab >}}
{{< /tabpane >}}

<br>

## C++ implementation
{{% callout note %}}
Latest version **`{{% keypop-card-cpp-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://docs.keypop.org/keypop-card-cpp-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-card-cpp-api/)</span>
{{% /callout %}}