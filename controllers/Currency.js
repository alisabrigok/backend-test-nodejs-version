import fetch from 'node-fetch';

class Currency {
  async performApiCall(apiUrl) {
    try {
      // make the api call and get the response
      const response = await fetch(apiUrl);
      // if the response is not ok, throw error
      if (response && response.status !== 200) throw new Error();
      // parse the response to json
      let data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  parseCurrencyArray(currencyArrayOfObjs) {
    let i = 0;
    const currency = [];

    // iterate the data array
    currencyArrayOfObjs.forEach(currencyObjElement => {
      // convert the object to array
      const flattenCurrencies = Object.keys(currencyObjElement).map(key => {
        return [currencyObjElement[key]];
      });

      flattenCurrencies.forEach(element => {
        // skip every even property, because array index starts from 0.
        if (i % 2 !== 0) {
          // convert the value to float
          currencyObjElement = parseFloat(element);
          currency.push(currencyObjElement);
        }
        i++;
      });
    });

    return currency;
  }
}

class FirstApiAdapter {
  constructor(currency) {
    this.currency = currency;
  }

  //this method will pass expected array of objects to the adapted class
  async getCurrencyArray(apiUrl) {
    const objectData = await this.currency.performApiCall(apiUrl);
    return this.currency.parseCurrencyArray(objectData['result']);
  }
}

class SecondApiAdapter {
  constructor(currency) {
    this.currency = currency;
  }

  async getCurrencyArray(apiUrl) {
    //this method will pass expected array of objects to the adapted class
    const objectData = await this.currency.performApiCall(apiUrl);
    return this.currency.parseCurrencyArray(objectData);
  }
}

export { Currency, FirstApiAdapter, SecondApiAdapter };
