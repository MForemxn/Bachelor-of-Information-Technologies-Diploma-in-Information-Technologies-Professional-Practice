![[Week 2 Lab 1 (Contd) Part 2.pdf]]
# Task 4: Use John the Ripper to crack password
## 1: Password for Eric:
> using the command `john mypasswd`, I found Eric's password to be "Student!"
> ![[Screenshot 2025-02-27 at 9.23.22 am.png]]
## 2: What did you learn from the password cracking process? How to create a secure password?
> the most secure is a long password that does not contain short, common words. You want your password to have the least possible chance of showing up in a wordlist, and the length helps with incremental cracks. 
# Task5: SQL Injection
## 1: Login with Username as ‘123456789’ and the Password as a SQL command to gain unauthorized access.
> Using the command `' OR '1'='1` in the password field, and 123456789 as the username, I gained access
> ![[Screenshot 2025-02-27 at 9.39.35 am.png]]
> ![[Screenshot 2025-02-27 at 9.39.45 am.png]]


## 2: Login with both Username and Password as SQL commands.
> By using the following credentials, I was able to get in.
> 	Username: ' OR '1'='1
> 	Password: ' OR '1'='1
> 	![[Screenshot 2025-02-27 at 9.40.39 am.png]]
> 	![[Screenshot 2025-02-27 at 9.40.50 am.png]]


## 3: Find table details containing all the Usernames and Passwords through SQL injection.
> by using the following in the password field, i was able to export all the table information into a local file:
> `' OR '1'='1' INTO OUTFILE '/tmp/sql.txt'`
> ![[Screenshot 2025-02-27 at 9.49.45 am.png]]

## 4: Login into a specific user account by extracting the username and password from the table.
> i found the following credentials in the screenshot above:
> username: 128391
> password: abcd1234


