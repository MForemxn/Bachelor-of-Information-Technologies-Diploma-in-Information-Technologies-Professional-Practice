  
### Assignment objective:

Design and implement a web site.  Specifically, to write a home page for yourself including information about your past, future aspirations and a reflection on your design.

This assignment tests 2 main skills - creating a live working web site and demonstrating some basic HTML/CSS skills.

---

### Requirements

You will make a website which is about yourself, which must obey the following specification. The actual content regarding yourself is not the important thing here and is not assessed. However, it must still of course be your own original work, not copied from any other source, and will be checked for plagiarism. You are free to expand on your interests and put only what you would like to, and there are no hard minimum or maximum word/content limits. The task is about your HTML/CSS and webpage design skills.

Your site will consist of 4 pages & 1 css file structured as follows.  Note that the _websystems_directory is to be placed inside your home directory, not at the root!

- _websystems/index.html_
- _websystems/past.html_
- _websystems/future.html_
- _websystems/comments.html_
- _websystems/websystems.css_

You should place any extra files such as images (jpg, png etc.) into the _websystems_ directory. They can also optionally be in subdirectories for neatness, for example _websystems/images_ .

Your website must not depend on Javascript and should work even if CSS is disabled. It should also be usable if images are disabled, so no "mystery meat" navigation!

### Minimum requirements

1. HTML 4.01 or higher
2. CSS 2.1 or higher
3. No embedded styles (including deprecated tags such as font or formatting attributes) or use of @import.  ALL styles must be in _websystems.css_ .
4. You must provide navigation between pages using HTML hyperlinks.
5. At least:

1. 5 CSS classes
2. 1 CSS id
3. 1 div
4. 1 span
5. 1 table (NOT CSS tables)
6. 1 list (any one of ordered, unordered, definition)
7. 1 image  (should not be large, e.g.  over 1Mb in size)

### Page descriptions

#### **index.html**

This home page should be a short introduction to yourself and your website. Do not post private information here as this page will be public.

You must link to the other 3 pages (past.html, future.html, comments.html) from the home page. You must as a minimum use HTML anchors for this, but can also add other navigation methods if you wish, for example, clickable images. You should also include links back to the home page from the sub-pages. Even better is a consistent navigation method such as a menu bar on all pages.

You are permitted to obfuscate your personal information in the index/past pages as we respect your rights to privacy.

#### **past.html**

This page should describe your experiences with computing so far (eg: mention your HSC experience, past work experience).

#### **future.html**

This page should describe what you want to do with computing in the future.

#### **comments.html**

This page is where the content, not only the execution, matters.  You are required to comment on :

