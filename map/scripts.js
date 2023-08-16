function click_to_main(){
    const login_button = document.getElementById("go_back");
    location.replace('../main/mainpage.html')
  }
  
  const click_login_button_action = document.getElementById("go_back");
  click_login_button_action.addEventListener("click", click_to_main);