import { useEffect, useState } from 'react';
import Loader from './Loader';
import LoadMore from './LoadMore';
import FilterMenu from './FilterMenu';
import ListItem from './ListItem';
import ListStyles from '../styles/ListsStyles';

const Listing = () => {
  const [loaded, setLoaded] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [postLists, setPostLists] = useState([]);
  const [categoryList, setCategories] = useState([]);
  const [selectedCategory, setSelectedItem] = useState('Choose a category');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [postLimit, setPostLimit] = useState(4);

  useEffect(() => {
    const fecthPosts = async () => {
      setLoaded(false);

      const response = await fetch('/api/posts');
      const { posts } = await response.json();

      setLoaded(true);
      setPostLists(posts);
    };

    fecthPosts();
  }, []);

  useEffect(() => {
    const filtedCategories = postLists.reduce(
      (acc, elem) => {
        for (const category of elem.categories) {
          acc.push(category.name);
        }
        return [...new Set(acc)];
      },
      ['Choose a category'],
    );

    // Return a list of post based on filter
    const showPosts = postLists.filter((post) => {
      for (const category of post.categories) {
        if (category.name === selectedCategory) return post;
        if (selectedCategory === 'Choose a category') return post;
      }
    });

    setFilteredPosts(showPosts);
    setCategories(filtedCategories);
  }, [postLists, selectedCategory]);

  const categoryFilter = {
    menuActive,
    setMenuActive,
    selectedCategory,
    setSelectedItem,
    categoryList,
  };

  const loadMore = () => {
    if (postLimit >= filteredPosts.length) return;
    setPostLimit(postLimit + 4);
  };

  return (
    <>
      {!loaded && <Loader />}
      {loaded && (
        <ListStyles>
          <h2 className="main-title">Explore by Category</h2>

          <FilterMenu categoryFilter={categoryFilter} />

          <div className="lists">
            {filteredPosts.map((post) => <ListItem key={post.id} {...post} />).splice(0, postLimit)}
          </div>

          {filteredPosts.length > postLimit && <LoadMore onClick={loadMore} />}
        </ListStyles>
      )}
    </>
  );
};

export default Listing;
