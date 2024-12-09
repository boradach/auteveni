   const fs = require('fs');

   const content = 'This is the content to write to the file.';

   // Asynchronous write file example
   fs.writeFile('file.txt', content, err => {
       if (err) throw err;
       console.log('File has been saved.');
   });

   // Synchronous write file example
   try {
       fs.writeFileSync('file.txt', content);
       console.log('File has been saved.');
   } catch (err) {
       console.error(err);
   }
   