const assert = require('chai').assert;

describe('removeWords', function() {
    it('should remove specified words from the string', function() {
        assert.equal(removeWords('Hello, ceci est un test', ['ceci', 'un']), 'Hello, est test');
    });

    it('should be case sensitive', function() {
        assert.equal(removeWords('Hello Java', ['java']), 'Hello Java');
    });

    it('should return the original string if no words are removed', function() {
        assert.equal(removeWords('Hello World', ['foo', 'bar']), 'Hello World');
    });
});