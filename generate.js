module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");

    var dob = faker.date.past(50, new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)"));
    dob = dob.getFullYear() + "-" + (dob.getMonth() + 1) + "-" + dob.getDate();  // First month is "1"
    return {
        people: _.times(500, function (n) {
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