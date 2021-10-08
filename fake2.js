const { default: axios } = require("axios");
var faker = require("faker");

// 

const urlToPost =
    "https://script.google.com/macros/s/AKfycbz6O59O1pD3DRFj7-BAcgVVFUa-NxlPlSd8p4WkosXjNbrovYGo5iHrIZ6kAt0oLeGw/exec";
// const locales = ["en_US", "de", "it"];
// const randome = Math.round(Math.random() * 100) % 1;

const locales = ["en_US"];
const randome = 0;

const f = faker;

const fakeData = [];

for (let i = 0; i < 75; i++) {
    const fakeRow = [];
    f.locale = locales[randome];
    const description = f.company.bs();
    const bsNoun = f.company.bsNoun();
    const company = f.company.companyName() +", " + f.company.companySuffix();
    const bsBuzz = f.company.bsBuzz();
    const bsAdjective = f.company.bsAdjective();
    const catchPhraseNoun = f.company.catchPhraseNoun();
    const catchPhraseAdjective = f.company.catchPhraseAdjective();

    const phone = f.phone.phoneNumber("+17025######");

    // const address = f.address.city();
    // const state = f.address.state();
    const zipCode = f.address.zipCode("891##");

    const product = f.commerce.product();
    const productName = f.commerce.productName();
    // const productDescription = f.commerce.productDescription();
    const productMaterial = f.commerce.productMaterial();

    // console.log(company, description, phone, address, state, zipCode);
    // console.log(
    //     "===========\n",
    //     product,
    //     "\n",
    //     productMaterial,
    //     "\n",
    //     bsNoun,
    //     "\n",
    //     productName,
    //     "\n",
    //     catchPhraseNoun,
    //     "\n",
    //     bsBuzz,
    //     "\n",
    //     bsAdjective,
    //     "\n",
    //     catchPhraseAdjective
    // );

     
    let header1 =(productMaterial+" "+product); // header 1
    let header2 =(product+" "+catchPhraseNoun); // header 2
    let header3 =(catchPhraseNoun+" "+productMaterial); // header 3

    let description1 =(`${bsAdjective} ${bsBuzz}`); // Description
    let description2 =(`${catchPhraseAdjective} ${bsNoun}`); // Description
    header1 = header1.toLowerCase().trim();
    header2 = header2.toLowerCase().trim();
    header3 = header3.toLowerCase().trim();
    description1 = description1.toLowerCase().trim();
    description2 = description2.toLowerCase().trim();

    const nameCapitalized = (name) => (name.charAt(0).toUpperCase() + name.slice(1));
    header1 = nameCapitalized(header1);
    header2 = nameCapitalized(header2);
    header3 = nameCapitalized(header3);
    description1 = nameCapitalized(description1);
    description2 = nameCapitalized(description2);


    fakeRow.push(header1 + " by " + company); // Company
    fakeRow.push(description); // Company description
    fakeRow.push(phone); // Company phone
    fakeRow.push(productName); // Company Product
    fakeRow.push(zipCode); // Company zip

    fakeRow.push(header1); // header 1
    fakeRow.push(header2); // header 2
    fakeRow.push(header3); // header 3

    fakeRow.push(description1); // Description
    fakeRow.push(description2); // Description

    fakeData.push([...fakeRow]);
}
console.log(fakeData);
const resp = {
    source: "faker",
    table: fakeData,
};
axios({
    method: "post",
    url: urlToPost,
    data: resp,
    headers: {
        "Content-Type": "text/plain;charset=utf-8",
    },
});

// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

// console.log(randomCard, randomEmail, randomName);
