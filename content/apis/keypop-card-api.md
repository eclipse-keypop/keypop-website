---
title: Keypop Card API
linktitle: Card API
summary: Internal API which defines the elements shared between the reader layer and the card layer.
type: book
weight: 2
toc: true
---

---
## Overview

The **Card API** is the communication interface between the **Reader Layer** and the **Card Layer** (e.g. Calypso Card API).

The documentation for the specification produced by the **Calypso Networks Association**, on which this API is based,
is available [here](https://terminal-api.calypsonet.org/apis/calypsonet-terminal-card-api/).

--- 

## Java implementation
{{% callout note %}}
**`{{% keypop-card-java-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-card-java-api/)</span>
<span class="component-metadata">{{< icon name="project-diagram" pack="fas" >}} [UML](https://calypsonet.github.io/calypsonet-terminal-card-uml-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-card-java-api/)</span>
<span class="component-metadata">{{< icon name="exchange-alt" pack="fas" >}} [Changelog](https://github.com/eclipse-keypop/keypop-card-java-api/blob/main/CHANGELOG.md)</span>
{{% /callout %}}

All deliverables are available directly from the [Maven Central Repository](https://central.sonatype.com/search?q=keypop-card-java-api) or by using one of the project resource managers below:

{{< tabpane >}}
{{< tab header="Gradle Groovy" lang="gradle" >}}
implementation 'org.eclipse.keypop:keypop-card-java-api:{{% keypop-card-java-api-version %}}'
{{< /tab >}}
{{< tab header="Gradle Kotlin" lang="kotlin" >}}
implementation("org.eclipse.keypop:keypop-card-java-api:{{% keypop-card-java-api-version %}}")
{{< /tab >}}
{{< tab header="Maven" lang="xml" >}}
<dependency>
<groupId>org.eclipse.keypop</groupId>
<artifactId>keypop-card-java-api</artifactId>
<version>{{% keypop-card-java-api-version %}}</version>
</dependency>
{{< /tab >}}
{{< /tabpane >}}

<br>

## C++ implementation
{{% callout note %}}
**`{{% keypop-card-cpp-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-card-cpp-api/)</span>
<span class="component-metadata">{{< icon name="project-diagram" pack="fas" >}} [UML](https://calypsonet.github.io/calypsonet-terminal-card-uml-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-card-cpp-api/)</span>
{{% /callout %}}

<br>

{{% callout note %}}
The third version number (x.y.**z**) only concerns updates of the javadoc because this component does not contain any
implementation, but only an API.
{{% /callout %}}
