describe('The greet function', function () {

    it('should greet Andrew correctly', function () {
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    it('should greet Vusi correctly', function () {
        // this test will fail - can you fix it?
        assert.equal('Hello, Vusi', greet('Vusi'));
    });
});
