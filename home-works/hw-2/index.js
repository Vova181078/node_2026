const fs = require('node:fs/promises');
const path = require('path');



const foo = async () => {

 const baseFolder = path.join(__dirname, 'baseFolder');
 await fs.mkdir(baseFolder, { recursive: true });

 await fs.mkdir(path.join(__dirname,'baseFolder','folder-1'), {recursive: true});
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-1',  'file1.txt'), 'Текст для file-1');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-1',  'file2.txt'), 'Текст для file-2');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-1',  'file3.txt'), 'Текст для file-3');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-1',  'file4.txt'), 'Текст для file-4');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-1',  'file5.txt'), 'Текст для file-5');


 await fs.mkdir(path.join(__dirname,'baseFolder','folder-2'), {recursive: true});
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-2',  'file1.txt'), 'Текст для file-1');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-2',  'file2.txt'), 'Текст для file-2');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-2',  'file3.txt'), 'Текст для file-3');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-2',  'file4.txt'), 'Текст для file-4');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-2',  'file5.txt'), 'Текст для file-5');

 await fs.mkdir(path.join(__dirname,'baseFolder','folder-3'), {recursive: true});
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-3',  'file1.txt'), 'Текст для file-1');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-3',  'file2.txt'), 'Текст для file-2');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-3',  'file3.txt'), 'Текст для file-3');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-3',  'file4.txt'), 'Текст для file-4');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-3',  'file5.txt'), 'Текст для file-5');

 await fs.mkdir(path.join(__dirname,'baseFolder','folder-4'),{recursive: true});
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-4',  'file1.txt'), 'Текст для file-1');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-4',  'file2.txt'), 'Текст для file-2');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-4',  'file3.txt'), 'Текст для file-3');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-4',  'file4.txt'), 'Текст для file-4');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-4',  'file5.txt'), 'Текст для file-5');

 await fs.mkdir(path.join(__dirname,'baseFolder','folder-5'), {recursive: true});
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-5',  'file1.txt'), 'Текст для file-1');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-5',  'file2.txt'), 'Текст для file-2');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-5',  'file3.txt'), 'Текст для file-3');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-5',  'file4.txt'), 'Текст для file-4');
 await fs.writeFile(path.join(__dirname, 'baseFolder', 'folder-5',  'file5.txt'), 'Текст для file-5 ');

 const stats = await fs.stat(baseFolder);
 console.log(baseFolder,stats.isDirectory());

 // folder-1
 const folder1 = path.join(baseFolder, 'folder-1');
 const folder1Stat = await fs.stat(folder1);
 console.log(folder1, folder1Stat.isDirectory());

 const file1_1 = path.join(folder1, 'file1.txt');
 const file1_1Stat = await fs.stat(file1_1);
 console.log(file1_1, file1_1Stat.isFile());

 const file1_2 = path.join(folder1, 'file2.txt');
 const file1_2Stat = await fs.stat(file1_2);
 console.log(file1_2, file1_2Stat.isFile());

 const file1_3 = path.join(folder1, 'file3.txt');
 const file1_3Stat = await fs.stat(file1_3);
 console.log(file1_3, file1_3Stat.isFile());

 const file1_4 = path.join(folder1, 'file4.txt');
 const file1_4Stat = await fs.stat(file1_4);
 console.log(file1_4, file1_4Stat.isFile());

 const file1_5 = path.join(folder1, 'file5.txt');
 const file1_5Stat = await fs.stat(file1_5);
 console.log(file1_5, file1_5Stat.isFile());


