## Object Oriented Programming

Object Oriented Programming (OOP) is a programming paradigm that has developed over nearly 70 years. Although it only really become a standard programming style from approximately the early 80s (and even then, not really until the 90s), its development has been an evolutionary process (and is ongoing, particular as functional programming and OOP become more intertwined).

As a result of this process, it's actually quite hard to define OOP in a way that is satisfactory to programmers (who tend to like things clearly and sharply defined), and somewhat remains a "I know it when I see it" collection of ideas.

Despite this however, there are some central concepts that almost everyone agrees upon (except the designers of Smalltalk, who seem to think they invented OOP, nearly 20 years after Simula was released).

The so called "four pillars" codify the central ideas of OOP:

1. Abstraction - the separation of implementation from interface.
    
2. Encapsulation - [[data]] should normally be hidden and access controlled via methods.
    
3. Inheritance - objects should be able to exhibit multiple (appropriate) types, in a structured way.
    
4. Polymorphism - one interface should be able to work with any suitable type.
    

If you stare at these long enough and closely enough, you can start to see that they are not really separate "pillars", but a collection of facets of the same basic idea of trying to make everything as general and flexible as possible, while retaining usable structure.

What these don't give is an obvious way to actually structure programs, at least not immediately. Over time, there have been a few attempts to provide more concrete principles that can directly guide OO design.

In the following lessons, we'll look at a few of these attempts.


## SOLID as a rock

The SOLID principles are a collection of object oriented design principles governing the design of classes an objects collected together initially by Robert C. Martin (also known as Uncle Bob) and form part of a [larger set of principles](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod) for the design of software.

Like any set of principles, they must be applied with judgement and understanding. There are situations where they don't apply, but like many principles, they should be approached with the attitude of "follow the principle unless there's a justification for not following it".

Also like any set of principles, they don't automatically fix programming problems. What they do do is provide a framework from which to ask questions about a given software design problem.

Caveats aside, the principles are:

- The **S**ingle Responsibility Principle
    
- The **O**pen/Closed Principle
    
- **L**iskov's Subsitution Principle
    
- The **I**nterface Segregation Principle
    
- The **D**ependency Inversion Principle

## The Single Responsibility Principle

The Single Responsibility Principle is often expressed as "a class should have one, and only one, reason to change".

This is a rather gnomic and unhelpful way of phrasing it, but is often used "knowingly" on the internet.

What is actually meant is that a class should correspond to a well defined part of the specification, and should only change if that part of the specification changes. In particular, it shouldn't change if _some other_ part of the specification changes.

This principle does not reduce to "a class should only have one method". Like any of these principles, you should be sensible in its application. A class should model a single, coherent, _complete_ concept, and only that concept.


## The Open/Closed Principle

The Open/Closed Principle is "a class should be open for extension, but closed for modification". Again, this is a neat way of saying it, if you already know what it means.

The core of this principle is that extending the behaviour of a class (usually, but not necessarily, by inheritance) shouldn't result in the modification of the class. If a superclass needs to be modified to make a subclass work, something has gone wrong.


## Liskov's Substitution Principle

"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."

This one is in some sense the inverse of the Open/Closed principle, at at the interface level, and in fact we've been applying this one quite naturally already. The principle suggest that a program shouldn't have to be concerned with which subtype of a particular type an object is, all the subtypes should still work as an object of the supertype.

In Java this applies to both inheritance and interfaces, and is hard to break syntactically (which is possible in other languages), but it is possible to break the principle by overriding methods in ways that don't conform to the "contract" of the supertype. For example, `ArrayList<E>` and `LinkedList<E>` are both subtypes of `List<E>` and the `add(E)` method is intended to add a new element to the end of the list, which they both do. If someone wrote a new class that implemented `List<E>` and used `add(E)` to add to the start, or in the middle, or a random location, this new class would not be substitutable as a `List<E>`, because it works differently at that level.


## The Interface Segregation Principle

"Make fine grained interfaces that are client specific".

This one is actually pretty straightforward - don't cram everything into one interface. Make multiple interfaces that fits a particular task (which is roughly what is meant by client here) well. Note that "interface" here means the exposed functionality, not the Java concept `interface` (but that's what the Java concept is meant for).


## The Dependency Inversion Principle

"Depend on abstractions, not on concretions."

This is another one that we've already been doing quietly throughout the subject. Code should be written with the minimum set of restraints on the other parts of code it uses. For example, when all you need is a `List`, that's all you should specify - don't make it `LinkedList`, or `ArrayList`, as doing so binds the code to using those particular concrete versions of a `List` and disallows simple changes.


## GRASPing for Structure

The **G**eneral **R**esponsibility **A**ssignment **S**oftware **P**rinciples (apart from being a bit of a stretch for an acronym) are a set of principles for how to structure a program in terms of the responsibilities of each component. They are in some ways more concrete than the SOLID principles, but also more opaque.

Collectively they define a series of common roles for components of a program, and hence help define patterns to provide general programming solutions for these roles. They also offer some guiding principles similar to the SOLID principles.

Although some of the principles define patterns (more on this later), it is perhaps more useful to think of them as roles or responsibilities for components, as a software pattern tends to imply something more concrete than what GRASP offers.

