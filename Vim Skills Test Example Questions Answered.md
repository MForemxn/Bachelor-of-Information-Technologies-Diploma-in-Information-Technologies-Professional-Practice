# Vim problems

## Note: Before doing any work with vim, make sure you enter the commands:

```
TERM=vt100;export TERM
```

In all terminals where you use vim. We will use the file constitution.txt

## Copy the file constitution.txt into a file called con1.txt. Using the vim editor delete all but the last 20 lines of con1.txt
```
:1,$-20d
```
## Can you do the task required in (1) without using vim? What command would you use? Using the command, create a file called con2.txt with the last 30 lines of constitution.txt
```
tail -n 30 constitution.txt > con2.txt
```

## Copy the file constitution.txt into a file called con3.txt. Using the vim editor, moves lines 100 to 200 inclusive to the end of the file.
```
:100,200m $
```

## Copy the file constitution.txt to the file con4.txt Modify every occurrence of the string “the” to the string “THE”.
```
sed -i 's/the/THE/g' con4.txt
```

## Copy the file constitution.txt to the file con5.txt Modify every occurrence of the words “the” and “The” to the string “THE”.
```
sed -i 's/[tT]he/THE/g' con5.txt
```

# Shell Scripting

## Write a shell script called script1.bsh that takes one argument (an integer). The script should print out the string “The argument doubled is “ followed by the argument multiplied by two.
```
#!/bin/bash
doubled=$(( $1 * 2 ))
echo "The argument doubled is $doubled"
```
> Remember to chmod after finishing the command

## Write a shell script called script2.bsh that takes two integer arguments.
> If the first argument is bigger than the second it should print “The first argument is bigger than the second.”
> If the second argument is bigger than the first it should print “The second argument is bigger than the first.”
> If the arguments are equal then the script should print “The arguments are equal”
```
#!/bin/bash
if [ $1 -gt $2 ]; then
  echo "The first argument is bigger than the second."
elif [ $2 -gt $1 ]; then
  echo "The second argument is bigger than the first."
else
  echo "The arguments are equal."
fi
```

## Make a copy of your answer from (2). 
> Call the copy script2.bsh. Modify the script so that if the number of arguments supplied is not exactly two, the script prints the message “Incorrect number of Arguments – 2 required” and then exits, returning the number 23 to the operating system.
```
#!/bin/bash

if [ $# -ne 2 ]; then
  echo "Incorrect number of Arguments - 2 required"
  exit 23
fi

if [ $1 -gt $2 ]; then
  echo "The first argument is bigger than the second."
elif [ $2 -gt $1 ]; then
  echo "The second argument is bigger than the first."
else
  echo "The arguments are equal."
fi

```

# [[Data]] Processing

The file seats_2019.txt is a text file containing electoral [[data]] just prior to the 2019 federal election. The fields in order are: name of the electorate, its’ state or territory, the initials of the party that held the seat and the margin the seat is held by. Each field is separated by a space. Electorates with multiword names have been hyphenated. Although the file has every electorate for 2019, the [[data]] is unordered.

Note the **major** parties are : 
- ALP (Australian Labor Party) LIB (Liberal Party)
- NAT (National Party)
- LNP (Liberal-National Party, a joint Liberal and National Party in Queensland) GRN (The Greens)  

