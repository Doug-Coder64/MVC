const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    blog: 'lorem ipsum dolor sit amet blog nunc viverra dapibus montes vest  representations temp cum soluta nob et aliquet er at vero euismod tempor',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog: 'test blog with a lot of text, more than some but less than the most',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    blog: 'lorem ipsum dolor sit amet nunc  viverra dapibus montes vest  representations temp cum soluta nob et aliquet er',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    blog: 'holy cow this is a really long blog post so hopefully you enjoy all the typing it took to fill this out',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    blog: 'holy lorem ipsum is a blog now about interdum eu, tincidunt in, leo. In hac habitasse platea dictumst.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    blog: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog: 'In hac habitasse plate dictumst blog nunc  viverra dapibus montes vest  representations temp cum soluta nob et aliquet er at vero euismod tempor',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est at amet nunc  viverra dapibus montes vest  representations temp cum soluta nob et aliquet er',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    blog: 'blog',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    blog: 'blog',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog: 'blog',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    blog: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est at amet nunc  viverra dapibus montes vest  representations temp cum soluta nob et aliquet er',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    blog: 'lorem ipsum dolor sit amet blog nunc viverra dapibus montes vest  representations temp cum soluta nob et aliquet er at vero euismod tempor',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    blog: 'lorem ipsum dolor sit amet nunc  viverra dapibus montes vest  representations temp cum soluta nob et aliquet er',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    blog: 'could be a longer blog post',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    blog: 'holy cow this is a really long blog post so hopefully you enjoy all the typing it took to fill this out',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog: 'test blog with a lot of text, more than some but less than the most',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    blog: 'test blog with some text but not a lot text',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    blog: 'test blog with a bunch of text',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    blog: 'Test blog',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
