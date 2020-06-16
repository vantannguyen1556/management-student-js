var btnRegister = document.getElementById('js-register');
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
  console.log(arrStudent);
  var renderArea = document.getElementById('js-students');
  console.log(renderArea);
  var content = arrStudent.map(function (item, index) {
    return '<tr><th>' + parseInt(index + 1) + '</th><th>' + item.nameValue + '</th><th>' + item.ageValue + '</th><th>' + item.addressValue + '</th><tr>';
  })
  renderArea.innerHTML = content.join('');
}
renderStudent();