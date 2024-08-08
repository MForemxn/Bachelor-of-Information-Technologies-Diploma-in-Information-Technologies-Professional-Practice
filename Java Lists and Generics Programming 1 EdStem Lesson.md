## Arrays are great, but...

So far we've worked with arrays a reasonable amount. It's very useful to be able to collect a group of similar things together and deal with them as one unit. Arrays however have a couple of limitations: what if you need more space and what if you want to put something in the middle of existing [[data]]?

It would be nice to have something that could expand when needed, but still worked basically like an array: enter the `ArrayList`!
## ArrayLists

`ArrayList` is a class in the `java.util` package that implements the idea of an expandable array.

Internally it stores and array, and makes careful judgements about how big that array is, when it needs to get bigger and takes care of moving [[data]] around when things change.

Externally, we can treat it like something very similar to an array. We don't get to use the `[]`array index brackets (Java doesn't allow operator overloading), but we do have a series of useful methods:

- `add(E element)` adds `element` to the end of the list, wherever that is. `E` is the type of the element - we'll get to that in a slide or two.
    
- `add(int index, E element)` adds `element` at position `index`. If this is before the current end of the list, it shifts everything over so you don't overwrite anything.
    
- `contains(Object o)`returns `true` if `o` is in the list. As every class inherits from `Object`, this works for any object (yes, this gets confusing when we starting using `Object` as the name of a class as well as for objects, just pay attention to the capitalisation and the font [and context]).
    
- `get(int index)` returns the element at index `index`.
    
- `indexOf(Object o)` returns the index (as an `int`) of `o` if it's in the list, `-1` if it's not in there at all.
    
- `remove(int index)` removes the element at index `index`and returns it, shifting things over to fill the gap if necessary.
    
- `remove(Object o)` removes the first occurrence of `o` from the list, shifting things over to fill the gap if necessary. It returns `true` if the operation actually did something - i.e. if it found `o`.
    
- `set(int index, E element)`replaces the element at `index` by `element` (no shifting).
    
- `size()` returns the number of elements in the list.
    

