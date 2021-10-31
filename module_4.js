
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
        works: true,
        department: 1,
      },
      {
        name:'oleg',
        position: 'ofitsiant',
        salary: 100,
        works: true,
        department: 1,
      },
      {
        name:'marina',
        position: 'ofitsiant',
        salary: 100,
        works: true,
        department: 1,
      },
      {
        name:'rita',
        position: 'ofitsiant',
        salary: 100,
        works: true,
        department: 1,
      },
      {
        name:'semen',
        position: 'ofitsiant',
        leader: true,
        salary: 40,
        works: true,
        department: 1,
      },
      {
        name:'ivan',
        position: 'cook',
        salary: 100,
        works: true,
        department: 2,
      },
      {
        name:'mari',
        position: 'assistant-cook',
        salary: 100,
        works: true,
        department: 2,
      },
      {
        name:'anna',
        position: 'assistant-cook',
        salary: 100,
        works: true,
        department: 2,
      },
      {
        name:'dima',
        position: 'cleaner',
        salary: 100,
        works: true,
        department: 2,
      },
      {
        name:'igor',
        position: 'dessert cook',
        salary: 150,
        leader: true,
        works: false,
        department: 4,
      },

    ]
  }

  sumSalary(callback){
    let result = {};
    if(this.department.length && this.employee.length) {
      this.employee.forEach((i) => {
        if(callback(i)){  //((i) => i.works)
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
          count++
          result += i.salary
        }
      })
      return result/count
    } return null;
  }

  salaryMaxAndMin(callback){
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
          delete result[i.number]
        }
      })
      return result;
    }
    return null;
  }

  amountEmployee (callback) {
    let count = 0;
    if(this.department.length && this.employee.length) {
      this.employee.forEach((i) => {
        if(callback(i)) { //((i) => i.works === false)
          count++;
        }
      })
      return count;
    }
    return null;
  }

  departmentLeader(callback){
    let deptLeader = [];
    let withoutLeader = [];
    if(this.department.length && this.employee.length) {
      this.employee.forEach((i) => {
        if(i.leader) {
          deptLeader.push(i.department)
        }
        if(callback(i)){
          withoutLeader.push(i.department)
        }
      })
      if(deptLeader.toString() === withoutLeader.toString()) {
        return deptLeader
      } else {
        deptLeader.forEach((i) => {
          for(let j = 0; j < withoutLeader.length; j++){
            if(i === withoutLeader[j]){
              withoutLeader.splice(j, 1);
              j--
            }
          }
        });
        for(let i = 1; i < withoutLeader.length; i++){
          if(withoutLeader[i] === withoutLeader[i - 1]){
            withoutLeader.splice(i, 1);
            i--;
          }
        }
        return withoutLeader
      }
    }
    return null;
  }
}
let nn = new Restaurant()
