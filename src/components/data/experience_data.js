import fidelity from '../../assets/fidelity.webp';
import microsoft from '../../assets/microsoft.webp';
export const experience_data = {
  Fidelity: {
    logoURL: fidelity,
    'Software Engineer Intern': {
      location: 'Remote',
      dates: 'June 2020 - Aug 2020',
      description: [
        'Worked with the mobile alerts team to add new notifications for various investment actions.',
        'Tested and demoed new SMS alerts that extended existing push notification services.',
      ],
      badges: [
        ['https://www.jenkins.io/', 'jenkins'],
        ['https://spring.io/', 'spring'],
        ['https://www.ibm.com/cloud/urbancode', 'UrbanCode'],
      ],
    },
  },
  'Microsoft Azure': {
    logoURL: microsoft,
    'Software Engineer Intern': {
      location: 'Remote',
      dates: 'May 2021 - Aug 2021',
      description: [
        'Built an internal pipeline that enables developers to get direct and immediate access to their endpoint output for validation.',
        'Integrated GitHub and DevOps to automate the Swagger validation process and hasten the delay from feature to the public-facing Azure SDK.',
      ],
      badges: [
        ['https://github.com/about', 'GitHub'],
        [
          'https://docs.microsoft.com/en-us/azure/devops/user-guide/what-is-azure-devops?view=azure-devops',
          'DevOps',
        ],
        ['https://nodejs.org/en/about/', 'Node'],
        [
          'https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet',
          '.NET',
        ],
        [
          'https://azure.microsoft.com/en-us/services/devops/pipelines/',
          'Pipelines',
        ],
      ],
    },
    'UI/UX Software Engineer': {
      location: 'Redmond WA',
      dates: 'Feb 2022 - Nov 2022',
      description: [
        'Drove the design and release of the Azure Container Apps CLI command module from private beta versions to public announcement including an end-to-end fully managed deployment experience.',
        'Developed and maintained all Azure App Service CLI commands, catering to a combined 2 million monthly active users.',
      ],
      badges: [
        ['https://github.com/Azure/azure-cli','Azure CLI'],
        ['https://www.python.org/about/','Python'],
        ['https://github.com/microsoft/knack','Knack'],
        ['https://azure.microsoft.com/en-us/products/container-apps', 'Container Apps'],
      ],
    },
    'Backend Software Engineer': {
      location: 'Redmond WA',
      dates: 'Nov 2022 - Current',
      description: [
        'Architected and deployed robust automated infrastructure across over sixty regions for Azure App Service Managed Certificates that reduces sync time from hours to minutes.',
        'Led the design and implementation of the regionalization of Azure App Service Domains involving the complete overhaul of the database and data layers.',
        'Oversaw maintenance and support operations for Azure App Service Domains serving over 80,000 yearly customers while spearheading efforts to enhance fraud detection through increased alerting and the implementation of a new customer trust system.',
      ],
      badges: [
        ['https://learn.microsoft.com/en-us/azure/app-service/manage-custom-dns-buy-domain','App Service Domains'],
        ['https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet','.NET'],
        ['https://azure.microsoft.com/en-us/products/cosmos-db','CosmosDB (NoSQL)'],
        ['https://azure.microsoft.com/en-us/products/azure-sql/database','Azure SQL'],
        ['https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview','ARM'],
      ],
    },

  },
};
