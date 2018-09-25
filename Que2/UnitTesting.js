var assert = require('assert');
var sinon = require('sinon');
var PassThrough = require('stream').PassThrough;
var http = require('http');

var api = require('../question2.js');

describe('api', function() {


	it('Should modify the Student object read from JSON file for correct parameters', function() {
		api.fileName = 'student.json';
		api.modifyXMLData(function(err, result) {
				assert.equal(api.result,'true');
		});
	});

	it('Should update the for incorrect parameters', function() {
		api.fileName = 'jksdfjdkjfs.sdf';
		api.result ='';
		api.modifyXMLData(function(err, result) {
				assert.equal(api.result,'false');
		});
	}); 
});