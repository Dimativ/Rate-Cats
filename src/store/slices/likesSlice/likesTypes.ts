export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type LikeItem = {
    id: number;
    image_id: string;
    sub_id: string;
    created_at: string;
    value: number;
    country_code: string;
    image: {
        id: number;
        url: string;
    }
}

export interface LikesSliceState {
    likes: LikeItem[];
    status: Status;
}