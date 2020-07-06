import React, { Component } from 'react';
import Link from 'next/link';
import { Layout, Menu, Card, Radio } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { List, Avatar } from 'antd';
// import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
const itemRender = (current, type, originalElement) => {
	if (type === 'page') {
		return <Link href={`/list?page=${current}`} as={`/list/${current}`} ><a href={`${current}`} > {current}</a ></Link>;
	}
	return originalElement;
}
const listData = [];
for (let i = 0; i < 23; i++) {
	listData.push({
		href: 'http://ant.design',
		title: `ant design part ${i}`,
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		description:
			'Ant Design, a design language for background applications, is refined by Ant UED Team.',
		content:
			'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
	});
}

const IconText = ({ icon, text }) => (
	<span>
		{React.createElement(icon, { style: { marginRight: 8 } })}
		{text}
	</span>
);
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class ListItem extends Component {
	render() {
		return (
			<>
				<style >{`
      .site-layout-background {
					background: #fff;
				}
				.salesCard {
  .salesBar {
    padding: 0 0 32px 32px;
  }
  .salesRank {
    padding: 0 32px 32px 72px;
  }
  :global {
    .ant-tabs-bar {
      padding-left: 16px;
      .ant-tabs-nav .ant-tabs-tab {
        padding-top: 16px;
        padding-bottom: 14px;
        line-height: 24px;
      }
    }
    .ant-tabs-extra-content {
      padding-right: 24px;
      line-height: 55px;
    }
    .ant-card-head {
      position: relative;
    }
    .ant-card-head-title {
      align-items: normal;
    }
  }
}
    `}</style>
				<Layout style={{ width: '1200px', margin: '0 auto', marginTop: '15px' }}>


					<Layout className='site-layout-background' style={{ padding: '24px 0' }}>
						<Sider className='site-layout-background' width={200}>
							<Menu
								mode='vertical'

								style={{ height: '100%' }}
							>
								<SubMenu
									key='sub1'
									title={
										<span>
											{/* <UserOutlined /> */}
											subnav 1
										</span>
									}
								>
									<Menu.Item key='1'>	<Link href='/list'><a href='/'>option1</a></Link></Menu.Item>
									<Menu.Item key='2'>option2</Menu.Item>
									<Menu.Item key='3'>option3</Menu.Item>
									<Menu.Item key='4'>option4</Menu.Item>
								</SubMenu>
								<SubMenu
									key='sub2'
									title={
										<span>
											{/* <LaptopOutlined /> */}
											subnav 2
				            </span>
									}
								>
									<Menu.Item key='5'>option5</Menu.Item>
									<Menu.Item key='6'>option6</Menu.Item>
									<Menu.Item key='7'>option7</Menu.Item>
									<Menu.Item key='8'>option8</Menu.Item>
								</SubMenu>
								<SubMenu
									key='sub3'
									title={
										<span>
											{/* <NotificationOutlined /> */}
											subnav 3
				            </span>
									}
								>
									<Menu.Item key='9'>option9</Menu.Item>
									<Menu.Item key='10'>option10</Menu.Item>
									<Menu.Item key='11'>option11</Menu.Item>
									<Menu.Item key='12'>option12</Menu.Item>
								</SubMenu>
							</Menu>
						</Sider>
						<Content style={{ padding: '0 24px', minHeight: 280 }}>
							<Card

								className="salesCard"
								bordered={false}
								title={
									'	100条记录'
								}
								bodyStyle={{ padding: 24 }}
								extra={
									<div className="salesCardExtra">
										{/* {dropdownGroup} */}
										<div className='salesTypeRadio'>
											<Radio.Group value={'all'} >
												<Radio.Button value="all">
													最新
												</Radio.Button>
												<Radio.Button value="online">
													最热门
												</Radio.Button>

											</Radio.Group>
										</div>
									</div>
								}
								style={{ marginTop: -10 }}
							>
								<List
									itemLayout='vertical'
									size='large'
									pagination={{
										itemRender: itemRender,
										onChange: page => {
											console.log(page);
										},
										pageSize: 3,
									}}
									dataSource={listData}
									footer={
										<div>
											<b>ant design</b> footer part
				          </div>
									}
									renderItem={item => (
										<List.Item
											key={item.title}
											actions={[
												// <IconText icon={StarOutlined} text='156' key='list-vertical-star-o' />,
												// <IconText icon={LikeOutlined} text='156' key='list-vertical-like-o' />,
												// <IconText icon={MessageOutlined} text='2' key='list-vertical-message' />,
											]}
										// extra={
										// 	<img
										// 		width={272}
										// 		alt='logo'
										// 		src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
										// 	/>
										// }
										>
											<List.Item.Meta
												avatar={<Avatar src={item.avatar} />}
												title={<a href={'/list/detail'}>{item.title}</a>}
												description={item.description}
											/>
											{item.content}
										</List.Item>
									)}
								/>
							</Card>
						</Content>
					</Layout>


				</Layout>
			</>
		);
	}
}

export default ListItem;