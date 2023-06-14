import {useState} from 'react';

import AddTaskForm from './components/addTaskForm.jsx';
import UpdateForm from  './components/updateForm.jsx';
import ToDo from        './components/ToDo.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  //Estrutura das Tarefas
  const [toDo, setToDo] = useState([])

  //State temporario
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //Adicionar uma tarefa
  const addTask = () => {
    if(newTask) {
      let num = toDo.length +1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  //Deletar uma tarefa
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  //Marcar tarefa como feito
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if (task.id === id) {
        return ({...task, status: !task.status})
      }
      return task;
    })
    setToDo(newTask);
  }

  //Cancelar alteração
  const cancelUpdate = () => {
    setUpdateData('');
  }

  //Alterar tarefa no Atualizar
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //Atualizar tarefa
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className="container App">

      <h2>To do List WhatsMenu</h2>

      {updateData && updateData ? (
        
        <UpdateForm
          updateData    = {updateData}
          changeTask    = {changeTask}
          updateTask    = {updateTask}
          cancelUpdate  = {cancelUpdate}
        />

      ) : (

        <AddTaskForm
          newTask     = {newTask}
          setNewTask  = {setNewTask}
          addTask     = {addTask}
        />

      )}

      {toDo && toDo.length ? '' : 'Nenhuma tarefa adicionada'}

      <ToDo
        toDo          = {toDo}
        markDone      = {markDone}
        setUpdateData = {setUpdateData}
        deleteTask    = {deleteTask}
      />

    </div>
  );
}

export default App;