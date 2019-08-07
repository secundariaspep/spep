import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { SocioeducInterface } from '../models/socioeduc';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiSocioeducService {

  constructor(private asf: AngularFirestore) { }
  private socioeducCollection: AngularFirestoreCollection<SocioeducInterface>;
  private socioeducs: Observable<SocioeducInterface[]>;
  private socioeducDoc: AngularFirestoreDocument<SocioeducInterface>;
  public selectSocioeduc: SocioeducInterface = {
    id: null
  };

  getAllSocioeduc() {
    this.socioeducCollection = this.asf.collection<SocioeducInterface>('socioeduc');
    return this.socioeducs = this.socioeducCollection.snapshotChanges()
      .pipe(map(change => {
        return change.map(action => {
          const data = action.payload.doc.data() as SocioeducInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

}
