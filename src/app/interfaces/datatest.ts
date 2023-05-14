
export const Personne = [
    {
      id:1,
      name:'Dodo',
      surname:'Dodos',
      age:10,
      city:'Venise'
    },
    {
      id:2,
      name:'abba',
      surname:'abbas',
      age:40,
      city:'Montreal'
    },
    {
      id:3,
      name:'hopo',
      surname:'hopos',
      age:55,
      city:'Chicago'
    },
    {
      id:4,
      name:'datop',
      surname:'datops',
      age:75,
      city:'London'
    },
  ]

  export interface personne{
      id:number;
      name: string;
      surname:string;
      age:number;
      city:string;
  }

  export class Personnes implements personne{
      id:number;
      name: string;
      surname:string;
      age:number;
      city:string;

      constructor(){ }
  }