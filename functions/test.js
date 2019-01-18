
    const contentful = require('contentful-management')
  const  cmKey = 'CFPAT-37d38cd0f0b9827644ff79a41a7d7429d9160d76ee6c55e9c41f196aa1a99d39'
 const   contentType = 'form'
 const  spaceID = 'odag36l0be4v'
exports.handler = function(name, subject, email, message, event, context, callback){


    // const env = dotenv.config().parsed;
    // const api = process.env.API_KEY
    const client = contentful.createClient({
        accessToken: cmKey
      })
    

    client.getSpace(spaceID)
    .then((space) => space.createEntry(contentType, {
        fields: {
            name: {
                'en-US': name
            },
            subject: {
                'en-US': subject
            },
            eMail: {
                'en-US': email
            },
            message: {
                'en-US': message
            }
        }
      }
    ))
     .then(entry =>{
        callback(null, {
            statusCode:200,
            body: 'Success!',
        })
    })
    .catch(console.error)
}

    // axios({
    //     headers:{
    //         accessToken:cmaApiKey
    //     },
    //     method:'put',
    //     url:'https://api.contentful.com/ateljestudio/form/name/name',
    //     data:'ana',

        
    // })
    // .then(response =>{
    //     console.log(response)
    //     callback(null, {
    //         statusCode:200,
    //         body: 'yey!!',
    //     })
    // })
    // .catch(err=>{
    //     console.log(err)
    // })
   


