import LoggerEchma from './loggerEcmaScript'

const logger = new LoggerEchma('Using EcmaScript')
console.log(logger.toString());

// const logger = require('./loggerCommonJs')
// logger.info('Using CommonJS!');
