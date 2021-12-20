
const must_covid = require("./covid.js")

async function output() {
    let country = await must_covid.country("Afghanissstan")
    console.log(country)
}
output()
