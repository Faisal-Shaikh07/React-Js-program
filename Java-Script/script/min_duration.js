var travel_option = [
    {
        option: 'car',
        duration: 30
    },
    {
        option: 'bus',
        duration: 40
    },
    {
        option: 'bike',
        duration: 20

    }
];

var minimumDurationObj = travel_option[0];

for (var i=1; i <= travel_option.length-1; i++) {
    if( travel_option[i].duration < minimumDurationObj.duration ){
        minimumDurationObj = travel_option[i];
    }
}

console.log(minimumDurationObj.option+' '+'is the best option');