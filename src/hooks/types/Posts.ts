export interface Posts {
    id: BigInt;
    authorId : BigInt;
    title : string;
    content : string;
    thumbnailUrl : string;
    createdAt : string;
    updatedAt : string;
    category : string;
    state : string;
    isPublic : boolean;
}

export const sortValues = ['id','createdAt','updatedAt']
export const filterOptions = ['title','category','state','isPublic','authorId']
export const dateOptions = ['createdAt','updatedAt']