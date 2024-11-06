---
title: Project roadmap
linktitle: Roadmap
summary: Overview of past and future Keypop Releases.
type: book
toc: true
weight: 2
---

Keypop developments follow the definitions of [ticketing terminal API](https://terminal-api.calypsonet.org/) issued by [CNA](https://calypsonet.org/): , starting with an initial development in Java for each interface evolution, followed by a porting in C++.
Keypop APIs are initially be versioned as a release candidate until a first implementation has been completed to validate the interfaces (e.g. [on Eclipse Keyple](https://keyple.org/community/roadmap/#current-work)).

## Current work and future developments
- For the first quarter of 2025, we plan to release the Keypop C++ APIs (currently available as a release candidate) in stable version 2.x.
- During 2025, a new interface dedicated to the administration of a Calypso security module of the 'OpenSAM' type should be developed.

## History of developments
The information on functional evolutions for each Keypop API version matches precisely those indicated in the [ticketing terminal API development history](https://terminal-api.calypsonet.org/community/roadmap/#history-of-developments).
Here's the development integration history for each interface by programming language.

<table>
<thead>
  <tr>
    <th rowspan="2">Terminal API</th>
    <th rowspan="2">Version</th>
    <th rowspan="2">Short Summary</th>
    <th colspan="2">Availability Date</th>   
  </tr>
  <tr>
    <th>Java</th>
    <th>C++</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Reader</td>
    <td>2.0</td>
    <td>first stable release</td>
    <td>2023/11</td>
    <td>candidate 2024/08</td>
  </tr>
  <tr>
    <td>Card</td>
    <td>2.0</td>
    <td>first stable release</td>
    <td>2023/11</td>
    <td>candidate 2024/08</td>
  </tr>
  <tr>
    <td rowspan="2">Calypso Card</td>
    <td>2.0</td>
    <td>first stable release</td>
    <td>2023/11</td>
    <td>candidate 2024/08</td>
  </tr>
  <tr>
    <td>2.1</td>
    <td>PKI-based card secure session added</td>
    <td>2024/04</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Calypso Crypto Symmetric</td>
    <td>0.1</td>
    <td>first stable release</td>
    <td>2023/11</td>
    <td>2024/08 candidate</td>
  </tr>
  <tr>
    <td rowspan="2">Calypso Crypto Asymmetric</td>
    <td>0.1</td>
    <td>first architectural attempt</td>
    <td>2023/11</td>
    <td>skipped</td>
  </tr>
  <tr>
    <td>0.2</td>
    <td>stable redesign</td>
    <td>2024/04</td>
    <td>2024/08 candidate</td>
  </tr>
  <tr>
    <td rowspan="4">Calypso Legacy SAM</td>
    <td>0.3</td>
    <td>first stable release</td>
    <td>2023/11</td>
    <td>skipped</td>
  </tr>
  <tr>
    <td>0.4</td>
    <td>added SAM lock support</td>
    <td>2024/01</td>
    <td>skipped</td>
  </tr>
  <tr>
    <td>0.5</td>
    <td>issuance of CACert certificates for PKI card personalization</td>
    <td>2024/04</td>
    <td>skipped</td>
  </tr>
  <tr>
    <td>0.6</td>
    <td>Get Data support on selection</td>
    <td>2024/04</td>
    <td>2024/08 candidate</td>
  </tr>
</tbody>
</table>
