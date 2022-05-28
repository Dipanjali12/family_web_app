Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function capture() {
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = "<img id='image' src=" + data + ">";
    });

}

console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/X_VbIMp1n/model.json",modelLoaded);

function modelLoaded(){
console.log("modelLoaded");


}


function identify() {
img=document.getElementById("image");
classifier.classify(img,gotResult);

}

function gotResult(error,result){
if(error){
console.error(error);

}
else{console.log(result)
    document.getElementById("result_object").innerHTML=result[0].label;
    document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(2);
}
}





















