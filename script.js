let projects = [];

fetch(`${window.APP_CONFIG.API_URL}yboost`, {
    headers: {
        apikey: window.APP_CONFIG.API_KEY
    }
})
.then((res) => res.json())
.then((data) => {
    projects = data;

    let accordeon = document.querySelector("#accordionProjects");
    let htmlContent = "";

    for (let i = 0; i < projects.length; i++) {
        let currentProject = projects[i];
        console.log(currentProject);
        htmlContent += `<div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}"
              aria-expanded="true" aria-controls="collapse${i}">
              ${currentProject.name}
            </button>
          </h2>
          <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionProject">
            <div class="accordion-body">
                ${currentProject.body}
            </div>
          </div>
        </div>`;
    }

    accordeon.innerHTML = `<div class="accordion" id="accordionProject">${htmlContent}</div>`;
})
.catch((err) => console.error("Erreur projets :", err));



let skills = [];

fetch(`${window.APP_CONFIG.API_URL}Compétence`, {
    headers: {
        apikey: window.APP_CONFIG.API_KEY
    }
})
.then((res) => {
    console.log("Statut compétences :", res.status);
    return res.json();
})
.then((data) => {
    console.log("Données compétences :", data);
    skills = data;

    let skillsList = document.querySelector("#skillsList");
    console.log("Élément #skillsList :", skillsList);

    let skillsContent = "";
    for (let i = 0; i < skills.length; i++) {
    skillsContent += `<li>${skills[i]["Compétence"]}</li>`;
}
    skillsList.innerHTML = skillsContent;
})
.catch((err) => console.error("Erreur compétences :", err));



