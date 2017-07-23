/**
 * Created by sailengsi on 2017/4/30.
 */
import {
	Home,
	Content,
	Modules
} from '../../components/';

module.exports = [{
	path: '/club',
	name: '商家管理',
	icon: 'inbox',
	component: Home,
	redirect: '/club/club',
	children: [{
		path: 'club',
		name: '商家管理',
		icon: 'inbox',
		component: Content,
		redirect: '/club/club/list',
		children: [{
			path: 'list',
			name: '商家列表',
			icon: 'reorder',
			component: Modules.Club.Club.List
		},{
		  path: 'edit',
      name: '编辑商家',
      icon: 'edit',
      component: Modules.Club.Club.Edit
    }]
	}]
}];
