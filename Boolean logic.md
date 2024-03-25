# What is Boolean Logic?
- boolean logic is a subset of algebra used for creating true/false statements
- revolves around the concept of true (1) and false (0)
- fundamental to the operation of computers and digital electronics

# Boolean Operators
- three primary boolean operators:
	- AND
	- OR
	- NOT
- these operators are used to compare boolean values and return a boolean result

## AND Operator
- returns true if both operands are true
- otherwise, returns false

## OR Operator
- returns true if at least one operand is true
- returns false only if both operands are false

## NOT Operator
- unary operator that flips the value of its operand
- if the operand is true, NOT returns false; if the operand is false, NOT returns true

# Boolean Expressions
- boolean expressions are statements that can be evaluated to true or false
- can involve boolean [[variables]], constants (true or false), and operators
- used in programming for control flow (if statements, loops) and [[decision]] making

# Truth Tables
- a truth table is a mathematical table used to compute the output of a boolean function for all possible input values
- essential for understanding how boolean expressions will evaluate under different conditions

## Example of a Truth Table for AND Operator

| A | B | A AND B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

# Application in Computing
- boolean logic is foundational to computer science
- used in the design of computer circuits, programming, and data structures
- enables complex [[decision]]-making [[processes]] in software and hardware

# Boolean Algebra
- a branch of algebra that deals with boolean values
- involves operations (AND, OR, NOT), laws (e.g., De Morgan's laws), and properties (e.g., distributive property)
- allows for the simplification of boolean expressions, which is crucial in circuit design and optimization

# De Morgan's Laws
- important rules in boolean algebra that relate conjunctions (ANDs) and disjunctions (ORs) of boolean expressions through negation
- stated as:
	- NOT (A AND B) = (NOT A) OR (NOT B)
	- NOT (A OR B) = (NOT A) AND (NOT B)
- these laws are used for simplifying expressions and designing or analyzing digital circuits