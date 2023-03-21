const data = [
    2, 3, 4, 5, 5,1200, 1212, 
];
const target = 1200;


for (let i = 0; i< data.length; i++) {
    if (data[i] === target){
        console.log(data[i]);
    }
}

for (const d of data) {
    console.log(d);
}

const mapData = data.map((value, index) => {
    console.log(`Iteration ${index}`)
    console.log({value,index})
    return value
});

const forEachData = data.forEach((value, index) => {
    console.log(`Iteration ${index}`)
    console.log({value,index})
    return value
});

console.log({
    mapData,
    forEachData
})

let i = 0;
while (i<data.length) {
    console.log(data[i])
    i += 1;
}