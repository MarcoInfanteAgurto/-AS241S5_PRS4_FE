export interface Product {
  id?: number;
  name: string;
  catalogCode: string;
  unit: string; // unidad, caja, paquete, etc.
  description?: string;
  category: ProductCategory;
  stock: number;
  minStock: number;
  maxStock?: number;
  unitPrice: number;
  supplierId?: number;
  supplier?: Supplier;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum ProductCategory {
  MEDICAL_SUPPLIES = 'MEDICAL_SUPPLIES',
  OFFICE_SUPPLIES = 'OFFICE_SUPPLIES',
  CLEANING = 'CLEANING',
  FOOD = 'FOOD',
  EQUIPMENT = 'EQUIPMENT',
  OTHER = 'OTHER'
}

export interface Supplier {
  id?: number;
  name: string;
  ruc?: string;
  contactName: string;
  phone: string;
  email: string;
  address?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
