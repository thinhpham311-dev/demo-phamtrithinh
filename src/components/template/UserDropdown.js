import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Dropdown } from 'components/ui'
import withHeaderItem from 'utils/hoc/withHeaderItem'
import useAuth from 'utils/hooks/useAuth'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'



export const UserDropdown = ({ className }) => {

	// bind this 
	const userInfo = useSelector((state) => state.auth.user)

	const { signOut } = useAuth()

	const UserAvatar = (
		<div className={classNames(className, 'flex items-center gap-2')}>
			<Avatar size={32} shape="circle" src={userInfo.avatar} />
			<div className="hidden md:block">
				<div className="text-xs capitalize">{userInfo.userName}</div>
				<div className="font-bold">{userInfo.authority.join(", ")}</div>
			</div>
		</div>
	)

	return (
		<div>
			<Dropdown menuStyle={{ minWidth: 240 }} renderTitle={UserAvatar} placement="bottom-end">
				<Dropdown.Item variant="header">
					<div className="py-2 px-3 flex items-center gap-2">
						<Avatar shape="circle" src={userInfo.avatar} />
						<div>
							<div className="font-bold text-gray-900 dark:text-gray-100 text-lg">{userInfo.userName}</div>
							<div className="text-xs">{userInfo.email}</div>
							<div className="font-bold">{userInfo.authority.join(", ")}</div>
						</div>
					</div>
				</Dropdown.Item>
				<Dropdown.Item variant="divider" />

				{/* <Dropdown.Item variant="divider" /> */}
				<Dropdown.Item onClick={signOut} eventKey="Sign Out" className="gap-2">
					<span className="text-xl opacity-50">
						<HiOutlineLogout />
					</span>
					<span>Đăng xuất</span>
				</Dropdown.Item>
			</Dropdown>
		</div>
	)
}

export default withHeaderItem(UserDropdown)
