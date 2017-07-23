module.exports = [
  {
    name:'获取商家列表',
    method:'selectClub',
    path:'/club',
    type:'get',
  },
  {
    name:'添加/修改商家列表',
    method:'saveClub',
    path:'/club',
    type:'put',
  },
  {
    name:'获取商家详细信息',
    method:'getClub',
    path:'/club/_get',
    type: 'get'
  }
];
