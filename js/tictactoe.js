var tictactoe = {
  playerTurn: 'Player A',
  marker: 'X'
};
tictactoe.drawBoard = function(size){
  var row = '';
  var allRows = '';
  for(var i = 0; i < size; i++){
    row += '<td></td>';
  };
  for(var i = 0; i < size; i++){
    allRows += '<tr>'+row+'</tr>';
  };
  $('table').append(allRows);
};

tictactoe.startGame = function(){
  $('td').on('click',function(e){
    var col = $(this)[0].cellIndex;
    var row = $(this).parent()[0].rowIndex;
    e.preventDefault();
    if(tictactoe.playerTurn === 'Player A'){
      tictactoe.playerTurn = 'Player B';
      tictactoe.marker = 'X';
    } else {
      tictactoe.playerTurn = 'Player A';
      tictactoe.marker = 'O';
    }
    $(this).html(tictactoe.marker);
    tictactoe.checkForWinner(row,col);
  })
}

tictactoe.checkForWinner = function(row,col){
  console.log([row,col]);
};

$(document).ready(function(){
  tictactoe.drawBoard(3);
  tictactoe.startGame();
})
