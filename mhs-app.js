const fs = require('fs')

const directPath = './form/'
const pathJson = directPath+'/form.json';

// cek folder jika ada dibuat jika tidak lanjut
if(!fs.existsSync(directPath)){
  fs.mkdirSync(directPath);
} 

if(!fs.existsSync(pathJson)) {
  fs.writeFileSync(pathJson, '[]', 'utf-8');
}


// load data.json
const loadTodos = () => {
  // membaca file json (./data/data.json)
  const fileBuffer = fs.readFileSync(pathJson, 'utf-8');
  return todos = JSON.parse(fileBuffer);
};

// Menyimpan Data
exports.saveData = (mhs) => {
  loadTodos();
  // cek duplikat todo
  const duplicates = mhs.find(item => item === mhs);
  if(duplicates){
      console.log(`mhs ${mhs} sudah terdaftar silahkan gunakan todo lain!!`);
      return false;
  };
  
  // menambah data yang pada variable json
  todos.push(mhs);

  // menuliskan ke data.json
  fs.writeFile(pathJson, JSON.stringify(mhs, null, 2), (err) => {
      if(err) throw err;
      console.log('\n===> data telah tersipman <===');
      console.table(mhs);
  });
  
  // readline ditutup / berakhir
}

