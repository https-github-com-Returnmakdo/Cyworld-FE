import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPencil,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquarePlus,
  faSquareMinus,
} from "@fortawesome/free-regular-svg-icons";
import PostModal from "../modal/PostModal";

function Diary() {
  const [Modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <PageBox>
      <Content>
        <DiaryBox>
          {" "}
          {/* DiaryBox 안의 내용은 map으로 보여주기 */}
          <Posting>
            다이어리를 작성해 볼까요?
            <FontAwesomeIcon
              icon={faSquarePlus}
              style={{
                verticalAlign: "middle",
                marginLeft: "10px",
                scale: "1.6",
                cursor: "pointer",
              }}
              onClick={openModal}
            />
            <PostModal open={Modal} close={closeModal} header="Modal heading" />
          </Posting>
          <PostInfo>
            <PostDate>2022-10-29</PostDate>
            <PostNum>No.1</PostNum>
          </PostInfo>
          <DiaryImg>
            <img
              alt="WindGirl"
              style={{ width: "100%", height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSti8jxsmMY-Ttt8TF1pyj6_a8sM7x338Exhw&usqp=CAU"
            />
          </DiaryImg>
          <PostContent>다이어리 글 내용</PostContent>
          <CommentInputBox>
            <Commentinput placeholder="댓글을 작성해주세요." />
            <CommentSave>
              <FontAwesomeIcon icon={faCheck} style={{ marginTop: "-1.5px" }} />
            </CommentSave>
          </CommentInputBox>
          <CommentListBox>
            <Comment>댓글</Comment>
            <CommentEdit>
              <FontAwesomeIcon icon={faPencil} style={{ marginTop: "-1px" }} />
            </CommentEdit>
            <CommentDelete>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ marginTop: "-1px" }}
              />
            </CommentDelete>
          </CommentListBox>
          <PostInfo>
            <PostDate>2022-10-29</PostDate>
            <PostNum>No.1</PostNum>
          </PostInfo>
          <DiaryImg>
            <img
              alt="WindGirl"
              style={{ width: "100%", height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSti8jxsmMY-Ttt8TF1pyj6_a8sM7x338Exhw&usqp=CAU"
            />
          </DiaryImg>
          <PostContent>다이어리 글 내용</PostContent>
          <CommentInputBox>
            <Commentinput placeholder="댓글을 작성해주세요." />
            <CommentSave>
              <FontAwesomeIcon icon={faCheck} style={{ marginTop: "-1.5px" }} />
            </CommentSave>
          </CommentInputBox>
          <CommentListBox>
            <Comment>댓글</Comment>
            <CommentEdit>
              <FontAwesomeIcon icon={faPencil} style={{ marginTop: "-1px" }} />
            </CommentEdit>
            <CommentDelete>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ marginTop: "-1px" }}
              />
            </CommentDelete>
          </CommentListBox>
          <PostInfo>
            <PostDate>2022-10-29</PostDate>
            <PostNum>No.1</PostNum>
          </PostInfo>
          <DiaryImg>
            <img
              alt="WindGirl"
              style={{ width: "100%", height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSti8jxsmMY-Ttt8TF1pyj6_a8sM7x338Exhw&usqp=CAU"
            />
          </DiaryImg>
          <PostContent>다이어리 글 내용</PostContent>
          <CommentInputBox>
            <Commentinput placeholder="댓글을 작성해주세요." />
            <CommentSave>
              <FontAwesomeIcon icon={faCheck} style={{ marginTop: "-1.5px" }} />
            </CommentSave>
          </CommentInputBox>
          <CommentListBox>
            <Comment>댓글</Comment>
            <CommentEdit>
              <FontAwesomeIcon icon={faPencil} style={{ marginTop: "-1px" }} />
            </CommentEdit>
            <CommentDelete>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ marginTop: "-1px" }}
              />
            </CommentDelete>
          </CommentListBox>
          <PostInfo>
            <PostDate>2022-10-29</PostDate>
            <PostNum>No.1</PostNum>
          </PostInfo>
          <DiaryImg>
            <img
              alt="WindGirl"
              style={{ width: "100%", height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSti8jxsmMY-Ttt8TF1pyj6_a8sM7x338Exhw&usqp=CAU"
            />
          </DiaryImg>
          <PostContent>다이어리 글 내용</PostContent>
          <CommentInputBox>
            <Commentinput placeholder="댓글을 작성해주세요." />
            <CommentSave>
              <FontAwesomeIcon icon={faCheck} style={{ marginTop: "-1.5px" }} />
            </CommentSave>
          </CommentInputBox>
          <CommentListBox>
            <Comment>댓글</Comment>
            <CommentEdit>
              <FontAwesomeIcon icon={faPencil} style={{ marginTop: "-1px" }} />
            </CommentEdit>
            <CommentDelete>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ marginTop: "-1px" }}
              />
            </CommentDelete>
          </CommentListBox>
        </DiaryBox>
      </Content>
    </PageBox>
  );
}

