48730/32548, Cyber Security Lab 1, Part 1

Informa on Gathering and Extrac ng Unencrypted Data

The Tasks included in Lab – 1, Part 1 do not require VMware Worksta on or VMware

Fusion, Task 1 and Task 2 will require Wireshark. Wireshark is an open-source Packet

analysing so ware. Wireshark can be downloaded from

h ps://www.wireshark.org/download.html . Lab 1, Part 1 should be submi ed along with

Lab 1, Part 2 in Week 3 (refer to assignment sec on of the course on Canvas for the Due

date). The assignment document should contain only ques ons from the lab manual, your

answers and screenshots to support your answers.

Task 1: Sniﬀ Login details from unencrypted HTTP

traﬃc:

Data transmi ed through HTTP is vulnerable to intercep on by malicious actors, who can

poten ally eavesdrop on unencrypted packets and extract sensi ve informa on such as

images, login creden als, or personal data. Therefore, cybersecurity professionals employ

specialised tools and methodologies, like packet sniﬀers, to analyse network traﬃc, iden fy

poten al security gaps, and implement robust encryp on measures, safeguarding data

integrity and preserving user privacy.

In this prac cal lab, you will acquire fundamental informa on gathering skills using

Wireshark. Through the analysis of captured network packets, you'll explore the extrac on

of valuable data transmi ed over unencrypted HTTP connec ons. This hands-on experience

will equip you with essen al tools to iden fy and understand poten al security risks and

vulnerabili es, enhancing your exper se in cybersecurity informa on analysis.

Step 1:

a. Open Wireshark and make sure that promiscuous mode is enabled on all

interfaces.

b. Start the capturing of files.

c. Go to: h p://testphp.vulnweb.com/login.php

d. Enter your name as the login username and enter a “password123” as the password.

Make sure you hit the login bu on.Step 2:

a. U lise the search bar to locate the packet with the login informa on. [Hint: the

packet will be using HTTP protocol and will start with POST].

b. In Wireshark, locate the login details which are the username and the password

you have used for the unsecure website.

This will look like:

Hints:

Write frame contains "POST" in search bar of Wireshark to look for packet containing the

login informa on.

Ques on:

a. Submit a screenshot of the username and password from Wireshark.

Task 2: Extract an image form unencrypted HTTP

packet

Wireshark and similar network sniﬃng tools, oﬀers the ability to extract images from

unencrypted packets transmi ed via websites that use the HTTP protocol or other

unencrypted protocols. This capability allows experts to iden fy poten al vulnerabili es,

assess data leakage risks, and bolster network security, strengthening overall digitalresilience and ensuring the protec on of sensi ve informa on eﬀec vely. In prac ce experts

in industry use a number of tools to extract such informa on.

Steps:

You are tasked to extract the logo image of the same website

