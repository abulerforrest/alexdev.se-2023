import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export interface IProject {
  id: string;
  name: string;
  desc: string;
}

export const getAllProjects = async () => {
  let res: IProject[] = [];
  await getDocs(collection(db, "projects")).then((querySnapshot) => {
    res = querySnapshot.docs.map((doc) => {
      const { name, desc } = doc.data();
      const id = doc.id;
      return {
        id,
        name,
        desc,
      };
    });
  });
  return res;
};
