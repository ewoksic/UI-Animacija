AUI().use(
  'aui-progressbar',
  function (A) {
    var progressBar = new A.ProgressBar(
      {
        boundingBox: '#myProgressBarContainer',
        contentBox: '.myProgressBar',
        orientation: 'vertical',
        label: 'Progress',
        on: {
          complete: function (e) {
            this.set('label', 'Complete!');
          }
        },
        value: '0'
      }
    ).render();

    A.one('.load').on(
      'click',
      function () {
        progressBar.set('value', 25);
      }
    );
    A.one('.load2').on(
      'click',
      function () {
        progressBar.set('value', 50);
      }
    );
    A.one('.load3').on(
      'click',
      function () {
        progressBar.set('value', 75);
      }
    );
    A.one('.load4').on(
      'click',
      function () {
        progressBar.set('value', 100);
      }
    );
    A.one('.load5').on(
      'click',
      function () {
        progressBar.set('value', 100);
      }
    );
  }

);

// animacija za brojeve
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailField = document.getElementById('email');
const radioMonday = document.querySelector('.contact-monday');
const radioTuesday = document.querySelector('.contact-tuesday');

let isValidFirst;
let isValidLast;
let isValidEmail;

firstName.addEventListener('focusin', function () {
  document.querySelector('.progresTaskNumberContainer > span').classList.add('animation-border');
})
firstName.addEventListener('focusout', function () {
  setTimeout(function () {

    document.querySelector('.progresTaskNumberContainer > span').classList.remove('animation-border');
    if (isValidFirst = firstName.checkValidity()) {
      document.querySelector('.progresTaskNumberContainer').classList.add('animation-styles');
      document.querySelector('.progresTaskNumberContainer > span').innerHTML = "&#10004;";
      // document.querySelector('.form-title .animation-circle > div').classList.add('border-top');
      // percent += 25;
      // elem.innerHTML = percent + '%';
    }

  }, 600);
})
lastName.addEventListener('focusin', function() {
  document.querySelector('.progresTaskNumberContainer2 > span').classList.add('animation-border');
})


lastName.addEventListener('focusout', function () {
  setTimeout(function () {

    document.querySelector('.progresTaskNumberContainer2 > span').classList.remove('animation-border');
    if (isValidLast = lastName.checkValidity()) {
      document.querySelector('.progresTaskNumberContainer2 ').classList.add('animation-styles');
      document.querySelector('.progresTaskNumberContainer2 > span').innerHTML = "&#10004;";
      
    }
  }, 300);
})


emailField.addEventListener('focusin', function () {
  document.querySelector('.progresTaskNumberContainer3 > span').classList.add('animation-border');
})

emailField.addEventListener('focusout', function () {
  setTimeout(function () {
    document.querySelector('.progresTaskNumberContainer3 > span').classList.remove('animation-border');
    if (isValidEmail = emailField.checkValidity()) {
      document.querySelector('.progresTaskNumberContainer3').classList.add('animation-styles');
      document.querySelector('.progresTaskNumberContainer3 > span').innerHTML = '&#10004;';
     
    }
  }, 300);
})

radioMonday.addEventListener('change', function() {
  setTimeout(function() {
      document.querySelector('.progresTaskNumberContainer4').classList.add('animation-styles');
      document.querySelector('.progresTaskNumberContainer4 > span').innerHTML = '&#10004;';
      
  }, 300);
})
radioTuesday.addEventListener('change', function() {
  setTimeout(function() {
      document.querySelector('.progresTaskNumberContainer4').classList.add('animation-styles');
      document.querySelector('.progresTaskNumberContainer4 > span').innerHTML = '&#10004;';
      
  }, 300);
})
