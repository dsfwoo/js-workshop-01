// TO DO
window.addEventListener('DOMContentLoaded', function () {

  // var li = document.querySelectorAll('li')
  // li.forEach(function (li) {
  //   li.addEventListener('click', function () {

  //     // if (status == false) {
  //     //   li.classList.add('checked')
  //     //   status = true
  //     // } else {
  //     //   li.classList.remove('checked')
  //     //   status = false
  //     // }

  //     // if (li.className.includes('checked')) {
  //     //   li.className = ''
  //     // } else {
  //     //   li.className = 'checked'
  //     // }

  //     if (li.className === 'checked') {
  //       li.className = ''
  //     } else {
  //       li.className = 'checked'
  //     }
  //   })
  // })
  var ul = document.querySelector('ul')
  ul.addEventListener('click', function (event) {
    if (event.target.className === 'checked') {
      event.target.className = ''
    } else {
      event.target.className = 'checked'
    }
  })







  var closeBtn = document.querySelectorAll('.close')
  closeBtn.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
      // this.parentElement.style.display = 'none'
      this.parentElement.remove()
    })
  })


  addBtn.addEventListener('click', function () {

    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert('請輸入正確內容');
    } else {
      document.querySelector('ul').appendChild(li);
    }
    document.getElementById('input').value = ''
    var span = document.createElement('span');
    var txt = document.createTextNode('x');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span)
    span.addEventListener('click', function(){
      span.parentElement.remove()
    })
  })

  let dragUl = document.querySelector('ul')
  let dragLi = document.querySelectorAll('li')
  dragLi.forEach(draggable => {
    draggable.addEventListener('dragstart', () =>{
      draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging')
    })
  })









})
