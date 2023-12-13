const express = require('express') 
const calculatorController = require("../controllers/calculatorController")
const router = express.Router()
 
 
 // new route for adding two numbers
 router.get('/add', (req, res) => {
   console.log(req.query)
   let number1 = parseInt(req.query.num1)
   let number2 =parseInt(req.query.num2)
   let sum = number1 + number2
   console.log(number1, number2, sum)
    res.status(200).json({result: sum})
   })
 
   
    // new route for subtracting two numbers
 router.get('/subtract', (req, res) => {
   console.log(req.query)
   let number1 = parseInt(req.query.num1)
   let number2 =parseInt(req.query.num2)
   let difference = number1 - number2
   console.log(number1, number2, difference)
    res.status(200).json({result: difference})
   })

       // new route for multiplying two numbers
 router.get('/multiply', (req, res) => {
   console.log(req.query)
   let number1 = parseInt(req.query.num1)
   let number2 =parseInt(req.query.num2)
   let product = number1 * number2
   console.log(number1, number2, product)
    res.status(200).json({result: product})
   })

          // new route for dividinig two numbers
 router.get('/divide', (req, res) => {
   console.log(req.query)
   let number1 = parseInt(req.query.num1)
   let number2 =parseInt(req.query.num2)
   let quotient = number1 / number2
   console.log(number1, number2, quotient)
    res.status(200).json({result: quotient})
   })


module.exports = router;  
