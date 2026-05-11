export const statusLabels = {
  ACTIVE: 'Activo',
  INACTIVE: 'Inactivo',
  BAJA: 'Baja',
  MEDIA: 'Media',
  ALTA: 'Alta',
  CRITICA: 'Critica',
  PLANNING: 'Planificacion',
  IN_PROGRESS: 'En progreso',
  COMPLETED: 'Completado',
  SUSPENDED: 'Suspendido',
  CANCELLED: 'Cancelado',
  DRAFT: 'Borrador',
  PLANNED: 'Planificado',
  PENDING: 'Pendiente',
  RECEIVED: 'Recibido',
  APPROVED: 'Aprobado',
  PAID: 'Pagado',
  REJECTED: 'Rechazado',
  AVAILABLE: 'Disponible',
  LOW_STOCK: 'Stock bajo',
  OUT_OF_STOCK: 'Sin stock',
  EXPIRED: 'Vencido',
  IN_TRANSIT: 'En ruta',
  CONSIGNADO: 'Consignado',
  DONADO: 'Donado',
  REVOCADO: 'Revocado',
  ENTREGADO: 'Entregado',
  PARCIAL: 'Parcial',
};

export const statusTone = {
  ACTIVE: 'success',
  COMPLETED: 'success',
  RECEIVED: 'success',
  APPROVED: 'success',
  PAID: 'success',
  AVAILABLE: 'success',
  ENTREGADO: 'success',
  CONSIGNADO: 'success',
  MEDIA: 'info',
  PLANNED: 'info',
  PLANNING: 'info',
  IN_PROGRESS: 'info',
  IN_TRANSIT: 'info',
  PENDING: 'warning',
  LOW_STOCK: 'warning',
  DONADO: 'warning',
  PARCIAL: 'warning',
  ALTA: 'warning',
  INACTIVE: 'neutral',
  DRAFT: 'neutral',
  BAJA: 'neutral',
  CRITICA: 'danger',
  SUSPENDED: 'danger',
  CANCELLED: 'danger',
  REJECTED: 'danger',
  OUT_OF_STOCK: 'danger',
  EXPIRED: 'danger',
  REVOCADO: 'danger',
};

