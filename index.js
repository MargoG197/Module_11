

export function wordReverse(word){
 const joinArray =  word.split('').reverse('').join('');
   return joinArray;
  }
  
  console.log(wordReverse('Reverse'));

  
  export function repeatWord(word, number){
    if (typeof word == 'string' && typeof number === "number" ){
      const array = [];
      if (number >= 1){
      for(let num = 1; num <= number; num++){
      array.push(word+num)
      }
      let string = array.toString('');
      let finalString = string.split(",").join(', ');
      return finalString;
      }else if( number === 0){
      const line = 'nothing to display'
      return line;
      } else if (number < 0){
      for(let num = -1; num >= number; num--){
      array.push(word+num)
      }
      let string = array.toString('');
      let finalString = string.split(",").join(', ');
      return finalString;
      }
    } else {
      return "введены неверные данные"
    }
    
    } 
    
    
   console.log(repeatWord('Mama', -5)) 