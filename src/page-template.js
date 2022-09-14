// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
            <div class="d-flex flex-row">
                <div class="col-sm-3 mx-5 my-2 card px-0" style="width:22rem">
                    <div class="card-body p-0 rounded-top justify-content-center">
                        <div class="card-header bg-dark text-white px-4">
                            <h2>${manager.getName()}</h2>
                            <h3>
                                <i class="fas fa-mug-hot pr-3"></i> ${manager.getRole()}
                            </h3>
                        </div>
                        <div class="bg-light">
                            <ul class="list-group p-3">
                                <li class="list-group-item">
                                    ID: ${manager.getId()}
                                </li>
                                <li class="list-group-item">
                                    Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                                </li>
                                <li class="list-group-item">
                                    Office number: ${manager.getOfficeNumber()}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
            <div class="d-flex flex-row">
                <div class="col-sm-3 mx-5 my-2 card px-0" style="width:22rem">
                    <div class="card-body p-0 rounded-top justify-content-center">
                        <div class="card-header bg-dark text-white px-4">
                            <h2>${engineer.getName()}</h2>
                            <h3>
                                <i class="fas fa-glasses pr-3"></i>${engineer.getRole()}
                            </h3>
                        </div>
                        <div class="bg-light">
                            <ul class="list-group p-2">
                                <li class="list-group-item">
                                    ID: ${engineer.getId()}</li>
                                <li class="list-group-item">
                                    Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                                </li>
                                <li class="list-group-item">
                                    GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>  
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
            <div class="row">
                <div class="col-sm-3 mx-5 my-2 card px-0" style="width:22rem">
                    <div class="card-body p-0 rounded-top justify-content-center">
                        <div class="card-header bg-dark text-white px-4">
                            <h2>${intern.getName()}</h2>
                            <h3>
                                <i class="fas fa-user-graduate pr-3"></i>${intern.getRole()}
                            </h3>
                        </div>
                    </div>    
                    <div class="bg-light">
                        <ul class="list-group p-2">
                            <li class="list-group-item">
                                ID: ${intern.getId()}
                            </li>
                            <li class="list-group-item">
                                Email: ${intern.getEmail()}</a>
                            </li>
                            <li class="list-group-item">
                                School: ${intern.getSchool()}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>     
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    </head>
    <body>
        <header>
            <div class="text-center">
                <nav class="navabar bg-dark text-white text-center pt-3 pb-5">
                    <div>
                        <h1>My Team</h1>
                    </div>
                </nav>
            </div>
        </header>
        <main>
            <div>
                ${generateTeam(team)}
            </div>
        </main>
    </body>
</html>
    `;
};
