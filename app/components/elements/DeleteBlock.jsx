'use client'
import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ path, id }) => {
  const router = useRouter();



  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/${path}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      } else {
        console.error("Error deleting item:", res.statusText);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
    <button onClick={() => document.getElementById('deleteModal').showModal()} className="flex justify-between">
     <span>Delete the post</span>
      <span ><MdDeleteOutline size={25}/></span>
    </button>
      <dialog id="deleteModal" className="modal justify-center">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">Delete post ?</h3>
          <p className="py-4">This can not be undone and it will be removed from your profile, the timeline of any accounts that follow you,and from search results.</p>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn mr-2">Cancel</button>
              <button
                type="button"
                onClick={handleDelete}
                className="text-white btn btn-error focus:outline-none font-medium"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteBlock;