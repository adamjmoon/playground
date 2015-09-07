// __tests__/album-test.js
jest.dontMock('../lib/album');
jest.dontMock('../lib/artist');

var Album = require("../lib/album").Album;
var Artist = require("../lib/artist").Artist;


describe('Album constructor', function() {
 var artist = new Artist("Arctic Monkeys");
 var album = new Album(artist);
 it('should have an artist with a name', function() {
   expect(album.artist.name).toBe("Arctic Monkeys");
 });
});