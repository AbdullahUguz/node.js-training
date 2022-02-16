
function circleArea(radius){
    let result;
    result=Math.PI * radius;
    return result;
}


function circleCircumference (radius){
    let result;
    result=2*Math.PI*radius
    return result;
}

module.exports = {
    circleArea,
    circleCircumference
};

