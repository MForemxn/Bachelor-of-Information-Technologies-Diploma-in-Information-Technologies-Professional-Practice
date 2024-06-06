## Accessing Members of Classes and Objects

Before looking at how classes and objects work, we will start with explicitly discussing a bit of syntax that we've be using quietly - the `.` operator (said "dot").

The dot operator takes the thing on the left, and retrieves the thing inside that with the same name as that on the right.

System.out.println("Hi");

Looks in the `System` class, gets the thing called `out` (which happens to be a class level object variable with type `OutputStream`), then in that object gets the method `println(String)` and runs it with parameter `"Hi"`.

```
sc.nextInt()
```
Looks on the object attached to the variable `sc`, and retrieves the method `nextInt()`, and runs it with no parameters.

There are two types of things that the dot operator can return, a value (from accessing a variable), or a method (which will then be immediately run).

By the end of this lesson, you will have seen that object variables are actually things call _references_, hence the dot operator is sometimes called the _dereference_ operator.

There's nothing particularly special about the dot operator, it just gets stuff out of other things.


## Classes as Templates for Objects

Object oriented (OO) programming (and hence OO languages) have as their central element the idea of an _object_, which is a construct that encapsulates data and provides methods which allow interaction with that data (more on this when we get to the OO lesson). That is, objects are discrete combinations of data and code, if you wish to draw the distinction, that are treated as single entities.

Thus in an OO language we need some way of defining objects, giving what data they contain, what methods they have available and what those methods do. Java is what is called a _class-based_ object oriented programming language (as compared to a prototype-based language). Class-based OO languages use _classes_ as templates for objects. A class thus gives the definition of the data an object will contain (in the form of the variables it has), and the methods that it offers (the code we have been writing).

The basic shell of a class has the following syntax:

```
<access modifier> class <name> {

    <data and methods>

}
```



The access modifiers are the same as those for methods (and variables) that we have already seen, although until more complicated structures are encountered, classes are almost always `public` (but remember that each `java` file can only have one `public` class, and it must have the same name as the file). The `<name>` for a class follows the same basic rules as for variables and methods - it should start with an alphabetic character and it should be descriptive of the purpose of the class. The major difference is that classes should begin with an _upper case_ letter. We've already seen this, `Scanner` and `String` for example. If you have done lab 5, you will have already seen some programmer defined ones that follow this convention.

The `<data and methods>` are, of course, the real working parts of a class and hence object. Again, we have already seen much of this in practice, we just haven't been explicitly identifying things as _class members_, except in passing.

