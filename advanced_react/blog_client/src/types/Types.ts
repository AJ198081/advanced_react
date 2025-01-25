export interface PostType {
    id: number;
    title: string;
    description: string;
    comments: Set<Comment>;
}

export interface Comment {
    id: number;
    text: string;
}