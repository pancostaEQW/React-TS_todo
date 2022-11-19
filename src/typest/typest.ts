import React from "react";
import { TodoComment } from "typescript";

let date: Date = new Date();

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
    date: string;
}