function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.style.marginLeft = "10px";
  removeBtn.style.background = "#d32f2f";
  removeBtn.style.color = "#fff";
  removeBtn.style.border = "none";
  removeBtn.style.padding = "5px";
  removeBtn.style.cursor = "pointer";
  removeBtn.style.borderRadius = "3px";

  removeBtn.onclick = () => li.remove();
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}