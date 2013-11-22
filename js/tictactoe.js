var tictactoe = {};
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


$(document).ready(function(){
  tictactoe.drawBoard(3);
  tictactoe.startGame();
})
