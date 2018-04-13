
let imgArray = [];

imgArray[0] = "<img src='/img/spr/spr_t_65_red_1_0.png'></img>";
imgArray[1] = "<img src='/img/spr/spr_t_65_red_2_0.png'></img>";
imgArray[2] = "<img src='/img/spr/spr_t_65_red_3_0.png'></img>";
imgArray[3] = "<img src='/img/spr/spr_t_65_blue_1_0.png'></img>";
imgArray[4] = "<img src='/img/spr/spr_t_65_blue_2_0.png'></img>";
imgArray[5] = "<img src='/img/spr/spr_t_65_blue_3_0.png'></img>";
imgArray[6] = "<img src='/img/spr/spr_btl_a4_gold_1_0.png'></img>";
imgArray[7] = "<img src='/img/spr/spr_btl_a4_red_1_0.png'></img>";
imgArray[8] = "<img src='/img/spr/spr_btl_a4_gold_2_0.png'></img>";


function nextImage(){
    //var img = document.getElementById(element);

    for(var i=0; i<imgArray.length; i++){

        if(i === imgArray.length){
            document.getElementById("imageDisplayer").innerHTML = imgArray[0];
            break;
        }
        document.getElementById("imageDisplayer") = imgArray[i+1];
        break;
    }
}