/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: June 18, 2023
    Description: This is javascript file is for article all quick view from the database web sever.
    Notes:
    Resources: 
*/

import checkFetchRead from "../../checkFetchRead"

const getArticleAllQuickView = async (offsetNum = 0, limitNum = 10) => {
    const response = await fetch(`http://35.227.50.190/article/all/quick-view/${offsetNum}/${limitNum}`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    if (response.status === 200) {
        const data = await response.json()
        const articlesListJsonData = data[0].articles

        const fetchResponse = {
            articlesListJsonData,
            databaseMessage: data[1].database[1].message,
            isError: data[1].database[0].error
        }

        return fetchResponse
        
    } else {
        const checkFetchData = await checkFetchRead(response.status, response)

        const articlesListJsonData = null
        
        const fetchResponse = {
            articlesListJsonData,
            databaseMessage: checkFetchData.databaseMessage,
            isError: checkFetchData.isError
        }

        return fetchResponse
    }
}

export default getArticleAllQuickView