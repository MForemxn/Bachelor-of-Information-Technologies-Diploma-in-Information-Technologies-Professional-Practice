## Permissions

In the Linux operating system there are a number of users and groups. To see the list of users, type

```
less /etc/passwd
```

There is also a list of groups in the file /etc/group

# Your UserId

When you are working in a terminal, you are logged in as a particular user (usually "student"), and you will also be in a particular group (also "student"). To understand why these conditions are important, you must first understand the accessibility of files.

# File and directory ownership and permissions

Each file and directory has three sets of permissions, and two types of ownership. Consider the following listing of files (press **run**):


```
ls -l /course/linuxgym/spacetime
```

The information one is able to draw from this listing is:

```
**-**rw-r--r-- **d**rw-r--r--
```

The left-most character indicates whether the line refers to a directory (**d**) or just a file (**-**). The listing above indicates that entries **a**, **brief**, **history**, **of**, and **time** are files because they lack the character **d** as a starting letter.

```
root root
```

The two columns above indicate the user owning the file (**root**), and the group owning it (**root**) respectively.

```
-rw-r--r--
```

Ignoring the starting character (which represents whether the entry is a file or a directory), the next 9 characters can be broken down into sets of three:

`**rwx** &` `**rw-** &` `**r--**`

Each of the three character triplets represents permissions for a separate scope:

1. Users - (**r**ead, **w**rite, e**x**ecute) - permissions for owner
    
2. Group - (**r**ead, **w**rite, no **e**xecute) - permissions for users who are in the owner's group
    
3. Other - (**r**ead, no **w**rite, no e**x**ecute) - permissions for other users
    

When a file is executable, it means that it can be run as a program. When a directory is executable, it means its list of files can be read.

# Changing file permissions

It is important to be able to change the permissions of files and directories to control their [[availability]] to other users - whether they be humans or processes. In general one uses a command of the form:

chmod [ugo][+-][rwx] /path/to/file

where

- **`u`** - stands for user
    
- **`g`** - stands for group
    
- **`o`** - stands for others
    
- **`r`** - stands for readable
    
- **`w`** - stands for writeable
    
- **`x`** - stands for executable
    

## Example 1

Changing the permissions of a directory so that others can enter it and list its contents can be performed using a command of the form:

```
chmod o+rx /path/to/directory
```

## Example 2

To make a file unreadable to others:

```
chmod o-r /path/to/file
```

# Making a file into a program

A program is an executable file containing commands. The simplest example is a file called "hello.sh" containing a single line:

```
echo Hello World!
```

To emulate the typing of this line onto the command line involves two simple steps:  
`chmod +x hello.sh` - which makes it executable by its owner;

`./hello.sh` - which executes the contents of the file.


```
echo "echo Hello World!" > hello.sh

chmod +x hello.sh

./hello.sh
```


In the example above, we are using the redirect symbol **>** to write the contents `echo Hello World!` into the file hello.sh.

## References

All the topics above are covered comprehensively in this web site:

1. [Permissions](http://linuxcommand.org/lc3_lts0090.php), [LinuxCommand.org](http://linuxcommand.org/) William Shotts, Jr., (last accessed 20 May 2007)
