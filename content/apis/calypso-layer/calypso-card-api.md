---
title: Calypso Card API (external)
linktitle: 🟢 Calypso Card
summary: Public high-level API which standardizes the way to interact with a Calypso® product (card, NFC smartphone applet/application, SAM, etc.).
type: book
weight: 1
toc: true
---
<style>
table th:nth-child(1) {
  width: 12rem;
}
</style>

## Overview

|                                                                    |                                                                                                                          |
|--------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| {{< icon name="file-alt" pack="fas" >}} **Description**            | The **Calypso Card API** provides high-level functionality for selecting and performing transactions with Calypso cards. |
| {{< icon name="layer-group" pack="fas" >}} **Specification Layer** | Card Layer.                                                                                                              |
| {{< icon name="users" pack="fas" >}} **Intended Audience**         | Developers implementing the Calypso Card layer or creating Keypop-based applications targeting Calypso cards.            |
| {{< icon name="laptop" pack="fas" >}} **Compatible OS**            | Windows, Linux, macOS, Android.                                                                                          |
| {{< icon name="code-branch" pack="fas" >}} **Versioning Note**     | {{< content-include file="api-versioning-note" >}}                                                                       |

## Implementations

{{< tabpane showCopyButton="false" >}}

{{< tab header="Java" >}}

<table>
<thead><tr><th></th><th></th></tr></thead>
<tbody>
  <tr>
    <td>{{< icon name="tag" pack="fas" >}} <strong>Latest Version</strong></td>
    <td><strong><code>{{% keypop-calypso-card-java-api-version %}}</code></strong></td>
  </tr>
  <tr>
    <td>{{< icon name="exchange-alt" pack="fas" >}} <a href="https://github.com/eclipse-keypop/keypop-calypso-card-java-api/blob/main/CHANGELOG.md">Changelog</a></td>
    <td>List of changes and new features introduced in each release.</td>
  </tr>
  <tr>
    <td>{{< icon name="github" pack="fab" >}} <a href="https://github.com/eclipse-keypop/keypop-calypso-card-java-api/">GitHub</a></td>
    <td>Source code repository and issue tracker for the Java project.</td>
  </tr>
  <tr>
    <td>{{< icon name="book" pack="fas" >}} <a href="https://terminal-api.calypsonet.org/specifications/calypso-layer/calypso-card-api/">Design Guide</a></td>
    <td>CNA guide describing the design principles and intended usage of the current Terminal API.</td>
  </tr>
  <tr>
    <td>{{< icon name="file-code" pack="fas" >}} <a href="https://docs.keypop.org/keypop-calypso-card-java-api/">API Reference</a></td>
    <td>Complete documentation of all classes and methods in the Java API.</td>
  </tr>
  <tr>
    <td>{{< icon name="sitemap" pack="fas" >}} <a href="https://docs.terminal-api.calypsonet.org/calypsonet-terminal-calypso-card-uml-api/">UML Class Diagram</a></td>
    <td>CNA UML diagram showing the structure and relationships between classes.</td>
  </tr>
  <tr>
    <td>{{< icon name="database" pack="fas" >}} <a href="https://central.sonatype.com/search?q=keypop-calypso-card-java-api">Maven Central</a></td>
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
    <td><strong><code>{{% keypop-calypso-card-cpp-api-version %}}</code></strong></td>
  </tr>
  <tr>
    <td>{{< icon name="exchange-alt" pack="fas" >}} <a href="https://github.com/eclipse-keypop/keypop-calypso-card-cpp-api/releases/">Release History</a></td>
    <td>List of published releases and related release notes.</td>
  </tr>
  <tr>
    <td>{{< icon name="github" pack="fab" >}} <a href="https://github.com/eclipse-keypop/keypop-calypso-card-cpp-api/">GitHub</a></td>
    <td>Source code repository and documentation for the C++ project.</td>
  </tr>
  <tr>
    <td>{{< icon name="book" pack="fas" >}} <a href="https://terminal-api.calypsonet.org/specifications/calypso-layer/calypso-card-api/">Design Guide</a></td>
    <td>CNA guide describing the design principles and intended usage of the current Terminal API.</td>
  </tr>
  <tr>
    <td>{{< icon name="file-code" pack="fas" >}} <a href="https://docs.keypop.org/keypop-calypso-card-cpp-api/">API Reference</a></td>
    <td>Complete documentation of all classes and functions in the C++ API.</td>
  </tr>
  <tr>
    <td>{{< icon name="sitemap" pack="fas" >}} <a href="https://docs.terminal-api.calypsonet.org/calypsonet-terminal-calypso-card-uml-api/">UML Class Diagram</a></td>
    <td>CNA UML diagram showing the structure and relationships between classes.</td>
  </tr>
</tbody>
</table>

{{< content-include file="note-about-cpp" >}}

{{< /tab >}}

{{< /tabpane >}}