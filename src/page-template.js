// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
                <div class="card m-5 shadow p-0" style="width:300px">
                    <div class="card-header bg-dark text-white">
                        <h3>${manager.getName()}</h3>
                        <h4>
                          <i class="fas fa-mug-hot pr-3"></i> ${manager.getRole()}
                        </h4>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="font-weight-bold"><span class="font-weight-bold">ID:</span> ${manager.getId()}
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Email:</span><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Office number:</span> ${manager.getOfficeNumber()}
                            </li>
                        </ul>
                    </div>
                </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
                    <div class="card m-5 shadow p-0" style="width:300px">
                        <div class="card-header bg-dark text-white">
                            <h3>${engineer.getName()}</h3>
                            <h4>
                                <i class="fas fa-glasses pr-3"></i>${engineer.getRole()}
                            </h4>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <span class="font-weight-bold">ID:</span> ${engineer.getId()}</li>
                                <li class="list-group-item">
                                    <span class="font-weight-bold">Email:</span><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                                </li>
                                <li class="list-group-item">
                                    <span class="font-weight-bold">GitHub:</span><a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
                    <div class="card m-5 shadow p-0" style="width:300px">
                        <div class="card-header bg-dark text-white">
                            <h3>${intern.getName()}</h3>
                            <h4>
                            <i class="fas fa-user-graduate pr-3"></i>${intern.getRole()}
                            </h4>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <span class="font-weight-bold">ID:</span> ${intern.getId()}</li>
                                <li class="list-group-item">
                                    <span class="font-weight-bold">Email:</span><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                                </li>
                                <li class="list-group-item">
                                    <span class="font-weight-bold">School:</span>${intern.getSchool()}
                                </li>
                            </ul>
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
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </main>
    </body>
</html>
    `;
};
