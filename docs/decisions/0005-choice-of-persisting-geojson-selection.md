# Choice of Persisting GeoJson Selection

* Status: proposed
* Date: 2024-08-29

Technical Story: Decide how to manage the featureCollection selection

## Context and Problem Statement

We want to decide how to maintain the state of featureCollection selection.

## Decision Drivers

* Simplicity-easier to understand
* Time constraint
* Less lines of code.

## Considered Options

* Use indexes
* Assign unique ids to each featureCollection

## Decision Outcome

Chosen option: "Use indexes", because simple to use. less lines of code. and takes less time.

### Positive Consequences

* Easier to implement, less lines of code.

### Negative Consequences

* Can get problematic if modifications are made to solution/featureCollection list.

## Pros and Cons of the Options

### Use indexes

We have a list of FeatureCollection/Solution. Which means each of them have their own index. Therefore use them to set the state of selected featureCollection as the index.

* Good, because Index would be unique for each solution/featureCollection. It requires less lines of code to get the index and update the state of selected solution/featureCollection.
* Bad, because Using indexes can become problematic if the order of items changes, potentially leading to incorrect selections.
* Bad, because If featureCollections are dynamically modified (added/removed), indexes can become misaligned, causing state inconsistencies.

### Assign unique ids to each featureCollection

Assign id to solution/featureCollection like {id:"1", featureCollection},{id:"2",featureCollection}

* Good, because Each featureCollection has a unique identifier, making it robust against changes in the order or dynamic modifications.
* Good, because Unique IDs can make the code more descriptive and easier to debug
* Bad, because It is not a bad option. but it requires some lines of code to find out by iterating within solution/featurCollection list, that which solution/featureCollection is selected. It requires additional code.
