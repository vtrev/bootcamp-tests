var regString = 'CL 124,CY 567,CL 345,CJ 456,CL 341';
var loc = 'CL';

describe('All from town function', function () {
    it('should return all cars from a given town', function () {
        assert.deepEqual(["CL 124", "CL 345", "CL 341"], allFromTown(regString))

    });
});
