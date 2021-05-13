import RH from './request-handler';

export const getMovementLogs = async (organizationId: number) => await RH.get(`/organizations/${organizationId}/movements`);

export const getSummary = async (organizationId: number) => await RH.get(`/organizations/${organizationId}/summary`);
