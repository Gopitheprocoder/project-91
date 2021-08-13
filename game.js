player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

score_1=0;
score_2=0;
document.getElementById("player1").innerHTML=player1_name+":";
document.getElementById("player2").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=score_1;
document.getElementById("player2_score").innerHTML=score_2;
document.getElementById("player_q").innerHTML="Question turn"+player1_name;
document.getElementById("player_a").innerHTML="Answer turn"+player2_name;

 function send(){
     number1=document.getElementById("1").value;
     number2=document.getElementById("2").value;
     ans=parseInt(number1)*parseInt(number2);
     console.log(ans);

     Qnumber="<h4>"+number1+" x "+number2+"</h4>";

     input_box="<br>Answer:<input type='text' id='input_check'>";
     check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
     row=question+inputbox+check_button;
     document.getElementById("output").innerHTML=row;
     document.getElementById("1").value="";
     document.getElementById("2").value="";
 }