The **minor** parties are:  
- CA (Centre Alliance)
- IND (Independents – not really a party but for the purposes of the exercise we will treat it as such. 
- KAP (Katter Party)

# Questions

## How many seats are there in Victoria (VIC)?  
```
grep 'VIC$' seats_2019.txt | wc -l
```
## List all the seats in NSW (just the seat names).  
```
grep 'NSW$' seats_2019.txt | awk '{print $1}'
```
## Take your answer from (2) and sort it into a file NSW_sorted.txt  
```
grep 'NSW$' seats_2019.txt | awk '{print $1}' | sort > NSW_sorted.txt
```
## Sort the seats_2019.txt file by electorate name into a new file sorted_seats.txt
```
sort -k1,1 seats_2019.txt > sorted_seats.txt
```
## Create a file called seats_by_state.txt that lists all NSW seats, then VIC seats, then WA seats, then QLD seats, then SA seats, then TAS seats, then ACT then NT seats. Within each state or territory listing the seats should be in alphabetical order.
```
{
  grep 'NSW$' seats_2019.txt | awk '{print $1}' | sort
  grep 'VIC$' seats_2019.txt | awk '{print $1}' | sort
  grep 'WA$' seats_2019.txt | awk '{print $1}' | sort
  grep 'QLD$' seats_2019.txt | awk '{print $1}' | sort
  grep 'SA$' seats_2019.txt | awk '{print $1}' | sort
  grep 'TAS$' seats_2019.txt | awk '{print $1}' | sort
  grep 'ACT$' seats_2019.txt | awk '{print $1}' | sort
  grep 'NT$' seats_2019.txt | awk '{print $1}' | sort
} > seats_by_state.txt
```

# Harder Questions

Some of these questions might be able to be done in one line, others may require two or more or many lines. It is permitted to save [[data]] in temporary files etc.

## What seat is held by the smallest margin? Put the answer in a text file smallest.txt
```
sort -nk4 seats_2019.txt | head -n 1 | cut -d ' ' -f 1 > smallest.txt
```

## List the name, state and margin (in that order) of all seats held by the ALP. List them in alphabetical order by electorate name and put the result in the file ALP_electorates.txt
```
grep 'ALP' seats_2019.txt | sort -k1,1 | awk '{print $1, $2, $4}' > ALP_electorates.txt
```
## List the name, state, party and margin (in that order) of all seats not held by the major parties. List them in order of margin (i.e. smallest margin first) and put the result in the file non-major- parties-margin.txt
```
grep -v -E 'ALP|LIB|NAT|LNP|GRN' seats_2019.txt | sort -nk4 | awk '{print $1, $2, $3, $4}' > non-major-parties-margin.txt
```

## List the party, name, state and margin of the 20 electorates with the smallest margins. List them in order of margin (i.e. smallest margin first) and put the result in the file twenty_most_marginal_seats.txt
```
sort -nk4 seats_2019.txt | head -n 20 | awk '{print $3, $1, $2, $4}' > twenty_most_marginal_seats.txt
```

## List all the states and territories and the total number of electorates in each of them.
```
awk '{print $2}' seats_2019.txt | sort | uniq -c
```

## List the margin, party name and state of the 20 electorates with the largest margins. List them in order of margin (i.e. smallest margin first) and put the result in the file twenty_safest_seats.txt
```
sort -nrk4 seats_2019.txt | head -n 20 | awk '{print $4, $3, $2}' > twenty_safest_seats.txt
```

## Write a bash shell script where the user supplies the initials for the party as the first argument and the initials of the state or territory as the second argument. The script should then list the name and margins for all seats held by that party in that state.
```
#!/bin/bash
party="$1"
state="$2"

grep "$state$" seats_2019.txt | awk -v party="$party" '$3 == party {print $1, $4}'
```

## Take your answer from (7) and add error checking: 
- (a) If the number of arguments is incorrect print: Incorrect number of Arguments 
	- Usage :` get_seats.sh <party_name> <state>`
- (b) Check that the party initials are valid. If they are invalid print “Invalid Party” and exit. 
- (c) Check that the state initials are valid. If they are invalid print “Invalid State” and exit.
- (d) If your script has passed the error checking in (a), (b) and (c), but there are no actual electorates held for the party and state/territory supplied as arguments (for example there are no NAT members in WA) then the script should print:
	- No electorates held by `<party name`> in `<state/territory name>`
```
#!/bin/bash
if [ $# -ne 2 ]; then
  echo "Incorrect number of Arguments"
  echo "Usage: $0 <party_name> <state>"
  exit 1
fi

case $1 in
  ALP|LIB|NAT|LNP|GRN|CA|IND|KAP)
    ;;
  *)
    echo "Invalid Party"
    exit 1
    ;;
esac

case $2 in
  NSW|VIC|WA|QLD|SA|TAS|ACT|NT)
    ;;
  *)
    echo "Invalid State"
    exit 1
    ;;
esac

output=$(grep "$2$" seats_2019.txt | awk -v party="$1" '$3 == party {print $1, $4}')

if [ -z "$output" ]; then
  echo "No electorates held by $1 in $2"
else
  echo "$output"
fi
```