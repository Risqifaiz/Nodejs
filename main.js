const {  saveData } = require('./todo-app')
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const util = require('node:util');
const question = util.promisify(rl.question).bind(rl);

const main = async () => {
  try {
    const Nama = await question('Nama : ');
    const NIM = await question ('Nim : ')
    if(true) {
      saveData({Nama,NIM})    
    }else{
      throw new Error(`empty`);
    }
  } 
  catch (err) {
    console.error('Question rejected', err);
  } finally {
    rl.close()  
  }
  await question('Nim : ');
  
}

main()
