import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import Music from "../models/music";

@Injectable({
  providedIn: "root"
})
export class MusicService {
  constructor(private db: AngularFirestore) {}

  getAllMusic(): Observable<Music[]> {
    var collection = this.db.collection("music");
    return collection.valueChanges().pipe(
      map(data => {
        return data.map(el => {
          return el as Music;
        });
      })
    );
  }
}
