import {
	NAV_ITEM_TYPE_ITEM
} from 'constants/navigation.constant'

const navigationConfig = [
	{
		key: 'products',
		path: '/products',
		title: 'Danh sách sản phẩm',
		translateKey: 'nav.products',
		icon: 'phone',
		type: NAV_ITEM_TYPE_ITEM,
		authority: ['admin', 'user'],
		subMenu: []
	},
	{
		key: 'addproduct',
		path: '/products/add',
		title: 'Thêm sản phẩm',
		translateKey: 'nav.products',
		icon: 'add',
		type: NAV_ITEM_TYPE_ITEM,
		authority: ['admin'],
		subMenu: []
	}
]

export default navigationConfig