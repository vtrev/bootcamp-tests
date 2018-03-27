var data = 'call, sms, call, sms, sms';


describe('totalPhoneBill function', function () {
    it('Should return the total phone bill for a given usage', function () {
        assert.equal('R7.45', totalPhoneBill(data)[1])
    });
    
    it('Should not be less than R0',function(){
	assert.isAtLeast(totalPhoneBill(data)[0],0,'The total cannot be a negative number')
	});

});
