"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { POST_API_URL } from "@/app/(admin)/util/apiConstants";
import { FaRegImage } from "react-icons/fa6";

const EditPostForm = ({ ticket }) => {
  const EDITMODE = ticket._id !== "new";
  const router = useRouter();
  const startingTicketData = {
    imgurl: EDITMODE ? ticket.imgurl : "",
    imgAlt: EDITMODE ? ticket.imgAlt : "",
    body: EDITMODE ? ticket.body : "",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = EDITMODE ? `${POST_API_URL}/${ticket._id}` : `${POST_API_URL}`;
    const method = EDITMODE ? "PUT" : "POST";
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      setLoading(false);
      throw new Error(`Failed to ${EDITMODE ? "update" : "create"} ticket`);
    }

    router.refresh();
    router.push("/");
  };



  return (
    <div >
      {loading && <span className="absolute loading loading-ring loading-lg"></span>}
      <form onSubmit={handleSubmit} method="post" className=" w-full p-3 my-3">

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Enter Image URL</h3>
            <img 
            src={formData.imgurl}
            title={formData.imgAlt}
            alt={formData.imgAlt}
            className="w-full rounded-xl"
            />
            <input
              id="imgurl" name="imgurl" label="Image Link" value={formData.imgurl} onChange={handleChange}
              required
              placeholder="Enter Your Image URL Here"
              className="input input-bordered input-info w-full my-3"
            />
            <input
              id="imgAlt" name="imgAlt" label="imgAlt Link" value={formData.imgAlt} onChange={handleChange}
              placeholder="This text will be add as Alt and title"
              className="input input-bordered input-info w-full"
            />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <textarea
          id="body" name="body" type="textarea" label="Body" value={formData.body} onChange={handleChange}
          required
          rows={10}
          cols={33}
          placeholder="Share your thoughts..."
          className="w-full h-full p-2 border-none hover:border-none bg-inherit focus-visible:border-none"
        />
        <div className="flex gap-2 justify-end items-center">
          <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}><FaRegImage size={24}/></button>
          <input type="submit" className="btn btn-active btn-info text-white" value={EDITMODE ? "Save" : "Post"} />
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;