export const mockDb = {
  usuarios: [
    { id: 'USR001', firstName: 'María', lastName: 'López Gómez', email: 'maria.lopez@caritas.org.pe', username: 'maria.lopez', role: 'COORDINADOR', phone: '987654321', status: 'ACTIVE', lastLogin: '2026-05-08', createdAt: '2026-01-09' },
    { id: 'USR002', firstName: 'Ana', lastName: 'García Rojas', email: 'ana.garcia@caritas.org.pe', username: 'ana.garcia', role: 'ADMIN', phone: '956120456', status: 'ACTIVE', lastLogin: '2026-05-07', createdAt: '2026-01-18' },
    { id: 'USR003', firstName: 'Luis', lastName: 'Torres Salas', email: 'luis.torres@caritas.org.pe', username: 'luis.torres', role: 'CONTADOR', phone: '944221198', status: 'ACTIVE', lastLogin: '2026-05-06', createdAt: '2026-02-14' },
    { id: 'USR004', firstName: 'Pedro', lastName: 'Sánchez Peña', email: 'pedro.sanchez@caritas.org.pe', username: 'pedro.sanchez', role: 'VOLUNTARIO', phone: '932887410', status: 'INACTIVE', lastLogin: '2026-04-22', createdAt: '2026-03-02' },
    { id: 'USR005', firstName: 'Carmen', lastName: 'Flores Díaz', email: 'carmen.flores@caritas.org.pe', username: 'carmen.flores', role: 'VOLUNTARIO', phone: '981102934', status: 'ACTIVE', lastLogin: '2026-05-08', createdAt: '2026-04-11' },
  ],
  beneficiarios: [
    { id: 'BEN001', dni: '12345678', firstName: 'Rosa', lastName: 'Medina Quispe', district: 'San Vicente', gender: 'FEMENINO', vulnerabilityLevel: 'CRITICA', familyMembers: 5, monthlyIncome: 420, housingType: 'PRESTADA', status: 'ACTIVE', registeredAt: '2026-01-10' },
    { id: 'BEN002', dni: '87654321', firstName: 'Carlos', lastName: 'Ruiz Torres', district: 'Imperial', gender: 'MASCULINO', vulnerabilityLevel: 'ALTA', familyMembers: 4, monthlyIncome: 680, housingType: 'ALQUILADA', status: 'ACTIVE', registeredAt: '2026-02-20' },
    { id: 'BEN003', dni: '11223344', firstName: 'Elena', lastName: 'Vargas Soto', district: 'Nuevo Imperial', gender: 'FEMENINO', vulnerabilityLevel: 'MEDIA', familyMembers: 3, monthlyIncome: 920, housingType: 'PROPIA', status: 'ACTIVE', registeredAt: '2026-03-05' },
    { id: 'BEN004', dni: '55667788', firstName: 'Miguel', lastName: 'Ramos León', district: 'Quilmaná', gender: 'MASCULINO', vulnerabilityLevel: 'ALTA', familyMembers: 6, monthlyIncome: 510, housingType: 'NINGUNA', status: 'ACTIVE', registeredAt: '2026-04-16' },
    { id: 'BEN005', dni: '99887766', firstName: 'Juana', lastName: 'Campos Díaz', district: 'San Luis', gender: 'FEMENINO', vulnerabilityLevel: 'BAJA', familyMembers: 2, monthlyIncome: 1150, housingType: 'PROPIA', status: 'INACTIVE', registeredAt: '2026-01-28' },
  ],
  voluntarios: [
    { id: 'VOL001', dni: '44556677', firstName: 'Javier', lastName: 'Díaz Mora', skills: 'Logistica, reparto', hoursWorked: 126, rating: 4.8, campaigns: 6, status: 'ACTIVE', since: '2026-01-12' },
    { id: 'VOL002', dni: '77889900', firstName: 'Carmen', lastName: 'Flores Díaz', skills: 'Triaje, salud', hoursWorked: 88, rating: 4.7, campaigns: 4, status: 'ACTIVE', since: '2026-02-02' },
    { id: 'VOL003', dni: '66554433', firstName: 'Alonso', lastName: 'Vega Prado', skills: 'Almacen, inventario', hoursWorked: 62, rating: 4.4, campaigns: 3, status: 'ACTIVE', since: '2026-03-08' },
  ],
  especialidades: [
    { id: 'ESP001', specialtyCode: 'EDUC-001', specialtyName: 'Educacion', type: 'SOCIAL', budget: 100000, spent: 45000, color: '#4CAF50', icon: 'school', status: 'ACTIVE' },
    { id: 'ESP002', specialtyCode: 'ALIM-001', specialtyName: 'Alimentacion', type: 'SOCIAL', budget: 80000, spent: 32000, color: '#FF9800', icon: 'restaurant', status: 'ACTIVE' },
    { id: 'ESP003', specialtyCode: 'TF-001', specialtyName: 'Terapia Fisica', type: 'CLINICA', budget: 0, spent: 0, color: '#2196F3', icon: 'accessibility', status: 'ACTIVE' },
    { id: 'ESP004', specialtyCode: 'ODONT-001', specialtyName: 'Odontologia', type: 'CLINICA', budget: 0, spent: 0, color: '#9C27B0', icon: 'healing', status: 'ACTIVE' },
  ],
  proyectos: [
    { id: 'PRY001', projectName: 'Aula Abierta Cañete', specialty: 'Educacion', budget: 62000, spent: 31800, fundingSource: 'Donaciones corporativas', location: 'San Vicente', status: 'IN_PROGRESS', startDate: '2026-02-01', endDate: '2026-11-30' },
    { id: 'PRY002', projectName: 'Canastas con Dignidad', specialty: 'Alimentacion', budget: 54000, spent: 41100, fundingSource: 'Campañas solidarias', location: 'Imperial', status: 'IN_PROGRESS', startDate: '2026-01-15', endDate: '2026-08-31' },
    { id: 'PRY003', projectName: 'Talleres de Oficio', specialty: 'Educacion', budget: 38000, spent: 38000, fundingSource: 'Subvencion', location: 'Nuevo Imperial', status: 'COMPLETED', startDate: '2025-09-01', endDate: '2026-03-30' },
  ],
  campanas: [
    { id: 'CAM001', campaignName: 'Campaña contra el frio 2026', campaignNumber: 'CAMP-SOC-2026-001', domain: 'SOCIAL', campaignType: 'SOLIDARIA', location: 'San Vicente de Cañete', goalAmount: 50000, currentAmount: 32500, goalBeneficiaries: 500, currentBeneficiaries: 320, budget: 8000, spent: 4200, status: 'ACTIVE', startDate: '2026-05-01', endDate: '2026-07-31' },
    { id: 'CAM002', campaignName: 'Campaña de Salud Visual 2026', campaignNumber: 'CAMP-SALUD-2026-001', domain: 'SALUD', campaignTypeSalud: 'OFTALMOLOGIA', location: 'Centro de Salud San Vicente', targetBeneficiaries: 200, actualBeneficiaries: 150, budget: 5000, spent: 4200, status: 'COMPLETED', startDate: '2026-06-01', endDate: '2026-06-15' },
    { id: 'CAM003', campaignName: 'Ruta Dental Comunitaria', campaignNumber: 'CAMP-SALUD-2026-002', domain: 'SALUD', campaignTypeSalud: 'ODONTOLOGIA', location: 'Quilmaná', targetBeneficiaries: 160, actualBeneficiaries: 48, budget: 7200, spent: 1900, status: 'IN_PROGRESS', startDate: '2026-05-06', endDate: '2026-05-28' },
    { id: 'CAM004', campaignName: 'Mochilas para Aprender', campaignNumber: 'CAMP-SOC-2026-002', domain: 'SOCIAL', campaignType: 'EDUCACION', location: 'Imperial', goalAmount: 22000, currentAmount: 18400, goalBeneficiaries: 240, currentBeneficiaries: 196, budget: 3000, spent: 1600, status: 'ACTIVE', startDate: '2026-03-12', endDate: '2026-05-30' },
  ],
  donantes: [
    { id: 'DON001', donorType: 'PERSONA', name: 'Carlos Mendoza', documentNumber: '10445566', phone: '987001234', email: 'carlos@mail.com', totalDonations: 8, totalAmount: 5800, status: 'ACTIVE', lastDonationDate: '2026-05-03' },
    { id: 'DON002', donorType: 'EMPRESA', name: 'Empresa ABC S.A.', documentNumber: '20123456789', phone: '012345678', email: 'rse@abc.com', totalDonations: 12, totalAmount: 15200, status: 'ACTIVE', lastDonationDate: '2026-04-26' },
    { id: 'DON003', donorType: 'EMPRESA', name: 'Fundacion XYZ', documentNumber: '20987654321', phone: '023456789', email: 'info@xyz.org', totalDonations: 5, totalAmount: 8500, status: 'ACTIVE', lastDonationDate: '2026-04-19' },
    { id: 'DON004', donorType: 'PERSONA', name: 'Lucia Herrera', documentNumber: '40771122', phone: '955443322', email: 'lucia@mail.com', totalDonations: 3, totalAmount: 1200, status: 'ACTIVE', lastDonationDate: '2026-05-07' },
  ],
  donaciones: [
    { id: 'DNC001', donor: 'Carlos Mendoza', donationType: 'MONETARIA', amount: 500, estimatedValue: 500, campaign: 'Campaña contra el frio 2026', paymentMethod: 'YAPE', receiptIssued: true, status: 'RECEIVED', donationDate: '2026-05-07' },
    { id: 'DNC002', donor: 'Empresa ABC S.A.', donationType: 'EN_ESPECIE', amount: 0, estimatedValue: 3200, campaign: 'Mochilas para Aprender', paymentMethod: null, receiptIssued: true, status: 'RECEIVED', donationDate: '2026-05-01' },
    { id: 'DNC003', donor: 'Fundacion XYZ', donationType: 'MIXTA', amount: 2400, estimatedValue: 4100, campaign: 'Ruta Dental Comunitaria', paymentMethod: 'TRANSFERENCIA_BANCARIA', receiptIssued: false, status: 'PENDING', donationDate: '2026-05-04' },
  ],
  productos: [
    { id: 'PRD001', productCode: 'ALI-001', productName: 'Arroz familiar 5 kg', category: 'ALIMENTOS', unit: 'BOLSA', estimatedValue: 22, stock: 320, minStock: 80, status: 'ACTIVE' },
    { id: 'PRD002', productCode: 'HIG-002', productName: 'Kit higiene familiar', category: 'HIGIENE', unit: 'PAQUETE', estimatedValue: 35, stock: 42, minStock: 50, status: 'ACTIVE' },
    { id: 'PRD003', productCode: 'UTL-003', productName: 'Mochila escolar equipada', category: 'UTILES_ESCOLARES', unit: 'UNIDAD', estimatedValue: 68, stock: 196, minStock: 40, status: 'ACTIVE' },
    { id: 'PRD004', productCode: 'ROP-004', productName: 'Frazada polar', category: 'ROPA_ABRIGO', unit: 'UNIDAD', estimatedValue: 38, stock: 18, minStock: 35, status: 'ACTIVE' },
  ],
  inventario: [
    { id: 'INV001', productName: 'Arroz familiar 5 kg', productCategory: 'ALIMENTOS', warehouseLocation: 'Almacen Central', quantity: 320, unit: 'BOLSA', minStock: 80, maxStock: 600, totalValue: 7040, expirationDate: '2027-01-20', status: 'AVAILABLE' },
    { id: 'INV002', productName: 'Kit higiene familiar', productCategory: 'HIGIENE', warehouseLocation: 'Almacen Social', quantity: 42, unit: 'PAQUETE', minStock: 50, maxStock: 180, totalValue: 1470, expirationDate: '2027-09-01', status: 'LOW_STOCK' },
    { id: 'INV003', productName: 'Frazada polar', productCategory: 'ROPA_ABRIGO', warehouseLocation: 'Almacen Campañas', quantity: 18, unit: 'UNIDAD', minStock: 35, maxStock: 250, totalValue: 684, expirationDate: null, status: 'LOW_STOCK' },
    { id: 'INV004', productName: 'Mochila escolar equipada', productCategory: 'UTILES_ESCOLARES', warehouseLocation: 'Almacen Central', quantity: 196, unit: 'UNIDAD', minStock: 40, maxStock: 350, totalValue: 13328, expirationDate: null, status: 'AVAILABLE' },
  ],
  movimientos_inventario: [
    { id: 'MOV001', productName: 'Arroz familiar 5 kg', movementType: 'ENTRADA', movementReason: 'DONACION', quantity: 120, unit: 'BOLSA', previousQuantity: 200, newQuantity: 320, movementDate: '2026-05-06', beneficiaryName: null },
    { id: 'MOV002', productName: 'Kit higiene familiar', movementType: 'SALIDA', movementReason: 'DISTRIBUCION', quantity: 35, unit: 'PAQUETE', previousQuantity: 77, newQuantity: 42, movementDate: '2026-05-07', beneficiaryName: 'Rosa Medina Quispe' },
    { id: 'MOV003', productName: 'Frazada polar', movementType: 'SALIDA', movementReason: 'DISTRIBUCION', quantity: 44, unit: 'UNIDAD', previousQuantity: 62, newQuantity: 18, movementDate: '2026-05-08', beneficiaryName: 'Carlos Ruiz Torres' },
  ],
  distribuciones: [
    { id: 'DIS001', distributionNumber: 'DIS-2026-0001', distributionType: 'ENTREGA_LOCAL', beneficiaryName: 'Rosa Medina Quispe', beneficiaryDNI: '12345678', campaignName: 'Campaña contra el frio 2026', totalItems: 4, totalQuantity: 8, totalValue: 184, status: 'COMPLETED', deliveryStatus: 'ENTREGADO', distributionDate: '2026-05-05' },
    { id: 'DIS002', distributionNumber: 'DIS-2026-0002', distributionType: 'ENTREGA_DOMICILIO', beneficiaryName: 'Carlos Ruiz Torres', beneficiaryDNI: '87654321', campaignName: 'Canastas con Dignidad', totalItems: 6, totalQuantity: 14, totalValue: 246, status: 'IN_TRANSIT', deliveryStatus: 'PENDIENTE', distributionDate: '2026-05-08' },
    { id: 'DIS003', distributionNumber: 'DIS-2026-0003', distributionType: 'ENTREGA_CAMPAÑA', beneficiaryName: 'Elena Vargas Soto', beneficiaryDNI: '11223344', campaignName: 'Mochilas para Aprender', totalItems: 2, totalQuantity: 2, totalValue: 136, status: 'APPROVED', deliveryStatus: 'PENDIENTE', distributionDate: '2026-05-10' },
  ],
  finanzas: [
    { id: 'FIN001', transactionType: 'INGRESO', category: 'DONACION', amount: 2400, currency: 'PEN', description: 'Donacion Fundacion XYZ', paymentMethod: 'TRANSFERENCIA_BANCARIA', transactionDate: '2026-05-04', fiscalPeriod: '2026-05', status: 'APPROVED' },
    { id: 'FIN002', transactionType: 'INGRESO', category: 'DONACION', amount: 500, currency: 'PEN', description: 'Donacion Carlos Mendoza', paymentMethod: 'YAPE', transactionDate: '2026-05-07', fiscalPeriod: '2026-05', status: 'PAID' },
    { id: 'FIN003', transactionType: 'EGRESO', category: 'GASTO_CAMPAÑA', amount: 1900, currency: 'PEN', description: 'Insumos campaña dental', paymentMethod: 'TRANSFERENCIA_BANCARIA', transactionDate: '2026-05-06', fiscalPeriod: '2026-05', status: 'PAID' },
    { id: 'FIN004', transactionType: 'EGRESO', category: 'COMPRA', amount: 1044.01, currency: 'PEN', description: 'Compra medicamentos', paymentMethod: 'TRANSFERENCIA_BANCARIA', transactionDate: '2021-09-11', fiscalPeriod: '2021-09', status: 'PAID' },
  ],
  atencion_salud: [
    { id: 'ATE001', attentionNumber: 'ATE-2026-0001', beneficiaryName: 'Rosa Medina Quispe', beneficiaryDNI: '12345678', beneficiaryAge: 42, personalNombre: 'Dr. Juan Perez', attentionType: 'CONSULTA_GENERAL', diagnosis: 'Infeccion respiratoria leve', followUpRequired: true, status: 'COMPLETED', attentionDate: '2026-05-08' },
    { id: 'ATE002', attentionNumber: 'ATE-2026-0002', beneficiaryName: 'Carlos Ruiz Torres', beneficiaryDNI: '87654321', beneficiaryAge: 51, personalNombre: 'Dra. Andrea Garcia', attentionType: 'CONSULTA_ESPECIALIDAD', diagnosis: 'Control odontologico', followUpRequired: false, status: 'IN_PROGRESS', attentionDate: '2026-05-08' },
    { id: 'ATE003', attentionNumber: 'ATE-2026-0003', beneficiaryName: 'Elena Vargas Soto', beneficiaryDNI: '11223344', beneficiaryAge: 29, personalNombre: 'Lic. Karem Aguero', attentionType: 'CONSULTA_ESPECIALIDAD', diagnosis: 'Dolor lumbar', followUpRequired: true, status: 'PENDING', attentionDate: '2026-05-09' },
  ],
  proveedores: [
    { id: 'PRO001', providerName: 'Distribuidora Salud Total', documentType: 'RUC', documentNumber: '20600111222', phone: '015551010', email: 'ventas@saludtotal.pe', contactPerson: 'Mónica Rivas', status: 'ACTIVE' },
    { id: 'PRO002', providerName: 'Laboratorios Andinos', documentType: 'RUC', documentNumber: '20577888999', phone: '014442233', email: 'comercial@labandinos.pe', contactPerson: 'Raul Torres', status: 'ACTIVE' },
  ],
  medicamentos: [
    { id: 'MED001', denominacionComercial: 'Paracetamol 500 MG', denominacionGenerica: 'Paracetamol', categoria: 'TABLETA', laboratorio: 'Genfar', stock: 250, stockMinimo: 60, costoUnitario: 0.28, precioVenta: 0.5, vencimiento: '2026-12-30', ubicacion: 'A-01', status: 'ACTIVE' },
    { id: 'MED002', denominacionComercial: 'Cefalexina 500 MG', denominacionGenerica: 'Cefalexina', categoria: 'TABLETA', laboratorio: 'Portugal', stock: 18, stockMinimo: 35, costoUnitario: 0.34, precioVenta: 0.5, vencimiento: '2027-06-30', ubicacion: 'B-03', status: 'ACTIVE' },
    { id: 'MED003', denominacionComercial: 'Ibuprofeno 400 MG', denominacionGenerica: 'Ibuprofeno', categoria: 'TABLETA', laboratorio: 'Medifarma', stock: 180, stockMinimo: 45, costoUnitario: 0.42, precioVenta: 0.8, vencimiento: '2026-09-15', ubicacion: 'A-02', status: 'ACTIVE' },
    { id: 'MED004', denominacionComercial: 'Amoxicilina 500 MG', denominacionGenerica: 'Amoxicilina', categoria: 'CAPSULA', laboratorio: 'AC Farma', stock: 0, stockMinimo: 25, costoUnitario: 0.55, precioVenta: 1.2, vencimiento: '2026-06-10', ubicacion: 'B-01', status: 'INACTIVE' },
  ],
  tipo_cliente: [
    { id: 'TCL001', nombre: 'Beneficiario Social', descripcion: 'Tarifa subvencionada', status: 'ACTIVE' },
    { id: 'TCL002', nombre: 'Paciente Externo', descripcion: 'Tarifa regular', status: 'ACTIVE' },
    { id: 'TCL003', nombre: 'Convenio', descripcion: 'Tarifa institucional', status: 'ACTIVE' },
  ],
  terapias_precios: [
    { id: 'TPR001', tipoCliente: 'Beneficiario Social', specialty: 'Terapia Fisica', precio: 18, status: 'ACTIVE' },
    { id: 'TPR002', tipoCliente: 'Paciente Externo', specialty: 'Terapia Fisica', precio: 30, status: 'ACTIVE' },
    { id: 'TPR003', tipoCliente: 'Convenio', specialty: 'Terapia Fisica', precio: 24, status: 'ACTIVE' },
  ],
  precios_consulta: [
    { id: 'PCO001', specialty: 'Medicina General', precio: 20, status: 'ACTIVE' },
    { id: 'PCO002', specialty: 'Odontologia', precio: 25, status: 'ACTIVE' },
    { id: 'PCO003', specialty: 'Pediatria', precio: 22, status: 'ACTIVE' },
  ],
  tratamientos: [
    { id: 'TRA001', nombre: 'Profilaxis dental', specialty: 'Odontologia', precio: 45, descripcion: 'Limpieza dental preventiva', status: 'ACTIVE' },
    { id: 'TRA002', nombre: 'Curacion simple', specialty: 'Odontologia', precio: 35, descripcion: 'Restauracion dental basica', status: 'ACTIVE' },
    { id: 'TRA003', nombre: 'Terapia lumbar', specialty: 'Terapia Fisica', precio: 30, descripcion: 'Sesion de rehabilitacion lumbar', status: 'ACTIVE' },
  ],
  pruebas_laboratorio: [
    { id: 'LAB001', nombre: 'Hemograma completo', precio: 28, tipoMuestra: 'SANGRE', tiempoResultado: '24 horas', status: 'ACTIVE' },
    { id: 'LAB002', nombre: 'Glucosa basal', precio: 12, tipoMuestra: 'SANGRE', tiempoResultado: '2 horas', status: 'ACTIVE' },
    { id: 'LAB003', nombre: 'Examen de orina', precio: 15, tipoMuestra: 'ORINA', tiempoResultado: '4 horas', status: 'ACTIVE' },
  ],
  kits_laboratorio: [
    { id: 'KIT001', nombre: 'Kit control adulto mayor', pruebas: 'Hemograma, glucosa, orina', precioKit: 48, status: 'ACTIVE' },
    { id: 'KIT002', nombre: 'Kit escolar preventivo', pruebas: 'Hemograma, parasitologico', precioKit: 36, status: 'ACTIVE' },
  ],
  pacientes: [
    { id: 'PAC001', apellidos: 'Peña Fernandez', nombres: 'Carlos Ernesto', dni: '44556677', sexo: 'MASCULINO', phone: '987112233', historia: 'HC-2026-001', status: 'ACTIVE', lastVisit: '2026-05-08' },
    { id: 'PAC002', apellidos: 'Gonzalez Rios', nombres: 'María Fernanda', dni: '55667788', sexo: 'FEMENINO', phone: '966221144', historia: 'HC-2026-002', status: 'ACTIVE', lastVisit: '2026-05-07' },
    { id: 'PAC003', apellidos: 'Castro Leon', nombres: 'Sofía Isabel', dni: '66778899', sexo: 'FEMENINO', phone: '955331166', historia: 'HC-2026-003', status: 'ACTIVE', lastVisit: '2026-05-06' },
  ],
  personal_medico: [
    { id: 'PER001', apellidos: 'Perez Salinas', nombres: 'Juan Carlos', dni: '30445566', sexo: 'MASCULINO', especialidad: 'Medicina General', licencia: 'CMP-45678', phone: '988778899', status: 'ACTIVE' },
    { id: 'PER002', apellidos: 'Aguero Zamudio', nombres: 'Karem Y.', dni: '40112233', sexo: 'FEMENINO', especialidad: 'Terapia Fisica', licencia: 'CTMP-1024', phone: '944556677', status: 'ACTIVE' },
    { id: 'PER003', apellidos: 'Garcia Valdez', nombres: 'Andrea', dni: '30998877', sexo: 'FEMENINO', especialidad: 'Odontologia', licencia: 'COP-8891', phone: '933221100', status: 'ACTIVE' },
  ],
  ventas: [
    { id: 'VEN001', domain: 'FARMACIA', ticket: 'FAR-2026-05-08-018526', pacienteNombre: 'CLIENTES VARIOS', total: 20, estado: 'CONSIGNADO', tipo: 'VENDIDO', items: 'Cefalexina, Paracetamol', fecha: '2026-05-08' },
    { id: 'VEN002', domain: 'CLINICA', ticket: 'TER-2026-05-08-086561', pacienteNombre: 'Carlos Ernesto Peña Fernandez', total: 30, estado: 'CONSIGNADO', tipo: 'TERAPIA', areaNombre: 'TERAPIA FISICA', personalNombre: 'Karem Y. Aguero Zamudio', fecha: '2026-05-08' },
    { id: 'VEN003', domain: 'COMPRA', numeroCompra: '017-1403', proveedor: 'Distribuidora Salud Total', total: 1044.01, estado: 'CONSIGNADO', tipo: 'COMPRADO', items: 'Cefalexina 500 MG x 1000', fecha: '2021-09-11' },
    { id: 'VEN004', domain: 'CLINICA', ticket: 'CON-2026-05-07-000341', pacienteNombre: 'María Fernanda Gonzalez Rios', total: 25, estado: 'CONSIGNADO', tipo: 'CONSULTA', areaNombre: 'ODONTOLOGIA', personalNombre: 'Andrea Garcia Valdez', fecha: '2026-05-07' },
    { id: 'VEN005', domain: 'FARMACIA', ticket: 'FAR-2026-05-07-018500', pacienteNombre: 'Sofía Isabel Castro Leon', total: 12.4, estado: 'DONADO', tipo: 'DONADO', items: 'Ibuprofeno, Suero oral', fecha: '2026-05-07' },
  ],
};

