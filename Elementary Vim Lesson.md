## Chapter 2: Elementary Vim

A text editor is used for creating and modifying ASCII files, so that the files being created can be viewed using cat or less. Often the text files are used as code - a sequence of instructions to the computer - as will be seen in the introduction to scripting.
## Introduction to VIM

Vim is a text editor - not a word processor. The difference being that a file created with a text editor contains no extra data to influence its visual presentation. For this reason, any file containing code to be executed by the operating system must be created using a text editor.

While there are many text editors, Vim is the most powerful in terms of functionality, and also the least reliant on system specifications. It is therefore regarded as the editor of choice for the Linux professional.

# Start learning Vim

Before attempting the exercises in this chapter, you can learn the basics of Vim by running:


```
vimtutor
```

and following the instructions. It will take between 25 and 30 minutes. **Note**: running the vimtutor from this page will **timeout** eventually, so try running it from your own or the Code Challenge terminals.

Subsequently, it may be helpful to keep this quick reference card open in a web page while you work.

# Elementary Vim skills

The following are brief descriptions of some essential activities.

## 1. Starting Vim

From the command line you can start editing a file called "test.txt" (whether the file "test.txt" exists or not) with the command:


```
vim test.txt
```

## 2. Switching Modes

There are eleven types of modes when running Vim, but the three important ones we will be using are Normal, Insert, and Command mode.

**Normal mode**: When you start Vim you will be in normal mode, and at any time you can return to the normal mode by pressing the **<ESC>** key at the top left-hand side of your keyboard.

**Insert mode**: There are many ways to enter the insert mode, but the simplest is to type **i**. After typing **i** all the characters you type will be inserted into the document.

**Command mode**: To enter command mode, simply type **:**. After typing **:** you can then enter commands to do things such as add line numbering and search contents of the document.

## 3. Exiting Vim

To exit Vim and return to the command-line:

Go to normal mode by typing **<ESC>**

Save and Exit: type `:wq` which stands for "write and quit". Notice that the use of the **:** means that you have entered command mode.

Exit **without** saving: type `:q!` which stands for "quit and I'm sure I don't want to save!" to return to the command-line without saving the changes you have made to the file.

## References

**VimTutor**, Michael C. Pierce and Robert K. Ware, Colorado School of Mines (using ideas supplied by Charles Smith, Colorado State University, modified for Vim by Bram Moolenaar.)

