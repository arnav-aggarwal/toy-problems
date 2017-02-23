function deepEquals(a, b, repeat){
    let isEqual = true;
    const aIsArray = Array.isArray(a);
    const bIsArray = Array.isArray(b);
    
    if ((typeof a !== typeof b) || (aIsArray && !bIsArray) || (!aIsArray && bIsArray)) {
        return false;
    }
    if (typeof a !== 'object') {
        return a === b;
    }
    
    for(const key in a) {
        isEqual = b.hasOwnProperty(key) ? deepEquals(a[key], b[key]) : false;
    }
    
    return (isEqual && !repeat) ? deepEquals(b, a, true) : isEqual;
}
