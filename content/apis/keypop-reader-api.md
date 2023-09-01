---
title: Keypop Reader API
linktitle: Reader API
summary: Public API which defines the elements shared by the reader.
type: book
weight: 1
toc: true
---

---
## Overview

As part of the **Reader Layer**, the **Reader API** provides high-level functionality for identifying, monitoring, 
configuring readers and process card selection scenarios.

The documentation for the specification produced by the **Calypso Networks Association**, on which this API is based, 
is available [here](https://terminal-api.calypsonet.org/apis/calypsonet-terminal-reader-api/).

--- 

## Java implementation
{{% callout note %}}
**`{{% keypop-reader-java-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-reader-java-api/)</span>
<span class="component-metadata">{{< icon name="project-diagram" pack="fas" >}} [UML](https://calypsonet.github.io/calypsonet-terminal-reader-uml-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-reader-java-api/)</span>
<span class="component-metadata">{{< icon name="exchange-alt" pack="fas" >}} [Changelog](https://github.com/eclipse-keypop/keypop-reader-java-api/blob/main/CHANGELOG.md)</span>
{{% /callout %}}

All deliverables are available directly from the [Maven Central Repository](https://central.sonatype.com/search?q=keypop-reader-java-api) or by using one of the project resource managers below:

{{< tabpane >}}
{{< tab header="Gradle Groovy" lang="gradle" >}}
implementation 'org.eclipse.keypop:keypop-reader-java-api:{{% keypop-reader-java-api-version %}}'
{{< /tab >}}
{{< tab header="Gradle Kotlin" lang="kotlin" >}}
implementation("org.eclipse.keypop:keypop-reader-java-api:{{% keypop-reader-java-api-version %}}")
{{< /tab >}}
{{< tab header="Maven" lang="xml" >}}
<dependency>
  <groupId>org.eclipse.keypop</groupId>
  <artifactId>keypop-reader-java-api</artifactId>
  <version>{{% keypop-reader-java-api-version %}}</version>
</dependency>
{{< /tab >}}
{{< /tabpane >}}

<br>

## C++ implementation
{{% callout note %}}
**`{{% keypop-reader-cpp-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-reader-cpp-api/)</span>
<span class="component-metadata">{{< icon name="project-diagram" pack="fas" >}} [UML](https://calypsonet.github.io/calypsonet-terminal-reader-uml-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-reader-cpp-api/)</span>
{{% /callout %}}

<br>

{{% callout note %}}
The third version number (x.y.**z**) only concerns updates of the javadoc because this component does not contain any
implementation, but only an API.
{{% /callout %}}