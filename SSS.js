window.ContentOfTheMail = "Hello Universe From THe Earth";

// URL of the API endpoint
const url = 'https://app.apptivo.com/app/dao/v6/customers?a=getConfigData&_='+Number(new Date())+'&objectId=3';

// Making a GET request
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parsing the JSON response
  })
  .then(data => {
    console.log(data); // Handling the data
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

for(var i = 0;i<1000000000;i++) {
  console.log(i);
}
