import Question from './Question'

export default interface Exercise {
    number: number;
    title: string;
    description?: string;
    startDate?: Date;
    dueDate?: Date;
    questions: Question[];
}


// export default class Exercise {
//     private number: number
//     private title: string
//     private description?: string
//     private startDate?: Date
//     private dueDate?: Date

//     public constructor(options: ExerciseOptions) {
//         this.number = options.number
//         this.title = options.title
//         this.description = options.description
//         this.startDate = options.startDate
//         this.dueDate = options.dueDate
//     }
// }