// Regex Validation Functions

// Email validation
function validateEmail(email) {
    const regex = /^[a-z]+\.?[a-z]*[0-9]*@[a-z]+\.[a-z]+\.?[a-z]+$/g;
    return email.match(regex);
}

// URL validation (supports subdomains, paths, query strings)
function validateUrl(url) {
    const regex = /^https?:\/\/[\w.-]+\.[a-z]{2,}(\/[\w\-\.\/\?\%\&\=]*)?$/gi;
    return url.match(regex);
}

// Time validation (12-hour + 24-hour formats)
function validateTime(time) {
    const regex =
        /^(?:([01]?[0-9]|2[0-3]):[0-5][0-9])(?:\s?(?:AM|PM|am|pm))?$/g;
    return time.match(regex);
}

// Hashtag validation (# followed by letters/numbers/underscores, no spaces)
function validateHashtag(hashtag) {
    const regex = /^#\w+$/g;
    return hashtag.match(regex);
}

// Credit Card validation (accepts 1234 5678 9012 3456 and 1234-5678-9012-3456)
function validateCreditCard(card) {
    const regex = /^(?:\d{4}[- ]?){3}\d{4}$/g;
    return card.match(regex);
}

function printResult(label, value, isMatch) {
    console.log(`${label}: ${value} → ${isMatch ? "Valid" : "Invalid"}`);
}

// Test Cases

console.log("------ EMAIL TESTS ------");
[
    "user@example.com",
    "firstname.lastname@company.co.uk",
    "nshutinathan123@yahoo.fr",
    "1kezatylane@yahoo.fr",
    "e.umwari@alustudent.com"
].forEach(email => {
    printResult("Email", email, validateEmail(email));
});

console.log("\n------ URL TESTS ------");
[
    "https://www.example.com",
    "https://www.example.co.uk",
    "https://subdomain.example.org",
    "https://subdomain.example.org/page",
    "https://www.google.org/en/",
    "www.amazon.com" // invalid because it doesn't start with https:// or http://  
].forEach(url => {
    printResult("URL", url, validateUrl(url));
});

console.log("\n------ TIME TESTS ------");
[
    "2:30 PM",
    "2:30 am",
    "14:30",
    "4:20",
    "23:59",
    "12:00 AM",
    "12:00"
].forEach(time => {
    printResult("Time", time, validateTime(time));
});

console.log("\n------ HASHTAG TESTS ------");
[
    "#example",
    "#ThisIsAHashtag",
    "#ThisIsAHashtag 123", // invalid because there's spaces
    "#123",                // valid
    "#with_underscore"
].forEach(tag => {
    printResult("Hashtag", tag, validateHashtag(tag));
});

console.log("\n------ CREDIT CARD TESTS ------");
[
    "1234 5678 9012 3456",
    "1234-5678-9012-3456",
    "1234 5678 9012",   // invalid beacause it doesn't have enough digits
].forEach(card => {
    printResult("Credit Card", card, validateCreditCard(card));
});