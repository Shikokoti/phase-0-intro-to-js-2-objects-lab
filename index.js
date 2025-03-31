// Define the employee object
let employee = {
    name: "Doe",
    streetAddress: "Mombasa"
};

// ✅ Function to update an employee nondestructively (returns a new object)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,   // Copy existing properties
        [key]: value   // Update the specified key dynamically
    };
}

// ✅ Function to update an employee destructively (modifies the original object)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly modify the original object
    return employee; // Return the modified object
}

// ✅ Function to delete a property nondestructively
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }; // Create a copy of the employee object
    delete newEmployee[key]; // Delete the specified key from the new object
    return newEmployee; // Return the updated object
}

// ✅ Function to delete a property destructively (modifies the original object)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Directly modify the original object
    return employee; // Return the modified object
}

// ✅ Updating the employee object non-destructively
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");

// ✅ Updating the employee object destructively
destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "John");

// ✅ Deleting a property non-destructively
let employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");

// ✅ Deleting a property destructively
destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");

// Logging results to verify
console.log("Original Employee after Destructive Update:", employee);
console.log("Updated Employee (Nondestructive Update):", updatedEmployee);
console.log("Employee Without Address (Nondestructive Delete):", employeeWithoutAddress);
