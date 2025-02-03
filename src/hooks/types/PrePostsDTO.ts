export interface PrePostsDTO {
    id: BigInt;
    author : string;
    title : string;
    thumbnailUrl : string;
    createdAt : string;
    updatedAt : string;
    category : string;
    state : string;
    isPublic : boolean;
}

export const PrePostFilterArray = {
    sortValues: ["id","createdAt","updatedAt"],
    filterOptions: ["author", "title", "category", "state","isPublic"],
    dateOptions: ["createdAt","updatedAt"],
};