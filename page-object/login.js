// Função para gerar um email aleatório
function generateRandomEmail() {
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com', 'domain.com'];
    const randomDomainIndex = Math.floor(Math.random() * domains.length);
    const usernameLength = Math.floor(Math.random() * 10) + 5; // Entre 5 e 14 caracteres no nome de usuário
    const username = Array.from({ length: usernameLength }, () => Math.random().toString(36)[2]).join('');
    const domain = domains[randomDomainIndex];
    return `${username}@${domain}`;
  }
  
  // Classe que lida com a geração e exibição dos emails
  class EmailGenerator {
    constructor(containerId, numEmails) {
      this.container = document.getElementById(containerId);
      this.numEmails = numEmails;
    }
  
    generateAndDisplayEmails() {
      for (let i = 0; i < this.numEmails; i++) {
        const generatedEmail = generateRandomEmail();
        const emailElement = document.createElement('p');
        emailElement.textContent = generatedEmail;
        this.container.appendChild(emailElement);
      }
    }
  }
  
  // Criar uma instância da classe EmailGenerator
  const emailDisplay = new EmailGenerator('email-list-container', 10);
  
  // Gerar e exibir os emails na classe especificada
  emailDisplay.generateAndDisplayEmails();
  