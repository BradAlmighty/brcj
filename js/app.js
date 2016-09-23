//Location Arrays
var cafes = [{"place":{"lat":34.0326,"address":"1401 Montana Avenue","lng":-118.495125},"meta":{"name":"Peet's Coffee & Tea","details":"Coffee: $4<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.019199,"address":"930 Broadway","lng":-118.4884838},"meta":{"name":"Funnel Mill Rare","details":"Coffee: $3<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.0251998901,"address":"1725 Broadway","lng":-118.481002808},"meta":{"name":"18th Street Coffee House","details":"Coffee: $2<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.009168,"address":"306 Pico Blvd","lng":-118.4877943},"meta":{"name":"Flying Saucers Caffeine and Art","details":"Coffee: $1<br>Mocha: $4"},"type":"cafe"},{"place":{"lat":33.9992868,"address":"2908 Main St","lng":-118.4810609},"meta":{"name":"Groundwork Coffee Co.","details":"Coffee: $1<br>Mocha: $5"},"type":"cafe"},{"place":{"lat":34.0287017822,"address":"925 Montana Ave","lng":-118.5},"meta":{"name":"Caffe Luxxe","details":"Coffee: $1<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":33.9980518,"address":"3101 Main St","lng":-118.4795932},"meta":{"name":"Espresso Cielo","details":"Coffee: $2<br>Mocha: $2"},"type":"cafe"},{"place":{"lat":34.0268558,"address":"702 Montana Ave","lng":-118.5017326},"meta":{"name":"Primo Passo Coffee","details":"Coffee: $3<br>Mocha: $2"},"type":"cafe"},{"place":{"lat":34.0229988098,"address":"829 Wilshire Blvd","lng":-118.494003296},"meta":{"name":"The Coffee Bean & Tea Leaf","details":"Coffee: $3<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.029331,"address":"2425 Colorado Ave, Ste B118","lng":-118.473237},"meta":{"name":"Brew Coffee Bar","details":"Coffee: $4<br>Mocha: $2"},"type":"cafe"},{"place":{"lat":34.0166865339,"address":"413 Santa Monica Blvd","lng":-118.495037556},"meta":{"name":"The Refinery","details":"Coffee: $3<br>Mocha: $3"},"type":"cafe"},{"place":{"lat":34.027043,"address":"3301 Pico Blvd","lng":-118.455616},"meta":{"name":"Unurban","details":"Coffee: $1<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.047415,"address":"225 26th St","lng":-118.490682},"meta":{"name":"Caffe Luxxe","details":"Coffee: $1<br>Mocha: $2"},"type":"cafe"},{"place":{"lat":34.0156233,"address":"1434 4th St","lng":-118.4944065},"meta":{"name":"MoGo Coffee","details":"Coffee: $4<br>Mocha: $3"},"type":"cafe"},{"place":{"lat":33.99865,"address":"212 Pier Ave","lng":-118.479706},"meta":{"name":"212 Pier","details":"Coffee: $2<br>Mocha: $3"},"type":"cafe"},{"place":{"lat":34.0043601344,"address":"2327 Main St","lng":-118.485810757},"meta":{"name":"Urth Caffe","details":"Coffee: $2<br>Mocha: $5"},"type":"cafe"},{"place":{"lat":34.013063,"address":"1741 Ocean Park Blvd","lng":-118.465697},"meta":{"name":"Caf√© Bolivar","details":"Coffee: $1<br>Mocha: $2"},"type":"cafe"},{"place":{"lat":34.020421,"address":"3150 Ocean Park Blvd","lng":-118.452514},"meta":{"name":"The Coffee Bean & Tea Leaf","details":"Coffee: $2<br>Mocha: $5"},"type":"cafe"},{"place":{"lat":34.0326,"address":"1401 Montana Avenue","lng":-118.495125},"meta":{"name":"Peet's Coffee & Tea","details":"Coffee: $1<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.0260096,"address":"1300 Wilshire Blvd","lng":-118.4895425},"meta":{"name":"La Monarca Bakery","details":"Coffee: $3<br>Mocha: $6"},"type":"cafe"},{"place":{"lat":34.0033827,"address":"2439 Main Street","lng":-118.4849192},"meta":{"name":"Peet's Coffee & Tea","details":"Coffee: $1<br>Mocha: $4"},"type":"cafe"},{"place":{"lat":34.0191001892,"address":"1149 3rd St","lng":-118.5},"meta":{"name":"Infuzion Caf√©","details":"Coffee: $2<br>Mocha: $4"},"type":"cafe"},{"place":{"lat":34.013739,"address":"1804 Lincoln Blvd","lng":-118.484652},"meta":{"name":"The Coffee Bean","details":"Coffee: $2<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.0266990662,"address":"1260 15th St","lng":-118.486999512},"meta":{"name":"Cutting Board","details":"Coffee: $4<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.0149002075,"address":"200 Santa Monica Blvd","lng":-118.497001648},"meta":{"name":"The Coffee Bean & Tea Leaf","details":"Coffee: $1<br>Mocha: $3"},"type":"cafe"},{"place":{"lat":34.01049,"address":"2127 Lincoln Blvd","lng":-118.480313},"meta":{"name":"Novel Cafe","details":"Coffee: $2<br>Mocha: $6"},"type":"cafe"},{"place":{"lat":34.0203018188,"address":"10117 Washington Blvd, Culver City, CA","lng":-118.400001526},"meta":{"name":"Conservatory For Coffee, Tea & Cocoa","details":"Coffee: $2<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.005616,"address":"2209 Main St","lng":-118.486856},"meta":{"name":"Kafe K","details":"Coffee: $4<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.0082015991,"address":"1802 Ocean Ave","lng":-118.490997314},"meta":{"name":"Cora's Coffee Shoppe","details":"Coffee: $1<br>Mocha: $3"},"type":"cafe"},{"place":{"lat":34.0158393,"address":"1356 3rd St Promenade","lng":-118.4964093},"meta":{"name":"Starbucks","details":"Coffee: $3<br>Mocha: $5"},"type":"cafe"},{"place":{"lat":34.032365,"address":"2461-A Santa Monica Blvd","lng":-118.475469},"meta":{"name":"Starbucks","details":"Coffee: $2<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.0393574,"address":"11309 Mississippi Ave, Los Angeles, CA","lng":-118.4428186},"meta":{"name":"Coffee Tomo","details":"Coffee: $2<br>Mocha: $6"},"type":"cafe"},{"place":{"lat":34.0379019,"address":"11301 W Olympic Blvd, Los Angeles, CA","lng":-118.4414427},"meta":{"name":"Balconi Coffee Company","details":"Coffee: $2<br>Mocha: $3"},"type":"cafe"},{"place":{"lat":33.9910939,"address":"1331 Abbot Kinney Blvd, Venice, CA","lng":-118.466894},"meta":{"name":"Intelligentsia Coffee & Tea","details":"Coffee: $1<br>Mocha: $4"},"type":"cafe"},{"place":{"lat":33.9589004517,"address":"200 Culver Blvd, Playa Del Rey, CA","lng":-118.447998047},"meta":{"name":"Tanner's Coffee Co","details":"Coffee: $1<br>Mocha: $7"},"type":"cafe"},{"place":{"lat":34.018279,"address":"1201 3rd St Promenade","lng":-118.498708},"meta":{"name":"Starbucks Coffee","details":"Coffee: $2<br>Mocha: $5"},"type":"cafe"},{"place":{"lat":34.0137687,"address":"395 Santa Monica Pl","lng":-118.4942118},"meta":{"name":"Groundwork Coffee Company","details":"Coffee: $4<br>Mocha: $5"},"type":"cafe"},{"place":{"lat":33.9995994568,"address":"2901 Main St","lng":-118.481002808},"meta":{"name":"The Coffee Bean & Tea Leaf","details":"Coffee: $3<br>Mocha: $3"},"type":"cafe"},{"place":{"lat":34.040373,"address":"3105 Wilshire Blvd","lng":-118.472759},"meta":{"name":"Starbucks","details":"Coffee: $2<br>Mocha: $2"},"type":"cafe"},{"place":{"lat":34.029398,"address":"2425 Colorado Ave","lng":-118.472746},"meta":{"name":"Tully's Coffee","details":"Coffee: $3<br>Mocha: $6"},"type":"cafe"},{"place":{"lat":34.016478,"address":"1312 3rd Street Promenade","lng":-118.497535},"meta":{"name":"The Coffee Bean & Tea Leaf","details":"Coffee: $4<br>Mocha: $2"},"type":"cafe"}];
var lots = [{"place":{"lat":34.018203,"address":"1234 4th St.","lng":-118.497761},"meta":{"name":"Structure 1","details":"open 24 hours<br>8am - 6pm; first 2 hrs. free,<br>$1 ea additional 30 minutes;<br>$9 maximum daily; <br>entering after 6 pm; $5 flat rate<br>total capacity 338 spaces<br> "},"type":"lot"},{"place":{"lat":34.016861,"address":"1235 2nd St.","lng":-118.498889},"meta":{"name":"Structure 2","details":"open 24 hours<br>8am - 6pm; first 2 hrs. free,<br>$1 ea additional 30 minutes;<br>$9 maximum daily; <br>entering after 6 pm; $5 flat rate<br>total capacity 647 spaces"},"type":"lot"},{"place":{"lat":34.017061,"address":"1320 4th St.","lng":-118.496456},"meta":{"name":"Structure 3","details":"open 24 hours<br>8am - 6pm; first 2 hrs. free,<br>$1 ea additional 30 minutes;<br>$9 maximum daily; <br>entering after 6 pm; $5 flat rate<br>total capacity 339 spaces"},"type":"lot"},{"place":{"lat":34.015967,"address":"1321 2nd St.","lng":-118.497917},"meta":{"name":"Structure 4","details":"open 24 hours<br>8am - 6pm; first 2 hrs. free,<br>$1 ea additional 30 minutes;<br>$9 maximum daily; <br>entering after 6 pm; $5 flat rate<br>total capacity 652 spaces"},"type":"lot"},{"place":{"lat":34.015231,"address":"1440 4th St.","lng":-118.494303},"meta":{"name":"Structure 5","details":"open 24 hours<br>8am - 6pm; first 2 hrs. free,<br>$1 ea additional 30 minutes;<br>$9 maximum daily; <br>entering after 6 pm; $5 flat rate<br>total capacity 665 spaces"},"type":"lot"},{"place":{"lat":34.01444,"address":"Santa Monica Place Mall","lng":-118.49372},"meta":{"name":"Structure 7","details":"open 24 hours<br>8am - 6pm; first 2 hrs. free,<br>$1 ea additional 30 minutes;<br>$9 maximum daily; <br>entering after 6 pm; $5 flat rate<br>Corner of 4th &amp; Broadway"},"type":"lot"},{"place":{"lat":34.01289,"address":"Santa Monica Place Mall","lng":-118.49372},"meta":{"name":"Structure 8","details":"open 24 hours<br>8am - 6pm; first 2 hrs. free,<br>$1 ea additional 30 minutes;<br>$9 maximum daily; <br>entering after 6 pm; $5 flat rate<br>Corner of 2nd St. &amp; Colorado Ave."},"type":"lot"},{"place":{"lat":34.019575,"address":"1136 4th St.","lng":-118.499378},"meta":{"name":"Structure 9","details":"open 24 hours<br>8am - 6pm; first 2 hrs. free,<br>$1 ea additional 30 minutes;<br>$9 maximum daily; <br>entering after 6 pm; $5 flat rate<br>total capacity 294 spaces"},"type":"lot"},{"place":{"lat":34.01158,"address":"333 Civic Center Dr.","lng":-118.48997},"meta":{"name":"Civic Center","details":"Operates 24 hrs. daily<br>Enter at Civic Center Drive &amp; 4th St.<br>$1.50\/20 minutes; $9 maximum daily<br>Entering after 6 pm or weekends:  $3 flat rate<br>744 spaces total"},"type":"lot"},{"place":{"lat":34.019,"address":"601 Santa Monica Blvd.","lng":-118.49361},"meta":{"name":"Library","details":"Enter at 7th St., north of Santa Monica Blvd.<br>525 spaces total<br>8am - 11pm: First 15 minutes free;<br>$.50\/30 minutes; $10 maximum daily<br>Entering after 6 pm or weekends: flat rate $3"},"type":"lot"},{"place":{"lat":34.0193044597,"address":"1125 3rd St.","lng":-118.499836877},"meta":{"name":"Structure10","details":"82 metered spaces: 79 @ 3 hours<br>$.75 each hour; open 24 hours a day"},"type":"lot"},{"place":{"lat":34.0097205389,"address":"North of Pico Blvd. between Main St. &amp; 4th St., east side","lng":-118.488141548},"meta":{"name":"Civic Lot","details":"Operates 24 hrs. daily<br>$1.50\/20 minutes; $9 maximum daily<br>Entering after 6 pm or weekends:  $3 flat rate<br>"},"type":"lot"},{"place":{"lat":34.010806,"address":"1550\/1440 Pacific Coast Hwy.","lng":-118.497361},"meta":{"name":"Lot 1 North","details":"open 7:30am - 12am M-F;<br>7:30am - 1am Sat\/Sun<br>$8 per entry<br>total capacity 1129 spaces"},"type":"lot"},{"place":{"lat":34.0175748081,"address":"1060 Pacific Coast Hwy.","lng":-118.503927407},"meta":{"name":"Lot 4 North","details":"open 7am - 4 pm<br>$8 per entry<br>87 spaces total"},"type":"lot"},{"place":{"lat":34.0179351259,"address":"1030 Pacific Coast Hwy.","lng":-118.50436858},"meta":{"name":"Lot 5 North","details":"open 7am - 4 pm<br>$8 per entry<br>57 spaces total"},"type":"lot"},{"place":{"lat":34.009333,"address":"West end of Colorado Ave. on the Pier ","lng":-118.496389},"meta":{"name":"Pier Deck","details":"7:30 - 12am M-F: $7<br>7:30 - 1am Sat\/Sun: $8<br>total capacity 277 spaces"},"type":"lot"},{"place":{"lat":34.0188702322,"address":"950 Pacific Coast Hwy.","lng":-118.505541747},"meta":{"name":"Lot 6 North","details":"open 7am - 4 pm<br>$8 per entry<br>75 spaces total"},"type":"lot"},{"place":{"lat":34.0193707463,"address":"930 Pacific Coast Hwy.","lng":-118.506196},"meta":{"name":"Lot 7 North","details":"open 7am - 4 pm<br>$8 per entry<br>85 spaces total"},"type":"lot"},{"place":{"lat":34.021,"address":"810 Pacific Coast Hwy.","lng":-118.508333},"meta":{"name":"Lot 8 North","details":"open 7am - 4 pm<br>$8 per entry<br>214 spaces total"},"type":"lot"},{"place":{"lat":34.023312386,"address":"530 Pacific Coast Hwy.","lng":-118.511280472},"meta":{"name":"Lot 9 North","details":"open 7am - 4 pm<br>$8 per entry<br>79 spaces total"},"type":"lot"},{"place":{"lat":34.023972,"address":"445-415 Pacific Coast Hwy.","lng":-118.512472},"meta":{"name":"Beach House Lot","details":"open 7am - 5 pm $8 per entry<br>274 spaces total"},"type":"lot"},{"place":{"lat":34.0099541788,"address":"1640 (S-T) Appian Way","lng":-118.495048016},"meta":{"name":"Lot 1 South","details":"2 hour maximum parking<br>7 am - 4 pm<br>66 spaces total<br>"},"type":"lot"},{"place":{"lat":34.0090571462,"address":"1670 Appian Way","lng":-118.494109447},"meta":{"name":"Lot 2 South","details":"7 am - 4 pm<br>$7 weekends &amp; holidays;<br>$5 weekdays<br>63 spaces total"},"type":"lot"},{"place":{"lat":34.0075968885,"address":"1750 Appian Way","lng":-118.492572458},"meta":{"name":"Lot 3 South","details":"7am - 4pm<br> $7 weekends  &amp; holidays;<br>$5 weekdays<br>total capacity 120 spaces"},"type":"lot"},{"place":{"lat":34.003028,"address":"2030 Ocean Ave.","lng":-118.488639},"meta":{"name":"Lot 4 South","details":"7 am - 5 pm<br> $8 weekends  &amp; holidays;<br>$7 weekdays<br>short-term parking - 177 spaces<br>$1 per hour, two hour maximum<br>total capacity 1319 spaces"},"type":"lot"},{"place":{"lat":33.998833,"address":"2600 Barnard Way","lng":-118.484722},"meta":{"name":"Lot 5 South","details":"7 am - 5 pm<br> $8 weekends  &amp; holidays;<br>$7 weekdays<br>784 spaces total<br>short-term parking - 87 spaces<br>$1 per hour, two hour maximum<br>"},"type":"lot"},{"place":{"lat":34.0012600183,"address":"110 Hill St.","lng":-118.483533574},"meta":{"name":"Lot 9","details":"Enter from Kinney St., Hill St. or off of Main St. at Ashland Ave.<br>175 metered spaces: 165 @ 3 hours, 10 @ 10 hours<br>$1 per hour; open 24 hours<br>Change machine available at this location"},"type":"lot"},{"place":{"lat":33.9990350353,"address":"111 Hill St.","lng":-118.481299235},"meta":{"name":"Lot 10","details":"Enter from Hill St.<br>40 metered spaces: 37 @ 3 hours<br>$1 per hour; open 24 hours"},"type":"lot"},{"place":{"lat":34.0035983845,"address":"170 Hollister Ave.","lng":-118.485858714},"meta":{"name":"Lot 11","details":"Enter from Hollister Ave. or through entrance at 2934 Main St.<br>110 metered spaces: 95 @ 3 hours, 12 @ 10 hours<br>$1 per hour; open 24 hours<br>Change machine available at this location"},"type":"lot"},{"place":{"lat":34.004679,"address":"150 Strand St.","lng":-118.487009},"meta":{"name":"Lot 26","details":"Enter from Strand St.<br>15 metered spaces: 8 @ 3 hours, 6 @ 10 hours<br>$1 per hour; open 24 hours"},"type":"lot"},{"place":{"lat":34.01810833,"address":"1323 5th St.","lng":-118.4951389},"meta":{"name":"Lot 28","details":"27 spaces; open 24 hours<br>$1 per 30 min., $9 maximum"},"type":"lot"},{"place":{"lat":34.01795556,"address":"1320 5th St.","lng":-118.4953944},"meta":{"name":"Lot 27","details":"91 spaces; open 24 hours<br>$1 per 30 min., $9 maximum"},"type":"lot"},{"place":{"lat":34.0257371337,"address":"1217 Euclid St.","lng":-118.488941816},"meta":{"name":"Lot 7","details":"50 metered spaces total: <br>24 @ 3 hours, 24 @ 10 hours<br>$.75 each hour; open 24 hours"},"type":"lot"},{"place":{"lat":34.0284350224,"address":"1146 16th St. just north of Wilshire Blvd.","lng":-118.48762886},"meta":{"name":"Lot 8","details":"22 metered spaces: 21 @ 3 hours<br>$.75 each hour; open 24 hours<br>"},"type":"lot"},{"place":{"lat":34.0266032735,"address":"1211 14th St.","lng":-118.488115012},"meta":{"name":"Lot 12","details":"50 metered spaces: 11 @ 1 hour, 37 @ 3 hours<br>$.75 each hour; open 24 hours<br>"},"type":"lot"}];
var arrCombined = cafes.concat(lots); //create a single list of locations for the sidebar

require(["esri/Map", "esri/views/MapView", "esri/layers/GraphicsLayer",
    "esri/Graphic", "esri/geometry/Point",
    "esri/symbols/PictureMarkerSymbol", "esri/widgets/Zoom",
    "esri/PopupTemplate", "esri/widgets/Attribution", "dojo/query",
    "dojo/domReady!"
], function(Map, MapView, GraphicsLayer, Graphic, Point,
    PictureMarkerSymbol, PopupTemplate, Attribution, query) {
    //create a map
    var map = new Map({
        basemap: "streets",
        slider: false,
    });

    //create a view
    var view = new MapView({
        container: "viewDiv", //ref to DOM node that will contain the view
        map: map, //ref to map already made
        zoom: 13, //sets zoom based on level of detail (LOD)
        center: [-118.485783, 34.014789], //sets the center point in Lon/Lat
    });

    //remove the text across the bottom of the map
    view.ui.remove("attribution");

    //create the graphic layers so icons can be toggled sperately
    var cafeLayer = new GraphicsLayer({});
    var lotsLayer = new GraphicsLayer({});
    var template = new PopupTemplate({
        title: "{NAME}",
        content: "<p>{ADDRESS}</p><button>Get Directions</button>"
    });

    //add popup template to our graphic layers
    cafeLayer.popupTemplate = template;
    lotsLayer.popupTemplate = template;

    //creates the series of points for the cafe locations
    function drawCafes() {
        for (i = 0; i < cafes.length; i++) {
            // First create a point geometry
            var point = new Point({
                longitude: cafes[i].place.lng,
                latitude: cafes[i].place.lat
            });
            // Create a symbol for drawing the point
            var markerSymbol = new PictureMarkerSymbol({
                url: "img/cup.png",
                width: "25px",
                height: "25px"
            });
            // Create a graphic and add the geometry and symbol to it
            var pointGraphic = new Graphic({
                geometry: point,
                symbol: markerSymbol
            });
            // Add attributes for point popup details
            pointGraphic.attributes = {
                "NAME": cafes[i].meta.name,
                "ADDRESS": cafes[i].place.address
            };
            //add point to cafe graphics layer
            cafeLayer.graphics.add(pointGraphic);
            view.popup.content = [{
                type: "text",
                text: cafes[i].meta.name
            }, {
                type: "text",
                text: cafes[i].place.address
            }, {
                type: "text",
                text: cafes[i].meta.details
            }];
        } //end for loop
    }

    function drawLots() {
            for (i = 0; i < lots.length; i++) {
                // First create a point geometry (this is the location of the Titanic)
                var point = new Point({
                    longitude: lots[i].place.lng,
                    latitude: lots[i].place.lat
                });
                // Create a symbol for drawing the point
                var markerSymbol = new PictureMarkerSymbol({
                    url: "img/car.png",
                    width: "25px",
                    height: "25px"
                });
                // Create a graphic and add the geometry and symbol to it
                var pointGraphic = new Graphic({
                    geometry: point,
                    symbol: markerSymbol
                });
                // Add attributes for point popup details
                pointGraphic.attributes = {
                    "NAME": lots[i].meta.name,
                    "ADDRESS": lots[i].place.address
                };
                //add point to parking lot layer
                lotsLayer.graphics.add(pointGraphic);
            }
        }

    //Draw all of the points for each location
    drawCafes();
    drawLots();

    //add cafes to the map
    map.add(cafeLayer);

    //add lots to the map
    map.add(lotsLayer);

    //populate badges on toggle buttons
    document.getElementById("cafeBadge").innerHTML = cafes.length;
    document.getElementById("lotsBadge").innerHTML = lots.length;

    //function to hide/display the cafe markers on the map and in list with button click
    document.getElementById("cafeBtn").addEventListener("click",
        toggleCafeVisibility);

    function toggleCafeVisibility() {
            var cafeList = listElement.getElementsByTagName("li");
            if (cafeLayer.visible === true) {
                cafeLayer.visible = false;
                this.className = "btn btn-default btn-block"
                for (i = 0; i < cafeList.length; i++) {
                    if (cafeList[i].classList.contains("cafeItem")) {
                        cafeList[i].classList.add("hidden");
                    }
                }
            } else {
                cafeLayer.visible = true;
                this.className = "btn btn-primary btn-block";
                for (i = 0; i < cafeList.length; i++) {
                    if (cafeList[i].classList.contains("cafeItem")) {
                        cafeList[i].classList.remove("hidden");
                    }
                }
            }
        }

    //function to hide/display the parking lot markers on the map and in the list with button click
    document.getElementById("lotsBtn").addEventListener("click",
        toggleLotsVisibility);

    function toggleLotsVisibility() {
            var lotsList = listElement.getElementsByTagName("li");
            if (lotsLayer.visible === true) {
                lotsLayer.visible = false;
                this.className = "btn btn-default btn-block";
                for (i = 0; i < lotsList.length; i++) {
                    if (lotsList[i].classList.contains("lotItem")) {
                        lotsList[i].classList.add("hidden");
                    }
                }
            } else {
                lotsLayer.visible = true;
                this.className = "btn btn-primary btn-block";
                for (i = 0; i < lotsList.length; i++) {
                    if (lotsList[i].classList.contains("lotItem")) {
                        lotsList[i].classList.remove("hidden");
                    }
                }
            }
        }

    //Fill the side bar list with a sorted list of items
    var listElement = document.getElementById("mainList");
    sort('meta.name', arrCombined);
    for (i = 0; i < arrCombined.length; i++) {
        var itemName = arrCombined[i].meta.name;
        var itemAddress = arrCombined[i].place.address;
        var itemDetails = arrCombined[i].meta.details;
        var itemLat = arrCombined[i].place.lat;
        var itemLon = arrCombined[i].place.lng;
        if (arrCombined[i].type == "lot") {
            listElement.insertAdjacentHTML('afterbegin',
                '<li class="listItem list-group-item lotItem" data-lat="' +
                itemLat + '" data-long="' + itemLon +
                '"><img src="img/car.png" alt="Parking Lot" height="20" width="20"/><a href="#"><h5>' +
                itemName + '</h5></a><p>' + itemAddress + '<br/>' +
                itemDetails + '</p></li>');
        } else if (arrCombined[i].type == "cafe") {
            listElement.insertAdjacentHTML('afterbegin',
                '<li class="listItem list-group-item cafeItem" data-lat="' +
                itemLat + '" data-long="' + itemLon +
                '"><img src="img/cup.png" alt="Parking Lot" height="20" width="20"/><a href="#"><h5>' +
                itemName + '</h5></a><p>' + itemAddress + '<br/>' +
                itemDetails + '</p></li>');
        }
    }

    //sorts by nested properties
    function sort(prop, arr) {
        prop = prop.split('.');
        var len = prop.length;
        arr.sort(function(a, b) {
            var i = 0;
            while (i < len) {
                a = a[prop[i]];
                b = b[prop[i]];
                i++;
            }
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        });
        return arr;
    }

    //Dojo object for list events
    var listObject = {
        id: "listObject",
        onClick: function(evt) {
            centerMap(this);
        }
    };

    //Dojo events for the list
    dojo.query(".cafeItem").on("click", listObject.onClick);
    dojo.query(".lotItem").on("click", listObject.onClick);

    //Centers the map on the location of the list item clicked
    function centerMap(obj) {
        var getLat = obj.getAttribute("data-lat");
        var getLon = obj.getAttribute("data-long");
        var pt = new Point({
            latitude: getLat,
            longitude: getLon
        });
        var opts = {
            duration: 3500 //Speed of the animation
        };
        view.goTo({
            target: pt,
            zoom: 17
        }, opts);
    }
});
