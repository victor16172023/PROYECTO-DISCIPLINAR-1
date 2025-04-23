// Formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      
      if (name && email && message) {
        alert(`Gracias por tu mensaje, ${name}. ¡Te contactaremos pronto!`);
        form.reset();
      } else {
        alert("Por favor completa todos los campos.");
      }
    });
  }
});

// Lista de tareas
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.onclick = () => li.remove();
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";
    
  }
}
// Menú responsive toggle
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("active");
});
