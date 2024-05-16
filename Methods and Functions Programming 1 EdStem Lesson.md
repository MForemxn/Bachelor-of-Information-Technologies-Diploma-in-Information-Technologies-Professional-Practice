## What are Methods for?

Finally, after much fanfare, we get to talk about methods, the second sort of member a class can have, alongside member variables.

The first thing to cover is what are methods for? Of course you have seen methods in use already (`PrintStream.println(String)`, `Scanner.nextInt()`, etc.), so have some idea what the point is. Methods are pieces of code that take well defined inputs and perform some task.

We create methods when we identify some well defined task that our program is going to perform over and over again.

Thus methods are the basic element of _code reuse_ in Java.

As Java is an object oriented language, methods are also the primary mode through which we interact with classes and objects. Normally a class (and hence its objects) will have member variables, but we don't usually want other parts of the program accessing these variables - methods mediate the access, and define the behaviour of classes their objects. Of course because Java is rather strictly object oriented (not perfectly though), methods must be declared inside a class (they can't just be off by themselves).

Or put another way, methods are the _actions_ a class or object can take. Data are the nouns, methods are the verbs.

## Basic Method Syntax in Java

The syntax for declaring a method is possibly the single most complicated piece of syntax in Java, largely thanks to there being a number of optional components.

To begin with, we'll just start with a minimal selection of those components.

A basic method declaration (also called a header or signature) has the form:


```
<access modifier> [static] <return type> <name>(<parameter list>)
```



The method header is then followed by a block of code surrounded by braces `{ <code> }.`

The basic components are (each of these are discussed in more detail in the next few slides):

1. `<access modifier>`: there are four access modifiers in Java, for the moment we'll only mention `public` and `private`. These control what parts of the program can access this method. `public` means everything in the program can, `private` means that only the class that contains the definition and objects of that class can.
    
