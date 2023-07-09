// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (right > 0) {
      dodger.style.right = `${right + 1}px`;
    }
  }
  
  document.addEventListener("keyup", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
  function moveDodgerRight() {
//     const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);
  
    const gameWidth = document.getElementById('game').offsetWidth;
    const dodgerWidth = dodger.offsetWidth;
  
    if (left + dodgerWidth < gameWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }  


