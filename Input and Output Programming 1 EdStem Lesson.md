## How Errors are Created in Java

Like everything in Java barring the primitive data types, errors are handled in an object oriented manner. Errors can be generated both by the JVM and by the program itself, and by exploiting the type hierarchy intrinsic in Java's approach to OOP, different errors can be differentiated, and different types of errors can be handled in different ways (both at compile time and run time).

In Java, all errors are broken down into three basic types:

- Errors, which represent problems that are outside the scope of the program to deal with (e.g. critical hardware failure),
    
- RuntimeExceptions, (also called unchecked exceptions) which represent problems that the program may want to handle, but is not forced to (e.g. divide by zero errors - whether or not this problem can occur in a given program determines whether it should be explicitly dealt with), and
    
- Exceptions, (also called checked exceptions) which represent that the program should handle, and the code must explicitly deal with the possibility one way or another (e.g. trying to access a file that doesn't exist).
    

An error is generated in Java by the `throw` keyword, accompanied by an object of an appropriate type:

throw new IOException();

The types of objects that can be given to a `throw` statement are all subclasses of the class `Throwable`:

![](https://static.edusercontent.com/files/e3HVWrcgyunMlmNMEezqQNkH)

Using the inheritance system we can thus create errors of the appropriate type that contain information specific to the problem being modeled.


## How Errors are Handled in Java

If a given piece of code generates an error, there are two basic mechanisms for handling it, the error can either be passed on to be handled elsewhere, or "caught" and handled. Checked exceptions _must_ be dealt with in one of these two ways. Unchecked exceptions (subclasses of `RuntimeException`) and `Errors` do not have to be dealt with (but can be if desired, though `Errors` are typically serious enough that the program can't do anything about it anyway).

If the current method is not the correct place to deal with the error, a `throws` declaration can be added to the method signature, listing the errors that the method may generate, but will not handle. The error is then passed up to the method that called the current one, and the same decision about handling it or passing it on can be made there.

In this case, the method signature looks like:

<access modifier> [optional keywords] <return type> <name>(<parameter list>) throws <list of error types> { <code> }

For example:

public static String fileToString() throws IOException, FileNotFoundException { ... }

If the current method is the correct place to deal with the error, the code that may generate the error needs to be surrounded by a `try-catch` block. If the error is generated, the code stops at that point and attempts to find the first `catch` that matches the type of the error. The structure works similarly to and `else-if` block, but for errors.

try { ... //code that might throw some type of error ... } catch (<error type> <variable name>) { <code for what to do when the error occurs> } catch (<error type> <variable name>) { <code what to do when this other error occurs> } ...

A `try-catch` block may have as many `catch` blocks as error types thrown by the code in the `try` section, they are evaluated in order by matching the type of the error throw to the type of the error presented as a parameter in the `catch` clause. If the error is not one of the ones named in the `catches`, it is passed on.

The compiler will generate a compile time error if any checked exception is unhandled, and if any error that can't be thrown by the code is handled.

The following code generates and catches an exception:

```
public class ExceptionThrower {

    public static void exceptionGenerator() throws Exception {

        throw new Exception("This came from the exceptionGenerator() method.");

    }

    public static void main(String[] args) {

        try {

            System.out.println("Just before the exception is thrown.");

            exceptionGenerator();

            System.out.println("This line will not be reached.");

        }

        catch (Exception e) {

            System.out.println("Made it to the catch block with.");

```


## The finally Clause

A `try-catch` can also have a `finally` clause appended to it. This is a section of code that will be run, even if the `try` block fails. While there are ways to have cascading errors that prevent the `finally` block from running, it has a certain level of guarantee that the code in the `finally` will be "always" be run, and thus it is a useful tool for completing task (including failures) gracefully.


```
public class FinallyExample {

    public static void main(String[] args) throws Exception {

        try {

            System.out.println("We'll throw an exception on the next line, but we won't catch it.");

            throw new Exception();

            //System.out.println("We can't get to this line."); //<= unreachable

        }

        finally {

            System.out.println("This will still run anyway.");

        }

        //System.out.println("Because the exception wasn't caught, we can't continue after the try-catch."); //<= unreachable

    }

 }
```



## Exceptions in Python

As we have seen repeatedly, Python's structure is actually relatively close to Java. This is essentially a side-effect of there being a limited number of sensible ways to build an Object Oriented language (and indeed, not so many more ways to build a sensible programming language at all).

Exceptions and their handling are no exception 🙄.

Python exceptions also have structural similarities (at least externally) to Java's. Python has a single exception base class, called `BaseException`, which all exceptions inherit from (at least in Python 3.x). Normally a programmer would not interact with `BaseException` however, and the more appropriate equivalent to Java's `Exception` is (conveniently) also called `Exception`.

When defining your own exceptions, they would normally inherit from `Exception`.

Exceptions in Python also more typically simply provide types to help indicate the nature of the problem, rather than the more complicated Java arrangement with error messages and stack traces, in fact stack traces are normally handled using a separate library: `traceback`.

Python exceptions will accept any number of parameters to their constructors however, and these can be used to carry information. Unless altered by the programmer, the `__str__()` method will print out the arguments given to the constructor, allowing a simple message to be passed through easily.

The equivalent to Java's `throw` is `raise`, and it is followed by a constructor call, though can be used bare to re-raise the last exception:


```
raise Exception("This will stop.")
```



Handling exceptions is also very similar, with the relevant structure being the `try-except` (c.f. `try-catch` in Java).

```
try:

    raise Exception()

except Exception:

    print("Caught an exception!")
```


As mentioned, normally exceptions in Python are used a simple types to decide what went wrong, and hence what to do, but if it is necessary to extract information from the exception, it can be given a name using the `as` keyword:

try:```

    raise Exception("This one has a message")

except Exception as e:

    print("Caught a " + str(type(e)))

    print("It has the following information:")

    print(e)
```


As one may except by now, a `try` clause can have multiple `excepts`, and the `raise`d exception will trigger the first matching `except`, where the type of the exception is a subclass (including its own class as a trivial subclass of the specified type in the `except` . An exception of any type can be caught with a bare `except:`, but of course we don't know anything about what went wrong.


```
class A(Exception):

    pass

class B(A):

    pass

class C(B):

    pass

for cls in [A, B, C, Exception]:

    try:

        raise cls("Same message")

    except C as c:

        print("Caught a C with message " + str(c))

    except B as b:
```


As with other structure in Python, an `else` clause can be added, which is executed if none of the `excepts` get triggered.


```
try:

    pass  # nothing to go wrong here

except:

    print("Caught something.")  # this won't run

else:

    print("Made it out with no errors!")

```

One major difference, stemming from Python's simplicity oriented design is that there are no checked exceptions in Python, so you are never _required_ to handle an exception in Python.


## A Myriad of Options

Java has a flexible, but somewhat complicated I/O library, that allows the programmer to deal with a wide variety of different I/O cases.

The core model is based on the decorator pattern (not part of this subject, but interesting to know), and uses a heavily OO approach to I/O.

For input, the source is modeled by an object that provides raw bytes. This source is passed through some collection of input streams, which perform transformations on the raw input. The transformed input can then be interpreted via a reader of some kind, which presents the transformed information.

For output, the process is essentially inverted, a writer is used to pass data through output streams that modify the data, which is then written out to a target.

This can quite cumbersome for complicated transformations. Fortunately for simple character based I/O, we can simplify things greatly.

Once again, as with many aspects of Java, we have already been working with one form of I/O routinely: terminal I/O. In what we've seen, `Scanner` is a reader that operates on an `InputStream`. We've been giving it `System.in` to work with, which is an input stream that takes as its source the basic input channel that the underlying computer system offers. For output, we've been using `System.out`, which is an output stream and writer (the actual type is `PrintStream`) that writes characters to the underlying operating system output channel, whatever that might be.

Reading characters to and from files is such an important use case, that a similarly simplified approach for basic file I/O is available.


## Reading from a File

Reading from a file begins with a `File`, the class that [[models]] a file in the file system on the host OS. This class abstracts the details for how files are represented and located in the host OS.

With file I/O however, we often don't have to deal directly with `File` objects, as the process has been streamlined in some cases (but not all). There are also other ways of providing a file to help assist in different use cases (e.g. reading the file name from the user, or extracting paths from a file dialog, etc.).

Typically when reading from a text file, we would like the ability to read line by line (as compared to character by character), or possibly more.

This gives us two main options for how to read text from a file:

1. Using `Scanner` and giving it a `File` (as compared to `System.in`).
    
2. Using a `BufferedReader`, and giving it a `FileReader` as a source.
    

If we have a file named `foo.txt`, the first option would be set up as follows:

Scanner fileScanner = new Scanner(new File("foo.txt."));

Of course there are some details that can be altered - the `File` object can come from elsewhere, and doesn't need to be created at the same time, and the text with the file name can include directory information for files that aren't in the same directory as the program. The documentation for `[Scanner](https://docs.oracle.com/javase/10/docs/api/java/util/Scanner.html)` and `[File](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/File.html)` give more details on the combinations.

The second option, set up in a one liner would be:

BufferedReader br = new BufferedReader(new FileReader("foo.txt"));

Again, this is not the only way, and the relevant documentation is worth exploring (`[BufferedReader](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/BufferedReader.html)`, `[FileReader](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/FileReader.html)`).

These two options both have pros and cons, the main features being that `Scanner` allows processing with regular expressions (this is what actually underlies the `nextInt()` method and others like it), and the `BufferedReader`buffers input to help reduce the number of possibly costly reads from an outside source (i.e. a file on disk).

With both options, we should `close()` the input when we're finished (something we've been ignoring until now, but becomes very important for file I/O). Preferably we do this in the `finally` block to ensure it happens (as much as we can at least).


## Writing to a File

Similarly, Java has a number of ways to write to a file, but we'll just look a straightforward character based one.

The `PrintWriter` class uses the same structural set up as all Java ouput (writer -> output stream -> target), but allows some short-cuts for files (essentially it takes care of the output stream and creating the target file).

The basic set-up is:

PrintWriter pw = new PrintWriter("foo.txt")

Making it possibly the simplest thing in Java's I/O library.

Of course it can be altered in many ways, again the documentation for `[PrintWriter](https://docs.oracle.com/javase/10/docs/api/java/io/PrintWriter.html)` gives some idea of this.


## The try-with structure

As I/O has the possibility of generating a number of checked exceptions, we are obliged to handle these exceptions either by throwing them up the call chain, or using a `try-catch` to handle them. In all cases with I/O, there's probably actions we would like to take, even when an exception has been generated, for example, calling `close()` on the stream.

This suggests we would like to put the call to `close()` in a `finally` block, but this creates its own problems as the `finally` block is a different context to the `try` block, so we face a dilemma about where to create the reader or writer and a mess of nested `try-catch` structures, or possibly not closing the stream properly (which may cause additional data loss in some cases, or leave files locked, etc.).

To deal with this problem, Java has a (relatively new) feature called "try-with". This allows a `try-catch` to be parameterized with resources that are available in the different contexts of the different blocks. As it is intended to be used with I/O resources, it also automatically closes the resource, without the need for an explicit `finally` block (unless you want to do something else in the `finally`).

In the following slide, we redo the `BufferedReader` example using a try-with.


## A Different File Model

Python treats file I/O a little differently than Java, with a more direct access model.

In Python, the `open` built in function produces a file object (technically the class is `_io.TextIOWrapper`, but that's not important right now) that can be potentially both written to and read from.

`open` takes up to three arguments:

open(filename [, access modifier [, buffering]])

The first argument is a `str` that specifies a file name, the optional second argument is also a `str` that indicates the type of access to the file. Although this is optional, it defaults to read, so it is effectively mandatory, and generally a good idea to be explicit about anyway. The third argument is an `int`, where 0 means no buffering, 1 means a single line, greater than 1 gives a buffer of that size (yeah, it's not consistent in its result), a negative number indicates that the system default size should be used, whatever that is.

The access modifier string has a number of possibilities, though the main ones are:

- `'r'` - read, starts at the beginning of the file.
    
- `'w'` - write, creates the file if it does not exist, and overwrites it if it does.
    
- `'a'` - append, creates the file if it does not exist, appends to the end if it does.
    

More modes can be found [here](https://docs.python.org/3/library/functions.html#open).

Once a file `f` is open, it can be read from using:

- `f.read()` to read the entire file in one go,
    
- `f.readLine()` to read a single line,
    

and written to using `f.write(<something to write>)` where `<something to write>` is replaced by the `str` to write.

When done with, a file `f` can be closed with `f.close()`.

Python also supports auto-closing files using the `with <closable> as <name>:` structure, where `<closable>` is any type that has a `close()` method, and `<name>` is local name given to it inside the `with`.

Files in Python are also iterable, line by line using a normal Python `for` loop - `for line in file:`.


