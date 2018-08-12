var object = {
    b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
   };
   function pares(obj,str){
       var patner=/[\[\].]/g;
       var arr=str.split(patner);
       var res;
       arr.splice(arr.indexOf(""),1);
  
       if(arr.length==2){
        res=obj.arr[0].arr[1];
       }
      else{
  
       res=obj[arr[0]][arr[1]][arr[2]];
      }
      

return res;
   }

   function sum() {
    var nResult = 0;
    for (var i = 0, l = arguments.length; i < l; i++) {
    nResult +=  (!isNaN(arguments[i]) && window.parseFloat(arguments[i]))||0;
    }
    return nResult.toFixed(3) * 1000 / 1000;
}

   window.onload=function(){
    //console.log(pares(object,"d[0].e"));
    var argument=['1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1,
'E', 1, 'F', 1, 'G', 1];
    console.log(sum());
   }