/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: July 5, 2023
    Description: This is javascript file is for get category all from the database web sever.
    Notes:
    Resources: 
*/

const getCategoryAll = async () => {
    const response = await fetch(`https://my-website-recreate-datebase-07a966ba4870.herokuapp.com/category/all`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    let categoryListJsonData = null
    if (response.status === 200) {
        const data = await response.json()
        categoryListJsonData = data[0].categories

        const fetchResponse = {
            categoryListJsonData, 
            databaseMessage: data[1].database[1].message,
            isError: data[1].database[0].error
        }

        return fetchResponse
    }
    else if (response.status === 500) {
        const databaseMessage = `There is a backend Internal Server Error for ${getCategoryAll.name}`
        const isError = true

        const fetchResponse = {
            categoryListJsonData,
            databaseMessage,
            isError,
        }

        return fetchResponse
    }
    else if (response.status === 503) {
        const databaseMessage = `There is a backend Internal Server Error for ${getCategoryAll.name}`
        const isError = true

        const fetchResponse = {
            categoryListJsonData,
            databaseMessage,
            isError,
        }

        return fetchResponse
    }
}

export default getCategoryAll