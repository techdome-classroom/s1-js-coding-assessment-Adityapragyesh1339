const decodeTheRing = function (message, pattern) {

  function dfs(mIndex, pIndex) {
   
    if (mIndex === message.length && pIndex === pattern.length) return true;
    

    if (pIndex === pattern.length) return false;


    if (pattern[pIndex] === '*') {
   
        return dfs(mIndex, pIndex + 1) || (mIndex < message.length && dfs(mIndex + 1, pIndex));
    }


    if (mIndex < message.length && (pattern[pIndex] === '?' || pattern[pIndex] === message[mIndex])) {
        return dfs(mIndex + 1, pIndex + 1);
    }


    return false;
}

return dfs(0, 0);
  };
  
  module.exports = decodeTheRing;