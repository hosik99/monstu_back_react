export interface PostsDTO {
    id: BigInt;
    author : string;
    title : string;
    content : string;
    thumbnailUrl : string;
    createdAt : string;
    updatedAt : string;
    category : string;
    state : string;
    isPublic : boolean;
}