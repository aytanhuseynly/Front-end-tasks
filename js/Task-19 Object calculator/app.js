//create calculator object with methods
let Calculator =
{
  read:function()
   {
    this.num1=Number(prompt(`Enter num1: `));
    this.num2=Number(prompt(`Enter num2: `));
   },
   sum: function ()
   {
   return (this.num1 + this.num2)
   },
   multiply: function ()
   {
   return (this.num1 * this.num2)
   },
   devide: function ()
   {
   return (this.num1 / this.num2)
   },
   subtract: function ()
   {
    return (this.num1 - this.num2)
   }
}

console.log(Calculator.read())

console.log(Calculator.sum())

console.log(Calculator.multiply())

console.log(Calculator.devide())

console.log(Calculator.subtract())