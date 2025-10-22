---
title: Storage Card API (external)
linktitle: 🟢 Storage Card
summary: Public high-level API which standardizes the way to interact with storage cards (NXP Mifare Ultralight, ST Microelectronics ST25 / SRT512, etc.).
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

|                                                                    |                                                                                                                                                                                           |
|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| {{< icon name="file-alt" pack="fas" >}} **Description**            | The **Storage Card API** provides high-level functionality for selecting and performing transactions with storage cards (NXP Mifare Ultralight, ST Microelectronics ST25 / SRT512, etc.). |
| {{< icon name="layer-group" pack="fas" >}} **Specification Layer** | Card Layer.                                                                                                                                                                               |
| {{< icon name="users" pack="fas" >}} **Intended Audience**         | Developers implementing a Storage Card extension or creating Keypop-based applications targeting storage cards.                                                                           |
| {{< icon name="laptop" pack="fas" >}} **Compatible OS**            | Windows, Linux, macOS, Android.                                                                                                                                                           |
| {{< icon name="code-branch" pack="fas" >}} **Versioning Note**     | {{< content-include file="api-versioning-note" >}}                                                                                                                                        |

## Implementations

{{< tabpane showCopyButton="false" >}}

{{< tab header="Java" >}}

<table>
<thead><tr><th></th><th></th></tr></thead>
<tbody>
  <tr>
    <td>{{< icon name="tag" pack="fas" >}} <strong>Latest Version</strong></td>
    <td><strong><code>{{% keypop-storagecard-java-api-version %}}</code></strong></td>
  </tr>
  <tr>
    <td>{{< icon name="exchange-alt" pack="fas" >}} <a href="https://github.com/eclipse-keypop/keypop-storagecard-java-api/blob/main/CHANGELOG.md">Changelog</a></td>
    <td>List of changes and new features introduced in each release.</td>
  </tr>
  <tr>
    <td>{{< icon name="github" pack="fab" >}} <a href="https://github.com/eclipse-keypop/keypop-storagecard-java-api/">GitHub</a></td>
    <td>Source code repository and issue tracker for the Java project.</td>
  </tr>
  <tr>
    <td>{{< icon name="book" pack="fas" >}} <a href="https://terminal-api.calypsonet.org/specifications/card-layer-storagecard/storagecard-api/">Design Guide</a></td>
    <td>CNA guide describing the design principles and intended usage of the current Terminal API.</td>
  </tr>
  <tr>
    <td>{{< icon name="file-code" pack="fas" >}} <a href="https://docs.keypop.org/keypop-storagecard-java-api/">API Reference</a></td>
    <td>Complete documentation of all classes and methods in the Java API.</td>
  </tr>
  <tr>
    <td>{{< icon name="sitemap" pack="fas" >}} <a href="https://docs.terminal-api.calypsonet.org/calypsonet-terminal-storagecard-uml-api/">UML Class Diagram</a></td>
    <td>CNA UML diagram showing the structure and relationships between classes.</td>
  </tr>
  <tr>
    <td>{{< icon name="database" pack="fas" >}} <a href="https://central.sonatype.com/search?q=keypop-storagecard-java-api">Maven Central</a></td>
    <td>Official Maven Central page to include the Java component in your project.</td>
  </tr>
</tbody>
</table>

{{< /tab >}}

{{< /tabpane >}}