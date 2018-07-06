// test plan
describe('calculation', function() {
  // test set 1:
  describe('sum', function() {
    var result;
    beforeEach(function() {
       //print message, "running test case..."
       console.log('running test case...');
    });
    // test case 1:
    it('1 + 1 = 2', function() {
      // calculate result
      expect(sum(1, 1)).to.equal(2);
      // compare result with expected value, 1
    });

    // test case 2:
    it('1 + -1 = 0', function() {
    expect(sum(1, -1)).to.equal(0);
    });
    // test case 3:
    it('y is data type string', function () {
    expect(sum(typeof x === 'string', typeof y === 'number')).to.equal('Not a Number');
  });
});
  // test set 2:
  describe('multiply', function() {
    var result;
    beforeEach(function() {
      console.log('running test case...');
});
  it('2 * 2 = 4', function() {
    expect(multiply(2, 2)).to.equal(4);
});
});
});