2. `[static]`: the keyword `static` is an optional modifier (that's what the square brackets mean) that makes the method available from the _class_, not just from an object of that class. This means we can call a `static` method without having to create an object first. `static` can be used on things other than just methods too - we can have `static` member variables, useful for program constants etc.
    
3. `<return type>`: the type (in the same sense as the type of a variable or expression) of the value that is returned by the method, i.e., what it's going to give back when it's done. There is a special keyword to indicated that a method doesn't return anything: `void`.
    
4. `<name>`: 'every ' method needs a name (there is an exception to this, but you won't officially see that until next semester - _lambda functions_). This is no different to a variable and when writing methods, you should choose a descriptive name that indicates what the method does, usually in a question or verb-like form. Method names in Java should start with a lowercase letter, with every subsequent word in the name starting with an uppercase letter (again, the same as variable names).
    
5. `<parameter list>`: A method has a comma separated list of parameters that gives the definition of the data that's passed _in_ to the method. These look like variable declarations (effectively they are).
    

To get a better idea, let's look at concrete example:

```
import java.util.Scanner;

public class Add {

    private static int add(int a, int b) {

        return a + b;

    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int m = sc.nextInt();

        System.out.println(add(n, m));

    }
```


The `add` method has

1. access modifier `private`, so only this class and objects made from this class can use it,
    
2. the optional `static` keyword/modifier (so that it can be called from the `main` method without creating an object),
    
3. a return type of `int`,
    
4. name `add`,
    
5. and a parameter list consisting of two `ints` which will be called `a` and `b` inside the method (regardless of what they were called outside).
    

We can also look at the now familiar `main` method in this light:

1. it is a `public` method, so any part of the program can call it,
    
2. it is also `static` - it needs to be called right at the start of the program where there's no objects, so it absolutely has to be `static`,
    
3. it doesn't return anything, so has return type `void`,
    
4. it's called `main`,
    
5. and takes a single parameter, an array of `Strings` called `args` (these are the command line arguments passed to the program, if any).
    

Just to show the implications of not being `static`, here's the same program, but modified so that `add` is no longer `static`:

```

import java.util.Scanner;

public class Add {

    private int add(int a, int b) { //No longer static.

        return a + b;

    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int m = sc.nextInt();

        Add adder = new Add(); //Now we have to create an object.

```

## Some Details About Return Types and Return Statements

The return value of a method is the primary tool for getting information out of a method. While it is certainly possible for methods to modify values outside the method, this is not a good way of transferring information. Some methods exist precisely to change values outside the method, but these will typically have return type `void`. Normally, as a Java programmer, a method either returns a value or modifies something, not both. Of course there are always exceptions.

A method in Java can only return a single value. It may be a complex value (e.g. a list of objects, each containing their own data), but it has to be returned as a single entity. Underlying this is an OO design principle. If you have written a method that needs to return two separate things, you may be writing the wrong method and should break the problem down further (or work out why they have to be together and put them together).

The existence of a return type that isn't `void` also requires a method to have at least one (provably reachable) `return` statement. The `return` statement is the actual point where the return value is generated, the method terminated and control (along with the return value) given back (_returned_) to whatever piece of code called the method. The value returned must, of course, have the same type as the declared return type.

The following methods have well defined `returns`:

```

import java.util.Scanner;

public class Factors {

    public static boolean isFactor(int f, int n) {

        return n % f == 0;

    }

    public static void printFactors(int n) {

        for (int i = 2; i <= n; ++i) {

            if (isFactor(i, n)) {

                System.out.println(i + " is a factor of " + n + ".");

            }

```

- `isFactor(int, int)` returns a `boolean`, and has a `return` statement that does so (and no matter what input is given, a `return` statement is reachable.
    
- `printFactors` and `main` both have return type `void`, thus no return statement is necessary.
    

If we mess things up, we get a good old incompatible types error:

```
import java.util.Scanner;

public class Factors {

    public static boolean isFactor(int f, int n) {

        return n % f; //this attempts to return an int, rather than a boolean

    }

    public static void printFactors(int n) {

        for (int i = 2; i <= n; ++i) {

            if (isFactor(i, n)) {

                System.out.println(i + " is a factor of " + n + ".");

            }
```



If we really mess up, and forget the return statement, the compiler detects this and complains:


```
import java.util.Scanner;

public class Factors {

    public static boolean isFactor(int f, int n) {

        //oops...

    }

    public static void printFactors(int n) {

        for (int i = 2; i <= n; ++i) {

            if (isFactor(i, n)) {

                System.out.println(i + " is a factor of " + n + ".");

            }

```

Or if the compiler can't guarantee that a return statement is reached we get the same missing return statement error:


```
import java.util.Scanner;

public class Factors {

    public static boolean isFactor(int f, int n) {

        if (true) return n % f == 0;//The compiler can't tell that this is reachable.

    }

    public static void printFactors(int n) {

        for (int i = 2; i <= n; ++i) {

            if (isFactor(i, n)) {

                System.out.println(i + " is a factor of " + n + ".");

            }
```


Essentially it does a simple flow analysis of the program, and is only happy when each possible path has a return statement, so this quite stupid code satisfies the compiler:

```

import java.util.Scanner;

public class Factors {

    public static boolean isFactor(int f, int n) {

        if (n < 10 ){

            return n % f == 0;

        }

        else {

            return n % f == 0;

        }

    }

    public static void printFactors(int n) {

```

Note that we can actually put `return` statements in methods with `void` return types, the `return` just can't take an argument. In this case, it effectively just terminates the method, we can use that to stop a method "early":


```
import java.util.Scanner;

public class Factors {

    public static boolean isFactor(int f, int n) {

        return n % f == 0;

    }

    public static void printFactors(int n) {

        for (int i = 2; i <= n; ++i) {

            if (isFactor(i, n)) {

                System.out.println(i + " is a factor of " + n + ".");

            }
```


And this example, which is both missing an access modifier and ridiculous:

![](https://static.au.edusercontent.com/files/lXTOZlMNMr6GTM2dAISkMOv1)

[xkcd 221](https://xkcd.com/221/)

## Parameters and Parameter Lists

The parameter list defines what data the method expects, particularly in terms of the types, and also declares what variable names will be used inside the method to refer to that data.

The list is effectively a comma separated set of variable declarations. The variables declared exist only inside the method (though the data may exist outside as well), and they are removed once the method terminates.

The number and ordering of the parameters is strict, and the compiler will only allow a method call if the values pass to the method match in order, number and type. The compiler will not fill in any blanks, and unlike several other languages, Java does not allow default values for parameters.

In fact, the type, order and number are how Java figures out which method to run, because something Java does allow is reusing the same method name, this is called _method overloading_ or _ad-hoc polymorphism_. You have actually already seen this repeatedly, though didn't know it - if you call `System.out.println(...)` with data of different types in place of the `...`, you're actually calling different version of the method. In fact `PrintStream` (that's the actual class that gives `System.out` it's type) has [10 versions](https://docs.oracle.com/javase/10/docs/api/java/io/PrintStream.html) of `println` for different parameter lists.

Building on our previous example, we can overload the `isFactor` and `printFactors` methods to do a common factor computation:

```
import java.util.Scanner;

public class Factors {

    //Two parameter version

    public static boolean isFactor(int f, int n) {

        return n % f == 0;

    }

    //Three parameter version

    public static boolean isFactor(int f, int n, int m) {

        return n % f == 0 && m % f == 0;

    }

    //One parameter version

```

If you try and call a method with the wrong type of parameters you get our old friend, an incompatible types error:

```
import java.util.Scanner;

public class Add {

    private static int add(int a, int b) {

        return a + b;

    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println(add(1, "1"));

    }

}
```


If you give the wrong number of parameters, you get a cannot apply error. Note particularly the "reason" - this clearly indicates that the parameter list is the wrong size:


```
import java.util.Scanner;

public class Add {

    private static int add(int a, int b) {

        return a + b;

    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println(add(1,2,3));

    }

}

```

## Variable Arguments

Since version 5, Java has also had a limited ability to handle methods with a variable number of parameters.

While a lot of the sensible cases can be handled with overloading, sometimes it is useful to assemble a collection of data in a more ad-hoc way. This is achieved via a bit of syntactic sugar called _variable arguments_ or _varargs_ for short.

If desired, the final (and only the final) parameter in the parameter list can be specified with `<type> ... <name>`, indicating the method should accept a sequence of parameters of type `<type>` of unknown length (perhaps even length zero). This limits the possibilities to data of the same type, and they can't be jumbled in with the initial parameters.

In the background, what happens is Java effectively collects these in an array, and the parameter effectively works as such, but in the code you get to avoid declaring and initialising an array.


```
public class Sum {

    public static int sum(int ... nums) {

        int sum = 0;

        for (int n : nums) sum += n;

        return sum;

    }

    public static void main(String[] args) {

        System.out.println(sum(1,2,3));

        System.out.println(sum(9,3));

        System.out.println(sum());

        System.out.println(sum(2,2,2,2,2,2,2,2,2,2,2,2));

    }

}
```



## A Message From Our Sponsor

There's a little more to say about how parameters are handled, particularly how the values relate to the values outside the method, however it is helpful to understand a little more about how variables and their data are handled in memory first.

These two things will be dealt with in the following two lessons.

## Functions vs Procedures

Methods can be broken down into two categories: functions and procedures. Of course in practice the terminology gets mixed up all the time, but being aware of the concepts is an important component of understanding good programming:

1. _(pure) functions_ have no side-effects and no hidden inputs. That is, they don't change data outside the function, and if you give it the same parameter values, it will always return the same result.
    
2. _procedures_ have side-effects. In general this is their purpose, and will often have return type `void` because their job is to change something about the object they're run on, or something similar.
    

Java has no (syntactical) way to distinguish between functions and procedures, but as a programmer, you should think about what you're trying to implement. In general, implement things as functions, and only write procedures when you're sure that's what needs to be done. The key point here is clarity in intent - if you don't know what you mean to do, you may end up with bad code.

In the following code, the `getValue` method is a function, it changes nothing, and just returns a value. The `setValue` method changes the data in the class, and is a procedure:


```
public class Example {

    private int value;

    public int getValue() {

        return value;

    }

    public void setValue(int newValue) {

        value = newValue;

    }

}
```


## Is there anything that Java makes easy?

So far we've seen that Python has a number of convenient built-in data structures for simple but common use-cases (`list`, `dict`, `tuple`, `set`).

Java, being Java, never makes anything quite this simple. We will soon see how Java handles the idea of a list and touch on how things like sets and hashmaps are implements in doing so, but that still leaves the question of what do you do if you just want a simple data structure to hold a small collection of data of different types, but you don't need all the fancy bits to make it function - in short, it's just **Plain Old Data**.

Recently, Java has added a tool to fulfill this requirement - _records_.

Of course the back end is actually quite complicated (but reasonably clever - it allows the introduction of records without any changes other than adding the `record` keyword and a small bit of code to the compiler.

Records are designed to somewhat emulate C-style `struct`s, which are, at heart, just a set of variables bundled together so that you can move them around as one unit. You _can_ do a similar thing with classes in Java, but it's still relatively syntactically bulky. Records introduce new syntax, very similar to methods (sort of a cross between methods and classes) and do some back-end stuff to make it work so you don't have to think about it.

## Record Syntax

Although we haven't seen (the details of) classes yet, when you make a record, you're actually making a special type of class with a standardised format. So when we see the components of classes later on (next week) you can match them up to what's happening with records.

## Definition

A (basic) record is defined with the following syntax:

```
<access modifier> record <Name>(<type> <name>[, <type> <name>]*){}
```

Or in English, it has an access modifier (probably `public` for everything we'll do with them), the keyword `record`, a name for the record, then a list of variable declarations just like the parameter list of the method.

The variable declarations have the same basic rules as a parameter list as well, but you can't use varargs in this case.

Note also the `{}` at the end - when we see classes, there is more we can do here, but for the moment, this is just a concession to a relatively painless implementation of a new feature.

So a simple record representing a point in 2D space might be something like:

public record Point(double x, double y){}

Or a record that gives student data:

public record Student(String name, int studentID, int courseID){}

## What does this give you?

This definition gives a record type that holds variables with the same names as whatever you put in the list, and methods also with those names to retrieve the values. You also get a constructor (a special method, see next week) that allows you to build an instance of the record type.

Note that it does not give you methods to _change_ those values. This can be added, but it is not the default behaviour. So the simple version of a record is very similar to Python's `tuple` in application.

## How do I make one?

Once you have the record defined in a suitable place (a `public` record must be defined in its own file with the same name as the record, just like a class, non-`public` ones can be defined elsewhere), you create an instance of one with the `new` keyword and the values you want in the variables (in the order they're defined, just like a method):

```
public class ExampleOfARecordInUse {

    record Point(double x, double y){} //Definition of the record type

    public static void main(String[] args) {

        //Now we can create one. The syntax should be a little familiar.

        Point p = new Point(1.5, -3.2);

        System.out.println(p);

    }

}
```



## How do I use the values?

The record comes equipped with a method for each variable, with the same name, that returns the value of that variable, so if you have a `record` `Rec` with a variable `x`, it will _automatically_ have a method called `x()` that returns the value of that variable.

The following example gives a more natural version:


```
public class ExampleOfARecordInUse {

    //As we define Point as having a variable x and a variable y,

    //it automatically gets two methods:

    //

    //public double x() {

    //  return x;

    //}

    //

    //and 

    //

    //public double y() {

    //  return y;

    //}

    record Point(double x, double y){}

```

## What else can they do?

Records are actually implemented as specialisations of Classes - so there's actually a lot more that can be added, they can have additional methods, private members and variables, they can implement interfaces, use Generics, and _almost_ everything a standard Java class can do, but we need to see the details of classes first!

## Functions Encapsulate Code

As with Java, Python has a way of collecting a section of code together in such a way that it has a clean, clear entry point and exit point, allowing the code to be reused by other parts of the program as necessary.

In Python this are typically referred to as _functions_.

On significant difference between Python and Java is that whereas _everything_ in Java is inside a class of some kind, Python allows code that is not (apparently) in a class, and likewise it allows functions that are not part of a class.

Python does support object oriented programming however, so classes certainly tend to have functions that belong to the objects of that class (or the class itself). It can also treat functions as _first class citizens_, which means they have the same status, in some respects, as variables.

## Basic Function Syntax

Starting with simple, unattached functions, the basic definition syntax is

```
def <function name> (<parameter list>): <function body>
```

Where we replace `<function name>` with a suitable name for the function, `<parameter list>` is a (possibly empty) list of parameters (or arguments) that the function receives, and `<function body>` is a non-empty block of code (if you want to write a function but don't know what it does yet, you can use the null-op keyword `pass` as a placeholder).

Like Java, we can have functions that return a value, using the `return` keyword in much the same way as Java. It is not obvious from the function signature however that a function returns something, and if it does, what it returns.

Here's a simple (and largely pointless) function:


```
def add(a, b):

    return a + b

print(add(1,2))
```


Note that the lack of type safety in Python means things can get a bit odd.

```
def add(a, b):

    return a + b

print(add('1','2'))
```



And we have to rely on runtime errors to find problems.

```

def add(a, b):

    return a + b

print(add([1,2,3], {'a' : 'first'}))

```

This is a particular demonstration of the importance of good documentation. In a language like Python, documentation is often the only (practical) way to discern how to use a function.

The obverse of this however is that, as long as the function caller passes in data that works with whatever happens in the function, the code will still run, which is occasionally useful.


## Type Hints

Although Python is dynamically typed, and thus we have no control over variable types, to make things a bit more readable, function declarations can be decorated with type hints.

These are not enforceable in any way (while the future is uncertain in general, making them enforceable would be very un-Pythonic), but they can help provided a degree of readability and structure when writing functions.

The basic syntax of type hints is to follow each parameter name with `: <type>`, where `<type>` is the expected type of the data, and the function definition with `-> <type>` to indicate the expected return type.

Taking an example from the previous slide, and adding type hints, we get:

```
def add(a: int, b: int) -> int:

    return a + b

print(add(1,2))
```


Notice that we can still happily pass in non-`int` values and return non-`int` values:


```
def add(a: int, b: int) -> int:

    return a + b

print(add('1','2'))  # Pass in a str, get a str out, the type hints aren't enforceable

```


## How Parameters are Passed

Python uses a parameter passing model called "Call-by-Object", which, in practice, turns out somewhat similar to Java.

If a immutable data like integers, floats, strings or tuples are passed, it works like pass-by-value - essentially the function gets a copy of the data:


```
def add3(num):

    num += 3

n = 0

add3(n) #this method call doesn't change n

print(n)
```


If mutable data like lists are passed, it works like pass-by-reference, and the original data can be modified (but note that the variables inside the function are not the same as the ones outside):

```

def append3(l):

    l.append(3)

list = ['a', 'b', 'c']

append3(list)  # This will change list

print(list)
```


```

def overwrite(l):

    l = 17

list = ['a', 'b', 'c']

overwrite(list) # This won't change list

print(list)

```

In the second example, `list` and `l` are two separate variables, and the assignment operation on line 2 just points `l` at different data. `list` is still point at the original list data, and remains unchanged. In the first example however, `l` and `list` are still different variables, but the append operation is invoked on the data that they are both pointing to, rather than modifying the value of the variables (remember Python variables are actually references - they indicate where some data is in memory, so their value is an address, rather than the data itself).


## Fancy Things with Parameters

Where Java is quite strict with its argument syntax, Python is a little freer. Python allows the specification of default arguments, using the parameter names as keywords to assign arguments to parameters, and variable length arguments.

We'll start with default arguments: Python allows the programmer to supply a default value for an argument, which then lets the function be called without giving a value for that argument.

```

def msg(name, msg = "Hi!"):

    print(name + ", you have a message: " + msg)

msg("Luke")

msg("Rohit", "Good Work")

```

Arguments can also be supplied by naming which parameter they correspond to.

```
def msg(name, msg):

    print(name + ", you have a message: " + msg)

msg(msg="Hi!", name="Luke") # Note the arguments are in a different 

                            # order to the parameters.

```

By prepending the name of the parameter with `*`, we create a variable argument list, similar to the `...` syntax in Java, but without the type (or position, if we name the arguments) restriction.


```
def msg(*names, msg):

    for name in names:

        print(msg + ", " + name)

msg("Luke", "Cat", "Rohit", "Matthew", msg="Hi")

```

Finally, we can supply what's called _keyword arguments_, which look like named arguments, but for parameters that aren't specified. This effectively collects the arguments and makes a `dict`. This is done by prepending the argument name with `**`.


```
def record(**data):

    print(data)

record(name="Luke", job="Lecturer", employer="UTS")
```

