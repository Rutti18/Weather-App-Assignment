const AppId = 'baad1d348916ffa8e9e7bc5c4c14a11c;

var icon ='http://openweathermap.org/img/wn/10d@2x.png'

let cityname = '';

function getLatLonByZipCode(){

    var ZipCode = document.getElementById("zipCode").value;
    console.log(ZipCode)
    if(ZipCode == ''){ // validating ZipCode. if it is empty it shows error
        alert('Enter a Zip Code');
    }else{
         fetch('http://api.openweathermap.org/geo/1.0/zip?zip='+ZipCode+'&appid='+AppId)
        .then(response => response.json())
        .then(data => {
            console.log(data)