import React, { Component } from 'react';
import {
	Row, Col, Card, Avatar, Tag, Carousel, Radio, Input, Button, Divider
} from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from './index.less';
const { Search } = Input;
const tabListNoTitle = [
	{
		key: 'article',
		tab: '全部',
	},
	{
		key: 'app',
		tab: '问答',
	},
	{
		key: 'project',
		tab: '职业',
	},
];

const contentListNoTitle = {
	article: <p>article content</p>,
	app: <p>app content</p>,
	project: <p>project content</p>,
};
const listData = [];
for (let i = 0; i < 23; i++) {
	listData.push({
		href: 'http://ant.design',
		title: `Layui Table 中使用 layerTable.js 实现在表格中展开/折叠面板中显示扩展表格`,
		avatar: 'url("https://user-gold-cdn.xitu.io/2020/3/9/170bd661a52de805?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
		time:
			'一天前',
		creator:
			'chenyi',
	});
}
class Bbs extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			number: 0
		}
	}

	add() {
		this.setState({
			number: this.state.number + 1
		})
	}

	render() {
		return (
			<div className={styles.bbs_index}>
				{/* <div className={styles.menu}></div> */}
				<div className={styles.content}>
					<Row gutter={10}>
						<Col span={18} >
							<Carousel autoplay>
								<div>
									<h3>1</h3>
								</div>
								<div>
									<h3>2</h3>
								</div>
								<div>
									<h3>3</h3>
								</div>
								<div>
									<h3>4</h3>
								</div>
							</Carousel>
							<Card
								style={{ width: '100%' }}
								tabList={tabListNoTitle}
								activeTabKey={this.state.noTitleKey}
								tabBarExtraContent={<Radio.Group size="small">
									<Radio.Button value="large">最新</Radio.Button>
									<Radio.Button value="default">最热</Radio.Button>
									<Radio.Button value="small">精华</Radio.Button>
								</Radio.Group>}
								onTabChange={key => {

								}}
							>

								{listData.map(v => {
									return <div className={styles.list}>
										<Avatar shape="square" size={50} style={{ width: '60px' }} icon={<UserOutlined />} />
										<div className={styles.info}>
											<div className={styles.title}>
												<div><Tag color="magenta">分享</Tag>
													{v.title}
												</div>
												<div>
													<Tag color="#2db7f5">置顶</Tag>

												</div>
											</div>
											<div className={styles.subtitle}>
												<div className={styles.subtitle_left}>
													<div className={styles.subtitle}>{v.creator}</div>
													<div className={styles.subtitle}>{v.time}</div>
												</div>
												<div>
													<MessageOutlined />
													12
											</div>
											</div>
										</div>
									</div>
								})}

							</Card>
						</Col>
						<Col span={6}>
							<Card style={{ marginBottom: '15px' }}>

								<div>今天，你的网站遇到什么问题呢？</div>
								<Button type='primary' block style={{ marginTop: '15px' }}>

									发表新帖
        </Button>

							</Card>
							<Card title="本周热点" extra={<a href="#">更多</a>} style={{ width: 300 }}>

								<p>Card content</p>
								<p>Card content</p>
								<p>Card content</p>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}
export default Bbs;