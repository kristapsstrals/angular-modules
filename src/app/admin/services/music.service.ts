import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MusicService {
  constructor(private db: AngularFirestore) {}

  getAllMusic(): Observable<any[]> {
    var collection = this.db.collection("music");
    return collection.valueChanges();
  }
}
