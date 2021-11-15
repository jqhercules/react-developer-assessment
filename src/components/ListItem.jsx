const ListItem = ({ author, title, publishDate }) => {
  const converDate = (dateFormat) => {
    const date = new Date(dateFormat);
    return date.toLocaleDateString(date);
  };

  return (
    <div className="lists__item">
      <p className="lists__title">{title}</p>

      <div className="lists__author">
        <img className="lists__media" src={author.avatar} alt="" />
        <h4>
          {author.name}, {converDate(publishDate)}
        </h4>
      </div>
    </div>
  );
};

export default ListItem;
