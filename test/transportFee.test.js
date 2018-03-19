describe('The totalFee function', function () {

    it(' Return the right price based on the shifts you are working', function () {
        assert.equal('free', transportFee('nightshift'));
    });

});
