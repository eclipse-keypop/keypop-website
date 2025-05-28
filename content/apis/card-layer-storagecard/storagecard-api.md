---
title: Storage Card API (external)
linktitle: 🟢 Storage Card
summary: Public high-level API which standardizes the way to interact with storage cards (NXP Mifare Ultralight, ST Microelectronics ST25 / SRT512, etc.).
type: book
weight: 1
toc: true
---

{{% callout note %}}
{{< icon name="project-diagram" pack="fas" >}} [UML class diagram](https://docs.terminal-api.calypsonet.org/calypsonet-terminal-storagecard-uml-api/)
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [Design guide](https://terminal-api.calypsonet.org/specifications/card-layer-storagecard/storagecard-api/)</span>
<span class="component-metadata">{{< icon name="exchange-alt" pack="fas" >}} [Changelog](https://github.com/eclipse-keypop/keypop-storagecard-java-api/blob/main/CHANGELOG.md)</span>
{{% /callout %}}

As part of the **Card Layer**, the **Storage Card API** provides high-level functionality for selecting and performing
transactions with storage cards (NXP Mifare Ultralight, ST Microelectronics ST25 / SRT512, etc.).

<br>

## Java implementation
{{% callout note %}}
Latest version **`{{% keypop-storagecard-java-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://docs.keypop.org/keypop-storagecard-java-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-storagecard-java-api/)</span>
{{% /callout %}}

All deliverables are available directly from the [Maven Central Repository](https://central.sonatype.com/search?q=keypop-storagecard-java-api) or by using one of the project resource managers below:

{{< tabpane >}}
{{< tab header="Gradle Kotlin" >}}
{{< code lang="kotlin" copy="true">}}
implementation("org.eclipse.keypop:keypop-storagecard-java-api:{{% keypop-storagecard-java-api-version %}}")
{{< /code>}}
{{< /tab >}}
{{< tab header="Gradle Groovy" >}}
{{< code lang="gradle" copy="true">}}
implementation 'org.eclipse.keypop:keypop-storagecard-java-api:{{% keypop-storagecard-java-api-version %}}'
{{< /code>}}
{{< /tab >}}
{{< tab header="Maven" >}}
{{< code lang="xml" copy="true">}}
<dependency>
    <groupId>org.eclipse.keypop</groupId>
    <artifactId>keypop-storagecard-java-api</artifactId>
    <version>{{% keypop-storagecard-java-api-version %}}</version>
</dependency>
{{< /code>}}
{{< /tab >}}
{{< /tabpane >}}

<br>

## C++ implementation
{{% callout note %}} Coming soon {{% /callout %}}