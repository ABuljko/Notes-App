import React from "react";

const AddEditNotes = () => {
    return (
        <div>
            <div className="flex flex-col gap-2"> 
                <label className="input-laber">TITLE</label>
                <input
                    type="text"
                    className="text-2xl text-slate-950 outline-none"
                    placeholder="Something"
                />
            </div>
        </div>
    );
}

export default AddEditNotes;