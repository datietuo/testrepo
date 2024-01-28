const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];

 // Function to display all employees
function displayEmployees(){
    const totalEmployees = employees.map((e)=>`<p>${e.id}-${e.name}-${e.age}-${e.department}-$${e.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}


function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, e)=>acc+e.salary,0);
    alert(`totalSalaries: $${totalSalaries}`);
}

function displayHREmployees(){
    var hrEmployees = employees.filter(e=>e.department==='HR');
    var hrEmployeesDetails = hrEmployees.map(e=>`<p>${e.id}-${e.name}-${e.age}-${e.department}-$${e.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDetails;
}

function findEmployeeById(id){
    var employeeWithId = employees.find(e=>e.id===id);
    if(employeeWithId){
        document.getElementById('employeesDetails').innerHTML = `<p>${employeeWithId.id}-${employeeWithId.name}-${employeeWithId.age}-${employeeWithId.department}-$${employeeWithId.salary}</p>`;
    }else{
        document.getElementById('employeesDetails').innerHTML = 'No employee with such ID exists.'
    }
}

