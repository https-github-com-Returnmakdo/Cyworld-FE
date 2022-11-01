import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { __getComment } from "../../redux/module/comments";

function CommentList({ diaryId }) {
  const { comment } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComment(diaryId));
  }, []);

  return (
    <CommentListBox>
      {comment.data?.map((comm) =>
        comm.diaryId === diaryId ? (
          <div style={{ display: "flex" }} key={comm.commentId}>
            <Comment>{comm.comment}</Comment>
            <CommentEdit>
              <FontAwesomeIcon icon={faPencil} style={{ marginTop: "-1px" }} />
            </CommentEdit>
            <CommentDelete>
              <FontAwesomeIcon icon={faTrashCan} style={{ marginTop: "-1px" }} />
            </CommentDelete>
          </div>
        ) : null
      )}
    </CommentListBox>
  );
}

export default CommentList;

const CommentListBox = styled.div`
  width: 95%;
  height: 70px;
  margin: 5px auto auto 14px;
  padding: 5px;
  display: inline-block;
  border: 1px solid #cdd5d8;
  overflow-y: scroll;
`;

const Comment = styled.div`
  width: 100%;
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
