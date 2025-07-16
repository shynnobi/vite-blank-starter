import fs from 'fs-extra';
import path from 'path';

import { copyConfigFile, copyConfigFolder } from '@/shared/copyUtils';
import { getMonorepoRoot } from '@/shared/getMonorepoRoot';

const configFolders = ['.cursor', '.devcontainer', '.github', '.husky', '.vscode'];

const configFiles = [
  '.gitignore',
  '.editorconfig',
  '.prettierrc',
  '.prettierignore',
  'Dockerfile',
  'docker-compose.yml',
];

const root = await getMonorepoRoot();
const starter = path.resolve(root, 'packages/starter');

console.log('🚀 Copying config folders from monorepo root to packages/starter...');
for (const folder of configFolders) {
  const source = path.join(root, folder);
  const dest = path.join(starter, folder);
  if (await fs.pathExists(source)) {
    await copyConfigFolder(source, dest);
    console.log(`✅ Folder ${folder} copied`);
  } else {
    console.log(`⚠️ Folder ${folder} not found`);
  }
}

console.log('📄 Copying config files from monorepo root to packages/starter...');
for (const filename of configFiles) {
  const source = path.join(root, filename);
  const dest = path.join(starter, filename);
  if (await fs.pathExists(source)) {
    await copyConfigFile(source, dest);
    console.log(`✅ File ${filename} copied`);
  } else {
    console.log(`⚠️ File ${filename} not found`);
  }
}

console.log('🏁 Config folders and files sync complete!');
