const { vehicle } = require('faker');

module.exports =  function(){
    var faker = require('faker');
    var lodash = require('lodash');
    return{
        users:lodash.times(100, function(n){
            return{
                id: n,
                name: faker.name.findName(),
                company: faker.company.companyName(),
                address: [faker.address.country(), faker.address.city(), faker.address.latitude(), faker.address.longitude()],
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
                car: [faker.vehicle.manufacturer(), faker.vehicle.model(), faker.vehicle.color()]
            }
        })

    }
}