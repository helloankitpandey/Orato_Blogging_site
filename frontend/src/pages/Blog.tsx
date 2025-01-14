
// this is perfect usecase of -
// atomFamilies/selectorfamilies

import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";

// when we open first time then there was loader but when we open it second time then there was not a loader


export const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
    id: id || ""
  });
  
  if (loading || !blog) {
    return <div>
        <Appbar />
    
        <div className="h-screen flex flex-col justify-center">
            
            <div className="flex justify-center">
                <Spinner />
            </div>
        </div>
    </div>
}

  return (
    <div>
        <FullBlog blog={blog} />
    </div>
  )
}