(h p://testphp.vulnweb.com/login.php) we have entered previously. Use the same packets

captured from task 1.

a. Locate the GET packet that contains the logo.gif raw data. You may u lise the search

bar similar to task 1.

Click on the packet with the image info, and go to file à Export Objects à HTTP…

b. c. Download the object that contains the logo.gif data.

Ques on:

a. Take a screenshot of the object of the image ‘logo.gif’ in the HTTP object list.

Task 3: Informa on Gathering

An ethical hacker is a computer and networking expert who systema cally a empts

to penetrate a computer system or network on behalf of its owners for the purpose

of finding security vulnerabili es hat a malicious hacker could poten ally exploit.Passive informa on gathering

A lot of important informa on can be passively gathered and subsequently used in a

direct a ack or to reinforce other a acks targeted at an organiza on. Some Web

Hos ng service providers provide Website analysis that may pose a risk to security of

an organiza on.

Ac ve informa on gathering

Unlike passive informa on gathering, ac ve informa on gathering collects the most

updated and current data. The informa on collected in this manner can be

influenced by various factors that include your current loca on, ISP, network

constraints, etc. This informa on can be used to inves gate the current state of the

target.

Zenmap

Zenmap or Nmap ("Network Mapper") is a free and open source (license) u lity for

network discovery and security audi ng. It is useful for tasks such as network

inventory, managing service upgrade schedules, and monitoring host or service

up me. Read more at www.nmap.org

NetCra

Netcra is an internet services company providing internet security services,

including an fraud and an -phishing services, applica on tes ng, code reviews, and

automated penetra on tes ng. It also provides research data and analysis on many

aspects of the internet. Netcra has explored the internet since 1995 and is a

respected authority on the market share of web servers, opera ng systems, hos ng

providers, ISPs, encrypted transac ons, electronic commerce, scrip ng languages

and content technologies on the internet. Visit www.netcra .com

Ques ons:

Using Zenmap and/or NetCra to scan www.uts.edu.au. Gather and compare the

informa on collected.

1. 2. What is its Ip address?

Type the IP address in the browser to access the webpage, explain your

observa ons.

3. Who is the IP owner?

4. What is the server’s opera ng system?

5. What type of web server is being used?

6. What is its server-side scrip ng technology?

7. Can you find the email for the domain admin of this website for a possible

phishing a ack?

8. 9. What is the ‘Reverse DNS’ for the website?

Who is the domain registrar?

10. What is nameserver organiza on?11. What company is hos ng the website?

11. Where is the hos ng company geologically located?

Informa on gathering can be achieved using various open-source intelligence tools.

A list of such possible tools can be found at: h ps://securitytrails.com/blog/osint-

tools As always, use the tools within a controlled safe environment.48730-32548, Cyber Security Week-8

**Understanding Social Engineering Attacks/Phishing Attacks and Mobile**

**Operating Systems Lab (Linux Emulator for Android and iOS)**

**Ethical Guidelines:**

Always ensure you have permission to gather information on a website.

Use this task for educational purposes or in a controlled lab environment.

 **Lab Overview**

The learning objective of this lab is to gain practical experience and insight into Social

Engineering Attacks, with a specific focus on phishing attacks. Participants will explore the

tactics used by attackers to exploit human psychology and manipulate individuals into

divulging sensitive information or performing actions that compromise security. They exploit

human vulnerabilities rather than technical flaws to gain unauthorized access to systems or

data. Moreover, we will emulate Linux environments on our phones and perform information

gathering. If you are an Android user, you must install **Termux**. If you are an iOS user, you

must install **iSH Shell**.

**Lab Environment Setup for Task 1**

 **Zphisher**

An automated phishing tool with 30+ templates. The features include the latest and updated

login pages, users friendly, multiple tunneling options, localhost, Cloudflared, localXpose,

mask URL support, and Docker support.

**Lab Environment Setup for Task2**

**a.** **Termux (Available for Android OS):**

Termux is a powerful terminal emulator for Android OS. It offers a Linux environment

on Android devices without the requirement of root access. Termux offers the following

features:

1. 2. 3. 4. **Terminal Emulation:** supports bash, zsh etc.

**Package Management:** additional packages can be installed using the package

manager via APT.

**Development:** ideal for developers as languages such as Python, Ruby, Node.js and C

are supported. Codes can be compiled with Clamg, make and gdb.

**Remote Access:** remote computers or servers can be connected via SSH.

**Installation and Setup:**

1. Termux requires following requirements for installation:

a. **Android version:** Android 7.0 or above.

b. **Permission:** Storage and Network access should be permitted.

2. 3. Termux can be downloaded from Playstore, F-Droid and GitHub.

Install Termux on your phone by giving the required permission.

The lab is based on documents available on Internet sources.48730-32548, Cyber Security Week-8

4. 5. 6. 7. After Installation, open the app.

Update the Packages by entering “apt update”.

Upgrade the installed packages by entering “apt upgrade”.

Enable storage access by entering “termux-setup-storage” and give the required

permissions to the application.

For more information, refer to How to install and Setup Termux on Android: A beginner's

guide (hashnode.dev) .

**b.** **iSH (Available for iOS):**

iSH allows you to emulate Linux shell on iOS devices. It offers an lightweight Alpine

Linux environment using usermod x86 emulation to run Linux binaries on iOS. iSH

offers following features:

1. 2. 3. 4. **BusyBox Utilities**: iSH includes BusyBox, which combines manu common Unix

utilities into single executables.

**Package Management:** Software packages can be installed and managed within iSH

environment with the help of package manager via APK.

**File System Access:** files and directories can be managed with the help of iSH.

**Open-sorce:** iSH is open-source and its development is active on GitHub.

**Installation and Setup:**

1. iSH can be downloaded from the AppStore on iPhone or iPad.

2. Once installed, open iSH app.

3. Update the Packages by entering “apk update”.

4. Upgrade the installed packages by entering “apk upgrade”.

For more information, refer to iSH - An iOS Linux Shell for Your iPhone or iPad (bleepingcomputer.com)

.

The lab is based on documents available on Internet sources.48730-32548, Cyber Security Week-8

**Lab Tasks 1: For Social Engineering Attack/Phishing attack Using Zphiser**

In this lab, you need to conduct social engineering attacks using social media cloning. The

attacks are performed on Windows operating systems. However, you can also conduct the same

attack on the other operating system and compare the observations after lab classes. You are

supposed to use all the different tools for the experiments. However, the required tasks are

mentioned as follows:

**Steps:**

1. 2. Go to this link https://github.com/htr-tech/zphisher?tab=readme-ov-file

Scroll down find “Open in Google cloud shell”, and click it.

3. 4. Use any Google account. Confirm as “trust repo” and click **Confirm**.

Once it is successfully compiled you find the below interface

5. For installation: Just, Clone this repository –

git clone --depth=1 https://github.com/htr-tech/zphisher.git

6. Now go to cloned directory and run zphisher.sh –

$ cd zphisher

$ bash zphisher.sh

7. 8. Now the environment ready to use.

Select the template, select the localhost, select the port, then go to the localhost link,

and then check.

**Challenge:**

1. 2. Create a different fake site (i.e. any).

Try to create a phishing email (**Optional**)

For details: https://caniphish.com/email-phishing-simulator

 **(Screenshot required)**

1. Provide your **_“UTS email”_** as the login username and enter **_“Student-ID”_** as the

password.

The lab is based on documents available on Internet sources.48730-32548, Cyber Security Week-8

 **Please shortly summarize what you get from this lab and try to answer**

**the following question below (****mandatory****):**

1. What happens when I get a phishing link and input my details?

2. How to defend yourself?

**Task 2 (For Android User):** **Information Gathering for Any Website Using**

**Termux.**

**Steps:**

 Check your version

uname -a

 Update Termux Packages: First, ensure that all your packages are updated:

pkg update && pkg upgrade

You need to give permission to download some dependencies

Install python

 Install Necessary Tools: Install the following packages to perform information

gathering:

 **nslookup:** For gathering DNS information.

 **Whois:** To gather domain information.

 **curl:** To identify technologies used on a website.

 **Wget:** To download files or pages from a website (optional)

To install tool use

pkg install <name of the tool>

The lab is based on documents available on Internet sources.48730-32548, Cyber Security Week-8

Do the same process to install other tools.

 Perform a WHOIS Lookup: A WHOIS lookup provides information about the domain

name owner, IP address, and other registration details.

whois example.com (Screenshot required)

Replace example.com with the target website. This command will return details like

the domain registrar, registration dates, and contact information (if publicly

available).

 Use Nslookup for DNS Information: Termux supports the nslookup command, which

is useful for DNS querying.

nslookup example.com (Screenshot required)

This command will perform a basic SYN scan. It will help you determine which ports

are open and the types of services running on the server.

 Use Curl to Fetch HTTP Headers: Curl is a powerful tool that can be used to fetch

HTTP headers and see what technologies and security measures the website uses

(e.g., server type, HTTP methods, etc.).

curl -I example.com (Screenshot required)

This will return information about the platform (e.g., WordPress, Apache, PHP) that

the website uses.

 Download a Webpage Using Wget: You can download a webpage’s source code to

analyze it further.

wget http://example.com (Screenshot required)

This downloads the HTML page, which you can then examine for comments,

metadata, or links.

**Task 2: (For iPhone User): Information Gathering for Any Website Using**

**iSH**

The lab is based on documents available on Internet sources.48730-32548, Cyber Security Week-8

 Launch iSH and Update the System: Once you have the iSH shell up and running,

the first step is to update the system and install necessary tools**.**

Run the following command to ensure everything is up-to-date:

apk update && apk upgrade

 Install Basic Tools for Information Gathering: iSH supports apk, the

package manager for Alpine Linux, which allows you to install basic

tools like whois and wget.

Install Whois (for domain information):

apk add whois

Install Wget (for web page download):

apk add wget

 Install Nmap (for port scanning and network mapping): Nmap is not available directly

in the Alpine repositories on iSH, but if you have a separate device running Nmap (or

want to use a cloud VM), you can use it alongside iSH.

 Install Curl (to check website headers and response):

apk add curl

 Perform a WHOIS Lookup: WHOIS can provide details about the domain name,

including registrar information, registration dates, and other publicly available

information.

whois example.com (Screenshot required)

Replace example.com with the target website. This will return information like the

domain owner, registration dates, and DNS details.

 Run Wget to Download a Webpage: You can use wget to download the homepage or

specific pages of the target website for offline analysis. (optional)

wget http://example.com (Screenshot required)

 Use Curl to Fetch HTTP Headers: Curl is a powerful tool that can be used to fetch

HTTP headers and see what technologies and security measures the website uses

(e.g., server type, HTTP methods, etc.).

curl -I http://example.com (Screenshot required)

 This will return HTTP headers such as:

 Server: Tells you the web server software (e.g., Apache, Nginx).

The lab is based on documents available on Internet sources.48730-32548, Cyber Security Week-8

 X-Powered-By: Provides information about the technology stack (e.g., PHP).

 Content-Type: Shows the type of data being served (e.g., HTML, JSON, etc.).

 Use Nslookup for DNS Information: iSH supports the nslookup command, which is

useful for DNS querying.

nslookup example.com (Screenshot required)

This will return the IP addresses and DNS details associated with the domain,

allowing you to understand its network configuration.

**Example Workflow:**

 First, run a **WHOIS** lookup to get basic information about the domain:

whois example.com

 Next, use **nslookup** to get the DNS information for the domain:

nslookup example.com

 After that, use **curl** to fetch HTTP headers and analyze the server and technology

stack:

curl -I http://example.com

 Finally, download the webpage using **wget** for further analysis:

wget http://example.com

(Using Cloud Servers: You can combine iSH with a VPS (Virtual Private Server) running

Linux for a more complete toolset.)

References:

1. Github - Termux APP

2. ish an ios Linux shell for your iPhone or iPad

3. iSH Shell | Hacker News

4. Termux Installation - YouTube

5. how to install and setup Termux on android a beginner’s guide

6. how to use Termux as a beginner

**Alternative way (Optional)**

**Alternative Method (Not mandatory for submission)**

To conduct this lab, we do not need a virtual environment, this task can be done with any

operating system such as Windows, MacOS, and Linux. The tools being used for this lab are

Namecheap, 000webhost, basic PHP script, Notepad++, and social media.

The lab is based on documents available on Internet sources.48730-32548, Cyber Security Week-8

**For Social Engineering Attack/Phishing attack**

 **Namecheap**

“Namecheap, an ICANN Accredited Domain Registrar, offers domain registration,

web hosting, SSL certificates, and more. By using this site, you will be able to learn

about Homoglyphs or Homographs attacks. Homograph attacks exploit the visual

similarity between characters from different writing systems to deceive users. (Ref).

 **000webhost**

000webhost is a free web hosting service that enables individuals and small businesses

to create and manage websites without incurring expenses. Users can utilize

000webhost to host personal blogs, portfolios, and small business websites, among

other types of sites. The platform also supports popular web technologies like PHP and

MySQL, allowing for the development of dynamic and interactive web pages (Ref).

 **POST PHP**

POST PHP is a server-side scripting language commonly used for processing form

data submitted by a web browser. When a user fills out a form on a website and submits

it, the data is sent to the server using the HTTP POST method. POST PHP scripts are

crucial components of phishing websites because they enable attackers to intercept and

process the data entered by victims. By crafting PHP scripts to handle form

submissions, attackers can capture the information submitted by users and store it on

a server under their control. They can perform actions such as logging the stolen

information, sending it to remote servers, or automatically redirecting users to

legitimate websites after capturing their data to avoid detection (Ref ).

 **Social Media Cloning**

In phishing attacks targeting social media platforms, attackers often create clones or

replicas of legitimate social media websites or apps to deceive users into divulging

their login credentials and other sensitive information.

**Step 0: Create a homograph sample**

These attacks exploit visual similarities between characters in different alphabets (e.g., Roman

and Cyrillic). By using similar-looking characters, attackers create deceptive URLs or login

pages to trick victims into revealing sensitive information (Ref). These rely on URLs that look

very similar to the real website. However, this is an optional task the reason for this task is to

understand the concept of homograph attack.

“faecbook.com” (fake) vs. “facebook.com” (legitimate)

“instaqram.com” (fake) vs. “instagram.com” (legitimate)

**Sub-Steps:**

1. Create or buy a Domain name (Optional), based on your selective social media, but in

this lab, you do not have to buy the domain name.

**Step 1: Creating a phishing website**

The lab is based on documents available on Internet sources.48730-32548, Cyber Security Week-8

000webhost can be used to execute social engineering attacks in many ways. Firstly, they could

construct deceptive phishing websites, mimicking legitimate login pages of banks or email

services, where unsuspecting users might input their credentials, unknowingly providing them

to the attacker. Another method involves malicious redirects; the attacker might create a

seemingly harmless website on 000webhost but redirect visitors to malicious sites without their

knowledge. Furthermore, they might exploit popular social media platforms by hosting

phishing pages to entice users into disclosing their login credentials (Ref). In this task, you

need to create a phishing site. Remember, ethics matter. Use your knowledge for positive

purposes, such as securing systems and educating others about cybersecurity.

**Sub-Steps:**

1. 2. 3. 4. Create an account using your email address.

Select a website name based on the selected social media.

Provide your website name, and confirm with your password.

Once you created the website, go to the file > manager and Select Upload site.

Prepare relative documents, with the following next task.

**Step 2: Creating a POST.PHP file to capture sensitive information**

We will use the POST PHP file to capture and manipulate sensitive information submitted by

unsuspecting users. POST PHP scripts are crucial components of phishing websites because

they enable attackers to intercept and process the data entered by victims. By crafting PHP

scripts to handle form submissions, attackers can capture the information submitted by users

and store it on a server under their control.

**Sub-Steps:**

1. Create a file with the name POST.PHP, and copy the below code.

<?php

header(); // Fixed the header function call

$handle = fopen();

for each ($_POST as $variable => $value) {

// Removed invalid characters "[" and "in" and fixed the path

fwrite($handle, $variable . " - " . $value .

"\r\n");

}

fwrite($handle,

"\r\n");

fclose($handle);

exit;

?>

2. 3. Inside the PHP file “header (); input – ‘Location: https://www.linkedin.com/’.

Then $handle = fopen(“”); Create a txt file as “username.txt”, “a” where the user input

details will be stored.

The lab is based on documents available on Internet sources.48730-32548, Cyber Security Week-8

**Step 3: Social Media Cloning.**

In phishing attacks targeting social media platforms, attackers often create clones or replicas

of legitimate social media websites or apps to deceive users into divulging their login

credentials and other sensitive information. In this lab, we will choose popular social media

platforms such as LinkedIn. The process of creating social media cloning is as follows:

**Sub-Steps:**

1. 2. 3. We choose LinkedIn, and browse LinkedIn on your browser.

Type **_Ctrl+Shift+C_** or **_Ctrl+U_** to open source code, select source code **_Ctrl+A_**, copy

**_Ctrl+C_** (all HTML code), and paste them into **_Notepad++._**

In Notepad++, type, Ctrl+F, search box type _“action”_ find the login link, and rename

it with _Post. PHP._

4. Again, find the text and remove it from the data, this time also remove _“d21-sign-in-_

_form”_

5. Then, once completed save it as, the file name**, “****_index.html_****”**

**Step 4- Uploading the files.**

This time, you have to upload the “POST.PHP” and “index.html” files on the “000webhost”

file manager, that we completed in **Step1.**

1. 2. 3. 4. 5. Upload the “POST.PHP” and “index.html” files on “000webhost”

Go back to the Dashboard copy the _URL_ and send the link to the victim

Once the victim clicks the link it will be redirected to the fake page which will look

like the original site

Once the victim inputs their credentials, the email and password are saved on the

**_“000webhst”_** site and the victim will be redirected to the original LinkedIn site.

You can find the victim details in the following **_“usernames.txt” file._**

The lab is based on documents available on Internet sources.48730-32548, Cyber Security Week-8

The lab is based on documents available on Internet sources.a. For Navigating the File System:

S. No. Command Function 1. cd To change the working directory 2. ls To list the content of the directory 3. pwd To print the current location. b. To Read files:

Example

cd cyber

To Navigate from the

current work directory to

its subdirectory

cd /etc/network/interfaces

To Navigate to the

‘interfaces’ directory,

The full address is required

when the folder is not a

part of the current working

directory.

cd ..

To Navigate to the

directory that is one level

above the current working

directory.

Ls

To list the content of the

current working directory

ls etc/network/interfaces

To list the content of

‘interfaces’ directory.

ls -a

To list all files including

the hidden files

ls -l

To display permissions to

files and directories in the

current working directory

pwdS. No. Command 1. cat c. To manage the file system:

S. No. Command 1. cp 2. mkdir 3. mv 4. nano 5. rm 6. rmdir Function To display the content of the file Function To copy file or folder to a new

location

To make a folder To move file or folder to a new

location.

To edit or create with a text editor To delete a file To delete/remove a folder Example

cat cyber.txt

To display the content of

the ‘cyber.txt’ file.

Example

cp cyber.txt /home/cyber

To copy the file from the

current working directory

to the ‘cyber’ directory.

mkdir cyber

To create a folder named

‘cyber’

mkdir /home/cyber/cyber

To create a folder named

‘cyber’ inside the folder

cyber.

mv cyber.txt /home/cyber

To move the file from the

current working directory

to the ‘cyber’ directory

mv cyber.txt cybersec.txt

To rename a file

nano cyber.txt

To open/create a file

named ‘cyber’ in text

editor

rm cyber.txt

To delete a file named

‘cyber.txt’

rmdir cyber

To delete a folder named

‘cyber’

rmdir /home/cyber/cyberTo delete a folder named

‘cyber’ inside the folder

cyber.

7. touch To create a new file touch cyber.txt

To create a file named

‘cyber.txt’ in the current

working directory.

touch /home/cyb/cyb.txt

To create a file named

‘cyb’ inside the folder

named ‘cyb’.

8 gedit To open text editor gedit file.txt

To open the file named

‘file.txt’.

d. To Manage User and Permissions:

S. No. Command Function Example

1. sudo To run a command with

administrative or root

permissions

sudo Wireshark

To open the application named

‘Wireshark’ using the command line

interface (CLI)

2. sudo useradd To add a new user sudo useradd cybadm

To add a user named ‘cybadm’

3. sudo userdel To delete a user sudo userdel cybadm

To delete the user named ‘cybadm’.

4. sudo usermod To modify existing user

account

sudo usermod -l cybersec cyberlab

To change the name of the existing

user account ‘cybersec’ to ‘cyberlab’.

e. To get help in Linux:

S. No. Command Function Example

1. man To display information about the

command and how it works.

man chown

To display information

about chownf. Network Commands

S. No. Command Function Example

1. ping To check connectivity

between computers

ping 10.0.2.8

To check whether there is a

connectivity with the computer

of IP address 10.0.2.8 .

2. ifconfig To print information about

network interfaces.

ifconfig

To print network interface

information

ifconfig -s eth0

To print network interface

information for the interface

‘eth0’

3. traceroute To track a packet’s hop to

its destination

traceroute google.com

To track packet’s path when it

hops from one computer to

another over the network

4. dig To display DNS

information

dig google.com

To display DNS information of

Google

5. arp To display ARP cache arp –a

To display IP addresses

mapped with their respective

MAC addresses.

6. ssh username@<IP

address>

To establish an SSH

connection.

ssh cyber@10.0.2.X

To connect the remote device

‘cyber’. 10.0.2.X is the IP

address of the remote host.

7. telnet <IP address> To establish a telnet

connection

telnet 10.0.2.X

To connect to the remote host

with address 10.0.2.X .

For more informa+on, you can refer to the following websites:

1. 2. Linux Network Commands Cheat Sheet | phoenixNAP KB

Top 60 Linux Commands for Beginners + Free Linux Cheat Sheet (hos+nger.com)48730-32548, Cyber Security Week2-Lab1 (Part 2)

48730/32548, Cyber Security

Lab1, Part 2

Password Cracking using John the Ripper and SQL Injection

The Tasks included in Lab 1, Part 2 require VMware Workstation or VMware

Fusion. For this session, only Cybersec-Server image is required.

Lab 1, Part 2 should be submitted along with Lab 1, Part 1 in Week 3 (refer to

assignment section of the course on Canvas for the Due date). The assignment

document should contain only questions from the lab manual, your answers

and screenshots to support your answers.

Password Cracking using John the Ripper

Introduction

John the Ripper is an Open-Source password security auditing and password recovery tool

available for many operating systems. It is one of the most popular password testing and

breaking programs. JtR autodetects the encryption on the hashed data and compares it

against a large plain-text file that contains popular passwords, hashing each password, and

then stopping it when it finds a match. JtR also includes its own wordlists of common

passwords for 20+ languages. These wordlists provide JtR with thousands of possible

passwords from which it can generate the corresponding hash values to make a high-value

guess of the target password. Since most people choose easy-to-remember passwords, JtR is

often highly effective even with its out-of-the-box wordlists of passwords.

We already have John the Ripper installed in our server, if you wish to download and install

JtR, you can go to Open wall’s Website here or from the Official John the Ripper Repo here.

Required resources: Cybersec-Server.

Task 4: Use John the Ripper to crack password

Step 1: Run John the Ripper.

a. To see a list of commands in JtR:

148730-32548, Cyber Security Week2-Lab1 (Part 2)

We can see the version we have is 1.8.0 and the usage of JtR. John the Ripper works in 3

distinct modes to crack passwords:

• Single mode: is the fastest and best mode if you have a full password file to crack.

• Wordlist mode: compares the hash to a known list of potential password matches.

• Incremental mode: is brute force mode that tries every possible character

combination to find a result.

b. Change to Documents directory, you will find “mypasswd” file, check the content of

the mypasswd.

This file includes user’s name and their encrypted password

Step 2: Recover Passwords.

a. Type the following command in terminal: cybersec-server@ubuntu:~$ john --show

mypasswd

2b. c. 48730-32548, Cyber Security Week2-Lab1 (Part 2)

As shown above, there are no cracked passwords at this point.

At the command prompt, enter john mypasswd to use single crack mode. You can see

the password for cybersec-server is cracked instantly, user Alice and Bob’s password

are cracked in seconds. cybersec-server@ubuntu:~$ john mypasswd

Password cracking is CPU-intensive and a lengthy process, so the time it takes will

depend on your system and the strength of the password. It can take days. If the

password is not cracked for days with a powerful CPU, it is an incredibly good

password.

Use Ctrl-C to abort the program after couple of minutes, then use john –show to check

the same file again, we find there are 3 passwords cracked, 2 left.

JtR uses a predefined dictionary called password.lst(in /usr/share/john directory) with

a standard set of predefined “rules” for handling the dictionary and retrieves all

password hashes of both md5crypt and crypt type, we have copied this file to our

working directory and modified it.

Now let us use wordlist mode to crack the remaining passwords. This time user Eve’s

password is cracked instantly, that is because the password’s file include this password.

The results below display the passwords for each account.

348730-32548, Cyber Security Week2-Lab1 (Part 2)

Mangling is a pre-processor in JtR that optimizes the wordlist to make the cracking

process faster. Use the –rules parameter to set the mangling rules if you wish.

Challenge:

1) 2) Can you find out the password for user Eric? (Screenshot required)

