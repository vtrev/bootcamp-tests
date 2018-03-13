describe('regCheck function', function () {
    it('Should check if a registeration number is from a certain location', function () {
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'))
    });

    it('Should check if a registeration number is from a certain location', function () {
        assert.equal(false, regCheck('DV 23 LP GP', 'MP'))
    });


});
