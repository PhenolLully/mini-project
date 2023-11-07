var userInput = "Miami"
var searchFormat = "manuscripts"

searchUrl = 'https://www.loc.gov/'+searchFormat+'/?q='+userInput+'&fo=json'


function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) {
        //console.log(response.status);
        //  Conditional for the the response.status.
        if (response.status !== 200) {
          // Place the response.status on the page.
          //responseText.textContent = response.status;
        }
        return response.json();
      })
      .then(function (data) {
        // Make sure to look at the response in the console and read how 404 response is structured.
        for(i=0;i<data.results.length;i++){
            //Title
            title = data.results[i].title

            //Date
            date = data.results[i].date

            //Subject
            subject = data.results[i].subject

            //Description
            description = data.results[i].description
            if(description==undefined){
                description = "This entry does not have a description"
            }

            //URL
            url = data.results[i].url

            console.log("Title: "+title)
            console.log("Date: "+date)
            console.log("Subject: "+subject)
            console.log("URL: "+url)
            console.log("Description: "+description)
    }


      });
  }
  
  getApi(searchUrl);

  //Add event listener
//button.addEventListener("click", getApi(searchUrl));