____________________________________________________

What did you learn from the password cracking process? How to create a secure

password?

_______________________________________________________________

448730-32548, Cyber Security Week2-Lab1 (Part 2)

SQL Injection

SQL injection is one of the most common vulnerabilities in web applications today. It is one of

the web hacking techniques that is immensely popular and dangerous because successful SQL

injection could allow hackers to compromise your servers, networks, personal computers, and

confidential data. According to The Open Web Application Security Project Report released in

2017, SQL Injection is amongst the number 1 risks out of top 10 security risks.

What is SQL Injection?

SQL injection is an attack injection technique that exploits vulnerability in SQL query via user’s

input data from client to the database layer of an application. This vulnerability exists in

custom Web application that lacks proper input validation, fails to use parameterized SQL

statements, and/or creates dynamic SQL with user-supplied data.

It is occurred when user input is incorrectly filtered for string literal escape characters

embedded in SQL statements or user input is not strongly typed and thereby unexpectedly

executed. Normally, attacker will test SQL injection by typing malformed SQL commands into

front-end Web application input boxes that are tied to database accounts to trick the

database into offering more access to information than the developer intended.

A successful SQL injection exploit can read sensitive data from the database, modify database

data, execute administration operations on the database, and recover the content of a given

file present on the database file system and in some cases issue commands to the operating

system. This attack allows attackers to spoof identity, tamper with existing data, cause

repudiation issues such as voiding transactions or changing balances, destroy the data and

become administrators of the database server.

Task5: SQL Injection

Resource Required: Cybersec-Server

You need to use the browser and open localhost to perform this lab.

548730-32548, Cyber Security Week2-Lab1 (Part 2)

Login bypass is without a doubt one of the most popular SQL injection techniques. This lab will give

explanations and a little deep understanding with some new flavours of bypasses.

In the image above, “ ‘ “ was written in username and password was kept empty. When the

Submit button was clicked, it showed an error message. From the error message, we can

determine that MySQL is being used as the database.

Let us go to the Linux Terminal Window and enter the following command to open the source

file:

648730-32548, Cyber Security Week2-Lab1 (Part 2)

Note: Please work through the information in the following link to understand how SQL

query works:

• https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/

• https://sechow.com/bricks/docs/login-1.html

Refer to the links provided above to perform the following tasks:

1. Login with Username as ‘123456789’ and the Password as a SQL command to

gain unauthorized access.

2. Login with both Username and Password as SQL commands.

3. Find table details containing all the Usernames and Passwords through SQL

injection.

4. Login into a specific user account by extracting the username and password from

the table.

Provide screenshots to support your answers, also mention the SQL commands used

to gain unauthorized access.

Based on your Observations from the above task, suggest defence in your lab

submission document.

7Cryptography - SSL - X509 Cer ficate

Lab Overview

The main objec ve for this lab is to gain first-hand experience on applica ons of cryptography in cyber

security and to get familiar with the concepts in the Public-Key encryp on and Public-Key Infrastructure

(PKI).

Introduc on to SSL

The following is simplified view of how SSL is implemented and what part the cer ficate plays in the

en re process.

Normal web traﬃc is sent unencrypted over the Internet. That is, anyone with access to the right tools

can snoop all that traﬃc. This can lead to problems, especially where security and privacy is necessary,

