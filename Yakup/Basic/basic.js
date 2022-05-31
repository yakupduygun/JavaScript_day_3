
// EXERCISE1


// let number = Math.ceil(Math.random()*25-5);
// console.log(number);
// if(number<10){
//     console.log(`The weather is cold. It is ${number}°C`);
// }else{
//     console.log(`The weather is moderate. It is ${number}°C`);
// }



// EXERCISE2

// let array1= [1, 2, 3, 4];
// let max = Math.max(...array1);
// console.log(max);




// let array = [1000, 220, 3000];
// let max2 = array[0];
// for (let val of array) {
//     if(max2 < val){
//         max2= val;
//     }
// }

// console.log(max2);


//EXERCISE2 WITH FOR LOOPS

// let array = [1000, 220, 3000];
// let max = array[0];
// for (i=0; i>max; i++) { 
//     if(max < val){
//         i+i;
//     }

    
// console.log(max);
// }

//BONUS EXERCISE

            // let n = [1, 2, 5, 7, 10];
            // let sum = 0;
            // for (let i = 0; i < n.length; i++) {
            //     sum += n[i];
            // }
            // console.log(sum);


//EXERCISE 3


let weatherForcast = Math.ceil(Math.random() * 45 - 5);
console.log(weatherForcast);
if (weatherForcast < 10) {
    document.getElementById(
        "weather"
    ).innerHTML = `The weatherForcast is cold. It is ${weatherForcast}°C`; 
    document.getElementById("photo").src="/Mona/Basic/img/snowflake-1065155_640.jpg";

} else if (weatherForcast < 20 && weatherForcast > 10) {
    document.getElementById(
        "weather"
    ).innerHTML = `The weatherForcast is moderate. It is ${weatherForcast}°C`;
    document.getElementById("photo").src="/Mona/Basic/img/sunset-1651426_640.jpg";
} else {
    document.getElementById(
        "weather"
    ).innerHTML = `The weatherForcast is hot. It is ${weatherForcast}°C`;
    document.getElementById("photo").src="/Mona/Basic/img/sunset-1651426_640.jpg";
}






