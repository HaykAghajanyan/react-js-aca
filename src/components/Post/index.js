const Post = ({ author, date, text }) => {
    return (
        <div className='message-item'>
            <div className='message-item-header'>
                <p> </p>
                <p>Sent by: {author}</p>
                <p>{date}</p>
            </div>
            <div>{text}</div>
        </div>
    )
}

export default Post
