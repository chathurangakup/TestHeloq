import Relam from 'realm';

export const TODOLIST_SCHEMA='TodoList';

export const  TodoSchema={
    name:TODOLIST_SCHEMA,
    primaryKey:'id',
    properties:{
        id:'int',
        title:{type:"string",indexed:true},
        url:{type:"string",indexed:true},
        thumbnailUrl:{type:"string",indexed:true}

    }
}

const databaseOptions={
    path:'odolistApp.relam',
    schema:[TodoSchema],
    schemaVersion:0
}


export const insertNewTodoList=newTodoList=>new Promise((resolve,reject)=>{
      Relam.open(databaseOptions).then(relam=>{
         relam.write(()=>{
             relam.create(TODOLIST_SCHEMA,newTodoList);
             resolve(newTodoList);
         })
      }).catch((e)=>{
                reject(e)
      })
})


export const deleteTodoList=todoListId=>new Promise((resolve,reject)=>{
    Relam.open(databaseOptions).then(relam=>{
       relam.write(()=>{
          let deleteTodoList=relam.objectForPrimaryKey(TODOLIST_SCHEMA,todoListId);
          relam.delete(deleteTodoList)
          resolve();
       })
    }).catch((e)=>{
              reject(e)
    })
})

export const queryAllTodoList=()=>new Promise((resolve,reject)=>{
    Relam.open(databaseOptions).then(relam=>{
        let allTodoList=relam.objects(TODOLIST_SCHEMA);
        resolve(allTodoList);
    }).catch((e)=>{
              reject(e)
    })
})

export default new Relam(databaseOptions)