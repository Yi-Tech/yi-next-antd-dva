import React, { Component } from 'react';
import {
  Row, Col, Card, List, Tag, Carousel, Radio, Input, Pagination, Divider
} from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';
import Link from 'next/link';
import AvatarList from '../../components/AvatarList';
import moment from 'moment';
import Ellipsis from '../../components/Ellipsis';
import styles from './index.less';
const { Search } = Input;
const list = [{ "id": "fake-list-0", "owner": "付小小", "title": "Alipay", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png", "cover": "https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png", "status": "active", "percent": 73, "logo": "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png", "href": "https://ant.design", "updatedAt": "2020-03-21T12:53:15.037Z", "createdAt": "2020-03-21T12:53:15.037Z", "subDescription": "那是一种内在的东西， 他们到达不了，也无法触及的", "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。", "activeUser": 115770, "newUser": 1071, "star": 189, "like": 146, "message": 13, "content": "段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。", "members": [{ "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png", "name": "曲丽丽", "id": "member1" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png", "name": "王昭君", "id": "member2" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png", "name": "董娜娜", "id": "member3" }] }, { "id": "fake-list-1", "owner": "曲丽丽", "title": "Angular", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png", "cover": "https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png", "status": "exception", "percent": 96, "logo": "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png", "href": "https://ant.design", "updatedAt": "2020-03-21T10:53:15.037Z", "createdAt": "2020-03-21T10:53:15.037Z", "subDescription": "希望是一个好东西，也许是最好的，好东西是不会消亡的", "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。", "activeUser": 103359, "newUser": 1628, "star": 182, "like": 139, "message": 15, "content": "段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。", "members": [{ "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png", "name": "曲丽丽", "id": "member1" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png", "name": "王昭君", "id": "member2" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png", "name": "董娜娜", "id": "member3" }] }, { "id": "fake-list-2", "owner": "林东东", "title": "Ant Design", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png", "cover": "https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png", "status": "normal", "percent": 97, "logo": "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png", "href": "https://ant.design", "updatedAt": "2020-03-21T08:53:15.037Z", "createdAt": "2020-03-21T08:53:15.037Z", "subDescription": "生命就像一盒巧克力，结果往往出人意料", "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。", "activeUser": 192141, "newUser": 1737, "star": 183, "like": 140, "message": 20, "content": "段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。", "members": [{ "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png", "name": "曲丽丽", "id": "member1" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png", "name": "王昭君", "id": "member2" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png", "name": "董娜娜", "id": "member3" }] }, { "id": "fake-list-3", "owner": "周星星", "title": "Ant Design Pro", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png", "cover": "https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png", "status": "active", "percent": 68, "logo": "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png", "href": "https://ant.design", "updatedAt": "2020-03-21T06:53:15.037Z", "createdAt": "2020-03-21T06:53:15.037Z", "subDescription": "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆", "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。", "activeUser": 189908, "newUser": 1209, "star": 122, "like": 159, "message": 17, "content": "段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。", "members": [{ "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png", "name": "曲丽丽", "id": "member1" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png", "name": "王昭君", "id": "member2" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png", "name": "董娜娜", "id": "member3" }] }, { "id": "fake-list-4", "owner": "吴加好", "title": "Bootstrap", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png", "cover": "https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png", "status": "exception", "percent": 67, "logo": "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png", "href": "https://ant.design", "updatedAt": "2020-03-21T04:53:15.037Z", "createdAt": "2020-03-21T04:53:15.037Z", "subDescription": "那时候我只会想自己想要什么，从不想自己拥有什么", "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。", "activeUser": 100667, "newUser": 1984, "star": 145, "like": 104, "message": 20, "content": "段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。", "members": [{ "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png", "name": "曲丽丽", "id": "member1" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png", "name": "王昭君", "id": "member2" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png", "name": "董娜娜", "id": "member3" }] }, { "id": "fake-list-5", "owner": "朱偏右", "title": "React", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png", "cover": "https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png", "status": "normal", "percent": 56, "logo": "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png", "href": "https://ant.design", "updatedAt": "2020-03-21T02:53:15.037Z", "createdAt": "2020-03-21T02:53:15.037Z", "subDescription": "那是一种内在的东西， 他们到达不了，也无法触及的", "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。", "activeUser": 113302, "newUser": 1899, "star": 121, "like": 127, "message": 18, "content": "段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。", "members": [{ "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png", "name": "曲丽丽", "id": "member1" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png", "name": "王昭君", "id": "member2" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png", "name": "董娜娜", "id": "member3" }] }, { "id": "fake-list-6", "owner": "鱼酱", "title": "Vue", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png", "cover": "https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png", "status": "active", "percent": 97, "logo": "https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png", "href": "https://ant.design", "updatedAt": "2020-03-21T00:53:15.037Z", "createdAt": "2020-03-21T00:53:15.037Z", "subDescription": "希望是一个好东西，也许是最好的，好东西是不会消亡的", "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。", "activeUser": 114695, "newUser": 1656, "star": 157, "like": 193, "message": 17, "content": "段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。", "members": [{ "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png", "name": "曲丽丽", "id": "member1" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png", "name": "王昭君", "id": "member2" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png", "name": "董娜娜", "id": "member3" }] }, { "id": "fake-list-7", "owner": "乐哥", "title": "Webpack", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png", "cover": "https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png", "status": "exception", "percent": 80, "logo": "https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png", "href": "https://ant.design", "updatedAt": "2020-03-20T22:53:15.037Z", "createdAt": "2020-03-20T22:53:15.037Z", "subDescription": "生命就像一盒巧克力，结果往往出人意料", "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。", "activeUser": 160025, "newUser": 1808, "star": 112, "like": 179, "message": 15, "content": "段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。", "members": [{ "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png", "name": "曲丽丽", "id": "member1" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png", "name": "王昭君", "id": "member2" }, { "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png", "name": "董娜娜", "id": "member3" }] }];


class Edu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  cardList = () => list ? (
    <List
      rowKey='id'
      // loading={loading}
      grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <Card
            className={styles.card}
            hoverable
            cover={<img alt={item.title} src={item.cover} />}
          >
            <Card.Meta
              title={<a>{item.title}</a>}
              description={<Ellipsis lines={2}>{item.subDescription}</Ellipsis>}
            />
            <div className={styles.cardItemContent}>
              <span>{moment(item.updatedAt).fromNow()}</span>
              <div className={styles.avatarList}>
                <AvatarList size='mini'>
                  {item.members.map((member, i) => (
                    <AvatarList.Item
                      key={`${item.id}-avatar-${i}`}
                      src={member.avatar}
                      tips={member.name}
                    />
                  ))}
                </AvatarList>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  ) : null;
  add() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (
      <div className={styles.edu}>
        <Card style={{ margin: '15px auto', width: '1200px' }}>
          <div>

          </div>
          <Divider dashed />
        </Card>
        {/* <div className={styles.menu}></div> */}
        <div className={styles.content}>
          {this.cardList()}
        </div>
        <Pagination defaultCurrent={1} total={50} style={{ textAlign: 'center' }} size={'large'} />
      </div>
    );
  }
}
export default Edu;
