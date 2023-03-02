    const fs = require('fs')
    // Read files
    // Create files
    // Update files
    // Delete files
    // Rename files

    // creating a file 
    fs.appendFile('text.txt',"this is my text file",(err)=>{ // add text in existing file
        if(err) throw err
        console.log('success')
    })
    fs.writeFile('text2.txt',"this is my text file",(err)=>{ // replace text in existing file
        if(err) throw err
        console.log('success')
    })




    