import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

export const addVideoAPI = async (video)=>{

    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
    // POST should be in capital
}

//get all video by view component 
export const getAllVideoAPI = async ()=>{

    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}



// removing video
export const removeVideoAPI = async (videoId) =>{

    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${videoId}`)
}

// save history
export const saveHistoryAPI = async (video)=>{

    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// video history
export const getVideoHistoryAPI = async ()=>{

    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}