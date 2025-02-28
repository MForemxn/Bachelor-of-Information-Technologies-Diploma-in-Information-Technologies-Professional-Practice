![[Cybersec-Week 1- Lab 1, Part 1- Handout.pdf]]
# Task 1: Sniff Login Details from Unencrypted HTTP Traffic
> ![[Screenshot 2025-02-23 at 10.45.10 am.png]]

> ![[Screenshot 2025-02-23 at 10.45.57 am.png]]

# Task 2: Extract an Image Form Unencrypted HTTP Packet
> ![[Screenshot 2025-02-23 at 10.49.59 am.png]]

# Task 3: Information Gathering
> 1. The IP address is 54.79.20.73
> 2. You get the following message:
>    ![[Screenshot 2025-02-23 at 11.03.09 am.png]]
>  This error message indicates to me that the website is hosted on Acquia Cloud, and the server is configured to only be accessed through the domain name (uts.edu.au). This means that the server cannot be directly accessed. 
>  1. the Netname is "AMAZO-ZSYD8", which indicates to me that the IP range is owned by Amazon. This can be further seen in the rest of the WHOIS, which indicates Amazon Corporate Services, running out of Ultimo Sydney:
>     ![[Screenshot 2025-02-23 at 11.07.20 am.png]]
>  2. The servers operating system seems to be obscured, indicated below, "OSScan results may be unreliable because we could not find at least 1 open and 1 closed port:
>     ![[Screenshot 2025-02-23 at 11.12.44 am.png]]
>     After running a different NMAP command (`nmap -A uts.edu.au`), it tells me that it has 92% confidence in it being linux 2.6.32-3.10. 
>     ![[Screenshot 2025-02-23 at 11.19.12 am 1.png]]
>  3. At first glance, the web server seems to be AkamaiGHost, however running a different nmap command shows it is Nginx, with AkamaiGHost being the CDN.
>     ![[Screenshot 2025-02-23 at 11.14.31 am.png]]
>     ![[Screenshot 2025-02-23 at 11.19.12 am 1.png]]
>  4. the site seems to be deliberately hiding its server side scripting, however it seems like it is PHP, given it is hosted with Acquia Cloud, and Acquia uses Drupal. Hiding this information helps with security and protection. 
>  5. the email address seems to be dnsadmin@uts.edu.au
>     ![[Screenshot 2025-02-23 at 11.46.07 am.png]]
>  6. using `nslookup 23.40.52.8`, i found the results below
>     ![[Screenshot 2025-02-23 at 11.49.12 am.png]]
>  7. the Resigstar name seems to be Education Services Australia Limited, which makes sense, given it is a .edu address.
>     ![[Screenshot 2025-02-23 at 11.52.45 am.png]]
>  8. based on the output from dig, it seems like it is Akamai
>     ![[Screenshot 2025-02-23 at 11.56.27 am.png]]
>  9. I believe AWS is hosting the website.
>     ![[Screenshot 2025-02-23 at 12.00.51 pm.png]]
>  10. geographically, it is at 400 harris st ultimo nsw 2007
>      ![[Screenshot 2025-02-23 at 11.07.20 am.png]]