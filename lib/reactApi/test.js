

export const AddTestData = async(name, testResponseData)=>{
    console.log("fetch")
    const body = {
        "name":name,
        "total_questions":testResponseData.length,
        "skipped_questions":testResponseData?.reduce((total, question)=> total+(question.selectedOption.length==1?0:1) , 0),
        "test_data":testResponseData
    }
    const response = await fetch('/api/test', {
        method: 'post',
        body:JSON.stringify(body),
        credentials:"include",
       });
    console.log(response.status)
    const data = await response.json()
    return data;
}