[Vim User Manual](http://vimdoc.sourceforge.net/htmldoc/usr_toc.html), Bram Moolenaar (last change: 24 April 2006).

[Vim Modes](http://vimdoc.sourceforge.net/htmldoc/intro.html#vim-modes-intro), Bram Moolenaar, Vim documentation for Vim version 7.0 (last change: 2 April 2006).

[Vim Quick Reference Card](http://tnerual.eriogerg.free.fr/vimqrc.html), Laurent Grégoire (last accessed: 20 May 2007).

![](https://static.edusercontent.com/files/deYv5Vg1YZlI9KH0lRCJhLLq)

## Explanation of VIM commands

This section contains a very basic overview of commonly used commands with links into more detailed documentation.

## Document Navigation

In normal mode, you can move around using the arrow buttons on your keyboard as well as page-up and page-down.

You can display the number of each line on the left-hand side by typing the command:

```
:set number
```

and you can hide the line numbers with:

```
:set nonumber
```

(Note: these commands can be abbreviated to :set nu and :set nonu)

You can move the cursor to line n by typing simply a colon followed by the line number:

```
:n
```
For example, `:10` will jump the cursor to line 10

## Inserting text

From the normal mode, in relation to the location of the cursor:

- **I** - (Capital i) insert at the beginning of the line
    
- **i** - insert one character to the left
    
- **A** - append to the end of the line
    
- **a** - append one character to the right
    

For more information on inserting text, go to Insert mode commands, Vim Reference Manual.

## Deleting text

From the normal mode, in relation to the location of the cursor:

- **x** - delete the character beneath the cursor
    
- **D** - delete from the cursor to the end of the line
    
- **dd** - delete the line the cursor is on.
    
- **dnd** - delete n lines from the cursor down.
    
- **dw** - “delete a word” from the cursor to the next white space
    
- **dnw** - delete n words
    
- **dG** - delete from the cursor to the end of the file
    
- **dnG** - delete from the cursor to line n
    

## Joining together lines

While in normal mode, pressing `J` causes the line where the cursor is, to be joined together with the line after it. In ASCII terms - the carriage return between the two lines is replaced with a space. To learn more about J go to Information about the J command, Vim Reference Manual.

## References

1. VimTutor, Michael C. Pierce and Robert K. Ware, Colorado School of Mines (using ideas supplied by Charles Smith, Colorado State University, modified for Vim by Bram Moolenaar.)
    
2. [Vim User Manual](http://vimdoc.sourceforge.net/htmldoc/usr_toc.html), Bram Moolenaar (last change: 24 April 2006).
    
3. [Vim Modes](http://vimdoc.sourceforge.net/htmldoc/intro.html#vim-modes-intro), Bram Moolenaar, Vim documentation for Vim version 7.0 (last change: 2 April 2006).
    
4. [Vim Quick Reference Card](http://tnerual.eriogerg.free.fr/vimqrc.html), Laurent Grégoire (last accessed: 20 May 2007).


## Search and replace

In this section we explain how to search for (and change) strings using pattern matching with regular expressions.

## 1. Searching for strings

**a)** In **normal mode**, type

/string

for example, /hello

Then each time you type n the cursor will be relocated to the next instance of the string "hello".

**b)** To search for either of `{"abc","aBc"}` one can type a single command:

`/a[bB]c`

where the square brackets mean "or".

**c)** One can search for any string in the set

{"ac", "abc", "abbc", "abbbc", ... }

using the command

/ab*c

where `b*` means "zero or more b's".

d) In order to search for a **word** rather than a string you need to surround the string with the \< and the \> characters.

For example, if you search for the word "**and**" using

/and

will ALSO find words containing "and" such as "sandy". To ensure that you only find "and" add word boundaries to the search you need to use the following search:

/\<and\>

## 2. Search and replace/substitute

Substituting a string is very like a search with an extra parameter. For example, changing every occurrence in a file of "abc" to "ABC" simply requires the command:

`:%s/abc/ABC/g`

By way of explanation:

1. : means "change to command mode"
    
2. %s means "substitute on every line in the file"
    
3. /g means "replace all occurrences in the line - not just the first."
    

## References

The first in this list is a well written article covering quite a lot without too much pain - well worth a read!

Vim tips: The basics of search and replace, Joe 'Zonker' Brockmeier, [Linux.com](http://linux.com/) (28 June 2006)

Patterns and search commands, Vim User Manual, Bram Moolenaar (last change: 30 April 2006).

Tip #31: Find and Replace, Vim Tips (created 7 March 2001).


## Marking for copying and moving text

In this section we explain how to set (and make use of) marks at positions within a file being edited with Vim.

In normal mode, type

`m_letter_`

for example, `ma`

Then at any position in the document, you can go back to that line by typing

'_letter_

for example, `'a`.

## Marking to copy text

Text is copied by storing ("yanking") it into a register - a component of Vim's memory - and then pasting it into a new location.

To copy a section of a document:

1. move the cursor to the first line of the section, and mark it as explained above
    
2. move to the final line in the section you wish to copy, and type
    
3. `y'_letter_` where letter is the letter with which you marked the beginning of that section
    
4. move the cursor to the location where the copy is to be placed, and type `p` (for "paste").
    

## Marking to delete/move text

Having marked the first line to be deleted, instead of typing y as in point 2 above, type:  
`d'_letter_`

The deleted section of text has now been stored in the register and will be inserted wherever you type `p`.

## References

[Copying text](http://vimdoc.sourceforge.net/htmldoc/usr_04.html#04.6), Vim User Manual, Bram Moolenaar (last change: 24 April 2006).

[Moving text](http://vimdoc.sourceforge.net/htmldoc/usr_04.html#04.5), Vim User Manual, Bram Moolenaar (last change: 24 April 2006).

[Vim Quick Reference Card](http://tnerual.eriogerg.free.fr/vimqrc.html), Laurent Grégoire (last accessed: 20 May 2007).

