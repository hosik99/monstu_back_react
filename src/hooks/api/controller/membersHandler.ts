import { MemberDTO } from "../../types/MemberDTO";
import { ReResponse } from "../../types/ReResponse";
import { ResponseStatus } from "../../types/ResponseStatus";
import { errorStatus, responseStatus } from "../../util/handleStatus";
import { connectSpring } from "../preAxios";


//GET ALL MEMBERS with handler
export const getAllMembers = async() : Promise<ReResponse> => {
    try {
        const url  = '/admin/members';
        const response = await connectSpring.get< {result: MemberDTO[]} >(url);    // response.data의 구조를 정의
        console.log("response: "+JSON.stringify(response.data, null, 2));
        return responseStatus(response);  // response.data는 MembersResponse 타입
    } catch (error) {
        return errorStatus(error);
    }
}