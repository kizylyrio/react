import LoggerEchma from './loggerEcmaScript'

const logger = new LoggerEchma('Using EcmaScript')
console.log(logger.toString());

// const logger = require('./loggerCommonJs')
// logger.info('Using CommonJS!');

import clone from './utils'

// //create object
// const product = {
//     name: 'Bic - Blue',
//     price: 1.90
// }

// //clone and modify new product
// const newProduct = clone(product)
// newProduct.name = 'Bic - Black'

// console.log(product, newProduct)