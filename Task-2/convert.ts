function tempconvert(celsius:number){
    return (celsius*9/5)+32;
}
const celsius =98;
const foreignheight = tempconvert(celsius);
console.log(`Temperature in ${celsius} celsius equals to ${foreignheight} foreignheight` );
