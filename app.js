function onReady() {
  var id = 1;
  var idHolder = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  let delButton = document.createElement('button');
  delButton.textContent = 'DELETE';
  document.body.appendChild(delButton);

  addToDoForm.addEventListener('submit', event => {

      event.preventDefault();

      let title = newToDoText.value;

      let newLi = document.createElement('li');

      let checkbox = document.createElement('input');

      checkbox.type = "checkbox";

      newLi.textContent = title;

      newLi.appendChild(checkbox);

      newLi.id = id++;

      toDoList.appendChild(newLi);

      newToDoText.value = '';

      newLi.addEventListener("change", function() {

        if(checkbox.checked) {
        idHolder.push(newLi.id);
        }
        else {
          console.log(newLi.id);
          idHolder.splice(idHolder.indexOf(newLi.id), 1);
          }

        });

      delButton.addEventListener('click', function() {
        console.log(newLi.id);
          for(let i = 0; i < idHolder.length; i++) {
            if(newLi.id === idHolder[i]) {newLi.remove()}
          }
      });

  });

}


window.onload = function() {
  onReady();
};
