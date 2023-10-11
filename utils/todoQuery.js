import prisma from "./prismaClient";

export const createTodo = async () => {

    const todoData = {
        todoText : 'td second',
        completed : true ,
        userID : 7
    }

    try {
        const result = await prisma.todo.create({
            data : todoData,
        })
        return result
    } catch (error) { 
        console.log(error);
    } finally {
        prisma.$disconnect();
    }


}

export const updateTodoFromUser = async () => {

    try {
        const result = await prisma.todo.updateMany({
            where : {
                user : {
                    validated : false,
                    id : 9
                }
            },
            data : {
                completed : false,
            }
        })
        return result
    } catch (error) { 
        console.log(error);
    } finally {
        prisma.$disconnect();
    }


}