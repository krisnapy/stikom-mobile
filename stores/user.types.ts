export interface Root {
  user: User;
}

export interface User {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  birthPlace: string;
  gender: string;
  address: string;
  avatar: any;
  fullName: string;
  religionId: number;
  registerDate: any;
  graduationDate: any;
  fatherName: any;
  motherName: any;
  nik: string;
  nisn: string;
  province: string;
  city: string;
  regency: string;
  village: string;
  county: string;
  roleId: number;
  dosenId: string;
  createdAt: string;
  updatedAt: string;
  role: Role;
  religion: Religion;
  dosen: Dosen;
}

export interface Role {
  id: number;
  name: string;
}

export interface Religion {
  id: number;
  name: string;
}

export interface Dosen {
  id: string;
  fullName: string;
  email: string;
  avatar: any;
  phoneNumber: string;
}
