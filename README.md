# sf-task951-nodejs-nve-arrays-app
For Skill Factory study project (B9, Task B9.5.1) (nodejs app)

<br>

### Dependencies

* "nve-arrays" (["@npm_repo"](https://www.npmjs.com/package/nve-arrays), ["@github_repo"](https://github.com/VictorNuzhdin/sf-task951-nodejs-nve-arrays-package))

### Install Dependencies

```bash
$ npm i nve-arrays

$ npm list --depth=1

=OUTPUT:
nve-arrays-app@1.0.0 /home/devops/github/sf-task951-nodejs-nve-arrays-app
└─┬ nve-arrays@1.0.0
    └── moment@2.29.4
```

### Run

```bash
$ npm index.js
or 
$ npm start
```

### Output
```bash
---
{
    "classTitle": "Class Employee",
    "totalQuantity": 6,
    "totalSalary": 27000,
    "totalAvgSalary": 4500,
    "ts": "20230403164829"
}
---
{"emp1001":{
    "empId": 1001,
    "empName": "John Does",
    "empAge": 42,
    "empSalary": 4000,
    "ts0": "20230403164829",
    "ts1": "2023-04-03 16:48:29"
},"emp1002":{
    "empId": 1002,
    "empName": "Eric Jobs",
    "empAge": 27,
    "empSalary": 2000,
    "ts0": "20230403164829",
    "ts1": "2023-04-03 16:48:29"
},"emp1003":{
    "empId": 1003,
    "empName": "Kyle Dick",
    "empAge": 53,
    "empSalary": 6000,
    "ts0": "20230403164829",
    "ts1": "2023-04-03 16:48:29"
},"emp1004":{
    "empId": 1004,
    "empName": "Jane Nike",
    "empAge": 25,
    "empSalary": 1500,
    "ts0": "20230403164829",
    "ts1": "2023-04-03 16:48:29"
},"emp1005":{
    "empId": 1005,
    "empName": "Lucy Jucy",
    "empAge": 58,
    "empSalary": 12000,
    "ts0": "20230403164829",
    "ts1": "2023-04-03 16:48:29"
},"emp1006":{
    "empId": 1006,
    "empName": "Mary Jery",
    "empAge": 18,
    "empSalary": 1500,
    "ts0": "20230403164829",
    "ts1": "2023-04-03 16:48:29"
}}
---
empId, empName, empAge, empSalary
1001, John Does, 42, 4000
1002, Eric Jobs, 27, 2000
1003, Kyle Dick, 53, 6000
---
empId, empName, empAge, empSalary
1001, John Does, 42, 4000
1002, Eric Jobs, 27, 2000
1003, Kyle Dick, 53, 6000
1004, Jane Nike, 25, 1500
1005, Lucy Jucy, 58, 12000
1006, Mary Jery, 18, 1500
```