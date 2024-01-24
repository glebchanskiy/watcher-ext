import { Action, ActionPanel, Form, useNavigation } from "@raycast/api";
import { Anime } from "./anime";

type NewAnimeFormProps = {
 add: (anime: Anime) => void;
};

export default function NewAnimeForm ({ add }: NewAnimeFormProps) {
 const { pop } = useNavigation();
 return (
   <Form
     actions={
       <ActionPanel>
         <Action.SubmitForm
           onSubmit={(value: Anime) => {
             console.log("onSubmit", value);
             add(value);
             pop();
           }}
         />
       </ActionPanel>
     }
   >
     <Form.TextField id="title" title="Title" placeholder="Enter title" />
     <Form.TextField id="description" title="Description" placeholder="Enter anime description (optional)" />
     <Form.Dropdown id="dayOfWeek" title="Day of week">
       <Form.Dropdown.Item value={"mon"} title="Monday" />
       <Form.Dropdown.Item value={"tue"} title="Tuesday" />
       <Form.Dropdown.Item value={"wed"} title="Wednesday" />
       <Form.Dropdown.Item value={"thu"} title="Thursday" />
       <Form.Dropdown.Item value={"fri"} title="Friday" />
       <Form.Dropdown.Item value={"sat"} title="Saturday" />
       <Form.Dropdown.Item value={"sun"} title="Sunday" />
     </Form.Dropdown>
   </Form>
 );
};