import { ReResponse } from "../../types/ReResponse";
import { SentencesDTO } from "../../types/SentencesEngKo";
import { errorStatus, responseStatus } from "../../util/handleStatus";
import { connectSpring } from "../preAxios";


const baseURL = '/w';

// formData.title, formData.conten를 이용해서 spring에서 언어(문장,단어) 추출
export const extractionLan = async( formData: {title:string,content:string,category:string} ) : Promise<ReResponse> => {
    try {
        const url  = baseURL + "/ext/engko";
        const response = await connectSpring.post< {result: String[]} >(url,formData);
        return responseStatus(response,response.data);  
    } catch (error) {
        return errorStatus(error);
    }
}

