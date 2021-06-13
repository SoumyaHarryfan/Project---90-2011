function addUser(){
    player1 = document.getElementById("player1login").value;
    player2 = document.getElementById("player2login").value;
    localStorage.setItem("player1name",player1);
    localStorage.setItem("player2name",player2);
    window.location("quiz_game_page.html")
}