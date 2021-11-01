//let request = new Request ( "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5" )

// fetch ( 'https://freecurrencyapi.net/api/v2/latest?apikey=dae13160-3b0e-11ec-8361-e108ba6473f9' )
//     .then ( response => {
//         response.json().then ( response =>
//             console.log(response)
//         )
// })




class Bank {
    constructor(){
        this.clients = [
            {
                name: 'Ivan Ivanov',
                isActive: true,
                registration: new Date (2013, 13, 1),
                check:[
                    {
                        name: 'checkDebet',
                        balance: 1000,
                        active: true,
                        activeData: new Date (2025, 13, 1),
                        currency: 'UAH',
                    },
                    {
                        name:'checkKredit',
                        balance: 2000,
                        limit: 1000,
                        active: true,
                        activeData: new Date (2025, 13, 1),
                        currency: 'PLN',
                    }
                ],
            },
            {
                name: 'Oleg Olegov',
                isActive: true,
                registration: (2013, 13, 1),
                check:[
                    {
                        name: 'checkDebet',
                        balance: 1000,
                        active: true,
                        activeData: new Date (2025, 13, 1),
                        currency: 'UAH',
                    },
                    {
                        name:'checkKredit',
                        balance: 900,
                        limit: 1000,
                        active: true,
                        activeData: new Date (2025, 13, 1),
                        currency: 'PLN',
                    }
                ],
            },
            {
                name: 'Roman Romanov',
                isActive: true,
                registration: (2013, 13, 1),
                check:[
                    {
                        name: 'checkDebet',
                        balance: 100,
                        active: true,
                        activeData: new Date (2025, 13, 1),
                        currency: 'UAH',
                    },
                    {
                        name:'checkKredit',
                        balance: 1000,
                        limit: 1000,
                        active: true,
                        activeData: new Date (2025, 13, 1),
                        currency: 'EUR',
                    }
                ],
            }
        ]
    }
    async haveMoney() {
        let response = await fetch ('https://freecurrencyapi.net/api/v2/latest?apikey=dae13160-3b0e-11ec-8361-e108ba6473f9');
        let currencies = await response.json()
        let result = 0;
     
        this.clients.forEach((i) => {
            if(i.check){
                i.check.forEach((j) => {
                    if(!j.limit){
                        if(j.currency === 'PLN'){
                            result += j.balance
                        } else {
                            result += j.balance / currencies.data[j.currency]
                        }
                    } else {
                        if(j.currency === 'PLN'){
                            result += j.balance
                        } else {
                            result += j.balance / currencies.data[j.currency]
                        }
                    }
                })
            }
        })
       return result
    }


}

let bank = new Bank()

