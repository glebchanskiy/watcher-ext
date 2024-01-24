import { ActionPanel, Detail, List, Action, Keyboard, Form } from "@raycast/api";
import { useEffect, useState } from "react";
import { Anime, DayOfWeek } from "./anime";
import MainScreenAction from "./MainScreenAction";
import AddNewAnimeAction from "./AddNewAnimeAction";
import { WATCHER_STORAGE_PATH } from "./config";
import fs from "fs";
import { useSimpleStore } from "./store";

export default function Command() {
  const { data, update } = useSimpleStore<Anime>({ path: WATCHER_STORAGE_PATH, debugMode: true });

  const remove = (anime: Anime) => {
    const updated = data.filter((a) => a.title !== anime.title);
    update(updated);
  };

  const add = (anime: Anime) => {
    const updated = [...data.filter((a) => a.title !== anime.title), anime];
    update(updated);
  };

  return (
    <List
      actions={
        <ActionPanel title="Controls">
          <AddNewAnimeAction add={add} />
        </ActionPanel>
      }
    >
      <List.Section title="Monday">
        {data.filter(a => a.dayOfWeek === 'mon').map((a) => (
          <List.Item
            key={a.title}
            title={a.title}
            subtitle={a.description}
            accessories={[{ text: a.dayOfWeek }]}
            actions={<MainScreenAction anime={a} remove={remove} add={add} />}
          />
        ))}
      </List.Section>
      <List.Section title="Tuesday">
        {data.filter(a => a.dayOfWeek === 'tue').map((a) => (
          <List.Item
            key={a.title}
            title={a.title}
            subtitle={a.description}
            accessories={[{ text: a.dayOfWeek }]}
            actions={<MainScreenAction anime={a} remove={remove} add={add} />}
          />
        ))}
      </List.Section>
      <List.Section title="Wednesday">
        {data.filter(a => a.dayOfWeek === 'wed').map((a) => (
          <List.Item
            key={a.title}
            title={a.title}
            subtitle={a.description}
            accessories={[{ text: a.dayOfWeek }]}
            actions={<MainScreenAction anime={a} remove={remove} add={add} />}
          />
        ))}
      </List.Section>
      <List.Section title="Thursday">
        {data.filter(a => a.dayOfWeek === 'thu').map((a) => (
          <List.Item
            key={a.title}
            title={a.title}
            subtitle={a.description}
            accessories={[{ text: a.dayOfWeek }]}
            actions={<MainScreenAction anime={a} remove={remove} add={add} />}
          />
        ))}
      </List.Section>
      <List.Section title="Friday">
        {data.filter(a => a.dayOfWeek === 'fri').map((a) => (
          <List.Item
            key={a.title}
            title={a.title}
            subtitle={a.description}
            accessories={[{ text: a.dayOfWeek }]}
            actions={<MainScreenAction anime={a} remove={remove} add={add} />}
          />
        ))}
      </List.Section>
      <List.Section title="Saturday">
        {data.filter(a => a.dayOfWeek === 'sat').map((a) => (
          <List.Item
            key={a.title}
            title={a.title}
            subtitle={a.description}
            accessories={[{ text: a.dayOfWeek }]}
            actions={<MainScreenAction anime={a} remove={remove} add={add} />}
          />
        ))}
      </List.Section>
      <List.Section title="Sunday">
        {data.filter(a => a.dayOfWeek === 'sun').map((a) => (
          <List.Item
            key={a.title}
            title={a.title}
            subtitle={a.description}
            accessories={[{ text: a.dayOfWeek }]}
            actions={<MainScreenAction anime={a} remove={remove} add={add} />}
          />
        ))}
      </List.Section>
    </List>
  );
}
