var data = 'call, sms, call, sms, sms';


describe('totalPhoneBill function', function () {
    it('Should return the total phone bill for a given usage', function () {
        assert.equal('R7.45', totalPhoneBill(data))
    });

});
