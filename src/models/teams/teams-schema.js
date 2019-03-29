'use strict';

const players = require('../players/players-schema.js');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const teams = mongoose.Schema({
  name: { type:String, required:true },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

/**
 * @param  {} 'players'
 * @param  {'players'} {ref
 * @param  {'name'} localField
 * @param  {'team'} foreignField
 * @param  {false} justOne
 * @param  {} }
 */
teams.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne:false,
});

/**
 * @param  {} 'find'
 * @param  {} function(
 * @param  {} {try{this.populate('players'
 * @param  {} ;}catch(e
 * @param  {} {console.error('FindError'
 * @param  {} e
 * @param  {} ;}}
 */

teams.pre('find', function() {
  try {
    this.populate('players');
  }
  catch(e) {
    console.error('Find Error', e);
  }
});

module.exports = mongoose.model('teams', teams);
