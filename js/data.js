var ncr = { 
	"MakatiCity" : [ 
    { "city": "Makati", "name"  : "ABE INTERNATIONAL BUSINESS COLLEGE-MAKATI, INC.", "address" : "#95 Gil Puyat Ave., Brgy. Palanan, Makati City", "imgPath" : "images/Letran.jpg" },
    { "city": "Makati", "name"  : "AHTC GLOBAL RESEARCH INSTITUTE, INC.", "address" : "6/F ABBA Bldg., 5756 Limbo St., Kalayaan Ave., Brgy. Pinagkaisahan, Makati City", "imgPath" : "images/Letran.jpg" },
    { "city": "Makati", "name"  : "AIM HIGH TRAINING CENTER", "address" : "301 Guadalupe Commercial Center, Guadalupe, Makati City", "imgPath" : "images/Letran.jpg" },
    { "city": "Makati", "name"  : "AKSEM HOMES FOUNDATION FOR INTEGRATED AND COMPLEMENTARY MEDICINE", "address" : "Maria Alicia Bldg., I 4466 Bautista St. cor. Calatagan St. Palanan Makati City", "imgPath" : "images/Letran.jpg" },
  	{ "city": "Makati", "name"  : "ALPHA SKILLS IMMERSION TRAINING CENTER, INC.", "address" : "Unit 601 Emilia Bldg., 1299 Batangas St., Brgy. San Isidro, Makati City", "imgPath" : "images/Letran.jpg" },
  ], 
				
  "CaloocanCity" : [ 
    { "city": "Caloocan", "name"  : "102 GEM TRAINING CENTER INC", "address" : "#1115 Lirio cor. San Antonio St., Camarin, Caloocan City", "imgPath" : "images/Letran.jpg" },
    { "city": "Caloocan", "name"  : "3R MANPOWER AND TESTING CENTER, INC.", "address" : "9th Ave., Caloocan City", "imgPath" : "images/Letran.jpg" },
    { "city": "Caloocan", "name"  : "ABE INTERNATIONAL BUSINESS COLLEGE-CALOOCAN CAMPUS, INC.", "address" : "328 Big Orange Bldg. Caloocan City", "imgPath" : "images/Letran.jpg" },
    { "city": "Caloocan", "name"  : "ACCESS COMPUTER AND TECHNICAL SCHOOLS", "address" : "2nd & 3rd Floors Consuelo Building, EDSA corner Benin Street, Monumento, Caloocan City", "imgPath" : "images/Letran.jpg" },
  	{ "city": "Caloocan", "name"  : "ADVANCED COMPETENCIES TECHNOLOGICAL MANPOWER ACADEMY (ACTMA) INC.", "address" : "4/F 593-Bldg., Area-A Camarin Road, Almar, Caloocan City", "imgPath" : "images/Letran.jpg" },
  ],

  "MalabonCity" : [ 
    { "city": "Malabon", "name"  : "ASIAN SCIENCE AND TECHNOLOGY INSTITUTE, INC.", "address" : "#25 Mesina St. cor. Sarmiento St. Tinajeros Malabon City", "imgPath" : "images/Letran.jpg" },
    { "city": "Malabon", "name"  : "CITY OF MALABON POLYTECHNIC INSTITUTE, INC.", "address" : "Gov. A. Pascual Ave., Brgy. Concepcion, Malabon City", "imgPath" : "images/Letran.jpg" },
    { "city": "Malabon", "name"  : "DE LA SALLE ARANETA UNIVERSITY, INC.", "address" : "Victoneta Ave., Malabon City", "imgPath" : "images/Letran.jpg" },
    { "city": "Malabon", "name"  : "FOREMOST ACCREDITATION SECURITY TRAINING SCHOOL (FASTS), INC", "address" : "34 Gov. W. Pascual Avenue, Acacia, Malabon City", "imgPath" : "images/Letran.jpg" },
  	{ "city": "Malabon", "name"  : "I LEARN CENTER PHILS., INC.", "address" : "6/F Star J Bldg., 6th Floor, #7 Gov. F. Sevilla Blvd., Tañong, Malabon City", "imgPath" : "images/Letran.jpg" },
  ],   
} 

for(i = 0; i < ncr.MakatiCity.length; i++){
 	$(".grid").append(
 		"<div class='school-item "+ ncr.MakatiCity[i].city +"'>\
 		<div class='inner-item'>\
 		<img src='" + ncr.MakatiCity[i].imgPath + "' class='school-img'>\
 		<div class='school-inner-text'>\
 		<p class='sc-name'>" + ncr.MakatiCity[i].name + "</p>\
 		<p class='sc-address'>" + ncr.MakatiCity[i].address + "</p>\
 		</div></div></div>"
 	);
}

for(i = 0; i < ncr.CaloocanCity.length; i++){
 	$(".grid").append(
 		"<div class='school-item "+ ncr.CaloocanCity[i].city +"'>\
 		<div class='inner-item'>\
 		<img src='" + ncr.CaloocanCity[i].imgPath + "' class='school-img'>\
 		<div class='school-inner-text'>\
 		<p class='sc-name'>" + ncr.CaloocanCity[i].name + "</p>\
 		<p class='sc-address'>" + ncr.CaloocanCity[i].address + "</p>\
 		</div></div></div>"
 	);
}

for(i = 0; i < ncr.MalabonCity.length; i++){
 	$(".grid").append(
 		"<div class='school-item "+ ncr.MalabonCity[i].city +"'>\
 		<div class='inner-item'>\
 		<img src='" + ncr.MalabonCity[i].imgPath + "' class='school-img'>\
 		<div class='school-inner-text'>\
 		<p class='sc-name'>" + ncr.MalabonCity[i].name + "</p>\
 		<p class='sc-address'>" + ncr.MalabonCity[i].address + "</p>\
 		</div></div></div>"
 	);
}

     

