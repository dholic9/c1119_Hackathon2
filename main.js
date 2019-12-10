$(document).ready(initializeApp);

function initializeApp(){
  $('.startModal').removeClass('hidden');
  $('.mapList').on('click',dropDownList)

  var game = new GameBoard();
  game.gameSetup();


  $('.test').on('click',learningFuze);

}

function learningFuze() {
  var location = new Maps(33.635022, -117.740465, 'LearningFuze', 20);
  location.render();
}

function dropDownList() {
  $('ul').toggleClass('active');
}
