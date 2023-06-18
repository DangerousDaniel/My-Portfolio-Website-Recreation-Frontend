/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: June 18, 2023
    Description: This is javascript file is for get category all from the database web sever.
    Notes:
    Resources: 
*/

import checkFetchRead from "../../checkFetchRead"

const getCategoryAll = async () => {
    const response = await fetch(`http://35.227.50.190/category/all`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    if (response.status === 200) {
        const data = await response.json()
        const categoryListJsonData = data[0].categories

        const fetchResponse = {
            categoryListJsonData,
            databaseMessage: data[1].database[1].message,
            isError: data[1].database[0].error
        }

        return fetchResponse
        
    } else {
        const checkFetchData = await checkFetchRead(response.status, response)

        const categoryListJsonData = null

        const fetchResponse = {
            categoryListJsonData,
            databaseMessage: checkFetchData.databaseMessage,
            isError: checkFetchData.isError
        }

        return fetchResponse
    }
}

export default getCategoryAll