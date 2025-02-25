import { ITag } from "./tag";

export interface IFragment{
    id: string,
    title: string,
    code: string,
    tags: ITag[]
}