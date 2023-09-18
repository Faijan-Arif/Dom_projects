const btn = document.getElementById('button');
const randomColor = () => {
    let value = "0123456789ABCDEF";
    let cons = "#";
    // here we take i < 6 beacuse color having 6 digits
for( let i=0; i < 6; i++){
    cons = cons + value[Math.floor(Math.random() * 16 )] //value[i] = math.floor & math.random
    //math.floor give round figure number
    // math.random give random number & we multipy *16 for all color

}
    return cons;
};
    console.log(randomColor());
 //this function call to the randomColor() function
    function changeRandomColor(){
        //this line of code changing background color
        document.body.style.backgroundColor = randomColor();

    }
    btn.addEventListener("click", changeRandomColor);
