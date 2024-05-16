## File Systems Contiguous Allocation

## **Contiguous Allocation**

**Data in Block 1 to n** **1 n** **[ 1 | 2 | 3 | 4 | ... | n-2 | n-1 | n ]**

1. One long slab of space is allocated.
    
2. Each block has the same size.
    
3. The system _knows_ the start point and the block size.
    
4. When done in RAM this is called an _Array_
    
5. When done on a disk it's called _Contiguous Allocation_.
    
6. Question Where is this used ?
    
7. Question What is the disadvantage ?
    
8. Question What is the advantage ?
    

## **Chained Allocation**

**Block 1** **Block 2** **Block 3** **Block n** **[ Data | next ] -> [ Data | next ] -> [ Data | next ] -> ... -> [ Data | next ]**

1. Data is stored in n Blocks may be scatted all over the place.
    
2. Each Block has the same size.
    
3. When done in RAM its called a _link list_.
    
4. When done on disk its called _chained allocation._
    
5. Example _MSDOS FAT file system_ (a small file system).
    
6. Question What is the disadvantage ?
    
7. Question What is the advantage ? _Hint look at the art work below_.
    

**Block 1** _Ex Block 2_ **Now Block 2** **Now** **Block n - 1** **[ Data | next ]--** _[ Data | next ]_ **-->[ Data | next ] -> ... -> [ Data | next ]** **-->-->-->-->-->-->-->**

## **Tree Allocation**

**[ _Root_ 30 ] / \ [ 20 ] [ 50 ] / \ / \ [11] [23] [44] [66]** _**<-leaves**_ Artist's impression of a balanced binary search tree.

1. Data is stored in n Blocks may be scatted all over the place.
    
2. Each block stores the location of several other blocks. ( at most two if binary)
    
3. White rabbit algorithm, go left for smaller, right for larger.
    
4. Hard to balance, but effect algorithms exist. _Examples Red Black Tree , AVI tree._
    
5. Typically used in RAM.
    
6. Question What is the disadvantage ?
    
7. Question What is the advantage ?
    

## **Tree For External Storage. B Tree**

**[ _Root_ 30 ] / \ [11 20 23 ] [ 44 50 66 ]** Artist's impression of a B Tree

1. Data is stored in n Blocks may be scatted all over the place.
    
2. Each block stores the location of several other blocks. Blocks are between _m/2_ and _m_ in size.
    
3. White rabbit algorithm, go left for smaller, right for larger.
    
4. Split blocks if too large.
    
5. Typically used in Disk
    
6. Example _Linux Ex4 File system._
    
7. Question What is the disadvantage ?
    
8. Question What is the advantage ?

## Read time contiguous allocation. At best we are in O(1)

