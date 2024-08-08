"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { POST_API_URL } from "@/app/(admin)/util/apiConstants";

const EditPostForm = ({ ticket }) => {
  const EDITMODE = ticket._id !== "new";
  const router = useRouter();
  const startingTicketData = {
    title: EDITMODE ? ticket.title : "",
    description: EDITMODE ? ticket.description : "",
    body: EDITMODE ? ticket.body : "",
    imgurl: EDITMODE ? ticket.imgurl : "",
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
    <div className="flex justify-center">
      {loading && <span className="absolute loading loading-ring loading-lg"></span>}
      <form onSubmit={handleSubmit} method="post" className=" w-full p-3 my-3">

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Enter Image URL</h3>
            <input
              id="imgurl" name="imgurl" label="Image Link" value={formData.imgurl} onChange={handleChange}
              required
              className="input input-bordered input-primary w-full"
            />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <textarea
          id="body" name="body" type="textarea" label="Body" value={formData.body} onChange={handleChange}
          required
          placeholder="Share your thoughts..."
          className="w-full h-full border-none hover:border-none bg-inherit focus-visible:border-none"
        />
        <div className="flex justify-end items-center">
          <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button>
        <input type="submit" className="btn btn-active btn-primary" value={EDITMODE ? "Save" : "Post"} />
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;