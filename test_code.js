function String(item){
  if(!item.push && typeof(item) === 'object'){
    return item.name || '';
  }
  
  return ''+item;
}

function Int(item){
  if(typeof(item) === 'boolean'){
    if(item){ return 1; }
    return 0;
  }
  return parseInt(item,10);
}

function Array(item){
  var type = typeof(item);
  
  if(type === 'string'){
    return item.split("\n");
  } else if(type === 'object'){
    if(item.push && item.length && item.concat){
      return item;
    }
  }
  
  return [item];
}