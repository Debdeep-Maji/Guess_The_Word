function addUser(){
    var player1_name=document.getElementById("player1_name_input").value ;
    var player2_name=document.getElementById("player2_name_input").value ;

    localStorage.setItem("Player 1's Name",player1_name);
    localStorage.setItem("Player 2's Name",player2_name);

    window.location="game_page.html"
}