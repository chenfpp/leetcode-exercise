Array.prototype.lengthArray = function(length){
  return new Array(length)
}
Array.prototype.sortAddNew = function(newValue){
  var res = this
  this.sort()
  for(var i=0;i<this.length;i++){
    if (this[0] >= newValue) {
      this.unshift(newValue)
      break;
    }
    if (this[this.length-1] <= newValue) {
      this.push(newValue)
      break;
    }
    if (this[i]>= newValue && this[i+1]<= newValue){
      res = this.slice(0, i).concat([newValue]).concat(this.slice(i, this.length))
      
      break;
    }
  }
  return res
}
Array.prototype.sortDelete = function(value){
  var res = this
  this.sort()
  for(var i=0;i<this.length;i++){
    if (this[i] == value) {
      res = this.slice(0,i).concat(this.slice(i+1, this.length))
      break;
    }
  }
  return res
}
Array.prototype.sortModify = function(oldValue, newValue){
  var res = this
  this.sort()
  for(var i=0;i<this.length;i++){
    if (this[i] == oldValue) {
      this[i] = newValue
      break;
    }
  }
  return res
}
Array.prototype.sortConcatSort = function(list){
  var res = this.concat(list)
  res.sort()
  return res
}
