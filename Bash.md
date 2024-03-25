# The Ultimate Linux Command Line Guide - Full Bash Tutorial

November 19, 2019

![The Ultimate Linux Command Line Guide - Full Bash Tutorial](https://cdn-media-2.freecodecamp.org/w1280/5f9c9f2f740569d1a4ca4141.jpg)

Welcome to our ultimate guide to the Linux Command Line. This tutorial will show you some of the key Linux command line technologies and introduce you to the Bash scripting language.

## **What is Bash?**

Bash (short for Bourne Again SHell) is a Unix shell, and a command language interpreter. A shell is simply a macro processor that executes commands. It’s the most widely used shell packaged by default for most Linux distributions, and a successor for the Korn shell (ksh) and the C shell (csh).

Many things that can be done Linux operating system can be done via command line. Some examples are…

- Editing files
- Adjusting the volume of the operating system
- Fetching web pages from the internet
- Automating work you do every day

You can read more about bash [here](https://www.gnu.org/software/bash/), via the [GNU Documentation](https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents), and via the [tldp guide](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc10).

## **Using bash on the command line (Linux, OS X)**

You can start using bash on most Linux and OS X [[operating systems]] by opening up a terminal. Let’s consider a simple hello world example. Open up your terminal, and write the following line (everything after the $ sign):

```
zach@marigold:~$ echo "Hello world!"
Hello world!
```

As you can see, we used the echo command to print the string “Hello world!” to the terminal.

## **Writing a bash script**

You can also put all of your bash commands into a .sh file, and run them from the command line. Say you had a bash script with the following contents:

```
#!/bin/bash
echo "Hello world!"
```

It’s worth noting that first line of the script starts with `#!`. It is a special directive which Unix treats differently.

#### **Why did we use #!/bin/bash at the beginning of the script file?**

That is because it is a convention to let the interactive shell know what kind of interpreter to run for the program that follows. The first line tells Unix that the file is to be executed by /bin/bash. This is the standard location of the Bourne shell on just about every Unix system. Adding #!/bin/bash as the first line of your script, tells the OS to invoke the specified shell to execute the commands that follow in the script. `#!` is often referred to as a “hash-bang”, “she-bang” or “sha-bang”. Though it is only executed if you run your script as an executable. For example, when you type `./scriptname.extension`, it will look at the top line to find out the interpreter, whereas, running the script as `bash scriptname.sh`, first line is ignored.

Then you could run the script like so: For make file executable you should call this command under sudo chmod +x “filename”.

```
zach@marigold:~$ ./myBashScript.sh
Hello world!
```

The script only has two lines. The first indicates what interpreter to use to run the file (in this case, bash). The second line is the command we want to use, echo, followed by what we want to print which is “Hello World”.

Sometimes the script won’t be executed, and the above command will return an error. It is due to the permissions set on the file. To avoid that use:

```
zach@marigold:~$ chmod u+x myBashScript.sh
```

And then execute the script.

## **Linux Command Line: Bash Cat**

Cat is one of the most frequently used commands in Unix [[operating systems]].

Cat is used to read a file sequentially and print it to the standard output. The name is derived from its function to con****cat****enate files.

### **Usage**

```
cat [options] [file_names]
```

Most used options:

- `-b`, numer non-blank output lines
- `-n`, number all output lines
- `-s`, squeeze multiple adjacent blank lines
- `-v`, display nonprinting characters, except for tabs and the end of line character

### **Example**

Print in terminal the content of file.txt:

```
cat file.txt
```

Concatenate the content of the two files and display the result in terminal:

```
cat file1.txt file2.txt
```

## Linux Command Line: Bash [[cd]]

****Change Directory**** to the path specified, for example `[[cd]] projects`.

There are a few really helpful arguments to aid this:

- `.` refers to the current directory, such as `./projects`
- `..` can be used to move up one folder, use `[[cd]] ..`, and can be combined to move up multiple levels `../../my_folder`
- `/` is the root of your system to reach core folders, such as `system`, `users`, etc.
- `~` is the home directory, usually the path `/users/username`. Move back to folders referenced relative to this path by including it at the start of your path, for example `~/projects`.

## Linux Command Line: Bash head

Head is used to print the first ten lines (by default) or any other amount specified of a file or files. Cat is used to read a file sequentially and print it to the standard output.   
ie prints out the entire contents of the entire file. - that is not always necessary, perhaps you just want to check the contents of a file to see if it is the correct one, or check that it is indeed not empty. The head command allows you to view the first N lines of a file.

if more than on file is called then the first ten lines of each file is displayed, unless specific number of lines are specified. Choosing to display the file header is optional using the option below

### **Usage**

```
head [options] [file_name(s)]
```

Most used options:

- `-n N`, prints out the first N lines of the file(s)
- `-q`, doesn’t print out the file headers
- `-v`, always prints out the file headers

### **Example**

```
head file.txt
```

Prints in terminal the first ten lines of file.txt (default)

```
head -n 7 file.txt
```

Prints in terminal the first seven lines of file.txt

```
head -q -n 5 file1.txt file2.txt
```

Print in terminal the first 5 lines of file1.txt, followed by the first 5 lines of file2.txt

Linux Command Line: Bash ls

`ls` is a command on Unix-like [[operating systems]] to list contents of a directory, for example folder and file names.

### **Usage**

```
cat [options] [file_names]
```

Most used options:

- `-a`, all files and folders, including ones that are hidden and start with a `.`
- `-l`, List in long format
- `-G`, enable colorized output.

### **Example:**

List files in `freeCodeCamp/guide/`

```
ls                                                                ⚬ master
CODE_OF_CONDUCT.md bin                package.json       utils
CONTRIBUTING.md    gatsby-browser.js  plugins            yarn.lock
LICENSE.md         gatsby-config.js   src
[[README]].md          gatsby-node.js     static
assets             gatsby-ssr.js      translations
```

## Linux Command Line: Bash [[man]]

[[Man]], the abbreviation of ****[[man]]****ual, is a bash command used to display on-line reference manuals of the given command.

[[Man]] displays the reletive [[man]] page (short for ****[[man]]****ual ****page****) of the given command.

### **Usage**

```
[[man]] [options] [command]
```

Most used options:

- `-f`, print a short description of the given command
- `-a`, display, in succession, all of the available intro manual pages contained within the manual

### **Example**

Display the [[man]] page of ls:

```
[[man]] ls
```

## Linux Command Line: Bash [[mv]]

****Moves files and folders.****

```
[[mv]] source target
[[mv]] source ... directory
```

The first argument is the file you want to move, and the second is the location to move it to.

Commonly used options:

- `-f` to force move them and overwrite files without checking with the user.
- `-i` to prompt confirmation before overwriting files.

That's all. Go forth and use Linux.