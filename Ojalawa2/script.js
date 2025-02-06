// Display an alert for bookUs

function bookUs(){
  alert('We will get back yo shortly')
}


function hamburg() {
  const navbar = document.getElementById('sideNav');
  navbar.classList.add('show');
  document.querySelector('.hamburg').style.display = 'none';
  document.querySelector('.cancel').style.display = 'block';
}

function cancel() {
  const navbar = document.getElementById('sideNav');
  navbar.classList.remove('show');
  document.querySelector('.hamburg').style.display = 'block';
  document.querySelector('.cancel').style.display = 'none';
}

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

