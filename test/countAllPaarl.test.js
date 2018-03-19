var out = ['CJ 678 543', 'CJ 67890'];
var reg = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

describe('Should count all registeration numbers from Paarl', function () {

    it('Should return all registeration numbers from Paarl', function () {
        assert.deepEqual(out, CountAllPaarl(reg));


    });
});
