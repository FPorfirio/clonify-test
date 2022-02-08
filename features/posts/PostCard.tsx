import { PostEntity } from "../../common/types/types";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useDeletePostMutation, useUpdatePostMutation } from "./postApi";
import { DeleteDialog } from "../../common/components/DeleteDialog";
import { useDisclosure, Button } from "@chakra-ui/react";
import { useEditable } from "../../common/hooks/hooks";

export const PostCard = ({ post }: { post: PostEntity }) => {
  const { title, content, imgUrl, id } = post;

  const [
    deletePostTrigger, // This is the action that triggers the mutation query
  ] = useDeletePostMutation();
  const [
    updatePostTrigger,
    { isLoading, data }, //This is the destructured mutation result,
  ] = useUpdatePostMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    onInput,
    makeEditable,
    editableProps,
    editableValue,
    isEditable,
    editableRef,
  } = useEditable();

  const deletePost = () => {
    deletePostTrigger(id);
    onClose();
  };

  const updatePost = () => {
    const updatedPost = {
      content: editableValue,
    };
    updatePostTrigger({ id, updatedPost });
    makeEditable(!isEditable);
  };

  return (
    <article className="border-2 border-transparent flex flex-col h-140 overflow-hidden relative rounded-lg shadow-2xl shadow-blue-500 w-118">
      <div className="bg-indigo-100 h-28 font-medium px-4 py-2 text-2xl text-cyan-800 relative">
        <h2>{title}</h2>
        <div className="absolute bottom-0 flex flex-col gap-2 h-full right-2 justify-center">
          <button
            onClick={onOpen}
            className=" bg-blue-400 bottom-2 h-10 right-4 rounded-full w-10"
          >
            <Image
              alt={"post-img"}
              width="20"
              height="20"
              objectFit="cover"
              src={`/trash.svg`}
            />
          </button>
          <button
            onClick={() => {
              makeEditable(!isEditable);
            }}
            className=" bg-blue-400 bottom-2 h-10 right-4 rounded-full w-10"
          >
            <Image
              alt={"post-img"}
              width="20"
              height="20"
              objectFit="cover"
              src={`/editPen.svg`}
            />
          </button>
        </div>
      </div>
      <div className="relative flex-grow">
        <Image
          alt={"post-img"}
          layout="fill"
          objectFit="cover"
          src={`/postAssets${imgUrl}`}
        />
      </div>

      <p
        ref={editableRef}
        onInput={onInput}
        {...editableProps}
        className={`${
          isEditable
            ? "bg-white border-2 border-blue-400 h-full outline-blue-400"
            : ""
        } absolute backdrop-blur-lg bottom-0 px-2 py-2 text-black text-center text-lg`}
      >
        {content}
      </p>
      {isEditable && (
        <div className="absolute bottom-2 flex gap-8 items-center justify-center left-0 w-full">
          <Button variant="outline" colorScheme="blue" onClick={updatePost}>
            Save
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            onClick={() => {
              makeEditable(!isEditable);
            }}
          >
            Cancel
          </Button>
        </div>
      )}

      <DeleteDialog
        isOpen={isOpen}
        deletePost={deletePost}
        closeDialog={onClose}
      />
    </article>
  );
};
