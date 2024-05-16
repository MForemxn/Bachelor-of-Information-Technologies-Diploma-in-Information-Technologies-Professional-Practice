## What is input?

Before getting to how `Scanner` works, and how this can cause problems, we first have to understand a little bit about how input works.

So far we've only worked with input from the keyboard, but Java (and everything that runs on a computer) sees input a little differently to what most people normally think about when typing something in.

At the absolute lowest software level, all data on a computer is encoded in binary. This includes _all_ input. Everything you type in, everything coming in from a webcam, whatever it is, is just binary data. Fortunately, we don't normally have to deal with it at that level, we have software libraries of various kinds that interpret the binary in different ways to make it easier to work with. The interpretation we are concerned with here is _text_ or _character data_.

## What does text look like to a computer?

Text data, to a computer, is fairly close to the way we think of it, it is a sequence of characters. Of course computers don't know what the symbol "g" means, that is a visual interpretation of a small binary number. There are several standards for what numbers give what characters, but most of the time we work with [ASCII](https://en.wikipedia.org/wiki/ASCII) values, or when needed, [UNICODE](https://en.wikipedia.org/wiki/Unicode) of some form (with [UTF-8](https://en.wikipedia.org/wiki/UTF-8) being backwards compatible with ASCII).

When we write text, we use a small set of symbols (around 70 in English, including punctuation and numbers), however we also use physical arrangement of those symbols to help. For example, we normally put spaces between words, however there is no normal symbol for that. We also put text on different lines, but we don't write a symbol to do that either, we just move our hand down the page.

When a computer is dealing with text data, there is no concept of a physical arrangement, but to render things on a monitor or print to paper, we need to have some way of encoding this information. This is done by using extra symbols that are not in handwritten (or traditionally typeset) alphabets.

For example, the following bit string

```
0101010001101000011010010111001100100000011010010111001100100000011100110110111101101101011001010000101001110100011001010111100001110100001000000111011101101001011101000110100000001010011011100110010101110111011011000110100101101110011001010111001100001010011010010110111000100000011010010111010000101110
```

can be decoded as ASCII to get

This is some text with newlines in it.

Each of the letters has an 8-bit sequence representing it, however the spaces and newlines _also_ have an 8-bit sequence representing them - a newline is `00001010`, and a space is `00100000`.

So somewhere in between these two representations we get a useful model of how text data reaches our code - as a sequence of symbols, some of which we recognise as written characters, others of which are there to store formatting and control information:

