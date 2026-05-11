export interface Medication {
  id?: number;
  name: string;
  genericName?: string;
  description?: string;
  presentation: string; // tableta, jarabe, inyectable, etc.
  concentration: string;
  laboratory: string;
  activeIngredient: string;
  indications?: string;
  contraindications?: string;
  sideEffects?: string;
  dosage?: string;
  stock: number;
  minStock: number;
  unitPrice: number;
  requiresPrescription: boolean;
  expirationDate?: Date;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Prescription {
  id?: number;
  patientId: number;
  doctorId: number;
  medicationId: number;
  medication?: Medication;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
  prescriptionDate: Date;
  isActive: boolean;
}
