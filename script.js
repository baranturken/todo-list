function addFunction () {
    var input = document.getElementById("taskInput");
    
    var newTask = input.value
    
    if(newTask != "") {
      
      var item = document.createElement("li")
      
      item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + 
    '<input type="button" class="important" onclick="important(this.parentNode)" value="!"/>' + 
  newTask;
          
          document.getElementById("tasks").appendChild(item);
    }
  }
  
  function markDone (item) {
    item.classList.toggle('finished');
  }
  
  function remove (item) {
    item.remove();
  }
  
  function important (item) {
    item.classList.toggle("important-task")
  }
  
  function doAbout() {
     var aboutDiv = document.getElementById("divabout");
      aboutDiv.innerHTML = "This is a to-do list, done by Baran Turken. You can add tasks, mark them as done, and remove them.";
      aboutDiv.className = "yellowbackground";
  }
  
  function clearAbout() {
     var aboutDiv = document.getElementById("divabout");
      aboutDiv.innerHTML = "";
  }