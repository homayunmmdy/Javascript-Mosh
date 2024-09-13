// Hour
// if is between 6am to 12pm : Good Morning1
// if it is between 12pm and 6pm : Good afternoon!
// otherwise : Good evening!

let hour = 19;
if(hour >= 6 &&  hour < 12) {
    console.log("Good Morning!");
}else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon!")
}else {
    console.log('Good Evening!')
}