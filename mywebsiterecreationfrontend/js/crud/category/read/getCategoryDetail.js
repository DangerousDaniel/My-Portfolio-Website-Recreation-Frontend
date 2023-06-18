/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: June 18, 2023
    Description: This is javascript file is for get category detail from the database web sever.
    Notes:
    Resources: 
*/

import checkFetchRead from "../../checkFetchRead"

const getCategoryDetail = async (id) => {
    const response = await fetch(`http://35.227.50.190/category/detail/${id}`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    if (response.status === 200) {
        const data = await response.json()
        const categoryJsonData = data[0].category

        const fetchResponse = {
            categoryJsonData, 
            databaseMessage: data[1].database[1].message,
            isError: data[1].database[0].error
        }

        return fetchResponse
        
    } else {
        const checkFetchData = await checkFetchRead(response.status, response)

        const categoryJsonData = null
        
        const fetchResponse = {
            categoryJsonData,
            databaseMessage: checkFetchData.databaseMessage,
            isError: checkFetchData.isError
        }

        return fetchResponse
    }
}

export default getCategoryDetail