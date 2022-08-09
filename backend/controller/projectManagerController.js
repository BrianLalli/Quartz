const router = require('express').Router();
const {projectManagerModel} = require('../model/projectManagerModel');
const asyncHandler = require('express-asyn-handler');

const getManger = asyncHandler(async (req, res) => {
   try{
     projectManagerModel.find().then((data) => {
        res.status(200).json(data)
    })
}catch(err){
    res.sendFile(path.join(_dirname, '../../public/404image.jpg'));
}
});

const setManager = asyncHandler(async (req, res) => {
    console.info('New Manager added'.green)
    projectManagerModel.create(req.body).then((data) => {
        res.status(200).json(data)
    })
});

const deleteManager = asyncHandler(async (req, res) => {
    projectManagerModel.destroy({ _id: req.session.projectManagerId }).then((data) => {
        res.status(200).json({ message: `delete Manager ${req.params.id}` })
    })
});

const updateManager = asyncHandler(async (req, res)=>{
    const updatedManager = await projectManagerModel.findOneAndUpdate(
        { _id: req.session.userId },
        // { _id: req.params.userId },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );

    res.status(200).json({ message: `update Manager ${req.params.id}`,  updatedManager})
})

module.exports ={
    getManger,
    setManager,
    deleteManager,
    updateManager
}



router.get('*', (req, res)=>
res.sendFile(path.join(_dirname, '../../public/404image.jpg')));


// create project manager
// router.post('/', async (req,res)=>{
//     try{
//     const managerData = await projectManagerModel.create(req.body);
//     res.status(200).json(managerData);
// }
// finally{
//     console.log (managerData);
// }
// });

// // delete manager
// router.delete('/:id', async (req,res)=>{
//     try{
//         const managerData = await projectManagerModel.destroy({
//             where: {id: req.params.id}
//         });
//         if (!managerData){
//             res.status(404).json({message: 'No manager found'});
//             return;
//         }
//         res.status(200).json(managerData);
//     }catch (err){
//         res.status(500).json(err)
//     }
// });