mockDb.usuarios.push(
  { id: '68fda092d832a694a0c77a88', firebaseId: 'kR9mP2xL5nQ8wT4vY7zA', firstName: 'Maria', lastName: 'Lopez Gomez', documentType: 'DNI', documentNumber: '23456789', phone: '987654321', email: 'maria.lopez@gmail.com', username: 'maria.lopez@caritas.org.pe', role: 'COORDINADOR', lastLogin: '2026-05-20', status: 'ACTIVE', createdAt: '2025-10-07' },
  { id: '68fda093d832a694a0c77a53', firebaseId: 'pL3nQ8wT4vY7zAkR9mX2', firstName: 'Snayder', lastName: 'Garcia Perez', documentType: 'DNI', documentNumber: '34567890', phone: '912345678', email: 'snayder.garcia@gmail.com', username: 'snayder.garcia@caritas.org.pe', role: 'CONTADOR', lastLogin: '2026-05-20', status: 'ACTIVE', createdAt: '2025-11-10' },
  { id: '68fda093d832a694a0c77a54', firebaseId: 'wT4vY7zAkR9mX2pL3nQ8', firstName: 'Carlos', lastName: 'Mendoza Rojas', documentType: 'DNI', documentNumber: '72345678', phone: '912345678', email: 'carlos.mendoza@gmail.com', username: 'carlos.mendoza@caritas.org.pe', role: 'VOLUNTARIO', lastLogin: '2026-05-20', status: 'ACTIVE', createdAt: '2025-02-10' }
);

mockDb.beneficiarios.push(
  { id: '68fda092d832a694a0c77a87', dni: '43256789', firstName: 'Rosa', lastName: 'Huaman Quispe', birthDate: '1978-06-22', gender: 'FEMENINO', phone: '987654321', email: 'rosa.huaman@gmail.com', district: 'San Vicente', vulnerabilityLevel: 'ALTA', familyMembers: 5, monthlyIncome: 850, housingType: 'ALQUILADA', hasElectricity: true, hasWater: true, hasSewage: false, observations: 'Familia con 3 menores de edad, madre soltera', status: 'ACTIVE', registeredAt: '2025-03-10' },
  { id: '68fda093d832a694a0c77a56', dni: '56789012', firstName: 'Pedro', lastName: 'Sanchez Vargas', birthDate: '1965-09-10', gender: 'MASCULINO', phone: '945678901', email: null, district: 'San Vicente', vulnerabilityLevel: 'MEDIA', familyMembers: 3, monthlyIncome: 1200, housingType: 'PROPIA', hasElectricity: true, hasWater: true, hasSewage: true, observations: 'Adulto mayor con esposa, requiere apoyo alimentario', status: 'ACTIVE', registeredAt: '2025-04-15' }
);

mockDb.voluntarios.push(
  { id: '68fda092d832a694a0c77a89', dni: '72345678', firstName: 'Carlos', lastName: 'Mendoza Rojas', birthDate: '1995-05-15', gender: 'MASCULINO', phone: '912345678', email: 'carlos.mendoza@gmail.com', district: 'San Vicente', skills: 'Atencion al publico, eventos, primeros auxilios', availability: 'LUN/MIE/VIE 09:00-13:00', hoursWorked: 120, rating: 4.8, campaigns: 2, emergencyContact: 'Pedro Mendoza - Padre', status: 'ACTIVE', since: '2025-02-10' },
  { id: '68fda093d832a694a0c77a57', dni: '65432109', firstName: 'Lucia', lastName: 'Fernandez Castro', birthDate: '1992-08-20', gender: 'FEMENINO', phone: '956789012', email: 'lucia.fernandez@gmail.com', district: 'San Vicente', skills: 'Enfermeria, primeros auxilios, atencion medica basica', availability: 'MAR/JUE/SAB 14:00-18:00', hoursWorked: 85, rating: 5, campaigns: 1, emergencyContact: 'Roberto Fernandez - Esposo', status: 'ACTIVE', since: '2025-05-20' }
);

mockDb.proyectos.push({
  id: '68fda093d832a694a0c77a04',
  projectName: 'Proyecto Educacion Digital',
  specialty: 'Educacion',
  description: 'Capacitacion en herramientas digitales para jovenes',
  objectives: 'Capacitar a 100 jovenes en competencias digitales basicas',
  targetPopulation: 'Jovenes de 15 a 25 anos en situacion vulnerable',
  startDate: '2026-03-01',
  endDate: '2026-08-31',
  budget: 25000,
  spent: 12500,
  fundingSource: 'Donacion Empresa Tech SAC',
  projectManager: 'Maria Lopez Gomez',
  location: 'San Vicente de Canete',
  activities: 'Taller de Microsoft Office, 25 beneficiarios',
  status: 'IN_PROGRESS',
});

mockDb.campanas.push(
  { id: '68fda092d832a694a0c77a90', campaignName: 'Campaña contra el frio 2026', campaignNumber: 'CAMP-SOC-2026-003', domain: 'SOCIAL', campaignType: 'SOLIDARIA', description: 'Recoleccion de frazadas y ropa de abrigo para familias vulnerables', location: 'San Vicente de Canete', goalAmount: 50000, currentAmount: 32500, goalBeneficiaries: 500, currentBeneficiaries: 320, projectId: '68fda093d832a694a0c77a04', volunteers: 'Carlos Mendoza Rojas, Lucia Fernandez Castro', budget: 9000, spent: 5200, status: 'ACTIVE', startDate: '2026-05-01', endDate: '2026-07-31' },
  { id: '68fda093d832a694a0c77a08', campaignName: 'Campaña de Salud Visual 2026', campaignNumber: 'CAMP-SALUD-2026-001', domain: 'SALUD', campaignTypeSalud: 'OFTALMOLOGIA', description: 'Atencion oftalmologica gratuita para adultos mayores', location: 'Centro de Salud San Vicente', targetBeneficiaries: 200, actualBeneficiaries: 150, budget: 15000, spent: 12500, medicalStaff: 'Dr. Carlos Ruiz Mendoza, Dra. Ana Torres Vega', status: 'COMPLETED', startDate: '2026-06-01', endDate: '2026-06-15' },
  { id: '68fda093d832a694a0c77a72', campaignName: 'Campaña de Vacunacion Infantil 2026', campaignNumber: 'CAMP-SALUD-2026-002', domain: 'SALUD', campaignTypeSalud: 'VACUNACION', description: 'Vacunacion gratuita para ninos menores de 5 anos', location: 'Local Caritas San Vicente', targetBeneficiaries: 300, actualBeneficiaries: 280, budget: 8000, spent: 7200, medicalStaff: 'Enf. Maria Gonzalez, Enf. Rosa Martinez', status: 'COMPLETED', startDate: '2026-08-01', endDate: '2026-08-05' }
);

mockDb.donantes.push(
  { id: '68fda092d832a694a0c77a96', donorType: 'PERSONA', documentType: 'DNI', documentNumber: '45678912', name: 'Carlos Ramirez Torres', phone: '987654323', email: 'carlos.ramirez@gmail.com', district: 'San Vicente', totalDonations: 15, totalAmount: 7500, status: 'ACTIVE', lastDonationDate: '2025-05-15' },
  { id: '68fda093d832a694a0c77a58', donorType: 'EMPRESA', documentType: 'RUC', documentNumber: '20123456789', name: 'Empresa ABC SAC', companyName: 'Empresa ABC SAC', ruc: '20123456789', phone: '015812345', email: 'donaciones@empresaabc.com.pe', district: 'San Vicente', totalDonations: 8, totalAmount: 45000, status: 'ACTIVE', lastDonationDate: '2026-05-10' }
);

mockDb.productos.push(
  { id: '68fda092d832a694a0c77a93', productCode: 'ALI-001', productName: 'Arroz', category: 'ALIMENTOS', subcategory: 'GRANOS', description: 'Arroz blanco de primera calidad', unit: 'KG', estimatedValue: 4.5, expirationDays: 365, requiresRefrigeration: false, stock: 150, minStock: 20, status: 'ACTIVE' },
  { id: '68fda093d832a694a0c77a20', productCode: 'ALI-002', productName: 'Aceite Vegetal', category: 'ALIMENTOS', subcategory: 'ACEITES', description: 'Aceite vegetal de cocina', unit: 'LITRO', estimatedValue: 12, expirationDays: 540, requiresRefrigeration: false, stock: 80, minStock: 15, status: 'ACTIVE' },
  { id: '68fda093d832a694a0c77a21', productCode: 'ROP-001', productName: 'Frazada Polar', category: 'ROPA_ABRIGO', subcategory: 'FRAZADAS', description: 'Frazada polar 1.5 plazas', unit: 'UNIDAD', estimatedValue: 25, expirationDays: null, requiresRefrigeration: false, stock: 500, minStock: 50, status: 'ACTIVE' },
  { id: '68fda093d832a694a0c77a22', productCode: 'HIG-001', productName: 'Jabon de Tocador', category: 'HIGIENE', subcategory: 'LIMPIEZA_PERSONAL', description: 'Jabon antibacterial', unit: 'UNIDAD', estimatedValue: 2.5, expirationDays: 730, requiresRefrigeration: false, stock: 260, minStock: 40, status: 'ACTIVE' },
  { id: '68fda093d832a694a0c77a23', productCode: 'ESC-001', productName: 'Cuaderno 100 hojas', category: 'UTILES_ESCOLARES', subcategory: 'CUADERNOS', description: 'Cuaderno cuadriculado 100 hojas', unit: 'UNIDAD', estimatedValue: 5, expirationDays: null, requiresRefrigeration: false, stock: 420, minStock: 60, status: 'ACTIVE' }
);

mockDb.donaciones.push(
  { id: '68fda092d832a694a0c77a94', donor: 'Carlos Ramirez Torres', donorId: '68fda092d832a694a0c77a96', donationType: 'MONETARIA', amount: 5000, estimatedValue: 5000, currency: 'PEN', paymentMethod: 'TRANSFERENCIA_BANCARIA', transactionReference: 'TRX-2025-001234', campaign: 'Campaña contra el frio 2026', description: 'Donacion para campaña contra el frio 2026', receiptNumber: 'REC-2025-001234', receiptIssued: true, status: 'RECEIVED', donationDate: '2025-05-15' },
  { id: '68fda093d832a694a0c77a25', donor: 'Empresa textil local', donorId: '68fda093d832a694a0c77a26', donationType: 'EN_ESPECIE', amount: 0, estimatedValue: 12500, currency: 'PEN', campaign: 'Campaña contra el frio 2026', description: 'Donacion de 500 frazadas polares', items: 'Frazada Polar x500', receiptNumber: 'REC-2025-001245', receiptIssued: true, deliveryStatus: 'ENTREGADO', status: 'RECEIVED', donationDate: '2025-05-20' }
);

mockDb.finanzas.push(
  { id: '68fda092d832a694a0c77a97', transactionType: 'INGRESO', category: 'DONACION', amount: 5000, currency: 'PEN', description: 'Donacion de empresa ABC SAC para proyecto educativo', referenceType: 'DONATION', paymentMethod: 'TRANSFERENCIA_BANCARIA', transactionDate: '2025-05-15', fiscalPeriod: '2025-05', receiptNumber: 'REC-2025-001234', status: 'APPROVED' },
  { id: '68fda093d832a694a0c77a28', transactionType: 'EGRESO', category: 'GASTO_OPERATIVO', amount: 3500, currency: 'PEN', description: 'Compra de alimentos para comedores populares', referenceType: 'PURCHASE_ORDER', paymentMethod: 'EFECTIVO', supplier: 'Distribuidora de Alimentos SAC', supplierRUC: '20123456789', transactionDate: '2025-05-18', fiscalPeriod: '2025-05', invoiceNumber: 'F001-00012345', status: 'PAID' }
);

mockDb.inventario.push({
  id: '68fda092d832a694a0c77a92',
  productName: 'Arroz',
  productCode: 'ALI-001',
  productCategory: 'ALIMENTOS',
  warehouseLocation: 'Almacen Principal - Estante A3',
  quantity: 150,
  unit: 'KG',
  minStock: 20,
  maxStock: 500,
  averageCost: 4.5,
  totalValue: 675,
  expirationDate: '2026-12-31',
  batchNumber: 'LOTE-2025-001',
  lastEntryDate: '2025-05-15',
  lastExitDate: '2025-05-20',
  status: 'AVAILABLE',
  notes: 'Producto de alta rotacion',
});

