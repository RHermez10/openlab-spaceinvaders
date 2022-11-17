window['currentScore'] = 0;

angular.module('app', [])
  .controller('HighScoreController', function ($scope) {
    var ctrl = this;
    window['ctrl'] = ctrl;
    window['scope'] = $scope;
    ctrl.scores = loadScore();

    ctrl.show = false

    ctrl.showScore = function () {
      this.show = true;
    };

    ctrl.hideScore = function () {
      this.show = false;
    };
  });

function addHighScore(points) {
  window['ctrl'].scores.push({
    points: points,
  });

  saveScore(window['ctrl'].scores)

  if (window['scope']) {
    window['scope'].$apply();
  }
}

function loadScore () {
  return JSON.parse(localStorage.getItem('score')) || []
}

function saveScore (score) {
  localStorage.setItem('score', JSON.stringify(score));
}
