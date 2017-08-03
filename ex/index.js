//*************logger************** */
// import LoggerEchma from './loggerEcmaScript'

// const logger = new LoggerEchma('Using EcmaScript')
// console.log(logger.toString());

// const logger = require('./loggerCommonJs')
// logger.info('Using CommonJS!');

//************utils************* */
//import clone from './utils'

// //create object
// const product = {
//     name: 'Bic - Blue',
//     price: 1.90
// }

// //clone and modify new product
// const newProduct = clone(product)
// newProduct.name = 'Bic - Black'

// console.log(product, newProduct)

//************react Hello World************ */
import 'react'

export default props =>(
    <h1>Hello World</h1>
)

console.log("Hello World")