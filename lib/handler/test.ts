import { db } from "../db"


const TestHandler = {
    getTests:async(userId:string, offset:number, limit:number)=>{
      const query = {
        where:{
          authorId:userId
        },
        skip:offset,
        take:limit,
      }
      const [tests, count] = await db.$transaction([
        db.test.findMany(query),
        db.test.count({ where: query.where })
      ]);

      return {tests,count};
    },
    createTest:async(userId:string, name:string, total_questions:number, skipped_questions:number,test_data:any)=>{
      const createdTest = await db.test.create({
        data:{
            authorId:userId,
            name,
            total_questions,
            skipped_questions,
            correct_answers:0,
            test_data
        }
      })
      return createdTest;
    }
}

export default TestHandler