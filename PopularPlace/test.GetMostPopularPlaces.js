const assert = require('chai').assert;

describe('getMostPopularPlaces', function() {
    it('should return the two most popular places', function() {
        assert.equal(getMostPopularPlaces('Analamahitsy', 'Analamahitsy', 'Itaosy', 'Behoririka', 'Itaosy', 'Itaosy'), 'Itaosy Analamahitsy');
    });

    it('should handle a single place', function() {
        assert.equal(getMostPopularPlaces('Analamahitsy'), 'Analamahitsy undefined');
    });

    it('should handle no places', function() {
        assert.equal(getMostPopularPlaces(), 'undefined undefined');
    });
});
