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

var threshold = 20;


describe('find items over function', function () {
    it('should return items that have a higher quantity than threshold', function () {
        assert(list, findItemsOver(threshold));

    });
});
