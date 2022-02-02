import { useCreatePostMutation } from "./postApi";
import { useField } from "../../common/hooks/hooks";
import {
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";

export const PostForm = () => {
  const title = useField("text");
  const content = useField("text");
  const toast = useToast();
  const [
    createPostTrigger, // This is the mutation trigger
    { isLoading, data }, // This is the destructured mutation result
  ] = useCreatePostMutation();

  useEffect(() => {
    if (data) {
      toast({
        title: "Success.",
        description: "Your post has been created.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [data, toast]);

  const createPost = (e: React.MouseEvent) => {
    e.preventDefault();
    const newPost = {
      title: title.value,
      content: content.value,
      imgUrl: `/post${Math.ceil(Math.random() * 4)}.jpg`,
    };
    createPostTrigger(newPost);
  };

  return (
    <div className="flex flex-col flex-grow gap-3 px-4 py-2  shadow-blue-500 shadow-inner">
      <h2 className="font-mono shadow-blue-200 shadow-inner text-3xl text-center text-gray-600">
        New Post
      </h2>
      <form className="flex flex-col gap-3" action="">
        <FormControl>
          <FormLabel></FormLabel>
          <Input bg="gray.200" placeholder="Title" {...title} />
        </FormControl>
        <FormControl>
          <FormLabel></FormLabel>
          <Textarea
            bg="gray.200"
            h="96"
            placeholder="Write your post"
            {...content}
          />
        </FormControl>
        <Button isLoading={isLoading} colorScheme="blue" onClick={createPost}>
          Submit
        </Button>
      </form>
    </div>
  );
};
