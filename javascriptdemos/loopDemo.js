function sayiUret(ustLimit = 60){
    return Math.ceil(Math.random()* ustLimit)
}
for(j=1; j<=8; j++){
    console.log(j + ". KOLON")
for(i=1; i<=6; i++){
console.log(sayiUret())
}
}