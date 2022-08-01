// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {
    code: 0,
    name: '',
   };

let employee2:{code: number, name: string} = {
    code: 10,
    name: "John"
}

employee.code = 10;
employee.name = "John";