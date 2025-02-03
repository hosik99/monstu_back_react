import { buildPageableDTO, CustomPageableDTO } from "../../types/CustomPageableDTO";
import { PrePostsDTO } from "../../types/PrePostsDTO";
import { ReResponse } from "../../types/ReResponse";
import { errorStatus, responseStatus } from "../../util/handleStatus";
import { connectSpring } from "../preAxios";

const baseURL = '/post';

// Get PrePostsDTO Data List
export const getPrePostsDTOs = async( pageable:CustomPageableDTO ) : Promise<ReResponse> => {
    console.log('pageable: '+pageable);
    try {
        const url  = baseURL+buildPageableDTO(pageable);
        const response = await connectSpring.get< {result: PrePostsDTO[]} >(url);
        console.log('response.data: '+response.data[0].isPublic);
        return responseStatus(response,response.data);  
    } catch (error) {
        return errorStatus(error);
    }
}