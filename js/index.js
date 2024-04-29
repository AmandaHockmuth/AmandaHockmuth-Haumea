
const today = new Date ();
let thisYear = today.getFullYear();

///SKILLS///

let skills = ["HTML", "CSS", "JavaScript", "GitHub"]

const skillsSection = document.querySelector("#skills");

const skillsList = skillsSection?.querySelector('ul');

for (let i = 0; i<skills.length; i++) {
      const skill = document.createElement('li');
      skill.innerHTML =`${skills[i]}`;
      skillsSection?.appendChild(skill);
}

const technicalSkills = document.createElement('h3');
      technicalSkills.className = 'technical-skills';
      technicalSkills.innerHTML = "Technical";

const skillsHeader = document.querySelector("#skills-header");

skillsHeader?.appendChild(technicalSkills);

///MESSAGES///

const messageForm = document.querySelector('form');
const messages = document.querySelector('#messages');

messageForm?.addEventListener('submit', submission => {
      submission.preventDefault();
      messages.style.display = "block";
      const usersName = submission.target?.usersName.value;
      const usersEmail = submission.target?.usersEmail.value;
      const usersMessage = submission.target?.usersMessage.value;
            console.log(usersName);
            console.log(usersEmail);
            console.log(usersMessage);
      const messageList = messages?.querySelector('ul');
      const newMessage = document.createElement('li');
            newMessage.innerHTML =`<a href="mailto:${usersEmail}" target="_blank" rel="noopener noreferrer"> ${usersName} </a><span>${usersMessage}</span>`;
            const removeButton = document.createElement('button');
                  removeButton.className = 'removeButton';
                  removeButton.innerHTML = 'Remove';
                  newMessage.appendChild(removeButton);
                  removeButton.addEventListener('click', removeEntry => {
                        const entry = removeButton.parentNode;
                        removeEntry = entry?.remove();
                  });
            // const editButton = document.createElement('button');
            //       editButton.className = 'editButton';
            //       editButton.innerHTML = 'Edit';
            //       newMessage.appendChild(editButton);
            //       editButton.addEventListener('click', editEntry => {
            //             const editPrevEntry = document.createElement('textarea').innerHTML = 'A Penny for your Thoughts... Again?';
            //             editEntry = editButton.appendChild(editPrevEntry);
            //       });
            messageList?.appendChild(newMessage);
      messageForm?.reset();
     });

// if (messageList?.children == null) {
//       messages.style.display = "none";
// }

///FOOTER///

const copyright = document.createElement('p');
      copyright.innerHTML = `Amanda Hockmuth ${thisYear} &#169`;

const footer = document.createElement('footer');
      footer.className = 'footer';
      footer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      footer.style.boxShadow = '5px 2px 2px rgba(0, 0, 0, 0.2)';

const body = document.querySelector('body');

body?.appendChild(footer);
footer.appendChild(copyright);


