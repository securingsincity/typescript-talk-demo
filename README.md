# TypeScript Talk Demo

This is a set of examples of code for a talk I'm giving on TypeScript. It walks through a bug ridden code example that is fixed by types.

## Step 1 - Bug Ridden Code

The working code
`node bugRidden/example.js`

Now change `const user = getUser(0)` to `const user = getUser(1)` and rerun the example. You will receive an error

## Step 2 - Still broken but Typed example using interfaces

* `usingInterfaces` folder

The `usingInterfaces` folder types all of the functions but is still purposely broken. We'll fix it during the talk. You can see the compile errors by either using VSCode or running `tsc --strict usingInterfaces/index.ts`

## Step 3 - Working code in the using classes folder

* `usingClasses` folder

This is now working code. It has since been refactored to use classes as well. It has examples of Union types and classes.

## Step 4 - Example of Intersection Types and extending Interfaces

* `intersectionExample.ts`


## Step 5 - Example of Generics

* `generics.ts`


