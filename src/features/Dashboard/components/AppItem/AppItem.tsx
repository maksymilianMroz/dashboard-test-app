import { useEffect, useState } from "react";
import { ListItemProps } from "../../../../App";
import { Item, Button } from "./AppItem.styles";

type AppItemProps = {
  index: number;
  item: ListItemProps;
};

export const AppItem = ({ item, index }: AppItemProps) => {
  const [selectedItem, setSelectedItem] = useState();

  const fetchDetailedData = async (id: number) => {
    const response = await fetch(
      "https://api.recruitment.4soft.tech/details/" + id
    );
    const data = await response.json();

    setSelectedItem(data);
  };

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <>
      <Item>
        <Button
          onClick={() => {
            fetchDetailedData(item.id);
          }}
        >
          {item.company} ◉ {item.name} ◉ {item.id}
        </Button>
      </Item>
    </>
  );
};
