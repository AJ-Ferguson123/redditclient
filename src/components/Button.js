function Button(props) {
    let classNames = "border border-gray-300 rounded-full px-3 ml-2 text-sm font-bold h-8";
    if (props.outline) {
      classNames += "text-gray-300 rounded-full";
    } else {
      classNames += "text-gray-300 bg-gray-300 text-reddit_dark";
    }
    return (
      <button {...props} className={classNames + props.className} />
    );
  }
  
  export default Button;