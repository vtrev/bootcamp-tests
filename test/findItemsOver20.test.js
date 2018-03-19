var list = [
    {
        name: 'apples',
        qty: 10
    },
    {
        name: 'pears',
        qty: 37
    },
    {
        name: 'bananas',
        qty: 27
    },
    {
        name: 'apples',
        qty: 3
    },
];


var results = [
    {
        name: 'pears',
        qty: 37
    },
    {
        name: 'bananas',
        qty: 27
    },
];


//
//describe('', function () {
//    it('should return a list of items that have a quantity of 20 and over given a set of data', function () {
//        assert.equal(results, findItemsOver20(list));
//
//    });
//});




describe('find items over 20 function', function () {
    it('Should return items with quantity over 20', function () {
        assert.deepEqual(results, findItemsOver20(list));

    });

});
