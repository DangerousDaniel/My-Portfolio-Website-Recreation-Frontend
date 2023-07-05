/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: July 5, 2023
    Description: This is javascript file is for get article all from the database web sever.
    Notes:
    Resources: 
*/

const getArticleAll = async () => {
    const response = await fetch(`https://dangerousdan996-django-backend-86bfbdd18077.herokuapp.com/article/all`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    let articlesListJsonData = null
    if (response.status === 200) {
        const data = await response.json()
        articlesListJsonData = data[0].articles

        const fetchResponse = {
            articlesListJsonData, 
            databaseMessage: data[1].database[1].message,
            isError: data[1].database[0].error
        }

        return fetchResponse
    }
    else if (response.status === 500) {
        const databaseMessage = `There is a backend Internal Server Error for ${getArticleAll.name}.`
        const isError = true

        const fetchResponse = {
            articlesListJsonData,
            databaseMessage,
            isError,
        }

        return fetchResponse
    }
    else if (response.status === 503) {
        const databaseMessage = `There is a backend Internal Server Error for ${getArticleAll.name}.`
        const isError = true

        const fetchResponse = {
            articlesListJsonData,
            databaseMessage,
            isError,
        }

        return fetchResponse
    }
}

export default getArticleAll