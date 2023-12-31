/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import LoginScreen from './Login';
import CalculatorInterface from './Calculator';
import { View, Text, TextInput, Button } from 'react-native';
import calcStyle from './CalcStyle'

// Question 2
// function App(): JSX.Element {
//   return (
//     <LoginScreen/>
//   );
// }

// Question 3
// const App = () => {
//   const [income, setIncome] = useState('');
//   const [tax, setTax] = useState('');

//   const calculateTax = () => {
//     const incomeAmount = parseFloat(income);

//     if (isNaN(incomeAmount) || incomeAmount<0) {
//       setTax('Invalid Income');
//       return;
//     }

//     let taxAmount = 0;
//     if (incomeAmount <= 10000000) {
//       taxAmount = incomeAmount * 0.1;
//     } else if (incomeAmount <= 50000000) {
//       taxAmount = 10000000 * 0.1 + (incomeAmount - 10000000) * 0.2;
//     } else {
//       taxAmount = 10000000 * 0.1 + 40000000 * 0.2 + (incomeAmount - 50000000) * 0.3;
//     }

//     setTax(`Income tax: ${taxAmount.toFixed(2)}vnd`);
//   };

//   return (
//     <View style={calcStyle.container}>
//       <Text style={calcStyle.title}>Income Tax Calculator</Text>
//       <TextInput 
//         textAlign='right'
//         style={calcStyle.input}
//         placeholder='Enter your income'
//         keyboardType='numeric'
//         value={income}
//         onChangeText={text => setIncome(text)}
//       />
//       <Button title='Calculate Tax' onPress={calculateTax}/>
//       <Text style={calcStyle.result}>{tax}</Text>
//     </View>
//   )
// }

// Question 4
function App(): JSX.Element {
  return (
    <CalculatorInterface/>
  );
}

export default App;
