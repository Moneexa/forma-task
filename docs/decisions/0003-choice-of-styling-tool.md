# Choice of Styling tool

* Status: proposed
* Date: 2024-08-29

Technical Story: strategy selection for styling

## Context and Problem Statement

We want to decide which tool to use for styling components in our app.

## Decision Drivers

* Code Readability
* Zero Runtime
* Error-prone code

## Considered Options

* Tailwind/Bootstrap
* styled components
* vanilla extract js
* modular css

## Decision Outcome

Chosen option: "vanilla extract js", because it makes the css more readable. 0 runtime. helps the developer writing error free code.

## Pros and Cons of the Options

### Tailwind/Bootstrap

Tailwind or Bootstraps are libraries that help us write styles for the components without writing any css. We can simply write styles based on classnames for our react components.

* Good, because Allows for quick prototyping and development with predefined utility classes.
* Good, because Enforces standard and consisten styling across the app with pre-defined classes.
* Bad, because Code readability is poor. The short forms for styled classes is not understandable as such. One needs to remember which classname represent which css. Moroever, developer upon giving any wrong classnames, dont get any error, which means writing error-prone code is difficult here.

### styled components

styled components are css based components.

* Good, because Ensures that styles are scoped to the component, avoiding conflicts.
* Good, because Supports dynamic styling based on component props.
* Bad, because gets added in the dom tree as a seperate jsx element, which increases runtime.

### vanilla extract js

leverages the power of modular css and styled components. Once stylings are defined as styled components, they can be used as classnames within the frontend components.

* Good, because it does not have any runtime.
* Good, because Moreover it improves code readability by making  the classnames visible to the components.
* Good, because There is a least chance that developer will provide wrong classnames since it improves intellisense.
* Bad, because Might have a steeper learning curve for developers new to the tool.
* Bad, because Requires inital setup

### modular css

* Good, because Ensures styles are scoped to the component, preventing global style conflicts.
* Good, because Uses standard CSS, which is familiar to most developers.
* Bad, because There is a chance of giving wrong classnames to the components since developer will have to remember which classnames are for which component. Since it does not provide intellisense based suggestions, therefore writing error full code is more possible. Therefore the chance of error full code is high.