export default Diary;

//흰색박스
const PageBox = styled.div`
  width: 643px;
  height: 562px;
  margin-left: -22%;
  margin-top: 17px;
  display: flex;
  position: absolute;
  flex-direction: column;
`;

//도메인주소
const Domain = styled.div`
  display: flex;
  flex: 0.1;
  margin: 15px 0px 0px 460px;
  font-size: 0.8rem;
`;

//컨텐츠 들어갈 박스
const Content = styled.div`
  flex: 2;
  margin: 3px 0px 15px 15px;
  background-color: white;
  border-radius: 9px;
  border: 1px solid #cdd5d8;
  padding: 3%;
`;

const Posting = styled.div`
  width: 95%;
  margin: 10px auto auto auto;
  font-size: 0.9rem;
`;

const DiaryBox = styled.div`
  width: 100%;
  height: 500px;
  margin: auto;
  padding: 5px;
  border: 1px dashed #cdd5d8;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #cdd5d8;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #a3a3a3;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const PostInfo = styled.div`
  display: flex;
  margin-left: 14px;
  margin-top: 10px;
`;

const PostDate = styled.div`
  font-size: 0.8rem;
`;
const PostNum = styled.div`
  margin-left: 10px;
  font-size: 0.8rem;
`;

const DiaryImg = styled.div`
  width: 95%;
  height: 300px;
  margin: 5px auto;
`;

const PostContent = styled.div`
  width: 95%;
  height: 100px;
  margin: 5px auto auto auto;
  padding: 5px;
  display: flex;
  border: 1px solid #cdd5d8;
  font-size: 0.8rem;
`;

const CommentInputBox = styled.div`
  width: 95%;
  height: 30px;
  margin: 5px auto auto auto;
  padding: 5px;
  border: 1px solid #cdd5d8;
  font-size: 0.8rem;
`;

const Commentinput = styled.input`
  width: 90%;
  height: 20px;
  border: none;
  font-size: 0.7rem;
  vertical-align: middle;
`;

const CommentSave = styled.button`
  width: 45px;
  height: 20px;
  margin-left: 5px;
  vertical-align: middle;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
`;

const CommentListBox = styled.div`
  width: 95%;
  height: 70px;
  margin: 5px auto auto auto;
  padding: 5px;
  display: flex;
  border: 1px solid #cdd5d8;
`;

const Comment = styled.div`
  width: 85%;
  height: 20px;
  padding: 2px;
  border: 1px solid #cdd5d8;
  font-size: 0.8rem;
`;

const CommentEdit = styled.button`
  width: 33px;
  height: 20px;
  margin-left: 5px;
  vertical-align: middle;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 0.3rem;
`;
const CommentDelete = styled.button`
  width: 33px;
  height: 20px;
  margin-left: 5px;
  vertical-align: middle;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 0.3rem;
`;
