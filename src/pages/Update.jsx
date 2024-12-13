import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onHandleUpdate }) => {
  const [inputValue, setInputValue] = useState({});
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const { id } = useParams();
  const crtPrd = products.find((item) => item.id == id);
  const onUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...crtPrd, ...inputValue };
    onHandleUpdate(updateData);
  };
  return (
    <>
      <div>
        <form action="" onSubmit={onUpdate}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onInput={onHandleChange}
            defaultValue={crtPrd?.name}
          />

          <input
            type="text"
            name="price"
            placeholder="price"
            defaultValue={crtPrd?.price}
          />

          <input
            type="text"
            name="description"
            placeholder="description"
            defaultValue={crtPrd?.description}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;
