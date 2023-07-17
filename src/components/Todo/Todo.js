import '../style/Style.css';

const MyTodoList = () => {
  const data = [
    {
      id: 1,
      title: 'Setup development environment',
      author: 'AJ',
    },
    {
      id: 2,
      title: 'Create a website and add content',
      author: 'AJ',
    },
    {
      id: 3,
      title: 'Deploy to live server',
      author: 'AJ ',
    },
  ];
  return (
    <>

      <div className="container">
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>
              By
              {item.author}
            </p>
            <button type="button" id="remove">Remove</button>
          </div>
        ))}
        <input type="text" id="title" placeholder="Your Title Here..." />
        <br />
        <input type="text" id="name" placeholder="Your Name Here..." />
        <br />
        <button type="submit">Add Book</button>
      </div>
    </>
  );
};

export default MyTodoList;
