import React from "react";
import "./index.css";

import Vh2 from "../vh2";
import Vh3 from '../vh3'
import Musicbox from "../musicbox";
import Singerbox from '../singerbox'
import Zbbox from '../zbbox'
import AlbumList from '../albumList'
import SingList from '../singList'

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="content">
        <div className="content-wrapper">
          <div className="sing-warpper">
            <Vh2 route={{path: "/discover/playlist",name: "热门推荐"}} />
            <div className="box-wrapper">
              <Musicbox />
              <Musicbox />
              <Musicbox />
              <Musicbox />
              <Musicbox />
              <Musicbox />
            </div>
            <div className="grap"></div>
            <Vh2 route={{path: "/discover/album",name: "新碟上架"}} />

            <AlbumList></AlbumList>

            <Vh2 route={{path: "/discover/toplist",name: "榜单"}} />

            <SingList></SingList>


          </div>
          <div className="login-content">
            <div className="login-form-control">
              <p className="login-note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
              <a href="/#" className="btn-default">用户登录</a>
            </div>
            <div className="n-singer">
              <Vh3 title={{ title: '入驻歌手', more: true }}></Vh3>
              <div className="n-singer-list">
                <Singerbox singer={{ img: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', name: '张惠妹aMEI', info: '台湾歌手张惠妹' }}></Singerbox>
                <Singerbox singer={{ img: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', name: '张惠妹aMEI', info: '台湾歌手张惠妹' }}></Singerbox>
                <Singerbox singer={{ img: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', name: '张惠妹aMEI', info: '台湾歌手张惠妹' }}></Singerbox>
                <Singerbox singer={{ img: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', name: '张惠妹aMEI', info: '台湾歌手张惠妹' }}></Singerbox>
                <Singerbox singer={{ img: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', name: '张惠妹aMEI', info: '台湾歌手张惠妹' }}></Singerbox>
              </div>
              <div className="apply-to-singer">
                <a href="/#">申请成为网易音乐人</a>
              </div>
              <div className="zb-wrapper">
                <Vh3 title={{ title: '热门主播', more: false }}></Vh3>
                <div className="zb-list">
                  <Zbbox zb={{ img: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40', name: '陈立', info: '心理学家、美食家陈立教授' }}></Zbbox>
                  <Zbbox zb={{ img: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40', name: '陈立', info: '心理学家、美食家陈立教授' }}></Zbbox>
                  <Zbbox zb={{ img: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40', name: '陈立', info: '心理学家、美食家陈立教授' }}></Zbbox>
                  <Zbbox zb={{ img: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40', name: '陈立', info: '心理学家、美食家陈立教授' }}></Zbbox>
                  <Zbbox zb={{ img: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40', name: '陈立', info: '心理学家、美食家陈立教授' }}></Zbbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
