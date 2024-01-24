import { useEffect, useState } from "react";
import fs from "fs";

export const useSimpleStore = <T>(props: { path: string, debugMode?: boolean }): { data: T[], update: (data: T[]) => void } => {
 const [data, setData] = useState<T[]>([])

 useEffect(() => {
  console.log('STORE: [initialization]')

  try {
   if (fs.existsSync(props.path)) {
    console.log('STORE: [store file found]')
    const json = fs.readFileSync(props.path).toString("utf-8");
    setData(JSON.parse(json));
    console.log('STORE: [loaded]')
    if (props.debugMode) console.log('values: ', JSON.parse(json))
   } else {
    console.log('STORE: [store file NOT found, creation]')
    fs.writeFileSync(props.path, JSON.stringify([]))
    console.log('STORE: [created]')
   }

  } catch (err) { console.log(err) }

 }, []);

 const update = (values: T[]) => {
  console.log('STORE: [updated]')
  if (props.debugMode) console.log('values: ', values)

  setData([...values])

  fs.writeFileSync(
   props.path,
   JSON.stringify(values),
  );
 }

 return {
  data,
  update
 }
}
