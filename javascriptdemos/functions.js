
// saçma kullanım
var sayi1 = Math.ceil(Math.random()*36)
var sayi2 = Math.ceil(Math.random()*36)
var sayi3 = Math.ceil(Math.random()*36)
var sayi4 = Math.ceil(Math.random()*36)
var sayi5 = Math.ceil(Math.random()*36)
var sayi6 = Math.ceil(Math.random()*36)

console.log("Kolon: " + sayi1 + " " + sayi2 + " " + sayi3 + " " + sayi4 + " " + sayi5 + " " + sayi6 )

// mantıklı kullanım
function sayiUret(ustLimit = 60){
    return Math.ceil(Math.random()* ustLimit)
}
var sayi1 = sayiUret(55555)
var sayi2 = sayiUret()
var sayi3 = sayiUret()
var sayi4 = sayiUret()
var sayi5 = sayiUret()
var sayi6 = sayiUret()

console.log("Kolon: " + sayi1 + " " + sayi2 + " " + sayi3 + " " + sayi4 + " " + sayi5 + " " + sayi6 )