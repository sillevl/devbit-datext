
enum Severity {
    Error,
    Warning,
    Notice,
    Info
}

interface Feedback {
    status: boolean
    severity: Severity
    message: string
    details: string
}

export default class Question {
    public number: number
    public question: string
    public answer?: string
    
    constructor(number: number, question: string) {
        this.number = number
        this.question = question
    }

    public get id(): string {
        return this.number.toString + this.question
    }

    public giveAnswer(answer: string): void {
        this.answer = answer
    }

    public get feedback(): Feedback | null {
        return {
            status: true,
            severity: Severity.Info,
            message: 'Hello world',
            details: 'This is just some test details',
        }
    }

}