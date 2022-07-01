function makeAjaxCallAndPrintInfo(url, printFunction) {
   
    const request = new XMLHttpRequest();
    request.open("GET",url,true);
    request.send(null);
    request.onload = function() {
        let response = JSON.parse(request.responseText);
        console.log("Response received :: ", response);
        printFunction(response);
        
    }

    request.onerror = function() {
        console.log(" API Request encountered an error. Please try again.");
    }

}

function printCountryFlags(resultParam){

    resultParam.forEach((record) => {
           
                console.log("Name : ", record.name, " ||  Flags :", record.flags);
        
    });

}


const API_URL = "https://restcountries.com/v2/all";
makeAjaxCallAndPrintInfo(API_URL, printCountryFlags);



