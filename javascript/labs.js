class labs {
    constructor(){
        let ajax = new XMLHttpRequest();
        let labs = [];
        ajax.open("GET", "/projects.json", true);
        ajax.send();
        ajax.onreadystatechange = () => {
            if(ajax.readyState == 4 && ajax.status == 200){
                let data = JSON.parse(ajax.responseText);
                for(let i = 0; i < data.labs.length; i++){
                    labs.push(data.labs[i]);
                }
                this.loadProjects(labs);
            }
        }
    }

    loadProjects(labs){
        const labsSection = document.querySelector('.content-box__slider');
        labsSection.innerHTML = this.createMarkupProjects(labs);
    }

    createMarkupProjects(labs){
        return labs.map(experiment => `
            <article class="project-item project-item--white">
                <div class="project-item__lab-thumb" style="background: ${experiment.color}"></div>
                <h5 class="font-xs project-item__title">${experiment.title}</h5>
                <p class="project-item__description">${experiment.description}</p>
                <a href="${experiment.github}" target="_blank" rel="noopener">
                    <img class="project-item__repository" src="/assets/img/github.png" alt="Github Logo" title="Acessar código fonte">
                </a>
                <a href="${experiment.link}" class="btn btn--quinary" target="_blank" rel="noopener">ver demo</a>
            </article>`).join('');
    } 
}

document.addEventListener('DOMContentLoaded', () => {
    new labs();
});

//<a href="${project.link}" class="btn-project" target="_blank">ver projeto</a>