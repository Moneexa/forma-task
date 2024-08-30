# Choice of development tool

* Status: proposed
* Date: 2024-08-29

Technical Story: Choice of developmental tool

## Context and Problem Statement

We want to decide which tool our app should be built on.

## Decision Drivers

* Reusability
* Time Constraint
* Reactivity
* State Persistence

## Considered Options

* HTML
* A Modern Web Development Framework

## Decision Outcome

Chosen option: "A Modern Web Development Framework", because Its better since the code reusability will improve. Moreover the reactivity and state management is well handled in modern frameworks. We dont have to write a lot of manual code for managing the states and reactivity within application.

## Pros and Cons of the Options

### HTML

simple html, css with vanilla JS

* Good, because Simple and straightforward setup.
* Good, because No additional dependencies or learning curves for frameworks.
* Bad, because Cant make reusable components in it, that could help developer understand the reuse the code.
* Bad, because Alot of manual code needs to be written for state persistence, hence consuming time.
* Bad, because Reactivity is manageable but again requires alot of time writing manual code for it.

### A Modern Web Development Framework

Any modern web development framework like React/Angular/Svelt/Vue

* Good, because It fulfills the reusability concern of the product. We can make different small components using frameworks. Those will help the incoming developers reuse and understand the code in less time
* Good, because Modern Frameworks are easy to work with, hence save time
* Good, because Frameworks have better management of reactivity and state maintenance.
* Bad, because May require an initial investment of time to learn the framework, especially for developers unfamiliar with it.
* Bad, because Relies on external libraries and dependencies, which can lead to versioning and compatibility issues over time.
* Bad, because In some cases, the abstraction layers introduced by frameworks can lead to performance overhead compared to vanilla JS.
