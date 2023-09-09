function IsiNilaiArray(arr, length) {  //Membuat 100 nilai random
    for (let i = 0; i < length; i++) {
        const angka = Math.floor(Math.random() * 50) + 1;
        arr[i] = angka
    }
}

function ArrayGenapGanjil(arr) {  //Memisahkan Array Ganjil dan Genap
    const genap = []
    const ganjil = []
    for (let i = 0; i < arr.length; i++) {
        i % 2 === 0 ? genap.push(arr[i]) : ganjil.push(arr[i])
    }
    return {genap, ganjil}
}

function HitungMin(arr) {  // Fungsi untuk menghitung min
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        min = arr[i] < min ? arr[i] : min
    }
    return min
}

function HitungMax(arr) { // Fungsi untuk menghitung max
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        max = arr[i] > max ? arr[i] : max
    }
    return max
}

function HitungTotal(arr) {  // Fungsi untuk menghitung Total
    let Total = 0
    for (let i = 0; i < arr.length; i++) {
        Total += arr[i]
    }
    return Total
}

function HitungRataRata(arr) {  // Fungsi untuk menghitung rata-rata
    let Total = HitungTotal(arr)
    return Total / arr.length
}

ArrayValue = new Array(100); // Membuat array dengan 100 indeks
IsiNilaiArray(ArrayValue, ArrayValue.length)
console.log("Array dengan jumlah index 100 yaitu : \n" , ArrayValue)

const {genap, ganjil} = ArrayGenapGanjil(ArrayValue)

console.log("Array genap dengan jumlah index 50 yaitu : \n", genap)
console.log("Array ganjil dengan jumlah index 50 yaitu : \n", ganjil)

console.log("\nMencari nilai MIN pada Array")
console.log("Genap  : ", HitungMin(genap))
console.log("Ganjil : ", HitungMin(ganjil))

console.log("\nMencari nilai MAX pada Array")
console.log("Genap  : ", HitungMax(genap))
console.log("Ganjil : ", HitungMax(ganjil))

console.log("\nMenghitung nilai Total pada Array")
console.log("Genap  : ", HitungTotal(genap))
console.log("Ganjil : ", HitungTotal(ganjil))

console.log("\nMenghitung nilai Rata-Rata pada Array")
console.log("Genap  : ", HitungRataRata(genap))
console.log("Ganjil : ", HitungRataRata(ganjil))

console.log("\n----Perbandingan Antara Array Genap dan Ganjil----")
console.log(HitungMin(genap) > HitungMin(ganjil) ? "Min lebih besar pada array genap" : HitungMin(genap) < HitungMin(ganjil) ? "Min lebih besar pada array ganjil" : "Min memiliki nilai yang sama antara array genap dan ganjil")

console.log(HitungMax(genap) > HitungMax(ganjil) ? "Max lebih besar pada array genap" :HitungMax(genap) < HitungMax(ganjil) ? "Max lebih besar pada array ganjil" : "Max memiliki nilai yang sama antara array genap dan ganjil")

console.log(HitungTotal(genap) > HitungTotal(ganjil) ? "Total lebih besar pada array genap" : HitungTotal(genap) < HitungTotal(ganjil) ? "Total lebih besar pada array ganjil" : "Total memiliki nilai yang sama antara array genap dan ganjil")

console.log(HitungRataRata(genap) > HitungRataRata(ganjil) ? "Rata-rata lebih besar pada array genap" : HitungRataRata(genap) < HitungRataRata(ganjil) ? "Rata-rata lebih besar pada array ganjil" : "Rata-rata memiliki nilai yang sama antara array genap dan ganjil")