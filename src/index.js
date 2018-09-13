/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
/*const*/ module.exports = function getLoveTrianglesCount(preferences = []) /*=>*/ {
  let numberOfLoveTriangles = 0;
  let elementA;
  let elementB;
  let elementC;
    for(let i = 0; i < preferences.length; i++){
      elementA = preferences[i];
      elementB = preferences[elementA - 1];
      elementC = preferences[elementB - 1]
      if(elementC == i + 1){
        numberOfLoveTriangles++;
      }
    }
    const count = Math.floor(numberOfLoveTriangles / 3);

  return count;
};
