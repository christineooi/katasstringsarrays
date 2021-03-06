const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

function displayResults(presults,probnum){
    var newHead = document.createElement("h4");
    newHead.textContent = probnum;
    var newDiv = document.createElement("div");
    newDiv.textContent = JSON.stringify(presults);
    document.getElementById("results").appendChild(newHead);
    document.getElementById("results").appendChild(newDiv);
}

// 1
var citiesArray = gotCitiesCSV.split(",");
displayResults(citiesArray, "1.");
// 2 
var words = bestThing.split(" ");
displayResults(words, "2.");
// 3
var comSepStr = gotCitiesCSV.replace(/,/g,";");
displayResults(comSepStr, "3.");
// 4
var csvCities = lotrCitiesArray.join(",");
displayResults(csvCities,"4.");
//5
var firstFive = lotrCitiesArray.slice(0,5);
displayResults(firstFive,"5.");
//6
var lastFive = lotrCitiesArray.slice(-5);
displayResults(lastFive,"6.");
// 7 
var thirdToFifth = lotrCitiesArray.slice(2,5);
displayResults(thirdToFifth,"7.");
// 8 
var newArray = lotrCitiesArray.splice(2,1);
displayResults(lotrCitiesArray,"8.");
// 9
var newArray = lotrCitiesArray.splice(5,2);
displayResults(lotrCitiesArray,"9.");
// 10
var newArray = lotrCitiesArray.splice(2,0,"Rohan");
displayResults(lotrCitiesArray,"10.");
// 11
var newArray = lotrCitiesArray.splice(5,1,"Deadest Marshes");
displayResults(lotrCitiesArray,"11.");
// 12
var newStr = bestThing.slice(0,14);
displayResults(newStr,"12.");
// 13
var newStr = bestThing.slice(-12);
displayResults(newStr,"13.");
// 14
var newStr = bestThing.slice(23,38);
displayResults(newStr,"14.");
// 15
var newStr = bestThing.substring(bestThing.length - 12);
displayResults(newStr,"15.");
// 16
var newStr = bestThing.substr(23,15);
displayResults(newStr,"16.");
// 17
var position = bestThing.indexOf("only");
displayResults(position,"17.");
// 18 Find last space and add one
var position = bestThing.lastIndexOf(" ") + 1;
displayResults(position,"18.");
// 19 
// var newStr = gotCitiesCSV.match(/aa|ee|ii|oo|uu/g);
var newArray = [];
for (var i=0; i<citiesArray.length; i++){
    if (citiesArray[i].includes("aa") || citiesArray[i].includes("ee") || citiesArray[i].includes("ii") 
        || citiesArray[i].includes("oo") || citiesArray[i].includes("uu")){
        newArray.push(citiesArray[i]);
    }
}
displayResults(newArray,"19.");

// 20 
var newArray = [];
for (var i=0; i<lotrCitiesArray.length; i++){
    if (lotrCitiesArray[i].endsWith("or")){
        newArray.push(lotrCitiesArray[i]);
    }
}
displayResults(newArray,"20.");

// 21
var newArray = [];
for (var i=0; i<words.length; i++){
    if (words[i].startsWith("b")){
        newArray.push(words[i]);
    }
}
displayResults(newArray,"21.");

//22
var yesno = "No";
if (lotrCitiesArray.includes("Mirkwood")){
    yesno = "Yes";
}
displayResults(yesno,"22.");

// 23
var yesno = "No";
if (lotrCitiesArray.includes("Hollywood")){
    yesno = "Yes";
}
displayResults(yesno,"23.");

// 24
var vindex = lotrCitiesArray.indexOf("Mirkwood");
displayResults(vindex,"24.");

// 25
var firstTwoWordCity = "";
for (var i= 0; i<lotrCitiesArray.length; i++){
    if (lotrCitiesArray[i].includes(" ")){
        firstTwoWordCity = lotrCitiesArray[i];
    }
}
displayResults(firstTwoWordCity,"25.");

// 26
displayResults(lotrCitiesArray.reverse(),"26.");

// 27
displayResults(lotrCitiesArray.sort(),"27.");

// 28
function lengthSort(a, b){
    alen = a.length;
    blen = b.length;
    if (alen === blen){
        return 0;
    } else if(alen > blen){
        return 1;
    } else {
        return -1;
    }
}
displayResults(lotrCitiesArray.sort(lengthSort),"28.");

// 29
var vremoved = lotrCitiesArray.pop();
displayResults(lotrCitiesArray,"29.");

// 30
var newlength = lotrCitiesArray.push("Rohan");
displayResults(lotrCitiesArray,"30.");

// 31
var vremoved = lotrCitiesArray.shift();
displayResults(lotrCitiesArray,"31.");

// 32
var newlength = lotrCitiesArray.unshift("Beleriand");
displayResults(lotrCitiesArray,"32.");