const d2 = new Date();
var product = {
    name: "IPhone 14 Pro max",
    description: "This Phone is apple brand and its storage is 256gb.",
    price: "$500",
    shepingdetails: "Darshan Hostel Room No A-15",
    imglink: 'hhttps://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.deccanherald.com%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2022%2F10%2F11%2Faiphone14pm-cov-sho-sel-1-1152416-1665475427.jpg&tbnid=oqnFFxRAVM8mMM&vet=12ahUKEwjuwJa_oPL_AhW15DgGHUhlCsEQMygZegUIARDRAg..i&imgrefurl=https%3A%2F%2Fwww.deccanherald.com%2Fbusiness%2Ftechnology%2Fapple-iphone-14-pro-max-review-refined-to-near-perfection-1152416.html&docid=8CVrup4E1B7QhM&w=1056&h=778&q=iphone%2014%20pro%20max&ved=2ahUKEwjuwJa_oPL_AhW15DgGHUhlCsEQMygZegUIARDRAg',

}

function myfunction() {

    document.body.appendChild
    newele = document.createElement("p");
    newele.innerText = `product name = ${product.name}`;
    document.body.appendChild(newele);

    newele.innerText = `product price is ${product.price}`;

    document.body.appendChild(newele);



    newele.innerText = `${product.description}`;

    document.body.appendChild(newele);



    newele.innerText = `product price shipping in is ${product.shepingdetails}`;

    let newele1 = document.createElement('img');

    newele1.src = product.imglink;
    document.body.appendChild(newele1);


}
for (i = 0; i < 200000; i++) {

    myfunction();

}
const d1 = new Date();
console.log(
    (d1 - d2));





/*function loopDemo() {
    console.log("Start");
  
    for (let i = 0; i < 100000; i++) {
      for (let j = 0; j < 100000; j++) {
        const result = Math.sqrt(Math.log(i * j + 1));
      }
    }
  
    console.log("End");
  }
  
  const startTime = Date.now();
  
  loopDemo();
  
  const endTime = Date.now();
  const elapsedTimeInSeconds = (endTime - startTime) / 1000;
  
  console.log("Elapsed Time (seconds):", elapsedTimeInSeconds);*/