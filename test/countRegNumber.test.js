describe('Count regNumber', function () {

    it('Should return the number of registerations in a string', function () {
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('Should return the number of registerations in a string', function () {

        assert.equal(1, countRegNumber('CA 42665, AA 12 RT GP'));
    });
});
