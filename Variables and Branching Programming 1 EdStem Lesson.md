[[Conditionals]][[Programming Language]][[Boolean]][[Syntax]][[Syntax]][[Programming Language]][[Boolean]][[Syntax]][[Syntax]][[Numeric]][[Numeric]][[Conditionals]][[Programming Language]][[Boolean]][[Syntax]][[Syntax]][[Programming Language]][[Boolean]][[Syntax]][[Syntax]][[Nu[[Input]]]][[Numeric]]## Programming and [[Programming Languages]]

It is hopefully readily apparent that computer programming is one of the mos[[Input]]ful skills in the modern world. Almost everything relies, in some part, on computers, from food production, to logistics, to entertainment.

Given that you're in this subject, it seems likely that you also agree that programming is a pretty important skill. Hopefully you also enjoy it.

At the simplest level, [computer] programming is the practice of telling a computer what to do. This can be achieved by writing the correct sequence of zeroes and ones to a suitable piece of memory (one upon a time this was the only way).

![](https://static.edusercontent.com/files/MZ5E2OBgflRudOtf9wVHTCne)

Over time, inputting raw binary was replaced with coded instructions that simplified things, but was essentially the same [[Process]] of explicitly moving the contents of computer memory around.

After a variety of experimental developments, John Backus developed [FORTRAN](https://en.wikipedia.org/wiki/FORTRAN) in 1954, allowing a higher level approach to programming, where the programmer could be a little more concerned with what to do, rather than telling the computer exactly how. Fo[[Char]]ample, the fol[[String]] code generates subsets of a base set of size 𝑛n:
```
    SUBROUTINE NEXSUB(N, IN, MTC, NCARD[[Char]])

    INT[[String]]IN(N)

    LOGICAL MTC

    IF(MTC) GO TO 20

    DO 11 I = 1, N

11  IN(I)=0

    NCARD=0

    MTC=.TRUE.

    RETURN

20  J=1

    IF(MOD(NCARD,2) .EQ. 0) GO TO 30

40  J=J+1

    IF(IN(J-1) .EQ. 0) GO TO 40

C   IF(J .GT. N) J=N

30  IN(J)=1-IN(J)
```



So much easier, right?

Fortunately, [[Programming Language]] development didn't stop in 1954, and modern languages (usually) have nicer [[Syntax]], more powerful libraries, and more [[Flexibility]] in how you a[[Boolean]] using them. That said, once you've programmed for a little while, that FORTRAN code is actually pretty straightforwa[[Boolean]]ere are now thousands of [[Programming Languages]] available, with hundreds in active use, so what are the basic things we need in a [[Programming Language]] for it to be "useful"?

## The BASIC Tools of Programming

There are many ways to structure a [[Programming Language]], but underlying all of them (or at least the general purpose, useful ones) are a small collection of core concepts:

- **[[State]]**: A [[Programming Language]] needs a way of (explicitly or implicitly) managing what [[state]] the program is in.
    
- **[[Branching]]**: We need to be able to make choices. Particularly we need to be able to make choices about which parts of the code to execute (often based on the [[state]] of the program).
    
- **[[Repetition]]:** We also need to be able to repeat a piece of code, managed by some controlling parameters.
    

The combination of these concepts, along with some basic functionality such as being able to read and write files, display things on a monitor etc., form all the raw elements we need to build a general purpose [[Programming Language]].

The central difference between [[Programming Languages]] is in how they choose to implement these three elements.

## Programming Paradigms

Although there is no clear-cut classification of [[Programming Languages]] into categories, there are some useful paradigms which imply certain choices about how basic elements are implemented (particularly, but not limited to, [[state]] and [[repetition]]):

- **Imperative Languages**: [[State]] is expressed through [[variables]] and their values. The program expresses how to manipulate these [[variables]] to achieve the desi[[Conditional Statements]]igm is also embodied in the structure of most computers. It ca[[Syntax]]urther developed into (at [[Conditional Statements]]ms:
    
    - **Procedural Languages:** The program is broken[[Syntax]]smaller units (_procedures_) that operate on their inputs and produce [[Output]] - in a sense, mini-programs. This allows modularisation and [[abstraction]] of some or all of the program, along with ot[[Programming Language]]thon]]** originated as a procedural language.
       [[Syntax]]- **[[Object]] Oriented Langu[[Programming Language]] encapsulated in _objects,_ along with procedures and[[Syntax]]ions to manipulate that [[state]] in a (hopefully) controlled manner. **[[Java]]** is an [[Object]] oriented language, and **[[Python]]** has support for an [[Object]] oriented approach.
        
- **Declarative Languages:** These languages emphasise _what_ is to be computed, rather than _how_. [[State]] is mor[[Syntax]]meral, and may not be directly under the programmer's control. There are several sub-paradigms of [[Syntax]]ative languages, but we will only mention one here:
    
    - **Functional Languages:** These languages focus on computation as the application of functions. [[State]] is typically restricted that implied[[Syntax]]Function]] inputs, and local information, rather than allowing access to some global [[state]][[Syntax]] also heavily employ recursion (we'll get to this later).
        

In practice, few languages (especially modern ones) fall into a single category, and most explicitly attempt to offer features of seve[[Switch Statement]]g Paradigms]], or can be forced by the programmer into one paradigm or another.
[[Switch Statement]]*[[Java]]**, one of the languages we will be using to learn to program, is nominally an [[Object]] oriented language, however the determined programmer can employ it in a procedural style, and more productively, a functional style. **[[Python]]** is primarily procedural, but includes support for [[Object]] oriented and functional styles of programming.

## Other Features of Programming Languages

Naturally the distinction between [[Programming Languages]] is not limited to the basic choices or paradigms. There are many other choices made in their design, which, as budding programmers, you can use as starting points for unnecessarily dogmatic arguments about which is best:

**[[Syntax]]**: How the language allows the programmer to express their intent in a grammatical sense. Compare declarations of a variable in [[Java]], [[Python]] and Kotlin:


```
// Java

int i = 42;
```



```
# [[Python]]

i = 42
```


```
// Kotlin

var i : Int = 42;
```



**Semantics:** The language rules about what statements are _meaningful._

**Type Systems:** How the language deals with information of different types, and how the programmer can interact with these systems.

## [[Java]] the La[[Java|ngua]]ge

Now that we have some basic terminology about [[Programming Languages]], we can [[state]] the following:

> [[Java]] is a generic, general purpose [[Programming Language]] that is primarily a [[Class]]-based [[Object]] oriented language, but allows both funct[[Numeric]]nd procedural programming. It i[[Char]]ntactically derived[[Float]] C, is strongly st[[Numeric]]y typed and has automatic garba[[Char]]ollection.

This st[[Float]]on't mean a lot if you haven't done a lot of programming, but this gives you a reference point against which to start building your understanding of both [[Java]], and [[Programming Languages]] in general.

## Some Terminology

As mentioned, [[[String]]]'s [[Syntax]] derives most directly from C and C++, which themselves draw[[String]]early languages back to at least Algol. We'll introduce some terminology now, but with the caveat that there's more here than you need to know right now.

[[Java]] programs consist of a sequence of **statements** arranged into **blocks**. The blocks may be nested, with the top level being that of a **[[Class]]**. A [[Class]] is a definition of every **[[Object]]** of that sort. Inside a [[Class]] there are **methods** and **[[data]]** **members**.