such as in credit card data and bank transac ons. The Secure Socket Layer is used to encrypt the data

stream between the web server and the web client (the browser).

SSL makes use of asymmetric cryptography, commonly referred to as public key cryptography (PKI). With

PKI, two keys are generated, one public, one private. Anything encrypted with either key can only be

decrypted with its corresponding key. Thus, if a message or data stream were encrypted with the server's

private key, it can be decrypted only using its corresponding public key, ensuring that the data only could

have come from the server.

If SSL u lizes public key cryptography to encrypt the data stream traveling over the Internet, why is a

cer ficate necessary? The technical answer to that ques on is that a cer ficate is not really necessary -

the data is secure and cannot easily be decrypted by a third party. However, cer ficates do serve a crucial

role in the communica on process. The cer ficate, signed by a trusted Cer ficate Authority (CA), ensures

that the cer ficate holder is really who he claims to be, and his public key is the one included in the

cer ficate. Without a trusted signed cer ficate, the data may be encrypted, however, the party you are

communica ng with may not be whom you think. This is guaranteed through the message digest in the

cer ficate. Without cer ficates, impersona on a acks would be much more common.

You can either buy an SSL (X.509) cer ficate or generate your own (a self-signed cer ficate) for tes ng

or, depending on the applica on, even in a produc on environment. If you self-sign your cer ficates you

may save money. Bad news is if you self-sign your cer ficates nobody but you and your company

(perhaps) may trust them. In today’s lab we generate a self-signed cer ficate, and we implement SSL on

a website.

OpenSSL

OpenSSL is an open-source project that provides a robust, commercial-grade, and full-featured toolkit

for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols. It is also a general-

purpose cryptography library. More informa on is available at OpenSSLEnvironment Setup

In order to perform task 1, you are first required to download the “image.bmp” and “Text_file.txt” from

UTS Canvas (Week 4 Lab Handout) onto Cybersec-Server.

Lab Tasks

Task 1: Basic encryp on and decryp on using OpenSSL

In this task, you will use various encryp on algorithms and modes on the Text File and Image File provided.

You are required to save each type of encrypted file separately and observe if each encryp on technique

