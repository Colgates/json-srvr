module.exports =  function(){
    var faker = require('faker');
    var lodash = require('lodash');
    return{
        users:lodash.times(100, function(n){
            return{
                id: n,
                name: faker.name.findName(),
                company: faker.company.companyName(),
                city: faker.address.city(),
                email: faker.internet.email(),
                avatar: faker.image.avatar()
            }
        })

    }
}