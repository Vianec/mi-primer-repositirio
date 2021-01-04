oracion = prompt("ingrese una oracion");
longitud = parseInt(prompt("ingrese la longitud de la cadena"));
console.log(oracion.trim());
for(i=0;i<longitud;i++){
    if (oracion[0+i]== oracion[longitud-i])
        var palin=true;
    else
    var palin = false;
}
if(palin==true)
    alert("Es palindromo");
else
    alert("no es palindromo");