gives the same or diﬀerent results. Please take screenshots to show your observa ons (as the image file

are large, only list your observa ons for it. The task is to be performed using a Terminal.

You have been provided with two files (image.bmp and Text_file.txt) in Week-4 Lab Handout on Canvas.

Download the files and make a copy of those files on Cybersec-Server.

You can begin by reading the manual for openssl and enc by typing the following in the terminal:

 **man openssl enc**

You can get the list of encryption standard (Cipher Type) by typing the following in the terminal:

 openssl enc --help

Use the same secret key and cryptographic method to decrypt the cipher text file to original plain

text/image.

HINT: You can use the following command to encrypt/decrypt a file.

openssl enc <cipher-type> -e/-d -in <> -out <> -K <> -iv <>

o **-e** encrypt

o **-d** decrypt

o **-in** input file

o **-out** output file

o **-K** secret key

o **-iv** initialization vector

o <**cipher-type>** some types include:

• Cipher Block Chaining (**CBC**)

• Cipher Feedback (**CFB**)

• Electronic Codebook (**ECB**)

• Output Feedback (**OFB**)

Ques ons:

**1.** Perform two types of encryp ons on “Text_file.txt” using diﬀerent cipher types and compare the

outputs. Men on the commands used for encryp on and decryp on along with screenshots of the

encrypted text. (use ‘cat <filename>’ to open the encrypted text)**2.** Perform two types of encryp ons on “image.bmp” using diﬀerent cipher types and compare the

outputs. Men on the commands used for encryp on and decryp on along with screenshots of the

encrypted image. (use ‘sudo nano <filename>’ to open the encrypted image)

Task 2: Become a Cer ficate Authority (CA)

A Cer ficate Authority (CA) is a trusted en ty that issues digital cer ficates. The digital cer ficate cer fies

the ownership of a public key by the named subject of the cer ficate.

A number of commercial CAs are treated as root CAs; VeriSign is the largest CA at the me of wri ng. Users

who want to get digital cer ficates issued by the commercial CAs need to pay those CAs.

In this lab, we need to create digital cer ficates, but we are not going to pay any commercial CA. We will

become a root CA ourselves, and then use this CA to issue cer ficate for others (e.g. servers). In this task,

we will make ourselves a root CA, and generate a cer ficate for this CA.

Unlike other cer ficates, which are usually signed by another CA, the root CA’s cer ficates are self-signed.

Root CA’s cer ficates are usually pre-loaded into most opera ng systems, web browsers, and other

so ware that rely on PKI. Root CA’s cer ficates are uncondi onally trusted.

Step 1: The Configura on File

In order to use OpenSSL to create cer ficates, you must have a configura on file. The configura on file

usually has an extension “**.cnf**”. It is used by three OpenSSL commands: **ca, req** & **x509**.

Before ge ngthe folder. Use:

 started, let’s create a directory on our Desktop to store the files for the CA and move into

 **mkdir /Desktop/CA**

 **cd /Desktop/CA**

The config file of openssl.cnf can be copied using the following command:

 **cp /usr/lib/ssl/openssl.cnf ./**

Note: “./”refers to the current directory

As we want our copy of the **openssl.cnf** file to run independently of the one in the system, we need

to change/modify the file. To do so, use a editor ($ sudo gedit <filename>) and change the highlighted

**dir** path as shown:

**dir =./** # Name of your local directory.48730-32548, Cyber Security Week-4

**certs = $dir/certs** # Where the issued certs are kept.

**crl_dir =$dir/crl** # Where the issued crl are kept.

**new_certs_dir** **=$dir/newcerts** # Default place for new certs.

**database =$dir/index.txt** # Database index file.

**serial =$dir/serial** # The current serial number.

Important: Make sure to change the **dir** value to the path of your **openssl.cnf** file to ‘**./**’.

As specified in the configuracreate them use:

 **mkdir crl certs newcerts**

 **touch index.txt**

 **echo '01' > serial**

 on file, we also need some files and folders to store informa on. To

**Screenshot Required (1): list of files and folders created till now. (enter ‘ls’ on your terminal)**

Step 2: Cer ficate Authority (CA)

As we described before, we need to generate a self-signed cer ficate for our CA. This means that

this CA is totally trusted, and its cer ficate will serve as the root cer ficate. You can run the

following command to generate the self-signed cer ficate for the CA:

 **openssl req -new -x509 -keyout ca.key -out ca.crt -config**

**openssl.cnf**

You will be prompted for informa on and a password. Do not lose this password, because you will

have to type the passphrase each me you want to use this CA to sign cer ficates for others. You

will also be asked to fill in some informa on, such as the Country Name, Common Name, etc., use

the following details and keep in mind they are case-sensi ve.

Country Name (2 letter code) [AU]: **AU**

State or Province Name (full name) [Some-State]: **NSW**

Locality Name (eg, city) []: **SYD**

Organization Name (eg, company) [Internet Widgits Pty Ltd]:

**UTS**

Organizational Unit Name (eg, section) []: **FEIT**48730-32548, Cyber Security Week-4

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

Common Name (e.g. server FQDN or YOUR name) []:

**cybersec.com.au**

Email Address []: **root@cybersec.com.au**

The output of the command is stored in two files: **ca.key** and **ca.crt**. The file **ca.key**

contains the CA’s private key, while **ca.crt** contains the public-key cer ficate.

The **ca.key** is an encoded text file (also encrypted), so you will not be able to see the actual

content, such as the modulus, private exponents, etc. To see those, you can run the following

command:

 **openssl rsa -in ca.key -text**

**Screenshot Required (3):**

**1.** Command to generate the self-signed cer ficate for the CA.

**2.** Informa on given for genera ng the self-signed cer ficate.

**3.** List of files created ll now (enter ‘ls’ on the terminal).

Task 3: Create a Cer ficate for cybersec.com.au

Now, we become a root CA, we are ready to sign digital cer ficates for our customers. Our first

customer is a company called **cybersec.com.au**. For this company to get a digital cer ficate

from a CA, it needs to go through three steps.

Step 1: Generate public/private key pair. The company needs to first create its own public/private

key pair. We can run the following command to generate an RSA key pair (both private and public

keys). You will also be required to provide a password to encrypt the private key (using the AES-

128 encryp on algorithm, as is specified in the command op on). The keys will be stored in the

file **server.key**:

 **openssl genrsa -aes128 -out server.key 1024**

Step 2: Generate a Cer ficate Signing Request (CSR). Once the company has the key file, it should

generate a Cer ficate Signing Request (CSR), which basically includes the company’s public key.

The CSR will be sent to the CA, who will generate a cer ficate for the key (usually a er ensuring

that iden ty informa on in the CSR matches with the server’s iden ty). Please use

**cybersec.com.au** as the common name of the cer ficate request.48730-32548, Cyber Security Week-4

 **openssl req -new -key server.key -out server.csr -config**

**openssl.cnf**

You will be once again prompted for informa on and a password, use the following details, and

keep in mind they are case-sensi ve and should be same as the ones used before. 



Country Name (2 letter code) [AU]: **AU**

State or Province Name (full name) [Some-State]: **NSW**

Locality Name (eg, city) []: **SYD**

Organization Name (eg, company) [Internet Widgits Pty Ltd]:

**UTS**

Organizational Unit Name (eg, section) []: **FEIT**

Common Name (e.g. server FQDN or YOUR name) []:

**cybersec.com.au**

Email Address []: **root@cybersec.com.au**

Please enter the following 'extra' attributes

to be sent with your certificate request

A challenge password []: **< LEAVE BLANK >**

An optional company name []: **< LEAVE BLANK >**

It should be noted that the above command is quite similar to the one we used in crea ng the self-

signed cer ficate for the CA. The only diﬀerence is the **-x509** op on. Without it, the command

generates a request; with it, the command generates a self-signed cer ficate.

Step 3: Genera ng Cer ficates. The CSR file needs to have the CA’s signature to form a cer ficate.

In the real world, the CSR files are usually sent to a trusted CA for their signature. In this lab, we

will use our own trusted CA to generate cer ficates. The following command turns the cer ficate

signing request (**server.csr**) into an X509 cer ficate (**server.crt**), using the CA’s **ca.crt**

and **ca.key**:

 **openssl ca -in server.csr** **-out server.crt -cert**

**ca.crt -keyfile ca.key -config openssl.cnf**

**Screenshots Required (3):**

**1.** Command used genera on a Cer ficate Signing Request (CSR).

**2.** Informa on given for genera ng the Cer ficate Signing Request (CSR)..

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University48730-32548, Cyber Security Week-4

**3.** Files created ll now (enter ‘’ls’ on the terminal)

Task 4: Use PKI for Web Sites

In this lab, we will explore how public-key cer ficates are used by web sites to secure web

browsing. First, we need to get our domain name. Let us use **cybersec.com.au** as our domain

name. To get our computers recognize this domain name, let us add the following entry to

**/etc/hosts**. this entry basically maps the domain name **cybersec.com.au** to our localhost

(i.e., 127.0.0.1):

 **127.0.0.1 cybersec.com.au**

Once the hosts file has been updated, restart the system for the se ngs to take eﬀect.

Next, let us launch a simple web server with the cer ficate generated in the previous task.

**OpenSSL** allows us to start a simple web server using the **s_server** command:

Combine the secret key and cer ficate into one file

 **cp server.key server.pem**



**cat server.crt >> server.pem**

Launch the web server using **server.pem (Screenshot required)**

 **openssl s_server -cert server.pem -www**

By default, the server will listen on port **4433**. You can alter that using the **-accept** op on.

Now, you can access the server using the following URL **https://cybersec.com.au:4433/**

**.**

Most likely, you will get an error message from the browser. In Firefox, you will see a message like

the following:

“The owner of cybersec.com.au has configured their website improperly. To protect your

informa on from being stolen, Firefox has not connected to this website.”.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University48730-32548, Cyber Security Week-4

Had this cer ficate been assigned by VeriSign, we will not have such an error message, because

VeriSign’s cer ficate is very likely preloaded into Firefox’s cer ficate repository already.

Unfortunately, the cer ficate of **cybersec.com.au** is signed by our own CA (i.e., using

**ca.crt**), and this CA is not recognized by Firefox. Therefor we will do the following to include it.

Loading **ca.crt** into Firefox:

We can manually add our CA’s cersequence:

 ficate to the Firefox browser by clicking the following menu

**Menu -> Preference -> Advanced -> Certificates -> View**

**Certificates.**

You will see a list of cer ficates that are already accepted by Firefox. From here, we can import our

own cer ficate. Please import **ca.crt** and select the following op on: “Trust this CA to iden fy

web sites”. You will see that our CA’s cer ficate is now in Firefox’s list of the accepted cer ficates.

Now, point the browser to **https://cybersec.com.au:4433.** Please describe and explain

your observa ons.

Screenshots Required (3):

1. Launching the web server using ‘server.pem’

2. Screenshot of cer ficate manager showing the generated(Menu -> Preference -> Advanced -> Cer ficates -> View cer ficate for “cybersec.com.au”

 Cer ficates)

3. h ps://cybersec.com.au:4433 on your web browser a er the addi on of the cer ficate.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University48730-32548, Cyber Security Week-5

Understanding TCP/IP based Attacks

Lab Overview

The learning objective of this lab is to gain first-hand experience on TCP/IP vulnerabilities, as well as

attacks against these vulnerabilities. The vulnerabilities in the TCP/IP protocols represent a special genre

of vulnerabilities in protocol designs and implementations. They provide an invaluable lesson as to why

security should be designed in from the beginning, rather than being added as an afterthought. Moreover,

studying these vulnerabilities help students understand the challenges of cyber security and why many

cyber security measures are needed. Vulnerabilities of the TCP/IP protocols occur at several layers. This

lab is designed to learn them step-by-step.

Lab Environment Setup

To conduct this lab, we require all the three virtual machines: Server, Client and Attacker. The tools being

used for this lab are Wireshark/Tshark, Netwox/Netwag.

Netwox/Netwag

We need tools to send out network packets of different types and with different contents. We can use

Netwag to do that. However, the GUI interface of Netwag makes it difficult for us to automate our process.

Therefore, we strongly suggest that you use its command-line version, the Netwox command, which is

the underlying command invoked by Netwag.

Netwox consists of a suite of tools, each having a specific number. You can run the command as following

(the parameters depend on which tool you are using). For some of the tools, you have to run it with the

root privilege:

➢

netwox <number> [parameters ...]

If you are not sure how to set the parameters, you can look at the manual by issuing "netwox <number> --

help". You can also learn the parameter settings by running Netwag for each command you execute from the

graphic interface, Netwag actually invokes a corresponding Netwox command, and it displays the parameter

settings. Therefore, you can simply copy and paste the displayed command.

Wireshark Tool.

You also need a good network-traffic sniffer tool for this lab. Although Netwox comes with a sniffer, you

will find that another tool called Wireshark is a much better sniffer tool.

Both Netwox and Wireshark can be downloaded. If you are using our pre-built virtual machine, both tools

are already installed. To sniff all the network traffic, both tools need to be run with root privilege.

Tshark Tool.

tool for this lab.

It is a terminal based network packet analyzer. You also need a good command line network-traffic sniffer

The lab is based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

148730-32548, Cyber Security Week-5

Lab Tasks

In this lab, you need to conduct attacks on the TCP/IP protocols. You can use the Netwox or Netwag,

Wireshark, Tshark tools in the attacks. All the attacks are performed on Linux operating systems. However,

you can also conduct the same attack on the other operating system and compare the observations after

lab classes. You are supposed to use all the three Virtual Machines for the experiments.

To simplify the “guess” of TCP sequence numbers and source port numbers, we assume that attacks are

on the same physical network as the victims (Think of where such attacks may happen?). Therefore, you

can use sniffer tools to get that information. The following is the list of attacks that need to be

implemented and studied in this lab.

Before starting the task, disconnect the internet from the Server VM.

Task 1: SYN Flooding Attack

SYN flood is a form of DoS attack in which attackers send many SYN requests to a victim’s TCP port, but

the attackers have no intention to finish the 3-way handshake procedure. Attackers either use spoofed IP

address or do not continue the procedure. Through this attack, attackers can flood the victim’s queue that

is used for half-opened connections, i.e. the connections that has finished SYN, SYN-ACK, but has not yet

got a final ACK back. When this queue is full, the victim cannot take any more connection. Following figure

illustrates the attack.

The lab is based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

248730-32548, Cyber Security Week-5

The size of the queue has a system-wide setting. In Linux, you can check the system queue size setting

using the following command:

➢

sysctl -q net.ipv4.tcp_max_syn_backlog

You can use command netstat -na to check the usage of the queue, i.e., the number of half opened

connection associated with a listening port.

For this task, Netwag Tool 76 will be used to conduct the attack, and tshark tool to capture the packets.

Steps:

1. As SYN flood produces a lot of traffic in the VM due to high speed, Wireshark might crash. It is recommended to use “tshark” by entering “sudo tshark” on Terminal of the Client VM.

2. 4. 5. Questions:

Then go to Attacker VM and start Netwag by entering “sudo netwag” on the Terminal.

3. Select 76: Synflood.

Enter the details and click run it. (Screenshot required)

Observe the captured packets on Client VM. (Screenshot required)

1. 3. Observe the attack and take screenshots of the attack scenario.

2. Comment on your observation.

Categorize this attack in terms of severity and how it is linked to the DoS attack

The lab is based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

348730-32548, Cyber Security Week-5

Task 2: ARP cache poisoning

The ARP cache is an important part of the ARP protocol. Once a mapping between a MAC address and an

IP address is resolved as the result of executing the ARP protocol, the mapping will be cached. Therefore,

there is no need to repeat the ARP protocol if the mapping is already in the cache. However, because the

ARP protocol is stateless, the cache can be easily poisoned by maliciously crafted ARP messages. Such an

attack is called the ARP cache poisoning attack.

Normal Scenario:

Attackers may use spoofed ARP messages to trick the victim to accept an invalid MAC-to IP mapping, and

store the mapping in its cache. There can be various types of consequences depending on the motives of

the attackers. For example, attackers can launch a DoS attack against a victim by associating a non-existent

MAC address to the IP address of the victim’s default gateway; attackers can also redirect the traffic to

and from the victim to another machine, etc.

Attack Scenario:

The lab is based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

448730-32548, Cyber Security Week-5

For this task, Netwag Tool 80 is required to conduct the attack, and wireshark tool to capture the packets.

1. 6. HINTS: In this task, you need to demonstrate how the ARP cache poisoning attack work. In Linux we can

use the command arp -a to check the current mapping between IP address and MAC address.

Steps:

In Server VM, run “arp -a” on terminal to get the ARP Information (MAC Table). (Screenshot Required)

2. 3. 4. Open Netwag on Attacker VM by entering “sudo netwag” on the Terminal.

Select Tool 80: Periodically Send ARP Replies.

Add the fake MAC address and IP address and select the interface. (Screenshot

Required)

5. Click “Run It”.

Check the MAC Table on Server VM and look for the change in MAC address for IP address provided in the Netwag tool 80. (Screenshot required)

Questions:

1. Observe the attack and take screenshots of the attack scenario.

2. Comment on your observation.

3. Briefly describe how you can mitigate this attack.

Task 3: ICMP Redirect Attack

The ICMP redirect message is used by routers to provide the up-to-date routing information to hosts,

which initially have minimal routing information. When a host receives an ICMP redirect message, it will

modify its routing table according to the message.

Because of the lack of validation, if attackers want the victim to set its routing information in a particular

way, they can send spoofed ICMP redirect messages to the victim and trick the victim to modify its routing

table.

For this task, Netwag Tool 86 is required to conduct the attack, and wireshark tool to capture the packets.

HINTS: In this task, you should demonstrate how the ICMP redirect attack works, and describe the

observed consequence. To check the routing information in Linux, you can use the command route

Steps:

1. 2. 3. 4. 5. Open Wireshark on Client VM by entering “sudo wireshark” in the terminal.

Select the interface and set “icmp” as filter and click “Apply”.

Open a new terminal on Client VM and ping the server. (Screenshot required)

Go to Attacker VM, run Netwag using the terminal.

Select the interface and “spoofip: IP spoof initialization type”. Input the required IP

address into “gw: new gateway” and “src-ip: source IP address”. (Screenshot Required)

6. Click “Run It”.

7. Go back to Client VM, check the Wireshark output. (Screenshot Required)

The lab is based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

548730-32548, Cyber Security Week-5

Questions:

1. Observe the attack and take screenshots of the attack scenario.

2. Comment on your observation.

3. Briefly describe how you can mitigate this attack.

The lab is based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

6**Snort**

**Introduction**

Snort is the world’s most popular Open-Source Intrusion Prevention System (IPS),

capable of performing real-time traffic analysis and packet logging on IP networks.

Snort IPS uses a series of rules that help define malicious network activity and uses

those rules to find packets that match against them and generates alerts for users.

Snort has three primary uses: As a packet sniffer like tcpdump, as a packet logger for

network traffic debugging, or it can be used as a full-blown network intrusion

prevention system.

**Required resources:**

We are going to use **Cybersec-Server**, **Cybersec-Attacker VM** for this lab.

**Objective: Configure Snort rules**

**Step 1: start Snort on Cybersec-Server.**

1) Snort is already installed in our system, Snort configuration file is

