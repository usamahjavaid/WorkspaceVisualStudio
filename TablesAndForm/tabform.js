function login() {
    
    let navn = document.getElementById("navn").value;
    console.log(navn);
    document.getElementById("names").innerHTML +="<br></br>"+ navn;
    let password = document.getElementById("password").value;
    console.log(navn);
    document.getElementById("kode").innerHTML +="<br></br>"+ password;
    let hidden = document.getElementById("hidden").value;
    console.log(navn);
    document.getElementById("hemmelig").innerHTML +="<br></br>"+ hidden;
  }
  