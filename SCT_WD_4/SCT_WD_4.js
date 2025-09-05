// Select elements
const startBtn = document.getElementById("startBtn");
const landing = document.querySelector(".landing");
const app = document.querySelector(".app");
const themeToggle = document.getElementById("themeToggle");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Motivational quotes
const quotes = [
  "🌟 Believe in yourself!",
  "🔥 Small steps every day!",
  "💡 Focus, plan, achieve!",
  "✨ Dreams don't work unless you do!",
  "🌸 One task at a time!"
];

window.onload = () => {
  alert(quotes[Math.floor(Math.random() * quotes.length)]);
};

// Show app
startBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
  app.classList.remove("hidden");
});

// Toggle dark mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Confetti effect
function launchConfetti() {
  const confetti = document.createElement("div");
  confetti.innerHTML = "🎉";
  confetti.style.position = "fixed";
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.top = "-20px";
  confetti.style.fontSize = "2rem";
  confetti.style.animation = "fall 2s linear forwards";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 2000);
}

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const taskTime = taskDate.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("task");

  li.innerHTML = `
    <span>
      ${taskText} 
      ${taskTime ? `<small>${taskTime}</small>` : ""}
    </span>
    <div>
      <button class="complete">✅</button>
      <button class="edit">✏️</button>
      <button class="delete">❌</button>
    </div>
  `;

  // Task actions
  li.querySelector(".complete").addEventListener("click", () => {
    li.classList.toggle("completed");
    if (li.classList.contains("completed")) launchConfetti();
  });

  li.querySelector(".edit").addEventListener("click", () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) {
      li.querySelector("span").innerHTML = `${newTask} ${taskTime ? `<small>${taskTime}</small>` : ""}`;
    }
  });

  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);

  // Reset inputs
  taskInput.value = "";
  taskDate.value = "";
});

// Sorting tasks by date
const sortBtn = document.createElement("button");
sortBtn.textContent = "Sort by Date 📅";
sortBtn.style.marginLeft = "10px";
document.querySelector("header").appendChild(sortBtn);

sortBtn.addEventListener("click", () => {
  const tasks = Array.from(taskList.children);
  tasks.sort((a, b) => {
    const dateA = a.querySelector("small")?.innerText || "";
    const dateB = b.querySelector("small")?.innerText || "";
    return dateA.localeCompare(dateB);
  });
  tasks.forEach(task => taskList.appendChild(task));
});
