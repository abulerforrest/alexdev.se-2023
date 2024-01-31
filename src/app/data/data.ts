import {
  DocumentData,
  DocumentReference,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { slugify } from "../helpers/helpers";

export interface IProject {
  id?: string;
  name?: string;
  desc?: string;
  slug?: string;
  splashImg?: string;
  launchUrl?: string;
  githubUrl?: string;
  backgroundText?: string;
  projectQuote?: string;
  tags?: string[];
  images?: DocumentData | undefined;
}

export type IProjects = IProject[];

export const getImageById = async (ref: DocumentReference) => {
  const image = await getDoc(ref);
  return image.data();
};

export const getAllProjects = async () => {
  const slugs: string[] = [];
  const projects = await getDocs(collection(db, "projects")).then(
    (querySnapshot) => {
      return querySnapshot.docs.map((doc) => {
        const { name, images } = doc.data();
        const id = doc.id;
        const slug = slugify(name);

        return {
          id,
          name,
          slug,
          ...doc.data(),
          images,
        };
      });
    }
  );

  return { projects, projectSlugs: slugs };
};

export const getProjectById = async (id: string) => {
  let res: IProject | Record<string, unknown> = {};
  const docSnap = await getDoc(doc(db, "projects", id));
  if (docSnap.exists()) {
    const { name, desc } = docSnap.data();
    res = { name, desc, id };
  } else {
    console.log("No such document!");
  }
  return res;
};
