Linuxgym Chapter 2 – Questions and Answers on the [[vim]] editor

(1) A user is editing a file using the [[vim]] editor. They are at line 97. They want to know how many lines are in the file. What keys do they press?

Cntrl-g (Control and g pressed simultaneously)

(2) After finding out that the file has 7000 lines, the user wishes to go to line 2125. What sequence of keys do they press?

2125 shift-g (Shift and g pressed simultaneously) also :2125 works as well.

(3) After placing the cursor on line 2125 the user wishes to delete 15 lines. What key sequence do they press?

15dd (or d15d) - either will work

(4) The user realises that they made a mistake. They meant to delete 15 lines starting at line 2225. What key(s) do they use to undo their last edit?

u (stands for undo) also :u works as well.

(5) The user successfully restores the deleted lines. They need to go to line 2225. What key sequence do they press to go there?

2225 shift-g

(6) [[Vim]] is a modal editor – what does “modal” mean?

It means that the editor behaves differently depending what mode you are in. To do particular actions, you need to be in the appropriate mode.

(7)What are the three main modes used by the [[vim]] editor?

The three modes are command mode (sometimes known as normal mode), last line mode (sometimes known as command line mode) and insert mode (sometimes known as input mode).

(8) (a) The user is editing a file using [[vim]]. They wish to delete the first word on line 35. What mode must they be in to complete the action?

Command mode

(8) (b) What operations must they perform to complete the action?

Go to line 35, then delete the word.

(8) (c) What key sequence must they use to complete the action?

<ESC> 3 5 Shift-g d w

[[Vim]] Questions ver 1-06

(9) The user has opened a file with [[vim]] and is at line 40. They wish to merge lines 40 and 41 into one line. What key(s) do they press?

Shift-j

(10) The user has opened a file with [[vim]] and is at line 70. They wish to merge line 70 with the next 9 lines (that is lines 70 to 79 inclusive) so that they are all one line. What key(s) do they press?

10 shift-j

(11) Complete the following table adding the modes

[[Vim]] Questions ver 1-06

Operation

Insert text  
Delete lines  
Go to a particular line  
Paste Lines  
Change all occurrences of a word in a file Save a file  
Find occurrences of a string in a file

Mode to do the Operation Insert mode  
Command mode Command mode Command mode

Last line mode Last line mode Last line mode

(12) You are in command mode. Which of the following keys when pressed will put [[vim]] into insert mode?

p No a Yes i Yes Z No o Yes O Yes

(13) You are in insert mode. Pressing what key will return you to command mode?

The Escape key

[[Vim]] Questions ver 1-06 (14) You are in command mode. Pressing what key will put you to last line mode?

The colon key (:) – in most cases. The / key which is used for searching (but not replacing) also operates in last line mode.

(15) (a) You want to search and replace all occurrences of the word “exercise” with the word “calisthenics”. What mode is this done in?

Last Line Mode

(16) (b) What is the key sequence to do this?

:%s/\<exercise\>/calisthenics/g

(17) You want to change all lines beginning with the number 6 so that the number is replaced with the string “six”. What is the key sequence to do this?

:%s/^6/six/g

(18) You have opened a file with [[vim]]. The file has over 7000 lines. You are in command mode. What does the following sequence do?

G120 100dd G200 p

It puts the cursor on line 120, then deletes 100 lines including the current line, then puts the cursor at line 200 and pastes the 100 lines that were deleted below the current line.

(19) You are in the same situation as outlined in (18). What does the following sequence do? G120  
120yy  
G200

p

It puts the cursor on line 120, then copies 100 lines including the current line, then puts the cursor at line 200 and pastes the 100 lines that were copied below the current line.

[[Vim]] Questions ver 1-06