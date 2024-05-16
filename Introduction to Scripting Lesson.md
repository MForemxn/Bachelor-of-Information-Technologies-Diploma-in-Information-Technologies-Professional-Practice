## Bash Scripting

## Introduction

Bash Scripting is when you put a sequence of Bash commands into a single file, make the file executable, and run it - possibly with a number of arguments. A very simple script would be the following file called **hello.sh**:

```
#!/bin/bash

# We'll just say hello to the first argument

echo Hello $1!!
```


Once you have changed permissions making the file executable, calling:

```
./hello.sh Bill
```

results in the output:

```
Hello Bill!!
```

The main points to note are:

1. The file becomes a **program** by [setting its permissions](https://edstem.org/au/courses/15505/lessons/49672/slides/335733) to executable.
    
2. The `**#! "sha-bang!"**` at the beginning tells Bash which interpreter to run the commands in - in this case it is Bash
    
3. The **`#`** elsewhere in the file indicates that the rest of the line is a comment to be ignored by the Bash interpreter.
    
4. On the command-line where the script is invoked, the strings following the filename of the script are its **arguments**, and **`$n`** refers to the nth argument.
    

## Variables

A Bash script can be just a sequence of commands, but it can also be an algorithm where variables are assigned and used later in the code. Note that when accessing the value of a variable, it must be preceded with **`$`**. For example:

```
a="Hello World"

echo $a
```

In most, if not all programming languages, such as Java, Python and C++, an assignment of a value to a variable using an equal sign looks like this:

```
number = 54
```

Note the space between the x and the equal sign and the equal sign and the 54. Bash is much more particular in this regard. **You cannot have spaces to the left or the right of the equal sign.**

In other words, you need to use this syntax:

```
number=54
```

Another peculiarity of bash variable names is that the name must be preceded by a $ symbol when used on the right hand side of an assignment, but not when used on the left hand side of an assignment. Variables inside an echo statement must also be preceded by a $ symbol. The code fragment below illustrates all of these principles.

```

#!/bin/bash

number1=25

echo "number 1 = $number1"

number2=$number1

number1=54

echo "number1 = $number1 number2 = $number2"
```


## Arithmetic

The Bash programming language has been in existence since 1989. Since its inception, some of its features have been deprecated. That is they may still work, but have been replaced by more up to date and/or efficient techniques. Deprecated features eventually disappear so they should not be used. So far as this course is concerned we will only be dealing with integer arithmetic in the bash shell. Integer addition, subtraction, division (rounded down to nearest integer), multiplication and modulus (remainder) are supported.

The syntax for these operations is $(( $a operation $b )) where $a and $b are two bash numeric variables. This is the recommended syntax for bash version 5.1 and above. The code below shows how these numeric operations are performed.


```
#!/bin/bash

a=25

b=10

echo "a is equal to $a"

echo "b is equal to $b"

echo "====================="

# Bash integer operations

add_result=$(($a + $b))

sub_result=$(($a - $b))

div_result=$(($a / $b))

mult_result=$(($a * $b))

mod_result=$(($a % $b))
```

## Logic - if statements and comparisons

For bash version 5.1and above, the recommended syntax for if statements is as shown in the code fragments below. Important: The syntax for the comparison of strings and integers are different. The comparison operations for strings are:

- String a less than string b $a < $b
    
- String a less than or equal string b $a <= $b
    
- String a equal to string b $a == $b
    
- String a greater than string b $a > $b
    
- String a greater than or equal string b $a <= $b
    

For numeric variables, the syntax is:

- Number a less than number b $a -lt $b
    
- Number a less than or equal number b $a -le $b
    
- Number a equal to number b $a -eq $b
    
- Number a greater than number b $a -gt $b
    
- Number a greater than or equal to number b $a -ge $b
    

Note also that the recommended syntax for comparison uses opening and closing square brackets and that the spaces between if, [[, the variables, the comparison operator and the closing ]] are important. If they are left out your code will not work. The ; and then are also important and need to be included. Finally the code block must be concluded with fi.


```
#!/bin/bash

P1="Alan Ballard"

P2="Bob Quimby"

echo "P1 = $P1"

echo "P2 = $P2"

echo "================="

if [[ $P1 > $P2 ]]; then

   echo "$P1 is greater than $P2"

elif [[ $P1 < $P2 ]]; then

    echo "$P1 is less than $P2"

else

    echo "$P1 is equal to $P2"
```

The code below shows how numbers are compared in bash.
```
#!/bin/bash

N1=43

N2=102

echo "N1 is equal to $N1"

echo "N2 is equal to $N2"

echo "================="

if [[ $N1 -gt $N2 ]]; then

   echo "$N1 is greater than $N2"

elif [[ $N1 -lt $N2 ]]; then

    echo "$N1 is less than $N2"

else

    echo "$N1 is equal to $N2"
```


## Bash Script Arguments

When processing a Bash script, there are arguments which are generated from the command which executes it:

- **`$1, $2, $3`** etc - First, second, third... arguments after the script name;
    
- **`$*`** - a string consisting of all the arguments to the script;
    
- **`$#`** - the number of arguments to the script.
    

Copy the code fragment below and put it into a script called args.sh Set its permissions to owner can read, write and execute, group can read and rest of world can read. Then run the program as

```
./args.sh amazon google apple
```

```
#!/bin/bash

echo "Number of arguments is $#"

echo "The argumnets are $*"

echo "The first Argument is $1"

echo "The second Argument is $2"

echo "The third Argument is $3"
```


## References

For further information on writing Bash scripts see:

1. A well maintained and up to date Introduction to Bash is at [https://mywiki.wooledge.org/BashGuide](https://mywiki.wooledge.org/BashGuide) There is also a Bash FAQ on the same site.
    
2. [Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/index.html), Mendel Cooper, Advanced Bash-Scripting Guide ( 2014). Particularly helpful is this chapter: [Starting off with a Sha-Bang](http://tldp.org/LDP/abs/html/sha-bang.html)


## Redirecting StdErr/StdOut

When you execute a Bash command, the output you see on the screen is of two types, the standard error "STDERR" and the standard output "STDOUT". One type of redirection is to store these outputs in a file. In this page we show how STDERR and STDOUT can be sent between each other.

## Summary

`command 2>&1` - sends the STDERR to STDOUT

`command 1>&2` - sends the STDOUT to STDERR

## Example: Sending STDOUT to STDERR

If you have written a script which requires exactly 2 arguments, you may wish to send a message to the standard error if the number of arguments is incorrect:
```

#!/bin/bash

if [ $# != 2 ]

then

    echo Incorrect Number of arguments 1>&2

    exit

fi
```


## References

1. [Advanced redirection features](http://www.tldp.org/LDP/intro-linux/html/sect_05_02.html#sect_05_02_01), Introduction to Linux - A Hands on Guide, Machtelt Garrels, Edition 1.25 (last edited: 11 May 2007).