/etc/snort/snort.conf, this is a big configuration file, we will change the ipvar

**HOME_NET** from “any” to our local network “10.0.2.0/24” sudo gedit

/etc/snort/snort.conf

2) To start Snort:

3) Check the version of Snort installed.**Step2** Check Snort rules.

Snort is a signature based IPS, and it defines rules to detect the intrusions. All rules

of Snort are stored under /etc/snort/rules directory. All the rules are about one line in

length and follow the same format.

The screenshot below shows all the rule files Snort has; you can download the latest

rules at https://www.snort.org/downloads .

**Step 3** Add Snort rule.

Snort rules are divided into two logical sections:

1. **Rule Header:** The rule header contains the rule's action (**e.g., alert, log,**

**pass, drop, reject, sdrop**), protocol, source and destination IP addresses

and netmasks, the source and destination ports information, and the direction

of the flow. The direction operators <> and -> show traffic direction which to

watch. Traffic can either flow in one direction or bi-directionally. The action can

be alert, log, pass, drop etc.2. **Rule Options:** The rule option section contains alert messages and

information on which parts of the packet should be inspected to determine if

the rule action should be taken. The rule options are separated using a

semicolon “;”. Rule option keywords are separated from arguments using a

colon “:”.

**Task 1: Adding a Rule for ICMP Packets.**

a. Use a text editor to add a rule to /etc/snort/rules/local.rules.

b. Add the following line into the local.rules file.

alert icmp any any -> any any (msg:"ICMP Packet found"; sid:1000001; rev:1;)

This rule defines that an alert will be logged if an ICMP packet from any IP address is

found. The signature ID (sid) should be greater than 1000000 for your own rules,

here we use rule ID 1000001. Rev:1 is the revision number; this option allows for

easier rule organization.

c. Restart the snort service after adding the rule.You can use sudo snort -T -i eth0 -c /etc/snort/snort.conf Note: You may receive [fail] message if there is error in the rule file, modify the rule

file then restart the service.

d. e. to check the configuration

file to find out the details of the error.

Triggering an alert for the new rule. Ping Server from attacker.

This ping will trigger alerts, the alerts are saved in /var/log/snort, read the alert.

**Q1. Have you received alert messages for ICMP Packets? Please provide**

**screenshot to support your answer.**

We can also verify the log file of the alert. The difference between log and alert is

that each IP address gets its own log file for later analysis, while all alerts are stored

in one common file.

The number in the log file name indicate the time when the alert be generated, it is

epoch time, it indicates the number of seconds that have elapsed since

January1,1970. We can use epoch converter (like https://www.epochconverter.com/ )

to convert it to human readable time. (**Note:** your time will be different than the above

screenshot)To read the log file, use “sudo snort -r /var/log/snort/snort.log.1663555616”**Task 2: Snort in IDS mode and displaying alerts to the console.**

a. Start Snort in IDS Mode. (Server)

sudo snort -A console -q -c /etc/snort/snort.conf -i eth0

-c point Snort to the configuration file

-A print alerts to standard output

-q is for “quiet” mode (not showing banner and status report).

You should not see any output when you enter the command because Snort has not

detected any activity specified in the rule we wrote.

b. Ping Server from Cybersec-Attack VM, Observe the messages displayed to

to stop it.

**Q2. Have you received alert messages for ICMP Packets in IDS Mode? Please**

**provide screenshot to support your answer.**

console. Ctrl+c **Task 3: Generating alerts for web service**

a) Start web browser in attacker VM to access 10.0.2.6

b) Open our local.rules file in a text editor and add new rule to generate alert when

there is web access reqest sudo gedit /etc/snort/rules/local.rulesc) Restart the snort service (sudo service snort restart)

d) Refresh the webpage in Attacker VM

e) Check the alert file, you will see the alert message. Use “cat /var/log/snort/alert”

**Q3. Have you received alert messages for Web access? Please provide**

**screenshot to support your answer.**

**Task 4: Generating alerts for ICMP Source Quench Packets**

Recall the ICMP attack lab we did last week, we used **netwag** to launch ICMP

Source Quench attack. ICMP packet has “type” and “code” filed, type 4 is for Source

Quench, the code field is not used for Source Quench message, and this filed is set

to 0.

a. Add the following rule to the local rule file then restart snort.

alert icmp any any -> any any (msg:"ICMP source uench"; itype:4; icode:0;

sid:1000003; rev:1;)

b. Now start the **netwag** on attacker’s VM, search for ICMP source quench.c. d. e. Fill in the source quench form, select the interface and spoofip, change the

source IP address to Server’s IP address and click “Run it.”

Use terminal in the Client’s VM to ping the server.

Check the snort alert, you should see the alert for source quench packets.

**Q4. Have you received alert messages for Source Quench packets? Please**

**provide screenshot to support your answer.Task 5: Running Snort as Intrusion Prevention System (IPS)**

In this task, we will run Snort with rules to reject SSH connection attempt from

Attacker to Server.

Steps:

a. b. Add the following rule to the “local.rules” on Server VM and restart Snort.

**reject tcp any any -> 10.0.2.6 22 (msg:”SSH Connection Attempt**

**(Request not Accepted)”;sid:1000004;rev:1;)**

Establish an SSH connection from Attacker VM to Server VM. (ssh

username@IPAddress)

c. Check the Alert file.

**Q5. Have you received alert messages for SSH connection Attempt? Did the**

**connection attempt succeed? Please provide screenshot to support your**

**answer.Task 6 (Challenge):** Generate Alerts for Telnet connection attempts from Attacker

to Server and Reject Telnet connection attempts from Attacker to Server.

**Steps:**

a. b. Add Rules to the “local.rules” on Server VM and restart Snort.

Establish a telnet connection from Attacker VM to Server VM. (telnet “IP

Address”)

c. Check the Alert File.

**Hints:**

1. 2. Telnet runs on top of TCP.

Telnet protocol runs on Port 23.

**Q6.** **Have you received alert messages for Telnet connection established from**

**Attacker to Server? Did the telnet connection attempt from Attacker to Server**

**succeed? Please provide screenshot to support your answer. Also, mention**

**the rule that was added to “local.rules” to create this alert.**48730-32548, Cyber Security Week-9

Iptables – The Linux Firewall

**Introduction**

Iptables is a packet filter-based implementation of the Linux kernel firewall, It defines

tables that contain a chain of rules that specify how packets should be treated. The

hierarchy is iptables -->tables --> chains --> rules. There may be built-in tables and

chains as well as user-defined ones.

There are three independent tables (the presence of a table depends on the kernel

configuration options): **filter, NAT and mangle**. You can specify the table to be used

through the **-t** option. This lab is based on the “filter” table, you can try other tables as

well.

**Required Resources:**

We are going to use all three VMs **(Attacker, Server, and Client),** the following

demonstration is only for practice purpose.

**Task**

Configure iptables firewall rules on Cyber-client.

**Step 1** Check iptables is installed in your system.

a. We already have iptables pre-installed. You can use iptables -V to check the

package version of iptables. The capital V is for version, the lower-case v is for

verbose.

b. If you need to update/install iptables, just retrieve the iptables package:

sudo apt-get install iptables

c. Use iptables -h to check the usage of iptables.

**Step 2** Check the build-in chain

148730-32548, Cyber Security Week-9

The **“filter”** table has three built-in chains: input, forward, and output.

**Input** – This chain is used to control the behaviour for incoming connections. For

example, if a user attempts to SSH into your PC/server, iptables will attempt to match

the IP address and port to a rule in the input chain.

**Forward** – This chain is used for incoming connections that aren’t actually being

delivered locally. Think of a router – data is always being sent to it but rarely actually

destined for the router itself; the data is just forwarded to its target. Unless you’re doing

some kind of routing, NATing, or something else on your system that requires

forwarding, you won’t even use this chain.

**Output** – This chain is used for outgoing connections.

We can use sudo iptables -L to check the current iptables chains, we can add -v (for

verbose) to check the number of packets be accepted or denied.

“ACCEPT” highlighted in the screenshot indicates the default behaviour of the chains,

it will be used to process traffic when there is no match in the existing rules.

**Step 3** Change the default behaviour of iptables.

a. Drop all traffic

We are going to change the behaviour of the chain to drop all traffic.

248730-32548, Cyber Security Week-9

The ping from Cybersec-Server to Cybersec-Client failed after we changed the default

behaviour of iptables to “DROP”

**Note:** a lot of protocols will require two-way communication, so both the input and

output chains will need to be configured properly.

b. Permit the ping from server to client.

The three most basic and commonly used action is:

**Accept** – Allow the connection.

**Drop** – Drop the connection with no error message. (Refer to the above ping,

there is no feedback message.)

**Reject** – Don’t allow the connection but send back an error message.

iptables -A (for append) to append rules to the existing chain. iptables behave like ACL,

starts at the top of its list, and goes through each rule until it finds one that it matches.

If you need to insert a rule above another, you can use iptables -I [chain] [number] to

specify the number it should be in the list, the -I is for insert. You can combine -A

option with other options, such as:

• **-i** (interface) — the network interface whose traffic you want to filter, such as

eth0, lo, ppp0, etc.

• **-p** (protocol) — the network protocol where your filtering process takes place.

It can be either TCP, [[UDP]], UDPLITE, ICMP, SCTP, ICMPv6, and so on.

Alternatively, you can type all to choose every protocol.

• **-s** (source) — the address from which traffic comes from. You can add a

hostname or IP address.

• **--dport** (destination port) — the destination port number of a protocol, such as

22 (SSH), 443 (https), etc.

• **-j** (target) — the target name (ACCEPT, DROP, RETURN). You need to insert

this every time you make a new rule.

Now we are going to add rules to permit the connection from Cybersec-Server, see the

screenshot below:

After adding this rule, the ping from server is successful, but the ping from attacker still

fail.

348730-32548, Cyber Security Week-9

Now check the rules again.

