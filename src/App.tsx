import { useEffect, useState } from "react";
import "./App.css";
import { Dashboard } from "./features/Dashboard/Dashboard";

export type ListItemProps = {
  id: number;
  name: string;
  company: string;
};

export type List = ListItemProps[];

const App = () => {
  const [appList, setAppList] = useState<List>([]);

  const fetchAppList = async () => {
    const response = await fetch("https://api.recruitment.4soft.tech/list");
    const data = await response.json();
    setAppList(data);
  };

  useEffect(() => {
    fetchAppList();
  }, []);

  return (
    <div className="App">
      <Dashboard appList={appList} />
    </div>
  );
};

export default App;
