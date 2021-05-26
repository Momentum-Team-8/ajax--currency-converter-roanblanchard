const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]


const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=377bbb2ff88e0f40c21d33689b52271e'
const rootElement = document.querySelector('.container')


fetch(url)
  // fetch will return a JS promise as a response
  // to access the data returned when the promise resolves, we use the .then() method
  // to transform the data to json, we have to call the .json() method in the .then() callback
  .then(res => res.json()) // arrow function syntax lets me do this in one line without an explicit `return` keyword
  // we chain another .then() because the one before returns a promise
  // we do this so we can access the data from the response
  .then(data => {
    // NOW in this second .then() callback, we have json-formatted data we can use!
    // it's a good idea to console.log the data so you can see it!
    console.log(data)
    let h2 = document.createElement('h2')
    h2.innerText = data.base
    rootElement.appendChild(h2)


    let curList = document.createElement('select')
    rootElement.appendChild(curList)
    for (let cur of currencies) {
      const optionItem = document.createElement('option')
      optionItem.value = cur
      optionItem.innerText = cur
      curList.appendChild(optionItem)
    }
  })