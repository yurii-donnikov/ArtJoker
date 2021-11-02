class Bank {
    constructor(){
        this.clients = [
            {
                name: 'Ivan Ivanov',
                isActive: true,
                registration: new Date (2013, 13, 1),
                checks:[
                    {
                        name: 'Debet',
                        balance: 1000,
                        isActive: true,
                        activeData: new Date (2025, 1, 1),
                        currency: 'UAH',
                    },
                    {
                        name:'Credit',
                        balance: 1000,
                        limit: 1000,
                        isActive: true,
                        activeData: new Date (2025, 10, 1),
                        currency: 'UAH',
                    },
                ],
            },
            {
                name: 'Oleg Olegov',
                isActive: false,
                registration: new Date (2013, 13, 1),
                checks:[
                    {
                        name: 'Debet',
                        balance: 1000,
                        isActive: true,
                        activeData: new Date (2025, 13, 1),
                        currency: 'EUR',
                    },
                    {
                        name:'Credit',
                        balance: 100,
                        limit: 1000,
                        isActive: true,
                        activeData: new Date (2025, 13, 1),
                        currency: 'UAH',
                    }
                ],
            },
            {
                name: 'Roman Romanov',
                isActive: false,
                registration: new Date (2013, 13, 1),
                checks:[
                    {
                        name: 'Debet',
                        balance: 100,
                        isActive: true,
                        activeData: new Date (2025, 13, 1),
                        currency: 'UAH',
                    },
                    {
                        name:'Credit',
                        balance: 500,
                        limit: 1000,
                        isActive: true,
                        activeData: new Date (2025, 13, 1),
                        currency: 'EUR',
                    }
                ],
            }
        ]
    }

    async haveMoney(callback) {
        let response = await fetch ('https://freecurrencyapi.net/api/v2/latest?apikey=dae13160-3b0e-11ec-8361-e108ba6473f9');
        let currencies = (await response.json()).data;
        let result = 0;
        if(this.clients.length) {
            this.clients.forEach((client) => {
                if(client.checks.length) {
                    client.checks.forEach((check) => {
                        if(check.currency === callback(check)){
                            result += check.balance;
                        }
                        else {
                            result += (check.balance / currencies[check.currency]) * currencies[callback(check)];
                        }
                    })
                }
            })
            return result;
        } 
        return null;
    }

    async debtMoney(callback){
        let response = await fetch ('https://freecurrencyapi.net/api/v2/latest?apikey=dae13160-3b0e-11ec-8361-e108ba6473f9');
        let {data} = await response.json();
        let result = 0;
        if(this.clients.length) {
            this.clients.forEach((client) => {
                if(client.checks.length){
                    client.checks.forEach((check) => {
                        if(check.name === 'Credit' && check.balance < check.limit){
                            if(check.currency === callback(check)){
                                result += check.limit - check.balance;
                            } else {
                                result += ((check.limit / data[check.currency]) * data[callback(check)]) - ((check.balance / data[check.currency]) * data[callback(check)]);
                            }
                        }
                    })
                }
            })
           return result;
        }
        return null;
    }

    async sumClientsDebt(callback, isActive){   // ( (i) => 'EUR', (i) => !i.isActive )
        let response = await fetch ('https://freecurrencyapi.net/api/v2/latest?apikey=dae13160-3b0e-11ec-8361-e108ba6473f9');
        let currencies = (await response.json()).data;
        let result = {};
        result.clients = 0;
        result.debt = 0;
        if(this.clients.length) {
            this.clients.forEach((client) => {
                if(isActive(client)){
                    client.checks.forEach((check) => {
                        if(check.name === 'Credit' && check.balance < check.limit){
                            if(check.currency === callback(check)){
                                result.clients++;
                                result.debt += check.limit - check.balance;
                            } else {
                                result.clients++;
                                result.debt += ((check.limit / currencies[check.currency]) * currencies[callback(check)]) - ((check.balance / currencies[check.currency]) * currencies[callback(check)]);
                            }
                        } 
                    })
                }
            })
           return result;
        }
        return null;
    }
}
let bank = new Bank()
