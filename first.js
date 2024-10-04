// let m=prompt("enter m : ");
// let n=prompt("enter  n :");
let m=10;
let n=12;
let odd=1;
if(m>n){
    console.log("1");
}
else{
    for(let i=m;i<=n;i++){
        if(i%2!=0){
            odd*=i;
        }
    }
    console.log(odd);
}
