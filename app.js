function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id += 1;
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

      const del = document.createElement('button');
      del.textContent = "delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);

      newLi.appendChild(checkbox);

      newLi.appendChild(del);

      checkbox.addEventListener('change', event => {
        console.log(id);
      });

      del.addEventListener('click', event => {
        console.log(toDos);
        deleteToDo(toDo.id);
        renderTheUI();

      });
    });
  }


  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id !== id);
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
