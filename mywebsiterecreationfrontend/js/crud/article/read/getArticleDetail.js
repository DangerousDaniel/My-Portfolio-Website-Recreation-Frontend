/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: June 18, 2023
    Description: This is javascript file is for get article detail from the database web sever.
    Notes:
    Resources: 
*/

import checkFetchRead from "../../checkFetchRead"

const getArticleDetail = async (id) => {
    const response = await fetch(`http://35.227.50.190/article/detail/${id}`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    if (response.status === 200) {
        const data = await response.json()
        const articleJsonData = data[0].article

        const fetchResponse = {
            articleJsonData, 
            databaseMessage: data[1].database[1].message,
            isError: data[1].database[0].error
        }

        return fetchResponse
        
    } else {
        const checkFetchData = await checkFetchRead(response.status, response)
        
        const articleJsonData = null 
        
        const fetchResponse = {
            articleJsonData,
            databaseMessage: checkFetchData.databaseMessage,
            isError: checkFetchData.isError
        }

        return fetchResponse
    }
}

export default getArticleDetail