mockDb.movimientos_inventario.push(
  { id: '68fda093d832a694a0c77a30', inventoryId: '68fda092d832a694a0c77a92', productName: 'Arroz', movementType: 'ENTRADA', movementReason: 'DONACION', quantity: 50, unit: 'KG', unitCost: 4.5, totalCost: 225, referenceType: 'DONATION', previousQuantity: 100, newQuantity: 150, batchNumber: 'LOTE-2025-001', expirationDate: '2026-12-31', movementDate: '2025-05-15', beneficiaryName: null },
  { id: '68fda093d832a694a0c77a31', inventoryId: '68fda092d832a694a0c77a92', productName: 'Arroz', movementType: 'SALIDA', movementReason: 'DISTRIBUCION', quantity: 5, unit: 'KG', referenceType: 'DISTRIBUTION', previousQuantity: 150, newQuantity: 145, beneficiaryName: 'Rosa Huaman Quispe', movementDate: '2025-05-20' },
  { id: '68fda093d832a694a0c77a32', inventoryId: '68fda092d832a694a0c77a92', productName: 'Arroz', movementType: 'AJUSTE', movementReason: 'AJUSTE_INVENTARIO', quantity: 2, unit: 'KG', referenceType: 'ADJUSTMENT', previousQuantity: 145, newQuantity: 143, beneficiaryName: null, movementDate: '2025-05-22', notes: 'Ajuste por merma en conteo fisico' }
);

mockDb.distribuciones.push({
  id: '68fda093d832a694a0c77a02',
  distributionNumber: 'DIST-2025-00123',
  distributionType: 'ENTREGA_DOMICILIO',
  beneficiaryName: 'Rosa Huaman Quispe',
  beneficiaryDNI: '43256789',
  beneficiaryPhone: '987654321',
  campaignName: 'Campaña contra el frio 2026',
  volunteerName: 'Carlos Mendoza Rojas',
  district: 'San Vicente',
  totalItems: 3,
  totalQuantity: 9,
  totalValue: 96.5,
  deliveryStatus: 'ENTREGADO',
  status: 'COMPLETED',
  distributionDate: '2025-05-20',
  deliveryNotes: 'Entrega realizada exitosamente, beneficiaria muy agradecida',
});

mockDb.atencion_salud.push(
  { id: '68fda093d832a694a0c77a09', attentionNumber: 'ATN-2026-00001', beneficiaryName: 'Rosa Huaman Quispe', beneficiaryDNI: '43256789', beneficiaryAge: 48, personalNombre: 'Dr. Carlos Ruiz Mendoza', attentionType: 'CONSULTA_GENERAL', vitalSigns: 'PA 120/80, T 36.5, peso 65kg', symptoms: 'Dolor de cabeza, malestar general', diagnosis: 'Gripe comun', treatment: 'Reposo y medicacion', medicinesProvided: 'Paracetamol 500mg x10', followUpRequired: false, followUpDate: null, observations: 'Paciente en buen estado', status: 'COMPLETED', attentionDate: '2026-06-05' },
  { id: '68fda093d832a694a0c77a69', attentionNumber: 'ATN-2026-00045', beneficiaryName: 'Luis Perez Gomez', beneficiaryDNI: '78901234', beneficiaryAge: 8, personalNombre: 'Dra. Ana Torres Vega', attentionType: 'CONSULTA_PEDIATRICA', vitalSigns: 'PA 90/60, T 37.2, peso 28kg', symptoms: 'Tos, fiebre leve', diagnosis: 'Infeccion respiratoria leve', treatment: 'Jarabe para la tos y reposo', medicinesProvided: 'Jarabe para la tos x1', followUpRequired: true, followUpDate: '2026-07-17', observations: 'Control en una semana', status: 'COMPLETED', attentionDate: '2026-07-10' }
);

mockDb.proveedores.push(
  { id: 'PRV003', providerName: 'MEDICOS & FISIOTERAPEUTAS FISIOAPAIN EIRL', documentType: 'RUC', documentNumber: '20451640047', phone: '952849568', email: 'info@fioapain.com.pe', address: 'CALLE AYACUCHO N 406 - ICA', contactPerson: 'Administracion', status: 'ACTIVE' },
  { id: 'PRV004', providerName: 'DISTRIBUIDORA FARMASUR EIRL', documentType: 'RUC', documentNumber: '20521386551', phone: '989575834', email: 'NELIAS@DISTRIBUIDORAFARMASUR.COM', address: 'CAL FIDEL OLIVOS ESCUDERO N 191 DPTO 401 - SAN MIGUEL', contactPerson: 'Ventas', status: 'ACTIVE' },
  { id: 'PRV005', providerName: 'SERVICIO DE MEDICINAS PRO VIDA', documentType: 'RUC', documentNumber: '20126098503', phone: '12631235', email: 'ventas@smprovida.com', address: 'Jr. San Martin N 102 Urb. Oyague Lima', contactPerson: 'Ventas', status: 'ACTIVE' }
);

mockDb.medicamentos.push(
  { id: 'MED005', denominacionComercial: 'SECTALON - SODIUM HYALURONATE', denominacionGenerica: 'SODIUM HYALURONATE', categoria: 'INYECTABLE', laboratorio: 'CUBAPARMA', stock: 1, stockMinimo: 2, costoUnitario: 0, precioVenta: 1590, vencimiento: '2028-07-31', ubicacion: '--', status: 'ACTIVE' },
  { id: 'MED006', denominacionComercial: 'ARAGAN - HIALURONATO DE SODIO 20MG / 2ML', denominacionGenerica: 'HIALURONATO DE SODIO', categoria: 'INYECTABLE', laboratorio: 'CUBAPARMA', stock: 2, stockMinimo: 2, costoUnitario: 0, precioVenta: 750, vencimiento: '2027-10-17', ubicacion: '--', status: 'ACTIVE' },
  { id: 'MED007', denominacionComercial: 'LOSARTAN POTASICO 50 MG', denominacionGenerica: 'LOSARTAN', categoria: 'TABLETA', laboratorio: 'PORTUGAL', stock: 65, stockMinimo: 20, costoUnitario: 0.12, precioVenta: 0.35, vencimiento: '2028-05-31', ubicacion: 'B5', status: 'ACTIVE' },
  { id: 'MED008', denominacionComercial: 'IRBESARTAN 300 MG', denominacionGenerica: 'IRBESARTAN', categoria: 'TABLETA', laboratorio: 'LABOGEN', stock: 10, stockMinimo: 15, costoUnitario: 0.3, precioVenta: 0.8, vencimiento: '2027-11-30', ubicacion: 'C2', status: 'ACTIVE' }
);

mockDb.tipo_cliente.push(
  { id: 'TCL004', nombre: 'TERAPIA FISICA COMPLETA', descripcion: 'Paquete de sesiones completas', status: 'ACTIVE' },
  { id: 'TCL005', nombre: 'CASO SOCIAL 3', descripcion: 'Tarifa social prioritaria', status: 'ACTIVE' },
  { id: 'TCL006', nombre: 'SERVICIO DE CAPACITACION 50%', descripcion: 'Descuento institucional', status: 'ACTIVE' }
);

mockDb.terapias_precios.push(
  { id: 'TPR004', tipoCliente: 'NIÑO', specialty: 'CENTRO DE ESTIMULACION TEMPRANA - LA GUARDERIA', precio: 150, status: 'ACTIVE' },
  { id: 'TPR005', tipoCliente: 'PAQUETE NIÑO - CARITAS', specialty: 'TERAPIA FISICA', precio: 230, status: 'ACTIVE' },
  { id: 'TPR006', tipoCliente: 'ADELANTO - GUARDERIA', specialty: 'CENTRO DE ESTIMULACION TEMPRANA - LA GUARDERIA', precio: 100, status: 'ACTIVE' }
);

mockDb.precios_consulta.push(
  { id: 'PCO004', specialty: 'NEUROPEDIATRIA - CAMPAÑA', precio: 50, status: 'ACTIVE' },
  { id: 'PCO005', specialty: 'MEDICINA GENERAL - ITALIA', precio: 15, status: 'ACTIVE' },
  { id: 'PCO006', specialty: 'GINECOLOGIA - CAMPAÑA', precio: 20, status: 'ACTIVE' }
);

mockDb.tratamientos.push(
  { id: 'TRA004', nombre: 'TERAPIA TRANSCRANIAL', specialty: 'NEUROPEDIATRIA - CAMPAÑA', precio: 350, descripcion: 'Procedimiento terapeutico neurologico', status: 'ACTIVE' },
  { id: 'TRA005', nombre: 'SELLANTE', specialty: 'ODONTOLOGIA', precio: 50, descripcion: 'Tratamiento odontologico preventivo', status: 'ACTIVE' },
  { id: 'TRA006', nombre: 'REFLEXOLOGIA', specialty: 'PODOLOGIA', precio: 60, descripcion: 'Tratamiento de podologia', status: 'ACTIVE' }
);

mockDb.pruebas_laboratorio.push(
  { id: 'LAB004', nombre: 'VITAMINA B12', precio: 70, tipoMuestra: 'SANGRE', tiempoResultado: '24 horas', status: 'ACTIVE' },
  { id: 'LAB005', nombre: 'PROMOCION 4 : CHEQUEO BASICO', precio: 48, tipoMuestra: 'SANGRE', tiempoResultado: '24 horas', status: 'ACTIVE' },
  { id: 'LAB006', nombre: 'BACILOSCOPIA - BK', precio: 40, tipoMuestra: 'ESPUTO', tiempoResultado: '48 horas', status: 'ACTIVE' }
);

mockDb.kits_laboratorio.push(
  { id: 'KIT003', nombre: 'prueba Coagulacion', pruebas: 'TP, TTPA, INR', precioKit: 65, status: 'ACTIVE' },
  { id: 'KIT004', nombre: 'prueba Lipidico', pruebas: 'Colesterol total, HDL, LDL, trigliceridos', precioKit: 52, status: 'ACTIVE' },
  { id: 'KIT005', nombre: 'prueba Renal', pruebas: 'Urea, creatinina, acido urico', precioKit: 46, status: 'ACTIVE' }
);

mockDb.pacientes.push(
  { id: 'PAC004', apellidos: 'TAPULLIMA UOIACHIHUA', nombres: 'LORENA', dni: '80695316', sexo: 'FEMENINO', nacimiento: '2012-12-21', historia: 'Sin Historia', status: 'ACTIVE', lastVisit: '2026-05-08' },
  { id: 'PAC005', apellidos: 'CAMACHO SALAS', nombres: 'SEBASTIAN ANDY', dni: '93667714', sexo: 'MASCULINO', nacimiento: '2023-12-30', historia: 'Sin Historia', status: 'ACTIVE', lastVisit: '2026-05-08' },
  { id: 'PAC006', apellidos: 'MIRANDA CHUMPITAZ', nombres: 'LUIS JOSE', dni: '46637928', sexo: 'MASCULINO', nacimiento: '1989-01-02', historia: 'Sin Historia', status: 'ACTIVE', lastVisit: '2026-05-08' }
);

mockDb.personal_medico.push(
  { id: 'PER004', apellidos: 'FACHIN', nombres: 'DEBORA', dni: '00000001', sexo: 'FEMENINO', especialidad: 'Medicina General', licencia: 'CMP-00001', phone: '900000001', status: 'ACTIVE' },
  { id: 'PER005', apellidos: 'CARHUAS', nombres: 'MARVIN', dni: '11112222', sexo: 'MASCULINO', especialidad: 'Cardiologia', licencia: 'CMP-11122', phone: '900000002', status: 'ACTIVE' },
  { id: 'PER006', apellidos: 'DE LA CRUZ BAUTISTA', nombres: 'JULIA CONSUELO', dni: '21423177', sexo: 'FEMENINO', especialidad: 'Pediatria', licencia: 'CMP-21423', phone: '900000003', status: 'ACTIVE' }
);

