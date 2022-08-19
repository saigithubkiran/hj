var Check_Leap = (year) => 
{

  if((year%4 === 0) && (year %100 !== 0))
    return 'Leap Year';
  
  else
    return 'Non Leap Year';
};


var Substring_Check = (S1, S2) => 
{
    if(S1.includes(S2))
   {
     return "YES";
   }
   else
   {
     return "NO";
   } 
};



var Perfect_Check = (N) => 
{
    let a=0;
    for (let i=1;i<=N/2;i++){
       if(N%i===0);
       a=a+i;
    }
    
    if(a==N && a !==0)
     return "YES";
     else
     return "NO";
        
};



var Reverse_Number = (N) => 
{
  
let res = 0;
      let last;
      while(N!==0){
        last = N % 10;
        res = res * 10 + last;
        N = Math.floor(N/10);
      }
    return res;
};
