import { SalesByGender, Store } from "./types";

 export function mapStoresToOptions(stores: Store[]) {
    return stores.map((store) => ({
      value: store.id,
      label: store.name,
    }));
  }

  export const buildSalesByStore = (sales: SalesByGender[]) => {
    const labels = sales.map((s) => s.gender);
    const series = sales.map((s) => s.sum);
  
    return {
      labels,
      series
    };
  };