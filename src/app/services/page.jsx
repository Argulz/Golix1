import React from 'react';
import { getUsers, createUsers, updateUsers , updateManyUsers, updateCreateUsers, updateCreateUsersTodo, deleteUser, deleteManyUsers } from '../../../utils/usersQuery';
import { createTodo, updateTodoFromUser } from '../../../utils/todoQuery';

// import { usePathname, useRouter } from 'next/navigation';

const page = async ({searchParams}) => {
// const users = await getUsers( {name : searchParams.a})
// const createduser = await createUsers( { name : searchParams.q } )
// const createdTodo = await createTodo ()
// const updateduser = await updateUsers() 
// const updatedusers = await updateManyUsers()
// const updatedcreatedusertodo = await updateCreateUsersTodo()
// const deletedUser = await deleteUser()
const deletedusers = await deleteManyUsers()
// console.log(searchParams);    
console.log(deletedusers);
// console.log(JSON.stringify(users, null , 2));    
    return ( 
        <div>
            azert
        </div>
    );
};

export default page; 