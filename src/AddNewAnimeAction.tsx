import { Action } from "@raycast/api";
import { Anime } from "./anime";
import NewAnimeForm from "./NewAnimeForm";

export default function AddNewAnimeAction({ add }: { add: (anime: Anime) => void }) {
  return <Action.Push title="Add" shortcut={{ modifiers: ["cmd"], key: "n" }} target={<NewAnimeForm add={add} />} />;
}
