import { useEffect, useState } from "react";
import "./App.css";
import { Filter } from "./compoents/filter";
import { Header } from "./compoents/header";
import { PieChartSales } from "./compoents/pieChartSales";
import { makeRequest } from "./utils/requests";
import { buildSalesByStore } from "./helpers";
import {
  FilterData,
  PieChartConfig,
  SalesByGender,
  SalesSummary,
} from "./types";

function App() {
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const [salesSummary, setsalesSummary] = useState<SalesSummary>();
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filterData: FilterData) => {
    setFilterData(filterData);
  };

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>(
        `/sales/by-gender?storeId=${filterData?.storeId ?? 0}`
      )
      .then((response) => {
        console.log(response.data);

        const newBuildSalesByGender = buildSalesByStore(response.data);
        setSalesByGender(newBuildSalesByGender);
      })
      .catch((error) =>
        console.log("Erro ao buscar vendas por loja: " + error)
      );
  }, [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummary>(`/sales/summary?storeId=${filterData?.storeId ?? 0}`)
      .then((response) => {
        setsalesSummary(response.data);
      })
      .catch((error) =>
        console.log("Erro ao buscar vendas por loja: " + error)
      );
  }, [filterData]);

  return (
    <>
      <Header />
      <div style={{ padding: "10px" }}>
        <Filter onFilterChange={onFilterChange} />
        <PieChartSales
          labels={salesByGender?.labels}
          series={salesByGender?.series}
          total={salesSummary?.sum}
        />
      </div>
    </>
  );
}

export default App;
