class Task {
  constructor( public id: string, public creator: string , public status: string, public title: string ,
               public description: string  , public  shared?: string) {
  }
}

export  default  Task;
