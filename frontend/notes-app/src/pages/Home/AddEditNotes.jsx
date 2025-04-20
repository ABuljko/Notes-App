import React, {useState} from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";


const AddEditNotes = ({onclose, type, noteData}) => {

    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [error, setError] = useState(null);

    const addNewNote = async () => {};

    const editNote = async () => {};

    const handleAddNote = () => {
        if(!title) {
            setError("Please enter the title");
            return;
        }
        if(!content) {
            setError("Please enter the content");
            return;
        }
        setError("");

        if(type=="edit"){
            editNote()
        }else{
            addNewNote()
        }
    };   
    
    

    return (
        <div className="relative">

            <button
            className="w-10 h-10 rounded-full flex items-center absolute -top-2 -right-2 hover:bg-slate-500"
            onClick={onclose}
            >
                <MdClose className="text-xl text-slate-400" />
            </button>

            <div className="flex flex-col gap-2"> 
                <label className="input-laber">TITLE</label>
                <input
                    type="text"
                    className="text-2xl text-slate-950 outline-none"
                    placeholder="Something"
                    value={title}
                    onChange={({target}) => setTitle(target.value)}
                />
            </div>

            <div className="flex felx-col gap-2 mt-4">
                <label className="input-laber">DESCRIPTION</label>
                <textarea
                    rows={10}
                    className="text-sm text-slate-950 outline-none bg-white-50 p-2 rounded"
                    placeholder="Content"
                    value={content}
                    onChange={({target}) => setContent(target.value)}
                />
            </div>

            <div className="mt-3">
                <label className="input-laber">TAGS</label>
                <TagInput tags={tags} setTags={setTags}/>
            </div>

            {error && <p className="text-red-500 text-sx mt-4">{error}</p>}

            <button className="btn-primary font-medium mt-5 p-3" 
            onClick={handleAddNote}>
                ADD
            </button>
        </div>
    );
}

export default AddEditNotes;