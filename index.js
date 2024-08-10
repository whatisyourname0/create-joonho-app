#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const inquirer = require('inquirer');

async function main() {
  console.log('🚀 [Create-Joonho-App] Start Installation...');

  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: '프로젝트 이름을 입력하세요:',
      default: 'my-joonho-app'
    }
  ]);

  const projectPath = path.join(process.cwd(), projectName);
  fs.mkdirSync(projectPath, { recursive: true });

  // 3. 기본 파일 생성
  const packageJson = {
    name: projectName,
    version: '1.0.0',
    description: 'A Joonho app',
    main: 'index.js',
    scripts: {
      start: 'node index.js'
    },
    packageManager: 'yarn@4.4.0'
  };

  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  fs.writeFileSync(
    path.join(projectPath, 'index.js'),
    'console.log("Hello from Create-Joonho-App!");'
  );

  // 4. Yarn Berry 4.4.0 설정 및 의존성 설치
  console.log('Installing Dependencies...');
  execSync('yarn set version 4.4.0', { cwd: projectPath, stdio: 'inherit' });
  execSync('yarn install', { cwd: projectPath, stdio: 'inherit' });

  console.log(`
Installation Success!

#################################

To Start Your Project:
  cd ${projectName}
  yarn start

Happy Coding!
  `);
}

main().catch((error) => {
  console.error('An Error Occurred:', error);
  process.exit(1);
});