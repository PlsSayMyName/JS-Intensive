Array.prototype.myFilter = function(callback){
    const res = [];
    for(let i = 0; i < this.length; i++){
       const el = this[i];
       if(callback(el, i)){
          res.push(el);
       };
    };
    return res;
 };