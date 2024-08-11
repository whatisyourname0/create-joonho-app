#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2] || 'my-joonho-app';

// 복사할 템플릿 디렉토리 경로
const templateDir = path.resolve(__dirname, 'templates');

// 복사 대상 디렉토리
const targetPath = path.resolve(process.cwd(), targetDir);

if (fs.existsSync(targetPath)) {
  console.error(`Error: Directory ${targetDir} already exists!`);
  process.exit(1);
}

// 템플릿 디렉토리 복사
fs.mkdirSync(targetPath, { recursive: true });

const copyRecursiveSync = (src, dest) => {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    entry.isDirectory()
      ? (fs.mkdirSync(destPath), copyRecursiveSync(srcPath, destPath))
      : fs.copyFileSync(srcPath, destPath);
  }
};

copyRecursiveSync(templateDir, targetPath);

console.log(`\nSuccess! Created ${targetDir} at ${targetPath}`);
console.log('You can now run the following commands:\n');
console.log(`  cd ${targetDir}`);
console.log('  npm install');
console.log('  npm start\n');