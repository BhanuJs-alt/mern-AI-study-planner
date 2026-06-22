import { GoogleGenAI } from '@google/genai';


export async function generateStudySchedule(plan){
    
    const ai = new GoogleGenAI({
         apiKey: process.env.GEMINI_API_KEY,
       });
    console.log(process.env.GEMINI_API_KEY);
    const prompt = `You are an expert study planner.

                    Exam: ${plan.examName}

                    Target Date: ${plan.targetDate}

                    Study Hours Per Day: ${plan.studyHours}

                    Subjects:
                    ${plan.subjects.join(", ")}

                    Strengths:
                    ${plan.strengths.join(", ")}

                    Weaknesses:
                    ${plan.weaknesses.join(", ")}

                    Create a study schedule till Target Date or 7 days.

                    Return ONLY a valid JSON object.
                    Do not use markdown.
                    Do not use code fences.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
     
    const text = response.text;
    console.log(response.text);
    const schedule=JSON.parse(text);
    return schedule;
    
}