import config from '../Confy/Config'
import { Client , ID , Databases , Query , Storage } from 'appwrite'

export class Service{
    client = new Client()
    databases
    bucket
    constructor(){
        this.client.setEndpoint(config.appWriteUrl).setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId }){
        try{
            return await this.databases.createDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug,{
                title,
                content,
                featuredImage,
                status,
                userId,
            })
        }catch(error){
            console.log(error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status, userId }){
        try{
            return await this.databases.updateDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug,{
                title,
                content,
                featuredImage,
                status,
                userId,
            })
        }catch(error){
            console.log(error)
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug)
            return true
        }catch(error){
            console.log(error)
            return false
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug)
        }catch(error){
            console.log(error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(config.appWriteDatabaseId,config.appWriteCollectionId,queries)
        }catch(error){
            console.log(error)
            return false
        }
    }

    async fileUpload(file){
        try {
            return await this.bucket.createFile(config.appWriteBucketId,ID.unique(),file)
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async fileUpload(fileId){
        try {
            await this.bucket.deleteFile(config.appWriteBucketId,file)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    filePrev(fileId){
        try {
            return this.bucket.getFilePreview(config.appWriteBucketId,file)
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

const service = new Service()

export default service