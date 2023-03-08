var Employee = [
    {
        Name: "Faisal",
        designation: "React JS developer",
        salary: 50000,
        performance: 10
    }

];

function calculateIncrementOfEmployee(Employee) {
    for (var E of Employee) {
        var current_Increment = E.performance/2;
        var incremented_salary = E.salary * (current_Increment/100);
        console.log(E.Name + " has increased by " + current_Increment + " % into his " + incremented_salary)
    }
}

calculateIncrementOfEmployee(Employee)