As with most things in Java, an empty class is syntactically and semantically acceptable (the empty class is the second one, and there you'll see an example of a different access modifier):


```
public class Runner {

    public static void main(String[] args) {

        Empty empty = new Empty();

    }

}

class Empty {

}

```

Of course this is not the most useful thing in the world, but can help when developing code, as you can create the empty class in preparation to be filled out later.

Classes will, in practice, have some number of class level variables, and some number of methods. How many reflects the purpose of the class. One important guideline to keep in mind however is that a class should have a single clear purpose - it should model a single entity in the system. This is of course rather vague, as it depends on the system being programmed as to what a single entity means, but with practice, this becomes clearer. It is usually obvious however what _not_ to include in a given class - a class modelling a bank account probably shouldn't store the staffing details for a branch of the bank.

As an example of a class with both data and methods (again, these are both called class _members_), we can consider the relatively concrete example of a bank account. A bank account should know who it belongs to, and how much is in it (at minimum), and provide ways of accessing and modifying this information:


```
public class BankAccount {

    private String customerName;

    private double balance;

    public BankAccount(String customerName, double startingBalance) {

        this.customerName = customerName;

        this.balance = startingBalance;

    }

    public String getCustomerName() {

        return this.customerName;

    }

    public void withdraw(double amount) {

```

This is, of course, a simplified example, and we can quickly see ways that we would need to expand this in reality; we probably want something like an `AccountHolder` class, that stores details about the account holder, and the `BankAccount` class would have a reference to this, rather than just a `String` with the customer name. We possibly also want to think more carefully about how the account balance is stored (probably as an `int` representing the number of cents), what happens when a withdrawal or deposit fails, what point the withdrawal or deposit amount is validated (it's probably not this class' job to do that), and many other things.

Nonetheless, this class includes all the fundamental elements of a class:

- It has data members. Notice that they are declared `private` here. This means that only objects of this class can access that information - what could go wrong if they were `public`?
    
- It has method members. They allow controlled access to the data. Although we haven't quite touched on it yet, this is an important aspect of OO programming.
    

Notice also that none of these members are `static`, and that there's no `main` method. This class cannot do anything by itself, you need to create objects to actually store the data, and you need other classes to build this into a program.

In this way, classes and objects become the fundamental structural and functional elements in an OO program. An OO program works through the interactions of collections of classes and objects.


## Classes as Types

Classes not only provide the template for how to create objects, they inherently become a _type_. The type of a variable can be a class, and the data at the other end of an object variable of a given type has that type too (possibly amongst others).

Although the type system generated by allowing user defined classes to engender types is not as rich as, say, some functional programming languages, it does allow an amazing and important amount of structure and reliability to be built from proper use of these types alone.

For example, in some less stringent languages, we may have a list of bank accounts, into which an incompetent or unscrupulous programming may insert some other object. In the first case, things break when that erroneous object is encountered, in the second, bad things may happen (of course the unscrupulous programmer has more inventive things they can do than this easy-to-stop silliness).

Being able to write a line like

BankAccount[] accounts = new BankAccount[numberOfAccounts];

gives a certain amount of confidence in the correct functioning of the program. If nothing else, either the compiler or the runtime will automatically throw an error when someone tries to add something to `accounts` that does not have the type `BankAccount`.

Because classes are types, this also means that they can function as the return type of a method:

BankAccount savings = AccountHolder.getAccountByType(AccountTypes.SAVINGS);

So we are not limited to returning primitive data from methods, we can obtain entire objects (and given that objects can hold references to other objects, the information returned can be quite complex).

Similarly, we can also pass object variables as parameters _into_ methods, allowing complex information into a method, but perhaps more interestingly, allowing functionality into a method:

public List<BankAccount> findAllMatchingAccounts(BankAccount account) { List<BankAccount> matchedAccounts = new ArrayList<BankAccount>(); for (BankAccount candidate : AllBankAccounts) { if (account.hasSameOwner(candidate)) { matchedAccounts.add(candidate); } } return matchedAccounts; }

Although the details here are a little more advanced than what we've seen, it's easy to see in the condition of the `if` statement, we're not just extracting some raw piece of data from `account`, we're asking it to actually perform some function - it knows what it means for two accounts to have the same owner, so we should ask it, rather than replicating the code here.

Of course we can do this without having classes as types, what they allow here is certainty that whatever is passed into this method will actually fit the specification of a `BankAccount` and we don't have to rely on the good will and skill of the programmer (at least not completely).

## Classes as Things Themselves

Although we will find that objects quickly become the dominant element of a working program in Java, classes as classes are still an important component.

For a start, they are present in the _method area_ of memory, providing the template against which to build objects, and acting as the repository of the actual method code (rather than copying it to each object, it is simply stored once in the class, and the object just refers back to that).

We have also seen that classes can be functional elements themselves. Anything that has been marked `static`resides entirely on the class (perhaps spread over different parts of memory though). `static` members, whether data or methods, are accessible without creating any objects, and in fact, are not copied to the objects at all - if you access a `static` variable via an object (using the `.` operator), you are accessing the single class level instance of that variable, all objects of that class share the same one:


```
public class Silly {

    private static int value = 10;

    public static void main(String[] args) {

        Silly a = new Silly();

        Silly b = new Silly();

        System.out.println(a.value); //Access the value from a

        b.value = 30; //Change it from b

        System.out.println(a.value); //Access it from a again

        System.out.println(Silly.value); //Access t from the class itself.

    }

}
```


If all objects of a class should share a common value, this is the way to do it. It is also a useful way of defining program wide constants, by making the member `static`.

Similarly the class provides all the `static` methods. The most obvious is the `main` method, which is `static` because it is the very first thing run in the program, and needs to be run before any objects have been created. However we can also use `static` methods to provide functionality that doesn't rely on object level data - requiring nothing other than what's passed in through the parameters and any other `static` data accessible in the program:


```
public class Circle {

    private double x, y, radius;

    public static final double PI = 3.141592;

    public Circle(double x, double y, double radius) {

        this.x = x;

        this.y = y;

        this.radius = radius;

    }

    public double area() {

        return area(radius);

    }

```

Although the `Circle` class above has members `x`, `y` and `radius` that would require an object to be instantiated (i.e. to actually have memory allocated and a value), we have a `static` constant `PI` and a `static` method `area(double)` that allows us to make use of this class even when we haven't created a `Circle` object.

## Objects in Memory and Creating Them with Constructors

Objects are created using a class as a blueprint, but it's useful to understand what that means in terms of memory allocation, and what an object actually contains.

In Java, _**all**_ objects are dynamically created (if you don't know C++ or similar, don't worry about this). This means objects are always stored on the heap. When they're created from the class, they actually only allocate space for the class level, non-`static` variables, plus a little bit of bookkeeping information. The methods, `static` variables, and other things that are shared by all objects of a class, are stored with the class itself (again, a bit simplified, but good enough at the moment).

An object variable then is just a reference to the location of this information in the heap, i.e. an object variable is just a memory address plus some bookkeeping information (there's always metadata...). We have already seen the consequences of this when looking at passing objects instead of primitives as parameters - an object variable is just a reference to a spot in memory, it doesn't store the object data itself.

To allocate this memory, and generate the reference that will be stored in the variable (or wheresoever it's placed), we use the keyword `new`. As with most things we have already seen this repeatedly. When creating a `Scanner` object, we've been using the line:

Scanner sc = new Scanner(System.in);

So like other variable declarations, we first have the type (in this case `Scanner`), the variable name (`sc`) and this the optional initialisation statement. This one is a nice immediate initialisation, creating a new object on the spot.

The `new` keyword tells the JVM to allocate the correct amount of memory for a `Scanner` on the heap, and run a special method called a _constructor_. The `Scanner(System.in)` is the particular constructor that's being run in this line of code. As the name suggests, a constructor _constructs_ an object, and is normally the place where all the object's data members are initialised, and any other preparatory tasks are done.

A constructor is only run once per object, and is always the first thing run.

A constructor has a slightly special syntax:

```
public class <ClassName> {

    <access modifier> <ClassName> (<parameter list>) {

        <code>

    }

}

```

Like all methods it has an access modifier, usually `public` or `private`, and a parameter list, but it has _**no**_ return type (because it has a fixed return of a reference to the object, which is not a user accessible type, also see below for `this`), and the name of the method is the same as the name of the class. Thus it is one of the few exceptions to "methods start with lower case letters" conventions (unless you've misnamed your class :D).

A class can have a number of constructors, following the normal rules for method overloading - the parameter lists have to be distinguishable.

If no constructors are given by the programmer, Java will automatically generate the _default_ constructor, which takes no parameters and does nothing except allocate the right amount of memory and give back a reference to the newly created object.

An object can actually always retrieve a reference to itself through the use of the `this` keyword. This has a couple of handy uses. It can be used to distinguish class level variables from local variables (allowing you to use the same name twice, and common practice in constructors), and it can also be used to call other constructors from within a constructor, but it must be the first line in the calling constructor. This allows default constructors, or constructors with reduced parameter lists to be created without reproducing code unnecessarily.

We have in fact seen several examples already in this lesson, but the following cover most of the points just mentioned:

```
public class Circle {

    public static final double PI = 3.141529; //An approximation of Pi, because circle.

    private double x;

    private double y;

    private double radius;

    private String colour;

    //The default constructor

    public Circle() {

        this(0, 0, 0); //Call a different constructor

    }

    //A different constructor with multiple parameters
```


## Classes and Objects

Like Java, Python allows the use of classes and object, and ultimately its object model is roughly similar to Java's - the class forms a template for the creation of objects which are instantiations of the class. The class itself is still an element in the code though (like Java), so once we deal with classes an object, we can have data and functions residing on the object or the class.

As all variables are references to begin with in Python, they already almost always (more later) work like Java reference variables, so two variables can hold references to the same object, and modify the same object.


## Basic Syntax

## Classes

A class is defined in much the way one would guess in Python, with the `class` keyword, a name, and colon and appropriate indenting.


```
class Simple_Class:

    value = "A variable in the class, like a data member"

    def func():

        print("This is a function in the class!")

print("No longer in the class here, as the indenting changed back.")
```


## Objects

Like Java, objects are instantiations of a class, and created in a similar way by using the class name followed by a list of parameters (depending on the class itself), but without the `new` keyword.
```
class Foo:

    def bar(self):

        print("Printing from the object!")

obj = Foo()

obj.bar()
```


## Attributes

As with Java, classes have data and functions associated with them, and the general term in Python is _attributes_.

Also as with Java, these can reside either on the class, or the object, but the way we specify this is a bit different to Java, and the categories are also slightly different. For functions, Python has _Instance, Class_ and _Static_ methods (yes, once you start sticking them on classes and objects, they get called methods). For data, the distinction between class and static disappears, so there are two categories. In all cases though, they are accessed with the dot operator `.` just like java.

## Static Methods

A _static_ method is a method that doesn't need an object of the class to be used, and has no reference to class attributes (what this means will be clearer in a moment).

Static methods are declared as normal functions, just inside a class. They are called using the dot operator from the class: `<class name>.<method name>(<parameters>)`. The can optionally be annotated with the `@staticmethod` annotation to indicate that they are static methods. The use of the word `static` here is slightly, but not completely at odds with its use in Java - the basic intent is the same, but the practical details are a bit different.


```
class Foo:

    def bar():

        print("This is a static method.")

    @staticmethod

    def baz(thing):

        print("This is a static method that takes a parameter: " + str(thing))

# Both these methods can be called from the class:

Foo.bar()

Foo.baz("this is the parameter value as a string")
```


## Class Methods and Class Data Attributes

_Class_ methods are similar to static methods, except they have a mechanism to access class attributes. A class method is declared with the `@classmethod` annotation, and the first parameter is `cls`, which is a reference to the class. This parameter is _implicit_, which means that it is not used when the method is actually called, the value is supplied by the Python runtime. These are similar to what we would call `static` methods in Java


```
class Foo:

    baz = "'Class attribute'"

    @classmethod

    def bar(cls):

        print("This class has an attribute with value " + cls.baz + ".")

# These are called same way as static methods

Foo.bar() #Note there are no arguments for the parameter cls
```


## Instance Methods

Finally _Instance_ methods are methods that reside on objects of the class. They do not need an annotation in their definition, but do have an _implicit_ parameter called `self`. This is a bit like the `this` pointer in Java. Instance methods have access to instance data - i.e. data that is stored on the object (which we will see shortly).

```
class Foo:

    def bar(self):

        print("This is an instance method, it must be called from an object.")

# To call the method, we first need to create an object

obj = Foo()

obj.bar() # Again note that there is no argument for the self parameter.

```

## The `__init___` Method and Instance Data

Unlike Java, instance data (object data members in Java) is not declared in the class generally, but in the `__init__` method. `__init__` is the equivalent of a constructor and is an instance method. All classes have an `__init__` method, even if the programmer doesn't define it. To add instance data (the sensible way), the `__init__` method is defined and declares the variables using the `self` parameter as in the following example, and the data is retrieved using `self`.


```
class Foo:

    def __init__(self):

        self.secret = 3

    def secret_mult(self, num):

        return num * self.secret

# Now to run it.

obj = Foo()

print(obj.secret_mult(2))
```



## "Dunder" Methods

Python has a number of what it calls _Dunder_ methods, _Magic_ methods or _Special_ methods, which are methods with special names, indicated by surrounding the name with double underscores, that relate to built-in functions and operations in the Python runtime.

We have just seen one, the `__init__` method. This particular one relates to the object creation functionality in the runtime.

Another is `__str__`, which is similar to the Java `toString()` method, and is the method that gets called when the `str()` function is used.

All of these methods have individual behaviour, appropriate to the task, so there's no universal way of dealing with them. For example, `__init__` can take more than just the `self` parameter, and returns nothing, whereas `__str__` doesn't take any parameters (other than `self`), but should return a `string`.

Dunder methods are the standard way of defining custom behaviour for the type defined by the class, for example `__add__` allows the use of the `+` operator with the class, `__lt__` relates to the `<` operator and so on.

It's not clear that there is an easy to access list of all the magic methods and their functions, but some are listed [here](https://docs.python.org/3/library/collections.abc.html) and [here](https://stackoverflow.com/questions/56238263/list-of-all-python-dunder-methods-which-ones-do-you-need-to-implement-to-corre).


## Horrible Things you Can Do In Python

This code is offered without comment other than at a simple level, Python class and object attributes are essentially implemented as a `dict`. Given that Python defaults to public access, these attributes are modifiable by other code, if you know the names:


```
def three():

    return 3

def four():

    return 4

class m:

    val = 9

    def f():

        return 0

    @classmethod
```



## How to Stop That (Access Modifiers in Python)

Python does actually give a way of stopping some of this, through access modifiers which follow the same _public, protected_ and _private_ structure as Java. Note that this doesn't stop someone _adding_ attributes to a class at runtime, just perhaps from changing the existing ones.

Unless otherwise specified, a data attribute is public.

To make a data attribute _private_, the name is preceeded by two underscores:

```

class Foo:

    __priv_data = "Secret"

# This won't work:

print(Foo.__priv_data)

```

This works for methods too.


```
class Foo:

    def __str():

        return "This is a Foo"

print(Foo.__str())

```

But not Dunder methods, even though they're superficially similar.


```
class Foo:

    def __str__():

        return "This is a Foo"

print(Foo.__str__())

```

_Protected_ attributes are indicated with a single underscore, but we'll leave those for now.


## Object Oriented Programming - A Brief History

Object Oriented Programming (OOP) is a broad collection of approaches to the design of computer programs that centre on the concept of binding data to code that allows appropriate manipulation of that data in an entity called an _object._

Historically, this idea grew out of, possibly ironically, the use of the functional programming language LISP in the late 50s to early 60s. [Simula](http://www.simula67.info/) introduced many of the OO concepts like classes, dynamic binding and inheritance we still see in languages like C++, Java and their descendents. The similar syntax to Algol60, makes it relatively readable to Java programmers, and a clear influence on Java's development.

[Smalltalk](http://www.smalltalk.org/) was designed from the ground up as an OO language, and is often considered the first "true" OO language, though it is apparent that the design team made some decisions about what OO meant that not everyone shared, and despite Smalltalk's early influence, Simula has had a greater effect on OO languages (at least so far), not least due to Bjarne Stroustrup's use of Simula in his doctoral thesis, and subsequent inclusion of those concepts in C++.

OOP became the dominant programming paradigm in the 90s with the rise of C++, the development of Java and the rapid expansion of the software industry requiring modular, reusable and maintainable software on a large scale (both in terms of code base sizes and quantity of programs). Many languages now have at least some OOP capacity, and many old languages have had it added.

Of course OOP can be used badly (as can any tool), but when applied appropriately, it is a very powerful approach for building large, modular, maintainable and extendable software.
## The Principles of OOP

While OOP is a broad term covering anything where the fundamental programming unit is the object, there are some key principles that underlie almost all OO languages:

- **Encapsulation** - data is enclosed in objects. This gives the data context and allows control over how that data is accessed and manipulated.
    
- **Abstraction** - implementation details are hidden from the outside user. This means that two implementations that do the same thing are interchangeable, and the outside user only has to worry about how to interact with the abstraction, not the details of what's happening in the background.
    
- **Inheritance** - objects can inherit properties from other objects. This allows subtypes of an object to exist, and supports the reuse of common aspects of the subtypes, while allowing well delineated differences.
    
- **Polymorphism** - a single thing can have many "shapes". This manifests in a number of ways: we can have different implementations of the same method, objects can have multiple types, and we can abstract away unnecessary type information. These three presentations of polymorphism are not unrelated.
    

These are often referred to as the pillars of OOP, and you may notice, when you look closely, that they are not completely distinct concepts, encapsulation allows abstraction, inheritance supports polymorphism, polymorphism supports abstraction and so on.

Underlying all of these is the more undefined, but stronger idea that any given unit of a program should not have to care about how the rest of the program works to function correctly. This concept is shared with [modular programming](https://en.wikipedia.org/wiki/Modular_programming), one of the predecessors of OOP (although really these ideas all kind of came together around the same time in the early development of software development techniques alongside the first expansion of digital computing from few research labs to a wider community).


## Encapsulation

We have already seen and talked a little about encapsulation, and it is the simplest of the principles to get a handle on, though the impacts of doing it properly may not be obvious until you have to build larger programs, or fix someone else's code.

In the following class (from lab 5), the `BankAccount` class encapsulates two pieces of data, and provides methods for controlled access to that data.

```

public class BankAccount {

    private String accountName;

    private int balance;

    public BankAccount(String accountName, float initialBalance) {

        this.accountName = accountName;

        this.balance = Math.round(initialBalance*100);

    }

    public float currentBalance() {

        return (float)this.balance/100;

    }

    public void withdraw(float amount) {
```


The `accountName` and `balance` data members are encapsulated, so parts of the program outside this class/object can't readily interfere with this data in a way that isn't allowed by the methods of the class.

Note of course that this is only designed to stop accidental interference - this is not about [[security]], it's about safety and a step towards abstraction - anything that uses `BankAccount` doesn't need to know how the data is stored internally, it only need to care about the `public` methods.
## Abstraction

Abstraction is a general idea that suggests that we should not have to care about the internals of something when they're not important to the external functionality. Is it important what the internals of a clock look like as long as it presents the time readably? A clockwork watch, digital watch, mobile phone, computer etc. all abstract the idea of a clock from the process of time-keeping. We can use all reasonably interchangeably to tell the time, regardless of whether it has tiny gears inside it, or it's consulting an internet based time server that uses an atomic clock.

This abstraction allows the current piece of code to not only not care about how a task that's not its concern is achieved, it allows it to (possibly dynamically) alter which implementation is used for that task without changing the current piece of code.

For example, you could probably (I haven't tested it) substitute this `BankAccount` class for the previous with no change to the rest of the program in lab 5:


```
public class BankAccount {

    private String accountName;

    private float balance;

    public BankAccount(String accountName, float initialBalance) {

        this.accountName = accountName;

        this.balance = initialBalance;

    }

    public float currentBalance() {

        return (float)Math.round(balance*100)/100;

    }

    public void withdraw(float amount) {
```


If correctly implemented, the `AccountManagement` class doesn't need to care or know how the `balance` is stored inside a `BankAccount`, it only needs to know that a `BankAccount` allows withdrawals, deposits and can give back a name and balance (which may or may not be directly related to `accountName` and `balance`.


## Inheritance

We won't say too much about inheritance at this point, as we're about to meet it in full in the next few lessons, suffice to say that Java has two mechanisms for inheritance - class based inheritance and interfaces.

As with most things, we've seen little scraps of this already, but we haven't really employed it to do anything interesting.

Inheritance, regardless of how it's implemented, is a way of both reusing code and of allowing entities to have multiple types. The parent of a child class gives its data methods to the child, so no child has to reimplement that part of the code, but also allows the child to be viewed as the same type of thing as its parent.
## Polymorphism

Polymorphism comes in three basic forms:

- Ad-hoc polymorphism - where methods can be applied to different parameter lists. This one we've seen already (and used repeatedly, even if we haven't pointed it out). The `System.out.println` method has 10 different versions, depending on what you pass as a parameter, for example.
    
- Parametric polymorphism - where type information is abstracted out. We will see this one very soon, but in short, a piece of code may store or move objects around, but not have to care too much about what type the objects are, allowing the type information to be ignored and abstracted away (with varying degrees of precision).
    
- Sub-type polymorphism - where an object can be considered as having any of the types of any of its parent classes. Again, this is something we'll see very soon, so hold that thought.


## Enumerated Types

The concept of an _enumerated type_ crops up in a number of programming languages (most things derived from Algol including Pascal, C, C++, C#, and Java, plus other common (?) languages like Swift, FORTRAN, Lisp, Typescript, and also any functional language that has algebraic types).

An _enumerated type_ is a data type with a fixed, finite set of _named_ values. There's lots of ways of implementing them, but the fundamental goal (and commonality) is that data of that type can only have one of the set of known values. A classic example is the set of suits of a deck of cards. In a standard (anglophone) deck of playing cards, there are exactly four suits: Hearts, Spades, Clubs and Diamonds. So any question about the suit of a card must be answered with one of those four options, and no other. Enumerated types are a way of achieving a structure like that in a programming language.

## Enums in Java

Java's route to achieving an enumerated type is the Enum Class (or just Enum for short). The basics are very simple, but thanks to the way they are implemented, they have surprising depth (especially compared to something like C).

Enums can be declared both independently, and also inside classes (you may want to experiment with where you can declare them and what then has access to them).

The basic syntax is:

enum <name> { [<value_name> [, <value_name>]*]; }

Or a little more clearly - an Enum is declared with the keyword `enum`, it has a name (just like class name), an open brace, then a (possibly empty) comma separated list of names for the different values, terminated with a semicolon. Depending on where they're declared, modifiers can preceded `enum`. While not enforced, it is standard that the name of the Enum follows the same capitalisation rules as a class, and that the value names are all-caps, like constants.

The values of an Enum are accessed using the syntax `<name>.<value_name>`, much like the way a field is accessed in a class.

A practical example is the deck of cards mentioned in the introductory slide (fancied up to show a few things working together):

```
import java.util.Random;

import java.util.Arrays;

public class Deck {

    //Two enums to express the possible cards.

    private enum Suit {HEARTS, SPADES, DIAMONDS, CLUBS; }

    //We'll make it a short (Euchre) deck, just to make the printing below less of a wall of text.

    private enum Value {ACE, TEN, JACK, QUEEN, KING; }

    //Other stuff just to make a more interesting class

    private record Card(Suit suit, Value value){

        @Override

        public String toString() {

```


## Making that a little fancier

Now if you were paying close attention, you'll notice that we initially called Enums "Enum _Classes_". This is not without reason - in Java, Enums are implemented as a special type of class! One way to think of them is as a class that has a fixed number of pre-declared objects - the values!

So you don't need a constructor, because you can't create any more (or less) of them, but you also have exactly those instances, which means you can also use direct equality comparison, so unlike most objects, this code works as you might naively expect:

enum Example { <fill in some values here>; } Example e1 = ... Example e2 = ... if (e1 == e2) { //blah blah }

This is because for enums, the result of `.equals` _is the same as comparing references,_ which is what `==` does with objects, because you can't have two copies of the same enum value!

As enums are classes, you can also add methods and certain types of fields to them! Returning to the `Deck` example, we can move some code to better spots:
```
import java.util.Random;

import java.util.Arrays;

public class Deck {

    //Two enums to express the possible cards. NOW WITH METHODS!!!

    private enum Suit {

        HEARTS, SPADES, DIAMONDS, CLUBS;

        @Override

        public String toString() {

            return switch (this) { //What am I?

                case HEARTS -> "♥";

                case SPADES -> "♤";
```


We won't go deep into examples here (particularly with declaring Enums that have constants in them), but remember that you can do this.

As a particularly application, you can implement the Singleton Pattern in Java by making the desired singleton class an Enum - then not only do you have a single instance of the class, this is guarantee _by the compiler_. You don't need to do any fancy checking, or control access to constructors or anything - it's just not possible to have anything other than exactly one instance of the class.


## Python Enums

Python also has enums, that fall somewhere in between Java's approach and the old C style enums.

We haven't quite done everything to make this make sense, but to create an enum in Python, you need to import the `Enum` class from the `enum` library, then create your enum by extending `Enum`, and listing a series of names associated with values. In an example stolen straight from the Python documentation:

```

from enum import Enum

class Colour(Enum):

    RED = 1

    GREEN = 2

    BLUE = 3

c = Colour.RED

print(c)
```


As they are classes in Python as well, you can do some of the same things as in Java, such as adding methods:

```

from enum import Enum

class Colour(Enum):

    RED = 1

    GREEN = 2

    BLUE = 3

    def __str__(self):

        return "This is the colour red."

    def __repr__(self):

        return self.__str__()

c = Colour.RED

print(c)
```


However there's something a little different - the values are not exactly _instances_ of the class - they're just a list of values, and can kind of be anything. Although you would normally only see integer values from 1 to 𝑛n, that's not required:

```
from enum import Enum

class Colour(Enum):

    #There's no rhyme or reason to these values

    RED = "red"

    GREEN = 2

    BLUE = 3.0

    def __str__(self):

        return "This is the colour red."

    def __repr__(self):

        return self.__str__()

c = Colour.RED
```


A bit stupider:

```

from enum import Enum

class Colour(Enum):

    # We can really mess things up

    RED = 1

    GREEN = 1

    BLUE = 1

    def __str__(self):

        return "This is the colour red."

    def __repr__(self):

        return self.__str__()

# Now this doesn't work!

```

So enums in Python work well when you use them as expected, but they have none of the protections or guarantees of Java Enums.


## C Enums

Just because I keep mentioning them, enums in C are just aliases for the numbers 0 to "number of enum values" - 1. However they are automatically assigned and can't be messed with, unlike in Python, so they don't have the type safety of Java Enums, but they do have the fundamental property of being a fixed number of defined, different values:

```
#include <stdio.h>

enum Suit {HEARTS, SPADES, DIAMONDS, CLUBS};

enum Suit s; //Yeah, this syntax is weird... but you know... C...

int main() {

    s = SPADES;

    printf("%d", s); //Secretly it's just a number!

    return 0;

}
```

