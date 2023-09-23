export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type FavouriteItem = {
    id: number;
    image_id: string;
    sub_id: null;
    created_at: string;
    image: {
        id: string;
        url: string;
    }
}

export interface FavouriteSliceState {
    favourite: FavouriteItem[];
    status: Status;
}