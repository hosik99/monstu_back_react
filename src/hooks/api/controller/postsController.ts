import { ReResponse } from "../../types/ReResponse";
import { errorStatus, responseStatus } from "../../util/handleStatus";
import { connectSpring } from "../preAxios";

const baseURL = '/posts';

export const savePost = async(postData) : Promise<ReResponse> => {
    try {
        const url  = baseURL + "/save";
        const response = await connectSpring.post< {result: String[]} >(url,postData);
        return responseStatus(response);  
    } catch (error) {
        return errorStatus(error);
    }
}