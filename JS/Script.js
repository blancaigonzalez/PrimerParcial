// Requiring fs module in which  
// readFile function is defined. 

function loadDoc() {
  var peliculas = [
  {
    Numero: "1",
    Titulo: "Misión de rescate",
    Duracion: "99M",
    Director: "Sam Hargrave",
    Anio: "2020",
    Imagen: "001.png"
  },
  {
    Numero: "2",
    Titulo: "A ciegas",
    Duracion: "89M",
    Director: "Susanne Bier",
    Anio: "2018",
    Imagen: "002.png"
  },
  {
    Numero: "3",
    Titulo: "Spenser Confidential",
    Duracion: "85M",
    Director: "Peter Berg",
    Anio: "2020",
    Imagen: "003.png"
  },
  {
    Numero: "4",
    Titulo: "Escuadrón 6",
    Duracion: "83M",
    Director: "Michael Bay",
    Anio: "2019",
    Imagen: "004.png"
  },
  {
    Numero: "5",
    Titulo: "Misterio a bordo",
    Duracion: "73M",
    Director: "Kyle Newacheck",
    Anio: "2019",
    Imagen: "005.png"
  },
  {
    Numero: "6",
    Titulo: "El irlandés",
    Duracion: "64M",
    Director: "Martin Scorsese",
    Anio: "2019",
    Imagen: "006.png"
  },
  {
    Numero: "7",
    Titulo: "Triple frontera",
    Duracion: "63M",
    Director: "J,C,Chandor",
    Anio: "2019",
    Imagen: "007.png"
  },
  {
    Numero: "8",
    Titulo: "La otra Missy",
    Duracion: "59M",
    Director: "Happy Madison",
    Anio: "2019",
    Imagen: "008.png"
  },
  {
    Numero: "9",
    Titulo: "El hoyo",
    Duracion: "56M",
    Director: "Galder Gaztelu-Urrutia",
    Anio: "2019",
    Imagen: "009.png"
  },
  {
    Numero: "10",
    Titulo: "La cita perfecta",
    Duracion: "48M",
    Director: "Chris Nelson",
    Anio: "2019",
    Imagen: "010.png"
  }
  ];
  var codigo;
  for (var i = 0; i < 10; i++) {
        //console.log("pelicula: "+peliculas[i].Numero);
        if (i==0) {
          codigo = document.write("<div><center><h1>Catalogo de peliculas</h1><br><h1 style=\"color:red\">"+peliculas[i].Numero+"."+peliculas[i].Titulo+"("+peliculas[i].Duracion+")"+"</h1><br>"+"<p1 style=\" font-size: 18px\">Director: "+peliculas[i].Director+" / "+peliculas[i].Anio+"</p1><br><br>"+"<img src=\"./"+peliculas[i].Imagen+"\" width:200px height:320px></center></div>"); 
        
          }else{
            codigo = document.write("<div><center><br><h1 style=\"color:red\">"+peliculas[i].Numero+"."+peliculas[i].Titulo+"("+peliculas[i].Duracion+")"+"</h1><br>"+"<p1 style=\" font-size: 18px\">Director: "+peliculas[i].Director+" / "+peliculas[i].Anio+"</p1><br><br>"+"<img src=\"./"+peliculas[i].Imagen+"\" width:200px height:320px></center></div>"); 
          }
      }   
  document.getElementById("demo").innerHTML = codigo;
}