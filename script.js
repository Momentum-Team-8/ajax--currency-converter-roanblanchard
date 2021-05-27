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

const firstElement = document.querySelector('.first-element')
const secondElement = document.querySelector('.second-element')


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
    let h2 = document.createElement('h1')
    h2.innerText = 'Currency Converter'
    firstElement.appendChild(h2)

    let p1 = document.createElement('p')
    p1.innerText = "Convert from "
    firstElement.appendChild(p1)

    // drop downs and text
    let curList = document.createElement('select')
    // let dropDown = document.createElement('p')
    for (let cur of currencies) {
      const optionItem = document.createElement('option')
      optionItem.value = cur
      optionItem.textContent = cur
      curList.appendChild(optionItem)
    }
    // dropDown.innerHTML = "Convert from " +  + "to " + 

    firstElement.appendChild(curList)

    let p2 = document.createElement('p')
    p2.innerText = " to "
    firstElement.appendChild(p2)

    let curList2 = document.createElement('select')
    // let dropDown = document.createElement('p')
    for (let cur of currencies) {
      const optionItem = document.createElement('option')
      optionItem.value = cur
      optionItem.textContent = cur
      curList2.appendChild(optionItem)
    }
    firstElement.appendChild(curList2)


    let input = document.createElement('input')
    secondElement.appendChild(input)

    let p3 = document.createElement('p')
    p3.innerText = " = "
    secondElement.appendChild(p3)

    let p4 = document.createElement('p')
    p4.innerText = "  "
    secondElement.appendChild(p4)

    let submit = document.createElement('input')
    submit.type = "submit"
    submit.value = "Convert!"
    secondElement.appendChild(submit)

  })