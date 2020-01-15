Array.prototype.removeNum = function(num){
    return new Promise((resolve)=>{
        var i =this.indexOf(num)
        resolve(this.filter((item)=>item !== num))
        
    });
};
console.log('Start'); 
 [1, 3, 4, 2, 1, 5].removeNum(1).then(console.log);
console.log('Finish'); 

