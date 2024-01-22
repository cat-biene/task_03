const employees = [
    { 
        name: 'Alice', 
        salary: 5000 
    },
    { 
        name: 'Bob', 
        salary: 6000 
    },
    { 
        name: 'Charlie', 
        salary: 4500 
    }
  ];

// 1. Задача: "Удвоение зарплаты" У вас есть массив объектов, z представляющих сотрудников с полями "имя" и "зарплата". Используя метод map, удвойте зарплату каждого сотрудника.

  const salary = employees
       .map(({name, salary}) => ({
        name: name,
        salary: salary * 2
    }));

  console.log(salary);

// 2. Задача: "Фильтрация сотрудников" Используя метод filter, отфильтруйте сотрудников, у которых зарплата выше 5500

employees
       .filter(({salary}) => salary > 5500)
       .forEach(employee => console.log(employee));
       
// 3. Задача: "Общая зарплата" Используя метод reduce, вычислите общую зарплату всех сотрудников.

const sumSalary = employees.reduce(
    (acc, {salary}) => acc + salary, 
    0);

console.log("Total salary: " + sumSalary);

// 4. Задача: "Имена в верхнем регистре" Используя метод map, преобразуйте имена всех сотрудников к верхнему регистру.

const res = employees
     .map(({name, salary}) => ({
       name: name.toUpperCase(),
       salary: salary
    }));

console.log(res);
       