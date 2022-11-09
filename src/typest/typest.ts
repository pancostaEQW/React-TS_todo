import React from "react";
import { TodoComment } from "typescript";

export interface ITodo {
    id: number;
    title: string;
    remove?: any;
    length?: number;
    completed: boolean;
}