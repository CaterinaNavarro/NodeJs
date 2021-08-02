const removeDuplicates = require('../utils/arr');

test('arr [2,3,4,3,4,2,5] without duplicates is equal to [2,3,4,5]', () => {
    const arrDuplicates = [2,3,4,3,4,2,5]; 
    const arrNoDuplicates = [2,3,4,5];
    expect(removeDuplicates(arrDuplicates)).toEqual(arrNoDuplicates);
});