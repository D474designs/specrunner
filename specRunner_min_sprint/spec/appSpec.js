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
    it('Expect 1 + 1 to equal 2', function() {
      // calculate result
      result = sum(1, 1);
      expect(result).to.equal(2);
      // compare result with expected value, 1
    });

    // test case 2:
    it('Expect 1 + -1 to equal 0', function() {
    expect(sum(1, -1)).to.equal(0);
    });
    // test case 3:
    it('If y is data type \'string\', return \Not a Number\'', function () {
    expect(sum('x', 'y')).to.equal('Not a Number');
  });
});
  // test set 2:
  describe('multiply', function() {
    var result;
    beforeEach(function() {
      console.log('running test case...');
});
  it('Expect 2 * 2 to equal 4', function() {
    result = multiply(2,2);
    expect(result).to.equal(4);
});
it('Expect -2 * -2 to equal 4', function() {
  expect(multiply(-2, -2)).to.equal(4);
});
it('Expect -2 * 2 to equal 4', function() {
  expect(multiply(-2, 2)).to.equal(-4);
});
});
});
