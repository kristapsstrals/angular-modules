export default interface Music {
  added_on: firebase.firestore.Timestamp;
  author: string;
  downloadURL: string;
  featured: boolean;
  id: string;
  name: string;
  size: number;
  title: string;
}