mockDb.ventas.push(
  { id: 'VEN006', domain: 'FARMACIA', ticket: 'FAR-2026-05-08-018527', pacienteNombre: 'CLIENTES VARIOS', total: 2, estado: 'CONSIGNADO', tipo: 'VENDIDO', items: 'Paracetamol 500 MG', fecha: '2026-05-08' },
  { id: 'VEN007', domain: 'FARMACIA', ticket: 'FAR-2026-05-08-018528', pacienteNombre: 'CLIENTES VARIOS', total: 2, estado: 'CONSIGNADO', tipo: 'VENDIDO', items: 'Ibuprofeno 800 MG', fecha: '2026-05-08' },
  { id: 'VEN008', domain: 'FARMACIA', ticket: 'FAR-2026-05-08-018529', pacienteNombre: 'CLIENTES VARIOS', total: 13.5, estado: 'CONSIGNADO', tipo: 'VENDIDO', items: 'Omeprazol 20MG', fecha: '2026-05-08' },
  { id: 'VEN009', domain: 'CLINICA', ticket: 'TRAT-2026-05-08-03339', pacienteNombre: 'VALENTIN DARIEN CACERES SILVA', total: 50, estado: 'DONADO', tipo: 'TRATAMIENTO', areaNombre: 'PODOLOGIA', personalNombre: 'Luz Milagros Acuña Martinez', usaTarjeta: false, fecha: '2026-05-08' },
  { id: 'VEN010', domain: 'CLINICA', ticket: 'TER-2026-05-08-086562', pacienteNombre: 'BERTHA RAMOS ARMAS', total: 30, estado: 'CONSIGNADO', tipo: 'TERAPIA', areaNombre: 'TERAPIA FISICA', personalNombre: 'Karem Y. Aguero Zamudio', usaTarjeta: false, fecha: '2026-05-08' },
  { id: 'VEN011', domain: 'CLINICA', ticket: 'TER-2026-05-08-086563', pacienteNombre: 'NANCY ISABEL QUISPE CHALCO', total: 30, estado: 'CONSIGNADO', tipo: 'TERAPIA', areaNombre: 'TERAPIA FISICA', personalNombre: 'Karem Y. Aguero Zamudio', usaTarjeta: false, fecha: '2026-05-08' },
  { id: 'VEN014', domain: 'CLINICA', ticket: 'CON-2026-05-08-010245', pacienteNombre: 'ALICIA GENOVEVA SANDOVAL QUISPE', total: 20, estado: 'CONSIGNADO', tipo: 'CONSULTA', areaNombre: 'MEDICINA GENERAL', personalNombre: 'Debora Fachin', usaTarjeta: false, fecha: '2026-05-08' },
  { id: 'VEN015', domain: 'CLINICA', ticket: 'CON-2026-05-08-010246', pacienteNombre: 'JUAN FLORES CCENCHO', total: 30, estado: 'CONSIGNADO', tipo: 'CONSULTA', areaNombre: 'PEDIATRIA', personalNombre: 'Julia Consuelo De La Cruz Bautista', usaTarjeta: true, fecha: '2026-05-08' },
  { id: 'VEN016', domain: 'CLINICA', ticket: 'LAB-2026-05-08-004521', pacienteNombre: 'LUCIANA STEPHANY JURO CORAQUILLO', total: 70, estado: 'CONSIGNADO', tipo: 'LABORATORIO', areaNombre: 'LABORATORIO CLINICO', personalNombre: 'Equipo Laboratorio', usaTarjeta: false, items: 'Vitamina B12', fecha: '2026-05-08' },
  { id: 'VEN017', domain: 'CLINICA', ticket: 'LAB-2026-05-08-004522', pacienteNombre: 'ANALI GUADALUPE LUYO CARDENAS', total: 48, estado: 'CONSIGNADO', tipo: 'LABORATORIO', areaNombre: 'LABORATORIO CLINICO', personalNombre: 'Equipo Laboratorio', usaTarjeta: true, items: 'Chequeo Basico', fecha: '2026-05-08' },
  { id: 'VEN012', domain: 'COMPRA', numeroCompra: '017-1402', proveedor: 'SERVICIO DE MEDICINAS PRO VIDA', total: 1520, estado: 'CONSIGNADO', tipo: 'COMPRADO', registradoPor: 'PAULA DEL CARMEN', items: 'Medicamentos varios', fecha: '2021-09-11' },
  { id: 'VEN013', domain: 'COMPRA', numeroCompra: '017-1337', proveedor: 'SERVICIO DE MEDICINAS PRO VIDA', total: 224, estado: 'REVOCADO', tipo: 'COMPRADO', registradoPor: 'PAULA DEL CARMEN', items: 'Medicamentos varios', fecha: '2021-09-11' }
);

mockDb.ranking_ventas = [
  { id: '1', rank: 1, stock: 65, medicamento: 'LOSARTAN POTASICO 50 MG', laboratorio: 'PORTUGAL', vendidos: 50, status: 'ACTIVE' },
  { id: '2', rank: 2, stock: 10, medicamento: 'IRBESARTAN 300 MG', laboratorio: 'LABOGEN', vendidos: 40, status: 'ACTIVE' },
  { id: '3', rank: 3, stock: 18, medicamento: 'ACIDO FOLICO 0.5 MG', laboratorio: 'PORTUGAL', vendidos: 31, status: 'ACTIVE' },
  { id: '4', rank: 4, stock: 150, medicamento: 'GABAPENTINA 300 MG', laboratorio: 'LABOT', vendidos: 30, status: 'ACTIVE' },
  { id: '5', rank: 5, stock: 160, medicamento: 'ATORVASTATINA 20MG - ATORHEALTH HG', laboratorio: 'AXIER GROUP', vendidos: 30, status: 'ACTIVE' },
  { id: '6', rank: 6, stock: 99, medicamento: 'OMEPRAZOL 20MG', laboratorio: 'PHARMA GENERICOS', vendidos: 30, status: 'ACTIVE' },
  { id: '7', rank: 7, stock: 160, medicamento: 'IRBESARTAN 150 MG', laboratorio: 'LABOGEN', vendidos: 30, status: 'ACTIVE' },
  { id: '8', rank: 8, stock: 163, medicamento: 'PARACETAMOL 500 MG', laboratorio: 'CORPORACION FS', vendidos: 30, status: 'ACTIVE' },
  { id: '9', rank: 9, stock: 139, medicamento: 'IBUPROFENO 800 MG', laboratorio: 'PORTUGAL', vendidos: 20, status: 'ACTIVE' },
  { id: '10', rank: 10, stock: 30, medicamento: 'VITAMINA E 400UI', laboratorio: 'PHARMA GENERICOS', vendidos: 20, status: 'ACTIVE' },
];

export const legacyStats = {
  usuarios: { total: 49, active: 11, inactive: 38 },
  proveedores: { total: 9, active: 9, inactive: 0 },
  pacientes: { total: 13632, active: 13621, inactive: 11 },
  medicos: { total: 83, active: 44, inactive: 39 },
  especialidades: { total: 41, active: 36, inactive: 5 },
  tipoCliente: { total: 48, active: 47, inactive: 1 },
  preciosTerapias: { total: 118, active: 104, inactive: 14 },
  tratamientos: { total: 53, active: 42, inactive: 11 },
  pruebasLab: { total: 158, active: 105, inactive: 53 },
  kitsLab: { total: 5, active: 5, inactive: 0 },
  medicamentos: { total: 959, active: 414, inactive: 545 },
  productos: { total: 147, active: 53, inactive: 94 },
  compras: { total: 75, consignado: 72, revocado: 3, donado: 6 },
  ventaMedicamentos: { total: 57.5, consignado: 57.5, donado: 0, revocado: 0, from: '2026-05-08', to: '2026-05-09' },
  ventaTratamientos: { total: 50, consignado: 0, donado: 50, revocado: 0, from: '2026-05-08', to: '2026-05-09' },
  ventaTerapias: { total: 580, consignado: 580, donado: 0, revocado: 0, from: '2026-05-08', to: '2026-05-09' },
};

