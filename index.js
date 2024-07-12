// Write your solution in this file!

var customerName = 'bob'

function upperCaseCustomerName() {
    customerName =customerName.toLocaleUpperCase()
};

function setBestCustomer() {
    bestCustomer='not bob';
}
    
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }

  const leastFavoriteCustomer = 'some initial value';
  function changeLeastFavoriteCustomer() {
    try {
      leastFavoriteCustomer = 'new value'; 
    } catch (e) {
      console.log('Error: Cannot reassign a const variable.');
    }
  }
  