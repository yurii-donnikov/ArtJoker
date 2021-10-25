
class Restaurant {
    constructor() {
        this.department = [
            {
                number: 1,
                name: 'hall'
            },
            {
                number: 2,
                name: 'cook'
            },

        ];
        this.employee = [
            {
                name:'ivan',
                position: 'cook',
                salary: 1000,
                works: true,
                department: 'cook',
            },
            {
                name:'ivan2',
                position: 'assistant-cook',
                salary: 700,
                works: true,
                department: 'cook',
            },
            {
                name:'ivan3',
                position: 'cleaner',
                salary: 500,
                works: true,
                department: 'cook',
            },
            {
                name:'ivan4',
                position: 'assistant-cook',
                salary: 500,
                works: false,
                department: 'cook',
            },
            {
                name:'ivan5',
                position: 'barman',
                salary: 900,
                works: true,
                department: 'hall',
            },
            {
                name:'ivan6',
                position: 'ofitsiant',
                salary: 800,
                works: true,
                department: 'hall',
            },
            {
                name:'ivan7',
                position: 'ofitsiant',
                salary: 800,
                works: true,
                department: 'hall',
            },
            {
                name:'ivan8',
                position: 'ofitsiant',
                salary: 800,
                works: false,
                department: 'hall',
            }
        ]
    }
    sumSalary(callback){
        let result = {}
        this.employee.forEach((i) => {
          if(callback(i)) {
        // колбек nn.sumSalary((i) => i.works !== true)
                if(result[i.department]) {
                    result[i.department] += i.salary;
                } else {
                    result[i.department] = i.salary;
                }
            }
        })
        return result;
    }
    // averageSalary(department){
    //   let result = 0;
    //   let count = 0;
    //   this.employee.forEach((i) => {
    //     if(i.department === department) {
    //       result += i.salary;
    //       count++;
    //     }
    //   });
    //   return result / count;
    // }
    averageSalary(){
      let result = {};
      //let count = 0;
      this.employee.forEach((i) => {
        if(i.department === department) {
          result += i.salary;
          count++;
        }
      });
      return result / count;
    }
}

let nn = new Restaurant()
