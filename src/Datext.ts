
import Exercise from './lib/Exercise'
import QueryRunner from './lib/QueryRunner'
import FileManager from './lib/FileManager'

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
    private fileManager: FileManager

    constructor(args: DatextArguments) {
        this.files = args.files.length === 0 ? ['exercise.js'] : args.files
        this.options = args.options
        this.printWelcomeMessage()
        this.fileManager = new FileManager(this.files)
        this.fileManager.files()?.then( contents => {
            // const exercise = new ExerciseManager(contents)
            const queryRunner = new QueryRunner()
            contents.questions.forEach(question => {
                queryRunner.run(question.answer)
            });
        })
    }

    private printWelcomeMessage(): void {
        console.log('***** Database Exercise Feedback *****')
    }
}