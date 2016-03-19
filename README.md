# Erica's Portfolio Site

The site has 5 pages - 3 content heavy pages have Javascript interactivity for the carousel and the mobile menu.

####Editing Code:
* Always pull the newest code from github if you haven't edited in a few months
* GH Pages requires 2 branches : gh-pages and master
* EDIT IN GH-PAGES FIRST. When finished, push changes to Github's server.
* In Github, make a pull-request. Base will be master, Compare will be gh-pages.
* Changes will be live once both branches are updated

####Adding new portfolio pieces:
1. Upload photos to "pieces" folder in the root.
2. Go to the subfolder that reflects the section you want to add your piece to (e.g. "_copywriting")
3. Copy one of the .md files OR create a new one in that folder. If you create a new one, copy/paste the below template into it.
4. Name the file you're creating according to the link name and include .md extension (e.g. "back-to-school.md")
5. Fill out each section in the Frontmatter (between the dashed lines). All except "text" are required to make the new piece functional.
6. Make sure you have the dashed line above and below the Frontmatter section
7. Anything below the second set of dashed lines will be rendered as HTML in the bordered box below the image carousel.
8. Publish and use the above steps to push to master as well. It should go live within a few minutes.


####Changes to navigation
* Navigation and footer text is managed in the _data file.
* nav.yml controls the links and text for the main navigation
* global.yml controls image directories and footer text

####Adding a new section
A new section requires the following:
* Create a new folder in the root named for _new-section . This is where your .md files for it will live.
* Go (carefully!) to _config.yml in the root. Under "Where things are" is a "collection:" setting. 
* Following the format of the other sections, add yours below the content-dev section:
   new-section:
    output: true
    permalink: /new-section:path/ 
* Add the URL to your new section in the navigation (see above section)
* Create a .md file in your _new-section folder. Name it for new-section and copy the contents of another section's .md (e.g. "copywriting.md" or "content-dev.md") into it. 
* Lastly, set category to "new-section" and permalink to "/new-section/" and it should be all set! It will pull in any .mds from its own folder onto the page. 


#### Piece template
NOTE: delete or replace all the /* comments */ . Anything NOT required will be noted (otherwise all required).
```
--- 
layout: portfolio  /* this will not change */
title: /* piece header */
company: /* below header */
carousel_id: /* unique id to make carousel run on page (follow html class/id rules) */

images:
- { image: 'AAS1-1.png', url: '/pieces/AAS1.pdf' }
- AAS1-2.png
- AAS1-5.png
/* Listing only image name links to image hosted in "pieces" folder in site root. Automatically links to full-size image  */
- { image: 'AAS2-1.png', url: '/pieces/AAS2.pdf' }
/* Listing image + url like above lets you set URL. Set either relative or absolute */

text: <
/* OPTIONAL. If text requires multiple paragraphs, links, or anything other than HTML characters, go below the line to fill in that content. */

category: content-strategy   /* change to reflect section it will live in (follow html class/id rules) */
permalink: /content-strategy/back-to-school/   /* change to reflect section AND title name (follow URL rules) */
---

<ol>
  <li><a href="{{ site.github.url }}{{ site.data.global.pieces_dir }}AAS1.pdf">
  	PDF 1/5 - Now is the Time
  </a></li>
  <li><a href="{{ site.github.url }}{{ site.data.global.pieces_dir }}AAS2.pdf">
  	PDF 2/5 - Online or On-Campus
  </a></li>
</ol>
<p>The marketing team at All Star collaborated on conducting ethnographic consumer research, which determined the most common barriers to engagement for our potential customers. These downloadable booklets&mdash;from a series of five&mdash;were designed to refute these barriers and provide encouragement and evidence to inspire them to take action. </p>
```
