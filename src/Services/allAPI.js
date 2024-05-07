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

// remove watch history

export const removeHistoryAPI = async (videoId) =>{

    return await commonAPI("DELETE", `${SERVER_URL}/history/${videoId}`,{})
}

// add category called by category component

export const addCategoryAPI = async(categoryDetails)=>{

    return await commonAPI("POST",`${SERVER_URL}/allCategories`,categoryDetails)
}

// get category called by category component

export const getCategoryAPI = async()=>{

    return await commonAPI("GET",`${SERVER_URL}/allCategories`,"")
}

// remove category component

export const removeCategoryAPI = async (categoryId) =>{

    return await commonAPI("DELETE", `${SERVER_URL}/allCategories/${categoryId}`,{})
}

// get video called by category component

export const getVideoAPI = async (videoId)=>{

    return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")
}

// Updating categories

export const updateCategoryAPI = async (categoryId,categoryDetails)=>{

    return await commonAPI("PUT",`${SERVER_URL}/allCategories/${categoryId}`,categoryDetails)
}

// get a single category called by category component

export const getSingleCategoryAPI = async(categoryId)=>{

    return await commonAPI("GET",`${SERVER_URL}/allCategories/${categoryId}`,"")
}


