'use strict';
let exportObj={};
// let str='{{(([]))}()}';
exportObj.strCheck= function (str){
  let obj = {'}':'{',']':'[',')':'('};
  let arr = [];
  for (var i = 0 ; i < str.length ;i++){
    if (str[i] == '[' || str[i] == '{' || str[i] == '('){
      arr.push(str[i]);
    }
    else if (obj[str[i]]){
      if (arr.pop() != obj[str[i]]){
        return false;
      }
    }
  }
  return arr.length  == 0 ? true : false;
};
// console.log(strCheck(str));

module.exports=exportObj;


// First try ==>
// function strCheck(str){
//   let stra = 0
//     let strb = 0
//       let strc = 0
//         let strd = 0
//           let stre = 0
//             let strf = 0
//             let check1
//             let check2
//             let check3
// for(let i=0 ; i<str.length;i++){
//     console.log(str[i])
//   if('{'==str[i]){

//  stra=stra+1

// }
//   if('}'==str[i]){

//  strb=strb+1
// }
//   if('('==str[i]){

//  strc=strc+1
// }
//   if(')'==str[i]){

//  strd=strd+1
// }
//   if('['==str[i]){

//  stre=stre+1
// }
//   if(']'==str[i]){

//  strf=strf+1
// }
// }
// if(stra==strb){
// check1=true
// }
// if(strc==strd){
// check2=true
// }
// if(stre==strf){
// check3=true
// }
// console.log(check1,check2,check3)
// if(check1 && check2 && check3){
//   console.log('prof')
//   return true
// }else{
//   return false
// }
// }
// // console.log(stra)
// console.log(strCheck(str))