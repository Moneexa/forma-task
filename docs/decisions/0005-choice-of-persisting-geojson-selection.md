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

## Pros and Cons of the Options

### Use indexes

Allocate ID to each featureCollection/solution. And set the state of selected featureCollection as the index.

* Good, because Index would be unique for each solution/featureCollection. It requires less lines of code to get the index and update the state of solution collection.

### Assign unique ids to each featureCollection

Assign id to solution/featureCollection like {id:"1", featureCollection},{id:"2",featureCollection}

* Bad, because It is not a bad option. but it requires some lines of code to find out which solution/featureCollection is it with the help of id. It might require some time, and additional code.
