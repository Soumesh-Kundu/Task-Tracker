export async function getAISuggestion(input:string){
    const res=await fetch("/api/ai/suggestion",{
        method:"POST",
        body:JSON.stringify({
            input,
        }),
    })
    return await res.json();
}

