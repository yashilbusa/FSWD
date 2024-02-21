/*function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Output: 10




  const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2); // Output: [1, 2, 3, 4, 5, 6]




const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };

console.log(obj2); // Output: { a: 1, b: 2, c: 3, d: 4 }*/




function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Some data';
        resolve(data);
      }, 2000);
    });
  }
  
  // Consuming the promise
  fetchData()
    .then((data) => {
      console.log('Data:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

