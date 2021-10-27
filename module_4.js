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
            {
                number: 4,
                name: 'dessert cook'
            },

        ];
        this.employee = [
            {
                name:'ivan',
                position: 'cook',
                leader: true,
                salary: 1000,
                works: true,
                department: 2,
            },
            {
                name:'mari',
                position: 'assistant-cook',
                salary: 700,
                works: true,
                department: 2,
            },
            {
                name:'anna',
                position: 'assistant-cook',
                salary: 600,
                works: true,
                department: 2,
            },
            {
                name:'dima',
                position: 'cleaner',
                salary: 500,
                works: true,
                department: 2,
            },
            {
                name:'igor',
                position: 'dessert cook',
                salary: 500,
                works: false,
                department: 4,
            },
            {
                name:'maks',
                position: 'barman',
                salary: 900,
                works: true,
                department: 1,
            },
            {
                name:'oleg',
                position: 'ofitsiant',
                salary: 800,
                works: true,
                department: 1,
            },
            {
                name:'marina',
                position: 'ofitsiant',
                salary: 700,
                works: true,
                department: 1,
            },
            {
                name:'rita',
                position: 'ofitsiant',
                salary: 1000,
                works: true,
                department: 1,
            },
            {
                name:'semen',
                position: 'ofitsiant',
                salary: 600,
                works: false,
                department: 1,
            }
        ]
    }
    sumSalary(){
        let result = {};
        if(this.department && this.employee) {
            this.employee.forEach((i) => {
                if(result[i.department]) {
                    result[i.department] += i.salary;
                } else {
                    result[i.department] = i.salary;
                }
            })
            return result;
        }
        return null;
    }
    averageSalary(){
        let allSalary = {};
        let result = {};
        if(this.department && this.employee) {
        this.department.forEach((i) => {
          this.employee.forEach((j) => {
              if(i.number === j.department) {
                  if(allSalary[i.number]){
                    allSalary[i.number].push(j.salary);
                  } else {
                    allSalary[i.number] = [];
                    allSalary[i.number].push(j.salary);
                  }
              }
          })
        })
      } else {
          return null;
      }
        for (let i in allSalary) {
          let length = allSalary[i].length;
              for(let j = 0; j < allSalary[i].length; j++) {
                  if(result[i]){
                      result[i] += allSalary[i][j];
                  }else{
                      result[i] = allSalary[i][j];
                  }
                  if(j === allSalary[i].length - 1){
                      result[i] /= length;
                  }
              }
        }
        return result;
    }
    salaryMaxAndMin(){
        let result = {};
        if(this.department && this.employee) {
          this.department.forEach((i) => {
            result[i.number] = {};
              this.employee.forEach((j) => {
                  if(i.number === j.department){
                      if(result[i.number][j.position]){
                            if(result[i.number][j.position].min > j.salary){
                                result[i.number][j.position].min = j.salary;
                            }
                            if(result[i.number][j.position].max < j.salary){
                                result[i.number][j.position].max = j.salary;
                            }
                      } else {
                        result[i.number][j.position] = {};
                          result[i.number][j.position].min = j.salary;
                          result[i.number][j.position].max = j.salary;
                      }
                  }
              })
          })
          return result;
      }
      return null;
    }
    amountDismissed () {
        let count = 0;
        if(this.department && this.employee) {
            this.employee.forEach((i) => {
                if(i.works === false) {
                    count++;
                }
            })
            return count;
        }
        return null;
    }
    departmentWithoutLeader(){
        let withLeader = {};
        let result = [];
        if(this.department && this.employee) {
            this.employee.forEach((i) => {
                if(i.leader) {
                    withLeader[i.department] = i;
                }
            })
            this.department.forEach((i) => {
               if(!withLeader[i.number]){
                   result.push(i.number);
               }
            })
            return result;
        }
        return null;
    }
}
let nn = new Restaurant()
