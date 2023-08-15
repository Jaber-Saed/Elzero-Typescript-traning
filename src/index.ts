//let myImg = document.getElementById("mt-img") as HTMLImageElement;

//let myImg =<HTMLImageElement> document.getElementById("mt-img") ;

//console.log(myImg.src);

//let all : number | string  = 100 ;

type A ={
    one: string,
    two: number,
    three: boolean,
}

 
// to make extend between type
type B  = A & {
    four: number,
}

type C = {
    five: boolean
}

type mix = A & C & {
    sex: number;
}

function getActinos(btns:mix){
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.sex}`);
    console.log(`Hello ${btns.five}`);

}
    getActinos({one: "string", two: 100, three: true, five: false, sex: 22 })

    let action: A ;
    
    action = {one: "string", two: 100, three: true}