function printCountryDetails(resultParam){

    resultParam.forEach((record) => {
           
      console.log(" Name : ", record.name, " || Region : ", record.region, " || Sub Region : ", record.subregion, " || Population : ", record.population);
        
    });

}

makeAjaxCallAndPrintInfo(API_URL, printCountryDetails);