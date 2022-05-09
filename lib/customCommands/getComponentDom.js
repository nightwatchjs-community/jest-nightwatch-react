class GetComponentDom {
  command() {
    return new Promise((resolve, reject)=>{
      this.api.execute(function() {
        return document.getElementById('app').innerHTML;
      },null, function(result) {
        if(result.status!=0) {
          reject(result.error);
        }else {
          resolve(result.value);
        }
      })
    })
  }
}

module.exports = GetComponentDom;