import Mock from 'mockjs';

export const movieList = () => {
  const movieList = Mock.mock({
    'list|1-20': [
      {
        'name|1': ['八佰', '大师兄', '叶问', '花木兰'],
        'nation|1': ['中国大陆', '台湾'],
        'poster|1': [
          'https://pic.maizuo.com/usr/movie/c685628d1c1d5b05594618fd82b423a3.jpg',
          'https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg',
          'https://pic.maizuo.com/usr/movie/a18739fd30d4b1b9e9a16a92bda44998.jpg',
          'https://pic.maizuo.com/usr/movie/376063f0e99a33e47f97ed6f080ddaa4.jpg',
          'https://pic.maizuo.com/usr/movie/98d4f877ba00db820c03cea1070654c4.jpg',
          'https://pic.maizuo.com/usr/movie/9ff5d9790a8b5ae573552f83af3e506c.jpg',
        ],
        'grade|1': ['7.1', '6.4', '8.3', '6.6'],
        'runtime|1': [165, 140, 180, 166],
        filmType: {
          'name|1': ['2D', '3D'],
          value: 1,
        },
        actors: [
          {
            'name|1': ['管虎', '张泽', '姜武','王千源', '黄志忠'],
            'role|1': ['导演', '编剧', '老铁','羊拐', '老葫芦'],
            'avatarAddress|+1': [
              'https://pic.maizuo.com/usr/movie/c685628d1c1d5b05594618fd82b423a3.jpg',
              'https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg',
              'https://pic.maizuo.com/usr/movie/a18739fd30d4b1b9e9a16a92bda44998.jpg',
              'https://pic.maizuo.com/usr/movie/376063f0e99a33e47f97ed6f080ddaa4.jpg',
              'https://pic.maizuo.com/usr/movie/98d4f877ba00db820c03cea1070654c4.jpg',
              'https://pic.maizuo.com/usr/movie/9ff5d9790a8b5ae573552f83af3e506c.jpg',
            ],
          },
          {
            'name|1': ['管虎', '张泽', '姜武','王千源', '黄志忠'],
            'role|1': ['导演', '编剧', '老铁','羊拐', '老葫芦'],
            'avatarAddress|+1': [
              'https://pic.maizuo.com/usr/movie/c685628d1c1d5b05594618fd82b423a3.jpg',
              'https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg',
              'https://pic.maizuo.com/usr/movie/a18739fd30d4b1b9e9a16a92bda44998.jpg',
              'https://pic.maizuo.com/usr/movie/376063f0e99a33e47f97ed6f080ddaa4.jpg',
              'https://pic.maizuo.com/usr/movie/98d4f877ba00db820c03cea1070654c4.jpg',
              'https://pic.maizuo.com/usr/movie/9ff5d9790a8b5ae573552f83af3e506c.jpg',
            ],
          },
          {
            'name|1': ['管虎', '张泽', '姜武','王千源', '黄志忠'],
            'role|1': ['导演', '编剧', '老铁','羊拐', '老葫芦'],
            'avatarAddress|+1': [
              'https://pic.maizuo.com/usr/movie/c685628d1c1d5b05594618fd82b423a3.jpg',
              'https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg',
              'https://pic.maizuo.com/usr/movie/a18739fd30d4b1b9e9a16a92bda44998.jpg',
              'https://pic.maizuo.com/usr/movie/376063f0e99a33e47f97ed6f080ddaa4.jpg',
              'https://pic.maizuo.com/usr/movie/98d4f877ba00db820c03cea1070654c4.jpg',
              'https://pic.maizuo.com/usr/movie/9ff5d9790a8b5ae573552f83af3e506c.jpg',
            ],
          },
          {
            'name|1': ['管虎', '张泽', '姜武','王千源', '黄志忠'],
            'role|1': ['导演', '编剧', '老铁','羊拐', '老葫芦'],
            'avatarAddress|+1': [
              'https://pic.maizuo.com/usr/movie/c685628d1c1d5b05594618fd82b423a3.jpg',
              'https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg',
              'https://pic.maizuo.com/usr/movie/a18739fd30d4b1b9e9a16a92bda44998.jpg',
              'https://pic.maizuo.com/usr/movie/376063f0e99a33e47f97ed6f080ddaa4.jpg',
              'https://pic.maizuo.com/usr/movie/98d4f877ba00db820c03cea1070654c4.jpg',
              'https://pic.maizuo.com/usr/movie/9ff5d9790a8b5ae573552f83af3e506c.jpg',
            ],
          },
          {
            'name|1': ['管虎', '张泽', '姜武','王千源', '黄志忠'],
            'role|1': ['导演', '编剧', '老铁','羊拐', '老葫芦'],
            'avatarAddress|+1': [
            'https://pic.maizuo.com/usr/movie/c685628d1c1d5b05594618fd82b423a3.jpg',
            'https://pic.maizuo.com/usr/movie/09348aa4f961d2cb7e8f7c1e5f6e4e90.jpg',
            'https://pic.maizuo.com/usr/movie/a18739fd30d4b1b9e9a16a92bda44998.jpg',
            'https://pic.maizuo.com/usr/movie/376063f0e99a33e47f97ed6f080ddaa4.jpg',
            'https://pic.maizuo.com/usr/movie/98d4f877ba00db820c03cea1070654c4.jpg',
            'https://pic.maizuo.com/usr/movie/9ff5d9790a8b5ae573552f83af3e506c.jpg',
          ],
          },
        ],
      }
    ]
  })
  const data = {
    count:movieList.list.length,
    list: movieList.list,
  }
  console.log(movieList, 'movieList');
  console.log(data, 'data');
  
  return movieList;
};
