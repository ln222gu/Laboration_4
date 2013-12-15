"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den vÃ¤rdet 10 och returnera variablen
function test1() {
	
	var tio = 10;
    return tio;
	
	
}


/*
* TEST 2
*/
// Skapa tvÃ¥ variabler och tilldela dessa de numeriska vÃ¤rdena 2.5 och 8. 
// Multiplicera sedan de tvÃ¥ variablerna, returnera produkten
function test2() {
	// Dålig på matte 
	var tva = 2.5;
	var atta = 8;
	var svar;
	svar = atta * tva;
	return svar;

}


/*
* TEST 3
*/
// Du fÃ¥r tvÃ¥ variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera resultatet av denna berÃ¤kning
function test3(tal1, tal2) {
	
	var svar;
	svar = tal1 - tal2;
	return svar;
	
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// AnvÃ¤nd funktionen Math.round
function test4(tal) {
	
    var svar;
    svar = Math.round(tal);
	return svar;
}


/*
* TEST 5
*/
// returnera lÃ¤ngden pÃ¥ variablen text som kommer in som parameter. Variablen Ã¤r av datatypen string
function test5(text) {
	
	var svar;
	svar = text.length;
	return svar;
	
	
}


/*
* TEST 6
*/
// Returnera den nÃ¤st sista bokstaven i textstrÃ¤ngen som kommer in i parametern text
function test6(text) {
    
    var svar;
    svar = text.charAt(text.length -2);
    return svar;
	
}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textstrÃ¤ng pÃ¥ formen: "efternamn, fÃ¶rnamn"
// Exempelvis, innehÃ¥ller firstname vÃ¤rdet "Greta" och surname vÃ¤rdet "Karlsson"
// ska du returnera textstrÃ¤ngen "Karlsson, Greta"
function test7(firstname, surname) {
	
	var svar;
	svar = surname +", "+ firstname;
	return svar;
	
}


/*
* TEST 8
*/
// strÃ¤ngen som kommer in med namnet word Ã¤r en textstrÃ¤ng som innhÃ¥ller tvÃ¥ ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texstrÃ¤ngen "hej hopp" in ska alltsÃ¥ textstrÃ¤ngen "hopp" returneras
// Det finns flera sÃ¤tt att lÃ¶sa denna uppgift
// Ett tips kan vara att studera strÃ¤ngfunktionera indexOf och substr
//(se lÃ¤nktips i handledningen)
function test8(words) {
	
	var svar;
	var number;
	number = words.indexOf(" ");
	svar = words.substring(number +1);
	return svar;
}

/*
* TEST 9
*/
// Om numret i parametern number Ã¤r stÃ¶rre eller lika med 100 ska en boolean true returneras
// annars ska en boolean false resturneras
function test9(number) {
	
	var svar;
    if(number >= 100) { 
        svar = true;
    }
    else {
        svar = false;
    }
	return svar;
}

/*
* TEST 10
*/
// Om parametern epost ELLER namn Ã¤r tomma strÃ¤ngar ska texten "Du har glÃ¶mt att ange namn eller e-post"
// annars ska ytterligare en test gÃ¶ras ifall variablen epost innehÃ¥ller ett @-tecken. Ã„r det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// FÃ¶r att kolla om en textstrÃ¤ng innehÃ¥ller ett speciellt tecken kan funktionen indexOf anvÃ¤ndas 
//(se lÃ¤nktips i handledningen)

function test10(epost, namn) {
	
	var svar;
	if(epost === "" || namn === "") {
	    svar = "Du har glÃ¶mt att ange namn eller e-post";
    }
    else if(epost.indexOf("@") >= 0) {
       svar = "Ditt meddelande skickas"; 
    }
    else {
        svar = "Ange en e-postadress";
    }
    return svar;
}




/*
* TEST 11
*/
// Du fÃ¥r en array som parameter till funktionen
// Returnera det mittersta vÃ¤rdet i denna array
// Ett tips kan vara att man kan behÃ¶va anvÃ¤nda Math.round hÃ¤r fÃ¶r att rÃ¤kna 
// ut det mittersta indexet i arrayen
//(se lÃ¤nktips i handledningen)
function test11(arr) {
	
	var index;
	
	index = Math.floor(arr.length / 2);
	return arr[index];
}


/*
* TEST 12
*/
// Du fÃ¥r en array arr som parameter till funktionen
// Arrayen innehÃ¥ller ett antal tal. RÃ¤kna ut medelvÃ¤rdet av dessa tal och returnera detta
// MedelvÃ¤rdet Ã¤r summan av alla tal i arrayen delat med antalet tal i arrayen
// AnvÃ¤nd en for-loop fÃ¶r att lÃ¶sa problemet
function test12(arr) {
	
	var summa = 0;
	var svar;
	
	for(var i = 0; i < arr.length; i += 1) {
	    summa += arr[i];
	}
	
	svar = summa / arr.length;
	return svar;
	
}




















/**
Kod fÃ¶r testning. Koden hÃ¤r under fÃ¥r du INTE rÃ¶ra!!
****************************************************
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej dÃ¥!") === "dÃ¥!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glÃ¶mt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glÃ¶mt att ange namn eller e-post"
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade fÃ¶rsta laborationen! GlÃ¶m inte att gÃ¶ra en release pÃ¥ github. Bra jobbat!");
}

