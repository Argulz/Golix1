import prisma from "./prismaClient";

export const getUsers = async ({ name }) => {
    try {

        const result = await prisma.users.findMany({
            select: {
                firstName: true,
                lastName: true,
                createdAt: true,
                // todo : {
                //         include : {
                //             tags : true 
                //         }
                //     }
            },
            where: {
                firstName: name
            }
            // where: {
            //     OR: [
            //         {
            //             firstName: {
            //                 startsWith: 'V'
            //             }
            //         },
            //         {
            //             validated : true
            //         }
            //     ],
            //     NOT: [
            //         {
            //             firstName: { startsWith: 'V' }
            //         }  
            //     ]  
            // },
            /********************************* Order by ***************************/
            // orderBy : {
            //     firstName : 'asc'
            // }
            /*********************Nombre d'enregistrement à sauter (pagination) ***********************************/
            // skip : 2
            /*************** Nombre des premiers enrégistrements à prendre (pagnation) ********************/
            // take: 2

            /**************************** Valeur distincts  ********************************************************* */
            // distinct: ["validated"],

            /**************************** Imbrication d'inclusion et types de where  ********************************************************* */

            // include : {
            //     todo : {
            //         include : {
            //             tags : true 
            //         }
            //     }
            // }  
            // where : {
            //     firstName : "Iseria",
            // }
            // where : {
            //     firstName : {
            //         startsWith : 'V'
            //     }
            // }

        })

        /******************************* Récupérer tout les utilisateurs *********************************************************** */

        //  const result = await prisma.users.findMany() si pas d'attribut spécifique à récupérer


        /******************************* Recherche unique (marche uniquement avec attributs définis comme unique ) *********************************************************** */
        // const result = await prisma.users.findUnique({
        //     where : {
        //         id : 3
        //     }
        // })

        /******************************* GROUP BY *********************************************************** */

        // const result = await prisma.users.groupBy({
        //     by : ["validated"],
        //     _count : true  
        // })

        /******************************* COUNT *********************************************************** */

        // const result = await prisma.users.count({
        //     where: {
        //         validated: true
        //     }
        // })

        /******************************* fonctions de statistiques (moyenne, somme, min, max) *********************************************************** */

        // const result = await prisma.users.aggregate({
        // _sum : {
        //    createdAt : true  // Colonne pour laquelle vous souhaitez calculer la somme
        // },
        // _avg: {    
        //   columnName: true, // Colonne pour laquelle vous souhaitez calculer la moyenne 
        // },
        // _count: true, // Comptage du nombre total de lignes
        // _min: {
        //   columnName: true, // Colonne pour laquelle vous souhaitez trouver la valeur minimale
        // },
        // _max: {
        //   createdAt: true, // Colonne pour laquelle vous souhaitez trouver la valeur maximale
        // },
        //   });


        return result;
    } catch (error) {
        console.log(error);
    } finally {
        prisma.$disconnect();
    }
}

export const createUsers = async ({ name }) => {
    const usersData = [
        {
            firstName: 'Despia',
            lastName: 'Despian',
            validated: false,
        },
        {
            firstName: 'Quatetrix',
            lastName: 'Despian',
            validated: true,
        }
    ]

    const userDataTodo = {
        firstName: 'Volvidon',
        lastName: 'Monster',
        validated: false,
        todo: {
            create: [
                {
                    todoText: 'td volvidon',
                    completed: true,
                }
            ]
        }
    }



    try {
        /********************Créer un utilisateur ***********************/
        // const result = await prisma.users.create({
        //     data: {
        //         firstName : 'Armityle',
        //         lastName : 'Cryptaméron',
        //         validated : true,
        //     }
        // })
        /*********************Créer plusieurs utilisateurs *******************/
        // const result = await prisma.users.createMany({
        //      data : usersData // si plusieurs données à enrégistrer dont ceux du tableau usersData
        // })
        /*************************Créer un utilisateurs en même temps que son todo associé  ****************/
        const result = await prisma.users.create({
            data: userDataTodo
        })
        return result;
    } catch (error) {
        console.log(error);
    } finally {
        prisma.$disconnect();
    }
}

export const updateUsers = async () => {
    try {
        const updateduser = await prisma.users.update({
            where: {
                id: 2
            },
            data: {
                validated: false
            }
        })
        return updateduser
    } catch (error) {
        console.log(error);
    } finally {
        prisma.$disconnect();
    }
}

export const updateManyUsers = async () => {
    try {
        const updatedusers = await prisma.users.updateMany({
            where: {
                lastName: {
                    startsWith: 'D'
                }
            },
            data: {
                validated: false
            }
        })
        return updatedusers
    } catch (error) {
        console.log(error);
    } finally {
        prisma.$disconnect();
    }
}


export const updateCreateUsers = async () => {
    try {
        const updatedcreatedusers = await prisma.users.upsert({
            where: {
                id: 9
            },
            update: {
                validated: false
            },
            create: {
                firstName: "Dystopia",
                lastName: 'Galactic',
                validated: true,

            }
        })
        return updatedcreatedusers
    } catch (error) {
        console.log(error);
    } finally {
        prisma.$disconnect();
    }
}

export const updateCreateUsersTodo = async () => {
    try {
        const updatedcreateduserstodo = await prisma.users.upsert({
            where: {
                id: 20
            },
            update: {
                validated: false
            },
            create: {
                firstName: "Numéron X",
                lastName: 'Barian',
                validated: false,
                todo: {
                    create: [
                        {
                            todoText: 'td Barian',
                            completed: true,
                        }
                    ]

                }

            },
            include : {
                todo : true
            }
        })
        return updatedcreateduserstodo
    } catch (error) {
        console.log(error);
    } finally {
        prisma.$disconnect();
    }
}

export const deleteUser = async () => {
 
    try {
       
        const result = await prisma.users.delete({
           where : {
            id : 10
           }
        })
        return result;
    } catch (error) {
        console.log(error);
    } finally {
        prisma.$disconnect();
    }
}

export const deleteManyUsers = async () => {
 
    try {
       
        const result = await prisma.users.deleteMany({
           where : {
            firstName : {
                startsWith : 'Num'
            }
           }
        })
        return result;
    } catch (error) {
        console.log(error);
    } finally {
        prisma.$disconnect();
    }
}