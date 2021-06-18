function send()
{
    no1=document.getElementById("n1").value;
    no2=document.getElementById("n2").value;
    actual_answer=parseInt(no1)*parseInt(no2);
    que_number="<h4>" + no1 +"X"+ no2 +"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=que_number + input_box + check_button;

    document.getElementById("output").innerHTML=row;
     
    document.getElementById("no1").value=" ";
    document.getElementById("no2").value=" ";
}