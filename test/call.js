
var Call = require('../lib');

describe("Call", function() {

  it("should call function you pass", function(done) {

    var fn = function() {
      done();
    }

    Call(fn);

  });

});
