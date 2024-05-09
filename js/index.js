const today = new Date();
let thisYear = today.getFullYear();

function createButton(text) {
  const button = document.createElement("button");
  button.innerText = text;
  button.type = "button";
  return button;
}

///SKILLS///

let skills = ["HTML", "CSS", "JavaScript", "GitHub"];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection?.querySelector("ul");

skills.forEach((s) => {
  const skill = document.createElement("li");
  skill.innerHTML = `${s}`;
  skillsSection?.appendChild(skill);
});

const technicalSkills = document.createElement("h3");
technicalSkills.className = "technical-skills";
technicalSkills.innerHTML = "Technical";

const skillsHeader = document.querySelector("#skills-header");

skillsHeader?.appendChild(technicalSkills);

///PROJECTS///

const projectSection = document.querySelector("#projects");
const projectList = projectSection?.querySelector("ul");

fetch(`https://api.github.com/users/AmandaHockmuth/repos`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  })
  .then((repositories) => {
    repositories.forEach((repo) => {
      const project = document.createElement("li");
      project.innerHTML = `${repo.name}`;
      projectList?.appendChild(project);
    });
  })
  .catch((err) => {
    const project = document.createElement("li");
    project.innerHTML = `${err}`;
    projectList?.appendChild(project);
  });

///MESSAGES///

const messages = document.querySelector("#messages");
const messageForm = document.querySelector("form");

messageForm?.addEventListener("submit", (submission) => {
  submission.preventDefault();
  messages.style.display = "block";
  const newMessage = createMessage(submission);
  const removeButton = createRemoveButton();
  newMessage.appendChild(removeButton);
  messages?.appendChild(newMessage);
  messageForm.reset();
});

///Messages Hoisted Functions///

function createRemoveButton() {
  const removeButton = createButton("Remove");
  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
    messages.style.display = "none";
  });
  return removeButton;
}

function getUserDetails(submission) {
  return {
    email: submission.target.usersEmail.value,
    name: submission.target.usersName.value,
    message: submission.target.usersMessage.value,
  };
}

function createMessage(submission) {
  const { email, name, message } = getUserDetails(submission);
  const msg = document.createElement("li");
  msg.innerHTML = `
      <a href=mailto:${email} >${name}</a>
      <span>${message}</span>`;
  return msg;
}

///FOOTER///

const copyright = document.createElement("p");
copyright.innerHTML = `Amanda Hockmuth ${thisYear} &#169`;

const footer = document.createElement("footer");
footer.className = "footer";
footer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
footer.style.boxShadow = "5px 2px 2px rgba(0, 0, 0, 0.2)";

const body = document.querySelector("body");

body?.appendChild(footer);
footer.appendChild(copyright);
