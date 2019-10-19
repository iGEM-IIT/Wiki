var html = document.querySelector('html');

// For the design page

var primerBtn = html.querySelector('#primer-button');
var petaseBtn = html.querySelector('#petase-button');
var assayBtn = html.querySelector('#assay-button');

// Click listener for three design components

primerBtn.addEventListener('click', function(e) {
  let designContent = html.querySelector('#primer');
  closeOthers();
  designContent.classList.toggle('visible');
});

petaseBtn.addEventListener('click', function(e) {
  let designContent = html.querySelector('#petase');
  closeOthers();
  designContent.classList.toggle('visible');
});

assayBtn.addEventListener('click', function(e) {
  let designContent = html.querySelector('#assay');
  closeOthers();
  designContent.classList.toggle('visible');
});

// Removes displayed information before displaying the new one

function closeOthers () {
  var infoContainer = html.querySelector('#design-information');
  var infoSections = infoContainer.getElementsByClassName('section-content');
  // console.log(infoSections);
  for (let i = 0; i < infoSections.length; i++) {
    // console.log("section: " + infoSections[i]);
    if (infoSections[i].classList.contains('visible')) {
      infoSections[i].classList.toggle('visible');
    }
  }
}

// End of design page JS