c. Let’s permit SSH connections from the Cybersec-Attacker to Cybersec-

Client(Only for demonstration purpose).

Check SSH from Cybersec-Attacker to Cybersec-Client before we add the rules.

Add the rules in Cybersec-Client to permit the SSH connection.

We have added rules to the input and output chains in the above configuration. What

if we only want SSH coming into our system, we can use connection states which is

similar to “established” keyword in ACL. Let allow SSH connection from Attacker, but

not to attacker VM.

to remove the previous rules:

Use -D 448730-32548, Cyber Security Week-9

Reconfigure the rules:

cybersec-client@ubuntu:~$ sudo iptables -A INPUT -p tcp --dport ssh -s 10.0.2.7 -m

state --state NEW,ESTABLISHED -j ACCEPT cybersec-client@ubuntu:~$ sudo

iptables -A OUTPUT -p tcp --sport ssh -d 10.0.2.7 m state --state NEW,ESTABLISHED

-j ACCEPT

Verify SSH connection from attacker to client and vice versa.

You can add -v to check the number of packeted been accepted or dropped.

**Step 4** delete rules and saving changes.

To delete/flush all rules in chains, we can use -F, the command sudo iptables -F will

erase all current rules. To delete a specific rule, we can use -D option. We can see all

the available rules with numbers by entering sudo iptables -L --line-numbers

548730-32548, Cyber Security Week-9

To delete a rule, insert the corresponding chain and the number from the list. For

example, to delete number 2 of the INPUT rule.

**The change we did will be removed once we restart the VM, to save the change,**

**use /sbin/iptables-save. We are not going to save the change for other labs.**

**Challenge:**

Configure iptables on **Cybersec-server** to **permit HTTP and HTTPS request, drop**

**all other traffic.**

Hints:

1. HTTP and HTTPS use TCP.

2. 4. 5. The rules do not require mention of source or destination address.

3. Connection state: NEW, ESTABLISHED

Port Number of HTTP: 80

Port Number of HTTPS: 443

**Screenshot Required:**

1. 2. Commands used to configure Iptables on Cybersec-Server to permit HTTP, HTTPS

and drop other traffic.

Iptables chain after adding the rules. (sudo iptables -L)

648730-32548, Cyber Security Week-3

DNS Pharming

Network Security

DNS or Domain Name System is the Internet’s phone book; it translates hostnames to IP addresses (or IP

addresses to hostnames). This transla on is through DNS resolu on, which happens behind the scenes.

DNS Pharming a acks manipulate this resolu on process in various ways, with an intent to misdirect users

to alterna ve des na ons, which are o en malicious. The objec ve of this lab is to understand how such

a acks work.

Environment Setup

We will be using 3 Virtual Machines, a DNS Server, an A acker and a Client. These machines are

preconfigured as shown below. The Virtual Network is a VMware Internal network that connects the virtual

machines together. The website to be used is: www.netsec-week3.com

Lan / Virtual Network

DNS Server

10.0.2.6

A acker

10.0.2.7

Client

10.0.2.8

The tools being used in this lab are Wireshark, Netwox/Netwag and Bind9.

Wireshark

Wireshark is a network packet analyzer. A network packet analyzer will try to capture network packets and

tries to display that packet data as detailed as possible. You could think of a network packet analyzer as a

measuring device used to examine what’s going on inside a network cable, just like a voltmeter is used by

an electrician to examine what’s going on inside an electric cable (but at a higher level, of course). Read

More at www.wireshark.org.

Netwag/Netwox

Netwag is a graphical front end for netwox. Netwox is a toolbox for tes ng an Ethernet/IP network which

includes a network library for administrators and hackers. Its objec ve is to let programmers easily create

network programs. This library provides features for Ethernet, IP, [[UDP]], TCP, ICMP, ARP, and RARP protocols.

It supports spoofing, sniﬃng, client, and server crea on.

Bind9

It is open-source so ware that implements the Domain Name System (DNS) protocols for the Internet. It

is a reference implementa on of those protocols, but it is also produc on-grade so ware, suitable for use

in high-volume and high-reliability applica ons. The name BIND stands for “Berkeley Internet Name

Domain”, because the so ware originated in the early 1980s at the University of California at Berkeley.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University48730-32548, Cyber Security Week-3

Lab Objec ve

The main objec ve of Pharming a acks on a user is to redirect the user to another machine B when the

user tries to get to machine A using A’s host name. For example, when the user tries to access the online

banking, such as www. commbank.com.au, if the adversaries can redirect the user to a malicious web site

that looks very much like the main web site of www. commbank.com.au, the user might be fooled and

give away password of his/her online banking account.

When a user types in www. commbank.com.au in his browsers, the user’s machine will issue a DNS query

to find out the IP address of this web site. A ackers’ goal is to fool the user’s machine with a faked DNS

reply, which resolves www. commbank.com.au to a malicious IP address. There are several ways to achieve

such an a ack. In the rest of the lab descrip on, we will use www.netsec-week3.com as the web site that

the user wants to access.

Note: Before star ng the lab tasks, disconnect the internet from the Server Virtual Machine (VM).

Also, to make sure that all cache on the server machine is cleared, run ‘sudo rndc flush’ on the terminal.

To check if the lab environment is working properly, we will ini ate a DNS lookup from the client and

a acker VM. To do this simply open the terminal and use the following command:

➢ dig www.netsec-week3.com (Screenshot required)

If the response received is similar to the one below, the network configura on** Important** Take a screenshot of the results as it will be used for comparison later.

 is working normally.

<<>> DiG 9.9.5-3ubuntu0.8-Ubuntu <<>> www.netsec-week3.com global op ons: +cmd

Got answer:

->>HEADER<<- opcode: QUERY, status: NOERROR, id: 29823

flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 1, ADDITIONAL: 2

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University48730-32548, Cyber Security Week-3

OPT PSEUDOSECTION:

EDNS: version: 0, flags:; [[udp]]: 4096 QUESTION SECTION:

www.netsec-week3.com. IN ANSWER

A

SECTION:

www.netsec-week3.com. 259200 AUTHORITY

IN A 10.0.2.101

SECTION:

netsec-week3.com. 259200 ADDITIONAL

IN NS ns.netsec-week3.com.

SECTION:

ns.netsec-week3.com. 259200 IN A 10.0.2.10

Query me: 1 msec

SERVER: 10.0.2.6#53(10.0.2.6)

WHEN: Mon Aug 22 23:20:05 PDT 2016

MSG SIZE rcvd: 98

Task 1: A ack by modifying HOSTS file

The host name and IP address pairs in the HOSTS file (located at /etc/hosts) are used for local lookup and

they take the preference over remote DNS lookups. If an a acker is able to access this file and modify the

local file, the system will ignore the lookup data received from the DNS server. As we are using a virtual

machine and the network configura on is manually defined, the same results can be obtained by

modifying /etc/network/interfaces.

Use The terminal on CyberSec-Client and change the DNS as below.

 dns-nameservers 10.0.2.7

The IP address provided here is of the a acker machine.

To do the change, run ‘sudo nano /etc/network/interfaces’ on the terminal window of the client machine.

A er changing the address of the dns-nameservers, press CTRL + X to exit and type ‘Y’ and press ‘ENTER’

to save the file.

Once the changes have been made, reboot the system for them to take eﬀect. Once rebooted, run the dig

command, and compare the results with the original results received earlier.

Screenshots required: (3)

1. 2. Dig command before the change of ‘dns-nameservers’ in the ‘interfaces’ file.

The ‘interfaces’ file a er the change of ‘dns-nameservers’.

3. Dig command a er the change of ‘dns-nameservers’.

**Note: Before Star ng Task 2, change the address of ‘dns-nameservers’ in ‘interfaces’ back to 10.0.2.6

and reboot.

Task 2: A ack by spoofing DNS response

In this a ack, the vic m’s machine has not been compromised, so a ackers cannot directly change the

DNS query process on the vic m’s machine. However, if a ackers are on the same local area network as

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University48730-32548, Cyber Security Week-3

the vic m, they can s ll achieve a great damage. When a user types the name of a web site in a web

browser, the user’s computer will issue a DNS request to the DNS server to resolve the IP address of the

host name. A er hearing this DNS request, the a ackers can spoof a fake DNS response. The fake DNS

response will be accepted by the user’s computer if it meets the following criteria:

1. The source IP address must match the IP address of the DNS server.

2. The des na on IP address must match the IP address of the user’s machine.

3. The source port number ([[UDP]] port) must match the port number that the DNS request was sent to

(usually port 53).

4. The des na on port number must match the port number that the DNS request was sent from.

5. The [[UDP]] checksum must be correctly calculated.

6. The transac on ID must match the transac on ID in the DNS request.

7. The domain name in the ques on sec on of the reply must match the domain name in the ques on

sec on of the request.

8. The domain name in the answer sec on must match the domain name in the ques on sec on of the

DNS request.

9. The User’s computer must receive the a acker’s DNS reply before it receives the legi mate DNS

response.

To sa sfy the criteria 1 to 8, the a ackers can sniﬀ the DNS request message sent by the vic m. They can

then create a fake DNS response, and send back to the vic m, before the real DNS server does. You must

use the Netwox/Netwag tool on the a acker VM to conduct such sniﬃng and responding. Remember to

take screenshots for your observa ons document. Use Wireshark to capture the DNS response.

Steps:

1. Open Wireshark on Client VM by entering ‘sudo wireshark’ in the terminal window. Select ‘eth0’ as the

interface.

2. Run the dig command in the terminal of the Client VM.

3. Look for DNS Packets in the Wireshark Capture.

4. Open Netwag on A acker VM by entering ‘sudo netwag’ in the terminal.

5. Search and open ‘105 Sniﬀ and Send DNS answers’ .

6. Use the informa on gathered from Step 2 (Dig command) to create a fake response.

7. A er running the a ack, repeat Step 2.

8. Look at DNS packets captured on Wireshark.

9. Check the info sec on of the Packet.

10. Stop the a ack from A acker VM.

Screenshots Required: (6)

Step 2, Step 3, Step 6 (Netwag Configura on), Step 7, Step 8 and Step 9.

Task 3: DNS Server Cache Poisoning

The above a ack targets the user’s machine. In order to achieve long-las ng eﬀect, every me the user’s

machine sends out a DNS query for www.netsec-week3.com, the a acker’s machine must send out a

spoofed DNS response. This might not be so eﬃcient; there is a much be er way to conduct a acks by

targe ng the DNS server, instead of the user’s machine.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University48730-32548, Cyber Security Week-3

