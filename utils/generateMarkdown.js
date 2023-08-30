
function generateMarkdown(data) {
    return `
     Title
## ${data.title}
     Description
## ${data.description}
     Username
## ${data.username}
     Email
## ${data.email}
     Collaborators
## ${data.collaborators}
     Install instructions
## ${data.install}
 
  
`;
}

module.exports = generateMarkdown;