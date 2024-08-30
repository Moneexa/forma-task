# Choice of  State Maintenance

* Status: proposed
* Date: 2024-08-29

Technical Story: Decide which state management strategy to use

## Context and Problem Statement

We need to decide strategy  for better state management across the components within our react application.

## Decision Drivers

* Less Code
* Time Constraint
* 0 reliance on 3rd party

## Considered Options

* Redux
* Context API
* Prop drilling

## Decision Outcome

Chosen option: "Context API", because does not require alot of coding, and consumes lesser time. Moreover its React's own built-in lib, therefore 0 reliance on 3rd party especially for a project like this.

## Pros and Cons of the Options

### Redux

A 3rd party library that involves writing states, the actions which change those states, and the corresponding reducers. These reducers in itself invoke actions to change the states

* Good, because A Formal way of managing states across application. Hence increasing well-defined standard.
* Bad, because Alot of boiler plater code has to be written. It wastes time.

### Context API

React's own built in library for creating centrally shared data store.

* Good, because Simpler to write. Takes less time  implementing.
* Bad, because Defining the states in multiple placees which increases frustration sometimes.

### Prop drilling

Shares states between the components using props.

* Good, because Simple and easy to write
* Bad, because Gets messy and difficult to manage when component hierarchy gets complex, especially in big projects.
