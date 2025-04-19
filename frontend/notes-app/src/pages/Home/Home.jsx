import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

const Home = () => {
    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 mt-8">
                    <NoteCard
                        title="Meeting"
                        date="222 2 22"
                        content="Metting"
                        tags="#meeting #work"
                        isPinned={true}
                        onEdit={() => {}}
                        onDelete={() => {}}
                        onPinNote={() => {}}
                    />
                </div>
            </div>

            <button
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
                onClick={() => {
                    setOpenAddEditModal({
                        isShown: true,
                        type: "add",
                        data: null,
                    });
                }}
            >
                <MdAdd className="text-[32px] text-white" />
            </button>

            <Modal
                isOpen={openAddEditModal.isShown}
                onRequestClose={() =>
                    setOpenAddEditModal({ ...openAddEditModal, isShown: false })
                }
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.2)", // Fixed typo
                    },
                }}
                contentLabel="Add or Edit Notes Modal" // Fixed typo and added meaningful label
            >
                <AddEditNotes />
            </Modal>
        </>
    );
};

export default Home;