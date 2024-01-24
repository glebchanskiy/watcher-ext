import { Action, ActionPanel, confirmAlert, showToast } from "@raycast/api";
import { Anime } from "./anime";
import AddNewAnimeAction from "./AddNewAnimeAction";

type MainScreenActionProps = {
  anime: Anime;
  remove: (anime: Anime) => void;
  add: (anime: Anime) => void;
};

export default function MainScreenAction({ anime, remove, add }: MainScreenActionProps) {
  const removeAnime = async () => {
    if (await confirmAlert({ title: "Are you sure?" })) {
      remove(anime);
      await showToast({ title: "Deleted", message: anime.title });
    }
  };

  const removeAnimeForce = async () => {
    remove(anime);
    await showToast({ title: "Deleted", message: anime.title });
  };

  const addNewAnime = async (anime: Anime) => {
    add(anime);
    await showToast({ title: "New Anime!", message: anime.title });
  };

  return (
    <ActionPanel title="Controls" >
      <Action.CopyToClipboard title="Copy Title" content={anime.title} />
      <Action close-curly title="Remove Force" shortcut={{ modifiers: ["cmd", "shift"], key: "d" }} onAction={removeAnimeForce} />
      <Action title="Remove" shortcut={{ modifiers: ["cmd"], key: "d" }} onAction={removeAnime} />
      <AddNewAnimeAction add={addNewAnime} />
    </ActionPanel>
  );
}
