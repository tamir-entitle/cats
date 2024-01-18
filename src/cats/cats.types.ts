export interface ICat {
  id: string;
  firstName: string;
  lastName: string;
  image?: string;
  description: string;
  mouseId?: string;
  mice?: IMouse[];
  createdAt?: string;
  updatedAt?: string;
}

interface IMouse {
  id: string;
  name: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}
