  // All valid credit card numbers
mainFunction()

function mainFunction() {
  /*
  const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
  const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
  const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6, 4]
  const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
  const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

  // All invalid credit card numbers
  const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
  const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
  const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4, 9]
  const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
  const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

  // Can be either valid or invalid
  const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
  const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
  const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
  const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
  const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

  // An array of all the arrays above
  const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
*/
 

  // Add your functions below:
  const validateCred = (arr) => {
    let sum = 0

    // Realization a Luhn algorithm 
    for (let i = arr.length - 1; i >= 0; i--) {
      let x = arr[i] // assing the value of arr[i] to safe original arr.
      if (i % 2 === 0) {
        x *= 2
        if (x > 9)
          x -= 9
      }
      sum += x
    };
    
    if (arr.length === 15) { 
      // we should find the last number of the card 
      // to create a valid cart nubmer
      
      sum += 10 - (sum % 10)
      if (sum % 10 == 0)
        return true // i think if length equal 15 the card number will be always true, but who am i to judge? 
    
    }
          
    
    if (sum % 10 == 0) return true  // check result of a Luhn algoruthm
            
    return false

  }


  const testOfValid = (arr) => {
    let i = 1
    arr.forEach(el => {
      if (validateCred(el)) {
        console.log(`The ${i++} array is valid`)
      } else {
        console.log(`The ${i++} array is not valid`)
      }
    })
  }
  

  //this function should take the nested arr of cards number and return nested arr of the invalid Card numbers
  const findInvalidCards = (arr) => {
    let newNestArr = []
    newNestArr = arr.filter(el => !validateCred(el))
    return newNestArr
  }
  

  // this function should take the nested array and return the array of the names of company
  //which issues the card of invalid numbers. The names of the companies should not repeat.
  const idInvalidCardCompanies = (nestArr) => {
    const arr = findInvalidCards(nestArr)
    const arrInvalidCardCompanies = []
    arr.forEach(el => {
      switch (el[0]) {
        case 3:
          if (arrInvalidCardCompanies.indexOf('Amex (American Express)') === -1)
            arrInvalidCardCompanies.push('Amex (American Express)')
          break
        case 4:
          if (arrInvalidCardCompanies.indexOf('Visa') === -1)
            arrInvalidCardCompanies.push('Visa')
          break
        case 5:
          if (arrInvalidCardCompanies.indexOf('Mastercard') === -1)
            arrInvalidCardCompanies.push('Mastercard')
          break
        case 6:
          if (arrInvalidCardCompanies.indexOf('Discover') === -1)
            arrInvalidCardCompanies.push('Discover')
          break
        default:
          console.log('Company not found.')

      }

    })

    return arrInvalidCardCompanies


  }
/*
  console.log('The cards number is: ')

  testOfValid(batch)

  console.log('checking the original array for changes: ')
  console.log(batch) //checking the original array for changes

  console.log('The invalid card number is : ')

  console.log(findInvalidCards(batch))

  console.log('Names of the companies, which issues the invalid cards number: ')

  console.log(idInvalidCardCompanies(batch))
*/
  
// -------------------------------------------------------------------------------------


  // This function convert string of number into array of number (take str, return arr)
  const convertFromStringToCardNumber = (str) => {
    let splitStr = str.split('');
    let arrCardNumber = [];
    for (num of splitStr) {
      arrCardNumber.push(parseInt(num, 10));
    }

    return arrCardNumber;
  }

  const nestedArrOfStrNumber = (arrOfStrNum) => {
    let myBatch = [];
    arrOfStrNum.forEach(el => myBatch.push(convertFromStringToCardNumber(el)));
    return myBatch;
  }

  //test my cards number

   // The arr of string of numbers, which we will transform into nested arr of cadrs number
   const myStrBatch = ['4485664902514941', '4024007110531711', '4024007189228286258',
   '6011874754244749', '6011426346251342527', '30085494869949',
   '5426050179792676', '36023309778033', '6380402485759281'];

   // The result of transform myStrBatch array
   const myBatch = nestedArrOfStrNumber(myStrBatch);
    
   console.log('The cards number is: ');

   testOfValid(myBatch);
 
   console.log('checking the original array for changes: ');
   console.log(myBatch) //checking the original array for changes;

   console.log('The invalid card number is : ');

  console.log(findInvalidCards(myBatch));
 
   console.log('Names of the companies, which issues the invalid cards number: ');
 
   console.log(idInvalidCardCompanies(myBatch));

   


}
