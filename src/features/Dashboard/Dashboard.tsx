import { ListItemProps } from "../../App";
import { AppItemList } from "./components/AppItemList/AppItemList";
import { Container } from "./Dashboard.styles";

type DashboardProps = {
  appList: ListItemProps[];
};

export const Dashboard = ({ appList }: DashboardProps) => {
  return <Container>{appList && <AppItemList appList={appList} />}</Container>;
};
