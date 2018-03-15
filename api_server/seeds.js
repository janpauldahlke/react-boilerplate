
module.exports = function() {
  let faker = require('faker');
  let _ = require('lodash');

  return {
    animals : _.times(100, function (num) {
      return {
        id : num,
        name : faker.name.findName(),
        species : faker.company.catchPhraseNoun(),
        gender:  faker.helpers.randomize(['m', 'f']),
        age : faker.random.number(100)
      }
    }),

    zookeeper : _.times(20, (n) => {
      return {
        id : n,
        name: {
          firstname: faker.name.firstName(),
          name: faker.name.lastName()
        },
        salary: faker.random.number(5000, 20000)
      }
    })
  }
}