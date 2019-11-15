export interface Customer {
  id: string;
  name: string;
  readonly role: 'Customer';
  safeId: string;
}
