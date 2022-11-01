import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "./PostModal.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { __getDiary } from "../../redux/module/diaries";

const PostModal = (props) => {
  const { open, close, allDiary } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const dispatch = useDispatch();

  const [imagePreview, setImagePreview] = useState("");
  const image = watch("dirImg");
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  const onSubmit = async (data) => {
    const diaryNo = Number(allDiary.data[0].diaryNo) + 1;
    const content = data.content;
    const dirImg = data.dirImg[0];
    const formData = new FormData();
    formData.append("dirImg", dirImg);
    formData.append("content", content);
    formData.append("diaryNo", diaryNo);
    await axios({
      method: "POST",
      url: "http://3.34.122.31/api/diaries/1",
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then((res) => {
      if (res.status === 200) {
        console.log(res);
      }
    });
    alert("작성 완료!");
    close();
    dispatch(__getDiary());
  };

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
              <img alt="preview" src={imagePreview} style={{ maxWidth: "400px", marginRight: "9999px" }} />
              <UploadLabel htmlFor="picture">업로드</UploadLabel>
              <ImageInput
                type="file"
                id="picture"
                accept="image/*"
                {...register("dirImg", {
                  required: "이미지를 올리셔야 합니다!",
                })}
              />
              <InputBox>
                <DiaryInput
                  type="text"
                  placeholder="내용을 입력해주세요."
                  {...register("content", {
                    required: "내용을 입력해주세요!",
                    maxLength: {
                      value: 100,
                      message: "100자 이내로 작성해주세요",
                    },
                  })}
                />
                <InputButton>작성</InputButton>
                <p style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>{errors.content?.message}</p>
                <p style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>{errors.dirImg?.message}</p>
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
  margin-top: 19.5px;
  border-radius: 5px;
  position: fixed;
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
