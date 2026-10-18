// Simple seeded pseudo-random generator, so the same seed gives the same sequence
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

// Mock API: returns available booking times (17:00-23:30) for a date, seeded by the day of month
const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
// Mock API: pretends to save the booking and always reports success
const submitAPI = function(formData) {
    return true;
};