1. A short, personal reflection on your overall design
2. The technical aspects of your website: eg: describe its structure, what CSS selectors/id's etc you used, and why (about half a page)
3. The aesthetics of your website - eg: how users should perceive your pages and what effects you were trying to achieve (about half a page).  
    An introduction to the aesthetics of Web design can be found here: [http://alistapart.com/article/the-web-aestheticLinks to an external site.](http://alistapart.com/article/the-web-aesthetic) and at [http://www.webstyleguide.com/wsg3/Links to an external site.](http://www.webstyleguide.com/wsg3/)
4. The accessibility aspects of your website - eg: how you made your web site usable by disabled users.  
    A quick guide to accessibility can be found at [https://www.w3.org/standards/webdesign/accessibilityLinks to an external site.](https://www.w3.org/standards/webdesign/accessibility) and at[http://webaim.org/intro/Links to an external site.](http://webaim.org/intro/)

#### **websystems.css**

This shall contain all the CSS styles used by your website. 

- Do NOT use @import as the marking program will not detect this.
- You should try to make this web site as appealing as possible, using style sheets only.  
    You will lose marks for embedded or inline styles.
- You must NOT use 3rd party CSS frameworks such as bootstrap, w3.css, foundation, etc..
- Your site should also be accessible to visually impaired users and screen readers (see comments.html accessibility requirements)

---

### Testing

You can initially develop your pages using your own device by creating and editing the files on your local filesystem. You use your browser (e.g. chrome, safari, firefox) to open the pages without the need to run a web server.

You may use a HTML/CSS syntax aware editor such as EMACS, Visual Studio Code, Bluefish etc., but we encourage you to use this as an opportunity to practice your _vim_ skills.

You MUST check the validation of your website at http://validator.w3.org/ and your style sheet at http://jigsaw.w3.org/css-validator/. Generally you can ignore 'information' messages, but warnings and especially errors are penalised.

To test that your pages work correctly when hosted by a server, before submission, you will need a hosting solution.  We have provided one within Ed, as part of the Check feature. When you Check your files, they are also copied to a private external site, where they can be viewed via a personal URL that is provided.  You may also use any other hosting service you may have access to.

You can also set up a web server on your own machine. The choices are many, see [https://en.wikipedia.org/wiki/Comparison_of_web_server_software.Links to an external site.](https://en.wikipedia.org/wiki/Comparison_of_web_server_software)

- We generally recommend Apache httpd, nginx, or lightspeed.
- From Windows 10 onward users can set up the Windows Subsystem for Linux (WSL)  to set up a development environment. This has become a lot easier since Windows 11.  We recommend using WSL 1 (not 2) for the moment, using Ubuntu, and then installing the appropriate HTTP server. See [https://docs.microsoft.com/en-us/windows/dev-environment/Links to an external site.](https://docs.microsoft.com/en-us/windows/dev-environment/)
- You can also use a "virtual machine" to run Linux under windows such as Vmware workstation player (recommended) or Virtualbox. Note that students planning to do the Internetworking or Software based majors should consider installing VMware as this is used in many later classes.
- Mac users can refer to [https://discussions.apple.com/docs/DOC-3083Links to an external site.](https://discussions.apple.com/docs/DOC-3083) for discussions on how to activate the built in web server.
- Or you could install a "WAMP" stack on your machine ([https://en.wikipedia.org/wiki/WampServerLinks to an external site.](https://en.wikipedia.org/wiki/WampServer))  if you intend to do more advanced web development in the later subjects such as Programming on [[the Internet]], Interface Design etc.
- Finally, you can set up an external web server on one of the many external "virtual hosting" providers [(https://en.wikipedia.org/wiki/Virtual_private_serverLinks to an external site.](https://en.wikipedia.org/wiki/Virtual_private_server)).  
    UTS is a member of the Amazon Web Services (AWS) Academy and can provide $50 free credit for [[Web Systems]] students if you have a AWS developer account [https://aws.amazon.com/developer/Links to an external site.](https://aws.amazon.com/developer/)   (See Web Sites tab).  We highly recommend the Amazon Lightsail all-in-one service

---

### Submission

- You must submit via EdStem system by Marking and submitting before the draft and final deadlines.  Details are provided in Ed under the Assessment tab.
- The draft submission can be very preliminary in terms of content, but the key files and the correct directory structure must be there, and should be error free.
- Your assignment will be copied to an external web server for peer marking (to be announced later)
- If you are late, the Mark process will still work and the new version will be uploaded to the public site, but this may result in a late penalty as specified in the subject outline.
- You will get zero (0) marks for websites email'ed, submitted erroneously on Canvas, or demonstrated by using the browser to directly load a HTML file (ie: using File -> Open, c:\ or file:// URL's.).  
    ANYTHING ELSE WILL NOT BE MARKED!
- Do not change the web site after the submission date - everthing is [[data]] stamped so we will know. Your tutor may take up to 2 weeks to finalise the marking.

### Prohibitions

- Do NOT use visual WYSIWYG tools such as Dreamweaver, Microsoft Expression, Microsoft Word, online HTML editors.
- Do NOT use 3rd party templates for your website
- Do NOT use any tool that generates HTML/CSS code
- Do NOT use third party CSS/HTML/javascript libraries such as w3.css, bootstrap etc.
- Do NOT work as a group, this is an individual assignment.
- Your tutor may ask you to prove that you wrote this assignment by hand and not with assistance.

### Fleshing out the Specification :  reminders, hints, warnings

- Fundamentals:  you MUST have the site layout exactly as described above :
    - do NOT change the filenames or directory location as we use an automated marking checker
    - make sure your files are in the _websystems_ directory
    - make sure all file names and href/src attributes are in lower-case. 
    - do NOT capitalise the first letter of filenames
    - **ensure files and directories have correct permissions!!**
    - unreadable or unusable web sites will also be penalised
- Technical detail :
    - minimum HTML 4.01 Strict and CSS 2.1 - our checker can handle most HTML5 and CSS3, but best to check with Ed's online assignment checker.
    - do NOT use vendor specific tags or attributes – eg –webkit- -moz- etc as the validator may penalise you for this.
    - do NOT use deprecated tags or attributes. See [http://en.wikipedia.org/wiki/Html#Transitional_versus_strictLinks to an external site.](http://en.wikipedia.org/wiki/Html#Transitional_versus_strict) for a list of deprecated tags and attributes.
    - do NOT use frames or iframes (this causes problem for my validator/assignment checker)
    - additional marks WILL NOT be granted for features such as Flash, fancy graphics, animations, audio/video etc.
    - watch out for "smart quotes" especially if you cut and paste from Microsoft Word. 
    - do NOT hard-code your page URL's inside your pages - your website should be "relative", i.e.:  href's should NOT start with "http://" & will be penalised.
- CSS :
    - You MUST use styles sheets to format your page. This MUST be in one CSS file, _websystems.css_
    - dont use @import since the assignment checker won't pick this up.
    - don't bother using CSS positioning or anything else not covered in lectures, labs or tutorials, there is no need
- Useability
    - your web site MUST be easy to navigate and read (consider your target audience)
    - we expect to be able to point and click, and not press the 'BACK' key on the browser, or type in extra URL's in the address bar
    - make font sizes reasonable, use style sheets to manage them.
    - if your tutor or peer marker can't read it, you will lose marks :
        - don't use bad colour combinations (for example, red on black, purple on black, purple on red, blue on purple, black on red)
        - recommend a maximum screen size should be 1024x768, though you should design your web site to cope with larger (and smaller) screens.
        - consider what will happen if your marker uses a smaller screen (eg: 800x600)
    - do not have large image files - keep pictures to less than 100kb, larger ones may attract penalties - pay attention to the checker output
    - do not make pages so wide that they can't be read unless you scroll horizontally
    - don't become a site on [http://webpagesthatsuck.comLinks to an external site.](http://webpagesthatsuck.com/)
- Ethics and Rules
    - don't put advertisements or animations on your web site.
    - do not put private information on your web site eg date of birth, home address, credit card details. This is a PUBLIC website.
    - you MUST acknowledge graphic files downloaded from [[the internet]]. It is sufficient to put them in a HTML comment adjacent to the image tag. This is for legal copyright reasons as well as ethical ones.
    - you MUST NOT use style sheets or designs from anyone else - this includes open source and commercial style sheets and frameworks eg bootstrap! Read the [important heads up](https://canvas.uts.edu.au/courses/30534/pages/how-to-be-successful-in-this-subject?module_item_id=1602854)on how not to fail.
    - this is an individual assessment, no group work is permitted
    - you must not copy past assignments (this includes CSS components).  Studentssuspected of cheating will have an academic misconduct allegation made to the university.  Failure to take this seriously is a [fast track to failure .](https://canvas.uts.edu.au/courses/30534/pages/how-to-be-successful-in-this-subject?module_item_id=1602854)
    - your content must also be original. As usual, material quoted from [[the Internet]] or any other source must be referenced as you would in any other written assignment, following the UTS referencing guide for IT students. However as this assignment asks for you to REFLECT and COMMENT from your personal perspective, quoting other people’s work is not needed and is easily avoided.
- Robustness
    - you MUST test your web site with graphics and Javascript turned off. Is it still usable?
    - you SHOULD check your web site on at two of the browsers - Chrome, Firefox, Safari and/or Microsoft Edge
    - you SHOULD check your website using a mobile device
    - watch out for large JPG from cameras - use a tool to reduce the size e.g. Microsoft Paint or Photoshop or GIMP
    - do not use BMP or TIF files - these are'nt web friendly
- **Use available testing**
    - use the **Check** testing within Ed, don't rest until all errors are gone ! and you at least understand (most) warnings, why would you submit when you Know it has errors?! 
        - there are deductions for errors, warnings and access errors:    Error: -0.5,   Warning: -0.2,  CSS Errors: -0.2,   Access: (embedded style):  -0.1  per item. 
        - total warning deductions are capped,  and negative marks are not possible 
    - but do NOT rely on the Ed web preview function for **final** testing!  you must submit versions via Check and later Mark early to allow yourself time to address any issues that become apparent when the page is `live' - you may need several iterations to fix all errors.  Don't submit first, then only notice errors after the deadline !!