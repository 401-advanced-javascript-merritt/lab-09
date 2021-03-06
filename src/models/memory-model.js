'use strict';

const uuid = require('uuid/v4');

class Model {

  constructor(schema) {
    this.schema = schema;
    this.database = [];
  }
  /**
   * @param  {} entry
   * @param  {} {letvalid=true;letrecord={};Object.keys(this.schema
   * @param  {} .forEach(field=>{if(this.schema[field].required
   * @param  {} {if(entry[field]
   * @param  {} {record[field]=entry[field];}else{valid=false;}}else{record[field]=entry[field];}}
   * @param  {}} ;returnvalid?record
   * @returns undefined
   */
  sanitize(entry) {

    let valid = true;
    let record = {};

    Object.keys(this.schema).forEach( field => {
      if ( this.schema[field].required ) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      }
      else {
        record[field] = entry[field];
      }
    });
    
    return valid ? record : undefined;
  }
  
  /**
   * return the length of the database
   */
  count() {
    return this.database.length;
  }
  /**
   * @param  {} id
   * @param  {} {constrecords=id?this.database.filter((record
   * @param  {} =>record._id===id
   */
  get(id) {
    const records = id ? this.database.filter( (record) => record._id === id ) : this.database;
    return Promise.resolve(records);
  }
  /**
   * @param  {} entry
   * @param  {} {entry._id=uuid(
   * @param  {} ;letrecord=this.sanitize(entry
   * @param  {} ;if(record._id
   * @param  {} {this.database.push(record
   * @param  {} ;}returnPromise.resolve(record
   */
  post(entry) {
    entry._id = uuid();
    let record = this.sanitize(entry);
    if ( record._id ) { this.database.push(record); }
    return Promise.resolve(record);
  }
  /**
   * @param  {} id
   * @param  {} {this.database=this.database.filter((record
   * @param  {} =>record._id!==id
   * @param  {} ;returnthis.get(id
   */
  delete(id) {
    this.database = this.database.filter((record) => record._id !== id );
    return this.get(id);
  }
  /**
   * @param  {} id
   * @param  {} entry
   * @param  {} {letrecord=this.sanitize(entry
   * @param  {} ;if(record._id
   * @param  {} {this.database=this.database.map((item
   * @param  {} =>(item._id===id
   * @param  {item} ?record
   */
  put(id, entry) {
    let record = this.sanitize(entry);
    if( record._id ) { this.database = this.database.map((item) => (item._id === id) ? record : item  ); }
    return this.get(id);
  }
  
}

module.exports = Model;