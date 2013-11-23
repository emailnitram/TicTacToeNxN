var tictactoe = {
  playerTurn: 'Player A',
  marker: 'X',
  size: 0
};
tictactoe.drawBoard = function(size){
  tictactoe.size = size;
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
      $('#currentPlayer').html(tictactoe.playerTurn)
      tictactoe.marker = 'X';
    } else {
      tictactoe.playerTurn = 'Player A';
      $('#currentPlayer').html(tictactoe.playerTurn)
      tictactoe.marker = 'O';
    }
    $(this).html(tictactoe.marker);
    tictactoe.checkForWinner(row,col,tictactoe.marker);
  })
}

tictactoe.checkForWinner = function(row,col,marker){
  row = row + 1;
  var currentRow = $('table tr:nth-child('+row+')')[0].children;
  var currentCols = [];
  $('table tr').each(function(i,elem){
    currentCols.push($(elem).find('td')[col]);
  });
  function checkRows(){
    var counter = 0;
    for(var i = 0; i < currentRow.length; i++){
      if(currentRow[i].innerHTML === marker){
        counter++;
      }
    }
    if(counter === tictactoe.size) tictactoe.winner(marker);
  };
  function checkCols(){
    var counter = 0;
    for(var i = 0; i < currentCols.length; i++){
      if(currentCols[i].innerHTML === marker){
        counter++;
      }
    }
    if(counter === tictactoe.size) tictactoe.winner(marker);
  };
  function checkDiags(){
    var diags = {};
    for(var i = 1; i <= tictactoe.size; i++){
      var mark = $('table tr:nth-child('+i+')').find('td:nth-child('+i+')').text();
      diags[mark] = true;
    }
    if(diags[''] !== true && Object.keys(diags).length === 1) tictactoe.winner(marker);
  };
  function checkDiagsLeft(){
    var diags = {};
    var j = tictactoe.size;
    for(var i = 1; i <= tictactoe.size; i++){
      var mark = $('table tr:nth-child('+i+')').find('td:nth-child('+j+')').text();
      diags[mark] = true;
      j--;
    }
    if(diags[''] !== true && Object.keys(diags).length === 1) tictactoe.winner(marker);
    console.log('current',diags);
  };
  checkRows();
  checkCols();
  checkDiags();
  checkDiagsLeft();
};

tictactoe.winner = function(marker){
  if(marker === 'X'){
    alert('Player A is the winner!!')
  } else {
    alert('Player B is the winner!!')
  }
};

$(document).ready(function(){
  tictactoe.drawBoard(3);
  tictactoe.startGame();
})
