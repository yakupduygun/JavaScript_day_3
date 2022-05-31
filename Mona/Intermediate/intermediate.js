// const Martin = "Martin";
// const Thomas = "Thomas";
// const Klaus = 65;
// const Maria = 93;
// const David = 81;

// const grade = function(Martin, Thomas, Klaus, Maria, David) {
//     // console.log(`Martin gets ${Martin}`);
//     // for (const numer of grade) {
//     grade.forEach((number) => {
//         if (number > 0) {
//             console.log(`You are great`);
//         } else {
//             console.log(`you fail`);
//         }
//     });
// };
// // };
// grade(10, 20, 30, 40, 50);

const grades = [
    [76, "Martin"],
    [85, "Thomas"],
    [65, "Claus"],
    [93, "Maria"],
    [93, "David"],
];

//for..of
const students = function() {
    for (const number of grades) {
        if (number[0] < 60) {
            console.log(`${number[1]} get F`);
        } else if (number[0] < 70) {
            console.log(`${number[1]} get D`);
        } else if (number[0] < 80) {
            console.log(`${number[1]} get C`);
        } else if (number[0] < 90) {
            console.log(`${number[1]} get B`);
        } else if (number[0] < 100) {
            console.log(`${number[1]} get 100`);
        }
    }
};
students();