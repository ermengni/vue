module.exports={
    devServer:{
        before(app){
            app.get("/list",(req,res)=>{
                let data=require("./src/mock/data.json")
                res.send(data)
            })
        }
    }
}