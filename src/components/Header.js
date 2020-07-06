import { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import getConfig from 'next/config';
import { color_primary } from '../constants/CustomTheme';
import { Button, Input, Menu, Icon, Dropdown, Avatar, Tooltip } from 'antd';
const { Search } = Input;

import { LoginOutlined, EditOutlined } from '@ant-design/icons';
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
const { publicRuntimeConfig: { staticFolder } } = getConfig();
const menus = [
	{
		name: '首页',
		id: 0,
		href: '/',
	},
	{
		name: '课程',
		id: 1,
		href: '/edu',
	},
	{
		name: '社区',
		id: 2,
		href: '/bbs',
	},
	{
		name: '下载',
		id: 3,
		href: '/download',
	},
];
class Header extends Component {
	static propTypes = {
		title: PropTypes.string
	}
	static defaultProps = {
		title: ''
	}
	constructor(props) {
		super(props);
		const { title } = props;
		this.state = { title };
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.title !== prevState.title) {
			return {
				title: nextProps.title
			};
		}
		return null;
	}

	render() {
		const { title } = this.state;
		return (
			<div id='header_bar' className='container'>
				<style jsx>{`
      .container {
        position: sticky;
        display: flex;
        align-items: center;
        top: 0;
        width: 100%;
        height: 60px;
        background-color: #fff;
				z-index: 999;
				border-bottom: #f1eeee solid 1px;
				    background-color: #34495e;
    border-color: #2b3035;
			}
			.sub-container{
				display: flex;
				justify-content: space-between;
				margin:0 auto;
				width:1200px
			}
      .logo-container {

        display: flex;
        justify-content: center;
        align-items: center;
        top: 15px;
        left: 20px;
				cursor: pointer;
				margin-right: 15px;
			}
			.top-menu{
				display: flex;
				justify-content: space-between;
			}
      .sys-name {
        display: inline-block;
        margin-left: 10px;
        font-size: 20px;
        font-weight: 600;
			}
     .sys-menu{
			 cursor:pointer;
			 color: #d7d7d7;
			 padding: 15px;
			 font-size: 17px;
			}
			.sys-menu.active{
				color:#fff
			}
      .logo {
        width: 30px;
        height: 30px;
      }
      .right-container {
        display: flex;
        align-items: center;
			}
			.header {
  height: 64px;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
}

.avatar {
      margin: 20px 8px 20px 0;
      color: #fff;
      background: rgba(255, 255, 255, 0.85);
      vertical-align: top;
    }
 img {
    display: inline-block;
    vertical-align: middle;
	}

  .anticon {
    margin-right: 8px;
  }
 .ant-dropdown-menu-item {
    width: 160px;
  }

    `}</style>
				<div className='sub-container'>
					<div className='top-menu'>
						<Link href='/'>
							<div className='logo-container'>
								<img className='logo' alt='logo' src={`https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg`} />
								<a className='sys-name' >yi-next-dva</a>
							</div>
						</Link>
						{menus.map(v => {
							return <Link href={v.href} key={v.id} >
								<a className={v.id == 1 ? 'sys-menu active' : 'sys-menu'} href={v.href}>{v.name}</a>
							</Link>;
						})}
					</div>
					<div className='right-container'>
						<Search
							placeholder='搜索全站'
							onSearch={value => console.log(value)}

						/>
						{false ? <Dropdown overlay={menu}>
							<span className={`anticon account`}>
								<Avatar
									size='small'
									className='avatar'
									src='22'
									alt='avatar'
								/>
								<span className='name'>11</span>
							</span>
						</Dropdown>
							: <><Button style={{ margin: '0 10px' }} type='primary' >

								登录
          </Button>
								<Button type='danger'>

									注册
            </Button></>}
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
