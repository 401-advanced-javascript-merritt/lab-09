'use strict';

class Model {

  constructor(schema) {
    this.schema = schema;
  }
  /**
   * @param  {} _id
   * @param  {} ;returnthis.schema.find(queryObject} {letqueryObject=_id?{_id}
   */
  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }
  
  /**
   * @param  {} record
   * @param  {} {letnewRecord=newthis.schema(record
   * @param  {} returnnewRecord.save
   */
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }
  /**
   * @param  {} _id
   * @param  {} record
   * @param  {} {returnthis.schema.findByIdAndUpdate(_id
   * @param  {} record
   * @param  {true}} {new
   */
  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }
  /**
   * @param  {} _id
   * @param  {} {returnthis.schema.findByIdAndDelete(_id
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
