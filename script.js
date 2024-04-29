// 1-savol Arifmetik operatorla
//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// alert(5%2)

// 2-savol  Math metodlari
// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// alert(Math.floor(Math.random() * 10) + 1); 

// 3-savol Math metodlari
// 12.510 sonini butun songa aylantiring! 
// javob: 12 chiqishi kerak!

// let son = 12.510;
// let butunSon = Math.floor(son);
// console.log(butunSon); 

// 4-savol function
// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.
// Javob:Kodini yozib bering 

// let str = ('Mars it school')
// alert( str +  so'zini uzunligi =  + str.length)

// 5-savol for loop
// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!
// Javob:Kodini yozib bering

// function marssozi() {
//     for (let i = 0; i < 10; i++) {
//       console.log("MARS IT SCHOOL");
//     }
//   }

// 6-savol Array methods
// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]
// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring
// Javob:Kodini yozib bering

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]
// console.log(harflar[13] + harflar[2] + harflar[7] + harflar[10] + harflar[1] + harflar[3] + harflar[9]);

// 7-savol if else
// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak
// Javob:Kodini yozib bering

// function yoshTekshirish(yosh) {
//     if (yosh >= 18) {
//         console.log("Siz balag'ot yoshiga yetgansiz");
//     } else if (yosh < 18) {
//         console.log("Siz balog'at yoshiga yetmagansiz");
//     } else {
//         console.log("Balog'at yoshi muborak");
//     }
// }
// yoshTekshirish(20); 

// 8-savol String metodlari vs Array metodlari
// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring
// Javob:Kodini yozib bering

// let firstName = "Promtdan";
// let reversedName = firstName.split("").reverse().join("");
// console.log(reversedName);

// 10-savol Array metodlari
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// shu arraydagi juft sonlarni console ga chiqaring
// Javob :Kodini yozib bering

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let son of sonlar) {
//     if (son % 2 === 0) {
//         console.log(son);
//     }