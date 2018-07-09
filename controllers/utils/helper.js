import Currency from '../../models/currency';

export default {
  compareValues: (...dataArray) => {
    // use the first element as a reference point
    const comparedResult = [...dataArray[0]];
    // iterate for the first dimension [array0, array1...]
    for (var i = 0; i < dataArray.length; i++) {
      // iterate within second dimension [element0OfArray0, element1ofArray0...]
      for (var j = 0; j < dataArray[i].length || j < dataArray.length; j++) {
        // if there is no such element, exit the loop
        if (!dataArray[j]) break;
        // if the existing element is bigger than the iterated one, remove the existing element and add the iterated one in place of it
        if (comparedResult[i] > dataArray[j][i]) {
          comparedResult.splice(i, 1, dataArray[j][i]);
        }
      }
    }
    return comparedResult;
  },

  getCurrencies: async () => {
    // retrieve the values from database
    return await Currency.find({});
  },

  // delete all values within database
  resetDB: async () => {
    await Currency.remove({})
      .then()
      .catch(error => {
        throw error;
      });
  },

  saveToDB: async values => {
    const currencyNames = ['USD', 'EUR', 'GBP'];
    const currencies = [];

    // create an array of objects for bulk insert
    for (var i = 0; i < 3; i++) {
      currencies.push({
        name: currencyNames[i],
        value: values[i]
      });
    }

    // bulk insert the values to database
    await Currency.insertMany(currencies)
      .then(result => {
        console.log('bulk insert completed!');
      })
      .catch(error => {
        throw error;
      });
  }
};
