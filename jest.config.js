const tsModules = ['.*simplyhexagonal'].join('|');

module.exports = {
  maxWorkers: "10%",
  coverageProvider: "v8",
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: [`/node_modules/(?!${tsModules})`],
};
