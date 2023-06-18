"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TextInput } from "@tremor/react";
import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Button,
} from "@tremor/react";
import { List, ListItem } from "@tremor/react";

import { getLabels } from "../../utils/api";

const cities = [
  {
    name: "Athens",
    rating: "2 samples",
  },
  {
    name: "Luzern",
    rating: "1 samples",
  },
  {
    name: "Zürich",
    rating: "0 samples",
  },
  {
    name: "Vienna",
    rating: "1 samples",
  },
  {
    name: "Ermatingen",
    rating: "0 samples",
  },
  {
    name: "Lisbon",
    rating: "0 samples",
  },
];
export default function Home() {
  function changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleSubmission(
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    throw new Error("Function not implemented.");
  }
  const { push } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("voidUser") == null) {
      push("/auth");
    }
  }, []);

  // labels that coresspond to an account
  const [labels, setLabels] = useState();

  useEffect(() => {
    const fetchLabels = async () => {
      const user = localStorage.getItem("voidUser");
      setLabels(await getLabels(user));
    };

    fetchLabels();
  }, []);

  return (
    <main className="px-12 py-12">
      <Title>VoID</Title>
      <Text>Demo of voice identification</Text>

      <Button onClick={() => localStorage.removeItem("voidUser")}>
        Log Out
      </Button>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card className="max-w-xs">
                <Title>Users</Title>
                <List>
                  {cities.map((item) => (
                    <ListItem key={item.name}>
                      <span>{item.name}</span>
                      <Button size="xs">Authenticate</Button>
                    </ListItem>
                  ))}
                </List>
              </Card>
              <Card>
                <TextInput placeholder="Name" />
                <input type="file" name="file" onChange={changeHandler} />
                <Button size="xs">Submit User</Button>
              </Card>
            </Grid>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
