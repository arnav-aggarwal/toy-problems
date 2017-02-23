function flatten(arr) {
  const flat = [];
  
  arr.filter(item => item.length !== 0)
    .forEach(item => {
      if(typeof item === 'object') {
        flat.push(...flatten(item));
      } else {
        flat.push(item);
      }
    });
    
  return flat;
}
