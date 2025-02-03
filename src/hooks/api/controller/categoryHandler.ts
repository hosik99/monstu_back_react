import { PostCategory } from "../../types/PostCategory";
import { ReResponse } from "../../types/ReResponse";
import { errorStatus, responseStatus } from "../../util/handleStatus";
import { connectSpring } from "../preAxios";

const baseURL = '/cate';

// Get PrePostsDTO Data List
export const getAllPostCate = async( ) : Promise<ReResponse> => {
    try {
        const url = baseURL + "/"
        const response = await connectSpring.get< {result: PostCategory[]} >(url);
        return responseStatus(response,response.data);  
    } catch (error) {
        return errorStatus(error);
    }
}