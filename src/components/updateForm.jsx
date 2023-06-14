// Atualizar tarefa

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
        <>
            <div className="row mb-20">
                <div className="col">
                    <input
                        value={ updateData && updateData.title } 
                        onChange={(e) => changeTask(e)} 
                        className="form-control form-control-lg"
                    />
                </div>

                <div className="col-auto">
                    <button
                        onClick={updateTask} 
                        className="btn btn-lg btn-success mr-20">Atualizar
                    </button>
                    <button
                        onClick={cancelUpdate}  
                        className="btn btn-lg btn-warning">Cancelar
                    </button>
                </div>
            </div>
        </>
    )
}

export default UpdateForm;