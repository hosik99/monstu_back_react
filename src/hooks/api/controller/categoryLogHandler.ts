

import { CategoryLogDTO } from "../../types/CategoryLogDTO";
import { buildPageableDTO, CustomPageableDTO } from "../../types/CustomPageableDTO";
import { ReResponse } from "../../types/ReResponse";
import { errorStatus, responseStatus } from "../../util/handleStatus";
import { connectSpring } from "../preAxios";

// Get CategoryLogDTO Data List
export const getCategoryLogs = async( pageable:CustomPageableDTO ) : Promise<ReResponse> => {
    try {
        const url  = '/cate/log'+buildPageableDTO(pageable);
        const response = await connectSpring.get< {result: CategoryLogDTO[]} >(url);
        return responseStatus(response,response.data);  
    } catch (error) {
        return errorStatus(error);
    }
}