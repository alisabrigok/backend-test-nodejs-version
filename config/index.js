import config from './config.json';

export default {
  getDbConnection: () => {
    return (
      'mongodb://' +
      config.user +
      ':' +
      config.password +
      'your_database_url_here'
    );
  }
};
