# must-covid

```shell
npm install must-covid
```

A fast and stable module that provides information about country's current situation of COVID-19

```javascript
const must_covid = require("must-covid")

async function output() {
    let country = await must_covid.country("Turkey")
    console.log(country)
}
output()
```

Data output

```cmd
> {
>   stats: 202,
>   country: 'Afghanistan',
>   cases: 118659,
>   todayCases: 0,
>   deaths: 4871,
>   todayDeaths: 0,
>   recovered: 70016,
>   active: 43772,
>   critical: 1124,
>   casesPerOneMillion: 2982,
>   deathsPerOneMillion: 122,
>   totalTests: 607061,
>   testsPerOneMillion: 15255
> }

```

#Units
```cmd
You can pull information of COVID-19 current situation by typing the name of the country you choose on the world!
```
