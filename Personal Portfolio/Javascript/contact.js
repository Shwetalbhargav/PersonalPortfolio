function validate(params) {
      var name =document.forms["form"]["user"];
      var Email = document.forms["form"]["Email"];
      var mobile = document.forms["form"]["Mobile"];

      if (name.value == "")
      {
          window.alert("Please enter your name!")
          name.focus();
          return window.location.href = "home.html";
      }
      if (Email.value == "")
      {
          window.alert("Please enter your email!")
          name.focus();
          return window.location.href = "home.html";
      }
      if (mobile.value == "")
      {
          window.alert("Please enter your mobile number!")
          name.focus();
          return window.location.href = "home.html";
      }
      
}
function Submitfunc(params) {
        alert("Thank you!" );
    window.location.href ="home.html";
}