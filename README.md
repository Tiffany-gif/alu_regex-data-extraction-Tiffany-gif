# Regex Data Validation

This is a simple JavaScript project that uses regular expressions (regex) to validate and extract structured data formats such as **emails**, **URLs**, **time**, **hashtags**, and **credit card numbers**.
The primary goal is to demonstrate the power of regex in JavaScript.

---

## Features

The application includes regex-based validation for the following data types:

* **Email addresses**
  *Examples*: `user@example.com`, `firstname.lastname@company.co.uk`

* **URLs**
  *Examples*: `https://www.example.com`, `https://subdomain.example.org/page`

* **Time formats**
  *24-hour*: `14:30`, `23:59`
  *12-hour*: `2:30 PM`, `12:00 am`

* **Hashtags**
  *Examples*: `#example`, `#ThisIsAHashtag`

* **Credit Card Numbers**
  *Examples*: `1234 5678 9012 3456`, `1234-5678-9012-3456`

---

## How to Use

```js
// Validate an email
validateEmail("user@example.com");

// Validate a URL
validateUrl("https://www.example.com");

// Validate time
validateTime("2:30 pm");
validateTime("14:30");

// Validate a hashtag
validateHashtag("#example");

// Validate a credit card number
validateCreditCard("1234-5678-9012-3456");
```

---

## Validation Rules

### Emails Must:

* Start with letters
* Optionally include one dot or numbers after the name
* Include an `@` symbol
* End with a valid domain (e.g., `.com`, `.fr`, `.co.uk`)

### URLs Must:

* Start with `http://` or `https://`
* Include a proper domain (e.g., `example.com`)
* Optionally contain paths (e.g., `/page`)

### Time Must Be:

* **24-hour format**: `HH:MM` (00:00 - 23:59)
* **12-hour format**: `H:MM AM/PM` (1:00 AM - 12:59 PM)

### Hashtags Must:

* Start with `#`
* Only contain letters, numbers, or underscores
* **No** spaces or special characters (e.g., `@`, `$`)

### Credit Card Numbers Must:

* Contain exactly **16 digits** (can be separated by spaces or hyphens)

> Going against these rules results in **invalid** validation.

---

## Project Structure

```
alu_regex-data-extraction-Tiffany-eng/
├── main.js     // Contains all regex functions and test cases
└── README.md   // Project overview and usage instructions
```

---

## How to Run

1. Make sure you have **Node.js** installed.
2. Clone this repository.
3. Run the code using:

```bash
node main.js
```

---

## Sample Output

```
------ EMAIL TESTS ------
Email: user@example.com → Valid
Email: firstname.lastname@company.co.uk → Valid
Email: nshutinathan123@yahoo.fr → Valid
Email: 1kezatylane@yahoo.fr → Invalid
Email: e.umwari@alustudent.com → Valid

------ URL TESTS ------
URL: https://www.example.com → Valid
URL: https://www.example.co.uk → Valid
URL: https://subdomain.example.org → Valid
URL: https://subdomain.example.org/page → Valid
URL: https://www.google.org/en/ → Valid
URL: www.amazon.com → Invalid

------ TIME TESTS ------
Time: 2:30 PM → Valid
Time: 2:30 am → Valid
Time: 14:30 → Valid
Time: 4:20 → Valid
Time: 23:59 → Valid
Time: 12:00 AM → Valid
Time: 12:00 → Valid

------ HASHTAG TESTS ------
Hashtag: #example → Valid
Hashtag: #ThisIsAHashtag → Valid
Hashtag: #ThisIsAHashtag 123 → Invalid
Hashtag: #123 → Valid
Hashtag: #with_underscore → Valid

------ CREDIT CARD TESTS ------
Card: 1234 5678 9012 3456 → Valid
Card: 1234-5678-9012-3456 → Valid
Card: 123456789012345 → Invalid
```
