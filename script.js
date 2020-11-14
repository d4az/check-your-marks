
function getmarks(){
    var maths = Number(document.getElementById('maths').value);
    var ict = Number(document.getElementById('ict').value);
    var english = Number(document.getElementById('english').value);
    var physics = Number(document.getElementById('physics').value);

    var sum = maths+ict+english+physics;
    avg = sum /4;

    console.log(sum);
    console.log(avg);

    document.getElementById('pecentage').innerHTML= avg+"%";

    if(avg > 74){
        document.getElementById('grade').innerHTML= "A";
        document.getElementById('pass').innerHTML= "Good Job You Got An A!";
    }
    else if(avg > 55){
        document.getElementById('grade').innerHTML= "B";
        document.getElementById('pass').innerHTML= "You Have Passed With a B Good!";
    }
    else if(avg > 35){
        document.getElementById('grade').innerHTML= "c";
        document.getElementById('pass').innerHTML= "Work Hard!";
    }
    else{
        document.getElementById('grade').innerHTML= "FAIL";
        document.getElementById('pass').innerHTML= "YOU HAVE FAILED THE EXAM!";
    }

}