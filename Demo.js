let a=[1,2,3,1,2];
function getjsondiff(){
    let totalcost=0;
    let arr=[1,2,3,1,2];
    if(arr.length<=1) return totalcost;
    
    for(let i=arr.length-2;i>=0;i--){
        if(arr[i+1]==arr[i])    continue;
        let last=arr[i+1];
        let meansum=mean(arr,i);
        let x=Math.ceil(Math.abs(last-meansum));
        totalcost+=x;
        if(meansum>last)    x=-x;
        process(arr,i+1,x);
        console.log(i+1,meansum,x,arr);
    }
}
function process(arr,len,x){
    for (let i = 0; i < len; i++) {
        arr[i]+=x;
    }
}
function mean(arr,len){
    let sum=0;
    for(let i=0;i<len;i++)
        sum+=arr[i];
    return sum/len;
}
console.log(getjsondiff());
