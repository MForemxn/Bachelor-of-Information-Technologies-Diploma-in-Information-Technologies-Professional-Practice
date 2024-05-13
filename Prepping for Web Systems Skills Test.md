[[Vim Skills Test Example Questions Answered]]
# Deleting Range Lines
## With Vim
```
:1,$-20d
```
## Without Vim
```
tail -n 30 constitution.txt > con2.txt
```
# Moving Lines
```
:100,200m $
```
# Find and Replace
## Single
```
sed -i 's/the/THE/g' con4.txt
```
## Upper and Lowercase
```
sed -i 's/[tT]he/THE/g' con5.txt
```