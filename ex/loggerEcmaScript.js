//Example EcmaScript 2015
export default class LoggerEchma{
    constructor(text){
        this.text = text
    }

    toString(){
        return `INFO: ${this.text}`
    }
}