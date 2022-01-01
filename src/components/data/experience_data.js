import fidelity from '../../assets/fidelity.webp';
import microsoft from '../../assets/microsoft.webp';
export const experience_data = {
  Fidelity: {
    logoURL: fidelity,
    'Software Engineer Intern': {
      location: 'Remote',
      dates: 'June 2020 - Aug 2020',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ],
      badges: [
        ['https://github.com/about', 'GitHub'],
        [
          'https://docs.microsoft.com/en-us/azure/devops/user-guide/what-is-azure-devops?view=azure-devops',
          'DevOps',
        ],
        ['https://nodejs.org/en/about/', 'NodeJS'],
        [
          'https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
          'C#',
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
