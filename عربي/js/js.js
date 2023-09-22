  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function myFunction2() {
    var x = document.getElementById("myrightnav");
    if (x.className === "rightnav") {
      x.className += " responsive";
    } else {
      x.className = "rightnav";
    }
  }
  function onButtonClick(){
    document.getElementById('textInput').className="msg show";
    }
  function onButtonClick2(){
    document.getElementById('message').className="message show";
    }
    function onButtonClick3(){
      document.getElementById('home-msg').className="home-msg show";
      }
  function closeFunction(){
  document.getElementById('message').className="message hide";
  }
  function closeFunction1(){
    document.getElementById('textInput').className="msgg hide";
    }
    function closeFunction1(){
      document.getElementById('textInput').className="msgg hide";
      }
  function closeFunction2(){
    document.getElementById('msgg').className="msgg hide";
    }
    function payBox(){
      document.getElementById('home-msg').className="home-msg hide";
      document.getElementById('pay-box').className="pay-box show"
    }
    function addLesson(){
      document.getElementById('cour-msg').className="cour-msg show";
    }
    function showDetails(){
      document.getElementById('msgg').className="msgg show";
      document.getElementById('textInput').className="msg hide";
    }