The full description of the public interface of `ArrayList` can be found in the [documentation](https://docs.oracle.com/javase/9/docs/api/index.html?java/util/ArrayList.html).

## What is E???

`ArrayList<E>` (which is the proper, full type name for the class) is the first time we've seen what's called (in Java) a _generic_ class. We will talk a bit more about what generics are in a couple of lessons, but for the moment the important aspect for using `ArrayList<E>` is that when creating one, you replace the `E` with the type of the [[data]] that you want the `ArrayList` to store. `E` is called a _type parameter_, and it's like providing [[data]] to a method, except you are providing type [[data]] to the class.

Thus creating an `ArrayList` requires you to know what type of [[data]] will be stored in it (just like arrays) and that's the only type of [[data]] that can be stored in it (also just like arrays).

If we pick `String` as the example type for what we want to store, the basic declaration/initialisation looks like

ArrayList<String> list = new ArrayList<String>();

So not a lot different to the object creation you have already seen, we've only added that type parameter (and of course `String` can be replaced by any class name).

One caveat to this is that type parameters (in Java) can only be replaced by class names/types. This means you can't use primitive types, however Java provides class counterparts for each primitive type that gets automatically converted into a primitive when used. These are called _wrapper classes_ (because they "wrap" the [[data]] in a class). The names for these are usually the same as the primitive type, but with a capital letter. The only exceptions are `int` which has `Integer` as its wrapper class, and `char` which has `Character`.

The full list is:

- `byte` has `Byte`
    
- `short` has `Short`
    
- `int` has `Integer`
    
- `long` has `Long`
    
- `float` has `Float`
    
- `double` has `Double`
    
- `char` has `Character`
    
- `boolean` has `Boolean`

## Actually using ArrayLists

We now have more than enough information to start using them. We'll begin with the usual boring example of putting the numbers 1 to 10 into a list, then printing it out again:


```
import java.util.ArrayList; //The import needed for ArrayList

public class ArrayListDemo {

    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<Integer>(); //Declaration and initialisation

        for (int i = 1; i <= 10; ++i) {

            list.add(i); //Adding things to the end of the list

        }

        for (int i : list) { //Iterating over the list

            System.out.println(i);

        }
```


Notice in particular the lines with comments:

- Line 1: we need to import `ArrayList` from the `java.util` package (similar to `Scanner`).
    
- Line 6: `ArrayLists` are objects, so we declare and initialise them like objects (with `new`). Notice that in this example the `E` has been replaced by `Integer`. We have created an `ArrayList` that stores `Integers` (the object stand in for `ints`). Notice that unlike arrays, we don't mention anything about a size - the class handles that for us, and resizes when needed.
    
- Line 9: here we add things to `list` using the basic `add` method. This puts things at the end of the `ArrayList`. As noted before, there are many methods for working with array lists.
    
- Line 12: `ArrayList` is a [[data]] structure that we can use the for-each style loop with (more formally, it implements the `Iterable` interface, but more on that soon).
    

Lets now look at the "Smallest Swap" exercise from Lab 4, but completed with an `ArrayList`

```

import java.util.Scanner;

import java.util.ArrayList;

public class SmallestSwap {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        ArrayList<Integer> a = new ArrayList<Integer>();

        int minPos = 0;

        for (int i = 0; i < n; ++i) {

            a.add(sc.nextInt());

            if (a.get(i) < a.get(minPos)) minPos = i;

```

The basics are the same as with arrays, we just use `get`, `set` and `add` to access the `ArrayList` instead of `[]`. Notice also that although `a` is storing `Integers`, they automatically get converted back and forth to `ints` when we need them to (e.g. in the comparison on line 15, the `temp` variable on line 18, anywhere we put an `int` into the list). This is called automatic boxing and unboxing (and Java didn't used to do it, and it was a real pain).

Now let's look at something that is easy with `ArrayLists`, but much harder with arrays - removing and inserting elements in the middle of the list:

```
import java.util.ArrayList;

public class RemovalFromArrayList {

    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<String>();

        list.add("One");

        list.add("Two");

        list.add("Three");

        list.add("Four");

        System.out.println("Before removal: " + list);

        list.remove(1);
```


Notice that at each step the list automatically resizes and moves the elements down (also notice how much easier it is to print out an `ArrayList` - yay objects!). You may want to think about how you would achieve this with an array...

## Some pros and cons of ArrayLists

We have only just introduced `ArrayLists`, and there's many methods and associated class and properties that we haven't looked at (nor are ready to), but we can give a couple of the pros and cons.

**Pros**

- Automatic resizing (and it doesn't just grow or reduce things by one at a time, it's a bit smarter).
    
- Internally actually uses an array (well, a series of them), so it's essentially as fast for access and iteration (i.e. `get` and `set` work fast, which means the for-each does too, plus `add` normally works just as fast as an array, barring the occasional resize).
    
- The type parameter maintains type safety (compared to the old way of doing this, which probably none of you know about, but trust me, this is better).
    

**Cons**

- Uses an array internally, so inserting things in the middle can be a bit slow (you'll only notice if you have really big lists, or do it a lot, or both).
    
- Can't think of another one right now that will make sense to most of the class.
## What if we need add and remove lots of things?

So an `ArrayList` fixes the problem of resizing arrays dynamically, while retaining the speed of arrays. This is achieved by using arrays internally, with the class providing the management code that means the programmer doesn't have to care about whether the array is full, where to put things and how to resize things.

Of course this means that it still shares some of the restrictions of arrays, in particular, inserting new elements anywhere other than the end requires moving elements along to make space. In the situation where we want to modify our list-like structure quite a lot, this can slow things down.

Given that there is a whole lesson about this, clearly there is an alternative. Enter the `LinkedList<E>`!

[Linked lists](https://en.wikipedia.org/wiki/Linked_list) are a fundamental [[data]] structure that predate OOP (though the ideas mesh well with it). They are lists constructed out of independent components normally called _nodes_. Each node stores a single element, and some sort of link to the next node. The list itself stores a link to the first node.

This means that added and removing elements is easy, once you've found the spot you want them to go in. Finding the spot may be slow though.
## Java's LinkedList<E>

Internally, the `LinkedList<E>` class in the `java.util` package implements a (much) more complicated version of the linked list just described, however, thanks to Java employing OO principles, what we see as users of the class is just the external `public` methods, which, because it's just a list and we "don't care" how it achieves that, look a lot like `ArrayList<E>`:

- `add(E element)` adds `element` to the end of the list.
    
- `add(int index, E element)` inserts `element` at position `index`, putting it in between things if necessary.
    
- `contains(Object o)` returns `true` if the list contains `o`.
    
- `get(int index)`returns the element at index `index`.
    
- `indexOf(Object o)` returns the index of `o` if it is in the list, `-1`if it is not.
    
- `remove(int index)`removes the element at position `index`. This alters the indices of everything after it, but it doesn't have to move things the way an `ArrayList` does.
    
- `remove(Object o)` removes the first instance of `o`, if it finds it. The method returns `true` if the list was changed by this method.
    
- `set(int index, E element)` replaces the data at `index` with `element`.
    
- `size()` returns the number of elements in the list.
    

If we look at the [documentation](https://docs.oracle.com/javase/9/docs/api/java/util/LinkedList.html) for `LinkedList`, however, we see that it has quite a lot of methods - `LinkedList` can be used as more than just a list! Notice that you never see a `Node<E>` - that's hidden from the external user, because access to the internals is not necessary.

## Using LinkedList<E>

As the external interface is, for our purposes at the moment, the same as `ArrayList<E>`, we can solve the same problems the same way, just swapping out `ArrayList<...>` for `LinkedList<...>`:
```

import java.util.LinkedList; //The import needed for LinkedList

public class ArrayListDemo {

    public static void main(String[] args) {

        //Declaration and initialisation

        //This is the only line that changes

        LinkedList<Integer> list = new LinkedList<Integer>();

        for (int i = 1; i <= 10; ++i) {

            list.add(i); //Same as ArrayList

        }

        for (int i : list) { //Same as ArrayList

            System.out.println(i);
```


So the only change we need to make is import something different, and declare the and initialise the variable differently. Although this code doesn't demonstrate too much, it's easy to see that given some large project, it's very easy to switch between the two types of lists if the needs of the program change.

Similarly, the code to solve the Smallest Swap exercise is almost identical, just the same two differences:
```
import java.util.Scanner;

import java.util.LinkedList; //Difference #1

public class SmallestSwap {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        LinkedList<Integer> a = new LinkedList<Integer>(); //Difference #2

        int minPos = 0;

        for (int i = 0; i < n; ++i) {

            a.add(sc.nextInt());

            if (a.get(i) < a.get(minPos)) minPos = i;
```


Now let's look at something where we will see a difference - a speed test!

```

import java.util.LinkedList;

import java.util.ArrayList;

import java.util.Random;

public class SpeedTest {

    public static void main(String[] args) {

        LinkedList<Boolean> linkedList = new LinkedList<Boolean>();

        ArrayList<Boolean> arrayList = new ArrayList<Boolean>();

        Random random = new Random(System.currentTimeMillis());

        int n = 100000;

        //First we'll put some stuff in both arrays

        for (int i = 1; i <= n;  ++i) {

            linkedList.add(i % 2 == 0);
```


So we can see the `ArrayList` is noticably slower when we need to remove things (at least in this test - you may want to consider what inspired this test), but the `LinkedList` is a looooot slower on random access.

So each has advantages and disadvantages, but if because of the application of the principles of Abstraction and Encapsulation, it's very easy to swap one for the other if a design choice proves to be incorrect.

## When Types Aren't Important

We've seen generics briefly in the `ArrayList` and `LinkedList` lessons, but it's worth taking a moment to consider the motivation and hence usage of generics.

Generics are the Java name for classes or methods that take type parameters. These are a bit like parameters to a method, except they only carry type information, not values the way variables do.

The motivation for this is that we would like our classes and methods to be type-safe (be able to detect when the wrong sort of information is passed to them), but often the functionality of the method or class does not depend on the actual details of the type passed to them.

Taking the example that we have already seen, the `ArrayList<E>` class doesn't need to know anything about the structure of the [[data]] it stores, but we do need to be able to check that it all has the same type. So at run-time we need to be able to give `E` a value, and use it to check things, but we don't need to know what it is to write the code to add something to the list.

This parameterisation by types is called type polymorphism and is one expression of the principle of abstraction - we're abstracting away the internal details of the type, and thus allowing our generic class or method to not have to be redefined every time we want to make it work with a new type.

## A Motivating Example

Say we want to make a `Box` to store things in. A `Box` doesn't need to know anything about what's stored in it, but Java is a strongly statically typed language, so we need to assign the contents a type.

There are two ways of doing this.

The first is to create a new `Box` for each type:
```

public class StringBox {

    private String data;

    public StringBox() {

        data = null;

    }

    public String getData() {

        return this.data;

    }

    public void setData(String data) {

        this.data = data;

    }
```



If we only ever want to `Box` `Strings`, then we're happy. If we need to `Box` something else, we have to go and copy all this code to another class, and if we want a `Box` for every possible class we might use, we're probably going to have a bad time.

The other approach is to make the `Box` as general as possible. Thanks to Java's class hiera```
rchy, this is easy (and before generics were added, it was the only sensible way):

public class Box {

    private Object data;

    public Box() {

        this.data = null;

    }

    public Object getData() {

        return this.data;

    }

    public void setData(Object data) {

        this.data = data;

    }
```


This `Box` can handle anything, but we lose type information, so we have to manually cast things back to their correct type when we retrieve them from the `Box` (which means we have to remember or figure out the type, and is consequently more error prone than getting the right thing back to begin with).

## A Better Box

The solution to this is to add a type parameter to `Box`. This will allow `Box` to handle any type of data, but will guarantee that the type is what you expect.

```

public class Box<T> {

    private T data;

    public Box() {

        this.data = null;

    }

    public T getData() {

        return this.data;

    }

    public void setData(T data) {

        this.data = data;

    }

```

Now if we create a `Box`, we are obliged to tell it what the type of the thing it's going to store is, and the compiler will only allow that type of thing to put into it, and will make sure that's the type of stuff that comes out of it.

## The Syntax of Generics and Type Parameters

Specifying a type parameter is pretty simple. For a class, you just append `<[name]>` to the class name, where you replace `[name]` with whatever you want the type parameter to be called inside that class (usually beginning with an uppercase letter, because it will be substituted by a class or interface name when used).

There is also no limit on the number of type parameters, instead of a single name, you simply provide a comma separated list of names:

public class TwinBox<Type1, Type2> {...}

If you want a method to have a type parameter (that's not provided by the containing class), the type parameter list goes before the return type:

public <T> ArrayList<T> listify(T[] arrayOfTs) { ... }

## Using Generics and Type Parameters

When using a generic class we simply replace the type parameter with the type value we want to use in that case:

ArrayList<String> listOfStrings = new ArrayList<String>();

For most generic methods, the type can be inferred, so you don't need to specify:

public <Type> ArrayList<Type> listify(Type[] arrayOfType) { ... } ... //Somewhere else ArrayList<String> listOfStrings = listify(stringArray);

But we won't be making methods with their own type parameters in this subject, so we'll leave that there.

The major restriction on type parameters is the cannot be instantiated with primitives (as seen in the `ArrayList` lesson). So the following is bad:

ArrayList<char> list = ...

Each primitive type has a wrapper class associated with it. This list is given in the `ArrayList` lesson, so I won't repeat it here.

## How Do Generics Work in Java?

This part is beyond what we'll need to know for the subject, so this is just for interest and edification.

Generics are implemented in Java (mostly because they were added to the language relatively late) by _type erasure_. This means that all the type checking is done at compile time (which is fine, as Java is strongly statically typed - all the type information must be known at compile time for the compilation to work), so the type safety is guaranteed, but the compiled code just replaces the parameterised version of the class with the raw, unparameterised version that uses `Object` wherever there was a type parameter.

So our `Box<T>` compiles down to a `Box`. This means that the type information is not (readily) available at run time. This causes some problems, such as never being able to create new instances of a generic parameter type:

T newT = new T(); //This is disallowed T[] arrayOfTs = new T[5]; //So is this

A couple of other side effects of this approach is that `static` variables and methods can't have a generic type, and you can't make generic exception classes.

A positive side effect is that Java only needs to compile one version of the code, which is then used at run time, in contrast to the C++ approach, which recompiles the code for every choice of instantiation of the type parameters (and plays merry hell with header file/code file separations). Functional languages generally handle this type of polymorphism more naturally.

