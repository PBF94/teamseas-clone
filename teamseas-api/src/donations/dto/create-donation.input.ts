export class CreateDonationInput {
  email: string;
  displayName: string;
  count: number;
  mobile?: string | null;
  message?: string | null;
  team?: string | null;
}