export const moduleMetricOverrides = {
  usuarios: { total: 49, ok: 11, inactive: 38, alert: 38, totalLabel: 'Usuarios', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Revisar' },
  proveedores: { total: 9, ok: 9, inactive: 0, alert: 0, totalLabel: 'Proveedores', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Alertas' },
  pacientes: { total: 13632, ok: 13621, inactive: 11, alert: 11, totalLabel: 'Pacientes', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Revisar' },
  medicos: { total: 83, ok: 44, inactive: 39, alert: 39, totalLabel: 'Medicos', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Inactivos' },
  'personal-medico': { total: 83, ok: 44, inactive: 39, alert: 39, totalLabel: 'Medicos', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Inactivos' },
  especialidades: { total: 41, ok: 36, inactive: 5, alert: 5, totalLabel: 'Especialidades', okLabel: 'Activas', inactiveLabel: 'Inactivas', alertLabel: 'Revisar' },
  'adm-especialidades': { total: 41, ok: 36, inactive: 5, alert: 5, totalLabel: 'Especialidades', okLabel: 'Activas', inactiveLabel: 'Inactivas', alertLabel: 'Revisar' },
  'tipo-cliente': { total: 48, ok: 47, inactive: 1, alert: 1, totalLabel: 'Tipo clientes', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Revisar' },
  'precios-terapias': { total: 118, ok: 104, inactive: 14, alert: 14, totalLabel: 'Tarifas', okLabel: 'Activas', inactiveLabel: 'Inactivas', alertLabel: 'Revisar' },
  tratamientos: { total: 53, ok: 42, inactive: 11, alert: 11, totalLabel: 'Tratamientos', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Revisar' },
  'pruebas-lab': { total: 158, ok: 105, inactive: 53, alert: 53, totalLabel: 'Pruebas', okLabel: 'Activas', inactiveLabel: 'Inactivas', alertLabel: 'Revisar' },
  'kits-lab': { total: 5, ok: 5, inactive: 0, alert: 0, totalLabel: 'Kits', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Alertas' },
  medicamentos: { total: 959, ok: 414, inactive: 545, alert: 545, totalLabel: 'Medicamentos', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Revisar' },
  productos: { total: 147, ok: 53, inactive: 94, alert: 94, totalLabel: 'Productos', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Revisar' },
  compras: { total: 75, ok: 72, inactive: 3, alert: 6, totalLabel: 'Compras', okLabel: 'Consignadas', inactiveLabel: 'Revocadas', alertLabel: 'Donadas' },
  'compras-farmacia': { total: 75, ok: 72, inactive: 3, alert: 6, totalLabel: 'Compras', okLabel: 'Consignadas', inactiveLabel: 'Revocadas', alertLabel: 'Donadas' },
  'ventas-farmacia': { total: 57.5, ok: 57.5, inactive: 0, alert: 0, money: true, totalLabel: 'Total', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  'ventas-farmacia2': { total: 57.5, ok: 57.5, inactive: 0, alert: 0, money: true, totalLabel: 'Total', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  'rep-venta-medicamentos': { total: 57.5, ok: 57.5, inactive: 0, alert: 0, money: true, totalLabel: 'Total', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  'rep-venta-tratamientos': { total: 50, ok: 0, inactive: 50, alert: 0, money: true, totalLabel: 'Total', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  'rep-venta-terapias': { total: 580, ok: 580, inactive: 0, alert: 0, money: true, totalLabel: 'Total', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  terapias: { total: 580, ok: 580, inactive: 0, alert: 0, money: true, totalLabel: 'Ventas terapia', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  'cli-personal-medico': { total: 83, ok: 44, inactive: 39, alert: 39, totalLabel: 'Medicos', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Inactivos' },
  'prod-tratamientos': { total: 53, ok: 42, inactive: 11, alert: 11, totalLabel: 'Tratamientos', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Revisar' },
  'prod-consultas': { total: 6, ok: 6, inactive: 0, alert: 0, totalLabel: 'Consultas', okLabel: 'Activas', inactiveLabel: 'Inactivas', alertLabel: 'Alertas' },
  'prod-terapias': { total: 118, ok: 104, inactive: 14, alert: 14, totalLabel: 'Terapias', okLabel: 'Activas', inactiveLabel: 'Inactivas', alertLabel: 'Revisar' },
  'prod-medicamentos': { total: 959, ok: 414, inactive: 545, alert: 545, totalLabel: 'Medicamentos', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Revisar' },
  'prod-kits-lab': { total: 5, ok: 5, inactive: 0, alert: 0, totalLabel: 'Kits', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Alertas' },
  'rep-compras': { total: 75, ok: 72, inactive: 3, alert: 6, totalLabel: 'Compras', okLabel: 'Consignadas', inactiveLabel: 'Revocadas', alertLabel: 'Donadas' },
  'rep-ventas': { total: 57.5, ok: 57.5, inactive: 0, alert: 0, money: true, totalLabel: 'Total', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  'rep-laboratorio': { total: 118, ok: 118, inactive: 0, alert: 0, money: true, totalLabel: 'Total', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  'rep-productos': { total: 147, ok: 53, inactive: 94, alert: 94, totalLabel: 'Productos', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Revisar' },
  'rep-tratamientos': { total: 50, ok: 0, inactive: 50, alert: 0, money: true, totalLabel: 'Total', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  'rep-consultas': { total: 50, ok: 50, inactive: 0, alert: 0, money: true, totalLabel: 'Total', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  'rep-terapias': { total: 580, ok: 580, inactive: 0, alert: 0, money: true, totalLabel: 'Total', okLabel: 'Consignado', inactiveLabel: 'Donado', alertLabel: 'Revocado' },
  'adm-pruebas-lab': { total: 158, ok: 105, inactive: 53, alert: 53, totalLabel: 'Pruebas', okLabel: 'Activas', inactiveLabel: 'Inactivas', alertLabel: 'Revisar' },
  'adm-kits-lab': { total: 5, ok: 5, inactive: 0, alert: 0, totalLabel: 'Kits', okLabel: 'Activos', inactiveLabel: 'Inactivos', alertLabel: 'Alertas' },
  'adm-compras': { total: 75, ok: 72, inactive: 3, alert: 6, totalLabel: 'Compras', okLabel: 'Consignadas', inactiveLabel: 'Revocadas', alertLabel: 'Donadas' },
};

export const moduleDefinitions = {
  usuarios: { collection: 'usuarios', title: 'Usuarios', description: 'Roles, accesos y actividad de cuenta', columns: [['firstName', 'Nombre'], ['lastName', 'Apellido'], ['phone', 'Telefono'], ['email', 'Correo'], ['role', 'Rol'], ['status', 'Estado']] },
  beneficiarios: { collection: 'beneficiarios', title: 'Beneficiarios', description: 'Personas atendidas por programas sociales', columns: [['fullName', 'Nombre'], ['dni', 'DNI'], ['district', 'Distrito'], ['vulnerabilityLevel', 'Vulnerabilidad'], ['familyMembers', 'Familia'], ['status', 'Estado']] },
  voluntarios: { collection: 'voluntarios', title: 'Voluntarios', description: 'Disponibilidad, campañas y horas aportadas', columns: [['fullName', 'Nombre'], ['dni', 'DNI'], ['skills', 'Habilidades'], ['hoursWorked', 'Horas'], ['rating', 'Rating'], ['status', 'Estado']] },
  medicos: { collection: 'personal_medico', title: 'Personal Medico', description: 'Equipo medico y licencias profesionales', columns: [['fullName', 'Apellidos y N.'], ['dni', 'DNI'], ['sexo', 'Sexo'], ['especialidad', 'Especialidad'], ['status', 'Estado']] },
  proveedores: { collection: 'proveedores', title: 'Proveedores', description: 'Aliados comerciales y contactos', columns: [['providerName', 'Proveedor'], ['documentType', 'Tipo documento'], ['documentNumber', 'Numero documento'], ['phone', 'Telefono'], ['email', 'Email'], ['address', 'Direccion'], ['status', 'Estado']] },
  proyectos: { collection: 'proyectos', title: 'Proyectos', description: 'Programas sociales, presupuesto y avance', columns: [['id', 'ID'], ['projectName', 'Proyecto'], ['specialty', 'Area'], ['location', 'Ubicacion'], ['budget', 'Presupuesto'], ['progress', 'Avance'], ['status', 'Estado']] },
  campanas: { collection: 'campanas', title: 'Campañas', description: 'Campañas sociales y de salud unificadas', columns: [['campaignNumber', 'Codigo'], ['campaignName', 'Campaña'], ['domain', 'Dominio'], ['location', 'Lugar'], ['progress', 'Avance'], ['budgetUse', 'Ejecucion'], ['status', 'Estado']] },
  'campanas-solidarias': { collection: 'campanas', title: 'Campañas Solidarias', description: 'Campañas sociales filtradas por dominio', presetFilters: { domain: 'SOCIAL' }, columns: [['campaignNumber', 'Codigo'], ['campaignName', 'Campaña'], ['campaignType', 'Tipo'], ['location', 'Lugar'], ['progress', 'Meta'], ['status', 'Estado']] },
  'campanas-salud': { collection: 'campanas', title: 'Campañas de Salud', description: 'Campañas medicas filtradas por dominio SALUD', presetFilters: { domain: 'SALUD' }, columns: [['campaignNumber', 'Codigo'], ['campaignName', 'Campaña'], ['campaignTypeSalud', 'Tipo'], ['location', 'Lugar'], ['progress', 'Cobertura'], ['budgetUse', 'Ejecucion'], ['status', 'Estado']] },
  distribuciones: { collection: 'distribuciones', title: 'Distribuciones', description: 'Entregas por campaña, beneficiario y estado', columns: [['distributionNumber', 'Nro'], ['beneficiaryName', 'Beneficiario'], ['campaignName', 'Campaña'], ['totalItems', 'Items'], ['totalValue', 'Valor'], ['deliveryStatus', 'Entrega'], ['status', 'Estado']] },
  'beneficiarios-atendidos': { collection: 'distribuciones', title: 'Beneficiarios Atendidos', description: 'Historial de beneficiarios con entregas', columns: [['distributionNumber', 'Atencion'], ['beneficiaryName', 'Beneficiario'], ['beneficiaryDNI', 'DNI'], ['campaignName', 'Campaña'], ['totalQuantity', 'Cantidad'], ['deliveryStatus', 'Entrega'], ['distributionDate', 'Fecha']] },
  donantes: { collection: 'donantes', title: 'Donantes', description: 'Personas y empresas aportantes', columns: [['id', 'ID'], ['name', 'Donante'], ['donorType', 'Tipo'], ['email', 'Email'], ['totalDonations', 'Donaciones'], ['totalAmount', 'Total'], ['status', 'Estado']] },
  donaciones: { collection: 'donaciones', title: 'Donaciones', description: 'Donaciones monetarias, en especie y mixtas', columns: [['id', 'ID'], ['donor', 'Donante'], ['donationType', 'Tipo'], ['campaign', 'Campaña'], ['estimatedValue', 'Valor'], ['receiptIssued', 'Recibo'], ['status', 'Estado']] },
  'atencion-medica': { collection: 'atencion_salud', title: 'Atencion Medica', description: 'Atenciones de salud y seguimientos', columns: [['attentionNumber', 'Nro'], ['beneficiaryName', 'Beneficiario'], ['attentionType', 'Tipo'], ['personalNombre', 'Personal'], ['diagnosis', 'Diagnostico'], ['followUpRequired', 'Seguimiento'], ['status', 'Estado']] },
  consultas: { collection: 'ventas', title: 'Consultas', description: 'Servicios clinicos tipo consulta', presetFilters: { tipo: 'CONSULTA' }, columns: [['ticket', 'Ticket'], ['pacienteNombre', 'Paciente'], ['areaNombre', 'Area'], ['personalNombre', 'Personal'], ['total', 'Total'], ['fecha', 'Fecha'], ['estado', 'Estado']] },
  terapias: { collection: 'ventas', title: 'Terapias', description: 'Sesiones de terapia fisica', presetFilters: { tipo: 'TERAPIA' }, columns: [['ticket', 'Ticket'], ['pacienteNombre', 'Paciente'], ['areaNombre', 'Area'], ['personalNombre', 'Personal'], ['total', 'Total'], ['fecha', 'Fecha'], ['estado', 'Estado']] },
  tratamientos: { collection: 'tratamientos', title: 'Tratamientos', description: 'Catalogo de tratamientos clinicos', columns: [['nombre', 'Nombre'], ['specialty', 'Especialidad'], ['precio', 'Precio'], ['status', 'Estado']] },
  laboratorio: { collection: 'ventas', title: 'Laboratorio', description: 'Ventas y servicios de laboratorio', presetFilters: { tipo: 'LABORATORIO' }, columns: [['ticket', 'Ticket'], ['fecha', 'Fecha'], ['pacienteNombre', 'Paciente'], ['items', 'Prueba / kit'], ['estado', 'Estado'], ['usaTarjeta', 'Tarjeta'], ['total', 'Total']] },
  'pruebas-lab': { collection: 'pruebas_laboratorio', title: 'Pruebas de Laboratorio', description: 'Pruebas individuales y tiempos de resultado', columns: [['nombre', 'Nombre'], ['precio', 'Precio'], ['status', 'Estado']] },
  'kits-lab': { collection: 'kits_laboratorio', title: 'Kits Laboratorio', description: 'Paquetes de pruebas de laboratorio', columns: [['nombre', 'Nombre'], ['status', 'Estado']] },
  especialidades: { collection: 'especialidades', title: 'Especialidades', description: 'Areas sociales y clinicas', columns: [['specialtyCode', 'Codigo'], ['specialtyName', 'Especialidad'], ['type', 'Tipo'], ['budget', 'Presupuesto'], ['spent', 'Gastado'], ['color', 'Color'], ['status', 'Estado']] },
  'personal-medico': { collection: 'personal_medico', title: 'Personal Medico', description: 'Medicos, terapeutas y odontologos', columns: [['fullName', 'Apellidos y N.'], ['dni', 'DNI'], ['sexo', 'Sexo'], ['especialidad', 'Especialidad'], ['status', 'Estado']] },
  medicamentos: { collection: 'medicamentos', title: 'Medicamentos', description: 'Catalogo farmaceutico y stock clinico', columns: [['ubicacion', 'Ubicacion'], ['denominacionComercial', 'Denominacion C.'], ['denominacionGenerica', 'Denominacion G.'], ['stockStatus', 'Stock'], ['laboratorio', 'Laboratorio'], ['categoria', 'Presentacion'], ['costoUnitario', 'C. S/'], ['precioVenta', 'V. S/'], ['vencimiento', 'Vencimiento'], ['status', 'Estado']] },
  'ventas-farmacia': { collection: 'ventas', title: 'Ventas Farmacia', description: 'Ventas y donaciones de farmacia', presetFilters: { domain: 'FARMACIA' }, columns: [['ticket', 'Ticket'], ['pacienteNombre', 'Paciente'], ['tipo', 'Tipo'], ['items', 'Items'], ['total', 'Total'], ['fecha', 'Fecha'], ['estado', 'Estado']] },
  'compras-farmacia': { collection: 'ventas', title: 'Compras Farmacia', description: 'Compras a proveedores', presetFilters: { domain: 'COMPRA' }, columns: [['numeroCompra', 'Numero C.'], ['fecha', 'Fecha C.'], ['proveedor', 'Proveedor'], ['registradoPor', 'Registrado por'], ['total', 'Total'], ['tipo', 'Tipo'], ['estado', 'Estado']] },
  'inventario-farmacia': { collection: 'medicamentos', title: 'Inventario Farmacia', description: 'Stock farmaceutico y alertas', columns: [['id', 'Codigo'], ['denominacionComercial', 'Medicamento'], ['stockStatus', 'Stock'], ['stockMinimo', 'Minimo'], ['vencimiento', 'Vence'], ['ubicacion', 'Ubicacion'], ['status', 'Estado']] },
  'movimientos-farm': { collection: 'ventas', title: 'Movimientos Farmacia', description: 'Salidas, compras y donaciones de farmacia', presetFilters: { domain: 'FARMACIA' }, columns: [['ticket', 'Documento'], ['tipo', 'Movimiento'], ['items', 'Detalle'], ['total', 'Total'], ['fecha', 'Fecha'], ['estado', 'Estado']] },
  'alertas-stock': { collection: 'medicamentos', title: 'Alertas Stock', description: 'Medicamentos bajo minimo o sin stock', presetFilters: { stockAlert: true }, columns: [['id', 'Codigo'], ['denominacionComercial', 'Medicamento'], ['stockStatus', 'Stock'], ['stockMinimo', 'Minimo'], ['vencimiento', 'Vence'], ['ubicacion', 'Ubicacion'], ['status', 'Estado']] },
  productos: { collection: 'productos', title: 'Productos', description: 'Catalogo de bienes para asistencia social', columns: [['productCode', 'Codigo'], ['productName', 'Denominacion C.'], ['category', 'Categoria'], ['unit', 'Unidad'], ['stockStatus', 'Stock'], ['estimatedValue', 'V. S/'], ['status', 'Estado']] },
  'inventario-general': { collection: 'inventario', title: 'Inventario General', description: 'Existencias, ubicaciones y valorizacion', columns: [['id', 'ID'], ['productName', 'Producto'], ['productCategory', 'Categoria'], ['warehouseLocation', 'Almacen'], ['stockStatus', 'Stock'], ['totalValue', 'Valor'], ['status', 'Estado']] },
  entradas: { collection: 'movimientos_inventario', title: 'Entradas', description: 'Movimientos de entrada al inventario', presetFilters: { movementType: 'ENTRADA' }, columns: [['id', 'ID'], ['productName', 'Producto'], ['movementReason', 'Motivo'], ['quantity', 'Cantidad'], ['newQuantity', 'Nuevo stock'], ['movementDate', 'Fecha']] },
  salidas: { collection: 'movimientos_inventario', title: 'Salidas', description: 'Movimientos de salida y distribucion', presetFilters: { movementType: 'SALIDA' }, columns: [['id', 'ID'], ['productName', 'Producto'], ['beneficiaryName', 'Beneficiario'], ['movementReason', 'Motivo'], ['quantity', 'Cantidad'], ['movementDate', 'Fecha']] },
  ajustes: { collection: 'movimientos_inventario', title: 'Ajustes', description: 'Ajustes manuales de inventario', presetFilters: { movementType: 'AJUSTE' }, columns: [['id', 'ID'], ['productName', 'Producto'], ['movementReason', 'Motivo'], ['quantity', 'Cantidad'], ['movementDate', 'Fecha']] },
  'movimientos-inv': { collection: 'movimientos_inventario', title: 'Movimientos Inventario', description: 'Entradas, salidas y ajustes', columns: [['id', 'ID'], ['productName', 'Producto'], ['movementType', 'Tipo'], ['movementReason', 'Motivo'], ['quantity', 'Cantidad'], ['newQuantity', 'Nuevo stock'], ['movementDate', 'Fecha']] },
  ingresos: { collection: 'finanzas', title: 'Ingresos', description: 'Transacciones de ingreso aprobadas y pendientes', presetFilters: { transactionType: 'INGRESO' }, columns: [['id', 'ID'], ['transactionDate', 'Fecha'], ['category', 'Categoria'], ['description', 'Concepto'], ['amount', 'Monto'], ['paymentMethod', 'Metodo'], ['status', 'Estado']] },
  egresos: { collection: 'finanzas', title: 'Egresos', description: 'Egresos operativos, compras y campañas', presetFilters: { transactionType: 'EGRESO' }, columns: [['id', 'ID'], ['transactionDate', 'Fecha'], ['category', 'Categoria'], ['description', 'Concepto'], ['amount', 'Monto'], ['paymentMethod', 'Metodo'], ['status', 'Estado']] },
  gastos: { collection: 'finanzas', title: 'Gastos', description: 'Gastos por campaña, operacion y compras', presetFilters: { transactionType: 'EGRESO' }, columns: [['id', 'ID'], ['transactionDate', 'Fecha'], ['category', 'Categoria'], ['description', 'Concepto'], ['amount', 'Monto'], ['status', 'Estado']] },
  compras: { collection: 'ventas', title: 'Compras', description: 'Compras registradas como dominio COMPRA', presetFilters: { domain: 'COMPRA' }, columns: [['numeroCompra', 'Numero C.'], ['fecha', 'Fecha C.'], ['proveedor', 'Proveedor'], ['registradoPor', 'Registrado por'], ['total', 'Total'], ['tipo', 'Tipo'], ['estado', 'Estado']] },
  balance: { collection: 'finanzas', title: 'Balance General', description: 'Resumen financiero operativo', columns: [['id', 'ID'], ['transactionType', 'Tipo'], ['category', 'Categoria'], ['description', 'Concepto'], ['amount', 'Monto'], ['fiscalPeriod', 'Periodo'], ['status', 'Estado']] },
  'flujo-caja': { collection: 'finanzas', title: 'Flujo Caja', description: 'Movimientos por periodo fiscal', columns: [['transactionDate', 'Fecha'], ['transactionType', 'Tipo'], ['description', 'Concepto'], ['amount', 'Monto'], ['paymentMethod', 'Metodo'], ['status', 'Estado']] },
  'ventas-clinicas': { collection: 'ventas', title: 'Ventas Clinicas', description: 'Servicios clinicos vendidos', presetFilters: { domain: 'CLINICA' }, columns: [['ticket', 'Ticket'], ['tipo', 'Tipo'], ['pacienteNombre', 'Paciente'], ['areaNombre', 'Area'], ['personalNombre', 'Personal'], ['total', 'Total'], ['estado', 'Estado']] },
  'ventas-farmacia2': { collection: 'ventas', title: 'Ventas Farmacia', description: 'Ventas y donaciones de medicamentos', presetFilters: { domain: 'FARMACIA' }, columns: [['ticket', 'Ticket'], ['tipo', 'Tipo'], ['pacienteNombre', 'Paciente'], ['items', 'Items'], ['total', 'Total'], ['estado', 'Estado']] },
  'terapias-v': { collection: 'ventas', title: 'Terapias', description: 'Ventas de terapias', presetFilters: { tipo: 'TERAPIA' }, columns: [['ticket', 'Ticket'], ['pacienteNombre', 'Paciente'], ['personalNombre', 'Terapeuta'], ['total', 'Total'], ['fecha', 'Fecha'], ['estado', 'Estado']] },
  'consultas-v': { collection: 'ventas', title: 'Consultas', description: 'Ventas de consultas clinicas', presetFilters: { tipo: 'CONSULTA' }, columns: [['ticket', 'Ticket'], ['pacienteNombre', 'Paciente'], ['personalNombre', 'Medico'], ['total', 'Total'], ['fecha', 'Fecha'], ['estado', 'Estado']] },
  'laboratorio-v': { collection: 'ventas', title: 'Laboratorio', description: 'Ventas de laboratorio', presetFilters: { tipo: 'LABORATORIO' }, columns: [['ticket', 'Ticket'], ['pacienteNombre', 'Paciente'], ['total', 'Total'], ['fecha', 'Fecha'], ['estado', 'Estado']] },
  comprobantes: { collection: 'ventas', title: 'Comprobantes', description: 'Tickets y documentos emitidos', columns: [['ticketOrNumber', 'Documento'], ['domain', 'Dominio'], ['pacienteNombre', 'Paciente/Proveedor'], ['total', 'Total'], ['fecha', 'Fecha'], ['estado', 'Estado']] },
  'rep-ventas': { collection: 'ventas', title: 'Reporte Ventas', description: 'Analisis por dominio y tipo', columns: [['ticketOrNumber', 'Documento'], ['domain', 'Dominio'], ['tipo', 'Tipo'], ['total', 'Total'], ['fecha', 'Fecha'], ['estado', 'Estado']] },
  'rep-financiero': { collection: 'finanzas', title: 'Reporte Financiero', description: 'Ingresos, egresos y estado', columns: [['transactionDate', 'Fecha'], ['transactionType', 'Tipo'], ['category', 'Categoria'], ['amount', 'Monto'], ['fiscalPeriod', 'Periodo'], ['status', 'Estado']] },
  pacientes: { collection: 'pacientes', title: 'Pacientes', description: 'Pacientes clinicos activos', columns: [['fullName', 'Apellidos y N.'], ['dni', 'DNI'], ['sexo', 'Sexo'], ['nacimiento', 'Nacimiento'], ['historia', 'Historia'], ['status', 'Estado']] },
  'rep-pacientes': { collection: 'pacientes', title: 'Pacientes', description: 'Pacientes clinicos activos', columns: [['fullName', 'Apellidos y N.'], ['dni', 'DNI'], ['sexo', 'Sexo'], ['nacimiento', 'Nacimiento'], ['historia', 'Historia'], ['status', 'Estado']] },
  'rep-beneficiarios': { collection: 'beneficiarios', title: 'Reporte Beneficiarios', description: 'Vulnerabilidad y distritos', columns: [['id', 'ID'], ['fullName', 'Beneficiario'], ['district', 'Distrito'], ['vulnerabilityLevel', 'Vulnerabilidad'], ['familyMembers', 'Familia'], ['monthlyIncome', 'Ingreso'], ['status', 'Estado']] },
  'rep-inventario': { collection: 'inventario', title: 'Reporte Inventario', description: 'Stock y valorizacion', columns: [['id', 'ID'], ['productName', 'Producto'], ['productCategory', 'Categoria'], ['stockStatus', 'Stock'], ['totalValue', 'Valor'], ['status', 'Estado']] },
  'rep-donaciones': { collection: 'donaciones', title: 'Reporte Donaciones', description: 'Valor recibido y recibos', columns: [['id', 'ID'], ['donor', 'Donante'], ['donationType', 'Tipo'], ['estimatedValue', 'Valor'], ['donationDate', 'Fecha'], ['status', 'Estado']] },
  'rep-campanas': { collection: 'campanas', title: 'Reporte Campañas', description: 'Dominio, metas y ejecucion', columns: [['campaignNumber', 'Codigo'], ['campaignName', 'Campaña'], ['domain', 'Dominio'], ['progress', 'Avance'], ['budgetUse', 'Ejecucion'], ['status', 'Estado']] },
  'rep-venta-medicamentos': { collection: 'ventas', title: 'Reporte Venta Medicamentos', description: 'Tickets de farmacia por rango de fechas y estado', presetFilters: { domain: 'FARMACIA' }, columns: [['ticket', 'Ticket'], ['fecha', 'Fecha'], ['pacienteNombre', 'Paciente'], ['estado', 'Estado'], ['tipo', 'Tipo'], ['total', 'Total']] },
  'rep-venta-tratamientos': { collection: 'ventas', title: 'Reporte Venta Tratamientos', description: 'Tratamientos por area, personal, estado y tarjeta', presetFilters: { tipo: 'TRATAMIENTO' }, columns: [['ticket', 'Ticket'], ['fecha', 'Fecha'], ['areaNombre', 'Area'], ['personalNombre', 'Personal'], ['pacienteNombre', 'Paciente'], ['estado', 'Estado'], ['tipo', 'Tipo'], ['usaTarjeta', 'Tarjeta'], ['total', 'Total']] },
  'rep-venta-terapias': { collection: 'ventas', title: 'Reporte Venta Terapias', description: 'Produccion de terapias por personal y paciente', presetFilters: { tipo: 'TERAPIA' }, columns: [['ticket', 'Ticket'], ['fecha', 'Fecha'], ['areaNombre', 'Area'], ['personalNombre', 'Personal'], ['pacienteNombre', 'Paciente'], ['estado', 'Estado'], ['tipo', 'Tipo'], ['usaTarjeta', 'Tarjeta'], ['total', 'Total']] },
  ranking: { collection: 'ranking_ventas', title: 'Ranking de Ventas', description: 'Los 10 medicamentos mas vendidos del periodo', columns: [['rank', '#'], ['stock', 'Stock'], ['medicamento', 'Medicamento'], ['laboratorio', 'Laboratorio'], ['vendidos', 'Vendidos']] },
  'adm-especialidades': { collection: 'especialidades', title: 'Especialidades', description: 'Administracion de areas', columns: [['specialtyName', 'Nombre'], ['type', 'Tipo'], ['status', 'Estado']] },
  'tipo-cliente': { collection: 'tipo_cliente', title: 'Tipo de Clientes', description: 'Segmentos de tarifa clinica', columns: [['nombre', 'Tipo de Clientes'], ['status', 'Estado']] },
  'precios-terapias': { collection: 'terapias_precios', title: 'Precios por Terapias', description: 'Tarifas por cliente y especialidad', columns: [['tipoCliente', 'Tipo Cliente'], ['specialty', 'Especialidad'], ['precio', 'Precio'], ['status', 'Estado']] },
  'precios-consultas': { collection: 'precios_consulta', title: 'Precios por Consulta', description: 'Tarifas por especialidad', columns: [['specialty', 'Especialidad'], ['precio', 'Precio'], ['status', 'Estado']] },
  'precios-productos': { collection: 'productos', title: 'Precios Productos', description: 'Valores estimados del catalogo social', columns: [['productCode', 'Codigo'], ['productName', 'Producto'], ['category', 'Categoria'], ['estimatedValue', 'Valor'], ['status', 'Estado']] },
  roles: { collection: 'usuarios', title: 'Roles y Permisos', description: 'Usuarios por rol operativo', columns: [['id', 'ID'], ['fullName', 'Usuario'], ['role', 'Rol'], ['email', 'Email'], ['status', 'Estado']] },
  seguridad: { collection: 'usuarios', title: 'Seguridad', description: 'Actividad de acceso y cuentas', columns: [['id', 'ID'], ['fullName', 'Usuario'], ['username', 'Usuario'], ['lastLogin', 'Ultimo acceso'], ['role', 'Rol'], ['status', 'Estado']] },
  auditoria: { collection: 'movimientos_inventario', title: 'Auditoria', description: 'Trazabilidad operativa reciente', columns: [['id', 'ID'], ['movementDate', 'Fecha'], ['productName', 'Entidad'], ['movementType', 'Evento'], ['movementReason', 'Detalle'], ['quantity', 'Cantidad']] },
  // Clinica — Personal Medico (duplicate view within clinica module)
  'cli-personal-medico': { collection: 'personal_medico', title: 'Personal Medico', description: 'Medicos, terapeutas y odontologos', columns: [['fullName', 'Apellidos y N.'], ['dni', 'DNI'], ['sexo', 'Sexo'], ['especialidad', 'Especialidad'], ['status', 'Estado']] },
  // Productos — catalog sub-pages
  'prod-tratamientos': { collection: 'tratamientos', title: 'Tratamientos', description: 'Catalogo de tratamientos clinicos con precios', columns: [['nombre', 'Nombre'], ['specialty', 'Especialidad'], ['precio', 'Precio'], ['status', 'Estado']] },
  'prod-consultas': { collection: 'precios_consulta', title: 'Consultas', description: 'Tarifas de consulta por especialidad', columns: [['specialty', 'Especialidad'], ['precio', 'Precio'], ['status', 'Estado']] },
  'prod-terapias': { collection: 'terapias_precios', title: 'Terapias', description: 'Tarifas de terapia por tipo de cliente', columns: [['tipoCliente', 'Tipo Cliente'], ['specialty', 'Especialidad'], ['precio', 'Precio'], ['status', 'Estado']] },
  'prod-medicamentos': { collection: 'medicamentos', title: 'Medicamentos', description: 'Catalogo farmaceutico de productos', columns: [['denominacionComercial', 'Denominacion C.'], ['denominacionGenerica', 'Denominacion G.'], ['categoria', 'Presentacion'], ['precioVenta', 'V. S/'], ['status', 'Estado']] },
  'prod-kits-lab': { collection: 'kits_laboratorio', title: 'Kits Laboratorio', description: 'Paquetes de pruebas de laboratorio', columns: [['nombre', 'Nombre'], ['pruebas', 'Pruebas incluidas'], ['precioKit', 'Precio'], ['status', 'Estado']] },
  // Reportes — expanded
  'rep-compras': { collection: 'ventas', title: 'Compras Medicas', description: 'Reporte de compras a proveedores', presetFilters: { domain: 'COMPRA' }, columns: [['numeroCompra', 'Numero C.'], ['fecha', 'Fecha C.'], ['proveedor', 'Proveedor'], ['total', 'Total'], ['tipo', 'Tipo'], ['estado', 'Estado']] },
  'rep-laboratorio': { collection: 'ventas', title: 'Reporte Laboratorio', description: 'Ventas y servicios de laboratorio', presetFilters: { tipo: 'LABORATORIO' }, columns: [['ticket', 'Ticket'], ['fecha', 'Fecha'], ['pacienteNombre', 'Paciente'], ['items', 'Prueba / kit'], ['total', 'Total'], ['estado', 'Estado']] },
  'rep-productos': { collection: 'productos', title: 'Reporte Productos', description: 'Catalogo y stock de productos sociales', columns: [['productCode', 'Codigo'], ['productName', 'Producto'], ['category', 'Categoria'], ['stockStatus', 'Stock'], ['estimatedValue', 'Valor'], ['status', 'Estado']] },
  'rep-tratamientos': { collection: 'ventas', title: 'Reporte Tratamientos', description: 'Tratamientos por area, personal y estado', presetFilters: { tipo: 'TRATAMIENTO' }, columns: [['ticket', 'Ticket'], ['fecha', 'Fecha'], ['areaNombre', 'Area'], ['personalNombre', 'Personal'], ['pacienteNombre', 'Paciente'], ['total', 'Total'], ['estado', 'Estado']] },
  'rep-consultas': { collection: 'ventas', title: 'Reporte Consultas', description: 'Consultas clinicas por especialidad', presetFilters: { tipo: 'CONSULTA' }, columns: [['ticket', 'Ticket'], ['fecha', 'Fecha'], ['areaNombre', 'Area'], ['personalNombre', 'Personal'], ['pacienteNombre', 'Paciente'], ['total', 'Total'], ['estado', 'Estado']] },
  'rep-terapias': { collection: 'ventas', title: 'Reporte Terapias', description: 'Produccion de terapias por personal y paciente', presetFilters: { tipo: 'TERAPIA' }, columns: [['ticket', 'Ticket'], ['fecha', 'Fecha'], ['areaNombre', 'Area'], ['personalNombre', 'Personal'], ['pacienteNombre', 'Paciente'], ['total', 'Total'], ['estado', 'Estado']] },
  // Administracion — expanded
  'adm-pruebas-lab': { collection: 'pruebas_laboratorio', title: 'Pruebas Laboratorio', description: 'Administracion de pruebas de laboratorio', columns: [['nombre', 'Nombre'], ['precio', 'Precio'], ['tipoMuestra', 'Muestra'], ['tiempoResultado', 'Tiempo'], ['status', 'Estado']] },
  'adm-kits-lab': { collection: 'kits_laboratorio', title: 'Kits Laboratorio', description: 'Administracion de paquetes de pruebas', columns: [['nombre', 'Nombre'], ['pruebas', 'Pruebas'], ['precioKit', 'Precio'], ['status', 'Estado']] },
  'adm-compras': { collection: 'ventas', title: 'Compras', description: 'Administracion de compras a proveedores', presetFilters: { domain: 'COMPRA' }, columns: [['numeroCompra', 'Numero C.'], ['fecha', 'Fecha C.'], ['proveedor', 'Proveedor'], ['registradoPor', 'Registrado por'], ['total', 'Total'], ['tipo', 'Tipo'], ['estado', 'Estado']] },
  // Configuracion — system settings
  'config-general': { collection: 'especialidades', title: 'Configuracion General', description: 'Parametros generales del sistema', columns: [['specialtyCode', 'Codigo'], ['specialtyName', 'Parametro'], ['type', 'Tipo'], ['status', 'Estado']] },
  'config-apariencia': { collection: 'especialidades', title: 'Temas y Apariencia', description: 'Modo oscuro, colores y personalizacion visual', columns: [['specialtyCode', 'Codigo'], ['specialtyName', 'Parametro'], ['type', 'Tipo'], ['status', 'Estado']] },
  'config-notificaciones': { collection: 'especialidades', title: 'Notificaciones', description: 'Alertas, correos y canales de notificacion', columns: [['specialtyCode', 'Codigo'], ['specialtyName', 'Parametro'], ['type', 'Tipo'], ['status', 'Estado']] },
  'config-seguridad': { collection: 'usuarios', title: 'Seguridad', description: 'Politicas de acceso, contraseñas y sesiones', columns: [['id', 'ID'], ['fullName', 'Usuario'], ['username', 'Usuario'], ['lastLogin', 'Ultimo acceso'], ['role', 'Rol'], ['status', 'Estado']] },
  'config-roles': { collection: 'usuarios', title: 'Roles y Permisos', description: 'Gestion de roles y permisos del sistema', columns: [['id', 'ID'], ['fullName', 'Usuario'], ['role', 'Rol'], ['email', 'Email'], ['status', 'Estado']] },
  'config-respaldo': { collection: 'especialidades', title: 'Respaldo de Datos', description: 'Backups automaticos y recuperacion', columns: [['specialtyCode', 'Codigo'], ['specialtyName', 'Parametro'], ['type', 'Tipo'], ['status', 'Estado']] },
  'config-auditoria': { collection: 'movimientos_inventario', title: 'Auditoria y Logs', description: 'Registro de actividad y trazabilidad', columns: [['id', 'ID'], ['movementDate', 'Fecha'], ['productName', 'Entidad'], ['movementType', 'Evento'], ['movementReason', 'Detalle'], ['quantity', 'Cantidad']] },
  'config-integraciones': { collection: 'especialidades', title: 'Integraciones', description: 'APIs externas, webhooks y servicios', columns: [['specialtyCode', 'Codigo'], ['specialtyName', 'Servicio'], ['type', 'Tipo'], ['status', 'Estado']] },
  'config-correo': { collection: 'especialidades', title: 'Correo y SMTP', description: 'Configuracion de servidor de correo', columns: [['specialtyCode', 'Codigo'], ['specialtyName', 'Parametro'], ['type', 'Tipo'], ['status', 'Estado']] },
  'config-horarios': { collection: 'especialidades', title: 'Horarios y Turnos', description: 'Configuracion de horarios de atencion', columns: [['specialtyCode', 'Codigo'], ['specialtyName', 'Turno'], ['type', 'Tipo'], ['status', 'Estado']] },
};

export function getRowsForPage(pageId) {
  const definition = moduleDefinitions[pageId] || moduleDefinitions.usuarios;
  const source = mockDb[definition.collection] || [];
  return source.map((row) => normalizeRow(row));
}

export function applyPresetFilters(rows, presetFilters = {}) {
  return rows.filter((row) => {
    if (presetFilters.stockAlert) {
      const stock = Number(row.stock ?? row.quantity ?? 0);
      const minimum = Number(row.stockMinimo ?? row.minStock ?? 0);
      return stock <= minimum;
    }
    return Object.entries(presetFilters).every(([key, value]) => row[key] === value);
  });
}

export function normalizeRow(row) {
  const fullName = row.fullName || [row.firstName || row.nombres, row.lastName || row.apellidos].filter(Boolean).join(' ');
  const progress = getProgress(row);
  const budgetUse = row.budget ? Math.round(((row.spent || 0) / row.budget) * 100) : null;
  const stockValue = row.stock ?? row.quantity;
  const minStock = row.stockMinimo ?? row.minStock;
  const stockStatus = stockValue !== undefined ? `${stockValue} / min ${minStock ?? 0}` : undefined;
  return {
    ...row,
    fullName,
    progress: progress !== null ? `${progress}%` : undefined,
    budgetUse: budgetUse !== null ? `${budgetUse}%` : undefined,
    stockStatus,
    ticketOrNumber: row.ticket || row.numeroCompra || row.id,
  };
}

export function getProgress(row) {
  if (row.goalAmount) return Math.min(100, Math.round(((row.currentAmount || 0) / row.goalAmount) * 100));
  if (row.targetBeneficiaries) return Math.min(100, Math.round(((row.actualBeneficiaries || 0) / row.targetBeneficiaries) * 100));
  if (row.budget) return Math.min(100, Math.round(((row.spent || 0) / row.budget) * 100));
  return null;
}

export function formatMoney(value) {
  if (value === null || value === undefined || value === '') return '-';
  return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN', maximumFractionDigits: 0 }).format(Number(value));
}

export function formatDate(value) {
  if (!value) return '-';
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('es-PE', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
}

export function getDashboardStats() {
  const beneficiaries = mockDb.beneficiarios.filter((item) => item.status === 'ACTIVE');
  const socialCampaigns = mockDb.campanas.filter((item) => item.domain === 'SOCIAL');
  const healthCampaigns = mockDb.campanas.filter((item) => item.domain === 'SALUD');
  const donationsTotal = mockDb.donaciones.reduce((sum, item) => sum + (item.estimatedValue || item.amount || 0), 0);
  const income = mockDb.finanzas.filter((item) => item.transactionType === 'INGRESO').reduce((sum, item) => sum + item.amount, 0);
  const expenses = mockDb.finanzas.filter((item) => item.transactionType === 'EGRESO').reduce((sum, item) => sum + item.amount, 0);
  const pharmacySales = mockDb.ventas.filter((item) => item.domain === 'FARMACIA').reduce((sum, item) => sum + item.total, 0);
  const clinicSales = mockDb.ventas.filter((item) => item.domain === 'CLINICA').reduce((sum, item) => sum + item.total, 0);
  const lowStock = [
    ...mockDb.inventario.filter((item) => item.quantity <= item.minStock),
    ...mockDb.medicamentos.filter((item) => item.stock <= item.stockMinimo),
  ];

  return {
    beneficiaries: beneficiaries.length,
    criticalBeneficiaries: beneficiaries.filter((item) => ['ALTA', 'CRITICA'].includes(item.vulnerabilityLevel)).length,
    campaigns: mockDb.campanas.length,
    socialCampaigns: socialCampaigns.length,
    healthCampaigns: healthCampaigns.length,
    donationsTotal,
    income,
    expenses,
    balance: income - expenses,
    pharmacySales,
    clinicSales,
    lowStock: lowStock.length,
    patients: legacyStats.pacientes.total,
    activePatients: legacyStats.pacientes.active,
    medicines: legacyStats.medicamentos.total,
    activeMedicines: legacyStats.medicamentos.active,
    users: legacyStats.usuarios.total,
    activeUsers: legacyStats.usuarios.active,
    therapiesTotal: legacyStats.ventaTerapias.total,
    treatmentsTotal: legacyStats.ventaTratamientos.total,
    pharmacyDayTotal: legacyStats.ventaMedicamentos.total,
    attentionsToday: mockDb.atencion_salud.filter((item) => item.attentionDate === '2026-05-08').length,
  };
}

export function getOperationalModules() {
  return [
    { label: 'Pacientes', total: legacyStats.pacientes.total, active: legacyStats.pacientes.active, inactive: legacyStats.pacientes.inactive, module: 'personas', page: 'pacientes' },
    { label: 'Medicamentos', total: legacyStats.medicamentos.total, active: legacyStats.medicamentos.active, inactive: legacyStats.medicamentos.inactive, module: 'farmacia', page: 'medicamentos' },
    { label: 'Precios terapias', total: legacyStats.preciosTerapias.total, active: legacyStats.preciosTerapias.active, inactive: legacyStats.preciosTerapias.inactive, module: 'administracion', page: 'precios-terapias' },
    { label: 'Pruebas lab.', total: legacyStats.pruebasLab.total, active: legacyStats.pruebasLab.active, inactive: legacyStats.pruebasLab.inactive, module: 'clinica', page: 'pruebas-lab' },
    { label: 'Productos', total: legacyStats.productos.total, active: legacyStats.productos.active, inactive: legacyStats.productos.inactive, module: 'productos', page: 'prod-tratamientos' },
    { label: 'Compras', total: legacyStats.compras.total, active: legacyStats.compras.consignado, inactive: legacyStats.compras.revocado, module: 'finanzas', page: 'compras' },
  ];
}

export function getSalesReportStats() {
  return [
    { label: 'Medicamentos', total: legacyStats.ventaMedicamentos.total, consignado: legacyStats.ventaMedicamentos.consignado, donado: legacyStats.ventaMedicamentos.donado, page: 'rep-venta-medicamentos' },
    { label: 'Terapias', total: legacyStats.ventaTerapias.total, consignado: legacyStats.ventaTerapias.consignado, donado: legacyStats.ventaTerapias.donado, page: 'rep-venta-terapias' },
    { label: 'Tratamientos', total: legacyStats.ventaTratamientos.total, consignado: legacyStats.ventaTratamientos.consignado, donado: legacyStats.ventaTratamientos.donado, page: 'rep-venta-tratamientos' },
  ];
}

export function getRecentActivity() {
  return [
    { type: 'Salud', title: 'Atencion completada', subtitle: 'Rosa Medina - Medicina general', time: 'Hace 8 min' },
    { type: 'Inventario', title: 'Salida de inventario', subtitle: 'Frazada polar x44', time: 'Hace 22 min' },
    { type: 'Donaciones', title: 'Donacion recibida', subtitle: 'Carlos Mendoza - S/ 500', time: 'Hace 35 min' },
    { type: 'Farmacia', title: 'Venta farmacia', subtitle: 'Ticket FAR-2026-05-08-018526', time: 'Hace 48 min' },
    { type: 'Social', title: 'Campaña actualizada', subtitle: 'Campaña contra el frio al 65%', time: 'Hace 1 h' },
  ];
}

export function getMonthlySeries() {
  return [
    { label: 'Ene', social: 72, clinic: 44, donations: 38 },
    { label: 'Feb', social: 88, clinic: 56, donations: 42 },
    { label: 'Mar', social: 64, clinic: 62, donations: 51 },
    { label: 'Abr', social: 96, clinic: 71, donations: 58 },
    { label: 'May', social: 118, clinic: 84, donations: 67 },
    { label: 'Jun', social: 78, clinic: 49, donations: 35 },
  ];
}
