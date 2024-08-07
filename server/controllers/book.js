import book from './../models/Book.js'
import User from "./../models/User.js";

const postbook = async (req, res)=>{
    const { title, author, category, type, user } = req.body;
    const newbook = new book({
        title,
        author,
        category, 
        type, 
        user
    });
    try {
        const savedbook = await newbook.save();

        res.json({
            success: true,
            message: 'book saved successfully',
            data: savedbook
        })
    }
    catch(e){
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
}

const getbooks = async(req, res)=>{
    const {userId} = req.query;

    const user = await User.findById(userId)
    if(!user){
        return res.json({
            success: false,
            message: 'User not found',
            data: null
        })
    }
    const book = await book.find({user: userId}).sort({createdAt:-1});   //To put the recent book on the top of the list.
    res.json({
        success: true,
        message: 'book retrieved successfully',
        data: book
    })
}

const deletebook = async (req, res) => {
    try {
        const id = req.params.id;
        await Transaction.deleteOne({ _id: id });
        res.json({ success: true, message: "book deleted successfully", data : null });
    }
    catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export {postbook, getbooks, deletebook}
