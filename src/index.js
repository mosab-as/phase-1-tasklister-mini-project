document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const textInput = document.getElementById('new-task-description')
  const newTask = document.getElementById('newTask')
  const tasks = document.getElementById('tasks')

  newTask.addEventListener('click',(e) => {
    e.preventDefault()
    if(textInput.value.length > 0)
    {
    const tasksList = document.createElement("li")
    const deleteButton = document.createElement("button")
    deleteButton.innerText = 'X'
    deleteButton.addEventListener('click', (e) => {
    
      function remove(element){
        element.parentNode.removeChild(element);
      } 
      remove(tasksList)

      e.preventDefault()

    })

    tasksList.append(`${textInput.value} `)
    tasksList.append(deleteButton)
    tasks.append(tasksList)

    textInput.value = ''

    e.preventDefault()

    const dropDown = document.createElement('select')
    dropDown.style.marginLeft = '1em'
    tasksList.append(dropDown)

    const defaultOption = document.createElement('option')
    defaultOption.innerText = 'Please Select Priority'
    defaultOption.selected = 'selected'

    const high = document.createElement('option')
    high.innerText = 'High'
    high.value = 'high'

    const medium = document.createElement('option')
    medium.innerText = 'Medium'
    medium.value = 'medium'


    const low = document.createElement('option')
    low.innerText = 'Low'   
    low.value = 'low'

    dropDown.append(defaultOption,high,medium,low)

    dropDown.addEventListener('change', (e) => {
      if(e.target.value === "high")
      {
        tasksList.style.color = 'red'
      }else if(e.target.value === "medium")
      {
        tasksList.style.color = 'orange'
      }else if(e.target.value === "low")
      {
        tasksList.style.color = 'green'
      }else{
        tasksList.style.color = 'black'
      }
    })
  }else{

  }
  })
  
});
