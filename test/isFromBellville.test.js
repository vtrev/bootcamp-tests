describe('Is from Bellville', function () {
    it('should return cars from Bellville only', function () {
        assert.equal(true, isFromBellville('Not from Bellville'))
    });

    it('should return cars from Bellville only', function () {
        assert.equal(true, isFromBellville('CY45GP'))
    });


});
