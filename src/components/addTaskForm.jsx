// Adicionar tarefa

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return(
      <>        
        <div className="row mb-20">
          <div className="col">
            <input
              value={newTask} 
              onChange={(e) => setNewTask(e.target.value)} 
              className="form-control form-control-lg"
            />
          </div>

          <div className="col-auto">
            <button 
              onClick={addTask}
              className="btn btn-lg btn-success">Adicionar Tarefa
            </button>
          </div>
        </div>
      </>
  )
}

export default AddTaskForm;