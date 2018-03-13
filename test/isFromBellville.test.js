describe('Is from Bellville', function () {
    it('should return false if car not from Bellville', function () {
        assert.equal(false, isFromBellville('Not from Bellville'))
    });

    it('should return true is car is from Bellvill', function () {
        assert.equal(true, isFromBellville('CY45GP'))
    });


});
