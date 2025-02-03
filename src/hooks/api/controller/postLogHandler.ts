import { buildPageableDTO, CustomPageableDTO } from "../../types/CustomPageableDTO";
import { PostLogDTO } from "../../types/PostLogDTO";
import { ReResponse } from "../../types/ReResponse"
import { errorStatus, responseStatus } from "../../util/handleStatus";
import { connectSpring } from "../preAxios";

const baseURL = '/post/log';

// Get PostLog Data List
export const getPostLogs = async( pageable:CustomPageableDTO ) : Promise<ReResponse> => {
    try {
        const url  = baseURL+buildPageableDTO(pageable);
        const response = await connectSpring.get< {result: PostLogDTO[]} >(url);
        return responseStatus(response,response.data);  
    } catch (error) {
        console.log("Server Errored")
        return errorStatus(error);
    }
}

//Delete PostLogs with Id List
export const delPostLogs = async( list: string[] ) : Promise<ReResponse> => {
    console.log(list);
    try {
        const url  = baseURL+'/del'
        const response = await connectSpring.post(url,list);
        return responseStatus(response);  
    } catch (error) {
        return errorStatus(error);
    }
}

//Delete PostLog with Id
export const delPostLog = async( id: string ) : Promise<ReResponse> => {
    try {
        const url  = baseURL+'/'+id
        const response = await connectSpring.delete(url);
        return responseStatus(response);  
    } catch (error) {
        return errorStatus(error);
    }
}