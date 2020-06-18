var btnRegister = document.getElementById('js-register');
var btnRemove = document.getElementsByClassName('btn-remove');
btnRegister.addEventListener('click', function () {
  var nameValue = document.getElementById('inputName').value;
  var ageValue = document.getElementById('inputAge').value;
  var addressValue = document.getElementById('inputAddress').value;
  var objStudent = {
    nameValue,
    ageValue,
    addressValue
  };
  var arrStudent = localStorage.getItem('arrStudent');
  arrStudent = arrStudent ? JSON.parse(arrStudent) : [];
  arrStudent.push(objStudent);
  localStorage.setItem('arrStudent', JSON.stringify(arrStudent));
  renderStudent();
})

function renderStudent() {
  var arrStudent = JSON.parse(localStorage.getItem('arrStudent'));
  var renderArea = document.getElementById('js-students');
  var content = arrStudent.map(function (item, index) {
    return '<tr><th>' + parseInt(index + 1) + '</th><th>' + item.nameValue + '</th><th>' + item.ageValue + '</th><th>' + item.addressValue + '</th><th><button class="btn btn-remove" data-id="'+ index +'">x</button></th><tr>';
  })
  renderArea.innerHTML = content.join('');
  removeStudent();
}

function removeStudent() {
  var arrStudent = localStorage.getItem('arrStudent');
  arrStudent = arrStudent ? JSON.parse(arrStudent) : [];
  for (var i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener('click', function(e) {
      arrStudent.splice(e.target.dataset.id, 1);
      localStorage.setItem('arrStudent', JSON.stringify(arrStudent));
      renderStudent();
    })
  }
}
renderStudent();
removeStudent();