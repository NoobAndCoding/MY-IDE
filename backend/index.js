import fs from 'node:fs';
import path from 'node:path';

const rootPath = "C:/Users/justg/WebstormProjects/MyIDE/Renderer";

const walkDir = (dirPath) => {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (let entry of entries) {
        const fullPath = path.join(dirPath, entry.name)
        if (entry.isFile()) {
            console.log(entry.name + " || path >>" + fullPath)
        } else if (entry.isDirectory()) {
            console.log("<DIR>" + fullPath)
            walkDir(fullPath)
        }
    }
}

const createPath = "C:/Users/justg/WebstormProjects/MyIDE/backend/"

const createFile = (pathToCreate) => {

    const emptyReturnant = () => {
        return 0
    }

    let fileName = "test.js"

    if (fs.existsSync(path.join(createPath, fileName))) {
        console.log("File already exists")
        return emptyReturnant()
    } else {
        const createdFile = fs.appendFile(path.join(createPath, "test.js"), "", (err) => {
            if (err) throw err
            console.log("Created file!")
        })
    }
}

const updatePath = "C:/Users/justg/WebstormProjects/MyIDE/backend/test2.js"

const updateFile = (fileToUpdate, text) => {

    const emptyReturnant = () => {
        return 0
    }

    if (! fs.existsSync(fileToUpdate)) {
        console.log("File doesn't exist")
        fs.appendFile(path.join(createPath, "test2.js"), "",(err) => {
            if (err) throw err;
            console.log("File created");
        })
        fs.writeFile(fileToUpdate, "console.log('Hello World')", (err) => {
            if (err) throw err;
            console.log("File written!");
        });
        return emptyReturnant()
    } else {
        fs.writeFile(fileToUpdate, "console.log('HelloWorld')", (err) => {
            if (err) throw err;
            console.log("File written");
        });
    }

}

const deletePath = "C:/Users/justg/WebstormProjects/MyIDE/backend/test3.js"

const deleteFile = (fileToDelete) => {
    const emptyReturnant = () => {
        return 0
    }

    if (fs.existsSync(fileToDelete)) {
        fs.unlink(fileToDelete, (err) => {
            if (err) throw err;
            console.log("File deleted")
        })
    } else {
        console.log("File doesn't exist anyway")
        return emptyReturnant()
    }
}

walkDir(rootPath);
createFile(createPath)
updateFile(updatePath)
deleteFile(deletePath)