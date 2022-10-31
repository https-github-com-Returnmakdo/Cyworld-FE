import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "./PostModal.css";

const PostModal = (props) => {
  const { open, close } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [imagePreview, setImagePreview] = useState("");
  const image = watch("image");
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  const onSubmit = () => {};

  return (
    <div className={open ? "PostModal openModal modal" : "PostModal modal"}>
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <form onSubmit={handleSubmit(onSubmit)}>
              <img src={imagePreview} style={{ maxWidth: "400px", marginRight: "9999px" }} />
              <UploadLabel for="picture">업로드</UploadLabel>
              <ImageInput type="file" id="picture" {...register("image")} />
              <InputBox>
                <DiaryInput type="text" placeholder="내용을 입력해주세요." {...register("text")} />
                <InputButton>작성</InputButton>
              </InputBox>
            </form>
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default PostModal;

const UploadLabel = styled.label`
  width: 70px;
  height: 30px;
  display: inline-block;
  margin: 5px auto auto auto;
  padding: 9px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  background-color: lightblue;
  color: #ffffff;
  font-size: 0.8rem;
  cursor: pointer;

  :hover {
    background-color: #ffffff;
    color: #000000;
    transition: 0.8s;
  }
`;

const ImageInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const InputBox = styled.div``;

const DiaryInput = styled.input`
  width: 354px;
  padding: 5px;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const InputButton = styled.button`
  width: 54px;
  height: 30px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: lightblue;
  vertical-align: middle;
  color: #ffffff;
  font-size: 0.8rem;

  :hover {
    background-color: #ffffff;
    color: #000000;
    transition: 0.8s;
  }
`;
