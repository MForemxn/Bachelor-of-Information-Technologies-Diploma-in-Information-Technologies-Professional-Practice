## Chapter 1: The Filesystem

Learning the [[Bash]] command-line interface will enable you to quickly and effectively perform many of the tasks which are arduous in a point-and-click environment. This chapter focuses on management of the Linux filesystem and its contents
## Getting started with [[Bash]]

## 1. Working directory

The most elementary concept which distinguishes the shell from the graphical user interface is the fact that at any given time you, the user, are located in a directory/folder of the file system.

##   
1.1. Executing a command

To see where you are located, type [[pwd]] (which stands for "print working directory") at the command line then press the ENTER key.

## 2. Hints

In this EBook we will give you hints about which skills you need in order to perform the exercises, and we will also refer you to websites where these topics are explained in more detail.

The most accurate and comprehensive source of information (though often difficult to read) is the manual page. For example, to learn more about the `pwd` command type:

```
man pwd
```

Using [[man]]: Use the spacebar to jump to the next page. Use the up/down arrow keys to move up and down a line. Use the **q** key to quit.

## References

It's worth scanning through the references below (in this order) when there's a [[Bash]] question you need [[help]] with.

[UNIX Tutorial for Beginners](http://www.ee.surrey.ac.uk/Teaching/Unix/index.html), Michael Stonebank, University of Surrey (last viewed: 23 May 2007).

[Basic Commands](http://tldp.org/LDP/abs/html/basic.html), Advanced Bash-Scripting Guide: An in-depth exploration of the art of shell scripting, Chapter 15.1 (version 4.3, last updated 29 April 2007).

[Bash reference manual](http://www.gnu.org/software/bash/manual/bashref.html#SEC1), Edition 2.5b (last updated 15 July 2002).

## Essential Commands

- **`pwd`** - to display the path-name of the working directory (**p**rint **w**orking **d**irectory)
    
- **`ls [directory]`** - to display the list of files
    
- **`cd [directory]`** - to change the working directory
    
- **`mkdir [directory]`** - to create a directory
    
- **`touch [file]`** - to create a file
    
- **`cp [file1] [file2]`** - to copy a file
    
- **`rm [file]`** - to remove a file
    
- **`rmdir [directory]`** - to remove an empty directory
    
- **`cat`**, **`less`**, **`head`**, **`tail`** - for viewing files

## Filesystem navigation

The diagram below represents (part of) the file system of Edstem. A line from one node to a node on its right indicates containment. For example, the linuxgym directory is contained within the course directory.

![](https://static.edusercontent.com/files/rLuTRuL9KCb2tVdcmPawamJ1)

- When you are working within a shell terminal, you are always operating in a particular directory. To determine which directory you are in, use the **pwd** command.
    
- Your [[home]] directory is the directory you are in when you first open the terminal. To go to your [[home]] directory from anywhere, just type **cd**
    
- An absolute path name is one beginning with the "/" character, which signifies the root of the file system tree. Therefore, the absolute way of going to your home directory is:  
    **cd /home**
    
- A relative path is one which starts with the name of a directory connected to the current directory. For example, if you are in the **/course** directory, then typing **cd linuxgym** takes you to the linuxgym directory present in your current directory (or 'working directory').
    
- To go to the directory containing the current working directory (also called the parent directory) type:  
    **cd ..**
    
- The relative pathname of the current working directory is called "." (the full stop). Therefore typing:  
    **cd .** does not change the working directory. This can be useful for example trying to copy files to your current location e.g. '**cp file.txt .**' would copy the file file.txt to your current directory.
    
- Some special directories have aliases. The home directory is "**~**", which you can also see next to the prompt upon starting your terminal

## Manual and help pages

Many commands have additional options which change the way they work. These options are used by adding **-x** after a command where the x is the option you would like to use.

```
command -x
```

Multiple options at a time can be used by simply adding more letters

```
command -abcd
```

## man pages

To see the options available for each command, you can use the man pages:

man command

Where command is the command you would like to examine e.g. 
```
man mkdir
```

To exit the man pages, simply press **q**.

## Additional

Most but not all commands support the **--help** option which may display in a more readable format or offer additional information

``command --help``


## Saving output to a file

When you execute a [[Bash]] command, the output you see on the screen is of two types, the standard output (called the "**STDOUT**") and the standard error (called the "**STDERR**"). In this section we explain how to store these in a file.  
  
If you run the command:  
`echo "Hello World"`  
the following line appears on the terminal:  
`Hello World`

```
echo "Hello World"
```

  
  
[[Redirection]] is the process of capturing the **STDOUT** data and sending it to a destination other than the screen.

# Saving standard output as a file

The most commonly used [[redirection]] is the use of the greater-than operator (**>**) to send the standard output to a file.

## **Example 1: Redirecting standard output**

To store the line "Hello World" in the file "test.txt" execute the command:  
`echo "Hello World" > test.txt`  
and to verify the contents of the file, use the cat command eg:  
`cat test.txt`

```
echo "Hello World" > test.txt

cat test.txt
```

##   
**Example 2: Redirecting standard output**

You can redirect the output from **ANY** valid command. Let's try the `date` command. Normally when you type  
`date`  
this displays the current date to your terminal. To save this as a file, type:  
`date > now.txt`  
The output of this command is saved into **now.txt**  
Verify this by typing:  
`cat now.txt`  

```
date > now.txt

cat now.txt
```

##   
Saving standard error as a file

The slight modification for redirecting the standard error (instead of standard out) is the use of the greater-than operator preceded by "2" (**2>**).  

## **Example 3: Redirecting standard error**

  
Assuming you have no file called "sillyfilename", the command  
  
`rm sillyfilename`  
  
will display the error message  
  
`sillyfilename: No such file or directory`  


```
rm sillyfilename
```

  
Moreover, the command  
  
`rm sillyfilename > silly.output`  
  
will also display the error message but will not save it to file.



```
rm sillyfilename > silly.output
```

# silly.output is empty and error msg is displayed

However;  
  
`rm sillyfilename 2> silly.output`  
  
will store the error message into the file.


```
rm sillyfilename 2> silly.output

cat silly.output

#error msg is not displayed and instead saved to silly.output
```

##   
**Appending** standard output to a file

Having created the file "test.txt" with the contents "Hello World", if the command:  
`echo "Goodbye Universe" > test.txt`  
is executed, then the file "test.txt" will contain "Goodbye Universe" but will not contain "Hello World". The reason is that the greater-than operator (**>**) initiates the process by emptying the destination file.  


```
echo "Hello World" > test.txt

echo "Goodbye Universe" > test.txt

cat test.txt
```

  
If you wish to append the output of a command to a file, retaining the data it contained prior to executing the command, use the "double greater-than" operator, (**>>**).  

## **Example 4: Appending standard output to a file**

First create/reinitialise the file "test.txt" with a single line of text:  
`echo "Hello World" > test.txt`  
and then append the following line of text:  
`echo "Goodbye Universe" >> test.txt`  
The resulting contents of the file may then be displayed with:

```
cat test.txt
```

```
echo "Hello World" > test.txt

echo "Goodbye Universe" >> test.txt

cat test.txt
```

## References

[I/O redirection](http://www.tldp.org/LDP/intro-linux/html/chap_05.html), Introduction to Linux - A Hands on Guide, Machtelt Garrels, Edition 1.25 (last edited: 11 May 2007).

[I/O Redirection](http://tldp.org/LDP/abs/html/io-redirection.html), Mendel Cooper, Advanced Bash-Scripting Guide: An in-depth exploration of the art of shell scripting, Chapter 19, version 4.3, 29 April 2007.

[Printing a file to the screen](http://linuxgym.it.uts.edu.au/docs/hints/bash.cat.html), Linuxgym.


## Listing files

To see the list of visible files in your current working directory, simply type:

```
ls
```

However, this is just the starting point for a command with many useful options.

## 1. Listing files in another directory

If you want to see the list of files in a directory which isn't the current working directory, you don't need to change directory - simply type:

ls /path/to/directory

where /path/to/directory is replaced with the full path name of the directory.


```
ls /course/linuxgym/teeny
```

## 2. Listing invisible files

Many directories (especially your [[home]] directory) have contents which are not displayed by ls unless you specifically ask it to. The invisible contents are files and directories beginning with a full-stop (.).  
  
In order to list these files as well, use the -a option - or equivalently --all - which means "all files". That is:

```
ls -a /path/to/directory
```

or

```
ls --all /path/to/directory
```


```
ls -a /course/linuxgym/teeny
```

## 3. Listings with detail

As shown in the page covering file permissions the -l ("long") option displays the user and group which own a file, together with its size, permissions and whether it is a directory.



```
ls -l /course/linuxgym/teeny
```

## 4. Ordering of the list

When there is a large number of files in a directory, it is useful to list the files in a particular order. The default ordering is alphabetical, but there are many options to the ordering such as:  

- `-t` - ordering by modification time (newest to oldest)
    
- `-S` - ordering by size (largest to smallest, **note: this is a capital S!**)
    
- `-r` - the reverse of the ordering selected.
    

Example

```
ls -lart
```

Shows all files (including those who's names begin with a full-stop) with the most recently modified file coming last.


```
ls -lart
```


## References

For further information on ls type


```
man ls
```


## Printing a file to the screen

There are several commands for displaying the contents of a file.

## cat

To print the contents of any file to the screen (standard output) execute the command `cat`. For example:



```
cat /course/linuxgym/teeny/3mwsm10.txt
```


## head

When using `cat` because the list scrolls of the top of the screen, you can not easily read the first 10 lines.

The "head" command solves this problem by only reading the first 10 lines of a file.



```
head /course/linuxgym/teeny/3mwsm10.txt
```

You can also specify the amount of lines you would like to print:



```
head -n3 /course/linuxgym/teeny/3mwsm10.txt
```

## tail

Similar to the `head` command, but it prints the last lines of a file to the screen  


```
tail /course/linuxgym/teeny/3mwsm10.txt
```

The tail command also handles the 'follow' function, which continues to watch the file and output any new data which is appended to it. This is very useful for watching system log files



```
tail -f /var/log/pacman.log
```

## wc

Used to count the chars and **lines/words/bytes** in a file


```
wc /course/linuxgym/teeny/3mwsm10.txt
```

## References

As always, there are many options for these command which you will find in the [[man]] pages which are accessed with the command:

```
man command
```


```
man cat
```
