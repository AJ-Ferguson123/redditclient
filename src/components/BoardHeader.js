import Dev from '../images/webDev.png'

function BoardHeader () {
    return (
        <>
            <div className="subheader">
        <img src="https://styles.redditmedia.com/t5_2qs0q/styles/bannerBackgroundImage_7glcgg5ymxp21.png?width=4000&s=9684bc66e812b8730ad694c3f454da8c00a493d7" alt="" className="h-24 w-screen"></img>
      </div> 
         <div className="bg-reddit_dark-brighter">
           <div className="mx-6 relative flex">
          <div className="h-20 w-20">
            <img src={Dev} alt="" className="rounded-full overflow-hidden relative -top-5"></img>
          </div>
          <div className="pt-2 pl-4">
            <h1 className="text-white text-2xl">webdev: reddit for web developers</h1>
            <h6 className="text-gray-400 text-sm">r/webdev</h6>
          </div>
         </div>
         </div>
        </>
    );
}

export default BoardHeader
