export const TESTDATA = 'TESTDATA';
export interface TodoTypes {
    id: number;
    title: string;
}
export interface FetchTodosTypes {
    type: typeof TESTDATA,
    json: TodoTypes[]
}

export type ActionTypes = FetchTodosTypes
