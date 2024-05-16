## Data Analysis

This hint page gives an overview of the activities which will be useful in data analysis. The examples are based around the data on the popularity of female names to be found in the file:

```
/course/linuxgym/census/femalenames.txt
```

which is presented in four columns containing NAME, FREQUENCY, CUMULATIVE FREQUENCY, and RANK, where RANK=1 is the most popular name. The file is ordered by RANK.

## 1. Massaging the data to make it cut'table

Although the file is human readable, the blank spaces make it very difficult to extract a single field from the data using the cut command. Therefore a good first step toward solving this problem would be to change the white space between the fields into commas, so that a line of the form MARY 2.629 2.629 1

becomes

```
MARY,2.629,2.629,1
```

One can then print only field two using cut (see _Data extraction - cut_ in this Lesson) and delimiter ",".

As with all of the activities, there are many ways to do them, but we suggest using Vim and [substitution with regular expressions](https://edstem.org/au/courses/15505/lessons/49671/slides/335724).

## 2. Searching with Backquote and Grep

The command which you'll probably use in order to locate the line for a particular name is _grep_ (see the reading page on grep in this Lesson). Once you've found that line, you'll need record its popularity before you can search for names with the same popularity.

Rather than storing it in a file, it would be quicker and easier to store it in a variable - using _backquotes_ (see the reading page in the Lesson). A high-level description of the command required to calculate the popularity of a name is:

popularity=`grep **name namefile** | cut field 2 `

## 3. Sorting the result

Once the popularity is established, it is simply a matter of grepping the lines where field 2 matches the popularity, and _sorting_ (see reading page in this Lesson) the list of elements in field 1.

## References

1. [Text Processing Commands](http://tldp.org/LDP/abs/html/textproc.html), Mendel Cooper, Advanced Bash-Scripting Guide (last modified: 29 April 2007)
    
2. [Name File](http://www.census.gov/genealogy/names/names_files.html), Population Division, U.S. Census Bureau (last modified: 17 March 2005).

## Inline Command Execution

When you're writing a Bash script, you will often want to store the standard output of other Bash commands in a variable. The way to do this is using inline command execution.  

A very simple example is the following script which takes a single argument - the name of a file - stores the number of lines in the file in a variable, and prints out a sentence containing the number. Copy the script below into a text file you've made executable to run it.


```
#!/bin/bash

a=`cat $1 | wc -l`

echo "The file $1 contains $a lines."
```

Try running the script, entering some text and then using the command CTRL-D

**Note: On most keyboards, the backquote is the key at the top left, above the TAB. Do not confuse the backquote (`) with the normal quote (').**

For most modern shell interpreters an alternative syntax for performing command execution is available, using **$([expression])**. You may have noticed that the backquotes can easily be mistaken for single quotes at a quick glance (i.e. **' '**).

The script below performs exactly the way that the script above does.


```
#!/bin/bash

a=$(cat $1 | wc -l)

echo "The file $1 contains $a lines."
```


Because of how ubiquitous and how old bash scripts in the wild can be, it is important that you recognize that both of these ways are valid expressions to the bash interpreter, but the latter of which is far easier to recognise.

It is also important to make sure not to confuse the arithmetic operations (double parentheses) with command executions (single parenthesis):

```

#!/bin/bash

number_add=$((1 + 17))      # Add 1 and 17 and assign the result to left-hand side

hello=$(echo hello)         # Execute echo hello and assign the result to RHS

echo $number_add    # Prints 18

echo $hello         # Prints hello
```


## Sorting data

The default output of the command `sort` is the lines of its input in alphabetical order.  

For example, suppose the file `cars.txt` contains the following lines of text:

```
Honda BMW Toyota
```

Then the output of `cat cars.txt | sort` is

```
BMW Honda Toyota
```

## References

The discussion above is to some extent an over simplification. For further detail, see man sort and

1. [Unix sort command](http://www.softpanorama.org/Tools/sort.shtml), Softpanorama: (slightly skeptical) Open Source Software Educational Society, (Created May 16, 2006. Last modified: February 14, 2007).

## Data extraction - cut

Cut is a very useful way of extracting fields from a table of data. For example, suppose the file cars.txt contains the following lines of text:  

```
Honda, $18000 BMW, $22000 Toyota, $12000
```

and you require only a list of the brand names. Then this can be achieved by writing

```
cat cars.txt | cut -f1 -d,
```

where **-f1** indicates that field 1 is to be printed, and **-d,** indicates that the comma is the delimiter which separates the fields.

For further information, type

```
man cut
```


## Pattern matching with grep

grep is a command used for locating data which matches the pattern provided. The input is processed line by line, and any line matching the pattern is outputted in full.

# 1. Locating lines in a file

Suppose the file cars.txt contains the following lines of text:

Honda, $18000  
BMW, $22000  
Toyota, $12000

Then calling:

```
grep BMW cars.txt
```

outputs the one line containing BMW:

BMW, $22000

Whereas, calling;

```
grep a cars.txt
```

outputs the two lines containing "a":

Honda, $18000  
Toyota, $12000

# 2. Regular expressions

Rather than matching only what you can type, meta-characters can also match properties of a string.

- **`^`**, **`$`** - carat and the dollar sign match the beginning and end of a line, respectively;
    
- **`\<`**, **`\>`** - the beginning and end of a word;
    
- **`.`** - full-stop matches any character.
    
- **`string1\|string2`** - matches either the text string1 **or** the text string2
    
- **`[abc]`** - matches any character that is one of "a" or "b" or "c"
    
- **`[^abc]`** - matches any character that is NOT one of "a" or "b" or "c"
    
- **`[a-z]`**, **`[A-Z]`**, **`[0-9]`** - matches a lowercase character, an uppercase character, a digit, respectively
    
- **`*`**, **`\+`** - * matches zero or more of the previous thing. \+ matches 1 or more of the previous thing.
    

You may recognise some of these regular expressions like **`\<`** and **`\>`** from the [Vim lesson](https://edstem.org/au/courses/13597/lessons/40546/slides/280997) on regular expressions. In fact all of the regular expressions above can be used in both Vim and grep.

When using these expressions in grep, you need to enclose your pattern in quotes to prevent bash from interpreting those symbols.

For example, calling:

```
grep 'Honda\|BMW' cars.txt
```

outputs lines containing either Honda or BMW:

Honda, $18000  
BMW, $22000

Calling:

```
grep '[aeiou].*[aeiou].*[aeiou]' cars.txt
```

outputs lines containing at least 3 vowels:

Toyota, $12000

Calling:

```
grep '^[A-Z][a-z]\+' cars.txt
```

outputs lines that have an uppercase letter at the beginning of the line, followed by one or more lowercase letters:

Honda, $18000  
Toyota, $12000

# 3. Options

Grep has many useful options which you'll find in its manual page, just a few of which we highlight below.

## 3.1 **--color** option

You can see the exact characters being matched using the **--color** option (note the double hyphen, --, and the US spelling.

## 3.2 Listing files containing a particular string: -l

In a directory containing a large number of files the names of files which contain strings matching a particular pattern can be listed using this will show all **non hidden files** in a directory:

```
grep -l **PATTERN** *
```

This can also be performed in a **whole** directory tree **including hidden files** using the **-r** (recursive) option:

```
grep -lr **PATTERN** *
```

Note, in ether or these you can specify a give directory using a path:

```
grep -l **PATTERN** /some_path/*
```

## 3.3 Matching words rather than strings: -w

Using the word option:

```
grep -w brand *
```

will match a line such as

Look at my brand new computer.

but will not match

Livestock branding is the marking of animals to indicate ownership.


```
echo Look at my brand new computer. | grep -w brand
```

```
echo Livestock branding is the marking of animals to indicate ownership. | grep -w brand 
```


# 4. Return values

Grep returns 0 if a match was found, and 1 if there was no match found. To see these return values, after performing a grep command, call:

```
echo $?
```

```
echo test | grep test

echo $? #found

echo error | grep test

echo $? #wasn't found
```


## References

For further information on grep and its use with regular expressions the best resource is the grep manual page, followed by:

1. [Linux / Unix grep command](http://www.computerhope.com/unix/ugrep.htm), Computer Hope (last accessed: 24 May 2007).
    
2. [grep, print lines matching a pattern](http://www.gnu.org/software/grep/doc/), GNU Documentation (last modified: 23 January 2002).

## Exercises complete!

Congratulations! You've (probably) completed all of the exercises!

_To confirm you have, go back to the Lesson homepage, and ensure all of the lessons (including HTML & CSS) have green ticks beside them._

Of course, there are still other assessment items, so ensure you are ready and progressing for those.

These include:

- Theory
    
    - Quiz 1
        
    - Quiz 2
        
    - Final Theory Exam
        
- Practical
    
    - Linux Exercises/Ed Lessons _**(you are here!)**_
        
    - Web Assignment
        
    - Skills Test
        

**_Please ensure you read the Canvas pages for the latest and most complete information, requirements & due dates._**

All that said, again, well done!


