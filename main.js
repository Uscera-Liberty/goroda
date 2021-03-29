let anapa = document.querySelector('#anapa')
let show = document.querySelector('.show')
anapa.addEventListener('click', function(){
    
    //alert('Press the button')
    getAnapa();

})
 async function getAnapa(){
     let url = 'http://api.openweathermap.org/data/2.5/weather?q=Anapa&APPID=d849f74ae0d8e55dd10666a12adfd084'
     let request = await fetch(url)
     if (request.ok) {
         let json = await request.json()

         console.log(json)
         let temp = json.main.temp - 273.15

         show.innerHTML = `
         <div>
            <h2>Weather in ${json.name}</h2>
            <h3>Temperature:${temp} </h3> 
            <h3>Humidity :${json.main.humidity}</h3>
            <h3>Pressure:${json.main.pressure}</h3>
            <h3>Speed of wind:${json.wind.speed}</h3>
            <h3>Weahter: scattered weather</h3>
        </div>
         `
     }
 }



let tokyo = document.querySelector('#tokyo')

tokyo.addEventListener('click', function(){
    
    //alert('Press the button')
    getTokyo();

})
 async function getTokyo(){
     let url = 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=d849f74ae0d8e55dd10666a12adfd084'
     let request = await fetch(url)
     if (request.ok) {
         let json = await request.json()

         console.log(json)
         let temp = json.main.temp - 273.15

         show.innerHTML = `
         <div>
            <h2>Weather in ${json.name}</h2>
            <h3>Temperature:${temp.toFixed(2)}</h3> 
            <h3>Humidity :${json.main.humidity}</h3>
            <h3>Pressure:${json.main.pressure}</h3>
            <h3>Speed of wind:${json.wind.speed}</h3>
            <h3>Weahter: scattered weather</h3>
        </div>
         `
     }
 }
let kiev = document.querySelector('#kiev')

kiev.addEventListener('click', function(){
    
    //alert('Press the button')
    getKiev();

})
 async function getKiev(){
     let url = 'http://api.openweathermap.org/data/2.5/weather?q=Kiev&APPID=d849f74ae0d8e55dd10666a12adfd084'
     let request = await fetch(url)
     if (request.ok) {
         let json = await request.json()

         console.log(json)
         let temp = json.main.temp - 273.15

         show.innerHTML = `
         <div>
            <h2>Weather in ${json.name}</h2>
            <h3>Temperature:${temp.toFixed(2)}</h3> 
            <h3>Humidity :${json.main.humidity}</h3>
            <h3>Pressure:${json.main.pressure}</h3>
            <h3>Speed of wind:${json.wind.speed}</h3>
            <h3>Weahter: scattered weather</h3>
        </div>
         `
     }
 }