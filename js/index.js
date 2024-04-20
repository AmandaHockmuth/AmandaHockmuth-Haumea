
const today = new Date ();
let thisYear = today.getFullYear();

///FOOTER///

const copyright = document.createElement('p');
      copyright.innerHTML = `Amanda Hockmuth ${thisYear} &#169`;

const footer = document.createElement('footer');
      footer.className = 'footer'

const main = document.querySelector('.main');

main.appendChild(footer);
footer.appendChild(copyright);

///SKILLS///

let skills = ["HTML", "CSS", "JavaScript", "GitHub"]
      // let tacticalSkills = ["Verbal and Non-Verbal Communication", "Flexibility", "Client Retention" ]

const skillsSection = document.querySelector("#skills");

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i<skills.length; i++) {
      const skill = document.createElement('li');
      skill.innerHTML =`${skills[i]}`;
      skillsSection?.appendChild(skill);
}

const technicalSkills = document.createElement('h3');
      technicalSkills.className = 'technical-skills'
      technicalSkills.innerHTML = "Technical"

const skillsHeader = document.querySelector("#skills-header");

skillsHeader.appendChild(technicalSkills);