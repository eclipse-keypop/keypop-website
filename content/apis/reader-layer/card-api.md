---
title: Card API (internal)
linktitle: 🔶 Card
summary: Internal API which defines the elements shared between the reader layer and the card layer.
type: book
weight: 2
toc: true
---
<style>
table th:nth-child(1) {
  width: 12rem;
}
</style>

## Overview

|                                                                    |                                                                                                                                            |
|--------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| {{< icon name="file-alt" pack="fas" >}} **Description**            | The **Card API** defines the internal elements shared by the reader layer to implement specific card layers (like the Calypso Card Layer). |
| {{< icon name="layer-group" pack="fas" >}} **Specification Layer** | Reader Layer.                                                                                                                              |
| {{< icon name="users" pack="fas" >}} **Intended Audience**         | Developers implementing the Reader or Card layer.                                                                                          |
| {{< icon name="laptop" pack="fas" >}} **Compatible OS**            | Windows, Linux, macOS, Android.                                                                                                            |
| {{< icon name="code-branch" pack="fas" >}} **Versioning Note**     | {{< content-include file="api-versioning-note" >}}                                                                                         |

## Implementations

{{< tabpane showCopyButton="false" >}}

{{< tab header="Java" >}}

<table>
<thead><tr><th></th><th></th></tr></thead>
<tbody>
  <tr>
    <td>{{< icon name="tag" pack="fas" >}} <strong>Latest Version</strong></td>
    <td><strong><code>{{% keypop-card-java-api-version %}}</code></strong></td>
  </tr>
  <tr>
    <td>{{< icon name="exchange-alt" pack="fas" >}} <a href="https://github.com/eclipse-keypop/keypop-card-java-api/blob/main/CHANGELOG.md">Changelog</a></td>
    <td>List of changes and new features introduced in each release.</td>
  </tr>
  <tr>
    <td>{{< icon name="github" pack="fab" >}} <a href="https://github.com/eclipse-keypop/keypop-card-java-api/">GitHub</a></td>
    <td>Source code repository and issue tracker for the Java project.</td>
  </tr>
  <tr>
    <td>{{< icon name="book" pack="fas" >}} <a href="https://terminal-api.calypsonet.org/specifications/reader-layer/card-api/">Design Guide</a></td>
    <td>CNA guide describing the design principles and intended usage of the current Terminal API.</td>
  </tr>
  <tr>
    <td>{{< icon name="file-code" pack="fas" >}} <a href="https://docs.keypop.org/keypop-card-java-api/">API Reference</a></td>
    <td>Complete documentation of all classes and methods in the Java API.</td>
  </tr>
  <tr>
    <td>{{< icon name="sitemap" pack="fas" >}} <a href="https://docs.terminal-api.calypsonet.org/calypsonet-terminal-card-uml-api/">UML Class Diagram</a></td>
    <td>CNA UML diagram showing the structure and relationships between classes.</td>
  </tr>
  <tr>
    <td>{{< icon name="database" pack="fas" >}} <a href="https://central.sonatype.com/search?q=keypop-card-java-api">Maven Central</a></td>
    <td>Official Maven Central page to include the Java component in your project.</td>
  </tr>
</tbody>
</table>

{{< /tab >}}

{{< tab header="C++" >}}

<table>
<thead><tr><th></th><th></th></tr></thead>
<tbody>
  <tr>
    <td>{{< icon name="tag" pack="fas" >}} <strong>Latest Version</strong></td>
    <td><strong><code>{{% keypop-card-cpp-api-version %}}</code></strong></td>
  </tr>
  <tr>
    <td>{{< icon name="exchange-alt" pack="fas" >}} <a href="https://github.com/eclipse-keypop/keypop-card-cpp-api/releases/">Release History</a></td>
    <td>List of published releases and related release notes.</td>
  </tr>
  <tr>
    <td>{{< icon name="github" pack="fab" >}} <a href="https://github.com/eclipse-keypop/keypop-card-cpp-api/">GitHub</a></td>
    <td>Source code repository and documentation for the C++ project.</td>
  </tr>
  <tr>
    <td>{{< icon name="book" pack="fas" >}} <a href="https://terminal-api.calypsonet.org/specifications/reader-layer/card-api/">Design Guide</a></td>
    <td>CNA guide describing the design principles and intended usage of the current Terminal API.</td>
  </tr>
  <tr>
    <td>{{< icon name="file-code" pack="fas" >}} <a href="https://docs.keypop.org/keypop-card-cpp-api/">API Reference</a></td>
    <td>Complete documentation of all classes and functions in the C++ API.</td>
  </tr>
  <tr>
    <td>{{< icon name="sitemap" pack="fas" >}} <a href="https://docs.terminal-api.calypsonet.org/calypsonet-terminal-card-uml-api/">UML Class Diagram</a></td>
    <td>CNA UML diagram showing the structure and relationships between classes.</td>
  </tr>
</tbody>
</table>

{{< content-include file="note-about-cpp" >}}

{{< /tab >}}

{{< /tabpane >}}