![](https://static.au.edusercontent.com/files/jY3MJqonNVEGbdrOElQ8cTmR)

**[[Variables]]** are [[Java]]'s primary mechanism for storing the [[state]] of the program. [[Variables]] are segments of memory that store [[data]]. [[Variables]] also have an associated **type**. This is a way of specifying what [[data]] we expect to see stored in that variable. There are two sorts of variable types in [[Java]], **primitives**, which simply store a value, and **o[[Object]]**, which are structures that combine [[data]] and **methods** (see b[[[Object]]t]]for operating on that [[data]] (or sometimes just doing[[Object]]s[[Object]]ll look at both of these in more detail as we go.

**[[[[Object]] members** (or member [[variables]], or similar), are the [[variables]] that belong to the [[Class]] or to the objects created using that [[Class]] definition. The[[Object]] be other [[variables]] which only belong to lower level b[[Object]]than the [[Class]]. These are typically referred to as [[Numeric]] [[variables]].** In contrast, [[variables]] which ar[[Numeric]]sible by all classes and objects in a program are called **global [[Variables]]**. If all objects made from given [[Class]] share the same instance of a variable, i[[Boolean]]**[[Class]] variable**, if each [[Object]] has it[[Boolean]]opy, it is an **[[Object]] variable** or **instance variable**.

**Methods** are named blocks of code that can take [[Input]] **parameters** and return an [[Output]] value. They may or may not access information outside of the method:

- **Procedures** are methods that access information outside the method (or in particular, modify [[State]] outside the procedure).
    
- **Functions** are methods that work with l[[Boolean]]State]] only. Another way of viewing this is [[Boolean]]ven the same [[Input]] parameters repeatedly, a [[Funct[[Syntax]]will always return the same [[Output]] - i[[Syntax]]ot affected by ot[[Boolean]]ts of the program (or world).
## Some[[Boolean]]onventions (and one Rule)

Before looking at the rules for writing [[Java]] programs, there's a couple of conventions that [[Java]] programmers tend to use - they're not enforced (except maybe in the workplace), but they will [[Help]] you understand other people's code, and [[Help]] others understa[[Class]]urs:

- Names of classes start with[[Class]][[String]]se letter - `HelloWorld`, not [[String]]_world`.
    
- Names of [[Variables]] start with a lowercase letter - `myNumber`, not `MyNumber`.
    
- Names made up of multiple words (like t[[Numeric]] above) use uppercase for[[Numeric]]art of each word from the second word on (the first word is covered by the previous two conventions).
    
- Constants are all uppercase with words separated by underscores (`_`) - `Math.PI` is the [[Constant]] `PI` inside the [[Class]] `Math`, `[[[[Integer]]]].MAX_VALUE` and `[[[[Integer]]]].MIN_VALUE` are the maximum and minimum values of an `int` variable.
    
- Don't use underscores (`_`) in names (with the exception of constants).
    
- Whitespace is only a separator in [[Java]] (you don't have to indent a particular way or anything), but you should indent every time you start a new block level - this will become clearer when you see more and more code.
    

The one rule that you actually definitely have to know, is that [[Java]] is _**case sensitive**_ - `bob` is different to `Bob`, and to `BOB`, `BoB`, `BOb`, `boB`, `bOb` and `bOB.` So take care when writing [[Class]] and variable names (or add all eight variants of Bob as variable names to really annoy people).

## Basic Java Syntax

We can now look at a simple program that demonstrates several basic syntactic elements of [[Java]]. (Note: you can run and modify this code! Play around! Maybe[[Array]] the descriptio[[Array]]st though!)


```
public class Hello {

    public static void main(String[] args) {

        System.out.println("Hello 41039!");

    }

}


```
This program consists of a single [[Class]]. Line 1 gives the [[Syntax]] for defining a [[Class]]: `[[[[Class]]]] <name>.` The name is chosen by the programmer, and when objects are created from this class, their type is `<name>`, whatever that happens to be. So in this case, this [[Class]] can be used to create objects of type `Hello`, although in this program effectively none are ever created. The `public` at the start of Line 1 is an _access modifier_. For now, we'll stick with `public` whenever we need such a thing, but in sh[[Class]]`public[[Class]]ns that everything in the program can access this [[Class]] and its objects. To define what the contents of the [[Class]] are, we enclose those contents in and open `{` and close `}` brace. Thus thus [[Class]] definition runs from Line 1 to Line 8.

Starting on Line 3, we have a method. The [[Syntax]] for declaring a method in [[Java]] is `<return type> <name>( <parameter list>[[Class]]...[[Class]]Here the return type is `void`, which means the method does not return anything when it's done, and the name is `main`. Its parameter list consists of a single parameter `String[] args`. Again, we don't need to understand this yet, but it's an array of Strings called `args`. The method has also been declared `public` (everything[[Array][[Array]]rogram can se[[Fu[[Function]]d `static` (it only needs class variables to work - no object variables are necessary, and hence no object of this class needs to be created to run this method). The method contains the code between the `{` on Line 3 and the `}` on Line 7.

This `main` method happens to be a special one in Java. For a piece of Java code to be runnable (i.e. a program), it needs at least one `main` method with exactly the signature we've just seen: `public static void main(String[] args) { ... }`. Later on we'll see classes with many other methods.

Line 5 contains a _statement_. Every statement in Java is terminated by either a `;`(semicolon), or in a small number of cases, a block of code surround by open `{` and close `}` braces. The statement on Line 5 happens to print something out, as you will see if you hit run.

## Primitive [[Data]] Types

Now that we've seen a very small program, we can start thinking about what we can put into that program. As Java is an imperative programming language, there's little we can do without variables (at least without great effort).

As mentioned, Java has two sorts of types, we'll look at the first one here: [[primitive types]].

Variables of a primitive type simply store a value, and the type indicates what values they might be.

- `byte` - an 8-bit integer, stores whole numbers in the range −128−128 to 127127 inclusive.
    
- `short` - a 16-bit integer, stores −32,768−32,768 to 32,76732,767 inclusive.
    
- `int` - a 32-bit integer, stores −231−231 to 231−1231−1 inclusive.
    
- `long` - a 64-bit integer, stores −263−263 to 263−1263−1 inclusive.
    
- `float` - a single precision 32-bit floating point number, stores decimal numbers with reasonable, but limited accuracy.
    
- `double` - a double precision 64-bit floating point number, more precise than a `float`, but takes more space.
    
- `boolean` - has only two possible values, `true` or `false`.
    
- `char` - stores a 16-bit Unicode character.
    

It should be reasonably obvious that several of these [[data]] types are partially compatible: `byte`, `short`, `int` and `long` all store whole numbers with increasing ranges; `float` and `double` store decimals with increasing accuracy; and in fact `char` is secretly just a `short` that's interpreted in a special way.

In practice, we'll most commonly use `int`, `double`, `char` and `boolean`, but knowing when to use the others is also important (but not needed yet!).

A little more technical information can be found [here](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html).

## Using Primitives: Declaration, Initialisation and Assignment

Let's look at a small program that uses some variables to do something quite dull.

```
public class DeclareAndPrint {

    public static void main(String[] args) {

        int a;

        a = 1;

        boolean b = true;

        b = false;

        System.out.println("a = " + a);

        System.out.println("b = " + b);

    }

}
```



This program is made from a single class `DeclareAndPrint` (compare the name to the conventions mentioned earlier). It has a single method, the `main` method with signature `public static void main(String[] args).`

Lines 11 and 12 just print out the values, so there's nothing too interesting there at the moment, so we'll ignore them for now.

Lines 4-9 include two variable **declarations**, two **initialisations** and three **assignments**. A variable is declared with a type followed by a name, in this case, line 4 declares and `int` called `a`, and line 7 declares a `boolean` called `b`. Assignment in Java is achieved by using the assignment operator `=`. Line 5 assigns the value `1` to variable `a`, line 7 assigns the value `true` to variable `b`, and line 9 assigns the value `false` to `b`. The first assignment of a value to a variable is the initialisation of that variable, so `a` is initialised on line 5, and `b` is initialised on the same line it is declared, line 7. Line 9 is _not_ an initialisation, just an assignment.

(Note that you can mess around with the code in these boxes - try it! Refreshing the page will restore the code)

## A Short Note On Arithmetic

As computers are mathematical constructs, arithmetic forms an important part of their low level functionality, and provides the model for many of the more abstract and complicated things they can do.

In Java, we have access to all the expected basic arithmetic operators: `+, -, *, /`, along with the mod operator `%`, which gives the remainder from a division. The first four work on the integer [[primitive types]] (anything like `int`) and the floating point types (`float` and `double`). `%` only works on integer types.

```

public class Arithmetic {

    public static void main(String[] args) {

        int a = 8;

        int b = 7;

        int c = a * b;

        System.out.println("c = " + c);

        int d = c % (b - 1);

        System.out.println("d = " + d);

    }

```

The example code shows a few of them in action. Try changing things around, and writing more complicated statements to see what happens.

You may also notice the use of `+` to mean something similar to, but not the same as addition! In lines 10 and 14, the symbol `+` is used as the **String concatentation** operator, which joins two `Strings` together (you'll see those in just a moment). If you're really paying attention, you'll see something tricky about that too.

## A Note About the Assignment Operator "="

As we just saw, in Java, values are assigned using the operator `=`, something like `x = 4;`.

This may cause confusion if you are used to the mathematical use of the equality symbol =. Mathematically 𝑥=4x=4 is an assertion that the variable 𝑥x and the value 44 are the same thing.

In Java (and many programming languages), this is not the case, the operator `=` takes the value on the right, and stores it in the variable on the left.

Whether `=` was a good choice for indicating this operation is a different matter...

## Using Classes and Objects: Declaration, null and [[Reference Types]]

Although we won't make our own until a little later, we will start using classes and objects almost immediately.

Classes and objects are different from variables with primitive type in that they can include more than just a single value - they may have many internal values, and most importantly for an object oriented language, they include methods to control access to that [[data]], and perform tasks related to that [[data]] and to the purpose of the class.

To this end, object variables have slightly more complicated behaviour than primitive variables. The object variable itself is just a reference to a spot in memory where the information is stored (in fact, it's a little more complicated, but that can wait for later). So to access the methods and [[data]] members related to that object variable we have to use the `.` operator (called the "dot" operator, or dereference operator).

To give an example that will be very useful, Java includes in its base library a class called `String`. It is used for storing sequences of `chars` - something like the text you're reading now.

```
public class HelloWorld {

    public static void main(String[] args) {

        String s = "Hello World";

        System.out.println(s);

        System.out.println(s.length());

    }

}

```

The code above declares a variable `s`of type `String`, and initialises it with the value `"Hello World"`. `String` values are surrounded by `"`marks, to indicate the start and end of the string.

Lines 7 and 8 print out some things related to `s`.

Line 7 prints the value of the object variable `s` as a `String`. Since `s` happens to already be a `String`, we get the expected `Hello World` out of it (notice that the `"` marks are not part of the actual value).

Line 8 uses the `.`operator to access the `length()`method, which gives the number of characters in the stored string value. In this case, there's 11. Try altering `Hello World` to some other string, and see what happens.

Now that you know roughly what it is, you may have spotted the `.` operator elsewhere in this code. Lines 7 and 8 both use the `System` class, access a class variable called `out` using the `.`operator (because it's a class variable, we don't need an object of that type to use it, we can just use the class itself), and then access the `println(...)` method on `out`, also via the `.` operator. `println` happens to take a single argument, of type `String` (convenient, huh?).

What happens if we _don't_ initialise an object variable?


```
public class HelloWorld {

    public static void main(String[] args) {

        String s;

        System.out.println(s);

        System.out.println(s.length());

    }

}
```



As you can see, Java is pretty strict about making sure variables are initialised, but it won't always catch you. If an object variable is declared, but not initialised, it has a special value: `null`. This indicates that although you have the variable, it's not referencing a piece of memory (a **null pointer** - you will no doubt see this in many error messages, but hopefully not for a little while).

## Commenting in Java

As you program, you will frequently want to put notes in the source code so that later readers (perhaps including you) can figure out what's going on, but without interfering with the functionality of the program.

This is called commenting, and is an integral part of programming.

Java has two ways of putting in comments.

1. Starting a comment with `//`. Everything from that point until the end of the line is now a comment.
    
2. Enclosing a multiline comment between an opening `/*` and a closing `*/`.
    

```
public class Comments {

    public static void main(String[] args) {

        int i = 0; //From here on is a comment. This will be ignored: i = 3;

        /* This is a multiline comment.

        You can write anything in here,

        including code:

        System.out.println(i);

        It will all be ignored by the compiler.

        */

    }
```


You can play around with the comments in the code above, and see how they work and break.

## Putting it into Practice!

We've now seen enough to write some simple programs, but we've seen more things than have been explained. Is there anything you noticed, anything that didn't make sense? Head on over to the discussion board and ask some questions!

After that, it's time to move on to the next lesson, and try to apply some things you have learnt.

## Python the Language

Python, in contrast to Java, is an _interpreted*,_ _dynamically_ typed language, but otherwise it shares many of the main features. It:

- supports object oriented programming;
    
- supports procedural programming;
    
- is an imperative language;
    
- has an automatic garbage collector.
    

Externally however it looks a little bit different, as it does not use the Algol family syntax, though it is not so far removed.

Although Python is often touted as an exciting new language, it is in fact older than Java, and language aficionados will spot some of the rather archaic elements of Python from the start. Java is verbose, but Python is oddly anachronistic.

---

*This is a bit of a simplification.

## The Structure of Python

Just like Java, Python uses **[[Variables]]** as its primary tool for storing the [[state]] of a program.

The program consists of sequences of **statements**, collected into **blocks**. [[Python]] allows the definition of **classes**, which act as templates for **objects**, however unlike [[Java]], [[Python]] also allows code _outside_ of classes. This reflects its background as an interpreted scripting language.

This means that when writing simple programs, [[Python]] is often more straightforward than [[Java]], with a trade-off that [[Java]] offers more opportunity to detect certain sorts of error in a program before it's been run.

[[Python]] allows the definition of **functions**, which can also be either inside or outside a class. [[Python]] functions are, practically speaking, the equivalent of [[Java]] methods, they are sections of code that may take input parameters, perform some task and perhaps return a value. While there are technical differences in exactly how they work in the back-end, this is really just one of the many places where programming nomenclature overlaps and clashes, in [[Python]] "function" is just a general name, whereas it is used for a more precise concept in other languages (deriving from _functional programming_).

## [[Python]]'s Design Philosophy

[[Python]] has an explicit philosophy of programming associated with it (first published in [The Zen of Python](https://www.python.org/dev/peps/pep-0020/)). Whether this philosophy is correct, coherent or useful is an open question, and despite a certain level of dogmatism amongst a certain type of Python programmer, it is rarely followed. It's principles are:

- Beautiful is better than ugly.
    
- Explicit is better than implicit.
    
- Simple is better than complex.
    
- Complex is better than complicated.
    
- Flat is better than nested.
    
- Sparse is better than dense.
    
- Readability counts.
    
- Special cases aren't special enough to break the rules.
    
- Although practicality beats purity.
    
- Errors should never pass silently.
    
- Unless explicitly silenced.
    
- In the face of ambiguity, refuse the temptation to guess.
    
- There should be one— and preferably only one —obvious way to do it.
    
- Although that way may not be obvious at first unless you're Dutch.
    
- Now is better than never.
    
- Although never is often better than right now.
    
- If the [[implementation]] is hard to explain, it's a bad idea.
    
- If the [[implementation]] is easy to explain, it may be a good idea.
    
- Namespaces are one honking great idea — let's do more of those!
    

This leads to proclamations of certain ways of programming as "Pythonic" and others not. Beware anyone who makes such proclamations.

## Basic Python Syntax

Now we can look at the Python equivalent of the first Java program we saw:


```
print("Hello 41039!")
```



That's it. One line.

Again, this is a reflection of Python's design as an interpreted, scripting language. It aims to do away with any unnecessary boilerplate code that is simply not useful in small programs. Contrast this with Java's design intentions to build a language that supported robust, enterprise-level development.

Once we starting writing larger programs in Python however, this apparent simplicity lessens, and some of the strengths of a language like Java become more apparent.

You may also notice that there's no `;` at the end of the line. Python tries to keep its syntax as simple and close to English as was dreamed possible in the late 80s.

Similarly, statements like `if` statements, `for` loops, function definitions, indicate the start of the associated code block with `:` and indenting. This will make more sense later, but here's a simple one, just to show this structure:
```
def my_fun(a):

    if a < 10:

        print("Small")

    else: 

        print("Large")

my_fun(int(input("Enter a number: ")))
```


We will come back to the indenting later, but for now, you've seen all the basic syntax of Python. It's pretty simple. There is some specific syntax for dealing with particular [[data]] types (`list`, `tuple` and `dict` particularly, but we will deal with those as we come to them).

## Basic [[Data]] Types

As mentioned, Python is a _dynamically_ typed language. One way of thinking of this is that variables do not have a type. In Java, a variable can only store one type of [[data]] (`int` , `String`, etc.). In Python, it can store any type. This does not mean that the [[data]] itself doesn't have a type though.

Python comes with the following built-in types:

- `str` - the basic string [[data]] type
    
- `int` - integer valued numbers (Python sort of does arbitrary precision, so this is the only integral type)
    
- `float` - floating point type for decimal numbers
    
- `complex` - for complex numbers
    
- `list` - lists (Python does not natively have arrays)
    
- `dict` - a hashmap (we will eventually talk about these, but don't worry if that doesn't mean anything yet)
    
- `bool` - the basic Boolean `True` or `False` type
    

Python has a few other built in types (`tuple`, `range`, `set`, `frozenset`, `bytes`, `bytearray`, `memoryview`), but we won't need all of these in this subject, and the ones we do we will introduce a little later.

## Indenting in Python

One major practical difference between Python and Java is the way Python handles blocks of code. In Java, they're delimited by `{` and `}`, so once you're between the braces, the formatting doesn't matter (as far as the compiler is concerned, do try and keep it nice so us poor humans can read it).

Python however made the choice to remove as much syntax as possible, leaving it with _whitespace formatting_. This means that the Python interpreter identifies the blocks of code by _indentation_, so you have to be careful with your indentation in Python, otherwise things don't work. Another side effect is that you can't have an empty block in Python.

Although we haven't seen the syntactic structure in this code yet, this program reads in a number from the user and then either prints something or doesn't:


```
a = input("Enter a number: ")

if int(a) < 10:

    print("It's less than 10! Woo.")
```


If we change indenting, we can get a different result (note as this example is rather contrived, I have to insert something so there's no empty block in the `if` statement.


```
a = input("Enter a number: ")

if int(a) < 10:

    pass

print("It's less than 10!")
```



Most modern Python development environments (including Ed's built in one) will assist with the indenting, but you shouldn't rely on that exclusively.

## Commenting in Python

The last little bit of basic Python programming is how to comment.

In Python, any text after a `#` is a comment:

```
#This is a comment

a = "This is not a comment" #This is however.
```



## What is a Variable?

In programming, a variable is a programmer-defined named that is used to refer somehow to information stored in memory.

Different languages handle variables in different ways, giving the programmer more or less control, but the model of a variable being a name for a piece of memory is a very consistent one.

There's a subtle detail in what was just mentioned that's very important. Although it's the stored information that we are interested in, strictly speaking the variable is related to memory. This distinguishes it from a mathematics-style variable, but is also what makes it useful in programming. This means that we can use a single name to refer to a single piece of information, but that information can _change_ as the program progresses.

Not only can we change the information stored in memory, we can also usually change what piece of memory the variable is referring to.

The following sketch illustrates this idea roughly.

![](https://static.au.edusercontent.com/files/xIht4XcWhWct53xwFwEZKlXt)

Here we have three variables, `n`, `num` and `count`. They each refer to a piece of memory, which has some information stored in it. `n` also stores a different type of information to `num` and `count`.

The following code snippet is one way to get a picture of memory that looks something like the above:

char n = 'a'; int num = 3; int count = 17;

Then if we change the value of one of the variables, the value stored at that piece of memory is altered, but the memory location related to the variable remains the same.

For example, if we add `1` to `count`, we get something like:

![](https://static.au.edusercontent.com/files/ZuewegYZ27wJlRba529BXmxT)

This gives us our basic model of primitive variables in Java. Each variable refers to a particular location in memory, that location can store [[data]] that we can modify using the variable. In addition, primitive variables refer to the same location in memory for their lifetime in the program.

When we get to reference variables (also called object variables), we will see that we can have variables where we can change which location in memory they refer to (in a sense this is actually the defining feature of reference variables - their value is not the [[data]], but the address as labelled in the images above).

In Python all variables are reference variables, but for primitive values (things like numbers, characters, booleans, etc.) they are handled in a way that makes them look like the model above. So although there's some background technical differences, from a simple programming perspective, this model works for both languages.

## Variables in Java

In Java we have two types of variables, primitive and reference. For the moment, we will only talk about the details of primitive variables.

## Typing

Java is a strongly, statically typed language. The "statically" part of this means that not only does [[data]] have a type in Java, but variables also have an explicit type (cf. Python, where [[data]] has a type, but the variables used to refer to it don't). So if you want a variable that's going to store `int` type [[data]], the variable has to have type `int`. If you want to store a `float`, the variable should also be of type `float`, and so on. Later we will see there is a bit more flexibility, but for now, we should be thinking of matching our variable types to the [[data]] exactly.

[[Java]] has 8 [[primitive types]], which are listed in the ["Introduction to Java" lesson](https://edstem.org/au/courses/10667/lessons/30852/slides/217680).

## Declaration

Java also requires variables to be _declared_ before use. This means we have to take a specific action (i.e. write some particular code) to create the variable before we do anything with it. Again, a language like Python creates variables as soon as it sees a valid variable name that it doesn't already recognise.

This gives our basic declaration syntax:

```
<type> <name> [ = <initial value>];
```

So each variable declaration starts with a valid type, then it has a valid name, then it optionally has a starting value assigned to it (more on this in a moment).

So if we want an `int` called `num`, we would write:

```
int num;
```

If we want the same thing, but with an initial value of `7`:

```
int num = 7;
```

Now we can use `num` for its lifetime in the program.

Java also only allows a particular name to be declared once within the area that it's active in (so you may use the same name again somewhere completely separate in the code, but not within the same area). The following code would cause an error:

```
char c = 'a'; char c = 'b';
```

## Intialisation

Java also requires [[variables]] to be initialised before use. The problem with this is that it is actually very difficult to determine if a variable has been initialised before its first use, but in small cases, it's possible and [[Java]] will complain. You may think of a "use" as any time the value of the variable is used to do something.

Initialisation is achieved just by assigning a value. This may be at declaration (as with some of the example above), or it may be later, as long as it happens at some point before that value is employed to compute something.

So the following is valid:


```
public class Example {

    public static void main(String[] args) {

        double d;

        d = 8.6; //d is initialised here

        double e = 2 * d; //and used here

        System.out.println("d = " + d);

        System.out.println("e = " + e);

    }

}
```



But this is not:

```
public class Example {

    public static void main(String[] args) {

        double d;

        double e = 2 * d; //d is not yet initialsed

        d = 8.6;

        System.out.println("d = " + d);

        System.out.println("e = " + e);

    }

}
```



[[Java]] will in fact auto-initialise [[variables]] to some equivalent of `0` (specifically whatever the interpretation of setting the block of memory it references to all zeroes is), but in the cases where it can tell that the programmer hasn't explicitly initialised it, it will fail to compile. In the cases where it can't tell (or doesn't try and check), you can observe this result:

```
public class Test {

    static int t;

    public static void main(String[] args) {

        System.out.println(t);

    }

}
```


## Variables in Python

In contrast to [[Java]], [[Python]] is a strongly, _dynamically_ typed language and uses only reference [[variables]]. However because of the way it handles [[data]] values, for certain types of [[data]], [[variables]] work in a very similar way to Java's [[primitive types]].

## Typing

As mentioned, [[Python]] is a strongly typed language, which means that the [[data]] stored in memory has a specific type (e.g. `str`, `int`, etc.). However it is a _dynamically_ typed language, which means that the [[variables]] themselves have no type, and hence any type of [[data]] can be assigned to any variable (not necessarily a good practice, but it's possible).

As with Java, [[Python]] offers a range of built-in types, listed [here](https://edstem.org/au/courses/10667/lessons/30853/slides/217691).

## Declaration and Initialisation

As the [[variables]] have no type, there's not really a sensible way to declare an uninitialised variable, thus every variable declaration (excluding function parameters, but that's for later) is also an initialisation and has the form:

```
<name> = <initial value>
```

As with [[Java]], there are rules about what constitutes a valid name, but basically anything that doesn't start with a number works. The initial value has to be a valid [[data]] value, but as the variable has no type, there's no restrictions other than that.

So if we wanted a variable called `num` that stored an `int` (again, notice that the variable itself is not an `int`, it's just a variable), we could write:

```
num = 7
```

As there's no way to just say "I want a variable that stores [[data]] of some type", initialising with an actual value is required (in the example, `7`).

If we want a variable to store the character 'c', we can write something like:

```
letter = 'c'
```

(Note that [[Python]] does not have a character [[data]] type, this is actually just a string.)

## Use

Thus using [[variables]] is relatively straight-forward in [[Python]], they are created on first assignment, and that's that. This does have some implications for more complicated programs, but for simple ones, this is simpler than [[Java]] and avoids some basic errors (either a variable doesn't exist, or it does exist and it has a value - it may not be the right value, but there's no uninitialised variable problems).

```
d = 8.6

e = 2 * d

print("d = " + str(d))

print("e = " + str(e))
```


One place where this simplicity and flexibility can get confusing and lead to errors is incautious reuse of [[variables]]:

```
d = 8.6

print("d = " + str(d))

d = "This is not a number" #Variables have no type

print("d = " + str(d))
```


If we now miss the code where the variable `d` is storing a different of [[data]], we can run into odd problems (easy to see here, but imagine a more complex codebase):
```
d = 8.6

print("d = " + str(d))

d = "This is not a number" #Variables have no type

print("d = " + str(d))

d += 15 #d no longer stores a number, this won't work
```


## A quick recap

We've already talked about how bugs/errors are an unavoidable part of programming. In fact, our first lab is going to deliberately throw an error or two at you, and ask you to solve them.

![](https://static.au.edusercontent.com/files/DFetQHjQzjxw1qu1MqVGFcwb)

Source: [Three Panel Soul](http://www.threepanelsoul.com/comic/on-infinite-loops) (used with permission of the creators)

Recall that there are three basic categories of errors:

- **Compile-time errors** that are thrown by a compiler, because it is unable to compile the code.
    
- **Run-time errors** that are thrown by a computer when it attempts to run the compiled code, and finds out that these instructions cause it to be unstable and crash.
    
- **Logic errors** that are only observable by someone who interacts with a running program, and realises that it is not behaving correctly.
    

For reasons that are hopefully obvious, you will only get clear error messages for the first two types of errors. The rest of this lesson is dedicated to teaching you what these error messages look like, and how to decipher them.

## Errors in Java: How to read a compile time error

When the java compiler encounters code that is not valid, it will provide one or more error messages to describe the problem(s). These error messages are always formatted as the following:

```
<class>:<line>: error: <description> <problematic code>
```

- **Class**: the class in which the error occurred (this is particularly good to know if you tried to compile multiple files at once).
    
- **Line**: the line number where the error occurred (make sure you enable the **Line Numbers** option in the Ed workspace to take advantage of this information).
    
- **Description**: a short explanation of the error. The descriptions aren't always easy to understand, so look below for explanations (or google them if it's something we haven't anticipated here).
    
- **Problematic code**: shows the line of code where the error occurred, with a `^` indicating the exact spot.
    

Let's look at an example of invalid code:


```
public class WontCompile {

    public static void main(String[] args) {

        System.out.println("Hi " + userName + " how are you doing?");

    }

}
```



If you run this (please do) you will get the following error:

WontCompile.java:5: error: cannot find symbol System.out.println("Hi " + userName + " how are you doing?"); ^

So this error message tells you:

- The error is found in the `WontCompile` class (which is, after all, the only class in this program).
    
- The error is found on line **5**.
    
- The description of the error is "_cannot find symbol_".
    
- The specific bit of code that it has a problem with is the appearance of the `userName` variable (since that is what the ^ points to).
    

Based on this knowledge, have a go at fixing the error.

## An important limitation

Compiler messages can sometimes be tricky to decipher, and you can't always expect the error message to be completely accurate about what the problem is or even where the problem is located. Often a single small bug will cause multiple compiler errors, which can all be addressed with one small change. Equally its possible for a single error message to require multiple changes before it is resolved.

Remember, compiler errors occur when the source code isn't valid Java. If it isn't valid Java, then the compiler is not able to understand it. The further away the source code is from being valid, the more confused the compiler will get.

If you try to compile code that is extremely far from being valid, then you should expect the compiler to be utterly confused, and for the error messages to be equally confusing. It's akin to giving an English teacher a page of random gibberish.

## Errors in Java: How to read a run-time error

If a Java program crashes it will (with its last gasp), print out an error message to explain what caused the crash.

## Some essential background

Before we can start talking about what runtime error messages look like, we need to give you a very rough idea of how [[Java]] programs run.

Most [[java]] programs are constructed from several classes. You can think of these as building blocks. Some of these classes/blocks will be written by the programmer, others will be imported from elsewhere (like the `Scanner` class). When a program is running, execution jumps around between these classes, since each class has different responsibilities.

When something goes wrong and a program crashes, that crash will occur within one of these classes. But it might not be that classes fault! It might instead be the fault of some other class, which unfairly asked the first class to do something it wasn't capable of, or made a request that didn't make sense. The class that is actually at fault might be several steps removed from the one in which the crash happened.

## Format of a runtime-error

Runtime error messages have the following format:

```
Exception in thread "<thread>" <errorClass>: <errorMessage> at <class>.<method>(<file>:<lineNumber>) at <class>.<method>(<file>:<lineNumber>) at <class>.<method>(<file>:<lineNumber>) ...
```

The first line here is a general summary of the error, and consists of:

- **thread** is not something you need to worry about until you start doing multithreaded coding, which is way beyond this subject (so ignore this).
    
- **errorClass** represents the type of error you have. You can google this to find out more about the error.
    
- **errorMessage** tells you a little more details about the error. Sometimes this part will be missing but if it is there it can provide important insights.
    

The remaining lines are the stacktrace, which is a summary of which classes and methods were involved when the error occurred. Each line will include:

- **class** is the class in which the error occurred.
    
- **method** is the method within this class where the error occurred.
    
- **file** is the file in which this class is defined.
    
- **lineNumber** points directly to the line of code where the error occurred.
    

The first line is the class and method that was being executed when the program crashed. As we discussed above, this might not be the part that is actually at fault. The second line is the class and method which called the first class and method. The third line is the class and method that called the second one, and so on.

The actual class and method could be any one of these entries in the stack trace, but the best bet would be to focus on the classes and methods that you wrote, not ones that that have been imported.

Let's try a real example:

```
import java.util.Scanner ;

public class HelloAgain {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Hi, what's your name?");

        int userName = input.nextInt();

        System.out.println("Hi " + userName + ", nice to meet you!");

    }

}
```



This program will work fine if your name is a number, but otherwise it will throw an error like this:

Exception in thread "main" java.util.InputMismatchException at java.base/java.util.Scanner.throwFor(Scanner.java:943) at java.base/java.util.Scanner.next(Scanner.java:1598) at java.base/java.util.Scanner.nextInt(Scanner.java:2263) at java.base/java.util.Scanner.nextInt(Scanner.java:2217) at HelloAgain.main(HelloAgain.java:10)

Here the type of error is `InputMismatchException` . If you google that you will find helpful resources (like [this one](https://rollbar.com/blog/java-inputmismatchexception/)) that describe what this error is, what causes it, and how to fix it.

If we work through the stacktrace we can see several entries for stuff that is happening in the `Scanner` class, but that's a class that has been thoroughly tested so the root cause is probably not there. Instead the culprit is almost certain to be the `main` method inside the `HelloAgain` class, since that is the one we wrote. The message pinpoints line 10 as the one that lead to the crash.

Based on this knowledge, have a go at fixing the error.

## Errors in [[Python]]

As [[Python]] doesn't (normally) run as a _compiled_ language, it only has run-time errors.

This means we only have to consider one format for error output, but ultimately the same basic structures apply as with [[Java]].

[[Python]]'s basic error format is:

Traceback (most recent call last): File "<filename>", line <linenumber>, in <module> <line of code that caused the problem> <Type of Error>: <description of error>

In the following code snippet, we try to do something silly and add 1 to a value of type `str` (a string). Hit Run and observe the error:


```
n = "This is not a number"

print(n + 1)
```



So we get several important pieces of information:

- Which file the error is in (there's only one here, so less important at the moment, but vital later).
    
- Which line the error occurred at (here, line 3). This may not be the source of the problem, it's where it showed up, but it's definitely a good place to start looking.
    
- The line itself.
    
- What sort of error has occurred. Here it's a TypeError, which means there's something wrong with the types of the [[data]] being manipulated. In this case it's trying to apply the `+` operator to a `str` and an `int`, which are not compatible for this operation.
    
- A more detailed description, which may give a hint as to what precisely is wrong (simple in this case) and how to go about fixing it.
    

Now adjust the code so that it runs and produces `This is not a number1` as the output. There are several ways of doing this, reading through some of the lessons may [[help]] (especially if you jump forward to the Quick Reference section).

## A Little More About Types in [[Java]]

As probably mentioned somewhere along the way, [[Java]] is a _strongly statically typed_ programming language. What this means is that [[variables]] and [[data]] both have types (for us), and those types have to be compatible and known at compile time.

We saw a type mistmatch/incompatible type error, but other errors are possible:

```
public class NoSuitableMethod {

    public static void main(String[] args) {

        int a = Math.round("This isn't a number");

    }

}
```

```
public class BadArguments {

    public static void main(String[] args) {

        int i = 3 / "Hi";

    }

}
```



When we get to generics, we'll see other ways to mess up the types (and thanks to the way [[Java]] handles generics, some things you might think would be okay, but can't be done).

But it's not only [[variables]] and [[data]] that have a type in [[Java]]:

- methods have a _return type_ - that's what the `void` we've seen in the signature of the `main` method is, it tells us that the `main` method doesn't return anything, we'll soon see methods with non-`void` return types.
    
- _expressions_ have a type (you can interpret these just like methods, just with different formats). It's the type of the [[data]] that expression evaluates to. Not all expression types are useful to the programmer.
    

For example, the expression `10 + 3` has a type of `int`. This works:

```
public class IntExpression {

    public static void main(String[] args) {

        int i = 10 + 3;

    }

}
```



This doesn't (note the two types it reports in the error message when you try and run it):



```
public class IntExpression {

    public static void main(String[] args) {

        boolean b = 10 + 3;

    }

}

```

Because expressions have types, we can use them anywhere a value of that type is expected. While this is obvious for simple things (or at least, we do it without thinking too much about it), it is an important observation for later.

## Boolean Values in [[Java]]

With the strong type system in mind, unlike other programming languages, [[Java]] has a `boolean` type that is used for all `true`/`false` values, and is not compatible with other types.

Compare this error in [[Java]]:

```
public class BooleansDontMatchIntsInJava {

    public static void main(String[] args) {

        boolean b = true;

        int i = 10 + b;

        System.out.println(i);

    }

}
```



And this valid C++:


```
#include <iostream>

int main() {

    bool b = true;

    int i = 10 + b;

    std::cout << i << std::endl;

}
```



`booleans` are often not so interesting by themselves. Where they become extremely useful is as the type of a whole expression.

We can create `boolean` values by combining [[data]] using operators (some of which you will be familiar with from maths). Here are the most prominent ones in [[Java]] that return a `boolean`:

- `<` - less than (takes two suitable numeric arguments).
    
- `<=` less than or equal to (takes two suitable numeric arguments).
    
- `>` - greater than (takes two suitable numeric arguments).
    
- `>=` - greater than or equal to (takes two suitable numeric arguments).
    
- `==` - equal to (takes two arguments of any type, but only some combinations are useful, this is similar to the mathematical ==, just to cause confusion with the assignment operator `=`...).
    
- `!=` - not equal to (as above, but is `true` when the operands are different).
    
- `&&` - logical and (`a && b` is `true` only when `a` and `b` both evaluate to `true`).
    
- `||` - logical or (`a || b` is `true` if `a` or `b` evaluates to `true`).
    
- `!` - logical not (`!a` is `true` when `a` is `false`, and `false` when `a` is `true`).
    

[[Java]] has [several other operators](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html), some of which are more useful than others.

We can of course combine the outputs of these operators, if the types match appropriately:


```
import java.util.Scanner;

public class CombinedOps {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");

        int i = sc.nextInt();

        boolean b = i > 10 && i < 20;

        System.out.println("Is the number bigger than 10 but less than 20? " + b);

    }

}
```


This is, of course, really exciting, but expressions like this become really useful when choosing what to do in a program.

## [[Branching]] - The if and if-else Statements

Now that we can officially say whether something is `true` or `false`, we can use this information to control the flow of the program.

The central statement for this is the `if` statement, and its variants.

The syntax is pretty simple (the angle brackets aren't part of the syntax):

```
if (<condition>) {

    <what to do when condition is true>

}
```



This, combined with our boolean operators, type system, and eventually methods, allows us to choose what to do based on the [[state]] of the program (or some part thereof):



```
import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i < 100) {

            System.out.println("The number is less than 100.");

        }

    }

}
```


Of course this only gives an option with what to do if the condition is `true`. What about when it's `false`? We could use two `if` statements:
```

import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i < 100) {

            System.out.println("The number is less than 100.");

        }

        if (i > 100) {

            System.out.println("The number is greater than 100.");
```



You may notice immediately that there's some problems with this approach:

- What about the number 100? This approach requires extra care with the conditions, and is a good spot to accidentally introduced logic bugs.
    
- What happens if we mess with the value of `i` in the first `if` statement block? We can trigger both!
    


```
import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i < 100) {

            System.out.println("The number is less than 100.");

            i = 101;

        }

        if (i > 100) {
```



While this may be the desired behaviour in a limited number of cases, it's probably not what we're normally looking for. Fortunately, [[Java]] (and pretty much every programming language ever) allows `if` statements to have an `else` block, which is executed when the condition is `false`.


```
if (<condition>) {

    <code when the condition is true>

}

else {

    <code when the condition is false>

}
```



Now we can more easily and reliably implement our program:


```
import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i < 100) {

            System.out.println("The number is less than 100.");

        }

        else {

            System.out.println("The number is at least 100.");

        }
```


## [[Branching]] - The if and if-else Statements

Now that we can officially say whether something is `true` or `false`, we can use this information to control the flow of the program.

The central statement for this is the `if` statement, and its variants.

The syntax is pretty simple (the angle brackets aren't part of the syntax):

```
if (<condition>) {

    <what to do when condition is true>

}
```


This, combined with our boolean operators, type system, and eventually methods, allows us to choose what to do based on the [[state]] of the program (or some part thereof):


```
import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i < 100) {

            System.out.println("The number is less than 100.");

        }

    }

}
```



Of course this only gives an option with what to do if the condition is `true`. What about when it's `false`? We could use two `if` statements:



```
import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i < 100) {

            System.out.println("The number is less than 100.");

        }

        if (i > 100) {

            System.out.println("The number is greater than 100.");
```


You may notice immediately that there's some problems with this approach:

- What about the number 100? This approach requires extra care with the conditions, and is a good spot to accidentally introduced logic bugs.
    
- What happens if we mess with the value of `i` in the first `if` statement block? We can trigger both!
    


```
import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i < 100) {

            System.out.println("The number is less than 100.");

            i = 101;

        }

        if (i > 100) {

```

While this may be the desired behaviour in a limited number of cases, it's probably not what we're normally looking for. Fortunately, [[Java]] (and pretty much every programming language ever) allows `if` statements to have an `else` block, which is executed when the condition is `false`.
```
if (<condition>) {

    <code when the condition is true>

}

else {

    <code when the condition is false>

}
```


Now we can more easily and reliably implement our program:

```
import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i < 100) {

            System.out.println("The number is less than 100.");

        }

        else {

            System.out.println("The number is at least 100.");

        }
```


## [[Branching]] with multiple conditions - the elseif Statement

We now have our primary tool for selecting which code to execute based on some condition of our choosing. What if we have lots of conditions?

We can nest `if-else` statements:


```
import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i < 100) {

            System.out.println("The number is less than 100.");

        }

        else {

            if (i > 100) {

                System.out.println("The number is greater than 100.");

```

Being able to nest conditionals like this is a really useful tool, but it's still not quite satisfactory. In this situation we're choosing what to do based on the current value of `i` and nothing else, so it would be nice to be able to simply divide the cases up "at the same level". Given that I've bothered to write that whole paragraph, it should come as no surprise that there's a way to do this: the `else if`:

```
import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i < 100) {

            System.out.println("The number is less than 100.");

        }

        else if (i == 100) {

            System.out.println("The number is 100.");

        }
```


The conditions are executed one after another, until one that works is found, or the `else` block is reached. This means if we're careful, we can select out otherwise overlapping cases:

```
import java.util.Scanner;

public class Choice {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");

        int i = sc.nextInt();

        if (i == 42) {

            System.out.println("You've found the answer");

        }

        else if (i < 100) {

            System.out.println("The number is less than 100.");

        }
```


So if we input 42, only the first block executes - they only get looked at if every condition before was `false`.

## [[Branching]] With Specific Cases - the switch Statement in [[Java]]

[[Java]] (and many other languages, ~~but not [[Python]]~~) and now [[Python]] since version 3.10, offers an alternative [[branching]] structure that is designed to deal with individual cases where the matching is simple.

Say we had a program where if some variable `` `x` `` has value 1, 5, 87, or 120 we do one thing, but any other value we do something else. The `if` statement might look something like:


```
if (x == 1 || x == 5 || x == 87 || x == 120) {

    //Do one thing

}

else {

    //Do another

}
```


Not too bad, but you can imagine what a pain it would be if there were more than four special cases, or there were different things to do in each special case.

In situations like this, you may consider using the `switch` statement instead. It's like a slightly compacted `else-if` construct, but with very restricted conditions - it only handles equality, but you can put a whole expression in the `switch` not just a variable, and only works with certain variable/expression types (`byte`, `short`, `char`, `int` and `String`, plus some others that we haven't yet seen, particularly Enums).

The previous example would then be written in [[Java]] something like:

```

switch (x) {

    case 1 : //Do one thing

        break;

    case 5 : //Do one thing

        break;

    case 87 : //Do one thing

        break;

    case 120 : //Do one thing

        break;

    default : //Do another

        break;

}
```


Not much of an improvement yet, but it does have the advantage that new cases are easy to add in a reliable and readable manner - one line each is much neater than a clause in a long boolean condition.

Before we improve this a little, we have to first cover what the `break` statements are doing. The way a switch works is to take the variable given as a parameter, then, in the order the programmer writes them, check if the variable has the same value as the one given by the case statement. If it is the same, it runs the code _starting at that point_. Once it finds a matching case, it keeps going until it hits a break, or the end of the block.

Leaving out the `break` can lead to unintended consequences:


```
public class BadSwitch {

    public static void main(String[] args) {

        int x = 2;

        switch (x) {

            case 1 : System.out.println("The value is 1.");

            case 2 : System.out.println("The value is 2.");

            case 3 : System.out.println("The value is 3.");

            default : System.out.println("The value is not 1, 2 or 3.");

        }

    }

}
```


However we can also deliberately leave out the break to group cases together, and for our starting example, get something more compact:
```

switch (x) {

    case 1 :

    case 5 :

    case 87 :

    case 120 : //Do one thing

        break;

    default : //Do another

}
```


Whether to use a `switch` statement, or a sequence of `if-elseif` statements is context dependent. Sometimes one will work better than another, neither is always the best. If the logical conditions can't be reduced to equality checks, or the variable isn't a suitable type, then the `switch` statement can't be used, but if they can, it's worth considering.

## If statements in [[Python]]

In [[Python]], conditional statements work essentially the same as [[Java]], with mildly different syntax.

```

print("Enter a number:")

x = int(input())

if x < 0:

    print("You entered a negative number.")

elif x > 0:

    print("You entered a positive number.")

else:

    print("You entered zero.")

```

Once you have the basic idea in [[Java]], [[Python]] (and every imperative programming language I know) works exactly the same, just with different syntax.

## Structural Pattern Matching and the match statement in [[Python]]

Prior to version 3.10, [[Python]] had no similar statement to [[Java]]'s `switch`, leaving just a hack with `dicts` that kind of works, but it's actually just exploiting a [[data]] structure to give back known values, rather than running code.

Since version 3.10, however, [[Python]] has introduced a pattern matching statement with very similar syntax to [[Java]]'s (and C, C++, etc.) `switch`, but with slightly different semantics. [[Python]]'s `match` statement draws inspiration from functional language style pattern matching, rather than the C style "fancy jump statement", but in simple cases it mostly works the same as a [[Java]] `switch`.

The basic syntax is:
```
match <subject>:

    case <pattern 1>:

            <action 1>

    case <pattern 2>:

        <action 2>

        ...

    case <pattern n>:

        <action n>

    case _:

        <default action>

```

So the above switch statement would look like:

```

match x:

    case 1:

        # do one thing

    case 5:

        # do one thing

    case 87:

        # do one thing

    case 120:

        # do one thing

    case _:

        # do another

```

Note the absence of anything like a `break` statement. This is the major practical difference between a `switch` and pattern matching (and hence [[Python]]'s `match`) - there is _no fall-through_. That is, _only_ the matching code block is executed, rather than starting at the matching one and continuing until a `break` or the end of the statement is reached.

This is useful, but also makes the above example a bad example of a `match`, as the `# do one thing` code would have to be written repeatedly. Luckily, there is a way to restore its utility in these cases (geddit?) - [[Python]] allows the use of a "or" operator `|` to give a list of matches for a case, so the above would be better written as:

```
match x:

    case 1 | 5 | 87 | 120:

        # do one thing

    case _:

        # do another
```


This does start to look a bit like an `if-elif` again, but may offer easier changes later (or not, it's a fuzzy line).

## All the Operators

Somewhat stolen from the [documentation](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/opsummary.html).

## Simple Assignment

1. `=` assigns the value from the right to the variable on the left.
    

## Arithmetic

These operators work with any combination of numeric primitives (`byte`, `short`, `char`, `int`, `long`, `float,` `double`). The resulting type of the expression is the type which doesn't lose information (so an `int` plus a `short` will produce an `int`, not a `short`).

1. `+` addition
    
2. `-` subtraction
    
3. `*` multiplication
    
4. `/` division
    
5. `%` remainder
    

## String Concatenation

- `+` - concatenates a `String` to the second operand, as long as the second operand is either primitive or has a `toString` method.
    

## Unary Arithmetic Operators

These operators are either _prefix_ operators (i.e. come before the thing they operate on - the _operand_) or _postfix_, and only take a single operand.

- `+` positive operator. Not sure this actually does anything useful, but you can certainly write `int a = +1` with no problems.
    
- `-` negative operator. Makes a positive value negative and a negative value positive.
    
- `++` prefix increment. Adds one to the variable's value and returns the value after this addition.
    
- `++` postfix increment. Adds one to the variable's values and returns the value from before the addition.
    
- `--` prefix decrement. As above, but subtracts one.
    
- `--` postfix decrement. As before, but subtracts one.
    

## Equality Operators

- `==` equal to. For primitives, returns `true` if the values are the same and `false` if they're not. For object [[variables]], returns `true` if the two [[variables]] are the same object, and `false` otherwise (note that this means that two object [[variables]] that happen to store the same values are not equal under this scheme).
    
- `!=` not equal to. As above, but returns `true` if they're different and `false` if they're the same. Has the same caveat about comparing object [[variables]].
    

## Relational Operators

The next set are the relational operators, and only work with primitive numeric operands.

- `<` less than.
    
- `>` greater than.
    
- `<=` less than or equal to.
    
- `>=` greater than or equal to.
    

## Logical Operators

Implement logical operations and require both operands to have type `boolean`.

- `&` and. Always evaluates both operands. See also bitwise and.
    
- `|` or. Always evaluates both operands. See also bitwise or.
    
- `&&` short-circuit and. Only evaluates the second operand if the first evaluates to `true`, stops if the first evaluates to `false`. Also called "lazy and".
    
- `||` short-circuit or. Only evaluates the second operand if the first evaluates to `false`. Also called "lazy or".
    
- `!` not. Unary prefix operator. Inverts a `boolean` value (flips `true` and `false`).
    

## Ternary Operator

`?:` short hand for a simple `if-else`, the syntax is `A ? B : C`. Where `A` is an expression that evaluates to a `boolean` value, `B` is the code that's run if `A` evaluates to `true`, `C` is run if it evaluates to `false`. Normally `B` and `C` would return values, in which case they have to match the expected return type of whatever you're doing with it.

## Instanceof Operator

`instanceof` returns `true` if the thing on the left has a type that matches the class name given on the right: `s instanceof String`. Be careful using reflective operations like this, you end up tying your code to specific implementations, which is normally bad.

## Bitwise Operators

These operators all treat numeric values as bit strings (i.e. 0s and 1s).

- `~` unary bitwise complement. Flips all 0s to 1s and 1s to 0s. Like `!` but for things other than `booleans`. Also actually modifies the operand, `!` just changes the returned value.
    
- `&` bitwise and.
    
- `|` bitwise or.
    
- `^` bitwise xor.
    
- `<<` signed left shift. Moves the bits of the left operand to the left. The number of steps to the left is given by the right operand. Doesn't [[touch]] the sign bit.
    
- `>>` signed right shift. As above, but moves them to the right.
    
- `>>>` unsigned right shift. As `>>`, but does shift the sign bit as well (essentially treats all numbers as unsigned).
    

## Combination Assignment Operators

These operators all have the form `A <op>= B`, and effectively expand to the expression `A = A <op> B`, where `<op>` is an operator that's suitable for this.

- `+=`
    
- `-=`
    
- `*=`
    
- `/=`
    
- `%=`
    
- `&=`
    
- `|=`
    
- `^=`
    
- `<<=`
    
- `>>=`
    

## Array Access Operator (Also known as the subscript operator)

`[]` that's right, the square brackets are an operator. `a[i]` basically says "give me the element that's `i` steps from the start of array `a`.

## Grouping Operator

`()` just forces whatever's inside the parenthesis to be evaluated before the result is used elsewhere. Same as you've seen in maths, but has a few more uses that you'll run into.

## De-reference Operator

`.` also called the "dot operator". Dereferences the left operand to obtain the right operand. Essentially "in the thing on the left, give me the thing with the name on the right".

## Type Cast Operator

`(<type>)` where `<type>` is replaced by a value name for a type. A unary operator that attempts to change the type of the thing to the right into `type`. E.g. `(int) 1.0` will try to turn the value `1.0` into an `int`.

## Namespace Operators

`a::b` gets the method `b` from the class `a`. This operator is mainly used when you want to name functions as a parameter to a lambda expression (as opposed to calling it).

## Stranger Things with Braces

`{` and `}` normally define a block in [[Java]], but they have at least three other uses:

1. As a static initialiser for arrays `<Type>[] <name> = {value1, value2, ...};`
    
2. They can be used to create an anonymous inner class `new Something<OtherThings>(){...};` where all the gaps are filled in appropriately.
    
3. They can be used to initialise such classes (though this is sort of just using them as a static initialiser): `new Something<OtherThings>(){ { action1(); action2(); ...; } };`
    

The first is routinely used, and can be used to pass a static array directly into a function (`methodName(new <type>[] {value1, value2, ...})`), the other two are less used and often have better ways of doing the same thing.


## Operator Precedence and Associativity

You will be familiar with the idea of operator precedence from maths. When you evaluate 1+2×41+2×4 you get 9, not 12, because we are taught to interpret this as 1+(2×4)1+(2×4), not (1+2)×4(1+2)×4. Thus ×× has a higher precedence than ++. Or to put it another way, when not otherwise specified by bracketing, you evaluate ×× before ++.

Operators in programming languages have similar rules (mainly to make things easier and more natural for humans).

They also have associativity rules, which govern how to evaluate a sequence of operators of the same precedence. These are either left to right, or right to left.

In [[Java]], the precedence of the operators, from highest to lowest is (everything on a level has the same precedence) given by the following list. The associativity of each level is also given.

1. `()`, `[]`, `.` (left to right)
    
2. postfix `++`, postfix `--` (right to left)
    
3. prefix `++`, prefix `--`, `!`, `~`, unary `+`, unary `-`, `(<type>)` (right to left)
    
4. `*`, `/`, `%` (right to left)
    
5. `+`, `-` (binary add and subtract) (left to right)
    
6. `>>`, `<<`, `>>>` (left to right)
    
7. `<`, `<=`, `>`, `>=` (left to right)
    
8. `==`, `!=` (left to right)
    
9. `&` (left to right)
    
10. `^` (left to right)
    
11. `|` (left to right)
    
12. `&&` (left to right)
    
13. `||` (left to right)
    
14. `?:` (right to left)
    
15. `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `>>=`, `<<=`, `&=`, `^=`, `|=` (right to left)



