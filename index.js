const empArrays = require('nve-arrays');


/**
 *=Класс "Сотрудник"
 * @field classTitle     - заголовок класса (поле класса);
 * @field totalQuantity  - кол-во сотрудников (созданных объектов);
 * @field totalSalary    - сколько выплачено зар.платы;
 * @field totalAvgSalary - средняя зп;
 * @field #gid           - глобальный уникальный идентификатор сотрудника;
 * @field #name          - имя (фио);
 * @field #age           - возраст;
 * @field #salary        - заработная плата в месяц;
 * @field #clsTitle      - заголовок класса (поле объекта);
 * 
 */
 class Employee {
    static classTitle = "Class Employee";
    static totalQuantity = 0;
    static totalSalary = 0;
    static totalAvgSalary = 0;
    #gid;
    #name;
    #age;
    #salary;
    #clsTitle

    //..Метод Конструктора класса
	constructor(gid, name, age, salary) {
        this.#gid = gid;
		this.#name = name;
        this.#age = age;
        this.#salary = salary;
        this.#clsTitle = Employee.classTitle;
        //..считаем статистику по созданным объектам
        Employee.totalQuantity += 1;
        Employee.totalSalary += salary;
	}

	getID() {
		return this.#gid;
	}

	getName() {
		return this.#name;
	}

	getAge() {
		return this.#age;
	}

	getSalary() {
		return this.#salary;
	}

    getInfoCSV(isHeader = false) {
        // isHeader: default false
        // csv delimeter
        const dlm = ", ";
        let empDataCSVHeader = "empId" + dlm + "empName" + dlm + "empAge" + dlm + "empSalary";
        let empDataCSV = this.#gid + dlm + this.#name + dlm + this.#age + dlm + this.#salary;
        //
        return isHeader ? empDataCSVHeader + "\n" + empDataCSV : empDataCSV;
    }

    getClassTitle() {
        return this.#clsTitle;
    }

    static getClassTitle() {
        return Employee.classTitle;
    }
}


//=TESTS

// Формируем список объектов типа "Сотрудник"
let emps = [
	new Employee(1001, 'John Does', 42, 4000),
	new Employee(1002, 'Eric Jobs', 27, 2000),
	new Employee(1003, 'Kyle Dick', 53, 6000),
	new Employee(1004, 'Jane Nike', 25, 1500),
	new Employee(1005, 'Lucy Jucy', 58, 12000),
    new Employee(1006, 'Mary Jery', 18, 1500),
];

//=ИНСТРУМЕНТЫ ТЕСТИРОВАНИЯ
// Тестируем JSON структуру с помощью online инструмента "JSON Formatter and Validator"
// https://jsonformatter.curiousconcept.com

//=TEST#1
// Из Класса EmpArrays вызываем Метод "getStatFromListObjectsJSON()"
// который выводит статистику по созданным Объектам типа Employee в формате JSON
let empsStatJSON = empArrays.getStatFromListObjectsJSON(emps);
console.log("---");
console.log(empsStatJSON);
//
/***=OUTPUT:
{
    "classTitle": "Class Employee",
    "totalQuantity": 6,
    "totalSalary": 27000,
    "totalAvgSalary": 4500,
    "ts": "20230402160019"
}
*/


//=TEST#2
// Из Класса EmpArrays вызываем Метод "getInfoFromListObjectsJSON()"
// который выводит данные по всем созданным Объектам типа Employee в формате JSON с доп. полями
let empsInfoJSON = empArrays.getInfoFromListObjectsJSON(emps);
console.log("---");
console.log(empsInfoJSON);
//
/***=OUTPUT:
{"emp1001":{
    "empId": 1001,
    "empName": "John Does",
    "empAge": 42,
    "empSalary": 4000,
    "ts0": "20230402160552",
    "ts1": "2023-04-02 16:05:52"
},"emp1002":{
    "empId": 1002,
    "empName": "Eric Jobs",
    "empAge": 27,
    "empSalary": 2000,
    "ts0": "20230402160552",
    "ts1": "2023-04-02 16:05:52"
}, ..}
*/


//=TEST#3: обработка объектов локального тестового класса
// Из локального класса Employee вызываем метод который выводит информацию о выбранном объекте в CSV формате
console.log("---");
console.log(emps[0].getInfoCSV(true));
console.log(emps[1].getInfoCSV(false));
console.log(emps[2].getInfoCSV());
//
/***=OUTPUT (single object per step)
empId, empName, empAge, empSalary
1001, John Does, 42, 4000
1002, Eric Jobs, 27, 2000
1003, Kyle Dick, 53, 6000
*/


//=TEST#4:
// Из Класса EmpArrays вызываем Метод "getInfoFromListObjectsCSV()"
// который выводит данные по всем созданным Объектам типа Employee в формате CSV с шапкой или без
//let empsInfoCSV = empArrays.getInfoFromListObjectsCSV(emps);
//let empsInfoCSV = empArrays.getInfoFromListObjectsCSV(emps, isHeader = false);
let empsInfoCSV = empArrays.getInfoFromListObjectsCSV(emps, isHeader = true);
console.log("---");
console.log(empsInfoCSV);
//
/***=OUTPUT (multiple objects)
empId, empName, empAge, empSalary
1001, John Does, 42, 4000
1002, Eric Jobs, 27, 2000
1003, Kyle Dick, 53, 6000
1004, Jane Nike, 25, 1500
1005, Lucy Jucy, 58, 12000
1006, Mary Jery, 18, 1500
*/
