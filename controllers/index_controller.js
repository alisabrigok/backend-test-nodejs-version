import _ from './utils/helper';
import { Currency, FirstApiAdapter, SecondApiAdapter } from './Currency';

export default {
  index: async (req, res) => {
    try {
      const FirstApi = new FirstApiAdapter(new Currency());
      const SecondApi = new SecondApiAdapter(new Currency());

      // get only currency values within an array
      const firstApiData = await FirstApi.getCurrencyArray(
        'http://www.mocky.io/v2/5a74519d2d0000430bfe0fa0'
      );
      // get only currency values within an array
      const secondApiData = await SecondApi.getCurrencyArray(
        'http://www.mocky.io/v2/5a74524e2d0000430bfe0fa3'
      );
      // make currency comparison and get the smallest values
      const comparedData = _.compareValues(firstApiData, secondApiData);
      // reset the database
      await _.resetDB();
      // save compared values to database
      await _.saveToDB(comparedData);
      // get the currencies from database
      const currencies = await _.getCurrencies();

      res.render('home', { title: 'THE TASK', currencies });
    } catch (error) {
      res.render('home', { title: 'THE TASK', currencies });
    }
  }
};
