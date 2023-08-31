import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  coverageDirectory: './coverage/coagulu',

  // include cobertura in coverageReporters
  coverageReporters: ['html', 'text', 'text-summary'],
};
