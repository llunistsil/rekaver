import {BehaviorSubject} from "rxjs";


export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false);
  image$  = new BehaviorSubject<string>('');
  open(newImage:string){
    this.image$.next(newImage);
    this.isVisible$.next(true);
  }
  close(){
    this.isVisible$.next(false);
  }

  constructor() { }
}
