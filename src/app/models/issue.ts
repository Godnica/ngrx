import { Priority } from "./priority";

export type Issue = {
    id: string;
    title: string;
    description: string;
    priority: Priority
    resolved: boolean;
};