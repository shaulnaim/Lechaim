module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
  
    return {
        people: _.times(50, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                age: faker.random.number({'min': 25,'max': 50}),
                email:faker.internet.email(),
                avatar: faker.internet.avatar()
            }
        })
    }
}