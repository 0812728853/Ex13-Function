// ex4
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// const inputNumber = prompt("Nhập vào một số: ");
// const number = parseInt(inputNumber);

// if (isPrime(number)) {
//     console.log(`${number} là số nguyên tố.`);
// } else {
//     console.log(`${number} không phải là số nguyên tố.`);
// }

// ex5


// let string=["Black", "Pink", "Green", "Blue", "Yellow"];
// function findString(n) {
//     let longstring=n[0];
//     for (let i = 0; i < n.length; i++) {
//       if (n[i].length>longstring.length) {
//         longstring=n[i]
//       }
        
//     }
//     console.log(longstring);
// }
// findString(string);




// ex06

// let mang=[1, 2, 2, 3, 4, 5, 6, 6, 7];
// function string(n) {
// let sum=0;
//   for (let i = 0; i < n.length; i++) {
//     if (n[i]%2===0){
// sum +=n[i]
//     }
    
//   }  
//   console.log(sum);
// }
// string(mang);

//ex7



let input = [8, 9, 7, 4, 8];
function string(n) {
    let sum = 0;
    let num = 0;
    for (let i = 0; i < n.length; i++) {
      sum +=n[i];
     num=sum/n.length;
    } 
    console.log(num);
} 
string(input);