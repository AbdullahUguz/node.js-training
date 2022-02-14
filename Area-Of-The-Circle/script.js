
const arguments=process.argv.slice(2);


function areaOfTheCircle(radius){

    let result=Math.PI * radius;
    console.log(result);
}

areaOfTheCircle(arguments[0]*1);