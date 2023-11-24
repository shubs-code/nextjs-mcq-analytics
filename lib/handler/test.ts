import { db } from "../db"


const TestHandler = {
    getTests:async(userId:string, offset:number, limit:number)=>{
        const userTests = await db.test.findMany({
            where:{
              authorId:userId
            },
            skip:offset,
            take:limit,
          })
    }
}

export default TestHandler