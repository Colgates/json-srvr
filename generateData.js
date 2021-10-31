const { vehicle } = require('faker');

module.exports =  function(){
    var faker = require('faker');
    var lodash = require('lodash');
    return{
        users:lodash.times(10, function(n){
            return{
                id: n,
                name: faker.name.findName(),
                company: faker.company.companyName(),
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
            }
        })
    }
}