// folder-2
 const folder2 = path.join(baseFolder, 'folder-2');
 const folder2Stat = await fs.stat(folder2);
 console.log(folder2, folder2Stat.isDirectory());

 const file2_1 = path.join(folder2, 'file1.txt');
 const file2_1Stat = await fs.stat(file2_1);
 console.log(file2_1, file2_1Stat.isFile());

 const file2_2 = path.join(folder2, 'file2.txt');
 const file2_2Stat = await fs.stat(file2_2);
 console.log(file2_2, file2_2Stat.isFile());

 const file2_3 = path.join(folder2, 'file3.txt');
 const file2_3Stat = await fs.stat(file2_3);
 console.log(file2_3, file2_3Stat.isFile());

 const file2_4 = path.join(folder2, 'file4.txt');
 const file2_4Stat = await fs.stat(file2_4);
 console.log(file2_4, file2_4Stat.isFile());

 const file2_5 = path.join(folder2, 'file5.txt');
 const file2_5Stat = await fs.stat(file2_5);
 console.log(file2_5, file2_5Stat.isFile());


// folder-3
 const folder3 = path.join(baseFolder, 'folder-3');
 const folder3Stat = await fs.stat(folder3);
 console.log(folder3, folder3Stat.isDirectory());

 const file3_1 = path.join(folder3, 'file1.txt');
 const file3_1Stat = await fs.stat(file3_1);
 console.log(file3_1, file3_1Stat.isFile());

 const file3_2 = path.join(folder3, 'file2.txt');
 const file3_2Stat = await fs.stat(file3_2);
 console.log(file3_2, file3_2Stat.isFile());

 const file3_3 = path.join(folder3, 'file3.txt');
 const file3_3Stat = await fs.stat(file3_3);
 console.log(file3_3, file3_3Stat.isFile());

 const file3_4 = path.join(folder3, 'file4.txt');
 const file3_4Stat = await fs.stat(file3_4);
 console.log(file3_4, file3_4Stat.isFile());

 const file3_5 = path.join(folder3, 'file5.txt');
 const file3_5Stat = await fs.stat(file3_5);
 console.log(file3_5, file3_5Stat.isFile());


// folder-4
 const folder4 = path.join(baseFolder, 'folder-4');
 const folder4Stat = await fs.stat(folder4);
 console.log(folder4, folder4Stat.isDirectory());

 const file4_1 = path.join(folder4, 'file1.txt');
 const file4_1Stat = await fs.stat(file4_1);
 console.log(file4_1, file4_1Stat.isFile());

 const file4_2 = path.join(folder4, 'file2.txt');
 const file4_2Stat = await fs.stat(file4_2);
 console.log(file4_2, file4_2Stat.isFile());

 const file4_3 = path.join(folder4, 'file3.txt');
 const file4_3Stat = await fs.stat(file4_3);
 console.log(file4_3, file4_3Stat.isFile());

 const file4_4 = path.join(folder4, 'file4.txt');
 const file4_4Stat = await fs.stat(file4_4);
 console.log(file4_4, file4_4Stat.isFile());

 const file4_5 = path.join(folder4, 'file5.txt');
 const file4_5Stat = await fs.stat(file4_5);
 console.log(file4_5, file4_5Stat.isFile());


// folder-5
 const folder5 = path.join(baseFolder, 'folder-5');
 const folder5Stat = await fs.stat(folder5);
 console.log(folder5, folder5Stat.isDirectory());

 const file5_1 = path.join(folder5, 'file1.txt');
 const file5_1Stat = await fs.stat(file5_1);
 console.log(file5_1, file5_1Stat.isFile());

 const file5_2 = path.join(folder5, 'file2.txt');
 const file5_2Stat = await fs.stat(file5_2);
 console.log(file5_2, file5_2Stat.isFile());

 const file5_3 = path.join(folder5, 'file3.txt');
 const file5_3Stat = await fs.stat(file5_3);
 console.log(file5_3, file5_3Stat.isFile());

 const file5_4 = path.join(folder5, 'file4.txt');
 const file5_4Stat = await fs.stat(file5_4);
 console.log(file5_4, file5_4Stat.isFile());

 const file5_5 = path.join(folder5, 'file5.txt');
 const file5_5Stat = await fs.stat(file5_5);
 console.log(file5_5, file5_5Stat.isFile());
}

void foo()

