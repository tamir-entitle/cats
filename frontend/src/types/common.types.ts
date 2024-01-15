export interface ICat {
    id: string;
    firstName: string;
    lastName: string;
    image?: string;
    description: string;
    mice: IMouse[];
    mouseId?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface IMouse {
    id: string;
    name: string;
    image?: string;
    createdAt?: string;
    updatedAt?: string;
}