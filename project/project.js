function show(){
    var a=document.getElementById('nm').value;
    var b=document.getElementById('img url').value;
    var c=document.getElementById('fn').value;
    var d=document.getElementById('dob').value;
    var e=document.getElementById('add').value;
    var f=document.getElementById('phn no').value;
    var g=document.getElementById('rl').value;
    var h=document.getElementById('bn').value;
    var i=document.getElementById('ssn').value;
    document.getElementById('sn').innerHTML=a;
    document.getElementById('sf').innerHTML=c;
    document.getElementById('sdb').innerHTML=d;
    document.getElementById('sa').innerHTML=e;
    document.getElementById('sno').innerHTML=f;
    document.getElementById('sr').innerHTML=g;
    document.getElementById('sb').innerHTML=h;
    document.getElementById('ss').innerHTML=i;
    document.getElementById('image').src=b;
    document.getElementById('frm').style.display="none";
    document.getElementById('opt').style.display="block";
    }