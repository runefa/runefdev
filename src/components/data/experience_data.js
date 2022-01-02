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
        'Built an internal pipeline that enabled developers to get direct and immediate access to their endpoint output for validation.',
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
    'Software Engineer I': {
      location: 'Redmond WA',
      dates: 'Feb 2022 - Current',
      description: [],
      badges: [],
    },
  },
};
