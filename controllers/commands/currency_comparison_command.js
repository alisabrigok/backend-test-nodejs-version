import u from '../utils/helper';
import { Currency, FirstApiAdapter, SecondApiAdapter } from '../Currency';

const currencyComparison = async () => {
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
    const comparedData = u.compareValues(firstApiData, secondApiData);

    console.log('Comparison is completed! Results:');
    console.log(comparedData);
    console.log("Note: Don't mind the 'undefined' below");
  } catch (error) {
    console.log(`An error occured: ${error}`);
  }
};

module.exports = currencyComparison;

require('make-runnable/custom')({ printOutputFrame: false });
