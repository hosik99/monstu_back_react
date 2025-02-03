export interface PostLogDTO {
    id: string;
    title: string;
    postId: BigInt;
    authorId: BigInt;
    viewCount: BigInt;
    lastView: string;
    createdAt: string;
}

export const PostLogFilterArray = {
    sortValues: ["id", "createdAt", "updatedAt"],
    filterOptions: ["title", "category", "state", "isPublic"],
    dateOptions: ["createdAt", "updatedAt"],
};