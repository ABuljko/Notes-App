import React, {useState} from "react";
import TagInput from "../../components/Input/TagInput";


const AddEditNotes = () => {

    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div>
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

            <button className="btn-primary font-medium mt-5 p-3" onClick={()=>{}}>
                ADD
            </button>
        </div>
    );
}

export default AddEditNotes;