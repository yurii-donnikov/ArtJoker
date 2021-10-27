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
                name: 'cook2'
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
                name:'ivan2',
                position: 'assistant-cook',
                salary: 700,
                works: true,
                department: 2,
            },
            {
                name:'ivan3',
                position: 'assistant-cook',
                salary: 600,
                works: true,
                department: 2,
            },
            {
                name:'ivan3',
                position: 'cleaner',
                salary: 500,
                works: true,
                department: 2,
            },
            {
                name:'ivan4',
                position: 'assistant-cook',
                salary: 500,
                works: false,
                department: 4,
            },
            {
                name:'ivan5',
                position: 'barman',
                salary: 900,
                works: true,
                department: 1,
            },
            {
                name:'ivan6',
                position: 'ofitsiant',
                salary: 800,
                works: true,
                department: 1,
            },
            {
                name:'ivan7',
                position: 'ofitsiant',
                salary: 700,
                works: true,
                department: 1,
            },
            {
                name:'ivan17',
                position: 'ofitsiant',
                salary: 7000,
                works: true,
                department: 1,
            },
            {
                name:'ivan8',
                position: 'ofitsiant',
                salary: 600,
                works: false,
                department: 1,
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



    // averageSalary(){

    //   let result = {};
    //   let result2 = {};
    //   if(this.department && this.employee) {
    //   this.department.forEach((i) => {
    //     this.employee.forEach((j) => {
    //         if(i.number === j.department) {
    //             if(result[i.number]){
    //                 result[i.number].push(j.salary)
    //             } else {
    //                 result[i.number] = [];
    //                 result[i.number].push(j.salary)
    //             }
    //         }
    //     })
    //   });
    // }
    //   for (let i in result) {
    //     let length = result[i].length;
    //         for(let j = 0; j < result[i].length; j++) {
                
    //             if(result2[i]){
    //                 result2[i] += result[i][j]
    //             }else{
    //                 result2[i] = result[i][j]
    //             }
    //             if(j === result[i].length - 1){
    //                 result2[i] /= length
    //             }
    //         }
    //   }
    //   return result2
    // }

    averageSalary(){
        let sortEmploee = {};
        let result = {};
        if(this.department && this.employee) {
        this.department.forEach((i) => {
          this.employee.forEach((j) => {
              if(i.number === j.department) {
                  if(sortEmploee[i.number]){
                    sortEmploee[i.number].push(j.salary)
                  } else {
                    sortEmploee[i.number] = [];
                    sortEmploee[i.number].push(j.salary)
                  }
              }
          })
        });
      } else {
          return null;
      }
        for (let i in sortEmploee) {
          let length = sortEmploee[i].length;
              for(let j = 0; j < sortEmploee[i].length; j++) {
                  
                  if(result[i]){
                      result[i] += sortEmploee[i][j]
                  }else{
                      result[i] = sortEmploee[i][j]
                  }
                  if(j === sortEmploee[i].length - 1){
                      result[i] /= length
                  }
              }
        }
        return result
      }

    //   salaryMaxAndMin(){
    //       let sortEmploee = {}
    //     if(this.department && this.employee) {
    //         this.department.forEach((i) => {
    //             sortEmploee[i.number] = {} 
    //             this.employee.forEach((j) => {
    //                 if(i.number === j.department){
    //                     if(sortEmploee[i.number][j.position]){
    //                         sortEmploee[i.number][j.position].push(j.salary)
    //                     } else {
    //                         sortEmploee[i.number][j.position] = [];
    //                         sortEmploee[i.number][j.position].push(j.salary)
    //                     }
                   
    //                 }
    //             })
    //         })
    //     }
    //    // return sortEmploee

    //   }

    salaryMaxAndMin2(){
        let sortEmploee = {}
      if(this.department && this.employee) {
          this.department.forEach((i) => {
              sortEmploee[i.number] = {} 
              this.employee.forEach((j) => {
                  if(i.number === j.department){
                      if(sortEmploee[i.number][j.position]){
                            if(sortEmploee[i.number][j.position].min > j.salary){
                                sortEmploee[i.number][j.position].min = j.salary
                            }
                            if(sortEmploee[i.number][j.position].max < j.salary){
                                sortEmploee[i.number][j.position].max = j.salary
                            }
                                
                          //sortEmploee[i.number][j.position].push(j.salary)
                      } else {
                          sortEmploee[i.number][j.position] = {};
                          sortEmploee[i.number][j.position].min = j.salary
                          sortEmploee[i.number][j.position].max = j.salary

                          //sortEmploee[i.number][j.position].push(j.salary)
                      }
                 
                  }
              })
          })
      }
     return sortEmploee
      
    }
    amountDismissed () {
        let count = 0;
        this.employee.forEach((i) => {
            if(i.works === false) {
                count++
            }
        })
        return count
    }
    departmentWithoutLeader(){
        let withLeader = {};
        let result = [];
        this.employee.forEach((i) => {
            if(i.leader) {
                withLeader[i.department] = i;
            }
        })
        this.department.forEach((i) => {
           if(!withLeader[i.number]){
               result.push(i.number)
           }
        })
        return result;
    }
}



let nn = new Restaurant()
