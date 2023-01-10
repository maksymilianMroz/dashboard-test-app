import { ListItemProps } from "../../../../App";
import { AppItem } from "../AppItem/AppItem";
import { List } from "./AppItemList.styles";

type AppItemListProps = {
  appList: ListItemProps[];
};

export const AppItemList = ({ appList }: AppItemListProps) => {
  return (
    <List>
      {appList.map((item, index) => (
        <AppItem item={item} index={index} key={index + item.id} />
      ))}
    </List>
  );
};
