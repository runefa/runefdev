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
        'Built internal pipeline that enabled developers to get direct access to their endpoint output for validation including immediate feedback on security risks and syntax violations.',
        'Integrated GitHub and DevOps to automate the Swagger validation process and hasten feature work release process to public-facing Azure SDK.',
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
        'Drove design and release of Azure Container Apps Command Line Interface from private beta to public release.',
        'Engineered the first Azure CLI end-to-end fully managed deployment command that was demoed at the Azure Container Apps public release during the 2022 Microsoft Build Event.',
        'Developed and maintained all Azure App Service CLI commands for a combined 2 million monthly active users.',
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
      dates: 'Nov 2022 - Present',
      description: [
        'Architected and deployed automated infrastructure across over forty regions for Azure App Service Managed Certificates that reduces sync time from hours to minutes.',
        'Developed four-phase plan for Azure App Service Domains global regionalization including fallback, concurrency solutions, data replication, and traffic management.',
        'Led redesign and rollout of database, background job, and data layer changes required for Azure App Service Domains multi-region scaling.',
        'Spearheaded efforts for domain fraud detection through alerting and implementation of new pre-purchase validation.',
        'Oversaw maintenance and support for Azure App Service Domains serving over 80,000 customers.',
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
