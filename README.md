# Erica's Portfolio Site

The site has 5 pages. Only the 3 content heavy pages have Javascript interactivity for the carousel and the mobile menu.

####Editing Code:
* Always pull the newest code from github if you haven't edited in a few months
* GH Pages requires 2 branches : gh-pages and master
* Edit gh-pages. When finished, push changes to Github's server.
* In Github, make a pull-request. Base will be master, Compare will be gh-pages.
* Changes will be live once both branches are updated

####Adding new portfolio pieces:
1. Upload photos to "pieces" folder in the root.
2. The markup has a few layers to make it work. Your best bet is to copy an existing piece and edit it or use the template below
3. The id for the carousel sets it functionality. Set an HTML appropriate name (e.g. "starbucksGilt" or "_NAME_" below), and use that for the following:
  * div _id="NAME"_ class="carousel slide" - Carousel container
  * li _data-target="#NAME"_ data-slide-to="1" - Carousel indicator button
  * a class="carousel-control left" _href="#NAME"_ data-slide="prev" - Carousel left button
  * a class="carousel-control right" _href="#NAME"_ data-slide="next" - Carousel right button
4. Place image links in carousel items
5. Add description below

#### Piece template
          <!-- [NEW ITEM] -->
          <div class="piece">
            <div class="row">
              <div class="col-md-12 title">
                <h2>[ITEM NAME]</h2>
                <h5>@ [COMPANY]</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div id="[ITEM HTML NAME]" class="carousel slide">
                  <!-- Indicator buttons -->
                  <ol class="carousel-indicators">
                    <li data-target="#[ITEM HTML NAME]" data-slide-to="0" class="active"></li>
                    <li data-target="#[ITEM HTML NAME]" data-slide-to="1"></li>
                  </ol>
                  <!-- Carousel items -->
                  <div class="carousel-inner">
                    <div class="active item"><img src="pieces/[ITEM FILENAME]" /></div>
                    <div class="item"><img src="pieces/[ITEM FILENAME]" /></div>
                  </div>
                  <!-- Carousel nav -->
                  <a class="carousel-control left" href="#[ITEM HTML NAME]" data-slide="prev">&lsaquo;</a>
                  <a class="carousel-control right" href="#[ITEM HTML NAME]" data-slide="next">&rsaquo;</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="description">
                  <p>[HERE IS THE DESCRIPTION FOR YOUR NEW PORTFOLIO ADDITION]</p>
                </div>
              </div>
            </div>
          </div>
