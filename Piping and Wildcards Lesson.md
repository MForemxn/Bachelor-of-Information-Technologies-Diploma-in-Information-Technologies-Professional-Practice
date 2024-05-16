## Piping with Bash

Storing a command's standard output and error in a file is a covered in the page on [redirection](https://edstem.org/au/courses/15505/lessons/49670/slides/335708). In this page we explain how to use the output of one program as the input of another. This is also a type of redirection called **piping**.

We illustrate the concept of piping through a detailed example.

## Example: Piping ls into grep

Firstly, make sure you understand how grep operates on two arguments - a pattern and a file.

Now experiment with grep and a single argument - just a pattern. It behaves by reading a line of standard input, and echoing it to the standard output if it matches the pattern. Here is an example of such a use of grep with the user's keystrokes in black and grep's output in red:

Experiment with running the snippet below. Type in some input and press ENTER. Grep will echo your input to the standard output if it matches the pattern we've given it. In this case, grep will return any line with the string **`test`**in it.


```
grep test
```


(Note: to terminate the grep process, we use <CTRL>-D.)

Instead of typing the standard input to grep using keystrokes, you can channel the output of another command - such as ls - into the standard input of grep. And therefore the command:

ls | grep foo

has the same effect as

```
ls *foo*
```



```
ls | grep main #grep filters for lines that contain 'main'
```




```
ls *main*
```

## References

1. [I/O redirection](http://www.tldp.org/LDP/intro-linux/html/chap_05.html), Machtelt Garrels, Chapter 5, Introduction to Linux - A Hands on Guide. Version 1.25 (last modified: 11 May 2007).
    
2. [I/O Redirection](http://tldp.org/LDP/abs/html/io-redirection.html), Mendel Cooper, Chapter 19, Advanced Bash-Scripting Guide: An in-depth exploration of the art of shell scripting. Version 4.3 (last modified: 29 April 2007).
    
3. [Pipes: A Brief Introduction](http://www.bellevuelinux.org/pipes.html), Linux Information Project. (last modified 23 August 2006).
    
4. [Introduction to Named Pipes](http://www2.linuxjournal.com/article/2156)", Andy Vaught, Linux Journal (last modified: 1 September 1997).

## Bash Wildcards

Regular expressions (also known as pattern matching) occur not only in _Vim_ and _Grep_. They are also used on the Bash command-line, but as always, there are slight differences in the syntax. In Bash, we call this "wildcards" or colloquially "globbing".

The Bash reference manual (see references) is quite comprehensive so here is a short summary.  
The easiest way of experimenting with Bash regular expressions is through use of the ls (directory listing) command, however the regular expressions can also be used for cp (file copying) and rm (file removal) to name a few.

**Common patterns used by Bash are:**

- * Matches any string, including the null string.
    
- ? Matches any single character.
    
- [] Matches a range of characters. A range looks like
    
    - any number of characters e.g. [1234567890] or [a-z] or [a-z,A-Z]
        
    - you can have a special "class" of characters  
        e.g. [:blank:] - matches any whitespace, [:digit:] matches a numeric character, [:lower:] for any lowercase character, [:upper:] for uppercase, [:alpha:] for alphabetic character. Whats cool is that these classes will vary depending on the current character set - so European characters could get matched (e.g. é)  
        You should enclose treat these "classes" as if they were a single character in the pattern. e.g.  
        [[:upper:]a-z] would match 2 characters which start with an Uppercase letter.
        

- {} Lets you group patterns seperated by commas. e.g. {*_.doc,_*.pdf} match all files ending with .doc or .pdf
    
- [ ] is a negative match e.g. [!a].doc represents all files EXCEPT a.doc
    
- \ "escapes" the next character. So [\[\]] represents a pattern containing [ or ]
    

## Example 1.

**List all files ending in .txt**

```
ls *.txt
```



```
ls /course/linuxgym/emptystuff/*.txt
```

## Example 2.

**List all files beginning with "1", "2" or "3"**

```
ls [123]*
```


```
ls /course/linuxgym/emptystuff/[123]*
```

## Example 3.

**List all files containing digit in their name**

```
ls *[[:digit:]]*
```


```
ls /course/linuxgym/vimdata/*[[:digit:]]*
```

## References

[How to Use Wildcards](http://www.linfo.org/wildcard.html), The Linux Information Project (last accessed: 24 May 2007).  
[Pattern Matching](http://www.faqs.org/docs/bashman/bashref_35.html), GNU Bash Reference Manual, Edition 2.5a (last updated: 13 November 2001).  
[Pattern matching using Bash features](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_04_03.html), Bash Guide for Beginners (last accessed: 23 May 2007).


