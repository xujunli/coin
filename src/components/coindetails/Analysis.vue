<template>
    <div class="analysis">
      <Tabs value="name1" :animated="false">
        <TabPane label="比分" name="name1">
          <div class="scores">
            <div class="title">
              <!--<h2>Bitcoin fundamental analysis & ratings » detailed scores</h2>-->
              <h2>{{ $t("message.hello") }}</h2>
              <p class="t-a-c">The following scores are algorithmicically calculated multiple times a day based on manually and automatically collected publicly verifiable, objective data.</p>
            </div>
            <div class="bd">
              <h3>
                <span>开放式购买渠道 {{ scores.channels.web.point + scores.channels.contactWay.point }} %</span>
              </h3>
              <Collapse simple>
                <Panel name="1">
                  <div class="list">
                    <p class="subject">能够通过以下方式联系公司：Slack,Telegram或Discord</p>
                    <p class="point">{{scores.channels.web.point}}分</p>
                    <p class="max">MAX 70</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                      <ul>
                        <li>
                          <span>Slack：</span>
                          <a :href="item" v-for="(item,index) in scores.channels.web.slack" :key="index">{{item}}</a>
                        </li>
                        <li>
                          <span>电报：</span>
                          <a :href="item" v-for="(item,index) in scores.channels.web.telegram" :key="index">{{item}}</a>
                        </li>
                        <li>
                          <span>其他：</span>
                          <a :href="item" v-for="(item,index) in scores.channels.web.other" :key="index">{{item}}</a>
                        </li>
                      </ul>
                    </Col>
                    <Col span="12">
                      <ul>
                        <li><span>70</span>任何一个不是空的</li>
                        <li><span>0</span>都是空的</li>
                      </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="2">
                  <div class="list">
                    <p class="subject">能够通过以下方式联系公司：联系表格或电子邮件</p>
                    <p class="point">{{scores.channels.contactWay.point}}分</p>
                    <p class="max">MAX 30</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                      <ul>
                        <li>
                          <span>电子邮件：</span>
                          <a :href="item" v-for="(item,index) in scores.channels.contactWay.email" :key="index">{{item}}</a>
                        </li>

                        <li>
                          <span>网站上的联系表格：</span>
                          <a :href="item" v-for="(item,index) in scores.channels.contactWay.website" :key="index">{{item}}</a>
                        </li>
                      </ul>
                    </Col>
                    <Col span="12">
                      <ul>
                        <li><span>30</span>所有都不是空的</li>
                        <li><span>0</span>都是空的</li>
                      </ul>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
              <h3>
                <span>社交媒体活动 {{scores.mediaActivity.tenDay + scores.mediaActivity.facebook + scores.mediaActivity.twitter + scores.mediaActivity.youtube + scores.mediaActivity.youtubeSevenDay}}</span>
              </h3>
              <Collapse simple>
                <Panel name="1">
                  <div class="list">
                    <p class="subject">他们每10天或更短时间发布一次博客吗？</p>
                    <p class="point">{{scores.mediaActivity.tenDay}}分</p>
                    <p class="max">MAX 50</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>他们是否每10天或更短时间在博客上发布一些内容</p>
                        <p>{{scores.mediaActivity.tenDay === 0 ? '否': '是'}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>50</span>是</li>
                      <li><span>0</span>否</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="2">
                  <div class="list">
                    <p class="subject">他们每3天或更短时间发布一次Facebook吗？</p>
                    <p class="point">{{scores.mediaActivity.facebook}}分</p>
                    <p class="max">MAX 20</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>他们每3天或更短时间发布一次Facebook吗？</p>
                        <p>{{scores.mediaActivity.facebook === 0 ? '否': '是'}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>20</span>是</li>
                      <li><span>0</span>否</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="3">
                  <div class="list">
                    <p class="subject">他们每3天或更短时间发布一次Twitter吗？</p>
                    <p class="point">{{scores.mediaActivity.twitter}}分</p>
                    <p class="max">MAX 20</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>他们每3天或更短时间发布一次Twitter吗？</p>
                        <p>{{scores.mediaActivity.twitter === 0 ? '否': '是'}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>20</span>是</li>
                      <li><span>0</span>否</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="4">
                  <div class="list">
                    <p class="subject">他们每有YouTube频道吗？</p>
                    <p class="point">{{scores.mediaActivity.youtube}}分</p>
                    <p class="max">MAX 5</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>他们每有YouTube频道吗？</p>
                        <p>{{scores.mediaActivity.youtube === 0 ? '否': '是'}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>5</span>是</li>
                      <li><span>0</span>否</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="5">
                  <div class="list">
                    <p class="subject">他们每7天或更短时间发布一次YouTube吗？</p>
                    <p class="point">{{scores.mediaActivity.youtubeSevenDay}}分</p>
                    <p class="max">MAX 5</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>他们每7天或更短时间发布一次YouTube吗？</p>
                        <p>{{scores.mediaActivity.youtubeSevenDay === 0 ? '否': '是'}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>5</span>是</li>
                      <li><span>0</span>否</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
              <h3>
                <span>品牌知名度 {{ scores.brand.point }} %</span>
              </h3>
              <Collapse simple>
                <Panel name="1">
                  <div class="list">
                    <p class="subject">与其他硬币相比社区规模（Facebook,Twitter,YouTube,Reddit）</p>
                    <p class="point">{{scores.brand.point}}分</p>
                    <p class="max">MAX 100</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                      <ul>
                        <li>
                          <p>有多少人参与了这个项目的社区</p>
                          <p>{{scores.brand.people}}</p>
                        </li>
                      </ul>
                    </Col>
                    <Col span="12">
                      <ul>
                        <li><span>100</span> 99th-percentile</li>
                        <li><span>100</span> 95th-percentile</li>
                        <li><span>100</span> 85th-percentile</li>
                        <li><span>100</span> 50th-percentile</li>
                        <li><span>100</span> 30th-percentile</li>
                        <li><span>100</span> 10th-percentile</li>
                        <li><span>0</span> 0-10th-percentile</li>
                      </ul>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
              <h3>
                <span>产品强度 {{scores.productStrength.status.point + scores.productStrength.openSourced.point + scores.productStrength.roadmap.point + scores.productStrength.age.point + scores.productStrength.whitePaper.point}}</span>
              </h3>
              <Collapse simple>
                <Panel name="1">
                  <div class="list">
                    <p class="subject">产品开发状况（即阶段）</p>
                    <p class="point">{{scores.productStrength.status.point}}分</p>
                    <p class="max">MAX 50</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>这个项目的状态？</p>
                        <p>{{scores.productStrength.status.message}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>50</span>完全正常工作的产品</li>
                      <li><span>40</span>Beta版本</li>
                      <li><span>30</span>Alpha版本</li>
                      <li><span>25</span>原型/MVP</li>
                      <li><span>20</span>仅演示</li>
                      <li><span>10</span>只是一个想法</li>
                      <li><span>0</span>未知</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="2">
                  <div class="list">
                    <p class="subject">他们开源了他们的代码吗？</p>
                    <p class="point">{{scores.productStrength.openSourced.point}}分</p>
                    <p class="max">MAX 20</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>是或否？</p>
                        <p>{{scores.productStrength.openSourced.point === 0 ? '否': '是'}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>20</span>是</li>
                      <li><span>0</span>否</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="3">
                  <div class="list">
                    <p class="subject">他们是否发布了产品路线图？</p>
                    <p class="point">{{scores.productStrength.roadmap.point}}分</p>
                    <p class="max">MAX 5</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>产品路线图？</p>
                        <p>{{scores.productStrength.roadmap.point === 0 ? '否': '是'}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>5</span>是</li>
                      <li><span>0</span>否</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="4">
                  <div class="list">
                    <p class="subject">他们的产品路线图是最新的吗？</p>
                    <p class="point">{{scores.productStrength.newRoadmap.point}}分</p>
                    <p class="max">MAX 5</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>产品路线图是否更新到目前为止？</p>
                        <p>{{scores.productStrength.newRoadmap.point === 0 ? '否': '是'}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>5</span>是</li>
                      <li><span>0</span>否</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="5">
                  <div class="list">
                    <p class="subject">产品发布日期？</p>
                    <p class="point">{{scores.productStrength.age.point}}分</p>
                    <p class="max">MAX 10</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>他们每7天或更短时间发布一次YouTube吗？</p>
                        <p>{{scores.productStrength.age.time}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>10</span>5年以上</li>
                      <li><span>8</span>1年以上</li>
                      <li><span>6</span>6+月</li>
                      <li><span>4</span>3+月</li>
                      <li><span>2</span>1+月</li>
                      <li><span>1</span><1个月</li>
                      <li><span>0</span>未来</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="6">
                  <div class="list">
                    <p class="subject">他们发表了白皮书吗？</p>
                    <p class="point">{{scores.productStrength.whitePaper.point}}分</p>
                    <p class="max">MAX 10</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>白皮书</p>
                        <a :href="scores.productStrength.whitePaper.link">{{scores.productStrength.whitePaper.link}}</a>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>10</span>是</li>
                      <li><span>0</span>否</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
              <h3>
                <span>硬币强度 {{scores.coinStrength.transactions.point + scores.coinStrength.coinEmission.point + scores.coinStrength.coinAmongVolume.point + scores.coinStrength.coinAmongMarket.point + scores.coinStrength.coinOutperformed.point}}</span>
              </h3>
              <Collapse simple>
                <Panel name="1">
                  <div class="list">
                    <p class="subject">产品开发状况（即阶段）</p>
                    <p class="point">{{scores.coinStrength.transactions.point}}分</p>
                    <p class="max">MAX 8</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>每秒交易数</p>
                        <p>{{scores.coinStrength.transactions.point}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>8</span> 95th-percentile</li>
                      <li><span>6</span> 75th-percentile</li>
                      <li><span>4</span> 50th-percentile</li>
                      <li><span>2</span> 30th-percentile</li>
                      <li><span>1</span> 15th-percentile</li>
                      <li><span>0</span> 0-10th-percentile</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="2">
                  <div class="list">
                    <p class="subject">他们的硬币发放率是多少？</p>
                    <p class="point">{{scores.coinStrength.coinEmission.point}}分</p>
                    <p class="max">MAX 30</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>发放率？</p>
                        <p>{{scores.coinStrength.coinEmission.message}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>30</span>创建新令牌</li>
                      <li><span>30</span>通过令牌刻录进行通货紧缩</li>
                      <li><span>15</span>按照网络活动量的比例发出</li>
                      <li><span>15</span>第二轮可能发生</li>
                      <li><span>0</span>公司可以决定</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="3">
                  <div class="list">
                    <p class="subject">该硬币是过去3个月中交易量最大的硬币吗？</p>
                    <p class="point">{{scores.coinStrength.coinAmongVolume.point}}分</p>
                    <p class="max">MAX 17</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>过去3个月平均交易量</p>
                        <p>{{scores.coinStrength.coinAmongVolume.number}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>17</span> 99th-percentile</li>
                      <li><span>16</span> 95th-percentile</li>
                      <li><span>14</span> 85th-percentile</li>
                      <li><span>10</span> 50th-percentile</li>
                      <li><span>7</span> 30th-percentile</li>
                      <li><span>4</span> 10th-percentile</li>
                      <li><span>0</span> 0-10th-percentile</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="4">
                  <div class="list">
                    <p class="subject">在市值方面，硬币是过去3个月中交易量最大的硬币吗？</p>
                    <p class="point">{{scores.coinStrength.coinAmongMarket.point}}分</p>
                    <p class="max">MAX 25</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>过去3个月平均市值</p>
                        <p>{{scores.coinStrength.coinAmongMarket.number}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>25</span> 99th-percentile</li>
                      <li><span>24</span> 95th-percentile</li>
                      <li><span>22</span> 85th-percentile</li>
                      <li><span>18</span> 50th-percentile</li>
                      <li><span>9</span> 30th-percentile</li>
                      <li><span>5</span> 10th-percentile</li>
                      <li><span>0</span> 0-10th-percentile</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="5">
                  <div class="list">
                    <p class="subject">自开始交易以来，硬币的表现是否优于其他市场趋势？</p>
                    <p class="point">{{scores.coinStrength.coinOutperformed.point}}分</p>
                    <p class="max">MAX 20</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>市值占市场总增长的</p>
                        <p>{{scores.coinStrength.coinOutperformed.number}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>20</span> 99th-percentile</li>
                      <li><span>18</span> 95th-percentile</li>
                      <li><span>16</span> 85th-percentile</li>
                      <li><span>8</span> 50th-percentile</li>
                      <li><span>6</span> 30th-percentile</li>
                      <li><span>4</span> 10th-percentile</li>
                      <li><span>0</span> 0-10th-percentile</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
              <h3>
                <span>GitHub {{scores.github.community.point + scores.github.activity.point}}</span>
              </h3>
              <Collapse simple>
                <Panel name="1">
                  <div class="list">
                    <p class="subject">与其他硬币相比，GitHub社区规模</p>
                    <p class="point">{{scores.github.community.point}}分</p>
                    <p class="max">MAX 40</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>GitHub社区规模</p>
                        <p>{{scores.github.community.number}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>40</span> 90th-percentile</li>
                      <li><span>30</span> 67th-percentile</li>
                      <li><span>20</span> 57th-percentile</li>
                      <li><span>15</span> 53th-percentile</li>
                      <li><span>10</span> 40th-percentile</li>
                      <li><span>5</span> 10th-percentile</li>
                      <li><span>0</span> 0-10th-percentile</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
                <Panel name="2">
                  <div class="list">
                    <p class="subject">GitHub活动频次？</p>
                    <p class="point">{{scores.github.activity.point}}分</p>
                    <p class="max">MAX 60</p>
                  </div>
                  <Row slot="content">
                    <Col span="12">
                    <ul>
                      <li>
                        <p>GitHub活动频次</p>
                        <p>{{scores.github.activity.number}}</p>
                      </li>
                    </ul>
                    </Col>
                    <Col span="12">
                    <ul>
                      <li><span>60</span> 90th-percentile</li>
                      <li><span>50</span> 67th-percentile</li>
                      <li><span>40</span> 57th-percentile</li>
                      <li><span>30</span> 53th-percentile</li>
                      <li><span>20</span> 40th-percentile</li>
                      <li><span>10</span> 10th-percentile</li>
                      <li><span>0</span> 0-10th-percentile</li>
                    </ul>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
            </div>
          </div>
        </TabPane>
        <TabPane label="硬币事实和数据" name="name2">
          <div class="facts">
            <h2>比特币的事实和数据</h2>
            <div class="item-box">
              <div class="item">
                <div class="title">名称</div>
                <div class="info">Bitcoin</div>
              </div>
              <div class="item">
                <div class="title">交易代码</div>
                <div class="info">BTC</div>
              </div>
              <div class="item">
                <div class="title">循环供应</div>
                <div class="info">17225450</div>
              </div>
              <div class="item">
                <div class="title">最大供应量</div>
                <div class="info">21000000</div>
              </div>
              <div class="item">
                <div class="title">硬币发行价</div>
                <div class="info">$ 135.30</div>
              </div>
              <div class="item">
                <div class="title">硬币在ICO中分发</div>
                <div class="info">$ 135.30</div>
              </div>
              <div class="item">
                <div class="title">排放率</div>
                <div class="info">没有创建新令牌</div>
              </div>
              <div class="item">
                <div class="title">Blockchain</div>
                <div class="info">Blockchain</div>
              </div>
              <div class="item">
                <div class="title">共识方法</div>
                <div class="info">工作证明</div>
              </div>
              <div class="item">
                <div class="title">算法</div>
                <div class="info">SHA256</div>
              </div>
              <div class="item">
                <div class="title">按处理的时间</div>
                <div class="info">10</div>
              </div>
              <div class="item">
                <div class="title">每秒事物数</div>
                <div class="info">7</div>
              </div>
              <div class="item">
                <div class="title">硬币是否可以</div>
                <div class="info">是</div>
              </div>
              <div class="item">
                <div class="title">类型</div>
                <div class="info">硬币</div>
              </div>
            </div>
            <h3>产品详情</h3>
            <div class="item-box">
              <div class="item">
                <div class="title">开源</div>
                <div class="info">是</div>
              </div>
              <div class="item">
                <div class="title">Github链接</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">社区规模</div>
                <div class="info">889807</div>
              </div>
              <div class="item">
                <div class="title">项目状态</div>
                <div class="info">完全工作的产品</div>
              </div>
              <div class="item">
                <div class="title">产品路线图</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">白皮书</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">常见问题</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">探索者1</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
            </div>
            <h3>团队</h3>
            <div class="item-box">
              <div class="item">
                <div class="title">链接到团队页面</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">每个团队成员在网站上的传记</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">团队成员是否有链接到他们社交媒体的资料</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
            </div>
            <h3>CEO</h3>
            <div class="item-box">
              <div class="item">
                <div class="title">名称</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">年龄</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">linkedln</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">CEO在他的Linkedln个人资料中为这家公司工作</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">CEO以前的公司/成就</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">多年的商业经验</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">多年担任CEO or COO 的经验/div></div>
                <div class="info">0</div>
              </div>
              <div class="item">
                <div class="title">之前管理过一百万美元以上的公司</div>
                <div class="info">没有</div>
              </div>
            </div>
            <h3>CTO</h3>
            <div class="item-box">
              <div class="item">
                <div class="title">名称</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">年龄</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">linkedln</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">GitHub链接</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">你能看到这个CTO在他的GITHUB配置文件中的证明吗</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">多年的开发经验</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">多年担任CTO的经验/div></div>
                <div class="info">0</div>
              </div>
              <div class="item">
                <div class="title">CTO以前的公司/成就</div>
                <div class="info">0</div>
              </div>
              <div class="item">
                <div class="title">参与过一百万美元以上的公司</div>
                <div class="info">没有</div>
              </div>
            </div>
            <h3>团队成员</h3>
            <div class="item-box">
              <div class="item">
                <div class="title">有多少开发人员</div>
                <div class="info">0</div>
              </div>
              <div class="item">
                <div class="title">有多少营销专家</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">团队中是否有测试人员</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">团队总共有多少人</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">团队成员平均年龄</div>
                <div class="info">N/A</div>
              </div>
            </div>
            <h3>董事会成员</h3>
            <div class="item-box">
              <div class="item">
                <div class="title">董事会成员的网站介绍</div>
                <div class="info">没有</div>
              </div>
              <div class="item">
                <div class="title">董事会成员社交媒体链接</div>
                <div class="info">没有</div>
              </div>
              <div class="item">
                <div class="title">董事会成员是否有2名或更多管理者价值数百万美元的项目或公司</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">董事会成员的特别成就</div>
                <div class="info">N/A</div>
              </div>
            </div>
            <h3>公司详情</h3>
            <div class="item-box">
              <div class="item">
                <div class="title">官网</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">电子邮件</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">官网联系方式</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">电话号码</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">Alexa网站流量信息</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">注册地址网站</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">正式注册（已检查）</div>
                <div class="info">没有</div>
              </div>
              <div class="item">
                <div class="title">位置</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">地址</div>
                <div class="info">N/A</div>
              </div>
            </div>
            <h3>社交媒体</h3>
            <div class="item-box">
              <div class="item">
                <div class="title">博客网址</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">他们是否每隔1.5周或更短时间在博客上发布一些内容吗？</div>
                <div class="info">是的（最近的帖子是）9天前</div>
              </div>
              <div class="item">
                <div class="title">Facebook</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">他们是否每隔3天或更短时间在Facebook上发布一些内容吗？</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">Twitter</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">他们是否每隔3天或更短时间在Twitter上发布一些内容吗？</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">Youtube</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
              <div class="item">
                <div class="title">他们是否每周在Youtube上发布一些内容吗？</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">其他</div>
                <div class="info"><a href="https://github.com/bitcoin/">https://github.com/bitcoin/</a></div>
              </div>
            </div>
            <h3>ICO</h3>
            <div class="item-box">
              <div class="item">
                <div class="title">ICO初始价格</div>
                <div class="info">654564</div>
              </div>
              <div class="item">
                <div class="title">销售期</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">硬币分发日期</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">最低投资目标</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">最高投资上限</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">接受的货币</div>
                <div class="info">N/A</div>
              </div>
              <div class="item">
                <div class="title">奖金</div>
                <div class="info">N/A</div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane label="GITHUB开发" name="name3">
          <div class="github">
            <h2>比特币GitHub活动与发展</h2>
            <p>比特币的开发活动概述。图标显示了过去一年的比特币开发/GitHub提交活动，以及他们的简单移动平均线，图标分析。</p>
            <div id="git-box">
              <div id="git-chart"></div>
            </div>
          </div>
        </TabPane>
        <TabPane label="谷歌搜索趋势" name="name4">
          <div class="google">
            <h2>How popular is Bitcoin? / How many people search for Bitcoin on Google?</h2>
            <p>Numbers represent search interest relative to the highest point on the chart for the given region and time. A value of 100 is the peak popularity of the term.</p>
            <div id="g-l-box">
              <div id="g-l-chart"></div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
</template>

<script>
export default {
  name: 'Analysis',
  data () {
    return {
      scores: {
        channels: {
          web: {
            point: 70,
            slack: ['https://bitcoincoreslack.herokuapp.com/'],
            telegram: ['https://bitcoincoreslack.herokuapp.com/'],
            other: ['https://bitcoincoreslack.herokuapp.com/']
          },
          contactWay: {
            point: 30,
            email: ['privacy@bitcoin.org'],
            website: ['privacy@bitcoin.org']
          }
        },
        mediaActivity: {
          tenDay: 0,
          facebook: 0,
          twitter: 0,
          youtube: 5,
          youtubeSevenDay: 0
        },
        brand: {
          point: 100,
          people: 8889809
        },
        productStrength: {
          status: {
            message: 'Fully working product',
            point: 50
          },
          openSourced: {
            point: 0
          },
          roadmap: {
            point: 0
          },
          newRoadmap: {
            point: 5
          },
          age: {
            time: '2009-01-03',
            point: 10,
          },
          whitePaper: {
            link: 'https://bitcoin.org/bitcoin.pdf',
            point: 10,
          }
        },
        coinStrength: {
          transactions: {
            point: 7
          },
          coinEmission: {
            point: 30,
            message: 'No new tokens created'
          },
          coinAmongVolume: {
            point: 17,
            number: 444444444.444,
          },
          coinAmongMarket: {
            point: 25,
            number: 8552224444.444,
          },
          coinOutperformed: {
            point: 0,
            number: '%8552224444.444',
          }
        },
        github: {
          community: {
            point: 40,
            number: 58057
          },
          activity: {
            point: 60,
            number: 584286
          }
        }
      },

    }
  },
  mounted () {
    const that = this;
    that.intCharts('git-box','git-chart',{
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '2%',
        right: '2%'
      },
      xAxis: [
        {
          type: 'category',
          data: ['2018/07/05','2018/07/06','2018/07/07','2018/07/08','2018/07/09','2018/07/10','2018/07/11','2018/07/12','2018/07/13','2018/07/14','2018/07/15','2018/07/16','2018/07/17','2018/07/18','2018/07/19','2018/07/20','2018/07/21','2018/07/22','2018/07/23','2018/07/24'],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name:'Commits',
          type:'line',
          data:[5855, 8522, 16982, 5000, 12333, 18252,18996, 8000, 15366, 56986,18996, 8000, 15366, 56986, 19560, 12000,5855, 8522, 16982, 5000],
          areaStyle: {

          }
        },
        {
          name:'SMA(49)',
          type:'line',
          data:[18996, 8000, 15366, 56986, 19560, 12000,5855, 8522, 16982, 5000,8522, 16982, 5000, 12333, 18252,18996, 8000, 15366, 56986,18996]
        }
      ]
    });
    that.intCharts('g-l-box','g-l-chart',{
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    })
  },
  methods: {
    intCharts: function (a,b,e) {
      const that = this;
      let MapContainer = document.getElementById(a).offsetWidth;
      let Chart = document.getElementById(b);
      Chart.style.width = MapContainer + 'px';
      if(MapContainer < 768) {
        Chart.style.height = MapContainer/4*3 + 'px';
      } else {
        Chart.style.height = MapContainer/5*2 + 'px';
      }
      let myChart = this.$echarts.init(Chart);
      myChart.setOption(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .analysis {
    padding: 0 20px;
    background-color: #fff
  }
  .scores .title h2 {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    margin: 10px 0 0;
  }
  .scores .title p {
    margin: 20px 0 30px;
    text-align: center;
    font-size: 14px;
  }
  .scores .list {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    flex: 1
  }
  .scores .bd h3 span {
    display: block;
    padding: 5px 0;
    background: #161623;
    text-align: center;
    color: #fff
  }
  .facts h2 {
    margin: 20px 0 20px;
    text-align: center;
  }
  .facts h3 {
    margin: 20px 0 10px;
  }
  .facts .item {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .facts .item .title {
    padding: 0 10px;
    width: 300px;
    height: 30px;
    line-height: 30px;
    background: #e3d090;
    text-align: right;
    font-size: 13px;
    color: #fff
  }
  .facts .item .info {
    flex: 1;
    padding: 0 10px;
    height: 30px;
    line-height: 29px;
    border-bottom: 1px solid #1BABA1;
    font-size: 13px;
    color: #313534;
  }
  .github h2 {
    margin: 20px 0 20px;
    text-align: center;
  }
  .github p {
    text-align: center;
    font-size: 13px;
  }
  .google h2 {
    margin: 20px 0 20px;
    text-align: center;
  }
  .google p {
    text-align: center;
    font-size: 13px;
  }
  @media (max-width: 767px){
    .analysis {
      padding: 0;
      background-color: #fff
    }
  }
</style>