![](https://static.au.edusercontent.com/files/Nsg1zpLsg2QDKew9fLTVVHwS)


## What is java.util.Scanner?

`[java.util.Scanner](https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/util/Scanner.html)` (the full name of `Scanner`) is a small collection of tools (these are all methods, but we haven't seen that word yet) for extracting data from input (in what we've done so far, a `java.io.InputStream`, `System.in` (the fancy name for the keyboard), but it can be from other sources):

- `next()` and `hasNext()`,
    
- `nextLine()` and `hasNextLine()`,
    
- `nextInt()` and `hasNextInt()`,
    
- and a series of others along the lines of `nextInt()`/ `hasNextInt()` for all the primitive types.
    

The central lesson here is that `next()` and `nextLine()` work in a slightly different way to `nextInt()` and the ones like it. We'll gloss over the `has...` methods, the same basic things apply, except they don't produce data, they just tell you if there's data there to read.

All of these methods read from the current position in the input, up to a delimiter (a symbol marking the end of something, see below) and return that bit of the input as data if possible (or maybe fail if it's impossible), then update the current position.

## How Scanner interacts with delimiters (and what the delimiters are)

The difference is in what each does with the delimiter following the data that was read:

- `next()` accepts _any_ whitespace as a delimiter,
    
- `nextLine()` only accepts new lines as delimiters, and
    
- `nextInt()` (and similar methods) accept any whitespace as a delimiter.
    

And with that delimiter:

- `next()` moves the current position in the input to _after_ the delimiting whitespace,
    
- `nextLine()` also moves the current position to after the delimiting new line, but
    
- `nextInt()` and similar methods leave the current position at that delimiter.
    

This means that `next()` and `nextLine()` effectively discard the delimiter (depending on where the input is coming from, you may be able to move backwards as well, so it may not be truly lost). `nextInt()` and its ilk however, do not, and you still have to process the delimiter separately.

Combining this with our model of what text data looks like gives us an idea of what `Scanner` is actually doing when it reads data.


## The Blackboard

![](https://static.au.edusercontent.com/files/JiRNEeSbRET0yRhfH9LrIfKF)


Arrays in Java

[Handling Lots of Variables at Once, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330977)[Arrays - Some Technical Details, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330978)[Regression to the Mean, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330979)[Multi-dimensional Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330980)[The Size of Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330981)[Array Tidbits, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330982)[Errors Caused by Mishandling Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330983)[Arrays in the Pizza Shop, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330985)

Use left and right arrow keys to adjust the split region size

## Handling Lots of Variables at Once

Let's start with a simple program. It's going to read in two student marks from the user, and print the average:

```
import java.util.Scanner;

public class Average {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the first mark: ");

        int a = sc.nextInt();

        System.out.println("Enter the second mark: ");

        int b = sc.nextInt();

        System.out.println("The average is: " + (a+b)/2); 

        //Note this is integer division - effectively rounds toward zero.

    }

}
```


Pretty straight forward, but of course it only handles two numbers. What if we want to take the average of 3?
```
import java.util.Scanner;

public class Average {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter three marks: ");

        int a = sc.nextInt();

        int b = sc.nextInt();

        int c = sc.nextInt();

        System.out.println("The average is: " + (a+b+c)/3);

    }

}
```


Great, now we can take the average of three things. What if we want 50? Anyone want to write out 50 variables, anyone want to check that the names are all correct in the sum?

What if we want to handle 2 _or_ 3 numbers?


```
import java.util.Scanner;

public class Average {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("How many marks will you enter? ");

        int n = sc.nextInt();

        System.out.println("Enter the marks: ");

        int a = sc.nextInt();

        int b = sc.nextInt();

        int c = 0;

        if (n == 3) {

```

Not too complicated, but still unsatisfactory - what if the user enters 0, 1, or anything greater than 3? The program breaks!

So we have two problems:

1. We really don't want to have to create a whole bunch of variables.
    
2. We want something that is going to deal with all reasonable cases in a flexible way.
    

This is exactly the problems that _arrays_ solve.

Arrays in Java

[Handling Lots of Variables at Once, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330977)[Arrays - Some Technical Details, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330978)[Regression to the Mean, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330979)[Multi-dimensional Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330980)[The Size of Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330981)[Array Tidbits, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330982)[Errors Caused by Mishandling Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330983)[Arrays in the Pizza Shop, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330985)

Use left and right arrow keys to adjust the split region size

## Arrays - Some Technical Details

Arrays are a fairly common feature in programming languages. Most have them as a basic component, and most of the rest can add them in in some manner, only a few eschew them entirely.

Arrays are, or at least model, a block of contiguous memory, broken up into a sequence of elements which contain the values stored in the array.

The number of elements is the size (or length) of the array. The memory taken up by each element is the same as the declared underlying type of the array.

The first element of the array (in Java) has index 0, the second has index 1, and so on. The last element has index "length minus 1". This scheme is called 0-indexing, and is common across many programming languages. You'll get used to it very quickly, but if this is your first time seeing it, keep it at the forefront of your mind.

These concepts are, of course, better illustrated by an example:

```
import java.util.Scanner;

public class ArrayExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int[] values = new int[3];

        System.out.println("Enter three numbers: ");

        values[0] = sc.nextInt();

        values[1] = sc.nextInt();

        values[2] = sc.nextInt();

        System.out.println("The average is: " + (values[0] + values[1] + values[2])/values.length);

```

Let's look at that line by interesting line:

- Our first new thing appears on line 8. This is a declaration and initialisation of an array of `ints` of size 3. The variable `values` has type `int[]` (i.e. array of ints). The underlying type of the array is `int` (i.e. each element in the array is an `int`). As the `new` keyword gives away, arrays in Java are objects, so `values` is an object variable. This does not mean that the things the arrays stores are necessarily objects - they can be primitive or object/reference values.
    
- Lines 11 to 13 show us how to access an element (also called a cell) of an array. `a[i]` is the element at position `i` of the array `a`. So here we're accessing the element at 0, then 1, then 2. Again, note that the numbering starts at 0, not 1.
    
- Line 15 shows how to get data out of an array - it's exactly the same as how to get it in, just like a regular variable.
    
- Line 15 also uses `values.length`. One part of arrays being objects in Java is that they can carry around more information than just the stored values. One thing each array has is a variable called `length` that, surprise surprise, gives the number of elements of the array.
    

So in the example, `values` is an array with enough space to store 3 `ints`. These values are placed right next to each other in memory, so once you know where the array starts, it's really easy to get any element you want (you just add an offset value to the starting address of the array, that's essentially what the number in the square brackets does).

For those who know a bit of C or C++, you may be asking whether array sizes have to be known at compile time. Because arrays in Java are objects (and hence dynamically allocated, it's the only way Java does objects),it's not necessary to have this information until run time. For those that don't know any C or C++, this will appear completely straightforward:


```
import java.util.Scanner;

public class ArrayExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter an array size: ");

        int n = sc.nextInt();

        int[] a = new int[n];

        System.out.println("The array has " + a.length + " cells.");

    }

```

There's also no restriction on the underlying type for the array, it doesn't have to be primitive:

```
import java.util.Scanner;

public class ArrayExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String[] words = new String[2];

        words[0] = "Hello";

        words[1] = "Arrays";

        System.out.println(words[0] + " " + words[1]);

    }

```


Arrays in Java

[Handling Lots of Variables at Once, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330977)[Arrays - Some Technical Details, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330978)[Regression to the Mean, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330979)[Multi-dimensional Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330980)[The Size of Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330981)[Array Tidbits, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330982)[Errors Caused by Mishandling Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330983)[Arrays in the Pizza Shop, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330985)

Use left and right arrow keys to adjust the split region size

## Regression to the Mean

Going back to our averages problem, we can now approach it a different way. We don't quite have all the tools to fully exploit arrays yet (we need iterative structures - loops), but we can make a step forward (if a little hacky at the moment):


```
import java.util.Scanner;

public class Average {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("How many marks will you enter? ");

        int n = sc.nextInt();

        int[] values = new int[10];

        if (n > 0) {

            System.out.println("Enter the marks: ");

            int sum = 0;
```


Now we can handle up to 10 values, and it's easier to expand things if we need more than 10, at least a little. Again, we really need loops to make this more effective (and methods to really do it properly), but step by step...

Note also the use of the switch statement with no breaks to pick where to start - this is a technique adapted from manual loop unrolling. If you want to see what it was like to program old, slow computers with bad compilers, look up the history of Duff's Device.


Arrays in Java

[Handling Lots of Variables at Once, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330977)[Arrays - Some Technical Details, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330978)[Regression to the Mean, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330979)[Multi-dimensional Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330980)[The Size of Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330981)[Array Tidbits, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330982)[Errors Caused by Mishandling Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330983)[Arrays in the Pizza Shop, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330985)

Use left and right arrow keys to adjust the split region size

## Multi-dimensional Arrays

So far we've seen _one-dimensional_ arrays, that is, arrays which have a single index. Java supports _multi-dimensional_ arrays - arrays with two or more indices. The simplest example of something you might use a mult-dimensional array for is a matrix:

```

int[][] matrix = new int[2][2];

matrix[0][0] = 1;

matrix[0][1] = 0;

matrix[1][0] = 0;

matrix[1][1] = 1;

```

This code builds a little 2x2 array representing a 2x2 matrix. Notice that there's nothing particularly new in this, we just add more `[]`'s to things.

We can do some slightly trickier things with multi-dimensional arrays though - the sub-arrays don't have to be of the same length!

```

int[][] matrix = new int[3][];

matrix[0] = new int[3];

matrix[1] = new int[2];

matrix[2] = new int[1];

```

This allows use to have ragged arrays and only use the space actually necessary.

This works because Java doesn't treat a 2-dimensional array as a special object. If you think of appending `[]` to a type `t` as declaring an array of `ts` (like so: `t[]`), then `int[][]` is an array of arrays of `ints`, or with some syntactically incorrect bracketing: `(int[])[]`. The only confusing here is the ordering of the indices - the first index is the one that returns the array of `ints`, not the second. That is, if we declare `int[][] values =...`, then `values[i]` is an array of `ints` (assuming `i` is within range). So the structure of the declaration is a bit backwards compared to the usage.


Arrays in Java

[Handling Lots of Variables at Once, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330977)[Arrays - Some Technical Details, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330978)[Regression to the Mean, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330979)[Multi-dimensional Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330980)[The Size of Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330981)[Array Tidbits, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330982)[Errors Caused by Mishandling Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330983)[Arrays in the Pizza Shop, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330985)

Use left and right arrow keys to adjust the split region size

## The Size of Arrays

## Maximum Array Sizes

So far we've been defining arrays with small sizes, so one may ask if there's some upper limit. There are in fact two answers to this. There's a theoretical upper limit due to the semantics of arrays in Java. Arrays are indexed by `ints`, and they can't have negative indices, so the number of elements it can have is limited by the largest number an `int` can have. This happens to be:


```
public class IntMax {

    public static void main(String[] args) {

        System.out.println(Integer.MAX_VALUE);

    }

}
```



If we try to address an array with a `long`, it won't even let us (even when the value itself is fine), and gives a familiar error:

```
public class LongIndex {

    public static void main(String[] args) {

        Object[] foo = new Object[10];

        long i = 4;

        System.out.println(foo[i]);

    }

}
```


The second limit on arrays is a practical one, and is simply how much contiguous memory the VM can allocate:

```
public class BigArray {

    public static void main(String[] args) {

        Object[] foo = new Object[Integer.MAX_VALUE];

    }

}
```


With some experimentation, we can find out what the practical maximum is (using a whole bunch of stuff we haven't seen yet):


```
public class BigArray {

    public static final int bigAvg(int a, int b) {

        long la = a;

        long lb = b;

        return (int)((la+lb)/2);

    }

    public static void main(String[] args) {

        int l = 0;

        int h = Integer.MAX_VALUE;

        while (l < h) {

            try {

```

So that number is a fair bit smaller than the maximum value of an `int`. If you run the code on a different computer (rather than Ed's servers) you may get a different value, depending on how much memory is allocated to the JVM.

It's also affected by the underlying type of the array - different variable types take up more or less space:

```
public class BigArray {

    public static final int bigAvg(int a, int b) {

        long la = a;

        long lb = b;

        return (int)((la+lb)/2);

    }

    public static void main(String[] args) {

        int l = 0;

        int h = Integer.MAX_VALUE;

        while (l < h) {

            try {
```


## Changing the Size of Arrays

Arrays in Java are not dynamically resizable - this means once you create it, it's fixed at that size. You can create a new array and use the same variable to reference that array, but it will not include the data from the original, unless you copy it over somehow:

```
public class ArrayResize {

    public static void main(String[] args) {

        int[] a = new int[2];

        a[0] = 1;

        a[1] = 4;

        System.out.println(a[1]);

        a = new int[4]; //New bigger array

        System.out.println(a[1]);

    }

}
```


Note that this is not overwriting the original array - the variable just no longer refers to it (if nothing refers to it at all, it gets deleted [in the sense of `delete[]` for C++ programmers]):


```
public class ArrayResize {

    public static void main(String[] args) {

        int[] a = new int[2];

        a[0] = 1;

        a[1] = 4;

        int[] b = a;

        System.out.println("a[1] == " + a[1] + ", "  + "b[1] == " + b[1]);

        a = new int[4]; //New bigger array

        System.out.println("a[1] == " + a[1] + ", " + "b[1] == " + b[1]);

    }

}
```




Arrays in Java

[Handling Lots of Variables at Once, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330977)[Arrays - Some Technical Details, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330978)[Regression to the Mean, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330979)[Multi-dimensional Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330980)[The Size of Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330981)[Array Tidbits, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330982)[Errors Caused by Mishandling Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330983)[Arrays in the Pizza Shop, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330985)

Use left and right arrow keys to adjust the split region size

## Array Tidbits

Here's a few other bits and pieces about arrays that don't fit neatly elsewhere.

## Array Literals

If you happen to know exactly what your array is going to look like, you can specify the array in one go. This only works for data types that have a literal representation - so complex things can't be handled this way, but numbers, `Strings`, `booleans`, etc., all work fine:


```
public class ArrayLiteral {

    public static void main(String[] args) {

        int[] a = {1, 4, 7, 8, 2};

        System.out.println(a[3]);

    }

}
```


## No Polymorphism

You may be wondering if its possible to have different types of data in a single array. In short, no, we can't have an array like `{1, "Hi", 3.4}`.

If the data types are suitably compatible (i.e. they can all be converted to the same, more general type - another thing we'll see later), then you can kind of do this.

## Alternate Declaration Syntax

Thanks to Java attracting a lot of C and C++ programmers (willingly or otherwise), you can also use the C style array declaration syntax:

```
public class CArray {

    public static void main(String[] args) {

        int a[] = new int[3];

        System.out.println(a[1]);

    }

}
```


## Automatic Element Initialisation

When an array is created in Java, it automatically fills out each cell with a default value. What that value is depends on the underlying type of the array. For `ints`, it's 0, so declaring an array of `ints` will give you (barring you doing anything about it) an array full of zeroes.

Primitive data types have reasonably obvious default values, so let's take a look at what object types do:

```
public class ObjectArray {

    public static void main(String[] args) {

        String a[] = new String[3];

        System.out.println(a[1]);

    }

}
```


An array of objects (here I used `String` just because it's familiar, not because it's special in any way) is filled with the default value `null`. This will come up again when discuss object data types. For those who are already C/C++ programmers (or some other languages), all object variables are references, dynamically allocated, so the default value is a null pointer.


Arrays in Java

[Handling Lots of Variables at Once, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330977)[Arrays - Some Technical Details, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330978)[Regression to the Mean, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330979)[Multi-dimensional Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330980)[The Size of Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330981)[Array Tidbits, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330982)[Errors Caused by Mishandling Arrays, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330983)[Arrays in the Pizza Shop, slide completed](https://edstem.org/au/courses/15065/lessons/48822/slides/330985)

Use left and right arrow keys to adjust the split region size

## Errors Caused by Mishandling Arrays

Finally, let's look at the common array related error messages you might get, so that you're familiar with what might pop out when things break (and they will :D).

The simplest, and most common one, is the out-of-bounds error. This occurs when you try to access an element that the array doesn't have.


```
public class ArrayError {

    public static void main(String[] args) {

        int[] a = new int[5];

        System.out.println(a[23]);

    }

}

```

While we're looking at that, notice that the error message here is slightly different to the ones you've mostly seen so far. This error occurred when the code was run, and wasn't detected when the code was compiled. Although in this particularly case, it's easy to see that 23 is out of range, Java can't in general figure that out, so it only pops out when the code is run and fails.

Like other variable types, arrays need to be initialised, and the compile will stop you if it can't find an initialisation:


```
public class ArrayError {

    public static void main(String[] args) {

        int[] a;

        System.out.println(a[0]);

    }

}
```




## No Arrays!

Python, unlike almost every other imperative language, does not have an array type as a basic type. Other libraries (notably Numpy) introduce them, but vanilla Python decided to go a different direction and use _lists_ as its basic "collect a bunch of data together" data type.

Java also has a `List` type, but it's not a primitive type (technically arrays aren't either, but they get special syntax, so they're treated similarly to a primitive type in some ways).

Python `lists` are indexed like Java arrays, but they don't have a fixed size, and inline with the dynamic typing system, allow elements to have different types.


## Basic Syntax

A list is declared in Python using square brackets `[` and `]`. If you want it to start with elements, you can give it a comma delimited list between the brackets.


```
l = [] #An empty list.

ll = [1, 2, 3] #A not very interesting list of three elements.

print(l)

print(ll)
```


As mentioned, there is no compulsion for the elements to have the same type.

```

l = [1, "Hi", 16.2, (2, 4)]

print(l)
```


Elements of the list are indexed just like arrays in Java, starting at 0.


```
l = ['a', 'b', 'c']

print(l[2] + l[0] + l[1])
```


Although `lists` are objects in Python (as arrays are in Java), they do not apparently offer a built in length field or method, instead, Python uses the generic `len` function (which works for anything that properly reports a length, there's a bit of syntactic misdirection going on here).
```
l = [1, 2, 3, 4, 5]

print(len(l))

```


## Modifying Lists

In contrast to arrays in Java (and most other languages that have them), Python `lists` can have their length changed.

There are a number of ways to do this, but the basic route is to use the `append` function provided by the `list` data structure.


```
l = []

l.append(1)

l.append(2.0)

l.append('tree')

print(l)
```


As you can see in the example, this adds the element offered as an argument to the end of the list.

To add an element somewhere in the middle of the list (without just overwriting existing ones), the `insert(pos, elem)` function is used where `pos` is the index to insert the element at (moving what was there before, and everything after it up one spot), and `elem` is the new element to be inserted.
```
l = ["Mad", "dangerous to know"]

l.insert(1, "bad")

print(l)


```

## Combining Lists

Given two lists, there are also a number of ways they can by combined to make a single list.

One list can be added to the end of another by using `extend` or just `+`/`+=`.

```

l1 = [1, 2, 3]

l2 = [4, 5, 6]

l3 = l1 + l2

print(l3)

l3.extend([7, 8, 9])

print(l3)

l3 += [10]

print(l3)
```


Whole lists can also be inserted into the middle of another list with the slice operation.

This has the basic syntax `l[a:b] = m` where `a` is the start index of the slice (just before that position in the list) and `b` is the end index (just before). The section covered by the slice will be replaced by the list (or tuple) `m`.

```

l = [1, 2, 3]

l[1:1] = ['a', 'b', 'c'] #The list on the right will be 

                         #squeezed between elemenst 0 and 1

print(l)

l[1:3] = ["wooooo"] #Elements 1 and 2 will be replaced by the list on the right

print(l)
```



```
print("Hi and welcome to the social distance Pizza shop.\n" +

                          "What sort of pizza would you like?\n" +

                          "1. Vegetarian\n" +

                          "2. Too Much Meat\n" +

                          "3. Scarparella\n" +

                          "Enter the number of your selection: ")

selection = int(input())

print("You selected the ", end="")

if selection == 1:

    print("Vegetarian", end="")

elif selection == 2:

    print("Too Much Meat", end="")
```

## Repetition is Boooooring

At the moment, if we want to do the same thing repeatedly, we have to write the code out as many times as we want it done.

To give a dull example, if we want to print the numbers 1 to 10, each on a separate line, we have to do something like:

```
public class DecaPrint {

    public static void main(String[] args) {

        System.out.println(1);

        System.out.println(2);

        System.out.println(3);

        System.out.println(4);

        System.out.println(5);

        System.out.println(6);

        System.out.println(7);

        System.out.println(8);

        System.out.println(9);

        System.out.println(10);

    }

}
```


We could do this in one horrible print statement, but in general we can't always wrap repetitive actions into a single step.

So what happens when we want to print out 1 to 11. Not so bad, we add another `println`. What happens when we want 1 to 100, or 1 to 1000 - who wants to check that code? Even worse, what if we want to change the number of things we print out every time its run, maybe the user gets to choose - terrifying!

What we want is a way of getting the program to perform the same basic action until some stopping condition is reached. This is exactly what _loops_ are for. You may recall back in the first readings that I mentioned repetition as a key part of any programming language. In procedural languages like Java, looping is the primary (but not only) method of achieving this.

Java offers several different kinds of loops, to suit different situations.


## While Loops

The first loop we will look at is the `while` loop. Its basic syntactical structure is:

```
while (<condition>) {

    <code>

}

```

It repeats the `<code>` as long as the `<condition>` evaluates to `true`. Like `if` statements, the `<condition>` has to be a `boolean` expression of some kind.

Our previous example can then be expressed thusly:

```
public class DecaPrint {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 10) {

            System.out.println(i);

            i++;

        }

    } 

}
```



So we set up a variable with the starting variable, the loop keeps running until that variable exceeds 10, and at each iteration we print out the current value of the variable and then increase the value.

Now we can easily handle the user input version of this program:

```

import java.util.Scanner;

public class NPrint {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("How many numbers would you like to print? ");

        int n = sc.nextInt();

        int i = 1;

        while (i <= n) {

            System.out.println(i);

            i++;

        }

    } 


```
So apart from the input prompt stuff, the only change was to alter the condition from `i <= 10` to `i <= n`. Without a loop (or other repetition mechanism), this program wasn't even possible before, now it's trivial.


## For Loops

The next kind of loop we will look at is the `for` loop. The basic use of a for loop is to repeat an action a fixed number of times (according to some condition).

Its syntax is:

```

for (<variable initialisation>; <condition>; <variable modification) {

    <code>

}
```


A bit more complicated than the `while` loop, but you'll find this syntax very useful and conducive to well structured loops.

The `<variable initialisation>` statement is used to set up the _loop variable_, the `<condition>`, like in a `while` loop tells the loop when to stop (or more precisely when to keep going), and the `<variable modification>` statement allows the loop variable to be changed.

So our little print program would look something like:


```
import java.util.Scanner;

public class NPrint {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("How many numbers would you like to print? ");

        int n = sc.nextInt();

        for (int i = 1; i <= n; i++){

            System.out.println(i);

        }

    } 

}
```


A little more compact than the equivalent `while` version, but you can see the statements are all still there, just rearranged. So this particular loop can be read as something like "for `i` from 1 to 10 in steps of size 1, print out `i`". This is the general flavour of `for` loops, they conceptual go from the start to the end in a pattern according to modification statement and run the code at each step. Of course by changing the details, we can achieve quite different results:

```
import java.util.Scanner;

public class NEvenPrint {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Pick an ending number: ");

        int n = sc.nextInt();

        for (int i = 2; i <= n; i += 2){

            System.out.println(i);

        }

    } 

}
```

```
import java.util.Scanner;

public class NOddPrint {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Pick an ending number: ");

        int n = sc.nextInt();

        for (int i = 1; i <= n; i += 2){

            System.out.println(i);

        }

    } 

}
```



## While vs. For

Now that we have two different types of loops, we might ask which is the best? Or at least, which should we use for what?

The first observation to make is that the two looping structures are functionally equivalent - you can convert any `while` loop to a `for` loop, and any `for` loop to a `while` loop.

The conversion of a `while` to a `for` is near trivial, once you remember (or learn) that Java quite happily allows an empty statement. This `while` loop:

```
public class WhileToFor {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 10) {

            System.out.println(i);

            i++;

        }

    }

}
```


Just becomes this `for` loop:

```
public class WhileToFor {

    public static void main(String[] args) {

        int i = 1;

        for (;i <= 10;) { //Note the two empty statements

            System.out.println(i);

            i++;

        }

    }

}
```


Of course we can compress that code:

```
public class WhileToFor {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            System.out.println(i);

        }

    }

}
```



But there are cases where that's not possible:

```
import java.util.Scanner;

public class WhileToFor {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        while (true) {

            System.out.print("Enter 1 if you want to stop: ");

            if (sc.nextInt() == 1) break;

        }

    }

}
```



The almost direct `for` translation is then:
```

import java.util.Scanner;

public class WhileToFor {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        for (;;) {

            System.out.print("Enter 1 if you want to stop: ");

            if (sc.nextInt() == 1) break;

        }

    }

}
```


Similarly, we can convert any `for`loop into a while loop, we just break up the three statements in the `for`statement and put them in the right spot:

```

public class ForToWhile {

    public static void main(String[] args) {

        int count = 0;

        for (int i = 2048; i > 1; i /= 2) {

            count++;

        }

        System.out.println(count);

    }

}

```

Expressing this as a `while` loop:



```
public class ForToWhile {

    public static void main(String[] args) {

        int count = 0;

        int i = 2048;

        while (i > 1) {

            count++;

            i /= 2;

        }

        System.out.println(count);

    }

}
```


So we can see that in terms of computing things, they're identical, it's only the syntax that differs. Where they differ is in informing the reader of what to expect from the loop, so, broadly speaking:

- if you are computing something where the number of iterations is determined by an index value (i.e. the `i` in all the loops above, you probably want to use a `for` loop - the loop structure forces you to think of the three component statements when you're setting up the loop: creating and initialising the variable, the terminating condition, and how to modify the index variable. The reader can also then look at the loop and (probably) immediately grasp how the iteration is going to occur.
    
- if you are computing something where you're not sure how many steps it will take to meet the ending condition, or the condition is not dependent on something easily expressible as an index variable (user input for example, as above), you probably want a `while` loop.

## Advanced Looping: For-each

For certain particular variable types, Java has a special `for` loop syntax to make things easier and neater. It's called a `for-each`loop and looks something like:

```
for (<type> <name> : <iterable collection>) {

    <code>

}

```

What this does is give you each element of the `<iterable collection>` one by one in the variable `<name>`. It's read something for "for each element in the collection, execute `<code>`".

So what is an iterable collection? If you happen to already know what an interface is (or a pure virtual class in C++), it's anything that implements the `Iterable` interface, plus arrays. If you don't know what an interface is, it's most things in the Java library that have a linear ordering - if you can think of a sensible way that you could get the elements one by one, this probably works. It also works for arrays.

To give an example, this prints out the elements of the thing they're iterating over:

```
public class ForEach {

    public static void main(String[] args) {

        int[] a = {1, 3, 5, 7};

        for (int i :  a) {

            System.out.println(i);

        }

    }

}
```


This doesn't always work with things we might think it works with:


```
public class ForEach {

    public static void main(String[] args) {

        String s = "This won't work";

        for (char c :  s) {

            System.out.println(c);

        }

    }

}
```


The error message there tells us exactly what this can work with, as mentioned before, arrays and things that implement Iterable.

The `for-each` loop is really just syntactic sugar for a normal `for`loop. Arrays and Iterables just happen to have a standard way of interacting, so it's easy for the compiler to write a working `for`loop for them. For arrays, the `for-each` can be unpacked to:


```
public class ForEach {

    public static void main(String[] args) {

        int[] a = {1, 3, 5, 7};

        // for (int i :  a) {

        //  System.out.println(i);

        // }

        for (int index = 0; index < a.length; index++) {

            int i = a[index];

            System.out.println(i);

        }

    }

}
```


## Advanced Looping: Do-While

As noted in the "While vs. For" slide, `while` loops and `for` loops are really the same thing, just slightly different syntax to better fit certain applications. You may note that both of these loops check the condition _before_ the loop starts.

Sometimes, you may actually want to run the body of the loop first, then check the condition to see if you should keep looping. For this situation, Java provides the `do-while` loop. It's pretty much an inverted `while` loop:

```
do {

    <code>

}

while (<condition>);
```


Note the semicolon.

A particularly useful application of this is input testing - you need the input before you can test to see if it's valid. If we did this with a `while` loop, it would look something like this:


```
import java.util.Scanner;

public class Input {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");

        int n = sc.nextInt();

        while (n != 6) {

            System.out.println("That's not 6!");

            System.out.print("Enter a number: ");

            n = sc.nextInt();

        }

    }
```


You can see the duplicated code. Once you're writing out exactly the same code in two places, you should be considering if there's a better way to do things. In this case, we can use a `do-while`, which may be better:


```
import java.util.Scanner;

public class Input {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n;

        do {

            System.out.print("Enter a number: ");

            n = sc.nextInt();

            if (n != 6) System.out.println("That's not 6!");

        }

        while (n != 6);

```

That's a little more compact, but the true saving is in only having the relevant code appear once - then any changes only have to happen in once spot. When we get to methods, we can improve this further.


## Python's Loops

As with Java, and every imperative language, Python allows the construction of loop structures - repetition is a central element of imperative programming, without it, the power of the language is drastically limited, although loops aren't the only way to implement repetition.

As with other elements of Python's design, the range and structure of loops in Python is simplified, relative to other, more baroque languages.

Python has two looping structures: `for` loops, which bear more in common with Java's `for-each` loops; and `while` loops, which are fairly standard in most imperative languages.


## For Loops

As mentioned, Python's `for` loops are conceptually more similar to Java's `for-each` loops, though they can be coaxed into working much like a `for` loop.

At heart, Python's `for` loops iterate over a given sequence, producing each element in turn. As many Python data structures support this iterator approach, this style of `for` loop is fairly suitable for most tasks. This is also where `in` gets its most common use.

```
word = "Programming 1"

for letter in word:

    print(letter)

trinums = [1, 3, 6, 10, 15]

for n in trinums:

    print(str(n * n)) #Don't know what the point of this is
```


In general, the format for a Python `for` loop is `for` `range expression` `:` followed by the loop body.

Although the basic Python approach of iterating over elements of a collection is useful most of the time, sometimes we need a basic Algol style for loop. This can be achieved in Python with the `range` function, which can be modified to do most, if not all, of the things we expect from a traditional for loop.

`range` takes up to three parameters:

- With a single parameter, starts at 0 and goes to the parameter value, going up by one step at a time.
    
- With two parameters, it starts at the first and goes to the second, one at a time.
    
- With three, it starts at the first, goes to the second, using the third as the step.
    

Note that the starting point is inclusive, but the end point is exclusive.


```
print("Loop 1")

for i in range(3):

    print(i, end = " ")

print("\n")

print("Loop 2")

for i in range(3, 6):

    print(i, end = " ")

print("\n")

print("Loop 3")

for i in range(10, 0, -3):

    print(i, end = " ")

```

The last one in particular shows how this structure can be mapped on to a normal for loop structure most of the time.


## While Loops

Python's `while` loop is in some sense much more traditional, it has the same `while` `Boolean condition:` `loop body` structure of all while loops.

```
i = 0

while i < 10:

    print(i)

    i += 1

```

Thus in this case all the observations about while loops in Java apply here.

That's kind of it, `while` loops are `while` loops.


## Nesting

Like every other statement in Java, once you enter a block (i.e. once you hit an open brace: `{`) you can write any statement you want. This allows _nested_ loops, much as we could have nested `if` statements.

This is particularly useful for dealing with multidimensional data and for checking conditions of the form "for every x, for every y, ...".

A simple example is printing out all the primes up to a certain point:


```
import java.util.Scanner;

public class Primes {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a positive integer: ");

        int n = sc.nextInt();

        int count = 0;

        for (int i = 2; i < n; ++i) {

            boolean isPrime = true;
```


Notice the use of the index variable `i` from the outer loop in determining the stopping condition on the inner loop `j < i`. This is quite common in nested loops, and you will find it a useful tool regularly.

Another example is doing something with two dimensional array:

```
public class Matrix {

    public static void main(String[] args) {

        int[][] data = {{1,2,4},{7,8},{7,3,7},{9,5,2,2,5}};

        for (int i = 0; i < data.length; ++i) {

            for (int j = 0; j < data[i].length; ++j) {

                System.out.print(data[i][j] + " ");

            }

            System.out.println();

        }

    }

}
```


While formatting data is not the most exciting thing, the key part here is to observe the traversal over all the elements of the array, and how that's achieved in a two-dimensional setting. Changing to 3 or more dimensions is then a simple matter of deeper nesting.

A further (perhaps more practical) example is matrix multiplication. If we have two matrices 𝐴A and 𝐵B, and we multiply them to get 𝐶C, then the (𝑖,𝑗)(i,j) entry of 𝐶C is

𝑐𝑖,𝑗=∑𝑘=0𝑚−1𝑎𝑖,𝑘𝑏𝑘,𝑗ci,j​=k=0∑m−1​ai,k​bk,j​

Where 𝑚m is the length of the rows 𝐴A and the columns in 𝐵B (they have to match for it to work).

This gives a simple, triply nested looping program ([there are better, more complicated ones](https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm)):


```
public class SimpleMatrixMultiplication {

    public static void main(String[] args) {

        int[][] A = {{7, 2, 1}, {0, 3, -1}, {-3, 4, -2}};

        int[][] B = {{-2, 8, -5}, {3, -11, 7}, {9, -34, 21}};

        int[][] C = new int[B.length][A[0].length];

        for (int i = 0; i < A[0].length; ++i) {

            for (int j = 0; j < B.length; ++j) {

                for (int k = 0; k < A.length; ++k) {

                    C[i][j] += A[i][k]*B[k][j];

                }

            }

        }

```

Note also the reuse of the variable names `i` and `k` in the second set of nested loops (the print out ones) - the variable names are local to the loop they're declared in.


## Bodyless Loops and Single Statement Loops

We have seen `for`loops with empty statements in the loop declaration, but it's also possible to have a loop with an empty body:

```

public class EmptyLoop {

    public static void main(String[] args) {

        for (int i = 0; i < 10; ++i);

    }

}
```


This may seem a bit silly, and in the given example, it certainly is. However, this is useful once we realise that there's very little restriction about the expressions that make up the three parts of the loop. In fact, only the middle has a restriction - it must evaluation to a `boolean`.


```
public class EmptyLoop {

    public static void main(String[] args) {

        int sum = 0;

        for (int i = 0; i <= 10; sum += i++);

        System.out.println(sum);

    }

}
```

```

public class EmptyLoop {

    public static void main(String[] args) {

        for (int i = 0, sum = 0; i <= 10; System.out.println(sum += i++));

    }

}
```



Of course this very quickly produces terrible code - mashing everything you can into the smallest space possible is not a good programming strategy outside the IOCCC (in fact, this code is so bad, it won't even compile with vanilla C anymore, extra challenge - figure out how to get this running):

```

main(_){_^448&&main(-~_);putchar(--_%64?32|-~7[__TIME__-_/8%8][">'txiZ^(~z?"-48]>>";;;====~$::199"[_*2&8|_/64]/(_&2?1:8)%8&1:10);}
```


A more useful form of this is recognising that the body of a `for` loop can consist of a single statement. This is particularly useful when combined with the `for-each` version of the `for` loop:

```

public class ShortLoop {

    public static void main(String[] args) {

        int[] values = {3, 6, 1, 8, 3, 8, 9, 0, 3};

        int sum = 0;

        for (int n : values) sum += n;

        System.out.println(sum);

    }

}
```


This produces nice, clean, readable code while still being quite compact.

If we were so inclined, we could use this in our matrix multiplication example:



```
public class SimpleMatrixMultiplication {

    public static void main(String[] args) {

        int[][] A = {{7, 2, 1}, {0, 3, -1}, {-3, 4, -2}};

        int[][] B = {{-2, 8, -5}, {3, -11, 7}, {9, -34, 21}};

        int[][] C = new int[B.length][A[0].length];

        for (int i = 0; i < A[0].length; ++i)

            for (int j = 0; j < B.length; ++j)

                for (int k = 0; k < A.length; ++k)

                    C[i][j] += A[i][k]*B[k][j];

        for (int[] row : C) {

            for (int entry : row) System.out.print(entry + " ");
```


## Finishing Early

Sometimes it is also useful to get out of a loop "early". While this is uncommon when dealing with structured data, it is more common when dealing with user input. In fact, I sneaked a simple example of this in the first loops lesson:


```
import java.util.Scanner;

public class WhileToFor {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        for (;;) {

            System.out.print("Enter 1 if you want to stop: ");

            if (sc.nextInt() == 1) break;

        }

    }

}
```


The `break` keyword that we've seen in the context of `switch` statements also has a use in loops, where it terminates the loop, and the program continues from the next statement after the loop:

```
public class Breaking {

    public static void main(String[] args) {

        for (int i = 0; i < 10; ++i) {

            if (true) break;

            System.out.println("This line is never reached.");

        }

        System.out.println("We jump straight to here.");

    }

}

```

You may wonder why there's an `if (true)` in there - it's because the Java compiler will detect unreachable code, as long as it doesn't have to evaluate anything (it won't even try if there's any kind of condition):


```
public class Breaking {

    public static void main(String[] args) {

        for (int i = 0; i < 10; ++i) {

            break;

            System.out.println("This line is never reached.");

        }

        System.out.println("We jump straight to here.");

    }

}
```


Now that we've seen nested loops, we should be wondering how `break` statements work there - do they exit the current loop? All of the loops?


```
public class ElectricBoogaloo {

    public static void main(String[] args) {

        for (int i = 0; i < 3; ++i) {

            System.out.println(i + "  : In the outer loop.");

            for (int j = 0; j < 3; ++j) {

                System.out.println(i + "," + j + ": About to break in the inner loop.");

                break;

            }

        }

        System.out.println("All looping done.");

    }

}
```


So we can see that the `break` only ends the current loop. In fact what it's doing is simply jumping to the end of the current block (i.e. finding a suitable `}` and continuing from there, mostly this is the next `}`).

We can do more complicated things though. Blocks can be given labels, and `break` can jump to the _end_ of the labeled block:


```
public class ThereWasNoSecondSequel {

    public static void main(String[] args) {

        for (int i = 1; i < 4; ++i) {

            one : {

                two : {

                    three : {

                        System.out.println("i is " + i + ".");

                        switch (i) {

                            case 1 : break one;

                            case 2 : break two;

                            case 3 : break  three;

                        }

                        System.out.println("Can't get here");

                    }

```

A more useful application of this is to break out of a series of nested loops:


```
public class ElectricBoogaloo {

    public static void main(String[] args) {

        done: for (int i = 0; i < 3; ++i) {

            System.out.println(i + "  : In the outer loop.");

            for (int j = 0; j < 3; ++j) {

                System.out.println(i + "," + j + ": About to break in the inner loop.");

                break done;

            }

        }

        System.out.println("All looping done.");

    }

}
```


Those who have seen the terrible magic of a GOTO statement may be looking at this and thinking, uh-oh, spaghetti code here we come! Fortunately, the `break label;` command is not quite so unrestricted, you can only `break` to _enclosing_ blocks:


```
public class BreakingBad {

    public static void main(String[] args) {

        one: {

            //Trying to create and infinite loop

        }

        for (int i = 0; i < 10; ++i) {

            System.out.println("I'm getting outta here!");

            break one;

        }

    }

}
```



## Finishing Early

Sometimes it is also useful to get out of a loop "early". While this is uncommon when dealing with structured data, it is more common when dealing with user input. In fact, I sneaked a simple example of this in the first loops lesson:


```
import java.util.Scanner;

public class WhileToFor {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        for (;;) {

            System.out.print("Enter 1 if you want to stop: ");

            if (sc.nextInt() == 1) break;

        }

    }

}
```


The `break` keyword that we've seen in the context of `switch` statements also has a use in loops, where it terminates the loop, and the program continues from the next statement after the loop:


```
public class Breaking {

    public static void main(String[] args) {

        for (int i = 0; i < 10; ++i) {

            if (true) break;

            System.out.println("This line is never reached.");

        }

        System.out.println("We jump straight to here.");

    }

}
```



You may wonder why there's an `if (true)` in there - it's because the Java compiler will detect unreachable code, as long as it doesn't have to evaluate anything (it won't even try if there's any kind of condition):


```
public class Breaking {

    public static void main(String[] args) {

        for (int i = 0; i < 10; ++i) {

            break;

            System.out.println("This line is never reached.");

        }

        System.out.println("We jump straight to here.");

    }

}
```



Now that we've seen nested loops, we should be wondering how `break` statements work there - do they exit the current loop? All of the loops?

```
public class ElectricBoogaloo {

    public static void main(String[] args) {

        for (int i = 0; i < 3; ++i) {

            System.out.println(i + "  : In the outer loop.");

            for (int j = 0; j < 3; ++j) {

                System.out.println(i + "," + j + ": About to break in the inner loop.");

                break;

            }

        }

        System.out.println("All looping done.");

    }

}
```


So we can see that the `break` only ends the current loop. In fact what it's doing is simply jumping to the end of the current block (i.e. finding a suitable `}` and continuing from there, mostly this is the next `}`).

We can do more complicated things though. Blocks can be given labels, and `break` can jump to the _end_ of the labeled block:


```
public class ThereWasNoSecondSequel {

    public static void main(String[] args) {

        for (int i = 1; i < 4; ++i) {

            one : {

                two : {

                    three : {

                        System.out.println("i is " + i + ".");

                        switch (i) {

                            case 1 : break one;

                            case 2 : break two;

                            case 3 : break  three;

                        }

                        System.out.println("Can't get here");

                    }
```


A more useful application of this is to break out of a series of nested loops:


```
public class ElectricBoogaloo {

    public static void main(String[] args) {

        done: for (int i = 0; i < 3; ++i) {

            System.out.println(i + "  : In the outer loop.");

            for (int j = 0; j < 3; ++j) {

                System.out.println(i + "," + j + ": About to break in the inner loop.");

                break done;

            }

        }

        System.out.println("All looping done.");

    }

}
```


Those who have seen the terrible magic of a GOTO statement may be looking at this and thinking, uh-oh, spaghetti code here we come! Fortunately, the `break label;` command is not quite so unrestricted, you can only `break` to _enclosing_ blocks:


```
public class BreakingBad {

    public static void main(String[] args) {

        one: {

            //Trying to create and infinite loop

        }

        for (int i = 0; i < 10; ++i) {

            System.out.println("I'm getting outta here!");

            break one;

        }

    }

}
```



## Continuing On

The inverse of the `break` statement is the `continue` statement, which forces the immediate return to the _start_ of the block:

```
public class KeepGoing {

    public static void main(String[] args) {

        for (int i = 0; i < 4; ++i) {

            System.out.println(i);

            if (i < 2) continue;

            System.out.println("This code will be skipped for i < 2");

        }

    }

}

```

The `continue` statement also has a `continue label` version, just like `break`, except of course it continues at the _start_ of the block.

The `continue` statement is usually most effectively used as a filter of some kind, where the data you're dealing with may not be suitable for continued processing. In this example, we can simplify our prime finding code from before - we no longer need the additional `isPrime` variable, and the additional `if` statement.


```
import java.util.Scanner;

public class Primes {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a positive integer: ");

        int n = sc.nextInt();

        int count = 0;

        next : 

        for (int i = 2; i < n; ++i) {

            for (int j = 2; j < i; ++j) if (i % j == 0) continue next;

            count++;


```
## Manipulating Loop Control

Python also has some loop control keywords, which apply in both kinds of loops:

- `break`
    
- `continue`
    

`break` stops the loop immediately, and resumes at the next line of code after the loop.

```
# The following loop will only print up to 7

# even though the range goes from 0 to 9.

for i in range(10):

    if (i > 7):

        break

    print(i)
```


`continue` skips the rest of the current iteration of the loop, and resumes back at the start of the loop.

```
# The following loop just prints multiples

# of 3.

for i in range(31):

    if i % 3 != 0:

        continue

    print(i)

```

Again, as we've already seen these in Java, the basic idea is the same.


## Loop-Else !?

One unusual thing in Python's loops is the ability to add an `else` clause.

This clause executes when the loop condition fails, with the caveat that a break statement will skip it.


```
i = 0;

while i < 5:

    print(str(i) + ": still in the loop.")

    i += 1

else:

    print("Finished the loop.")

```

```
while True:

    print("This will get printed once.")

    break

else:

    print("This won't get printed.")

print("This will get printed after the loop finishes.")

```



## Some things Python does slightly differently to Java

Java has a very limited number of primitive types (essentially the smallest set they could get away with and still have C programmers not run away screaming), and everything else is presented through the Class and Object system (this will appear in the next module).

Python of course has a different goal - it wants to present a robust range of tools with relatively simple syntax, possibly at the cost of uniformity of presentation.

Like most things this is a trade-off, but it certainly helps with writing smaller programs where the overhead of the object-oriented approach used in Java is not worth the cost.

One aspect of this is that Python provides a wider range of built-in types with lightweight syntax for the programmer to employ. Here we'll introduce 3 very useful simple data structures that Python supports as a core part of the language. Java does have these (except the Tuple for some reason), but they're not included by default, and they're more complicated to use at the trade-off of being more structured than the Python variants.

These types are:

- Dictionaries, called `dict`s internally, which are similar to lists, but use a key value for access rather than a number.
    
- Sets (`set`), which work the same way as you'd expect a mathematical set to work.
    
- Tuple (`tuple`), which are _immutable_ lists (i.e. once you make one, it can't be changed).
    

If you dig into the internals, these are implemented as classes (again, see the next module), but Python provides special syntax so you don't see that part.

## Dictionaries

A dictionary (also called hash-map, associative array, hash-table, maybe other things, and in Python, a `dict`) is a key-value pair data structure. What this means is that it works like a list, but instead of accessing elements by a non-negative integer, each element is associated with a key, by which it is added, accessed and modified.

## Setting up a `dict`

`dict`s have the basic syntax `{ <key_1> : <value_1>, ..., <key_n> : <value_n> }` - surrounded by `{` and `}`, with the key and value separated by `:`, and each pair separated by a comma.

So creating a simple `dict`:


```
luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

print(luke_data)
```



So in the above example (don't forget you can mess around with it), the `dict` `luke_data` has an entry that has the key `job` and the value `Lecturer`.

You can also create an empty `dict` with the `dict()` function (which can do more than this, but we'll leave that for later).

```

empty = dict()

print(empty) # the dict itself

print(type(empty)) # its type - contrast this with sets on the next slide

```

## Accessing a `dict`

Once it's set up, you can access (and change) elements of a `dict` using the list-style square brackets (and the key, rather than a number):

```
luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

print("Luke's name is " + luke_data['name']) # Accessing the dict

luke_data['subject'] = '41052' # Changing the dict

print("Luke's subject is now " + luke_data['subject']) # Accessing the now different value

```

## Adding to a `dict`

If you want to add elements to the `dict`, you simple use the square brackets like you were modifying an existing value:



```
luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

luke_data['favourite tea'] = 'Earl Grey' # This adds a new value 'Earl Grey' with key 'favourite tea'

print(luke_data)
```



## Iterating over a `dict`

As it's a more complicated structure, iterating over a `dict` is slightly more complicated too, but the key is to remember that each entry has two parts:

```

luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

for k in luke_data: # this will give each key value in order

    print(k) # like this

print('-------------') # just to separate the examples

for v in luke_data:

    print(luke_data[v]) # this will print the values

print('-------------') # just to separate the examples

for v in luke_data.values(): # if you don't care about the keys

    print(v)
```


## Removing elements from a `dict`

Thanks to `dict`s predating objects and classes in Python, there's a special keyword for removing elements (it works for other things too) - `del`. If you wish to remove the element with key `k` from the dict `d`, you can write `del d[k]`

```
luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

del luke_data['subject'] # Removes an entry

print(luke_data) # Now there's only two left

```

## Common Errors in `dict`s

The main error raised by a `dict` is a `KeyError`, which occurs when there is an attempt to use a key that doesn't exist, one way or another.

```
luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

print(luke_data['nme']) # Typo, giving a KeyError

```

## Dictionaries

A dictionary (also called hash-map, associative array, hash-table, maybe other things, and in Python, a `dict`) is a key-value pair data structure. What this means is that it works like a list, but instead of accessing elements by a non-negative integer, each element is associated with a key, by which it is added, accessed and modified.

## Setting up a `dict`

`dict`s have the basic syntax `{ <key_1> : <value_1>, ..., <key_n> : <value_n> }` - surrounded by `{` and `}`, with the key and value separated by `:`, and each pair separated by a comma.

So creating a simple `dict`:


```
luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

print(luke_data)

```

So in the above example (don't forget you can mess around with it), the `dict` `luke_data` has an entry that has the key `job` and the value `Lecturer`.

You can also create an empty `dict` with the `dict()` function (which can do more than this, but we'll leave that for later).


```
empty = dict()

print(empty) # the dict itself

print(type(empty)) # its type - contrast this with sets on the next slide

```

## Accessing a `dict`

Once it's set up, you can access (and change) elements of a `dict` using the list-style square brackets (and the key, rather than a number):

```

luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

print("Luke's name is " + luke_data['name']) # Accessing the dict

luke_data['subject'] = '41052' # Changing the dict

print("Luke's subject is now " + luke_data['subject']) # Accessing the now different value
```


## Adding to a `dict`

If you want to add elements to the `dict`, you simple use the square brackets like you were modifying an existing value:

```

luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

luke_data['favourite tea'] = 'Earl Grey' # This adds a new value 'Earl Grey' with key 'favourite tea'

print(luke_data)

```

## Iterating over a `dict`

As it's a more complicated structure, iterating over a `dict` is slightly more complicated too, but the key is to remember that each entry has two parts:

```

luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

for k in luke_data: # this will give each key value in order

    print(k) # like this

print('-------------') # just to separate the examples

for v in luke_data:

    print(luke_data[v]) # this will print the values

print('-------------') # just to separate the examples

for v in luke_data.values(): # if you don't care about the keys

    print(v)
```


## Removing elements from a `dict`

Thanks to `dict`s predating objects and classes in Python, there's a special keyword for removing elements (it works for other things too) - `del`. If you wish to remove the element with key `k` from the dict `d`, you can write `del d[k]`
```
luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

del luke_data['subject'] # Removes an entry

print(luke_data) # Now there's only two left

```

## Common Errors in `dict`s

The main error raised by a `dict` is a `KeyError`, which occurs when there is an attempt to use a key that doesn't exist, one way or another.

```

luke_data = {'name' : 'Luke', 'job' : 'Lecturer', 'subject' : '41039'}

print(luke_data['nme']) # Typo, giving a KeyError

```


## Sets

You may be familiar with the mathematical idea of a set - an unordered collection with no duplicates. Python has a built-in data structure that replicates this mathematical structure (to some level of precision).

A `set` in Python is a structure that contains elements, with no duplicates, and no guaranteed order.

## Creating a `set`

Overlapping with a `dict`, a `set` in Python uses `{` and `}` to delimit a set and `,` to separate elements:
```
names = {"Russell", "Peano", "Zermelo", "Fraenkel", "Whitehead"}

print(names)
```


If we try to add the same element several times, it only keeps one:

```

no_repeats = {1, 1, 1, 1, 2}

print(no_repeats)
```


As with `dicts`, we can create an empty set using the `set()` function:

```
empty = set()

print(empty) # an empty set - looks like an empty dictionary

print(type(empty)) # but we can see the difference here

```

## Accessing a `set`

You may be wondering how we get elements out of set. In short, you can't really, not in the same way that a `list` or `dict` would allow - if you think about it a bit, that would kind of make a set into a `list`, and we already have one of those.

This doesn't mean we can't do anything with it though...

## What can we do with a `set`?

We can check membership with the `in` keyword (you may remember this from elsewhere):

```
primes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29}

n = int(input("Enter a number: "))

if n in primes: # True if n is in the set primes, False if it's not

    print(n, "is a prime.")

else:

    print(n, "is not a prime.")

```

Note that the preferred negation of `in` is `not in`, e.g. `n not in primes`.

We can also perform all the usual set operations, but with slightly confusing choice of symbols for the operators (they do make sense when you figure a few things out though):

- `<=` is the subset operator (when used with sets)
    
- `<` is the proper subset operator
    
- `>=` is the superset operator
    
- `>` is the proper superset operator
    
- `|` gives set union
    
- `&` gives set intersection
    
- `-` gives set difference
    
- `^` gives the symmetric difference
    

```
set1 = {1, 2, 3}

set2 = {1, 2}

set3 = {5, 6}

print("Is", set2, "a subset of", set1, ":", set2 <= set1)

print("Is", set2, "a proper subset of", set1, ":", set2 < set1)

print("Is", set1, "a proper subset of", set1, ":", set1 < set1)

print("Is", set1, "a superset of", set2, ":", set1 >= set2)

print("Is", set1, "a proper superset of", set2, ":", set1 > set2)

print("Is", set3, "a proper superset of", set3, ":",set3 > set3)

print(set1, "union", set3, "is", set1 | set3)

print(set1, "union", set2, "is", set1 | set2)

print(set1, "intersection", set2, "is", set1 & set2)

print(set1, "minus", set2, "is", set1 - set2)

print(set1, "symmetric minus", set3, "is", set1 ^ set3)
```


## Modifying a `set`

Of course we can still change the contents of a set, but as there's no key or index to access elements with, we can only use the `add` and `remove` functions on the `set`, and we have to know what element we want to add (easy) or remove (maybe less certain):

```
primes = {2, 3, 5, 7, 8} # oops 8 shouldn't be there...

print("Before:", primes)

primes.remove(8) # we can get rid of it

primes.add(9) # 9 is definitely a prime though, right?

print("After: ", primes)

```

## Iterating over a `set`:

We can still iterate over a `set` though, hopefully in exactly the way you would expect:

```
primes = {2, 3, 5, 7, 11, 13, 17, 19}

for p in primes:

    print(p)

```


## Tuples

Back in the `dict`s slide, we saw (briefly) a thing called a `tuple` - but what is that?

A `tuple` is effectively a `list`, but once you've made it, you can't change it. They are accessible by index using the square brackets, but you can't change elements, you can't add elements, you can't remove elements.

`tuple`s are particularly useful for bundling data together (and it's surprising how often you don't actually need to modify individual bits of data.

## Creating a `tuple`

`tuple`s are very easy to create - just give a sequence of things separated by commas:

```
t = 1, 'a', 5.4

print(t)

```

Note that it prints out with parentheses - you can use those too, and it looks a bit nicer:

```
t = (1, 'a', 5.4)

print(t)

```

You can create an empty `tuple` with the `tuple()` function or with empty parentheses `()`:


```
empty = tuple()

print(empty) # an empty tuple

empty2 = ()

print (empty2)
```


Now there's a weird edge case here that is not immediately obvious - how do you create a `tuple` with a single element? Just `(<element>)` right? Well no, that's just something in parentheses! You need a comma as well:


```
not_a_tuple = (1)

print(not_a_tuple)

print(type(not_a_tuple)) # it's just a number!

singleton = (1,)

print(singleton) # Yay edge cases

print(type(singleton))

```

## Accessing elements of `tuple`s

If you want to get a particular element of a `tuple`, it works just like a list - square brackets and the index:

```
primes = (2, 3, 5, 7, 11)

print("The first prime is", primes[0])

for i in range(len(primes)):

    print(primes[i])

```

## Iterating over `tuple`s

By now, this should be familiar, for iteration, `tuple`s work like all other iterable things in Python:

```

primes = (2, 3, 5, 7, 11)

for p in primes:

    print(p)
```



## Where to find more...

Of course there is more to these data structures, and if you end up using them more seriously, it's work going over the documentation, either the [quick version](https://docs.python.org/3/tutorial/datastructures.html), or the [detailed one](https://docs.python.org/3/library/stdtypes.html).


## Why doesn't Java let me do that??

We've now seen `list`s, `set`s and `tuple`s in Python, all ways of bundling data together. Thanks to Python's dynamic type system, we can readily bundle things of _different_ types together:

```
10

count = int(input("How many people are there? "))

people = []

for i in range(count):

    name = input("Enter a name: ")

    num = int(input("Enter their favourite number: "))

    people.append((name, num))
```
print("These are all the people and their favourite numbers: " + str(people))



Each pair in that code has a `str` and and `int`, and we can store them in a `tuple` no problem.

How do we do that in Java? In Python we could achieve roughly the same result in many ways, but none of them seem to work in Java:

- Java arrays only allow one type - so they can't store `String`s and `int`s together.
    
- Java doesn't have a `tuple` structure.
    
- We haven't seen `List`s in Java yet, but they suffer from the same type restrictions as arrays anyway.
    

We can try redoing the Python code from above, but we get stuck:


```
import java.util.Scanner;

public class Favourites {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("How many people?");

        int n = sc.nextInt();

        sc.nextLine(); //You should know why this is here now.

        ???[] people = ???[]; //What's the type here?

        for (int i = 0; i < n; i++) {

            System.out.print("Enter a name: ");

            String name = sc.nextLine();

            System.out.print("Enter their favourite number: ");

```

So what can we do?
## The right solution without anything new

If we only want to use what we have already, then we have to manually handle things by replicating structures and being careful how we use them:

```
Run

JAVA

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15
```

import java.util.Scanner;

public class Favourites {
```
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("How many people? ");

        int n = sc.nextInt();

        sc.nextLine(); //You should know why this is here now.

        //What we can do is keep the data in separate structures in parallel.

        String[] names = new String[n];

        int[] numbers = new int[n];

        for (int i = 0; i < n; i++) {

            System.out.print("Enter a name: ");
```


So it's still perfectly feasible to achieve the same result, just a bit more cumbersome.


## Surely there's something better

Of course Java isn't actually that primitive, it's just that we haven't gotten far enough into the language to solve this problem the _proper_ way in Java (for reference, [here's the proper way](https://edstem.org/au/courses/13571/lessons/40370/slides/280288)).

As mentioned, Java is an _Object Oriented_ language first and foremost, and the answer to almost every problem is building the correct OO structures to handle it. The other component is that Java has a limited base set of components, so often you have to build it yourself.

## Warning!

Now what we're about to see is the first step to OO programming, but we still don't have all the tools to do it properly, so this is _bad_ from an OO perspective.

## How it is Handled in Other Statically Typed Languages

Java has a cultural history deriving from C and C++, so what was their answer to this problem? In both those languages, there is a concept called a `struct`, which is literally just a way of bundling data of different types together, often called "plain old data".


```
#include <iostream>

#include <string>

#include <vector>

//This is the thing we're interested in

struct data {

    std::string name;

    int num;

};

int main() {

    std::cout << "How many people? ";

    int n = 0;

    std::cin >> n;
```


So apart from looking C++ like, that code is basically the same as the Java code, except at the top we have a `struct` which allows us to put everything in pairs in the one `vector` (like an array, but arrays in C++ aren't fun).


## Basic Classes in Java

The way to replicate this in Java is by creating a `class`.

What we will see here is just the very very basics. There are better ways of handling this that we will see in a couple of weeks.

## Using Classes JUST to Carry Data

We can replicate the C++ `struct` as follows:


```
class Data {

    public String name;

    public int num;

}
```


It looks quite similar and we can make variables (and data) of type `Data`, with some key structural elements:

- It is declared with the keyword `class`, not `struct`.
    
- Each data member (variable) is marked `public`.
    
- We have to create them using the `new` keyword (like `Scanner`).
    
- Each element is accessed from the class using the dot operator `.`
    

Now you may want to compare this to the classes we've been working with so far. Notice that this one is not marked public. It can be, but then it would have to be in its own file (this may be desirable). If it's _not_ marked public, we can sneak it into a file with another class, but using it elsewhere can be trickier.

You will also notice that there are no methods. No `main`, and we haven't seen anything else yet anyway.

We also haven't yet see variables declared at the `class` level, outside the `main`, however you will get very familiar with this, but you normally wouldn't make them `public`, that's the ugly thing we're doing to get a quick solution.

Now we can get a version of the previous code working:

```
import java.util.Scanner;

public class Favourites {

    //We can declare it inside another class, as long as it's not public.

    //This limits the damage it can do.

    //In this particular case, it also needs to be static, so that it

    //can be used in the main method, which is also static.

    static class Data {

        public String name;

        public int num;

    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

```






