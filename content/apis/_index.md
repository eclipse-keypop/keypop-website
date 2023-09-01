---
title: Keypop architecture - APIs & software layers
linktitle: Overview
summary: General presentation of the dependencies between the different Keypop APIs.
type: book
toc: false
---

---
Keypop offers a set of interfaces based on the specifications from the **Calypso Networks Association**, for the 
creation of software components dedicated to the management of smart card readers and smart card applications.

The diagram below shows the dependencies between the client application, the Keypop APIs and their implementations:

{{< figure src="/media/uml/apis_dependencies_overview.drawio.svg" caption="" numbered="" >}}

Key points:
* **Independent Lifecycle:** Each API follows its own distinct lifecycle.
* **Interface-Exclusive:** APIs exclusively consist of interfaces.
* **Public APIs:** Some APIs are intended to be used by application developers.
* **Internal Usage:** Some APIs are dedicated to internal use, and intended to developers of Keypop-based 
implementations.