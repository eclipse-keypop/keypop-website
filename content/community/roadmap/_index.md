---
title: Project roadmap
linktitle: Roadmap
summary: Overview of past and future Keypop Releases.
type: book
toc: true
weight: 3
---

Keypop developments follow the definitions of [ticketing terminal API](https://terminal-api.calypsonet.org/) issued by [CNA](https://calypsonet.org/): , starting with an initial development in Java for each interface evolution, followed by a porting in C++.

## Current work and future developments
- Starting in 2026, we plan to offer high-level APIs for operating secure channels that comply with the GlobalPlatform standard (for managing applets on Java Card platforms).
- At the end of 2026, we plan to extend the Calypso APIs to support the integration of new security module solutions based on the Calypso 'OpenSAM' specification.
- The Storage Card APIs will also soon be ported to C++.

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
    <td rowspan="2">Reader</td>
    <td>2.1</td>
    <td>simplification & harmonisation of channel closure</td>
    <td>2025/11</td>
    <td>in progress</td>
  </tr>
  <tr>
    <td>2.0</td>
    <td>1st stable release</td>
    <td>2023/11</td>
    <td>2025/09</td>
  </tr>
  <tr>
    <td>Card</td>
    <td>2.0</td>
    <td>1st stable release</td>
    <td>2023/11</td>
    <td>2025/09</td>
  </tr>
  <tr>
    <td rowspan="3">Calypso Card</td>
    <td>2.2</td>
    <td>simplification & harmonisation of channel closure</td>
    <td>2024/04</td>
    <td>in progress</td>    
  </tr>
  <tr>
    <td>2.1</td>
    <td>PKI-based card secure session added</td>
    <td>2024/04</td>
    <td>2025/09</td>    
  </tr>
  <tr>
    <td>2.0</td>
    <td>1st stable release</td>
    <td>2023/11</td>
    <td>2024/12</td>
  </tr>
  <tr>
    <td>Calypso Crypto Symmetric</td>
    <td>0.1</td>
    <td>1st stable release</td>
    <td>2023/11</td>
    <td>2024/12</td>
  </tr>
  <tr>
    <td rowspan="2">Calypso Crypto Asymmetric</td>
    <td>0.2</td>
    <td>stable redesign</td>
    <td>2024/04</td>
    <td>2024/12</td>
  </tr>
  <tr>
    <td>0.1</td>
    <td>1st architectural attempt</td>
    <td>2023/11</td>
    <td>skipped</td>
  </tr>
  <tr>
    <td rowspan="5">Calypso Legacy SAM</td>
    <td>1.0</td>
    <td>simplification & harmonisation of channel closure</td>
    <td>2025/11</td>
    <td>in progress</td>
  </tr>
  <tr>
    <td>0.6</td>
    <td>Get Data support on selection</td>
    <td>2024/04</td>
    <td>2024/12</td>
  </tr>
  <tr>
    <td>0.5</td>
    <td>issuance of CACert certificates for PKI card personalization</td>
    <td>2024/04</td>
    <td>skipped</td>
  </tr>
  <tr>
    <td>0.4</td>
    <td>added SAM lock support</td>
    <td>2024/01</td>
    <td>skipped</td>
  </tr>
  <tr>
    <td>0.3</td>
    <td>1st stable release</td>
    <td>2023/11</td>
    <td>skipped</td>
  </tr>  
</tbody>
</table>
