function pascal(num) {
  if(typeof num !== 'number') {
    throw new Error('Input must be of type number')
  }
  
  if(num < 1) {
    return [];
  }
  
  const pascal = [[1]];
  
  for(let i = 1; i < num; i++) {
    const lastRow = pascal[i - 1];
    const thisRow = [1];
    
    for(let j = 1; j < lastRow.length; j++) {
      thisRow.push(lastRow[j - 1] + lastRow[j]);
    }
    
    thisRow.push(1);
    pascal.push(thisRow);
  }
  
  return pascal;
}
