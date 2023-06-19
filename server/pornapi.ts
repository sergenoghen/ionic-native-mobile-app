import axios from "axios";
import * as fs from 'fs-extra';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import * as saveAs from 'file-saver';
import * as fsPromise from 'fs/promises';
import { arrayBuffer } from "stream/consumers";
import { readFileSync, writeFileSync} from 'fs';
import { join } from 'path';
import { PornData, RawPornData } from "src/app/interfaces/pornData";
import { Data } from 'server/filmsTestData';

@Injectable({
  providedIn: 'root'
})
export class PornStarsApi {

  rawPornStarsData$ = new Observable<RawPornData>();
  pornData$ = new Observable<any[]>();
   options = {
    method: 'GET',
    url: 'https://papi-pornstarsapi.p.rapidapi.com/pornstars/',
    headers: {
      'X-RapidAPI-Key': '569cb55880mshdb35ec9335f45dfp1a8b2ajsn76e40affd78e',
      'X-RapidAPI-Host': 'papi-pornstarsapi.p.rapidapi.com'
    }
  };



  async init() {

    //this.syncWriteFile('../src/assets/example.txt', 'One\nTwo\nThree\nFour') ;
      try {
          const response = {data:}//await axios.request(this.options);
          //console.log(response.data);
          this.rawPornStarsData$ = of(response.data);
          this.pornData$ = of(response.data?.results)
          //this.writeFile(response.data);
          //console.log(response.data?.results[0].images);
          
          return response.data;
      } catch (error) {
          console.error(error);
          this.pornData$ = of(Data.results);
      }
      return this.rawPornStarsData$;
  }

  async writeFile(content:any ){
    let contenu = Object.entries(content);
    console.log((content));
    
    let file = new Blob([content], { type: 'text/json;charset=utf-8' });
    
   // console.log(file);
    
    //await fsPromise.writeFile('~/helloworld.json', 'json'); 
    
    saveAs(file, 'helloworld.json');   
  }

  
  
}