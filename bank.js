class Bank {
    constructor(){
        this.clients = [
            {
                name: 'Ivan Ivanov',
                isActive: true,
                registration: new Date (2013, 13, 1),
                check:[
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
                check:[
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
                check:[
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
            this.clients.forEach((i) => {
                if(i.check.length) {
                    i.check.forEach((j) => {
                        if(j.currency === callback(j)){
                            result += j.balance;
                        }
                        else {
                            result += (j.balance / currencies[j.currency]) * currencies[callback(j)];
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
            this.clients.forEach((i) => {
                if(i.check.length){
                    i.check.forEach((j) => {
                        if(j.name === 'Credit' && j.balance < j.limit){
                            if(j.currency === callback(j)){
                                result += j.limit - j.balance;
                            } else {
                                result += ((j.limit / data[j.currency]) * data[callback(j)]) - ((j.balance / data[j.currency]) * data[callback(j)]);
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
            this.clients.forEach((i) => {
                if(isActive(i)){
                    i.check.forEach((j) => {
                        if(j.name === 'Credit' && j.balance < j.limit){
                            if(j.currency === callback(j)){
                                result.clients++;
                                result.debt += j.limit - j.balance;
                            } else {
                                result.clients++;
                                result.debt += ((j.limit / currencies[j.currency]) * currencies[callback(j)]) - ((j.balance / currencies[j.currency]) * currencies[callback(j)]);
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
