import Exercise from '../src/lib/Exercise'

export default const exercise: Exercise = {
  number: 1,
  title: 'Hello world',
  description: 'This is a sample test project',
  startDate: new Date(2020, 4, 4),
  dueDate: new Date(2020, 4, 10)
}

exercise.questions = [

  {
    number: 1, question: `
      Amount of launches
    `,
    answer: `
      SELECT COUNT(*) 
      FROM launches;
    `
  },
  {
    number: 2, question: `
      Amount of upcoming launches
    `,
    answer: `
      SELECT COUNT(*) 
      FROM launches WHERE upcoming = 1;
    `
  },
  {
    number: 3, question: `
      Amount of past launches
    `,
    answer: `
      SELECT COUNT(*)
      FROM launches 
      WHERE upcoming = 0;
    `
  },
  {
    number: 4, question: `
      Amount of successful launches
    `,
    answer: `
      SELECT COUNT(*) 
      FROM launches 
      WHERE upcoming = 1 & success = 1;
    `
  },
  {
    number: 5, question: `
      What are the different core serial numbers that have been used in launches? (no duplicates!)
    `,
    answer: `
      SELECT DISTINCT core_serial 
      FROM launches 
      WHERE core_serial IS NOT NULL LIMIT 10;
    `
  }
]
