

// ============ Question: 01 ============
function describeValue(value) {
    let type = typeof value;
    let result;



    if (value) {
        result = "truthy";
    }
    else {
        result = "falsy";
    }




    return type + " | " + result;
}

console.log(describeValue("hello"));


console.log(describeValue(""));


console.log(describeValue(25));


console.log(describeValue(0));

console.log(describeValue(true));
console.log(describeValue(null));

console.log(describeValue(undefined));

console.log(describeValue("0"));

console.log(describeValue(NaN));





// ============== Question: 02 ===========

function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {



        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":

        case "wednesday":

        case "thursday":
            return "Working Day";



        default:
            return "Invalid Day";




    }
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));


console.log(getDayType("MONDAY"));

console.log(getDayType("Bandarban"));








// ============ Question: 03 =============


function validateUsername(username) {

    if (username.length < 4) {
        return "Too Short";
    }

    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }


    if (username.includes(" ")) {
        return "No Space Allowed";
    }




    return "Available";



}



console.log(validateUsername("rahim123"));

console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));



console.log(validateUsername("rahim islam"));

console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin Rahim"));







// ========== Question: 04 ===========

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2)
         {


        fare = fare + (distance - 2) * 15;
    }


    fare = fare + waitingMinutes * 2;




    if (isNight == true) {
        fare = fare * 1.20;
    }


    return fare;

}
console.log(getCngFare(2));
console.log(getCngFare(1));

console.log(getCngFare(5));

console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));


console.log(getCngFare(5, true, 10));








// ========= Question: 05 ==========

const getChaseVerdict = (target, score, ballsLeft) => {



    let runsNeeded = target-score;




    if (runsNeeded<= 0) {
        return "Won";
    }

    if(ballsLeft <= 0) {
        return "Lost";
    }


    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;

    if(requiredRate <= 6) {
        verdict = "Comfortable";
    }
    
    
    else if(requiredRate <= 12) {
        verdict = "Tough";
    } 
    
    
    else{
        verdict = "Almost Impossible";
    }




    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(200, 200, 12));

console.log(getChaseVerdict(200, 190, 0));

console.log(getChaseVerdict(100, 90, 12));

console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));

console.log(getChaseVerdict(150, 149, 1));