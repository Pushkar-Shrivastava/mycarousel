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