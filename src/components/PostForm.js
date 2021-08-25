import Logo from '../images/logo10.png'

function PostForm () {
    return (
        <>
           <div className="bg-reddit_dark py-4 px-6 text-gray-400">
              <div className="border border-reddit_border p-2 rounded-md flex bg-reddit_dark">
                <div className="rounded-full bg-gray-600 overflow-hidden w-7 h-7">
                    <img src={Logo} alt="" className="h-8 w-8"></img>
                </div>
               <form action="" className="flex-grow bg-reddit_dark-brightest border border-reddit_border ml-4 mr-2 rounded-md">
                    <input type="text" className="p-2 ml-4 block flex-grow rounded-md bg-reddit_dark-brightest border-reddit_border text-sm px-3" placeholder="New Post" />
               </form>
              </div>
            </div>
        </>
    )
}


export default PostForm