var products=[
	
	{picture:"product-1.jpg", description:"Bialetti 11B1682 Cafetière Venus 4 Tasses" , price:"26.90" },

	{picture:"product-2.jpg", description:"Le coffret Loopy Loom de luxe comprend un kit de 4200 élastiques en caoutch" , price:"18.75" },

	{picture:"product-3.jpg", description:"Réchaud à gaz, 2 feux " , price:"43.99" },

	{picture:"product-4.jpg", description:"Ravensburger - 12579 - Puzzle 3d - Tour Eiffel De Nuit - 216 Pièces" , price:"29.64" },

	{picture:"product-5.jpg", description:"LCD Thermomètre à Frigo Réfrigérateur Digital + Sonde" , price:"1.42" },

	{picture:"product-6.jpg", description:"Electrolux Minuteur neuf en métal satine 60 minutes" , price:"7.79" },

	{picture:"product-7.jpg", description:"Bosch mètre laser PLR 15 portée jusqu'à 15 mètres" , price:"59.99" },



];

var game ;



var true_price ;


function RandomProduct()

{
	
// product.length

var random_value = getRandomInteger(0,products.length-1)  ;


var product =   products[random_value]

var elem = document.getElementById("pic_product") ;

elem.src="images/"+product.picture ;


var elem_description = document.getElementById("description") ;

elem_description.innerHTML += "<br>"+product.description +"<br>" ;

true_price = product.price ;

lancerCompteur(30);

console.log(" vrai prix = " + true_price)

}



function TestPrice(event)

{

	

	var elem = document.getElementById("submit-price") ;

		

	value = elem.value;

	var display_result = document.getElementById("screen-result") ;
		
		// display_result.innerHTML


	if (value == true_price)
		{

			// alert("bravo !!!!!!!!!!!!!");

			display_result.innerHTML="bravo !!!!!!!!!!!!!";

			// tourner la roue après

			
			
		}

	else if	(value > true_price)

		{

			// alert("c'est plus petit");
			
			display_result.innerHTML="c'est plus petit";

			
		}

	else

		{

			// alert("c'est plus grand");
			display_result.innerHTML="c'est plus grand";
			
		}

			

	event.preventDefault();

	return false ; /* il ne rafraichit pas la page */

}



function getRandomInteger(min,max){

	var random = Math.random() ;

	var result = random*(max-min+1)+min ;



return Math.floor(result) ;

}

