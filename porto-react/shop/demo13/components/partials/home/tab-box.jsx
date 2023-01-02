import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import Reveal from 'react-awesome-reveal';

import FeaturedCollection from "../../../components/partials/home/featured-collection";
import NewCollection from "../../../components/partials/home/new-collection";

import { fadeIn } from '../../../utils/data/keyframes'

export default function TabBox(props) {
    const { featured, newarrived, loading } = props;

    return (
        <div className="home-product-tabs">
            <Tabs selectedTabClassName="active" selectedTabPanelClassName="active show" defaultIndex={0} className="tab">
                <TabList className="nav nav-tabs mb-2" role="tablist">
                    <Tab className="nav-item">
                        <span className="nav-link">Featured Products</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Latest Products</span>
                    </Tab>
                </TabList>
                <div className="tab-content">
                    <TabPanel className="tab-pane fade">
                        <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
                            <div className="row">
                                <FeaturedCollection product={featured} loading={loading} />
                            </div>
                        </Reveal>
                    </TabPanel>

                    <TabPanel className="tab-pane fade">
                        <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
                            <div className="row">
                                <NewCollection product={newarrived} loading={loading} />
                            </div>
                        </Reveal>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}