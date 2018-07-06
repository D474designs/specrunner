describe('calculation', function() {

  describe('sum', function() {
    var result;
    beforeEach(function() {
    });

    it('1+1 = 2', function() {
      result = sum(1, 1);
      expect(result).equal(2);
    });
    it('-1 + 0 = -1', function(){
      result = sum(-1, 0);
      expect(result).equal(-1);
    });
    it('should output Not a number when input is a string', function(){
      result = sum('a', 'b');
      expect(result).equal('Not a Number');
    });
  });

  //multiplication
  describe.only('multiplication', function(){
    var result;
    beforeEach(function(){
    });
    it('2 * 2 = 4', function(){
      result = multiplication(2, 2);
      expect(result).equal(4);
    });
   it('should output Not a number when input is a string', function(){
     result = multiplication('a', 'b');
     expect(result).to.not.be.a('string');
    });
  });
});