When a DNS server receives a query, if the host’s name is not within its domain, it will ask other DNS

servers to get the host name resolved. Note that in our lab setup, the domain of our DNS server is

netsecweek3.com. Therefore, for the DNS queries of other domains (e.g. www.google.com), the DNS

server will ask other DNS servers. However, before it asks other DNS servers, it first looks for the answer

from its own cache. If the answer is there, the DNS server Apollo will simply reply with the informa on

from its cache. If the answer is not in the cache, the DNS server will try to get the answer from other DNS

servers. When it gets the answer, it will store the answer in the cache, so next me, there is no need to

ask other DNS servers.

Therefore, if a ackers can spoof the response from other DNS servers, the DNS server will keep the

spoofed response in its cache. Next me, when a user’s machine wants to resolve the same host name, it

will use the spoofed response to reply. This way, a ackers only need to spoof once, and the impact will

last un l the cached informa on expires. This a ack is called DNS cache poisoning.

We will be using the same procedure as in Task 2, however make sure before a acking that the DNS

Server’s cache is empty. You can flush the cache using the following command:

➢ sudo rndc flush

Use the details below to run this task:

host name: use a hostname (for example, www.uts.edu.au)

hostname IP: use the same as the A acker IP

authns: ns.ishan.com (use your name)

authnsip: 10.0.2.10

Device: select the interface

A er the a ack has started, enter ‘dig <hostname>’ mul ple mes on terminal of the Client VM ll you

see changes in the ANSWER SECTION, AUTHORITY SECTION and ADDITIONAL SECTION.

Screenshots required: (2)

1. Netwag Tool 105 configura on.

2. Dig command where you can see the required output.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University48730-32548, Cyber Security Week-6

Understanding TCP/IP based Attacks Continued

Lab Environment Setup

You need to follow the Lab-4 (Week 5) virtual environment setup to perform the remaining tasks related

to TCP/IP based attacks.

Netwox/Netwag

We need tools to send out network packets of different types and with different contents. We can use

Netwag to do that. However, the GUI interface of Netwag makes it difficult for us to automate our process.

Therefore, we strongly suggest that you use its command-line version, the Netwox command, which is

the underlying command invoked by Netwag.

Netwox consists of a suite of tools, each having a specific number. You can run the command as following

(the parameters depend on which tool you are using). For some of the tools, you have to run it with the

root privilege:

➢

netwox <number> [parameters ...]

If you are not sure how to set the parameters, you can look at the manual by issuing "netwox <number> --

help". You can also learn the parameter settings by running Netwag for each command you execute from the

graphic interface, Netwag actually invokes a corresponding Netwox command, and it displays the parameter

settings. Therefore, you can simply copy and paste the displayed command.

Wireshark Tool.

You also need a good network-traffic sniffer tool for this lab. Although Netwox comes with a sniffer, you

will find that another tool called Wireshark is a much better sniffer tool.

Both Netwox and Wireshark can be downloaded. If you are using our pre-built virtual machine, both tools

are already installed. To sniff all the network traffic, both tools need to be run with root privilege.

Lab Tasks

In this lab, you need to conduct attacks on the TCP/IP protocols. You can use the Netwag, Wireshark,

Tshark tools in the attacks. All the attacks are performed on Linux operating systems. However, you can

also conduct the same attack on the other operating system and compare the observations after lab

classes. You are supposed to use all the above three different tolls for the experiments.

To simplify the “guess” of TCP sequence numbers and source port numbers, we assume that attacks are

on the same physical network as the victims (Think of where such attacks may happen?). Therefore, you

can use sniffer tools to get that information. The following is the list of attacks that need to be

implemented and studied in this lab.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

148730-32548, Cyber Security Week-6

Before starting the task, disconnect the internet from the Server VM.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

248730-32548, Cyber Security Week-6

Task 4: TCP RST Attacks on Telnet and SSH Connections

The TCP RST Attack can terminate an established TCP connection between two victims. For example, if

there is an established telnet connection (TCP) between two users A and B, attackers can spoof a RST

packet from A to B, breaking this existing connection. To succeed in this attack, attackers need to correctly

construct the TCP RST packet.

In this task, you need to launch a TCP RST attack to break an existing telnet connection between A and B.

After that, try the same attack on an SSH connection.

In this task, we use Netwag Tool 78 to conduct the attack, and wireshark tool to capture the packets.

Steps:

1. 2. Open Wireshark on Client VM by entering “sudo wireshark” in the terminal.

Establish a telnet connection with Client from the Server. Enter “telnet <IP address>”

and fill the username and password of the Client to establish a telnet connection.

(Screenshot required)

3. 4. 5. Go to Attacker VM, run Netwag using the terminal. (sudo netwag)

Select Tool 78: Reset every TCP packet.

Select the interface and the “spoofip: IP spoof initialization type”. (Screenshot

required)

6. Click “Run It”.

7. Go to Server, generate some data by typing something in terminal where a telnet

connection with Client is established. (Screenshot Required)

For performing the same attack on SSH connection, establish an SSH connection with Client

from the Server by entering “ssh username@IPaddress” instead of a telnet connection. Similar

screenshots are required for TCP RST attack on SSH connection.

Task 5: ICMP Blind Connection-Reset and Source-Quench Attacks

(i) ICMP Blind Connection-Reset

ICMP messages can also be used achieve the connection-resetting attack. To do this, attackers send an

ICMP error message that indicates a “hard error” to either of the two endpoints of a TCP connection. The

connection can be immediately torn down as RFC 1122 states that a host should abort the corresponding

connection when receiving such an ICMP error message. RFC 1122 defines “hard errors” as ICMP error

messages of type 3 (Destination Unreachable) with code 2 (protocol unreachable), 3 (port unreachable),

or 4 (fragmentation needed and DF bit set).

Use the Netwag Tool 82 to conduct the attack, and then use wireshark tool to capture the packets.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

348730-32548, Cyber Security Week-6

Steps:

1. Open Wireshark on Client VM by entering “sudo wireshark” in the terminal. Set icmp as

filter.

2. 3. 4. 5. 6. Ping Server from the Client.

Check the Wireshark capture. (Screenshot Required)

Go to Attacker VM, run Netwag using the terminal.

Select Tool 82: Sniff and send ICMP4/ICMP6 destination unreachable.

Select the interface and “spoofip: IP spoof initialization type”, input the ICMP code (2)

and source IP address. (Screenshot Required)

7. Click “Run It”.

8. Check the Wireshark capture. (Screenshot required)

(ii) Source-Quench Attacks

The ICMP source quench message is used by the congested routers to tell the TCP senders to slow down.

Attackers can forge such messages to conduct the denial of services attacks on TCP senders.

In this task, you need to launch the ICMP blind connect-reset attacks and the ICMP source quench attacks.

You need to be noted that some systems may reasonably ignore this type of ICMP errors in certain TCP

state.

Use the Netwag Tool 85 to conduct the attack, and then use wireshark tool to capture the packets.

Steps:

1. Open Wireshark on Client VM by entering “sudo wireshark” in the terminal. Set icmp as

filter.

2. 3. 4. 5. 6. Ping Server from the Client.

Check the Wireshark capture. (Screenshot Required)

Go to Attacker VM, run Netwag using the terminal.

Select Tool 85: Sniff and send ICMP4 source quench.

Select the interface and “spoofip: IP spoof initialization type”, and input the source IP

address. (Screenshot Required)

7. Click “Run It”.

8. Check the Wireshark capture. (Screenshot required)

Task 6: TCP Session Hijacking

The objective of the TCP Session Hijacking attack is to hijack an existing TCP connection (session) between

two victims by injecting malicious contents into this session. If this connection is a telnet session, attackers

can inject malicious commands into this session, causing the victims to execute the malicious commands.

You can use telnet in this task. You can also assume that the attackers and the victims are on the same

LAN. Following figure illustrates the attack.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

448730-32548, Cyber Security Week-6

Note: If you use Wireshark to observe the network traffic, you should be aware that when Wireshark displays

the TCP sequence number, by default, it displays the relative sequence number, which equals to the actual

sequence number minus the initial sequence number. If you want to see the actual sequence number in a

packet, you need to right click the TCP section of the Wireshark output, and select "Protocol Preference". In

the popup window, uncheck the "Relative Sequence Number and Window Scaling" option.

Use the Netwag Tool 36 to conduct the attack, and then use wireshark tool to capture the packets.

Steps:

1. Open Wireshark on Client VM by entering “sudo wireshark” in the terminal. Set telnet as

2. 3. 4. 5. 6. 7. filter.

Establish a telnet connection with Client from the Server. Enter “telnet <IP address>”

and fill the username and password of the Client to establish a telnet connection.

(Screenshot required)

Generate some data by typing something in terminal where a telnet connection with

Client is established. (Suggestion: Type an alphabet and use backspace, the backspace

will create a telnet packet with the telnet data ‘/177’)

Go to Wireshark on Client, look for last telnet packet sent from Server to the Client.

(Screenshot required)

Ensure that “Relative sequence numbers” is disabled. (Check the Protocol Preferences)

Look into the details of TCP and telnet for last telnet packet sent from Server to the

Client. (Screenshot Required)

Convert ‘mkdir hello’ + return key to hexadecimal.

(https://www.browserling.com/tools/text-to-hex)

8. Go to Attacker VM, run Netwag using the terminal.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

548730-32548, Cyber Security Week-6

9. Select Tool 36: Spoof EthernetIp4Tcp packet.

10. Provide the following information:

Device Select Eth0

Ethernet Src From the wireshark output

Ethernet Dst From the wireshark output

IP4 ttl 64

IP4 Src 10.0.2.6

IP4 Dst 10.0.2.8

TCP Src From the wireshark output

TCP Dst From the wireshark output

TCP Seqnum From the wireshark output (Next

Sequence Number)

TCP Acknum From the wireshark output: TCP Acknum

+ size of the telnet data

TCP urg Tick

TCP ack Tick

TCP psh Tick

TCP window From the wireshark output

mixed data Hex for ‘mkdir hello’ + return key : 6d 6b

64 69 72 20 68 65 6c 6c 6f 0a

(Screenshot required)

11. Click “Run It”.

12. Go back to Wireshark on Client, look for the last telnet packet sent from Server to Client

before [[TCP]] Retransmission. (Screenshot Required)

13. Look into the details of Telnet for that packet. (Screenshot Required)

14. Check the home directory of Client.

Lab designed by Ashish Nanda, based on documents “SEED Labs” provided by Wenliang Du, Syracuse University

6