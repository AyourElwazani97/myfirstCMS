import { useRouter } from "next/router";
import EachPostById from "../../../posts.json";
function PostById() {
  const router = useRouter();
  const getIndex = EachPostById.findIndex(async (el) => {
    const checkIndex = el.id == router.query.id;
    return checkIndex;
  });
  const getArraybyItsIndex = [EachPostById[getIndex]];
  return (
    <div>
      <div>
        {getArraybyItsIndex.map((post, i) => {
          return (
            <div key={i}>
              <h1>{post.date}</h1>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostById;
