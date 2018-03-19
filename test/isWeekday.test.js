describe('isWeekday function', function () {
    it('should return true if a given day is a weekday', function () {
        assert.equal(true, isWeekday('Monday'))
    });

    it('should return false if a given day is not a weekday', function () {
        assert.equal(false, isWeekday('Saturday'));

    });
});
 