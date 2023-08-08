import ReactApexChart from "react-apexcharts";
import { buildPieChartConfig } from "./helpers";
import { styled } from "styled-components";
import { formatPrice } from "../../utils/formatters";

type PieChartSalesProps = {
  labels?: string[];
  series?: number[];
  total?: number;
};

export function PieChartSales({
  labels = [],
  series = [],
  total,
}: PieChartSalesProps) {
  return (
    <Container className="base-card">
      <div>
        <Amount>{formatPrice(total ?? 0)}</Amount>
        <Description>Total de vendas</Description>
      </div>
      <ChartContainer>
        <ReactApexChart
          options={buildPieChartConfig(labels)}
          series={series}
          type="donut"
          width={400}
          height={400}
        />
      </ChartContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 960px;
  margin: 10px auto;
  padding: 30px;
  @media (min-width: 992px) {
    display: flex;
    margin: 20px auto;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  @media (min-width: 992px) {
  }
`;

const Amount = styled.h2`
  font-size: 36px;
  padding: 30px 0px 0px 20px;
  font-weight: 700;
  color: var(--blue-light-200-color);
`;

const Description = styled.p`
  font-size: 18px;
  margin: 0;
  padding: 0px 0px 0px 20px;
  font-weight: 740000;
  color: var(--grey-light-100-color);
`;
