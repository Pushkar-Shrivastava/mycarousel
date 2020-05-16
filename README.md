bootstrap carousel:-

1) in terminal :- $ npm install --save jquery bootstrap
2) in angular.json file under build tree
     "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]
3) in terminal :- $ ng g c mycarousel
4) copied corausel from "https://getbootstrap.com/docs/4.5/components/carousel/" and put in mycarousel.component.html
5) added selector for mycarousel in app.component.html
6) images are in assets folder.

owl carousel:-

1) in terminal:- $ npm install --save owl.carousel
2) "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/owl.carousel/dist/assets/owl.carousel.min.css",
              "./node_modules/owl.carousel/dist/assets/owl.theme.default.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
              "node_modules/owl.carousel/dist/owl.carousel.min.js"
            ]
3) in terminal :- ng g c owlcarousel
4) copied html from https://owlcarousel2.github.io/OwlCarousel2/demos/stagepadding.html
5) wrote jquery(setup code) code in owlcarousel.component.js
6) added a css in style.css and used selector in app.component.html
    i don't know how to make arrows signs move to left and right side,you give it a try.