/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: July 5, 2023
    Description: This is javascript file is for get article detail from the database web sever.
    Notes:
    Resources: 
*/

const getArticleDetail = async (id) => {
    const response = await fetch(`https://my-website-recreate-datebase-07a966ba4870.herokuapp.com/article/detail/${id}`, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })

    let articleJsonData = null
    if (response.status === 200) {
        const data = await response.json()
        articleJsonData = data[0].article

        const fetchResponse = {
            articleJsonData, 
            databaseMessage: data[1].database[1].message,
            isError: data[1].database[0].error
        }

        return fetchResponse
    }
    else if (response.status === 500) {
        const databaseMessage = `There is a backend Internal Server Error for ${getArticleDetail.name}`
        const isError = true

        const fetchResponse = {
            articleJsonData,
            databaseMessage,
            isError,
        }

        return fetchResponse
    }
    else if (response.status === 503) {
        const databaseMessage = `There is a backend Internal Server Error for ${getArticleDetail.name}`
        const isError = true

        const fetchResponse = {
            articleJsonData,
            databaseMessage,
            isError,
        }

        return fetchResponse
    }
}

export default getArticleDetail