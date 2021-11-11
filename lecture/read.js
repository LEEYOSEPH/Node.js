const fs = require('fs').promises;

fs.writeFile('./writeme.txt','글이 입력')
.then(()=> {
    
    })
    .catch((err)=>{
        throw err
    });
  