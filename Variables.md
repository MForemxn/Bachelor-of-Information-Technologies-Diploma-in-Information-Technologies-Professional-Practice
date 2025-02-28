Variables are storage for information
- a variable is a place to put [[data]]
- each variable must have at least a name, and a stored [[data]] value
	- most languages also require a type to be assigned to each variable
- [[Reference types]] start with uppercase letters
- [[Primitive types]] start with lowercase letters
	- this is because primative types are reserved words (you cannot create a variable with that name.)
- you cannot make more than 1 variable with the same name in the same scope
	- this applied to [[Java]] and [[Python]]
# [[Python]] vs [[Java]]
- [[Python]] is a strongly dynamically typed language
- [[Java]] is a very strongly statically typed language
	- what this means is that [[python]] variables can be anything you want, [[Java]] must have a predefined type
# What are variables?
- variables are symbolic names that reference or point to a location in memory where a value is stored
- they allow programmers to:
	- store [[data]] that can be changed and reused throughout a program
	- make code more readable and maintainable by giving meaningful names to [[data]]
- variables can hold different types of [[data]], such as numbers, text, or more complex [[data]] structures

# Types of variables
- variables can be categorised based on their [[data]] type and scope:
	- **Primitive [[data]] types**: include integers, floats, booleans, and characters
	- **Complex [[data]] types**: include arrays, objects, and structures
	- **Scope**:
		- **Local variables**: accessible only within the block or function where they are declared
		- **Global variables**: accessible throughout the entire program, from any function or block

# Declaring and Initialising Variables
- **Declaration** involves telling the compiler about the variable's name and type
	- e.g., in C, `int age;` declares a variable named age of type integer
- **Initialisation** involves assigning a value to the variable at the time of declaration
	- e.g., `int age = 30;` both declares and initialises the age variable
- languages have different rules and syntax for declaring and initialising variables

# Variable Naming Conventions
- names should be descriptive and indicate the purpose of the variable
- most programming languages have rules and best practices for naming variables, such as:
	- starting with a letter or underscore, not a number
	- avoiding reserved keywords
	- using camelCase or snake_case for readability

# Dynamic vs Static Typing
- **Static typing**: the type of the variable is known at compile time
	- languages like C, C++, and [[Java]] use static typing
- **Dynamic typing**: the type of the variable is known at runtime
	- languages like [[Python]], Ruby, and JavaScript use dynamic typing
- the choice between static and dynamic typing affects flexibility, error checking, and performance

# Variables in Different Programming Paradigms
- **Procedural programming**: variables are used to store [[state]] and [[data]] to be manipulated
- **Object-oriented programming (OOP)**: variables are often attributes of objects, representing the object's [[state]]
- **Functional programming**: variables are used less frequently in the traditional sense, as this paradigm emphasises immutability and functions over [[state]]

# [[Memory Management]]
- understanding how variables are stored in memory is crucial for efficient programming
- stack and heap are two key areas where variables can be stored:
	- **Stack**: stores local variables and function call information; has faster access but limited size
	- **Heap**: used for dynamic memory allocation; more flexible but slower access and requires manual management in some languages to avoid memory leaks
