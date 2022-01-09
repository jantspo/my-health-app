import axios from 'axios';

const get = async (url) => {
    try{
        const res = await axios({
            method: 'get',
            url: url
        });

        return res.data
    }catch(err){
        return err
    }
}

const post = (url, data) => {
    return axios({
        method: 'post',
        url: url,
        data: data
    })
}


const put = (url, data) => {
    return axios({
        method: 'put',
        url: url,
        data: data
    })
}

const del = (url) => {
    return axios({
        method: 'delete',
        url: url,
    })
}

export {get, post, put, del}