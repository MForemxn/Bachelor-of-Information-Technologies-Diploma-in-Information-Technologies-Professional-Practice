## Inheritance

Inheritance is one of the fundamental principles of OOP - the idea that an object should be able to inherit properties ([[data]] and methods) from another object, effectively setting the "child" up as a subtype of the "parent".

Java has two ways of achieving this, the first is called (confusingly) _inheritance_ (not really Java's fault, this meaning of inheritance to mean a type of inheritance is inherited from prior languages - did that help?).

In Java, inheritance is achieved by using the `extends` keyword in the child class declaration, and the name of the chosen parent class. Java only allows **one** parent. The child class then has all the [[data]] and methods of the parent class (however may not be able to access them if they're marked `private`, but they're still there).

In Java the parent class is called the _superclass_, and the child is called the _subclass_.

The inheritance `extends` relationship is meant to model an "is-a" relationship: a triangle is a polygon, so we would expect `Triangle` to `extend` `Polygon`; a triangle is not a square, so it would not `extend` `Square`. This basic example also gives us a bit of a feel for what being a superclass and a subclass means, the superclass is the more general type, the subclass the more specific.

This super- and sub-class relationship extends to a hierarchy - if `A extends B` and `B extends C`:

- `A` is a subclass of both `B` and `C` (and has all the properties of both).
    
- `B` is a subclass of `C`, but a superclass of `A` (so it can do all the things `C` can, but not the extra stuff `A` can).
    
- `C` is a superclass of `B` and `A` (it can't do the new things `A` and `B` add).
    

Each class in the hierarchy then has access to non-private methods and [[data]] from all its superclasses. The immediate superclass can be accessed with the `super` keyword, and constructors from the immediate superclass can be called by `super(...)` in a similar fashion to using `this(...)` to call other constructors in the same class.


## Dynamic Dispatch, Or, How to choose what to run.

Given a sequence of classes `A`, `B` and `C`, where `A extends B` and `B extends C`, if `A`, `B` and `C` all implement a method `foo()`, which one is run in the following?

C actuallyAnA = new A(); actuallyAnA.foo();

Java has a simple resolution mechanism:

1. Start with the actual type of the value (not the variable), and look for the method there.
    
2. If it doesn't exist at the current level and there is a superclass, move up one superclass level and go to 1.
    
3. If there is no superclass, throw an error.
    

So in the example, the type of the value is `A`. The type of the variable referencing that value is irrelevant (in contrast to C++ style dispatch). If all three implement `foo()`, then `A.foo()` will be run. If `A` didn't implement `foo()`, the JVM will move up to the immediate superclass and check there. In this case, `B`. This will continue until the required member is found, or all superclasses are exhausted.

Note that _[[data]]_ members in Java are _statically_ dispatched - the [[data]] is chosen by the type of the variable, not the value.

So in the example above, if `A`, `B` and `C` all had a `public` variable called `bar` the following code would produce the one associated with the `C`, rather than the `A`:

C actuallyAnA = new A(); actuallyAnA.bar;


## Abstract Classes

Java also allows us to declare classes to be partially complete, and require that they be completed by their subclasses.

This allows the extraction of common, but incomplete, functionality to maximise code reuse and support polymorphism.

This is achieved through the use of the `abstract` keyword. An abstract class must be declared as such in its signature, and this allows abstract methods to be declared - these force subclasses to have that method and to provide the implementation. Essentially like saying "all classes of this type must be able to do this, but they each have to do it their own way".

An abstract class can still have constructors, but it cannot be instantiated by itself, only its subclasses (that aren't abstract) can.

In the `Polygon` example, we didn't know how to compute the area of a general `Polygon`, so this would be a candidate for an abstract class - we want each subclass to be able to compute its area, but it's up to the subclass to do it for itself:

```
import java.util.ArrayList;

import java.util.Arrays;

//Polygon is declared abstract, it can't be instantiated

//(i.e. no objects of base type Polygon can be created),

//because it's not complete.

public abstract class Polygon {

    ArrayList<Point> points;

    String shapeName;

    public Polygon() {

        this.points = new ArrayList<Point>();

    }
```

Almost all the class in this example is the same (barring some compaction to make the interesting bits more obvious, and the removal of `numPoints()`), but the class and the `area()` method are now abstract. `area()` no longer needs a body, as the subclass is forced to provide that.


## Lastly, final

We have seen the `final` keyword used before (in passing) to stop the values of variable being changed after the initial assignment (essentially creating constants). The `final` keyword also has two uses in inheritance:

1. A class can be marked `final`, which prevents any subclasses being created from it - i.e. if we have `final class A`, it's not possible to have `class B extends A`.
    
2. A method can be marked `final`, which prevents it from being overridden. That is, any subclass _has_ to use the version of the method declared in the superclass where it's marked `final`.

