'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Client Schema
 */
var ClientSchema = new Schema({
	companyname: {
		type: String,
		default: '',
		required: 'Please fill Company name',
		trim: true
	},
  contactname: {
		type: String,
		default: '',
		required: 'Please fill Contact name',
		trim: true
	},
  address: {
		type: String,
		default: '',
		trim: true
	},  
  email: {
		type: String,
		trim: true
	},
  phone: {
		type: Number
  },
  status: {
		type: String,
    default: 'Active',
		trim: true
  }, 
  created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Client', ClientSchema);