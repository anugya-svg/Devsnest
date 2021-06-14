function is_array(x){
    return Array.isArray(x);
}

function array_clone(x){
    var p=x;
    return p;
}
function first(x,n=1){
let a;
    if(n<0)
    {
        a=x.length;
    }
    else a=0;
    return x.slice(a,n);
}
function merge(x){
    return x.join(',');
}
//method -1(using two for loops)
// function mostFreq(x){
//     let count=0;
//     let freq=0;
//     let val;
//     for(let i of x)
//     {
//         count=0;
//         for(let j of x)
//         {
//             if(i==j)
//             {
//                 count++;
//             }
//         }
//         if(freq<count)
//         {
//             freq=count;
//             val=i;
//         }
//     }
//     return `${val} (${freq} times)`;
// }
// method 2 using 1 loop and map
function mostFreq(x)
{
    let map={};
    let max=x[0];
    for(let i of x)
    {
        if(!map[i])
        {
            map[i]=1;
        }
        else
        {
            map[i]++;
            if(map[i]>map[max])
            {
                max=i;
            }
        }
    }
    return `${max} (${map[max]} times)`;
}

