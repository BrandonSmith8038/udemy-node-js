if(process.env.NODE_ENV === 'production') {
  module.exports = {mongoUri: 'mongodb://Cowboy8038:Nascar8038@ds155424.mlab.com:55424/vidjot-reddirt-prod'};
} else {
  module.exports = {mongoUri: 'mongodb://localhost/vidjot-dev'};
}