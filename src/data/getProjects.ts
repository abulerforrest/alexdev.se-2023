import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  collection,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { slugify } from "../app/helpers/helpers";

const getImages = async (images: DocumentData) => {
  const fetch = images.map(async (image: DocumentReference) => {
    const snapshot = await getDoc(image);
    return snapshot.data();
  });
  const fetched: any = [];
  return fetch.map(async (a: any) => {
    const awaitedData = await a;
    fetched.push(awaitedData);
    return fetched;
  });
};

export const getProjectSlugs = async (): Promise<any> => {
  const slugs = await getDocs(collection(db, "projects")).then(
    (querySnapshot) => {
      return querySnapshot.docs.map(async (doc) => {
        const { name } = doc.data();
        const slug = slugify(name);
        return slug;
      });
    }
  );
  return slugs;
};

export const getProjects = async (): Promise<DocumentData[]> => {
  const p: Promise<DocumentData>[] = await getDocs(
    collection(db, "projects")
  ).then((querySnapshot) => {
    return querySnapshot.docs.map(async (doc) => {
      const imgs: any[] = [];
      const { name, images } = doc.data();
      const id = doc.id;
      const slug = slugify(name);
      const fetchedProject = doc.data();

      return Promise.all(
        images.map(async (image: any) => {
          const doc = await getDoc(image);
          imgs.push(doc.data());
        })
      ).then(() => {
        fetchedProject.images = imgs;
        fetchedProject.id = id;
        fetchedProject.slug = slug;
        return { ...fetchedProject };
      });
    });
  });

  return p;
};
