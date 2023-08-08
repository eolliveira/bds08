import { useEffect, useState } from "react";
import Select from "react-select";
import { makeRequest } from "../../utils/requests";
import { FilterData, Store } from "../../types";
import { mapStoresToOptions } from "../../helpers";
import { styled } from "styled-components";

type FilterProps = {
  onFilterChange: (filter: FilterData) => void;
};

export function Filter({ onFilterChange }: FilterProps) {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    makeRequest
      .get<Store[]>(`/stores`)
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => console.log("Erro ao buscar por lojas: " + error));
  }, []);

  return (
    <Wapper className="base-card">
      <Container>
        <Select
          className="basic-single"
          isClearable={true}
          name="color"
          options={mapStoresToOptions(stores)}
          onChange={(event) => onFilterChange({ storeId: event?.value })}
        />
      </Container>
    </Wapper>
  );
}

const Container = styled.div`
  max-width: 300px;
  padding: 30px 15px;
`;

const Wapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