![](https://static.edusercontent.com/files/hdoIhCVL1lkoBPc8v3Ub8f74)

Points to note any of these curves are in O(1) since for any constant line t=a there is

.a line above it at t=c*a (Note they are also in many other classes ie O(n) ,O(n^2), O(2^n) etc)


## Access time balance tree. At best in O(log(n))

![](https://static.edusercontent.com/files/W1ArfIXE0T79bnubJrQAVoCl)

Points to note any of these curves are in O(log(n)) since for any function of the form a*log(n) there is

a function c*a log(n) above it. (Note they are also in many other classes ie O(n^2) O(2^n))


## Access time of chained allocation. At best we are in O(n).

![](https://static.edusercontent.com/files/xld0nfTuzQeu7oWP2SRqIk9Y)

Points to note any of these curves are in O(n) since for any straight line c * n from the origin there is

a steeper straight line above it. (Note they are also in many other classes ie O(n^2) O(2^n))


## The lot

![](https://static.edusercontent.com/files/PVCI1OfVza2OcYlkNYajKvfo)


## Definition Big O

𝑊𝑒 𝑠𝑎𝑦  𝑓 ∈𝑂(𝑔)We say  f ∈O(g)

𝑖𝑓 𝑡ℎ𝑒𝑟𝑒 𝑒𝑥𝑖𝑠𝑡𝑠 𝑁, 𝑛 𝑎𝑛𝑑 𝑐 𝑠𝑢𝑐ℎ 𝑡ℎ𝑎𝑡if there exists N, n and c such that

 𝑓(𝑛) ≤𝑐𝑔(𝑛) f(n) ≤cg(n)

𝑓𝑜𝑟 𝑎𝑙𝑙 𝑛 ≥𝑁for all n ≥N

## Truth Tables 2

show that

```
(not(x) or y) and not(z) = not(x or z) or (y and not(z))

INPUT | | LEFT HAND SIDE x y z |notx | notx or y | notx or y and not z 0 0 0 1 1 1 0 0 1 1 1 0 0 1 0 1 1 1 0 1 1 1 1 0 1 0 0 0 0 0 1 0 1 0 0 0 1 1 0 0 1 1 1 1 1 0 1 0
```

```
not(x or z) or (y and not(z))

INPUT | TERM 1 | TERM2 | RIGHT HAND SIDE x y z not(x or z) | (y and not(z)) | not(x or z) or (y and not(z)) 0 0 0 1 0 1 0 0 1 0 0 0 0 1 0 1 1 1 0 1 1 0 0 0 1 0 0 0 0 0 1 0 1 0 0 0 1 1 0 0 1 1 1 1 1 0 0 0
```

Now LHS = RHS for all 8 possible inputs so we can conclude that

```
not(x) or y) and not(z) = not(x or z) or (y and not(z))
```


## Limitation

# Limitations

Question: What is the complexity of computing A truth table on n variables ?


## Bash commands

## od octal dump to show file ASCII codes  

```
od -td1a atest.txt 0000000 65 83 67 73 73 32 97 115 99 105 105 10 48 49 50 10 A S C I I sp a s c i i nl 0 1 2 nl 0000020
```


## Numeric file permissions

## **Numeric file permissions**

The file permissions can be represented and manipulated numerically as a three digit **octal number**. The first digit (the left most one) provides the permissions for the **owner** of the file. The second digit, the permissions for the members of the **owner's group** and the last digit provides the permissions for all **other users**. The permissions have the following values:

- **read** permission has value **4**
    
- **write** permission has value **2**
    
- **execute** permission has value **1**
    

A actual permission digit is calculated by adding the numeric values of the permissions that are set.

- If the file's owner has **read write** an **execute** permissions the first digit will be **7**.
    
- If the file's owner has only **read** and **write** permissions the first digit will be **6**.
    
- If the file's owner has **no permissions** set the first digit will be **0**. (This won't be possible in Ed , for the owner. However, most systems allow it.)
    

The other two digits are similarly decided. So for example:

- **754** means the owner has read write and execute permissions. The **owners group** has **read** and **execute** permissions and all **other** users have **read** permissions.
    
- **640** means the **owner** has **read** and **write** permissions the **owner's** **group** has **read** permissions and **other** users have **no** permissions.
    

**Exercise 4. What does the numeric permission 764 mean ?**

Solution

The **owner** has **read write** and **execute** permissions since **7=4+2+1**. The **owner's** **group** has **read** and **write** since **6=4+2**. All other users have read permissions.

To change the file permissions numerically use the **chmod** command, for example:

- **chmod 640 f1** changers the permissions of the file **f1**
    
- **chmod 640 f*** changes the permissions for all files in a directory starting with **f**


## HTML CSS Effects

## Simple Template

Below is a simple html page with an href to a external css file.

```
<!DOCTYPE html>  
<html>  
<head>  
<meta charset="UTF-8">  
<link rel="[stylesheet](http://null/)" type="[text/css](http://null/)" href="[webpage-html-css1.css](http://view-source:file///home/ps/UTS/webpage-html-css1.css)">  
<title>Simple HTML Page</title>  
</head>  
<body> <h2> This is an h2 heading </h2>  
<p> This is a paragraph .</p>  
</body>  
</html>
```
##   
See Effect

```
<!DOCTYPE html>

<html>

  <head>

    <meta charset="UTF-8">

    <link rel="stylesheet" type="text/css" href="webpage-html-css1.css">

    <title>Simple HTML Page</title>

  </head>

  <body>

     <h2> This is an h2 heading </h2>

    <p> This is a paragraph .</p>

  </body>

</html>
```


## Template with head header and headings

```
<!DOCTYPE html>

<html>

  <head>

    <meta charset="UTF-8">

    <link rel="stylesheet" type="text/css" href="webpage.css">

    <title>Simple HTML Page With Header</title>

  </head>

  <body>

    <header>

    <h1> This is an h1 heading inside the header </h1>

    <p> This is a paragraph inside the header.

      The heading are colours are set in the css file.

## Showing html source code with an html page

How to show html source code with an html page?

  
<pre class="[markuphtml](http://null/)"> &quot; will show a double quote &amp; will show an ampersand &lt; will show a less than &gt; will show a greater than for example &lt; !DOCTYPE HTML &gt; &lt;/ This is a heading /&gt; </pre>
```

```
<pre class="markuphtml">

&quot; will show a double quote

&amp;  will show an ampersand 

&lt;   will show a less than 

&gt;   will show a greater than

for example

&lt; !DOCTYPE HTML &gt;

&lt;/ This is a heading  /&gt;

</pre>
```


## Limit Page widths and Justifing text.

## How can I limit a page width. ?

The simple way is to place the body of the page inside a **div** tag. The class associated with this **div** should limit the width using the **max-width** property. Setting the left and right margins to auto will center the page. For example , our ccs code could be :  

```
div.outerpagewrap  
{  
max-width: 500px;  
margin-left: auto;  
margin-right: auto;  
text-align: justify;  
}
```
Note the **text-align: justify;** css code will justify both the left and right sides.

```
<link rel="stylesheet" type="text/css" href="webpage-html-css1.css">

<meta http-equiv="content-type" content="text/html; charset=UTF-8" >

<title>Wrap Page</title>

<meta name="keywords" content="html, css, webpage, website">

</head>

<body>

<div class="outerpagewrap">

<h1>Example of limits </h1>

<p>

 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras 

 aliquet ex risus, vel semper magna sollicitudin eget.
```

## Horizontal lists in html

## How do I make horizontal lists in html ?

For example, how do I make the following render across the page.

- list item 1
    
- list item 2
    
- list item 3
    

Use **ccs** to override the default list properties. **display: inline;** with force inline display. In addition you can remove the bullet points with **list-style-type: none;**

<ul class="horizontal"> <li class="horizontal"> list item 1 </li> <li class="horizontal"> list item 2 </li> <li class="horizontal"> list item 3 </li> </ul>

Our css will look as follows:

ul.horizontal { list-style-type: none; padding: 0; margin: 0; } li.horizontal { display: inline; }


```
<ul class="horizontal"> 

        <li  class="horizontal"> list item 1 </li> 

        <li  class="horizontal"> list item 2 </li> 

        <li  class="horizontal"> list item 3 </li> 

    </ul>
```

## Using the nav tag

```
<!DOCTYPE html>

<html> 

    <head>

        <title>Home</title>

        <link href="with-nav.css" rel="stylesheet"  type="text/css">

    </head>

   <body>

    <div class="wrap">

      <nav>

               <ul class="menu">

                  <li><a href="index.html">Home</a></li>

                  <li><a href="page1.html">Page 1</a></li>

                  <li><a href="page2.html">Page 2</a></li>

                  <li><a href="page1.html">Repeat Page 1</a></li>

               </ul>
```
## Cryptography

# **Cryptography**

Two classes of cypher **symmetric** and **asymmetric**.

## **Symmetric cyphers**

In symmetric cyphers one key is used to encrypt a message at the sending end and the _**same key**_ is used to decrypt it at the receiving end.

Symmetric cyphers can be made fast and very secure. But key exchange is a problem (think James Bond movie ).

## **Asymmetric** **cyphers**

In asymmetric cyphers a **different keys** are used to encrypt a message and decrypt it.

If one key encrypts a message the other decrypts it.

## **Public key cypher**

A Public key cypher is a form of asymmetric cypher in which it is intractable to compute the decryption key from encryption key ( and vice versa ) . This solves the _**key exchange**_ problem.

Any user has **two keys** one is **private** and **never shared.** The other is **public** and may be **widely shared**. So, anyone has **free access to your public key**, but **your private key is secret and must never be shared.**

Anyone can encrypt a message with your public key only you can decrypt it.

Ways to use the cypher

## **1 send a simple message.**

The sender requests the receivers public key, R_public. (Or the send gets this key from a public source) The sender encrypts message with R_public. The receiver decrypts the message with their private key, R_private.

2 Authenticate

The sender encrypts with their private key, S_private The receiver decrypts with senders public key, S_public. If the decryption fails the receiver knows that the owner of the S_public did not encrypt the message.

Real world applications

## SSH

In real world application a combination of symmetric and public key encryption is used. symmetric encryption is very fast but suffers from the key exchange problem. Public key encryption is slower, but solves the key exchange problem. But, practice both can be used to have fast secure communication with secrete key exchange.

For example SSH (secure shell) To send a message between two users Bob and Alice Bob randomly generates a symmetric key. He then encrypts it using Alice's public key, A_public Alice receives the message and decrypts it with her private key, A_private They now both have copies of the same random key and that is used for as a fast symmetric key.



## Networking telnet replacement nc

The **telnet** utility is no longer available on most systems. You can use the **nc** ( netcat ) program to achieve the same effect.

for example :

**nc [google.com](http://google.com/) 80**

**GET**


