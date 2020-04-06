
import fs from 'fs'
import path from 'path'

export default class FileManager {

    private _files: string[]

    constructor(files: string[]){
        this._files = this.getFiles(files)
        // this.files = this.processFiles(files)
    }

    public files() {
        return this.processFiles(this._files)
    }

    private getFiles(files: string[]) {
        console.log(process.cwd());
        return files
        .map( fileName => path.resolve(fileName))
        .filter( filename => {
            const exists = fs.existsSync(filename)
            const status = exists ? 'Found' : 'Not Found'
            console.log(`Parsing file: ${filename} (${status})`)
            return exists
        })
    }

    private processFiles(files: string[]){
        return new Promise( (resolve, reject) => {
        if (files.length === 0) {
            const message = 'No exercise files to process'
            console.log(message)
            resolve()
        }
            files.forEach( file => {
                import(file)
                    .then(module => resolve(module))
                    .catch( error => reject(error))
            })
        })
    }
}