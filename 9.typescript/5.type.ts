//interface = type와 비슷
type Man = {
    name: string
}

const man: Man = {
    name: 'john'
}

//
type Men = Man[]

const men: Men = [{name: 'neo'}]

//
type Color = 'red' | 'green' | 'blue'
let color: Color = 'red'
color = 'green'
//color = 'yellow' / error
//color = string / error

//
type Employee = Man & { // implement
    job: string
}

const employee: Employee = {
    name: 'berg',
    job: 'programmer'
}