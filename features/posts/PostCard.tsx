import { PostEntity } from "../../common/types/types";
import { useRef, useState } from "react";
import Image from "next/image";
import { useDeletePostMutation } from "./postApi";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface DeleteDialogProps {
  isOpen: boolean;
  deletePost(): void;
  closeDialog(): void;
}

const DeleteDialog = ({
  isOpen,
  deletePost,
  closeDialog,
}: DeleteDialogProps) => {
  const cancelRef = useRef() as any;

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={closeDialog}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You cant undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={closeDialog}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deletePost} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export const PostCard = ({ post }: { post: PostEntity }) => {
  const { title, content, imgUrl, id } = post;
  const [
    deletePostTrigger, // This is the mutation trigger
    { isLoading, data }, // This is the destructured mutation result
  ] = useDeletePostMutation();
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const closeDialog = () => setIsOpenDialog(false);

  const openDialog = () => setIsOpenDialog(true);

  const deletePost = () => {
    deletePostTrigger(id);
    closeDialog();
  };

  return (
    <article className="border-2 border-transparent flex flex-col h-140 overflow-hidden relative rounded-lg shadow-2xl shadow-blue-500 w-118">
      <div className="bg-indigo-100 font-medium px-4 py-2 text-2xl text-cyan-800 relative">
        <h2>{title}</h2>
        <button
          onClick={openDialog}
          className="absolute bg-blue-400 bottom-2 h-10 right-4 rounded-full w-10"
        >
          <Image
            alt={"post-img"}
            width="20"
            height="20"
            objectFit="cover"
            src={`/trash.svg`}
          />
        </button>
      </div>
      <div className="relative flex-grow">
        <Image
          alt={"post-img"}
          layout="fill"
          objectFit="cover"
          src={`/postAssets${imgUrl}`}
        />
      </div>
      <p className="absolute backdrop-blur-lg bottom-0 px-2 py-2 text-black text-center text-lg">
        {content}
      </p>
      <DeleteDialog
        isOpen={isOpenDialog}
        deletePost={deletePost}
        closeDialog={closeDialog}
      />
    </article>
  );
};
