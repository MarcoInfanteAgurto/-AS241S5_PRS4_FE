export interface Patient {
  id?: number;
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  birthDate: Date;
  gender: 'M' | 'F' | 'OTHER';
  bloodType?: string;
  address?: string;
  phone?: string;
  email?: string;
  emergencyContact?: EmergencyContact;
  medicalHistory?: MedicalHistory[];
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface MedicalHistory {
  id?: number;
  patientId: number;
  date: Date;
  diagnosis: string;
  treatment: string;
  doctorId: number;
  notes?: string;
}
