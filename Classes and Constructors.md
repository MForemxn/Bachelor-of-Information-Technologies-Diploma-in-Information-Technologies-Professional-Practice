# What are Classes and Constructors?
- classes are blueprints for creating objects in object-oriented programming (OOP)
	- they encapsulate data for the object and methods to manipulate that data
- constructors are special methods within a class
	- they are automatically called when a new instance of a class is created
	- their main purpose is to initialise the new object's properties

# Importance of Classes in OOP
- classes provide a means for [[abstraction]] and [[encapsulation]]
	- [[abstraction]] allows hiding complex implementation details
	- [[encapsulation]] bundles the data (attributes) and methods (functions) that operate on the data into a single unit
- they enable code reusability through [[inheritance]]
	- child classes can inherit properties and methods from parent classes
- facilitate the creation of flexible and maintainable code

# Understanding Constructors
- constructors can be parameterised or non-parameterised
	- parameterised constructors allow passing arguments to initialise object attributes
	- non-parameterised constructors do not take any arguments and usually initialise attributes to default values
- in languages like Java and C++, constructors share the name with the class
- Python uses the `__init__` method as its constructor

# Classes and Constructors Across Programming Languages
- syntax and implementation details vary across languages
	- Java, C++, and C# use the class keyword and have explicit constructor methods
	- Python also uses the class keyword but utilises the `__init__` method for construction
- despite syntactical differences, the conceptual role of classes and constructors remains consistent

# Advanced Features of Classes
- classes can contain static methods and properties
	- these belong to the class itself rather than any object instance
- support for private and protected attributes and methods
	- controls access to certain parts of a class from outside code
- can implement interfaces and abstract classes to define a contract for what a class can do without specifying how

# Constructors and Memory Management
- constructors play a crucial role in memory management
	- they allocate the necessary memory for object instances
- in languages with manual memory management, like C++, destructors complement constructors
	- destructors clean up resources when an object is no longer needed

# Classes, Constructors, and Design Patterns
- classes and constructors are fundamental in many design patterns
	- for example, the Singleton pattern ensures a class has only one instance and provides a global point of access to it
	- Factory methods use constructor calls to create objects from different classes based on input parameters

# [[Inheritance]] and Constructors
- when a class inherits from another, the constructor of the parent class can be called to initialise inherited properties
- some languages require explicit calls to the parent constructor, while others do it automatically

# Overloading Constructors
- some languages allow constructor overloading
	- multiple constructors with different parameters can be defined within the same class
	- enables creating objects with different initialisation data