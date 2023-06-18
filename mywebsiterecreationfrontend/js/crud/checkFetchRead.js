/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: June 18, 2023
    Last Updated: June 18, 2023
    Description: This is javascript file is checking if fetch https call work or not for gets (read).
    Notes:
    Resources: 
*/

const checkFetchRead = async (status, response) => {
    if (status === 503) {
        const databaseMessage = "The Backend Server is unavailable."
        const isError = true

        const checkFetchData = {
            databaseMessage,
            isError
        }

        return checkFetchData

    } else if (status === 500) {
        const databaseMessage = "There is a backend Internal Server Error."
        const isError = true

        const checkFetchData = {
            databaseMessage,
            isError
        }

        return checkFetchData

    } 
}

export default checkFetchRead