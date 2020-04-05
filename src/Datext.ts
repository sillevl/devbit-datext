
import fs from 'fs'
import path from 'path'

interface DatextOptions {
    all?: boolean
    successOnly?: boolean
    failOnly?: boolean
    last?: boolean
    number?: number
    summary?: boolean
    details?: boolean
}

interface DatextArguments {
    files: string[]
    options: DatextOptions
}

export default class Datext {
    private files: string[]
    private options: DatextOptions
    constructor(args: DatextArguments) {
        this.files = args.files.length === 0 ? ['exercise.js'] : args.files
        this.options = args.options
        this.printWelcomeMessage()
        const files = this.getFiles(this.files)
        this.processFiles(files)
    }

    private getFiles(files: string[]) {
        console.log(process.cwd());
        return files.filter( fileName => {
            const file = path.resolve(fileName)
            const exists = fs.existsSync(file)
            const status = exists ? 'Found' : 'Not Found'
            console.log(`Parsing file: ${file} (${status})`)
            return exists
        })
    }

    private processFiles(files: string[]) {
        if (files.length === 0) {
            console.log('No exercise files to process')
            return
        }
        files.forEach( file => {
            // import x from file
            // console.log(x)
        })
    }

    private printWelcomeMessage(): void {
        console.log('***** Database Exercise Feedback *****')
    }
}