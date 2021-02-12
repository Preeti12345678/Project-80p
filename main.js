var inputs=[];

function getParagraph1(){
    for(var i=1; i<6; i++){
        inputs.push(document.getElementById("para_input_box_" +i).value);
        inputs.join(".");
        document.getElementById("ShowParagraph").innerHTML=inputs.join(".");
    }

}
function getParagraph2(){
    for(var i=7; i<12; i++){
        inputs.push(document.getElementById("para_input_box_" +i).vlaue);
        inputs.join(".");
        document.getElementById("ShowParagraph").innerHTML=inputs.join(".");
    }
}