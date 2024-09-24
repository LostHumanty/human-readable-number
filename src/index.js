module.exports = function toReadable (number) {
    let result = '';
    let numStr = number.toString();
    let numList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numTeens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (number < 10) {
      result = numList[number];
    } else if (number < 20) {
      result = numTeens[number - 10];
    } else if (number < 100) {
      result = `${numTens[parseInt(numStr[0]) - 2]}`;
      if (parseInt(numStr[1]) !== 0) {
        result += ` ${numList[parseInt(numStr[1])]}`;
      }
    } else if (number < 1000) {
      result = `${numList[parseInt(numStr[0])]} hundred`;
      if (number % 100 > 0) {
        result += ` ${toReadable(number % 100)}`;
      }
    }
  
    return result;
}
