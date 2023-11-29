---
title: Keypop Calypso Crypto Symmetric API
linktitle: Calypso Crypto Symmetric API
summary: Internal API which defines the elements shared between the Calypso Card and the Calypso Symmetric Crypto libraries.
type: book
weight: 4
toc: true
---

---
## Overview

The **Calypso Crypto Symmetric API** is the communication interface between the **Calypso Card** and the 
**Calypso Symmetric Crypto** libraries (e.g. Legacy SAM, Open SAM).

The documentation for the specification produced by the **Calypso Networks Association**, on which this API is based,
is available [here](https://calypsonet.org/).

---
## Interfaces

![Card API - class diagram](https://calypsonet.github.io/calypsonet-terminal-calypso-crypto-symmetric-uml-api/{{% keypop-calypso-crypto-symmetric-java-api-version %}}/api_class_diagram.svg)

---
#
## Implementations & API Documentation

{{% callout note %}}
The third version number (x.y.**z**) only concerns updates of the javadoc because this component does not contain any
implementation, but only an API.
{{% /callout %}}

### Java implementation
{{% callout note %}}
**`{{% keypop-calypso-crypto-symmetric-java-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-calypso-crypto-symmetric-java-api/)</span>
<span class="component-metadata">{{< icon name="project-diagram" pack="fas" >}} [UML](https://calypsonet.github.io/calypsonet-terminal-calypso-crypto-symmetric-uml-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-crypto-symmetric-java-api/)</span>
<span class="component-metadata">{{< icon name="exchange-alt" pack="fas" >}} [Changelog](https://github.com/eclipse-keypop/keypop-calypso-crypto-symmetric-java-api/blob/main/CHANGELOG.md)</span>
{{% /callout %}}

All deliverables are available directly from the [Maven Central Repository](https://central.sonatype.com/search?q=keypop-calypso-crypto-symmetric-java-api) or by using one of the project resource managers below:

{{< tabpane >}}
{{< tab header="Gradle Groovy" >}}
{{< code lang="gradle" copy="true">}}
implementation 'org.eclipse.keypop:keypop-calypso-crypto-symmetric-java-api:{{% keypop-calypso-crypto-symmetric-java-api-version %}}'
{{< /code>}}
{{< /tab >}}
{{< tab header="Gradle Kotlin" >}}
{{< code lang="kotlin" copy="true">}}
implementation("org.eclipse.keypop:keypop-calypso-crypto-symmetric-java-api:{{% keypop-calypso-crypto-symmetric-java-api-version %}}")
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

### C++ implementation
{{% callout note %}}
**`{{% keypop-calypso-crypto-symmetric-cpp-api-version %}}`**
<span class="component-metadata">{{< icon name="book" pack="fas" >}} [API documentation](https://eclipse-keypop.github.io/keypop-calypso-crypto-symmetric-cpp-api/)</span>
<span class="component-metadata">{{< icon name="project-diagram" pack="fas" >}} [UML](https://calypsonet.github.io/calypsonet-terminal-calypso-crypto-symmetric-uml-api/)</span>
<span class="component-metadata">{{< icon name="github" pack="fab" >}} [GitHub repository](https://github.com/eclipse-keypop/keypop-calypso-crypto-symmetric-cpp-api/)</span>
{{% /callout %}}