## Creator

Assigning responsibility for creation of objects should correspond to a "container" and "contained" relationship. The "container" should have the responsibility for creating the "contained" object.

The nature of "contains" here is a little subtle though:

- Instances of the "container" contain instances of the "contained" (but this doesn't mean a list should create the objects it holds, it refers more to containment in terms of the types).
    
- Instances of the "container" somehow keep or record instances of the "contained" (somewhat like a database creating the records).
    
- Instances of the "container" have a very close usage relationship with the "contained" (essentially that the "contained" is only created to make the "container" work properly).
    
- The "container" is the repository of the information necessary to create the "contained" (this relates to the "Expert" role too).

## Expert

The expert principle tells us that when choosing where to place functionality, we should place it as close to the necessary [[data]] as possible. So if a single class has all the information needed to compute some function, the function should be a member of that class.

If the [[data]] is spread over several classes, we should look for the class with most of the information, or consider if the spread of the [[data]] actually makes sense.


## Low Coupling

Components should require as little as possible from other components to function correctly. Of course not all coupling can be eliminated (there would be no program then), but we shouldn't spread related functionality across lots of objects (you may be detecting a theme here), and everything should be as self contained as is reasonable.

This also means that we may also consider routing functionality through intermediate classes to reduce dependency on more classes than is necessary (i.e. a class should talk to as few other classes as possible).


## Controller

The responsibility for deciding how to fulfill information requests (including literal requests for [[data]], changes of state in the system, etc.) should be mediated by controller classes.

For example, the UI shouldn't talk directly to the back-end logic, it should talk to a controller, and the controller should decide how to engage the other components of the program (possibly via other controllers, though this can get a bit silly).

This supports abstraction and low coupling by separating things like the UI from things it doesn't need to know the details of (for example, a database). Then the UI can, in principle, be swapped for a different UI, or the backend database swapped out, etc., with as little impact as possible.


## High Cohesion

A single component should exhibit high cohesion. Similar to the single responsibility principle, a component should contain all functionality that is closely related and nothing else (or as little as possible). Moreover, related functionality shouldn't be spread over several components unnecessarily.


## Polymorphism

This one is just "use polymorphism".


## Pure Fabrication

Honestly, this one is a bit daft.

There's a weird misconception in early OOP that every object should somehow represent something "real".

This principle basically suggests that you can create classes or components that represent related functionality, which is a bit obvious now that OOP is so widely spread and understood.

Hey, our piece of software can have bits that aren't a metaphor for an actual object... such wow.


## Indirection

To reduce coupling, it may be useful to build intermediate components. This one is a bit like the controller principle, but covers inserting "mediator" components to abstract the relationships between other components.


## Protected Variation

If there a parts of the program that change or are in some way "unstable", wrap them in an interface and use polymorphism to hide the instability from the rest of the system.


## Some Editorialising

This bit is more opinion than strict guidance, but as I feel it's worth pointing out, it's here.

GRASP is a perfectly usable set of principles, but it lacks the philosophical clarity of the SOLID principles, and can easily be misapplied to produce some fairly awful software. It often carries with it (perhaps accidentally) a certain flavour of "software architecture", in the sense that it favours building complex systems on paper with little consideration of how this will actually work.

The high cohesion and low coupling principles are good, the creator and expert principles make sense, but the controller and indirection principles are open to wild abuse by "software architects" and other managerial types. Most of the other principles follow fairly directly from the basic four pillars (although it can be handy to state them in more concrete ways).


## Design Patterns

(Software) Design Patterns are standard solutions to standard problems.

They constitute a set of generalised structures for approaching problems that "optimise" the abstraction, reusability and extensibility of the components.

The idea of a design pattern comes from architecture and was imported into software engineering in the late 80s to early 90s, codified in the ["Gang of Four" book](https://en.wikipedia.org/wiki/Design_Patterns_(book)) (it's a good book, worth reading).

Design Patterns are worthy of a short subject in and of themselves, so we won't do them a disservice by trying to summarise them here, but they do offer two useful principles:

1. Program to an interface, not an implemention - this is again the theme of abstracting things and programming in a way that doesn't require a specific implementation wherever possible (the old `List` vs. `ArrayList` and `LinkedList` choice).
    
2. Favour composition over inheritance - unless it's clear that functionality is common to all the subclasses, delegate it to a object that the class holds, rather than a method in the class that you have to keep overriding.

## DRY

Another general principle (not specific to OOP) that's a handy programming maxim is **D**on't **R**epeat **Y**ourself.

Once you start writing the same code that you've already written before, you should consider moving it to a separate method.

A slight extension of this is considering how you can break your code down into smaller components in a way that allows some parts to be refactored out into separate methods.

This process, done properly, helps make code more maintainable, reusable and readable.


## YAGNI

Another principle, stemming from Extreme Programming (again, what a silly name), is **Y**ou **A**in't **G**onna **N**eed **I**t, which cautions against implementing functionality just because it's possible to envision some future use for it.

Write what you need for now, not what you may or may not need later.

If your program is well designed, it should be simple enough to add the extra functionality later if it ever actually becomes necessary. If you can see that it would be hard to add it later, there's probably something wrong with the design.


