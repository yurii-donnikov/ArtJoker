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
          name:'maks',
          position: 'barman',
          salary: 100,
          isWorks: true,
          department: 1,
        },
        {
          name:'oleg',
          position: 'ofitsiant',
          salary: 100,
          isWorks: false,
          department: 1,
        },
        {
          name:'marina',
          position: 'ofitsiant',
          salary: 100,
          isWorks: true,
          department: 1,
        },
        {
          name:'rita',
          position: 'ofitsiant',
          salary: 100,
          isWorks: true,
          department: 1,
        },
        {
          name:'semen',
          position: 'ofitsiant',
          leader: true,
          salary: 40,
          isWorks: true,
          department: 1,
        },
        {
          name:'ivan',
          position: 'cook',
          salary: 100,
          isWorks: true,
          department: 2,
        },
        {
          name:'mari',
          position: 'assistant-cook',
          salary: 100,
          isWorks: true,
          department: 2,
        },
        {
          name:'anna',
          position: 'assistant-cook',
          salary: 110,
          isWorks: true,
          department: 2,
        },
        {
          name:'dima',
          position: 'cleaner',
          salary: 100,
          isWorks: true,
          department: 2,
        },
        {
          name:'igor',
          position: 'dessert cook',
          salary: 150,
          leader: true,
          isWorks: false,
          department: 4,
        },
        {
          name:'Lexa',
          position: 'dessert cook',
          salary: 120,
          isWorks: true,
          department: 4,
        }
      ]
    }

    sumSalary(callback){
      let result = {};
      if(this.department.length && this.employee.length) {
        this.employee.forEach((i) => {
          if(callback(i)){
            if(result[i.department]) {
              result[i.department] += i.salary;
            } else {
              result[i.department] = i.salary;
            }
          }
        })
        return result;
      }
      return null;
    }
  
    averageSalary(callback){
      let result = 0;
      let count = 0;
      if(this.department.length && this.employee.length) {
        this.employee.forEach((i) => {
          if(callback(i)){
            count++;
            result += i.salary;
          }
        })
        return result/count;
      } 
      return null;
    }
  
    salaryMinToMax(callback){
      let result = {};
      if(this.department.length && this.employee.length) {
        this.department.forEach((i) => {
          result[i.number] = {};
          this.employee.forEach((j) => {
            if(callback(j)){
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
            }
          })
          if(Object.keys(result[i.number]).length === 0){
            delete result[i.number];
          }
        })
        return result;
      }
      return null;
    }
  
    amountEmployee (callback) {
      let result = 0;
      if(this.department.length && this.employee.length) {
        this.employee.forEach((i) => {
          if(callback(i)) {
            result++;
          }
        })
        return result;
      }
      return null;
    }
  
    departmentLeader(callback){
        let leader = [];
        let notLeader = [];
        if(this.department.length && this.employee.length) {
          this.employee.forEach((i) => {
            if(i.leader) {
                leader.push(i.department);
            }
            if(callback(i)){
                notLeader.push(i.department);
            }
          })
          if(leader.toString() === notLeader.toString()) {
            return leader;
          }
          leader.forEach((i) => {
            for(let j = 0; j < notLeader.length; j++){
              if(i === notLeader[j]){
                notLeader.splice(j, 1);
                j--;
              }
            }
          })
          for(let i = 1; i < notLeader.length; i++){
            if(notLeader[i] === notLeader[i - 1]){
              notLeader.splice(i, 1);
              i--;
            }
          }
          return notLeader;
        }
        return null;
    }
  }
  let restaurant = new Restaurant()
