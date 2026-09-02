

// ============== Question: 01 =============
function describeValue(value) {
    let type = typeof value;
    let result;

    if (value) {
        result = "truthy";
    } else {
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





// ============== Question: 02 =============

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